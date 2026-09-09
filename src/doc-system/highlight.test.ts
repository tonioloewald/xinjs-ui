import { test, expect, describe } from 'bun:test'
import {
  grammarFor,
  ensureGrammar,
  highlightHtml,
  highlightBlocks,
  languagesIn,
} from './highlight.js'

/*
Static code was highlighted NOWHERE before this: the pre-rendered page emitted a bare
`<pre><code class="language-ts">`, the client never touched it, and the ePub stripped the
language class. A doc system that publishes books had no highlighting in the books.
*/

describe('fence language → Prism grammar', () => {
  test.each([
    ['js', 'javascript'],
    ['ts', 'typescript'],
    ['tjs', 'javascript'],
    ['html', 'markup'],
    ['xml', 'markup'],
    ['sh', 'bash'],
    ['test', 'javascript'],
    ['rust', 'rust'],
  ])('%s → %s', (fence, grammar) => {
    expect(grammarFor(fence)).toBe(grammar)
  })

  test('an unmapped language passes through rather than throwing', () => {
    // An unknown language is a plain code block, not a build failure.
    expect(grammarFor('brainfuck')).toBe('brainfuck')
  })
})

describe('the BUILD path (string in, string out)', () => {
  test('emits token markup for a known language', async () => {
    const out = await highlightHtml(
      '<pre><code class="language-rust">fn main() {}</code></pre>'
    )
    expect(out).toContain('class="token keyword"')
    expect(out).toContain('data-highlighted')
  })

  test('an unknown language is left EXACTLY as it was', async () => {
    const html = '<pre><code class="language-zzz">???</code></pre>'
    expect(await highlightHtml(html)).toBe(html)
  })

  test('entities are decoded before tokenizing, and re-escaped after', async () => {
    // marked escapes `<` in code; Prism must see real source or it mis-tokenizes, and the
    // output must be escaped again or the page breaks.
    const out = await highlightHtml(
      '<pre><code class="language-js">a &lt; b &amp;&amp; c</code></pre>'
    )
    expect(out).toContain('&lt;')
    expect(out).not.toContain('a < b')
  })

  test('idempotent — running twice changes nothing', async () => {
    const once = await highlightHtml(
      '<pre><code class="language-rust">fn main() {}</code></pre>'
    )
    expect(await highlightHtml(once)).toBe(once)
  })

  test('HTML highlighted by something ELSE is left alone', async () => {
    /*
    Our own output is skipped by the `data-highlighted` attribute, which stops the regex
    matching at all — so the token-content check guards a different case: markup that carries
    tokens without our marker, i.e. highlighted upstream or hand-written. Tested separately
    because mutation showed the first test passes with that check removed, which made it look
    like dead code.
    */
    const external =
      '<pre><code class="language-rust"><span class="token keyword">fn</span></code></pre>'
    expect(await highlightHtml(external)).toBe(external)
  })

  test('languagesIn reports what a page needs, deduped', () => {
    const html =
      '<pre><code class="language-js">a</code></pre>' +
      '<pre><code class="language-JS">b</code></pre>' +
      '<pre><code class="language-rust">c</code></pre>'
    expect(languagesIn(html).sort()).toEqual(['js', 'rust'])
  })

  test('html with no code blocks is returned untouched, without loading Prism', async () => {
    const html = '<p>just prose</p>'
    expect(await highlightHtml(html)).toBe(html)
  })
})

describe('the DOM path', () => {
  const doc = () => {
    const root = document.createElement('div')
    return root
  }

  test('highlights static blocks and reports the count', async () => {
    const root = doc()
    root.innerHTML =
      '<pre><code class="language-ts">const x: number = 1</code></pre>'
    expect(await highlightBlocks(root)).toBe(1)
    expect(root.querySelector('.token')).toBeTruthy()
  })

  test('SKIPS anything inside a live example — CodeMirror owns those', async () => {
    const root = doc()
    root.innerHTML =
      '<tosi-example><pre><code class="language-js">x</code></pre></tosi-example>'
    expect(await highlightBlocks(root)).toBe(0)
    expect(root.querySelector('.token')).toBeNull()
  })

  test('skips already-highlighted blocks — this is what keeps hydration identical', async () => {
    /*
    The build emits token markup; the client runs the same pass over the same DOM. If it
    re-highlighted, the hydrated page would differ from the pre-rendered one — the exact
    byte-identity the doc system's shared renderer exists to guarantee.
    */
    const root = doc()
    root.innerHTML = await highlightHtml(
      '<pre><code class="language-rust">fn main() {}</code></pre>'
    )
    expect(await highlightBlocks(root)).toBe(0)
  })

  test('an unknown grammar leaves its block alone but does not stop the others', async () => {
    const root = doc()
    root.innerHTML =
      '<pre><code class="language-zzz">???</code></pre>' +
      '<pre><code class="language-rust">fn main() {}</code></pre>'
    expect(await highlightBlocks(root)).toBe(1)
    expect(root.querySelector('.language-zzz')!.innerHTML).toBe('???')
  })
})

test('grammars load on demand, including ones CodeMirror does not bundle', async () => {
  // The reason for Prism over reusing CodeMirror: a prose or book corpus uses languages the
  // editor never needed.
  for (const lang of ['rust', 'python', 'bash', 'yaml', 'json'])
    expect(await ensureGrammar(lang), `${lang} grammar should load`).toBe(true)
})

/*
The coupling that broke a build: the highlighter and `insertExamples` must agree about which
fences are live examples. When they did not, the build tokenized the `html` fence of every
grouped example, `insertExamples` read spans instead of markup, and seven doc tests across two
pages failed as "Expected 0 to be 4" — a component reported broken when the pipeline was.
*/
describe('executable fences are NOT highlighted — they are live-example source', () => {
  test.each(['js', 'ts', 'tjs', 'html', 'css', 'test'])(
    '%s is left alone under the default policy',
    async (lang) => {
      const html = `<pre><code class="language-${lang}">const x = 1</code></pre>`
      expect(await highlightHtml(html)).toBe(html)
    }
  )

  test('`:static` makes an executable fence highlightable — that is the point of it', async () => {
    const out = await highlightHtml(
      '<pre data-example-mode="static"><code class="language-js">const x = 1</code></pre>'
    )
    expect(out).toContain('class="token keyword"')
  })

  test('under opt-in, an unmarked executable fence IS static, so it highlights', async () => {
    const html = '<pre><code class="language-js">const x = 1</code></pre>'
    expect(await highlightHtml(html, 'opt-in')).toContain(
      'class="token keyword"'
    )
  })

  test('under opt-in, a fence that ASKS to run is still left alone', async () => {
    const html =
      '<pre data-example-mode="inline"><code class="language-js">const x = 1</code></pre>'
    expect(await highlightHtml(html, 'opt-in')).toBe(html)
  })
})
