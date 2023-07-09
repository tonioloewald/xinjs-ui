import { Component as WebComponent, elements, xin, vars, xinValue } from 'xinjs'
import { trackDrag } from './track-drag'

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
  align?: string
  // @ts-expect-error
  headerCell?: () => HTMLElement
  // @ts-expect-error
  dataCell?: () => HTMLElement
}

interface TableData {
  columns?: ColumnOptions[]
  array: any[]
  filter?: ArrayFilter
}

type ArrayFilter = (array: any[]) => any[]

const passThru = (array: any[]) => array

class DataTable extends WebComponent {
  value: TableData = {
    array: [],
  }
  charWidth = 15
  rowHeight = 30
  minColumnWidth = 30

  get virtual(): { height: number } | undefined {
    return this.rowHeight > 0 ? { height: this.rowHeight } : undefined
  }

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
          align:
            typeof array[0][prop] === 'number' ||
            (array[0][prop] !== '' && !isNaN(array[0][prop]))
              ? 'right'
              : 'left',
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

  get visibleRecords(): any[] {
    return xin[this.instanceId] as any[]
  }

  content = null

  getColumn(event: any): ColumnOptions | undefined {
    const x =
      (event.touches !== undefined ? event.touches[0].clientX : event.clientX) -
      this.getBoundingClientRect().x
    const epsilon = event.touches !== undefined ? 20 : 5
    let boundaryX = 0
    const log: any[] = []
    const column = this.visibleColumns.find((options: ColumnOptions) => {
      if (options.visible !== false) {
        boundaryX += options.width
        log.push(boundaryX)
        return Math.abs(x - boundaryX) < epsilon
      }
    })
    return column
  }

  setCursor = (event: Event) => {
    const column = this.getColumn(event)
    if (column !== undefined) {
      this.style.cursor = 'col-resize'
    } else {
      this.style.cursor = ''
    }
  }

  resizeColumn = (event: any) => {
    const column = this.getColumn(event)
    if (column !== undefined) {
      const origWidth = column.width
      const isTouchEvent = event.touches !== undefined
      const touchIdentifier = isTouchEvent
        ? event.touches[0].identifier
        : undefined
      trackDrag(
        event,
        (dx, dy, event: any) => {
          const touch = isTouchEvent
            ? [...event.touches].find(
                (touch: any) => touch.identifier === touchIdentifier
              )
            : true
          if (touch === undefined) {
            return true
          }
          const width = origWidth + dx
          column.width =
            width > this.minColumnWidth ? width : this.minColumnWidth
          this.setColumnWidths()
          if (event.type === 'mouseup') {
            return true
          }
        },
        'col-resize'
      )
    }
  }

  connectedCallback(): void {
    super.connectedCallback()

    this.addEventListener('mousemove', this.setCursor)
    this.addEventListener('mousedown', this.resizeColumn)
    this.addEventListener('touchstart', this.resizeColumn, { passive: true })
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
          {
            class: 'th',
            role: 'columnheader',
            ariaSort: 'none',
            style: {
              ...this.cellStyle,
              textAlign: options.align || 'left',
            },
          },
          typeof options.name === 'string' ? options.name : options.prop
        )

  dataCell = (options: ColumnOptions) => {
    if (options.dataCell !== undefined) {
      return options.dataCell()
    }
    return span({
      class: 'td',
      role: 'cell',
      style: {
        ...this.cellStyle,
        textAlign: options.align || 'left',
      },
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
        { class: 'thead', role: 'rowgroup' },
        div(
          {
            class: 'tr',
            role: 'row',
            style: this.rowStyle,
          },
          ...visibleColumns.map(this.headerCell)
        )
      ),
      div(
        {
          class: 'tbody',
          role: 'rowgroup',
          style: {
            content: ' ',
            minHeight: '200px',
            flex: '1 1 100px',
            overflow: 'hidden',
            overflowY: 'scroll',
          },
          bindList: {
            value: this.instanceId,
            virtual: this.virtual,
          },
        },
        template(
          div(
            {
              class: 'tr',
              role: 'row',
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
