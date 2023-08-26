/*!
# `<filter-builder>`

Automatically creates `ArrayFilter` functions `(a: any[]) => any[]` based on a text query that accepts the
following criteria — all text matches are performed in `LocaleLowerCase`. Criteria are space-delimited, but
a quoted string which can include spaces (but not nested quotation marks) is allowed on the right.

`<filter-builder>` has sets its `filter` property to an `ArrayFilter`, by default it just passes through
the array untouched. Its `value` is the source `string`.

The filter-builder has a default set of `FilterMaker` objects which it uses to **curry** an filter function.

    type ObjectTest (obj: any) => boolean

    interface FilterMaker {
      hint: string                                    // describes the grammar
      description: (...matches: string[]) => string   // describes the actual filter
      token: RegExp                                   // matches the token
      filterMaker(...matches: string) => ObjectTest   // builds an ObjectTest
    }

The `<filter-builder>` will use the `hint` values to write its `placeholder` (you can override this if
you explicitly set the `placeholder`) and it will use the `description` function to create the
`title` attribute, describing the filter.

## availableFilters

As well as `filterBuilder`, the `availableFilters` collection is exported and can be customized directly. By default,
each `<filter-builder>` element's `filters` property defaults to `availableFilters` but you can augment it or
individually set.

The default `filters` provided are (in priority order):

- `[field]=value` if `field` is specified, matches `value`, otherwise looks for `value` anwhere
- `field!=value` matches if `field` is not `value`
- `field<<value` / `field>>value` matches if `field` is before / after `value` (as a date)
- `field>value` / `field<value` matches if `field` is greater / less than `value`, if `isNaN(Number(value))` this will
  be an alphabetical order comparison, otherwise it will be numberic.
- `field:value` / `field!:value` matches if `field` contains / does not contain `value`
- `!!field` matches if `field` is **truthy**
- `!field` matches if `field` is **falsy** (e.g. `''`, `null`, `undefined`, `false`, `0`)
- `value` matches if any field contains `value`

Right now multiple criteria are `AND`ed together. This will be extended to allow `()`, `OR`, `<` and `>` comparisons will
become smarter (convert both sides to numbers if possible), and extensibility will be added.

### Customizing Filters

Filters should be ordered from strictest `token` to least-strict `token` where tokens have a chance of
overlapping. E.g. the `>>` (before) token has to be before the `>` (greater than) token, otherwise `>` will steal its tokens
(and the arguments of tokens are very liberal, since you never know what string someone will want to compare something to).

I just needed the new capabilities for the project I'm working on and figured they were probably pretty likely to be useful to other people.

A filter is just an object that conforms to the `FilterMaker` interface. E.g. the "contains" filter looks like this:

```
{
 hint: 'field:value',
 explanation: 'field contains value, ignoring case',
 description: (field: string, value: string) =>
   `${field} contains "${value}"`,
 token: /^([^\s]+?):(.+)$/,
 makeFilter: (field: string, value: string) => {
   value = value.toLocaleLowerCase()
   return (obj: any) =>
     String(obj[field]).toLocaleLowerCase().includes(value)
 },
}
```

This is sufficient to make each filter atom composable and self-documenting as a text `hint`, in general `explanation`, and in particular `description`.

Tokens are matched against a term, and must return enough values to drive `makeFilter`. A **term** currently looks like:

`query.match(/[^\s"]+("[^"]+")?/g)`

I.e. a bunch of non-whitespace characters optionally followed directly by a double-quoted string (containing not double-quotes). E.g. `foo` `$$foo:bar!><` or `foo"bar baz"`.
*/

import {
  Component as WebComponent,
  ElementCreator,
  elements,
  debounce,
} from 'xinjs'

const { input } = elements

type ArrayFilter = (array: any[]) => any[]

const passThru = (array: any[]) => array
const NULL_FILTER_DESCRIPTION = 'null filter, everything matches'

type ObjectTest = (obj: any) => boolean

interface FilterMaker {
  hint: string
  explanation?: string
  description: (...matches: string[]) => string
  token: RegExp
  makeFilter: (...matches: string[]) => ObjectTest
}

