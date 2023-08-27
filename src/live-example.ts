/*!
# `<live-example>`

`<live-example>` makes it easy to insert interactive code examples in a web page.
It's effectively a super lightweight fiddle based on the `b8rjs`'s `fiddle` component
(which I miss dearly). (You're probably looking at it right now.)

You can simply wrap it around a sequence of code blocks in the DOM with the
languages (js, html, css) as annotations or you can directly set the `js`, `html`,
and `css` properties.

```css
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
*/

import { Component as WebComponent, ElementCreator, elements } from 'xinjs'
import * as xinjsui from './index'
import * as xinjs from 'xinjs'
import { codeEditor, CodeEditor } from './code-editor'
import { tabSelector, TabSelector } from './tab-selector'

const { div, span, xinSlot, style, button } = elements

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
}

live-example [part="example"] {
  flex: 1 1 50%;
  position: relative;
}

live-example [part=preview] {
  height: 100%;
}

live-example [part="editors"] {
  flex: 1 1 var(--live-example-editor-height);
  position: relative;
}
`
  )
)

export class LiveExample extends WebComponent {
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
    div(
      { part: 'example' },
      style({ part: 'style' }),
      div({ part: 'preview', class: 'preview' })
    ),
    tabSelector(
      { part: 'editors' },
      codeEditor({ name: 'js', mode: 'javascript', part: 'js', ...codeStyle }),
      codeEditor({ name: 'html', mode: 'html', part: 'html', ...codeStyle }),
      codeEditor({ name: 'css', mode: 'css', part: 'css', ...codeStyle }),
      button(
        {
          slot: 'after-tabs',
          title: 'reload',
          class: 'transparent',
          onClick: this.refresh,
        },
        span({ class: 'icon-refresh' })
      )
    ),
    xinSlot({ part: 'sources', hidden: true }),
  ]

  connectedCallback(): void {
    super.connectedCallback()
    const { sources } = this.parts
    this.initFromElements([...sources.children] as HTMLElement[])
  }

  refresh = () => {
    const { style, preview } = this.parts as {
      style: HTMLStyleElement
      preview: HTMLDivElement
    }

    style.innerText = this.css
    preview.innerHTML = this.html

    // @ts-expect-error ts is wrong
    const func = new AsyncFunction('preview', 'xinjs', 'xinjsui', this.js)
    func(preview, xinjs, xinjsui).catch((err: Error) => console.error(err))
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
