/*!
# `<filter-builder>`

Automatically creates `ArrayFilter` functions `(a: any[]) => any[]` based on a text query that accepts the
following criteria — all text matches are performed in `LocaleLowerCase`. Criteria are space-delimited, but
a quoted string which can include spaces (but not nested quotation marks) is allowed on the right.

```js
const { dataTable, filterBuilder, availableFilters } = xinjsui

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
    width: 300
  },
  {
    prop: "category",
    width: 150
  },
  {
    name: "subcategory",
    width: 150
  },
]

const table = dataTable({ array: emojiData, columns })
const { contains, equals } = availableFilters
const filter = filterBuilder({
  filters: { contains, equals },
  fields: columns,
  onChange(event) {
    table.filter = event.target.filter
  }
})
preview.append(filter, table)
```

`<filter-builder>` has sets its `filter` property to an `ArrayFilter`, by default it just passes through
the array untouched. Its `value` is the source `string`.

The filter-builder has a default set of `FilterMaker` objects which it uses to construct filter function.

    type ObjectTest (obj: any) => boolean

    interface FilterMaker {
      caption: string                                 // describes the test condition
      negativeCaption: string                         // describes the negative test condition
      needsValue?: boolean                            // if false, the filterMaker doesn't need a needle value
      filterMaker(needle: any) => ObjectTest          // builds an ObjectTest
    }
*/

import {
  Component as WebComponent,
  ElementCreator,
  elements,
  vars,
} from 'xinjs'

const { div, input, select, option, button, span } = elements

type ObjectTest = (obj: any) => boolean
type ArrayFilter = (array: any[]) => any[]

const passThru = (array: any[]) => array
const NULL_FILTER_DESCRIPTION = 'null filter, everything matches'

interface FilterMaker {
  caption?: string
  negative?: string
  needsValue?: boolean // default true
  makeTest: (value: any) => ObjectTest
}

export const availableFilters: {[key: string]: FilterMaker} = {
  contains: {
    negative: 'does not contain',
    makeTest: (value: string) => {
      value = value.toLocaleLowerCase()
      return (obj: any) => String(obj).toLocaleLowerCase().includes(value)
    },
  },
  equals: {
    caption: '=',
    negative: '≠',
    makeTest: (field: string, value: string) => {
      if (isNaN(Number(value))) {
        value = String(value).toLocaleLowerCase()
        return (obj: any) => String(obj).toLocaleLowerCase() === value
      }
      const num = Number(value)
      return (obj: any) => Number(obj).toLocaleLowerCase() === num
    },
  },
  after: {
    makeTest: (field: string, value: string) => {
      const date = new Date(value)
      return (obj: any) => new Date(obj) > date
    },
  },
  greaterThan: {
    caption: '>',
    negative: '≤',
    makeTest: (field: string, value: string) => {
      if (!isNaN(Number(value))) {
        const num = Number(value)
        return (obj: any) => Number(obj) > num
      }
      value = value.toLocaleLowerCase()
      return (obj: any) => String(obj).toLocaleLowerCase() > value
    },
  },
  truthy: {
    needsValue: false,
    makeTest: () => (obj: any) => !!obj,
  },
}

interface Filter {
  description: string
  test: ObjectTest
}

const passAnything = {
  description: 'anything',
  test: () => true as ObjectTest
}

function getSelectText(select: HTMLSelectElement): string {
  return select.options[select.selectedIndex].text
}

export class SimpleFilter extends WebComponent {
  fields = [] as Array<{name?: string, prop: string}>
  filters = availableFilters
  
  content = [
    select({part: 'haystack'}),
    select({part: 'condition'}),
    input({part: 'needle'}),
    button({part: 'remove', title: 'delete'}, span({class: 'icon-x'}))
  ]
  
  filter: Filter = passAnything
  
