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
    token: /^([\w-_]*)=(.+)$/,
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
    token: /^([\w-_]+)!=(.+)$/,
    makeFilter: (field: string, value: string) => {
      value = value.toLocaleLowerCase()
      return (obj: any) => String(obj[field]).toLocaleLowerCase() != value
    },
  },
  {
    hint: 'field>value',
    explanation: 'field > value (numeric / A-Z)',
    description: (field: string, value: string) =>
      isNaN(Number(value))
        ? `${field} > ${value} (A-Z)`
        : `${field} > ${value}`,
    token: /^([\w-_]+)>(.+)$/,
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
    token: /^([\w-_]+)<(.+)$/,
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
    hint: 'field:value',
    explanation: 'field contains value, ignoring case',
    description: (field: string, value: string) =>
      `${field} contains "${value}"`,
    token: /^([\w-_]+):(.+)$/,
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
    token: /^!!([\w-_]+)$/,
    makeFilter: (match: string) => (obj: any) => !!obj[match],
  },
  {
    hint: '!field',
    explanation: 'field is false, empty, zero',
    description: (match: string) => `${match} is falsy`,
    token: /^!([\w-_]+)$/,
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

class FilterBuilder extends WebComponent {
  value = ''
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

  constructor() {
    super()
    this.initAttributes('title', 'placeholder', 'help')
  }

  buildFilter = debounce((query: string): void => {
    // @ts-expect-error
    const filters: Filter[] = query
      .split(/\s+/)
      .filter((part) => part !== '')
      .map((part) => getFilter(part, this.filters))
      .filter((part) => part !== undefined) // because we remove undefined

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
  }, 500)

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
        f.explanation !== undefined ? `${f.hint}: ${f.explanation}` : f.hint
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