export const availableFilters: FilterMaker[] = [
  {
    hint: 'field=value',
    explanation: 'field is value, ignoring case',
    description: (field: string, value: string) =>
      isNaN(Number(value))
        ? field !== ''
          ? `${field} is "${value}"`
          : `any field is "${value}"`
        : field !== ''
        ? `${field} == ${value}`
        : `any field == ${value}`,
    token: /^([^\s]+?)=(.+)$/,
    makeFilter: (field: string, value: string) => {
      if (isNaN(Number(value))) {
        value = String(value).toLocaleLowerCase()
        if (field !== '') {
          return (obj: any) => String(obj[field]).toLocaleLowerCase() == value
        }
        return (obj: any) =>
          Object.values(obj).find(
            (val) => String(val).toLocaleLowerCase() == value
          ) !== undefined
      }
      const num = Number(value)
      if (field !== '') {
        return (obj: any) => Number(obj[field]) == num
      }
      return (obj: any) =>
        Object.values(obj).find((val) => Number(val) == num) !== undefined
    },
  },
  {
    hint: 'field!=value',
    explanation: 'field is not value, ignoring case',
    description: (field: string, value: string) => `${field} ≠ ${value}`,
    token: /^([^\s]+?)!=(.+)$/,
    makeFilter: (field: string, value: string) => {
      value = value.toLocaleLowerCase()
      return (obj: any) => String(obj[field]).toLocaleLowerCase() != value
    },
  },
  {
    hint: 'field>>value',
    explanation: 'field is after value (as date)',
    description: (field: string, value: string) =>
      `${field} is after ${new Date(value).toISOString()}`,
    token: /^([^\s]+?)>>(.+)$/,
    makeFilter: (field: string, value: string) => {
      const date = new Date(value)
      return (obj: any) => new Date(obj[field]) > date
    },
  },
  {
    hint: 'field<<value',
    explanation: 'field is before value (as date)',
    description: (field: string, value: string) =>
      `${field} is before ${new Date(value).toISOString()}`,
    token: /^([^\s]+?)<<(.+)$/,
    makeFilter: (field: string, value: string) => {
      const date = new Date(value)
      return (obj: any) => new Date(obj[field]) < date
    },
  },
  {
    hint: 'field>value',
    explanation: 'field > value (numeric / A-Z)',
    description: (field: string, value: string) =>
      isNaN(Number(value))
        ? `${field} > ${value} (A-Z)`
        : `${field} > ${value}`,
    token: /^([^\s]+?)>(.+)$/,
    makeFilter: (field: string, value: string) => {
      if (!isNaN(Number(value))) {
        const num = Number(value)
        return (obj: any) => Number(obj[field]) > num
      }
      value = value.toLocaleLowerCase()
      return (obj: any) => String(obj[field]).toLocaleLowerCase() > value
    },
  },
  {
    hint: 'field<value',
    explanation: 'field < value (numeric / A-Z)',
    description: (field: string, value: string) =>
      isNaN(Number(value))
        ? `${field} < ${value} (A-Z)`
        : `${field} < ${value}`,
    token: /^([^\s+]+?)<(.+)$/,
    makeFilter: (field: string, value: string) => {
      if (!isNaN(Number(value))) {
        const num = Number(value)
        return (obj: any) => Number(obj[field]) < num
      }
      value = value.toLocaleLowerCase()
      return (obj: any) => String(obj[field]).toLocaleLowerCase() < value
    },
  },
  {
    hint: 'field!:value',
    explanation: 'field does not contain value, ignoring case',
    description: (field: string, value: string) =>
      `${field} does not contain "${value}"`,
    token: /^([^\s]+?)!:(.+)$/,
    makeFilter: (field: string, value: string) => {
      value = value.toLocaleLowerCase()
      return (obj: any) =>
        !String(obj[field]).toLocaleLowerCase().includes(value)
    },
  },
  {
    hint: 'field:value',
    explanation: 'field contains value, ignoring case',
    description: (field: string, value: string) =>
      `${field} contains "${value}"`,
    token: /^([^\s]+?):(.+)$/,
    makeFilter: (field: string, value: string) => {
      value = value.toLocaleLowerCase()
      return (obj: any) =>
        String(obj[field]).toLocaleLowerCase().includes(value)
    },
  },
  {
    hint: '!!field',
    explanation: 'field is true, non-empty, non-zero',
    description: (match: string) => `${match} is truthy`,
    token: /^!!([^\s]+?)$/,
    makeFilter: (match: string) => (obj: any) => !!obj[match],
  },
  {
    hint: '!field',
    explanation: 'field is false, empty, zero',
    description: (match: string) => `${match} is falsy`,
    token: /^!([^\s]+?)$/,
    makeFilter: (match: string) => (obj: any) => !obj[match],
  },
  {
    hint: 'value',
    explanation: 'any field contains value',
    description: (match: string) => `"${match}" in any property`,
    token: /^(.+)$/,
    makeFilter: (match: string) => {
      match = match.toLocaleLowerCase()
      return (obj: any) =>
        Object.values(obj).find((value) =>
          String(value).toLocaleLowerCase().includes(match)
        ) !== undefined
    },
  },
]

