export type SortValuator<T> = (f: T) => (string | number)[]

export type SortCallback<T> = (p: T, q: T) => number

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
