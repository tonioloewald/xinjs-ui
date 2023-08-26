export type SortValuator<T> = (f: T) => (string | number)[]

export type SortCallback<T> = (p: T, q: T) => number

/*!
# makeSorter

I'm always confusing myself when writing sort functions, so I wrote `makeSorter()`. It's
insanely simple and just works™. It makes writing an array sort callback for anything
other than an array of numbers or strings easier.

Usage:

```
interface Person {
  nameFirst: string
  nameLast: string
}

const people: Person[] = await getRecords(...)

// sort by nameLast, then nameFirst
const nameSorter = makeSorter(
  (person: Person) => [person.nameLast, person.nameFirst]
)

people.sort(nameSorter)
```

Here's a slightly more complex example:

```
interface Product {
  name: string,
  category: string,
  sales: number
}

const productSales = await getRecords(...)

// sort by category (A-Z), then sales (highest to lowest)
const categorySalesSorter = makeSorter(
  (product: Product) => [product.category, -product.sales]
)

productSales.sort(categorySalesSorter)
```

Basically, you write a function that given some thing returns a prioritized list of
`string`s or `number`s and `makeSorter` produces an callback function for `Array.sort()`
that will sort the array in _ascending_ order.

If you pass `false` as the (optional) second parameter you'll get a _descending_ sorter,
but for numbers just multiplying by -1 is just as easy (per the example).

If I ever conceive of a need for a version that lets you invert the sort order of
multiple non-numerical array elements I'll extend it.
*/

export function makeSorter<T>(
  sortValuator: SortValuator<T>,
  ascending = true
): SortCallback<T> {
  return (p: any, q: any) => {
    const pSort = sortValuator(p)
    const qSort = sortValuator(q)
    for (const i in pSort) {
      if (pSort[i] !== qSort[i]) {
        return ascending
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
