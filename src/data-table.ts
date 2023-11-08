/*!
# table

A virtual data-table, configurable via a `columns` array (which will automatically be generated if not provided),
that displays gigantic tables with fixed headers (and live column-resizing) using a minimum of resources and cpu.

```js
const { dataTable } = xinjsui
const { input } = xinjs.elements

const emojiRequest = await fetch('https://raw.githubusercontent.com/tonioloewald/emoji-metadata/master/emoji-metadata.json')
const emojiData = await emojiRequest.json()

const columns = [
  {
    name: "emoji",
    prop: "chars",
    align: "center",
    width: 80
  },
  {
    prop: "name",
    width: 300,
    // custom cell using xinjs bindings to make the field editable
    dataCell() {
      return input({
        class: 'td',
        bindValue: '^.name',
        title: 'name',
      })
    },
  },
  {
    prop: "category",
    width: 150
  },
  {
    prop: "subcategory",
    width: 150
  },
]

preview.append(dataTable({ multiple: true, array: emojiData, columns }))
```
```css
.preview input.td {
  margin: 0;
  border-radius: 0;
  box-shadow: none !important;
  background: transparent;
}

.preview xin-table {
  height: 100%;
}
```

You can set the `<xin-table>`'s `array`, `columns`, and `filter` properties directly, or set its `value` to:

```
{
  array: any[],
  columns: ColumnOptions[] | null,
  filter?: ArrayFilter
}
```

## selection

`<xin-table>` supports `select` and `multiple` boolean properties allowing rows to be selectable. Selected rows will
be given the `[aria-selected]` attribute, so style them as you wish.

**multiple** select supports shift-clicking and command/meta-clicking.

`<xin-table>` provides an `onSelect(visibleSelectedRows: any[]): void` callback property allowing you to respond to changes
in the selection, and also `selectedRows` and `visibleSelectedRows` properties.

## rowHeight

If you set the `<xin-table>`'s `rowHeight` to `0` it will render all its elements (i.e. not be virtual). This is
useful for smaller tables, or tables with variable row-heights.
*/

import {
  Component as WebComponent,
  ElementCreator,
  elements,
  xin,
  vars,
  xinValue,
  getListItem,
  touch,
} from 'xinjs'
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

export interface ColumnOptions {
  name?: string
  prop: string
  width: number
  visible?: boolean
  align?: string
  headerCell?: (options: ColumnOptions) => HTMLElement
  dataCell?: (options: ColumnOptions) => HTMLElement
}

export interface TableData {
  columns?: ColumnOptions[] | null
  array: any[]
  filter?: ArrayFilter | null
}

export type ArrayFilter = (array: any[]) => any[]

const passThru = (array: any[]) => array

export type SelectCallback = (selected: any[]) => void

export class DataTable extends WebComponent {
  select = false
  multiple = false
  onSelect: SelectCallback = () => {}

  private selectedKey = Symbol('selected')
  private selectBinding = (elt: HTMLElement, obj: any) => {
    if (obj[this.selectedKey]) {
      elt.setAttribute('aria-selected', '')
    } else {
      elt.removeAttribute('aria-selected')
    }
  }

  maxVisibleRows = 10000

  get value(): TableData {
    return {
      array: this.array,
      filter: this.filter,
      columns: this.columns,
    }
  }

  set value(data: TableData) {
    const { array, columns, filter } = xinValue(data)
    if (
      this._array !== array ||
      this._columns !== columns ||
      this._filter !== filter
    ) {
      this.queueRender()
    }
    this._array = array || []
    this._columns = columns || null
    this._filter = filter || passThru
  }

  private _array: any[] = []
  private _columns: ColumnOptions[] | null = null
  private _filter: ArrayFilter = passThru
  charWidth = 15
  rowHeight = 30
  minColumnWidth = 30

  get virtual(): { height: number } | undefined {
    return this.rowHeight > 0 ? { height: this.rowHeight } : undefined
  }

  constructor() {
    super()

    this.initAttributes(
      'rowHeight',
      'charWidth',
      'minColumnWidth',
      'select',
      'multiple'
    )
  }

  get array(): any[] {
    return this._array
  }

  set array(newArray: any[]) {
    this._array = xinValue(newArray)
    this.queueRender()
  }

  get filter(): ArrayFilter {
    return this._filter
  }

  set filter(filterFunc: ArrayFilter) {
    if (this._filter !== filterFunc) {
      this._filter = filterFunc
      this.queueRender()
    }
  }

