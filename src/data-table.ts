import { Component as WebComponent, elements, xin, vars } from 'xinjs'

function defaultWidth(array: any[], prop: string, charWidth: number): string | boolean {
  const example = array.find(item => item[prop] !== undefined && item[prop] !== null)
  if (example !== undefined) {
    switch(typeof example[prop]) {
      case 'string':
        return (12 * charWidth) + 'px'
      case 'number':
        return (6 * charWidth) + 'px'
      case 'boolean':
        return (5 * charWidth) + 'px'
      case 'object':
        return false
      default:
        return (8 * charWidth) + 'px'
    }
  }
  return false
}

const {div, span, template} = elements

interface ColumnOptions {
  name?: string
  prop: string
  width?: string | number
  visible?: boolean
}

class DataTable extends WebComponent {
  value: any[] = []
  columns: ColumnOptions[] | undefined
  charWidth = 15
  rowHeight = 30

  private data: {
    columns: ColumnOptions[]
    array: any[]
  }

  content = null

  constructor() {
    super()
    this. data = {
      columns: [],
      array: []
    }
  }

  connectedCallback(): void {
    super.connectedCallback()
    
    // @ts-expect-error
    xin[this.instanceId] = this.data
    // @ts-expect-error
    this.data = xin[this.instanceId]
  }

  render() {
    super.render()

    const {data} = this

    if (this.value !== data.array) {
      this.textContent = ''
      if (this.value.length === 0) {
        return
      }
      data.array = this.value
      if (this.columns !== undefined ) {
        data.columns = this.columns
      } else {
        data.columns = Object.keys(this.value[0]).map((prop: string) => {
          const width = defaultWidth(this.value, prop, this.charWidth)
          return {
            name: prop.replace(/([a-z])([A-Z])/g, '$1 $2').toLocaleLowerCase(),
            prop,
            visible: width !== false,
            width: width ? width : 0
          } as ColumnOptions
        })
      }
      const visibleColumns = data.columns.filter(c => c.visible !== false)
      this.style.display = 'flex'
      this.style.flexDirection = 'column'
      this.style.setProperty('--grid-columns', visibleColumns.map(c => c.width).join(' '))
      const rowStyle = {
        display: 'grid',
        gridTemplateColumns: vars.gridColumns,
        height: this.rowHeight + 'px',
      }
      const cellStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
      this.append(
        div(
          { class: 'thead' },
          div(
            { 
              class: 'tr',
              style: rowStyle,
            },
            ...visibleColumns.map(c => span({class: 'th', style: cellStyle}, c.name))
          ),
        ),
        div(
          {
            class: 'tbody',
            style: {
              content: ' ',
              minHeight: '200px',
              flex: '1 1 100px',
              overflow: 'hidden',
              overflowY: 'scroll'
            },
            bindList: {
              value: data.array,
              virtual: { height: this.rowHeight }
            }
          },
          template(
            div(
              { 
                class: 'tr',
                style: rowStyle
              },
              ...visibleColumns.map((options: ColumnOptions) => span(
                {
                  class: 'td',
                  style: cellStyle,
                  bindText: `^.${options.prop}`
                }
              ))
            )
          )
        )
      )
    }
  }
}

export const dataTable = DataTable.elementCreator({tag: 'data-table'})