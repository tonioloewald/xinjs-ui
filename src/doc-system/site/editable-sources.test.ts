import { test, expect, describe } from 'bun:test'
import {
  editableSourcePaths,
  mayEditSource,
  isExecutedByBuild,
} from './editable-sources.js'
import * as pathMod from 'path'

/*
#128: source writes were contained only to the repo root, which includes every file that
executes on the developer's next ordinary command — `.git/hooks/*`, `bunfig.toml` (preload),
`package.json` scripts, `bin/`.

Split out of #121 so closing that issue did not bury this half. With CSRF closed there is no
known path to an unauthorised write; this removes the consequence of a future one.
*/
const ROOT = '/repo'
const corpus = [
  { path: 'src/data-table.ts' },
  { path: 'src/docs/components.md' },
  { path: 'README.md' },
]

describe('editableSourcePaths (#128)', () => {
  const allowed = editableSourcePaths(corpus, ROOT)

  test('a file the extractor scraped is editable', () => {
    expect(
      mayEditSource(pathMod.resolve(ROOT, 'src/data-table.ts'), allowed)
    ).toBe(true)
    expect(mayEditSource(pathMod.resolve(ROOT, 'README.md'), allowed)).toBe(
      true
    )
  })

  test('the execution surfaces are NOT — this is the point of the issue', () => {
    for (const danger of [
      '.git/hooks/pre-commit',
      'bunfig.toml',
      'package.json',
      'bin/dev.ts',
      'tosijs-site.config.ts',
    ]) {
      expect(
        mayEditSource(pathMod.resolve(ROOT, danger), allowed),
        `${danger} must not be writable`
      ).toBe(false)
    }
  })

  test('a repo file that is simply not a doc source is also refused', () => {
    // Correct by default: the set is derived, so anything new is denied until it is a doc.
    expect(
      mayEditSource(pathMod.resolve(ROOT, 'src/not-a-doc.ts'), allowed)
    ).toBe(false)
  })

  test('FAILS CLOSED — no corpus permits nothing', () => {
    expect(editableSourcePaths(null, ROOT).size).toBe(0)
    expect(editableSourcePaths(undefined, ROOT).size).toBe(0)
    expect(editableSourcePaths([], ROOT).size).toBe(0)
    expect(
      mayEditSource(
        pathMod.resolve(ROOT, 'README.md'),
        editableSourcePaths(null, ROOT)
      )
    ).toBe(false)
  })

  test('a corpus entry escaping the root does not widen the set', () => {
    const escaped = editableSourcePaths([{ path: '../../etc/passwd' }], ROOT)
    expect(escaped.size).toBe(0)
  })

  test('entries with no path are skipped rather than throwing', () => {
    const mixed = editableSourcePaths(
      [{ path: 'README.md' }, {}, { path: '' }] as any,
      ROOT
    )
    expect(mixed.size).toBe(1)
  })

  test('a null resolved path is never editable', () => {
    expect(mayEditSource(null, allowed)).toBe(false)
  })
})

/*
Against the REAL corpus, not a synthetic one.

The original tests passed while the allow-list admitted `bin/make-icon-data.js` — which the
build spawns every rebuild — because the three-entry fixture omitted `bin/` files entirely.
A synthetic corpus tests the predicate; only the shipped corpus tests the DECISION.

Found by the 1.14.0 pre-release review. The lesson is not "add a case", it is that a fixture
chosen to exercise a function will omit exactly the inputs that make it dangerous.
*/
describe('against the shipped corpus (#128 review remediation)', () => {
  const load = async () => {
    const corpus = await Bun.file(
      `${import.meta.dir}/../../../demo/docs.json`
    ).json()
    const root = pathMod.resolve(`${import.meta.dir}/../../..`)
    return { allowed: editableSourcePaths(corpus, root), root }
  }

  test('a build-EXECUTED doc source is refused, however well documented', async () => {
    const { allowed, root } = await load()
    // bin/make-icon-data.js carries a /*# block AND is spawned by bin/dev.ts every build.
    expect(
      mayEditSource(pathMod.resolve(root, 'bin/make-icon-data.js'), allowed)
    ).toBe(false)
    expect(
      mayEditSource(pathMod.resolve(root, 'bin/release-notes.ts'), allowed)
    ).toBe(false)
  })

  test('ordinary doc sources are still editable — the feature must survive the fix', async () => {
    const { allowed, root } = await load()
    expect(
      mayEditSource(pathMod.resolve(root, 'src/data-table.ts'), allowed)
    ).toBe(true)
    expect(
      mayEditSource(pathMod.resolve(root, 'src/docs/components.md'), allowed)
    ).toBe(true)
  })

  test('the corpus really does contain the dangerous entry — else the test above is vacuous', async () => {
    const corpus = await Bun.file(
      `${import.meta.dir}/../../../demo/docs.json`
    ).json()
    expect(
      corpus.some((d: any) => d.path === 'bin/make-icon-data.js'),
      'if this fails the refusal test proves nothing'
    ).toBe(true)
  })
})

describe('isExecutedByBuild', () => {
  test('covers bin/, the spawned CLIs, and the css generator', () => {
    for (const p of [
      'bin/anything.ts',
      'bin/make-icon-data.js',
      'src/doc-system/site/epub-cli.ts',
      'src/doc-system/site/check-examples-cli.js',
      'src/doc-system/site/generate-css.ts',
    ])
      expect(isExecutedByBuild(p), p).toBe(true)
  })

  test('does not over-reach into ordinary sources', () => {
    for (const p of [
      'src/data-table.ts',
      'src/docs/components.md',
      'README.md',
    ])
      expect(isExecutedByBuild(p), p).toBe(false)
  })
})