  get columns(): ColumnOptions[] {
    if (!Array.isArray(this._columns)) {
      const { _array } = this
      this._columns = Object.keys(_array[0] || {}).map((prop: string) => {
        const width = defaultWidth(_array, prop, this.charWidth)
        return {
          name: prop.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleLowerCase(),
          prop,
          align:
            typeof _array[0][prop] === 'number' ||
            (_array[0][prop] !== '' && !isNaN(_array[0][prop]))
              ? 'right'
              : 'left',
          visible: width !== false,
          width: width ? width : 0,
        } as ColumnOptions
      })
    }
    return this._columns
  }

  set columns(newColumns: ColumnOptions[]) {
    this._columns = newColumns
    this.queueRender()
  }

  get visibleColumns(): ColumnOptions[] {
    return this.columns.filter((c) => c.visible !== false)
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

  private setCursor = (event: Event) => {
    const column = this.getColumn(event)
    if (column !== undefined) {
      this.style.cursor = 'col-resize'
    } else {
      this.style.cursor = ''
    }
  }

  private resizeColumn = (event: any) => {
    const column = this.getColumn(event)
    if (column !== undefined) {
      const origWidth = column.width
      const isTouchEvent = event.touches !== undefined
      const touchIdentifier = isTouchEvent
        ? event.touches[0].identifier
        : undefined
      trackDrag(
        event,
        (dx, _dy, event: any) => {
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

  // tracking click / shift-click
  private rangeStart?: any
  private updateSelection = (event: Event) => {
    if (!this.select && !this.multiple) {
      return
    }
    const { target } = event
    if (!(target instanceof HTMLElement)) {
      return
    }
    const tr = target.closest('.tr')
    if (!(tr instanceof HTMLElement)) {
      return
    }
    const pickedItem = getListItem(tr)
    const mouseEvent = event as MouseEvent
    if (
      this.multiple &&
      mouseEvent.shiftKey &&
      this.rangeStart !== undefined &&
      this.rangeStart !== pickedItem
    ) {
      const mode = this.rangeStart[this.selectedKey] === true
      const rows = this.visibleRows
      const [start, finish] = [
        rows.indexOf(this.rangeStart),
        rows.indexOf(pickedItem),
      ].sort()
      // if start is -1 then one of the items is no longer visible
      if (start > -1) {
        for (let idx = start; idx <= finish; idx++) {
          const row = rows[idx]
          if (mode) {
            row[this.selectedKey] = true
          } else {
            delete row[this.selectedKey]
          }
        }
      }
    } else if (this.multiple && mouseEvent.metaKey) {
      this.rangeStart = pickedItem
      if (pickedItem[this.selectedKey] === true) {
        delete pickedItem[this.selectedKey]
      } else {
        pickedItem[this.selectedKey] = true
      }
    } else if (pickedItem[this.selectedKey] !== true) {
      this.rangeStart = pickedItem
      for (const item of this.array) {
        if (item === pickedItem) {
          item[this.selectedKey] = true
        } else {
          delete item[this.selectedKey]
        }
      }
    }
    this.onSelect(this.visibleSelectedRows)
    touch(this.instanceId)
  }

  connectedCallback(): void {
    super.connectedCallback()

    this.addEventListener('mousemove', this.setCursor)
    this.addEventListener('mousedown', this.resizeColumn)
    this.addEventListener('touchstart', this.resizeColumn, { passive: true })
    this.addEventListener('mouseup', this.updateSelection)
    this.addEventListener('touchend', this.updateSelection)
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
      ? options.headerCell(options)
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
      return options.dataCell(options)
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

  get visibleRows(): any[] {
    return xinValue(xin[this.instanceId]) as any[]
  }

  get visibleSelectedRows(): any[] {
    return this.visibleRows.filter((obj) => obj[this.selectedKey])
  }

  get selectedRows(): any[] {
    return this.array.filter((obj) => obj[this.selectedKey])
  }

  render() {
    super.render()

    const found = this.filter(this._array)
    xin[this.instanceId] = found.slice(0, this.maxVisibleRows)

    this.textContent = ''

    this.style.display = 'flex'
    this.style.flexDirection = 'column'
    const { visibleColumns } = this
    this.setColumnWidths()
    this.append(
      div(
        { class: 'thead', role: 'rowgroup', style: { touchAction: 'none' } },
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
            minHeight: '100px',
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
              bind: {
                value: '^',
                binding: this.selectBinding,
              },
            },
            ...visibleColumns.map(this.dataCell)
          )
        )
      )
    )
  }
}

export const dataTable = DataTable.elementCreator({
  tag: 'xin-table',
}) as ElementCreator<DataTable>
