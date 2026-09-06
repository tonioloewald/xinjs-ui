import { test, expect, describe } from 'bun:test'

/*
#133: the root barrel must not drag the doc-system cluster into every consumer bundle.

`code-editor` pulls CodeMirror; `live-example` and `doc-system/doc-system` each pull `tjs-lang`
independently. The package has no `sideEffects` field — correctly, since `elementCreator()`
registers custom elements at import time and a blanket `sideEffects: false` shakes a bare
`import 'tosijs-ui'` down to zero registrations — so a bundler must treat every re-exported
module as side-effectful and cannot drop it.

Measured on a real 15MB React bundle (snowfox-app): 1.35 MB / 8.9% saved. Re-measured here on
the barrel alone: 1.68 MB → 0.38 MB, i.e. the cluster was 77% of it.

A SOURCE-level assertion rather than a size budget: a byte threshold would drift with every
dependency bump and fail for reasons that have nothing to do with this, whereas the invariant
is exactly "these four are not re-exported here".
*/
const DOC_SYSTEM_MODULES = [
  './code-editor.js',
  './doc-browser.js',
  './doc-system/doc-system.js',
  './live-example.js',
]

describe('root barrel (#133)', () => {
  test('does not re-export the doc-system cluster', async () => {
    const barrel = await Bun.file(`${import.meta.dir}/index.ts`).text()
    // Ignore the explanatory comment block, which names all four on purpose.
    const code = barrel.replace(/\/\*[\s\S]*?\*\//g, '')
    for (const mod of DOC_SYSTEM_MODULES) {
      expect(
        code.includes(mod),
        `${mod} is re-exported from the root barrel — that puts CodeMirror or tjs-lang in ` +
          `every consumer bundle. Import it by subpath instead.`
      ).toBe(false)
    }
  })

  test('the iife entry DOES pull them, so the doc site and CDN users are unaffected', async () => {
    const iife = await Bun.file(`${import.meta.dir}/index-iife.ts`).text()
    for (const mod of DOC_SYSTEM_MODULES) {
      expect(iife.includes(mod), `${mod} must be in the iife bundle`).toBe(true)
    }
  })

  test('ordinary components are still exported from the barrel', async () => {
    const m = (await import('./index.js')) as Record<string, unknown>
    for (const name of ['tosiTable', 'tosiDialog', 'tosiForm', 'tosiField']) {
      expect(typeof m[name]).toBe('function')
    }
  })
})

/*
The literal-string check above catches a DIRECT re-export being added back. It cannot see the
regression that would realistically happen (the 1.14.0 review's F9): the barrel exports
`schema-form/fields.ts`, `value-renderer.ts` and `crud.ts`, any of which could grow a
`<tosi-code>` import — a code-editor field type, a code preview, a reused editor. CodeMirror is
then back in every consumer bundle and `src/index.ts` still mentions none of the four names, so
the guard stays green while the 1.35MB win is gone.

Bundle it and read the SOURCEMAP instead — the technique CLAUDE.md already mandates for "what
is actually in this bundle", because minification erases the package paths a grep would look
for. Asserts on the source LIST, not on a byte count: a threshold drifts and needs maintaining,
"zero @codemirror sources" does not.
*/
test('#133/F9: no heavy source reaches a bundle built from the barrel', async () => {
  const { mkdtemp, writeFile, readFile, rm } = await import('fs/promises')
  const { tmpdir } = await import('os')
  const { join } = await import('path')
  const dir = await mkdtemp(join(tmpdir(), 'barrel-guard-'))
  try {
    const entry = join(dir, 'entry.ts')
    // Four ordinary components — the shape of an app that imports a button, which is
    // exactly the consumer #133 was about.
    await writeFile(
      entry,
      `import { tosiRating, tosiSelect, tosiTable, tosiCarousel } from ${JSON.stringify(
        join(import.meta.dir, '../dist/index.js')
      )}\nconsole.log(tosiRating, tosiSelect, tosiTable, tosiCarousel)\n`
    )
    /*
    Shelled out, not `Bun.build()` — CLAUDE.md's rule (its native arena is never returned,
    ~30MB a call). A test process is short-lived enough that it would not bite, but the
    recorded methodology in `src/index.ts` IS a command line, so running that exact command
    keeps the guard and the published figure describing the same thing.
    */
    const out = join(dir, 'out')
    const proc = Bun.spawn(
      [
        'bun',
        'build',
        entry,
        '--minify',
        '--target',
        'browser',
        '--sourcemap=linked',
        '--outdir',
        out,
        '--external',
        'tosijs',
        '--external',
        'marked',
        '--external',
        'tjs-lang',
      ],
      { stdout: 'pipe', stderr: 'pipe' }
    )
    const stderr = await new Response(proc.stderr).text()
    expect(await proc.exited, `bun build failed:\n${stderr}`).toBe(0)

    const map = JSON.parse(await readFile(join(out, 'entry.js.map'), 'utf8'))
    const HEAVY =
      /@codemirror\/|@lezer\/|tjs-lang|code-editor|live-example|doc-browser|doc-system\/doc-system/
    const heavy = (map.sources as string[]).filter((s) => HEAVY.test(s))

    expect(
      map.sources.length,
      'sourcemap should list real inputs'
    ).toBeGreaterThan(10)
    expect(
      heavy,
      `these reached a plain component bundle through the root barrel, which is the ~1.3MB ` +
        `regression #133 removed. Find the transitive import and move it behind a subpath.`
    ).toEqual([])
  } finally {
    await rm(dir, { recursive: true, force: true })
  }
}, 60_000)
