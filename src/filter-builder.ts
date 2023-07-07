import { Component as WebComponent, elements, debounce } from 'xinjs'

const { input } = elements

type ArrayFilter = (array: any[]) => any[]

const passThru = (array: any[]) => array
const NULL_FILTER_DESCRIPTION = 'null filter, everything matches'

class FilterBuilder extends WebComponent {
  value = ''
  filter: ArrayFilter = passThru
  title = NULL_FILTER_DESCRIPTION
  content = input({
    style: {
      width: '100%',
      height: '100%',
    },
    placeholder: 'needle name:foo !isFalse isTrue! lat:>0',
  })

  constructor() {
    super()
    this.initAttributes('title')
  }

  buildFilter = debounce((query: string): void => {
    const descriptions: string[] = []
    const filters = query
      .split(/\s+/)
      .filter((part) => part !== '')
      .map((part) => {
        if (part.startsWith('!')) {
          const haystack = part.slice(1)
          descriptions.push(`"${haystack}" is truthy`)
          return (obj: any) => !obj[haystack]
        } else if (part.endsWith('!')) {
          const haystack = part.slice(0, part.length - 1)
          descriptions.push(`"${haystack}" is falsy`)
          return (obj: any) => !!obj[haystack]
        } else if (part.includes(':')) {
          let [haystack, needle] = part.split(':')
          if (needle.startsWith('<')) {
            descriptions.push(`"${needle}" < "${haystack}"`)
            needle = needle.slice(1)
            return (obj: any) => obj[haystack] && obj[haystack] < needle
          } else if (needle.startsWith('>')) {
            needle = needle.slice(1)
            descriptions.push(`"${needle}" > "${haystack}"`)
            return (obj: any) => obj[haystack] && obj[haystack] > needle
          } else {
            needle = needle.toLocaleLowerCase()
            descriptions.push(`"${needle}" in "${haystack}"`)
            return (obj: any) => {
              return (
                obj[haystack] &&
                String(obj[haystack]).toLocaleLowerCase().includes(needle)
              )
            }
          }
        } else {
          const needle = part.toLocaleLowerCase()
          descriptions.push(`"${needle}" anywhere`)
          return (obj: any) =>
            Object.keys(obj).find((key) => {
              return String(obj[key]).toLocaleLowerCase().includes(needle)
            })
        }
      })

    let filter: ArrayFilter
    let title: string
    if (filters.length === 0) {
      title = NULL_FILTER_DESCRIPTION
      filter = passThru
    } else {
      title = descriptions.join(', and ')
      filter = (array: any[]): any[] =>
        array.filter((obj) => {
          if (obj === null || typeof obj !== 'object') {
            return false
          } else {
            return filters.find((filter) => !filter(obj)) === undefined
          }
        })
    }

    if (this.filter !== filter) {
      this.title = title
      this.filter = filter
      this.dispatchEvent(new Event('change'))
    }
  })

  reset() {
    if (this.filter !== passThru) {
      this.title = NULL_FILTER_DESCRIPTION
      this.filter = passThru
      this.dispatchEvent(new Event('change'))
    }
  }

  handleInput = (event: Event) => {
    const { input } = this.refs
    this.buildFilter(input.value)
    this.value = input.value
    event.stopPropagation()
    event.preventDefault()
  }

  connectedCallback(): void {
    super.connectedCallback()

    const { input } = this.refs
    input.value = this.value
    input.addEventListener('input', this.handleInput)
    input.addEventListener('change', this.handleInput)
    this.style.position = 'relative'
  }

  render() {
    super.render()
    const { input } = this.refs
    input.value = this.value
  }
}

export const filterBuilder = FilterBuilder.elementCreator({
  tag: 'filter-builder',
})
