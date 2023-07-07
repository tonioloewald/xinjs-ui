import { Component as WebComponent, elements, xin, vars, xinValue } from 'xinjs'
import { trackMouse } from './track-mouse'

function defaultWidth(
  array: any[],
  prop: string,
  charWidth: number
): number | boolean {
  const example = array.find(
    (item) => item[prop] !== undefined && item[prop] !== null
  )
  if (example !== undefined) {
    const value = example[prop]
    switch (typeof value) {
      case 'string':
        if (value.match(/^\d+(\.\d+)?$/)) {
          return 6 * charWidth
        } else if (value.includes(' ')) {
          return 20 * charWidth
        } else {
          return 12 * charWidth
        }
      case 'number':
        return 6 * charWidth
      case 'boolean':
        return 5 * charWidth
      case 'object':
        return false
      default:
        return 8 * charWidth
    }
  }
  return false
}

const { div, span, template } = elements

interface ColumnOptions {
  name?: string
  prop: string
  width: number
  visible?: boolean
  // @ts-expect-error
  headerCell?: () => HTMLElement
  // @ts-expect-error
  dataCell?: () => HTMLElement
}

interface TableData {
  columns?: ColumnOptions[]
  array: any[]
  filteredArray: any[]
  filter?: ArrayFilter
}

type ArrayFilter = (array: any[]) => any[]

const passThru = (array: any[]) => array

class DataTable extends WebComponent {
  value: TableData = {
    array: [],
    filteredArray: [],
  }
  charWidth = 15
  rowHeight = 30
  minColumnWidth = 30

  constructor() {
    super()

    this.initAttributes('rowHeight', 'charWidth', 'minColumnWidth')
  }

  get filter(): ArrayFilter {
    return typeof this.value.filter === 'function'
      ? this.value.filter
      : passThru
  }

  get columns(): ColumnOptions[] {
    if (!Array.isArray(this.value.columns)) {
      const { array } = this.value
      this.value.columns = Object.keys(array[0] || {}).map((prop: string) => {
        const width = defaultWidth(array, prop, this.charWidth)
        return {
          name: prop.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleLowerCase(),
          prop,
          visible: width !== false,
          width: width ? width : 0,
        } as ColumnOptions
      })
    }
    return this.value.columns
  }

  get visibleColumns(): ColumnOptions[] {
    return this.columns.filter((c) => c.visible !== false)
  }

  content = null

  getColumn(event: Event): ColumnOptions | undefined {
    // @ts-expect-error
    const x = event.clientX - this.getBoundingClientRect().x
    let boundaryX = 0
    const log: any[] = []
    const column = this.visibleColumns.find((options: ColumnOptions) => {
      if (options.visible !== false) {
        boundaryX += options.width
        log.push(boundaryX)
        return Math.abs(x - boundaryX) < 5
      }
    })
    return column
  }

  trackMouse = (event: Event) => {
    const column = this.getColumn(event)
    if (column !== undefined) {
      this.style.cursor = 'col-resize'
    } else {
      this.style.cursor = ''
    }
  }

  resizeColumn = (event: Event) => {
    const column = this.getColumn(event)
    if (column !== undefined) {
      const origWidth = column.width
      // @ts-expect-error
      const origX = event.clientX
      trackMouse((event: Event) => {
        // @ts-expect-error
        const width = event.clientX - origX + origWidth
        column.width = width > this.minColumnWidth ? width : this.minColumnWidth
        this.setColumnWidths()
      }, 'col-resize')
    }
  }

  connectedCallback(): void {
    super.connectedCallback()

    this.addEventListener('mousemove', this.trackMouse)
    this.addEventListener('mousedown', this.resizeColumn)
  }

  setColumnWidths() {
    this.style.setProperty(
      '--grid-columns',
      this.visibleColumns.map((c) => c.width + 'px').join(' ')
    )
  }

  get rowStyle() {
    return {
      display: 'grid',
      gridTemplateColumns: vars.gridColumns,
      height: this.rowHeight + 'px',
      lineHeight: this.rowHeight + 'px',
    }
  }

  get cellStyle() {
    return {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }
  }

  headerCell = (options: ColumnOptions) =>
    options.headerCell !== undefined
      ? options.headerCell()
      : span(
          { class: 'th' },
          typeof options.name === 'string' ? options.name : options.prop
        )

  dataCell = (options: ColumnOptions) => {
    if (options.dataCell !== undefined) {
      return options.dataCell()
    }
    return span({
      class: 'td',
      style: this.cellStyle,
      bindText: `^.${options.prop}`,
    })
  }

  render() {
    super.render()

    xin[this.instanceId] = this.filter(xinValue(this.value.array))

    this.textContent = ''

    this.style.display = 'flex'
    this.style.flexDirection = 'column'
    const { visibleColumns } = this
    this.setColumnWidths()
    this.append(
      div(
        { class: 'thead' },
        div(
          {
            class: 'tr',
            style: this.rowStyle,
          },
          ...visibleColumns.map(this.headerCell)
        )
      ),
      div(
        {
          class: 'tbody',
          style: {
            content: ' ',
            minHeight: '200px',
            flex: '1 1 100px',
            overflow: 'hidden',
            overflowY: 'scroll',
          },
          bindList: {
            value: this.instanceId,
            virtual: { height: this.rowHeight },
          },
        },
        template(
          div(
            {
              class: 'tr',
              style: this.rowStyle,
            },
            ...visibleColumns.map(this.dataCell)
          )
        )
      )
    )
  }
}

export const dataTable = DataTable.elementCreator({ tag: 'data-table' })
