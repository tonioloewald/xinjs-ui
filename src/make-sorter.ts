export type SortValuator<T> = (f: T) => (string | number)[]

export type SortCallback<T> = (p: T, q: T) => number

/*!
# makeSorter

I'm always confusing myself when writing sort functions, so I wrote `makeSorter()`. It's
insanely simple and just works™. It makes writing an array sort callback for anything
other than an array of numbers or strings easier.

Usage:

```
// creates a sort function that sorts by propA, then propB (if propA is tied)
const sorter = makeSorter(obj => obj.propA, obj.propB)
// as above but descending
const sorter = makeSorter(obj => obj.propA, obj.propB, false)
// as above but propA is sorted ascending, propB descending
const sorter = makeSorter(obj => obj.propA, obj.propB, [false, true])
```

Examples:

```css
.preview {
  padding: var(--spacing);
}
```
```js
const { select, option, div, ul, li } = xinjs.elements
const { makeSorter } = xinjsui

const people = [
  { first: 'Juanita', last: 'Citizen', age: 25 },
  { first: 'Rebecca', last: 'Howe', age: 35 },
  { first: 'Jane', last: 'Doe', age: 35 },
  { first: 'Sam', last: 'Malone', age: 40 },
  { first: 'Norm', last: 'Peterson', age: 38 },
]

const sorters = {
  firstSort: makeSorter(person => [person.first]),
  firstDescSort: makeSorter(person => [person.first], false),
  nameSort: makeSorter(person => [person.last, person.first]),
  ageFirst: makeSorter(person => [-person.age, person.last]),
  ageLast: makeSorter(person => [person.age, person.first], [true, false]),
}

function person({first, last, age}) {
  return li(`${first} ${last}, ${age}`)
}

const list = ul()
sortPicker = select(
  option('Sort by first', {value: 'firstSort'}),
  option('Sort by first (desc)', {value: 'firstDescSort'}),
  option('Sort by last, first', {value: 'nameSort'}),
  option('Sort by age (desc), first', {value: 'ageFirst'}),
  option('Sort by age, last (desc)', {value: 'ageLast'}),
  {
    onChange: render,
    value: 'nameSort'
  },
)

function render () {
  list.textContent = ''
  list.append(...people.sort(sorters[sortPicker.value]).map(person))
}

preview.append(
  sortPicker,
  list
)

render()
```
*/

export function makeSorter<T>(
  sortValuator: SortValuator<T>,
  ascending: boolean | boolean[] = true
): SortCallback<T> {
  return (p: any, q: any) => {
    const pSort = sortValuator(p)
    const qSort = sortValuator(q)
    for (const i in pSort) {
      if (pSort[i] !== qSort[i]) {
        const isAscending = Array.isArray(ascending)
          ? ascending[i] !== false
          : ascending
        return isAscending
          ? pSort[i] > qSort[i]
            ? 1
            : -1
          : pSort[i] > qSort[i]
          ? -1
          : 1
      }
    }
    return 0
  }
}