interface Filter {
  description: string
  test: ObjectTest
}

export function getFilter(
  term: string,
  filters = availableFilters
): Filter | undefined {
  const maker = filters.find((filter: FilterMaker) => filter.token.test(term))
  if (maker !== undefined) {
    // we know it will match
    const [, ...terms] = term.match(maker.token)!
    return {
      description: maker.description(...terms),
      test: maker.makeFilter(...terms),
    }
  }
}

export class FilterBuilder extends WebComponent {
  filter: ArrayFilter = passThru
  title = NULL_FILTER_DESCRIPTION
  content = input({
    type: 'search',
    part: 'input',
    style: {
      width: '100%',
      height: 'auto',
    },
  })
  placeholder = ''
  help = ''

  filters = availableFilters

  get value(): string {
    return (this.parts.input as HTMLInputElement).value
  }

  set value(query: string) {
    ;(this.parts.input as HTMLInputElement).value = query
  }

  constructor() {
    super()
    this.initAttributes('title', 'placeholder', 'help')
  }

  buildFilter = debounce((query: string): void => {
    const specs = (query.match(/[^\s"]+("[^"]+")?/g) || []).map((spec) =>
      spec.replace(/"/g, '')
    )
    const filters = specs
      .map((part) => getFilter(part, this.filters))
      .filter((part) => part !== undefined) as Filter[]

    if (filters.length === 0) {
      this.title = NULL_FILTER_DESCRIPTION
      if (this.filter !== passThru) {
        this.filter = passThru
        this.dispatchEvent(new Event('change'))
      }
    } else {
      this.filter = filters.reduce(
        (f: false | ArrayFilter, filter: Filter): ArrayFilter => {
          let g: ArrayFilter
          if (f === false) {
            g = (array: any[]) => array.filter(filter.test)
          } else {
            g = (array: any[]) => f(array.filter(filter.test))
          }
          return g
        },
        false
      ) as ArrayFilter // because this array is not empty

      this.title = filters.map((f) => f.description).join(', and ')
      this.dispatchEvent(new Event('change'))
    }
  }, 250)

  reset() {
    if (this.filter !== passThru) {
      this.title = NULL_FILTER_DESCRIPTION
      this.filter = passThru
      this.dispatchEvent(new Event('change'))
    }
  }

  handleInput = (event: Event) => {
    const { input } = this.parts as { [key: string]: HTMLInputElement }
    this.buildFilter(input.value)
    this.value = input.value
    event.stopPropagation()
    event.preventDefault()
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('title', this.title)

    this.help = this.filters
      .map((f) =>
        f.explanation !== undefined ? `${f.hint} — ${f.explanation}` : f.hint
      )
      .join('\n')

    const { input } = this.parts as { [key: string]: HTMLInputElement }
    input.value = this.value
    input.addEventListener('input', this.handleInput)
    input.addEventListener('change', this.handleInput)
    this.style.position = 'relative'
  }

  render() {
    super.render()
    const { input } = this.parts as { [key: string]: HTMLInputElement }
    input.placeholder =
      this.placeholder !== ''
        ? this.placeholder
        : this.filters.map((filter) => filter.hint).join(' ')
    input.value = this.value
  }
}

export const filterBuilder = FilterBuilder.elementCreator({
  tag: 'filter-builder',
}) as ElementCreator<FilterBuilder>
