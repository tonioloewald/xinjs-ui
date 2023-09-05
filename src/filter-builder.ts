/*!
# `<filter-builder>`

Automatically creates `ArrayFilter` functions `(a: any[]) => any[]` based on the query you build using its
macOS Finder-inspired interface, using an easily customizable / extensible collection of `Filter` objects.

```js
const { dataTable, filterBuilder, availableFilters } = xinjsui

const sourceWords = ['acorn', 'bubblegum', 'copper', 'daisy', 'ellipse', 'fabulous', 'gerund', 'hopscotch', 'idiom', 'joke']
function randomWords () {
  let numWords = Math.random() * 4
  const words = []
  while (numWords > 0) {
    numWords -= 1
    words.push(sourceWords[Math.floor(Math.random() * 10)])
  }
  return words
}

const array = []
for(let i = 0; i < 1000; i++) {
  array.push({
    date: new Date(Math.random() * Date.now()).toISOString().split('T')[0],
    isLucky: Math.random() < 0.1,
    number: Math.floor(Math.random() * 200 - 100),
    string: randomWords().join(' '),
  })
}

const columns = [
  {
    prop: 'date',
    width: 120
  },
  {
    prop: 'isLucky',
    type: 'boolean',
    width: 100
  },
  {
    prop: 'number',
    align: 'right',
    width: 100
  },
  {
    prop: 'string',
    width: 300
  },
]

const table = dataTable({ array, columns })
const { contains, equals, after, isTrue, isFalse } = availableFilters
const filter = filterBuilder({
  filters: { contains, equals, after, isTrue, isFalse },
  fields: columns,
  onChange(event) {
    table.filter = filter.filter
  }
})
preview.append(filter, table)
```
```css
.preview {
  display: flex;
  flex-direction: column;
}

.preview data-table {
  flex: 1 1 auto;
}
```

## availableFilters

`<filter-builder>` has a default set of `FilterMaker` objects which it uses to construct filter function.
In the example above, the default collection of filters is reduced to `contains`, `equals`, `after`, and `isTrue`.

The full collection includes:

- **contains** * looks for fields containing a string (ignoring case)
- **equals** * looks for fields containing equivalent values (ignoring case)
- **after** * looks for fields with a date after a provided value
- **greaterThan** * looks for fields with a value greater than a provided value
- **truthy** * looks for fields that are true / non-zero / non-empty
- **true** looks for fields that are `true`
- **false** looks for fields that are `false`

**Note**: the filters marked with an * have negative version (e.g. does not contain).

```
type ObjectTest (obj: any) => boolean

interface FilterMaker {
  caption: string                                 // describes the test condition
  negative?: string                               // describes the negative test condition
  needsValue?: boolean                            // if false, the filterMaker doesn't need a needle value
  filterMaker(needle: any) => ObjectTest          // builds an ObjectTest
}
```
*/

import { Component as WebComponent, ElementCreator, elements } from 'xinjs'
import { icons } from '../src/'

const { div, input, select, option, button, span, style } = elements

document.head.append(
  style(
    { id: 'filter-builder' },
    `filter-part {
  display: flex;
}

filter-part [part="needle"] {
  flex: 1 1 auto;
  width: 80px;
}

filter-part [hidden]+[part="padding"] {
  display: block;
  content: ' ';
  flex: 1 1 auto;
}

filter-builder {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}

filter-builder [part="filterContainer"] {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 auto;
}

filter-builder [part="add"],
filter-builder [part="reset"] {
  --button-size: var(--touch-size, 32px);
  border-radius: 999px;
  height: var(--button-size);
  line-height: var(--button-size);
  margin: 0;
  padding: 0;
  text-align: center;
  width: var(--button-size);
  flex: 0 0 var(--button-size);
}
`
  )
)

type ObjectTest = (obj: any) => boolean
type ArrayFilter = (array: any[]) => any[]

const passThru = (array: any[]) => array
const NULL_FILTER_DESCRIPTION = 'null filter, everything matches'

interface FilterMaker {
  caption: string
  negative?: string
  needsValue?: boolean // default true
  makeTest: (value: any) => ObjectTest
}

export const availableFilters: { [key: string]: FilterMaker } = {
  contains: {
    caption: 'contains',
    negative: 'does not contain',
    makeTest: (value: string) => {
      value = value.toLocaleLowerCase()
      return (obj: any) => String(obj).toLocaleLowerCase().includes(value)
    },
  },
  equals: {
    caption: '=',
    negative: '≠',
    makeTest: (value: string) => {
      if (isNaN(Number(value))) {
        value = String(value).toLocaleLowerCase()
        return (obj: any) => String(obj).toLocaleLowerCase() === value
      }
      const num = Number(value)
      return (obj: any) => Number(obj) === num
    },
  },
  after: {
    caption: 'is after',
    negative: 'is before',
    makeTest: (value: any) => {
      const date = new Date(value)
      return (obj: any) => new Date(obj) > date
    },
  },
  greaterThan: {
    caption: '>',
    negative: '≤',
    makeTest: (value: any) => {
      if (!isNaN(Number(value))) {
        const num = Number(value)
        return (obj: any) => Number(obj) > num
      }
      value = value.toLocaleLowerCase()
      return (obj: any) => String(obj).toLocaleLowerCase() > value
    },
  },
  truthy: {
    caption: 'is true / non-empty / no-zero',
    negative: 'is false / empty / zero',
    needsValue: false,
    makeTest: () => (obj: any) => !!obj,
  },
  isTrue: {
    caption: '= true',
    needsValue: false,
    makeTest: () => (obj: any) => obj === true,
  },
  isFalse: {
    caption: '= false',
    needsValue: false,
    makeTest: () => (obj: any) => obj === false,
  },
}

