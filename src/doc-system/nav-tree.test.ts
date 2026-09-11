import { test, expect } from 'bun:test'
import { buildSlugMap } from './routing.js'
import { buildNavTree, navOpenPath, pinnedSort } from './nav-tree.js'

// filename + the fields nav cares about
const mk = (
  filename: string,
  title: string,
  extra: { order?: number; parent?: string; pin?: 'top' | 'bottom' } = {}
) => ({
  filename,
  title,
  ...extra,
})

const docs = [
  mk('README.md', 'tosijs-ui', { pin: 'top' }),
  mk('icons.ts', 'icons'),
  mk('components.md', 'Components', { pin: 'bottom', order: 1 }),
  mk('form-components.md', 'Form Components', { pin: 'bottom', order: 2 }),
  mk('appendices.md', 'Appendices', { pin: 'bottom', order: 4 }),
  mk('button.ts', 'button', { parent: 'Components' }),
  mk('carousel.ts', 'carousel', { parent: 'components' }), // slug form
  mk('select.ts', 'select', { parent: 'Form Components' }),
  mk('doc-system.ts', 'doc-system', { parent: 'Appendices' }),
]
const slugMap = buildSlugMap(docs)
const tree = buildNavTree(docs, slugMap)
const titles = (ns: any[]) => ns.map((n) => n.doc.title)

test('top level: README first, then unparented, then sections in order', () => {
  // README (top), icons (none), Components/Form Components/Appendices (bottom, by order)
  expect(titles(tree)).toEqual([
    'tosijs-ui',
    'icons',
    'Components',
    'Form Components',
    'Appendices',
  ])
})

test('children nest under their parent (name or slug)', () => {
  const components = tree.find((n) => n.doc.title === 'Components')!
  expect(titles(components.children)).toEqual(['button', 'carousel'])
  const form = tree.find((n) => n.doc.title === 'Form Components')!
  expect(titles(form.children)).toEqual(['select'])
})

test('depth is assigned', () => {
  const components = tree.find((n) => n.doc.title === 'Components')!
  expect(components.depth).toBe(0)
  expect(components.children[0].depth).toBe(1)
})

test('navOpenPath: ancestors of current are open, others not', () => {
  const open = navOpenPath(tree, 'select.ts')
  expect(open.has('form-components.md')).toBe(true)
  expect(open.has('components.md')).toBe(false)
  // a leaf is never an open <details>
  expect(open.has('select.ts')).toBe(false)
})

test('pinnedSort is a total order (filename tiebreak)', () => {
  const a = mk('a.ts', 'same')
  const b = mk('b.ts', 'same')
  expect(pinnedSort(a, b)).toBeLessThan(0)
  expect(pinnedSort(b, a)).toBeGreaterThan(0)
})

test('arbitrary nesting', () => {
  const nested = [
    mk('a.md', 'A'),
    mk('b.md', 'B', { parent: 'A' }),
    mk('c.md', 'C', { parent: 'B' }),
  ]
  const sm = buildSlugMap(nested)
  const t = buildNavTree(nested, sm)
  expect(t[0].children[0].doc.title).toBe('B')
  expect(t[0].children[0].children[0].doc.title).toBe('C')
  expect(navOpenPath(t, 'c.md')).toEqual(new Set(['a.md', 'b.md']))
})

test('parent cycles are broken (node falls back to root)', () => {
  const cyclic = [
    mk('x.md', 'X', { parent: 'Y' }),
    mk('y.md', 'Y', { parent: 'X' }),
  ]
  const sm = buildSlugMap(cyclic)
  // must not infinite-loop; both end up reachable as roots/children without hang
  const t = buildNavTree(cyclic, sm)
  expect(t.length).toBeGreaterThan(0)
})

// ── issue #24: `order` must sort numerically, not lexically ──────────────────
// Reported by a consumer (foresight-2026 @ 1.7.0-beta.5): a fractional order like
// 1.5 silently sorted to the END of its section, because the sort key stringified
// and zero-padded the number and then compared it as text.

