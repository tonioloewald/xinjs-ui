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
  sortable?: boolean
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

  render() {
    super.render()

    xin[this.instanceId] = this.filter(xinValue(this.value.array))

    this.textContent = ''

    this.style.display = 'flex'
    this.style.flexDirection = 'column'
    const { visibleColumns } = this
    this.setColumnWidths()
    const rowStyle = {
      display: 'grid',
      gridTemplateColumns: vars.gridColumns,
      height: this.rowHeight + 'px',
    }
    const cellStyle = {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }
    const sorterStyle = {
      display: 'inline-block',
      minWidth: vars.charWidth,
      cursor: 'default',
    }
    this.append(
      div(
        { class: 'thead' },
        div(
          {
            class: 'tr',
            style: rowStyle,
          },
          ...visibleColumns.map((c) =>
            span(
              { class: 'th', style: cellStyle },
              c.name,
              c.sortable !== false
                ? span({ class: 't-sorter', style: sorterStyle })
                : undefined
            )
          )
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
              style: rowStyle,
            },
            ...visibleColumns.map((options: ColumnOptions) =>
              span({
                class: 'td',
                style: cellStyle,
                bindText: `^.${options.prop}`,
              })
            )
          )
        )
      )
    )
  }
}

export const dataTable = DataTable.elementCreator({ tag: 'data-table' })
