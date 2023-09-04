/*!
# `<live-example>`

`<live-example>` makes it easy to insert interactive code examples in a web page.
It's effectively a super lightweight fiddle based on the `b8rjs`'s `fiddle` component
(which I miss dearly). (You're probably looking at it right now.)

You can simply wrap it around a sequence of code blocks in the DOM with the
languages (js, html, css) as annotations or you can directly set the `js`, `html`,
and `css` properties.

```css
.preview {
  padding: 0 var(--spacing);
}

.example {
  animation: throb ease-in-out 1s infinite alternate;
}

@keyframes throb {
  from { color: blue }
  to { color: red }
}
```
```js
// this code executes in an async function body
// it has xinjs, xinjsui, and preview (the preview div) available as local variables
const { div } = xinjs.elements
preview.append(div({class: 'example'}, 'fiddle de dee!'))
```
```html
<h2>Example</h2>
```

A `<live-example>` can be given a `context` object {[key: string]: any}, which is the
set of values available in the javascript's execution context (it is wrapped in an
async function and passed those values). By default, that context comprises `preview`
(the `<div>` in which the example is rendered), `xinjs` (`* from xinjs`),
and `xinjsui` (`* from xinjsui`).

The `LiveExample` class provides the static `insertExamples(element: HTMLElement)`
function that will replace any sequence of
`pre code[class="language-html"],pre code[class="language-js"],pre code[class="language-css"]`
elements with a `<live-example>` instance.
*/

import { Component as WebComponent, ElementCreator, elements } from 'xinjs'
import { codeEditor, CodeEditor } from './code-editor'
import { tabSelector, TabSelector } from './tab-selector'
import { icons } from './icons'

const { div, xinSlot, style, button } = elements

const AsyncFunction = (async () => {}).constructor

const codeStyle = {
  style: {
    width: '100%',
    height: '100%',
  },
}

document.head.append(
  style(
    { id: 'live-example' },
    `:root {
  --live-example-height: 400px;
}

live-example {
  --live-example-preview-height: calc(var(--live-example-height) * 0.5);
  --live-example-editor-height: calc(var(--live-example-height) * 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  height: var(--live-example-height);
  background: var(--background);
}

live-example.-maximize {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  margin: 0 !important;
}

live-example.-maximize .hide-if-maximized,
live-example:not(.-maximize) .show-if-maximized {
  display: none;
}

live-example [part="example"] {
  flex: 1 1 var(--live-example-preview-height);
  height: var(--live-example-preview-height);
  position: relative;
}

live-example .preview {
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #f7f7f7 url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 8 8" fill-opacity=".02" >\
  <rect x="4" width="4" height="4" /><rect y="4" width="4" height="4" /></svg>');
}

live-example [part="editors"] {
  flex: 1 1 var(--live-example-editor-height);
  height: var(--live-example-editor-height);
  position: relative;
}
`
  )
)

interface ExampleContext {
  [key: string]: any
}

export class LiveExample extends WebComponent {
  context: ExampleContext = {}

  static insertExamples(
    element: HTMLElement,
    context: ExampleContext = {}
  ): void {
    const sources = [
      ...element.querySelectorAll(
        'pre code[class="language-html"],pre code[class="language-js"],pre code[class="language-css"]'
      ),
    ].map((code) => ({
      block: code.parentElement as HTMLPreElement,
      language: code.classList[0].split('-').pop(),
      code: (code as HTMLElement).innerText,
    }))
    for (let index = 0; index < sources.length; index += 1) {
      const exampleSources = [sources[index]]
      while (
        index < sources.length - 1 &&
        sources[index].block.nextElementSibling === sources[index + 1].block
      ) {
        exampleSources.push(sources[index + 1])
        index += 1
      }
      const example = liveExample({ style: { margin: `1em -1em` }, context })
      ;(exampleSources[0].block.parentElement as HTMLElement).insertBefore(
        example,
        exampleSources[0].block
      )
      exampleSources.forEach((source) => {
        switch (source.language) {
          case 'js':
            example.js = source.code
            break
          case 'html':
            example.html = source.code
            break
          case 'css':
            example.css = source.code
            break
        }
        source.block.remove()
      })
      example.showDefaultTab()
    }
  }

  get css(): string {
    return (this.parts.css as CodeEditor).value
  }

  set css(code: string) {
    ;(this.parts.css as CodeEditor).value = code
  }