test('fractional order sorts between its integer neighbours (#24)', () => {
  const docs = [
    mk('two.md', 'Two', { order: 2 }),
    mk('onepointfive.md', 'One And A Half', { order: 1.5 }),
    mk('one.md', 'One', { order: 1 }),
  ]
  const sorted = docs.slice().sort(pinnedSort)
  expect(sorted.map((d) => d.order)).toEqual([1, 1.5, 2])
})

test('order is not capped at 4 digits, and negatives sort first (#24)', () => {
  const docs = [
    mk('big.md', 'Big', { order: 10000 }),
    mk('small.md', 'Small', { order: 9999 }),
    mk('neg.md', 'Neg', { order: -5 }),
  ]
  expect(
    docs
      .slice()
      .sort(pinnedSort)
      .map((d) => d.order)
  ).toEqual([-5, 9999, 10000])
})

test('pin buckets still outrank order (#24 fix keeps bucket precedence)', () => {
  const docs = [
    mk('b.md', 'B', { pin: 'bottom', order: 1 }),
    mk('t.md', 'T', { pin: 'top', order: 999 }),
    mk('n.md', 'N', { order: 500 }),
  ]
  expect(
    docs
      .slice()
      .sort(pinnedSort)
      .map((d) => d.filename)
  ).toEqual(['t.md', 'n.md', 'b.md'])
})

test('docs with no order share the 500 default and fall back to title', () => {
  const docs = [mk('z.md', 'Zebra'), mk('a.md', 'Apple')]
  expect(
    docs
      .slice()
      .sort(pinnedSort)
      .map((d) => d.title)
  ).toEqual(['Apple', 'Zebra'])
})

/*
Multi-level nesting: a parent with a parent (owner question, 2026-09-11).

The module's header has always claimed "nested arbitrarily deep" and every renderer is
written recursively — but nothing exercised more than TWO levels, because this project's own
corpus never goes deeper. An untested capability with a comment asserting it is exactly the
combination that lets a defect ship, and one did: checking this surfaced an NCX `playOrder`
bug that only a nested corpus reproduces (see epub.test.ts).

So these pin the depth itself rather than the bug it found.
*/
const deep = [
  mk('guide.md', 'Guide'),
  mk('api.md', 'API', { parent: 'Guide' }),
  mk('verbs.md', 'Verbs', { parent: 'API' }),
  mk('read.md', 'read', { parent: 'Verbs' }),
  mk('write.md', 'write', { parent: 'Verbs' }),
  mk('other.md', 'Other'),
]

test('a parent with a parent with a parent nests four levels deep', () => {
  const roots = buildNavTree(deep, buildSlugMap(deep))
  const guide = roots.find((n) => n.doc.title === 'Guide')!
  const api = guide.children[0]
  const verbs = api.children[0]

  expect(guide.depth).toBe(0)
  expect(api.doc.title).toBe('API')
  expect(api.depth).toBe(1)
  expect(verbs.doc.title).toBe('Verbs')
  expect(verbs.depth).toBe(2)
  expect(verbs.children.map((c) => c.doc.title)).toEqual(['read', 'write'])
  expect(verbs.children.every((c) => c.depth === 3)).toBe(true)

  // A doc with no parent stays at the root rather than being swept into the tree.
  expect(roots.some((n) => n.doc.title === 'Other')).toBe(true)
})

test('refreshing a DEEPLY nested page opens every ancestor, not just its parent', () => {
  /*
  This is what makes a deep link usable: land on `read` and the whole spine — Guide, API,
  Verbs — must be disclosed, or the reader sees a collapsed nav with no indication of where
  they are. Verified end-to-end on a temporary four-level corpus (every ancestor rendered
  `<details open>`, the leaf `aria-current="page"`); this pins the function that decides it.
  */
  const roots = buildNavTree(deep, buildSlugMap(deep))
  const open = navOpenPath(roots, 'read.md')

  expect([...open].sort()).toEqual(['api.md', 'guide.md', 'verbs.md'])
  // The current page is a leaf — it has nothing to disclose.
  expect(open.has('read.md')).toBe(false)
  // A sibling branch stays shut.
  expect(open.has('other.md')).toBe(false)
})
