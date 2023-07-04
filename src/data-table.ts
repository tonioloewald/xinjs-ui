import { Component as WebComponent, elements, xin, vars } from 'xinjs'

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

type TrackerCallback =
  | ((event: Event) => boolean | undefined)
  | ((event: Event) => void)

const trackMouse = (callback: TrackerCallback, cursor: string): void => {
  const tracker = div({
    style: {
      content: ' ',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      cursor,
    },
  })
  // @ts-expect-error
  document.body.append(tracker)
  tracker.addEventListener('mousemove', (event: Event) => {
    if (callback(event) === true) {
      tracker.remove()
    }
  })
  tracker.addEventListener('mouseup', (event: Event) => {
    callback(event)
    tracker.remove()
  })
}

interface ColumnOptions {
  name?: string
  prop: string
  width: number
  visible?: boolean
  sortable?: boolean
}

class DataTable extends WebComponent {
  value: any[] = []
  columns: ColumnOptions[] | undefined
  charWidth = 15
  rowHeight = 30
  minColumnWidth = 30

  private data: {
    columns: ColumnOptions[]
    array: any[]
  }

  content = null

  constructor() {
    super()
    this.data = {
      columns: [],
      array: [],
    }
  }

  getColumn(event: Event): ColumnOptions | undefined {
    // @ts-expect-error
    const x = event.clientX - this.getBoundingClientRect().x
    let boundaryX = 0
    const log: any[] = []
    const column = this.data.columns.find((options) => {
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

    // @ts-expect-error
    xin[this.instanceId] = this.data
    // @ts-expect-error
    this.data = xin[this.instanceId]

    this.addEventListener('mousemove', this.trackMouse)
    this.addEventListener('mousedown', this.resizeColumn)
  }

  get visibleColumns(): ColumnOptions[] {
    return this.data.columns.filter((c) => c.visible !== false)
  }

  setColumnWidths() {
    this.style.setProperty(
      '--grid-columns',
      this.visibleColumns.map((c) => c.width + 'px').join(' ')
    )
  }

  render() {
    super.render()

    const { data } = this

    if (this.value !== data.array) {
      this.textContent = ''
      if (this.value.length === 0) {
        return
      }
      data.array = this.value
      if (this.columns !== undefined) {
        data.columns = this.columns
      } else {
        data.columns = Object.keys(this.value[0]).map((prop: string) => {
          const width = defaultWidth(this.value, prop, this.charWidth)
          return {
            name: prop.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleLowerCase(),
            prop,
            visible: width !== false,
            width: width ? width : 0,
          } as ColumnOptions
        })
      }
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
              value: data.array,
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
}

export const dataTable = DataTable.elementCreator({ tag: 'data-table' })