interface Filter {
  description: string
  test: ObjectTest
}

const passAnything = {
  description: 'anything',
  test: () => true,
}

function getSelectText(select: HTMLSelectElement): string {
  return select.options[select.selectedIndex].text
}

export class FilterPart extends WebComponent {
  fields = [] as Array<{ name?: string; prop: string }>
  filters = availableFilters

  content = () => [
    select({ part: 'haystack' }),
    icons.chevronDown(),
    select({ part: 'condition' }),
    icons.chevronDown(),
    input({ part: 'needle' }),
    span({ part: 'padding' }),
    button({ part: 'remove', title: 'delete' }, icons.trash()),
  ]

  filter: Filter = passAnything

  buildFilter = (/* event: Event */) => {
    const { haystack, condition, needle } = this.parts as {
      haystack: HTMLSelectElement
      condition: HTMLSelectElement
      needle: HTMLInputElement
    }
    const [, negative, key] = condition.value.match(/^(~)?(.+)/) as string[]
    const filter = this.filters[key] as FilterMaker
    needle.hidden = filter.needsValue === false

    const baseTest =
      filter.needsValue === false
        ? filter.makeTest(undefined)
        : filter.makeTest(needle.value)
    const field = haystack.value
    let test

    if (field !== '') {
      test =
        negative === '~'
          ? (obj: any) => !baseTest(obj[field])
          : (obj: any) => baseTest(obj[field])
    } else {
      test =
        negative === '~'
          ? (obj: any) =>
              Object.values(obj).find((v) => !baseTest(v)) !== undefined
          : (obj: any) =>
              Object.values(obj).find((v) => baseTest(v)) !== undefined
    }

    const matchValue = filter.needsValue !== false ? ` "${needle.value}"` : ''
    const description = `${getSelectText(haystack)} ${getSelectText(
      condition
    )}${matchValue}`

    this.filter = {
      description,
      test,
    }

    this.parentElement?.dispatchEvent(new Event('change'))
  }

  connectedCallback() {
    super.connectedCallback()

    const { haystack, condition, needle, remove } = this.parts as {
      haystack: HTMLSelectElement
      condition: HTMLSelectElement
      needle: HTMLInputElement
      remove: HTMLButtonElement
    }

    haystack.addEventListener('change', this.buildFilter)
    condition.addEventListener('change', this.buildFilter)
    needle.addEventListener('input', this.buildFilter)
    haystack.value = ''
    condition.value = Object.keys(this.filters)[0]
    needle.value = ''

    remove.addEventListener('click', () => {
      const { parentElement } = this
      this.remove()
      parentElement?.dispatchEvent(new Event('change'))
    })
  }

  render() {
    super.render()

    const { haystack, condition } = this.parts as {
      haystack: HTMLSelectElement
      condition: HTMLSelectElement
    }

    haystack.textContent = ''
    haystack.append(
      option('any field', { value: '' }),
      ...this.fields.map((field) => {
        const caption = field.name || field.prop
        return option(`${caption}`, { value: field.prop })
      })
    )
    condition.textContent = ''
    const conditions = Object.keys(this.filters)
      .map((key) => {
        const filter = this.filters[key]
        return filter.negative !== undefined
          ? [
              option(filter.caption, { value: key }),
              option(filter.negative, { value: '~' + key }),
            ]
          : option(filter.caption, { value: key })
      })
      .flat()
    condition.append(...conditions)
  }
}

export const filterPart = FilterPart.elementCreator({ tag: 'filter-part' })

export class FilterBuilder extends WebComponent {
  fields = [] as Array<{ name?: string; prop: string }>
  filter: ArrayFilter = passThru
  description = NULL_FILTER_DESCRIPTION

  addFilter = () => {
    const { fields, filters } = this
    const { filterContainer } = this.parts
    filterContainer.append(filterPart({ fields, filters }))
  }

  content = () => [
    button(
      {
        part: 'add',
        title: 'add filter condition',
        onClick: this.addFilter,
        class: 'round',
      },
      icons.plus()
    ),
    div({ part: 'filterContainer' }),
    button(
      { part: 'reset', title: 'reset filter', onClick: this.reset },
      icons.x()
    ),
  ]

  filters = availableFilters

  reset = () => {
    const { fields, filters } = this
    const { filterContainer } = this.parts
    this.description = NULL_FILTER_DESCRIPTION
    this.filter = passThru
    filterContainer.textContent = ''
    filterContainer.append(filterPart({ fields, filters }))
    this.dispatchEvent(new Event('change'))
  }

  buildFilter = (/* event: Event */) => {
    const { filterContainer } = this.parts
    if (filterContainer.children.length === 0) {
      this.reset()
      return
    }
    const filters = ([...filterContainer.children] as FilterPart[]).map(
      (filterPart) => filterPart.filter
    ) as Filter[]
    const tests = filters.map((filter) => filter.test) as ObjectTest[]
    this.description = filters.map((filter) => filter.description).join(', ')
    this.filter = (array: any[]) =>
      array.filter(
        (obj: any) => tests.find((f) => f(obj) === false) === undefined
      )
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