  get html(): string {
    return (this.parts.html as CodeEditor).value
  }

  set html(code: string) {
    ;(this.parts.html as CodeEditor).value = code
  }

  get js(): string {
    return (this.parts.js as CodeEditor).value
  }

  set js(code: string) {
    ;(this.parts.js as CodeEditor).value = code
  }

  content = () => [
    div({ part: 'example' }, style({ part: 'style' })),
    tabSelector(
      { part: 'editors' },
      codeEditor({ name: 'js', mode: 'javascript', part: 'js', ...codeStyle }),
      codeEditor({ name: 'html', mode: 'html', part: 'html', ...codeStyle }),
      codeEditor({ name: 'css', mode: 'css', part: 'css', ...codeStyle }),
      button(
        {
          slot: 'after-tabs',
          title: 'copy as markdown',
          class: 'transparent',
          onClick: this.copy,
        },
        icons.copy()
      ),
      button(
        {
          slot: 'after-tabs',
          title: 'reload',
          class: 'transparent',
          onClick: this.refresh,
        },
        icons.refresh()
      ),
      button(
        {
          part: 'maximize',
          slot: 'after-tabs',
          title: 'maximize',
          class: 'transparent',
          onClick: this.toggleMaximize,
        },
        icons.minimize({ class: 'icon-minimize show-if-maximized' }),
        icons.maximize({ class: 'icon-maximize show-if-minimized' })
      )
    ),
    xinSlot({ part: 'sources', hidden: true }),
  ]

  connectedCallback(): void {
    super.connectedCallback()
    const { sources } = this.parts
    this.initFromElements([...sources.children] as HTMLElement[])
  }

  copy = () => {
    const js = this.js !== '' ? '```js\n' + this.js.trim() + '\n```\n' : ''
    const html =
      this.html !== '' ? '```html\n' + this.html.trim() + '\n```\n' : ''
    const css = this.css !== '' ? '```css\n' + this.css.trim() + '\n```\n' : ''

    navigator.clipboard.writeText(js + html + css)
  }

  toggleMaximize = () => {
    this.classList.toggle('-maximize')
  }

  refresh = () => {
    const { example, style } = this.parts as {
      style: HTMLStyleElement
      example: HTMLElement
    }

    const preview = div({ class: 'preview' })
    preview.innerHTML = this.html
    style.innerText = this.css
    if (example.children.length > 1) {
      example.children[1].replaceWith(preview)
    } else {
      example.append(preview)
    }

    const context = { preview, ...this.context }
    // @ts-expect-error ts is wrong
    const func = new AsyncFunction(...Object.keys(context), this.js)
    func(...Object.values(context)).catch((err: Error) => console.error(err))
  }

  initFromElements(elements: HTMLElement[]) {
    for (const element of elements) {
      element.hidden = true
      const [mode, ...lines] = element.innerHTML.split('\n') as string[]
      if (['js', 'html', 'css'].includes(mode)) {
        const minIndex = lines
          .filter((line) => line.trim() !== '')
          .map((line) => (line.match(/^\s*/) as string[])[0].length)
          .sort()[0]
        const source = (
          minIndex > 0 ? lines.map((line) => line.substring(minIndex)) : lines
        ).join('\n')
        ;(this.parts[mode] as CodeEditor).value = source
      }
    }
  }

  showDefaultTab() {
    const { editors } = this.parts as { editors: TabSelector }
    if (this.js !== '') {
      editors.value = 0
    } else if (this.html !== '') {
      editors.value = 1
    } else if (this.css !== '') {
      editors.value = 2
    }
  }

  render(): void {
    super.render()

    this.refresh()
  }
}

export const liveExample = LiveExample.elementCreator({
  tag: 'live-example',
}) as ElementCreator<LiveExample>

export function makeExamplesLive(element: HTMLElement) {
  const preElements = [...element.querySelectorAll('pre')].filter((pre) =>
    ['js', 'html', 'css', 'json'].includes(pre.innerText.split('\n')[0])
  )
  for (let i = 0; i < preElements.length; i++) {
    const parts = [preElements[i]]
    while (preElements[i].nextElementSibling === preElements[i + 1]) {
      parts.push(preElements[i + 1])
      i += 1
    }
    const example = liveExample()
    element.insertBefore(example, parts[0])
    example.initFromElements(parts)
  }
}
