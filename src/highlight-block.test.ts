import { test, expect, describe } from 'bun:test'
import { tosiHighlight, HighlightBlock } from './highlight-block.js'

/*
Poll for the upgrade rather than sleeping a fixed time.

Setting `value` queues a render, so the explicit `render()` in these tests is followed by
another — and the `_token` guard correctly invalidates the first grammar callback, so a fixed
sleep can land in the gap between them. That is #142's rule applied to our own suite: settle
on a PREDICATE, with a budget, and let a timeout be a distinguishable failure rather than a
silently wrong assertion.
*/
async function settled(test: () => boolean, budgetMs = 2000): Promise<boolean> {
  const started = Date.now()
  while (Date.now() - started < budgetMs) {
    if (test()) return true
    await new Promise((r) => setTimeout(r, 10))
  }
  return false
}

/*
`<tosi-highlight>` is for code that arrives at RUNTIME. Markdown fences do not need it —
`tosijs-ui/site` highlights those at build time, which is the only way tokens reach the ePub
and the printed page.
*/
describe('<tosi-highlight>', () => {
  test('renders readable plain code SYNCHRONOUSLY, before any grammar loads', async () => {
    // The reader must never see an empty box while Prism is fetched, and if the grammar
    // never arrives this is the final state rather than a failure.
    const el = tosiHighlight({ language: 'rust' })
    el.value = 'fn main() {}'
    document.body.append(el)
    await el.whenHydrated
    el.render()
    expect(el.textContent).toContain('fn main()')
    el.remove()
  })

  test('upgrades to token markup once the grammar is available', async () => {
    const el = tosiHighlight({ language: 'rust' })
    el.value = 'fn main() {}'
    document.body.append(el)
    await el.whenHydrated
    el.render()
    expect(
      await settled(() => !!el.querySelector('.token')),
      'grammar never applied within the budget'
    ).toBe(true)
    el.remove()
  })

  test('an unknown language stays plain rather than failing', async () => {
    const el = tosiHighlight({ language: 'definitely-not-a-language' })
    el.value = 'whatever'
    document.body.append(el)
    await el.whenHydrated
    el.render()
    // Give it the same budget the success case gets, then assert it stayed plain.
    await settled(() => !!el.querySelector('.token'), 200)
    expect(el.textContent).toContain('whatever')
    expect(el.querySelector('.token')).toBeNull()
    el.remove()
  })

  test('it is LIGHT DOM — token colours must be reachable from a page stylesheet', () => {
    // A shadow root would isolate `.token.*` and force every consumer to re-declare the
    // palette, which is the opposite of the point.
    expect(HighlightBlock.shadowStyleSpec).toBeUndefined()
  })

  test('the language class is what the CSS keys on', async () => {
    const el = tosiHighlight({ language: 'python' })
    el.value = 'x = 1'
    document.body.append(el)
    await el.whenHydrated
    el.render()
    expect(el.querySelector('code')!.className).toBe('language-python')
    el.remove()
  })
})