  buildFilter = () => {
    const { haystack, condition, needle } = this.parts
    const [, negative, key] = condition.value.match(/^(~)?(.+)/)
    const filter = this.filters[key] as Filter
    needle.hidden = filter.needsValue === false
    
    const baseTest = filter.needsValue === false ? filter.makeTest() : filter.makeTest(needle.value)
    const field = haystack.value
    let test
    if (field !== '') {
      test = negative === '~' ? obj => !baseTest(obj[haystack.value]) : obj => baseTest(obj[haystack.value])
    } else {
      test = negative === '~' ? obj => Object.values(obj).find(v => baseTest(v)) === undefined : obj => Object.values(obj).find(v => baseTest(v)) !== undefined
    }
    
    const matchValue = filter.needsValue !== false ? ` "${needle.value}"`: ''
    const description = `${getSelectText(haystack)} ${getSelectText(condition)}${matchValue}`
    console.log(description)
    
    this.filter = {
      description,
      test
    }
    this.dispatchEvent(new Event('change'))
  }
  
  connectedCallback() {
    super.connectedCallback()
    
    const { haystack, condition, needle, remove } = this.parts
    
    haystack.addEventListener('change', this.buildFilter)
    condition.addEventListener('change', this.buildFilter)
    needle.addEventListener('change', this.buildFilter)
    haystack.value = ''
    condition.value = Object.keys(this.filters)[0]
    needle.value = ''
    
    remove.addEventListener('click', () => {
      this.remove()
    })
  }
  
  render() {
    super.render()
    
    const { haystack, condition, needle, remove } = this.parts
        
    haystack.textContent = ''
    haystack.append(option('any field', {value: ''}), ...this.fields.map(field => {
      const caption = field.name || field.prop
      return option(`${caption}`, {value: field.prop})
    }))
    condition.textContent = ''
    const conditions = Object.keys(this.filters).map(key => {
      const filter = this.filters[key]
      const caption = filter.caption || key
      return [
        option(filter.negative === undefined ? `is ${caption}` : caption, {value: key}),
        option(filter.negative === undefined ? `is not ${caption}` : filter.negative, {value: '~' + key}),
      ]
    }).flat()
    console.log(conditions)
    condition.append(...conditions)
  }
}

export const simpleFilter = SimpleFilter.elementCreator({ tag: 'simple-filter' })

export class FilterBuilder extends WebComponent {
  fields = [] as Array<{name?: string, prop: string}>
  filter: ArrayFilter = passThru
  title = NULL_FILTER_DESCRIPTION
  
  addFilter = () => {
    const { fields, filters } = this
    const { filterContainer } = this.parts
    filterContainer.append(simpleFilter({fields, filters}))
  }
  
  content = () => div(
    {
      style: {
        width: '100%',
        height: 'auto',
      },
    },
    button({class: 'icon-plus', title: 'add filter condition', onClick: this.addFilter}),
    div({
      style: {
        display: 'flex',
        flexDirection: 'column'
      },
      part: 'filterContainer'
    }),
  )
  
  filters = availableFilters
  
  reset() {
    const { fields, filters } = this
    const { filterContainer } = this.parts
    this.title = NULL_FILTER_DESCRIPTION
    this.filter = passThru
    filterContainer.textContent = ''
    filterContainer.append(simpleFilter({fields, filters}))
    this.dispatchEvent(new Event('change'))
  }

  constructor() {
    super()
    this.initAttributes('title', 'placeholder', 'help')
  }

  buildFilter = (event: Event) => {
    const { filterContainer } = this.parts
    const filters = ([...filterContainer.children] as SimpleFilter[]).map(simpleFilter => simpleFilter.filter.test) as ObjectTest[]
    this.filter = (array: any[]) => array.filter((obj: any) => filters.find(f => f(obj) === false) === undefined)
    event.stopPropagation()
    this.dispatchEvent(new Event('change'))
  }

  connectedCallback(): void {
    super.connectedCallback()
    
    const { filterContainer } = this.parts
    
    filterContainer.addEventListener('change', this.buildFilter)
    
    this.reset()
  }

  render() {
    super.render()
  }
}

export const filterBuilder = FilterBuilder.elementCreator({
  tag: 'filter-builder',
}) as ElementCreator<FilterBuilder>
