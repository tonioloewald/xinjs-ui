/*!
# example

`<xin-example>` makes it easy to insert interactive code examples in a web page.
It's effectively a super lightweight fiddle based on the `b8rjs`'s `fiddle` component
(which I miss dearly).

*You're probably looking at it right now.*

```js
// this code executes in an async function body
// it has xinjs, xinjsui, and preview (the preview div) available as local variables
const { div } = xinjs.elements
preview.append(div({class: 'example'}, 'fiddle de dee!'))
preview.append('Try editing some code and hitting refresh…')
```
```html
<h2>Example</h2>
```
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

You can simply wrap it around a sequence of code blocks in the DOM with the
languages (js, html, css) as annotations or you can directly set the `js`, `html`,
and `css` properties.

## context

A `<xin-example>` can be given a `context` object {[key: string]: any}, which is the
set of values available in the javascript's execution context (it is wrapped in an
async function and passed those values). By default, that context comprises `preview`
(the `<div>` in which the example is rendered), `xinjs` (`* from xinjs`),
and `xinjsui` (`* from xinjsui`).

The `LiveExample` class provides the static `insertExamples(element: HTMLElement)`
function that will replace any sequence of
`pre code[class="language-html"],pre code[class="language-js"],pre code[class="language-css"]`
elements with a `<xin-example>` instance.
*/

import {
  Component as WebComponent,
  ElementCreator,
  elements,
  vars,
} from 'xinjs'
import { codeEditor, CodeEditor } from './code-editor'
import { tabSelector, TabSelector } from './tab-selector'
import { icons } from './icons'

const { div, xinSlot, style, button, h4 } = elements

const AsyncFunction = (async () => {}).constructor

const codeStyle = {
  style: {
    width: '100%',
    height: '100%',
  },
}

document.head.append(
  style(
    { id: 'xin-example' },
    `:root {
  --xin-example-height: 320px;
}

xin-example {
  --xin-example-preview-height: calc(var(--xin-example-height) * 0.5);
  --code-editors-bar-bg: #777;
  --code-editors-bar-color: #fff;
  --widget-bg: #fffc;
  --widget-color: #000;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  height: var(--xin-example-height);
  background: var(--background);
  box-sizing: border-box;
}

xin-example.-maximize {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  margin: 0 !important;
}

.-maximize {
  /* FIXME: kludge */
  z-index: 10;
}

xin-example.-maximize .hide-if-maximized,
xin-example:not(.-maximize) .show-if-maximized {
  display: none;
}

xin-example [part="example"] {
  flex: 1 1 var(--xin-example-preview-height);
  height: var(--xin-example-preview-height);
  position: relative;
}

xin-example .preview {
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #f7f7f7 url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 8 8" fill-opacity=".02" >\
  <rect x="4" width="4" height="4" /><rect y="4" width="4" height="4" /></svg>');
}

xin-example [part="editors"] {
  flex: 1 1 200px;
  height: 100%;
  position: relative;
}

xin-example .example-widgets {
  position: absolute;
  right: 2px;
  top: 2px;
  background: var(--widget-bg);
  border-radius: 5px;
}

xin-example.-maximize .example-widgets {
  transform: none;
}

xin-example .example-widgets svg {
  fill: var(--widget-color);
}

xin-example .code-editors {
  overflow: hidden;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw !important;
  height: 100vh !important;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  flex-direction: column;
  z-index: 10;
}

xin-example .code-editors:not([hidden]) {
  display: flex;
}

xin-example .code-editors > h4 {
  padding: 5px;
  margin: 0;
  text-align: center;
  background: var(--code-editors-bar-bg);
  color: var(--code-editors-bar-color);
  cursor: move;
}

xin-example button.transparent,
xin-example .sizer {
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  padding: 0;
  margin: 0;
}

xin-example .sizer {
  cursor: nwse-resize;
}
`
  )
)

interface ExampleContext {
  [key: string]: any
}

export class LiveExample extends WebComponent {
  prettier = false
  prefix = 'lx'
  storageKey = 'live-example-payload'
  context: ExampleContext = {}
  uuid: string = crypto.randomUUID()
  remoteId = ''

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
    div(
      {
        class: 'code-editors',
        part: 'codeEditors',
        hidden: true,
      },
      h4('Code'),
      button(
        {
          title: 'close code',
          class: 'transparent',
          style: {
            position: 'absolute',
            top: 0,
            right: 0,
          },
          onClick() {
            window.close()
          },
        },
        icons.x({
          style: {
            fill: vars.codeEditorsBarColor,
          },
        })
      ),
      tabSelector(
        { part: 'editors' },
        codeEditor({
          name: 'js',
          mode: 'javascript',
          part: 'js',
          ...codeStyle,
        }),
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
            onClick: this.refreshRemote,
          },
          icons.refresh()
        )
        /*
        button(
          {
            part: 'more',
            slot: 'after-tabs',
            title: 'code menu',
            class: 'transparent',
          },
          icons.moreVertical()
        )
        */
      )
    ),
    div(
      { class: 'example-widgets' },
      button(
        {
          title: 'view/edit code',
          class: 'transparent',
          onClick: this.openEditorWindow,
        },
        icons.code()
      ),
      button(
        {
          part: 'maximize',
          title: 'maximize preview',
          class: 'transparent',
          onClick: this.toggleMaximize,
        },
        icons.minimize({ class: 'icon-minimize show-if-maximized' }),
        icons.maximize({ class: 'icon-maximize hide-if-maximized' })
      )
    ),
    xinSlot({ part: 'sources', hidden: true }),
  ]

  connectedCallback(): void {
    super.connectedCallback()
    const { sources } = this.parts
    this.initFromElements([...sources.children] as HTMLElement[])
    addEventListener('storage', this.remoteChange)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()

    const { storageKey, remoteKey } = this

    localStorage.setItem(
      storageKey,
      JSON.stringify({
        remoteKey,
        close: true,
      })
    )
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

  get remoteKey(): string {
    return this.remoteId !== ''
      ? this.prefix + '-' + this.remoteId
      : this.prefix + '-' + this.uuid
  }

  remoteChange = (event: StorageEvent) => {
    console.log(event.key, event)
    const data = localStorage.getItem(this.storageKey)
    if (event.key !== this.storageKey) {
      return
    }
    console.log('received data from remote')
    if (data === null) {
      return
    }
    const { remoteKey, css, html, js, close } = JSON.parse(data)
    if (remoteKey !== this.remoteKey) {
      return
    }
    if (close === true) {
      window.close()
    }
    console.log('received new code from remote')
    this.css = css
    this.html = html
    this.js = js
    this.refresh()
  }

  openEditorWindow = () => {
    const { storageKey, remoteKey, css, html, js, uuid, prefix } = this
    const href = location.href.split('?')[0] + `?${prefix}=${uuid}`
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        remoteKey,
        css,
        html,
        js,
      })
    )
    window.open(href)
  }

  refreshRemote = () => {
    const { remoteKey, css, html, js } = this
    localStorage.setItem(
      this.storageKey,
      JSON.stringify({ remoteKey, css, html, js })
    )
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
    try {
      // @ts-expect-error ts is wrong and it makes me so mad
      const func = new AsyncFunction(...Object.keys(context), this.js)
      func(...Object.values(context)).catch((err: Error) => console.error(err))
    } catch (e) {
      console.error(e)
      window.alert(`Error: ${e}, the console may have more information…`)
    }
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

    if (this.remoteId !== '') {
      const data = localStorage.getItem(this.storageKey)
      if (data !== null) {
        const { remoteKey, css, html, js } = JSON.parse(data)
        if (this.remoteKey !== remoteKey) {
          return
        }
        this.css = css
        this.html = html
        this.js = js
        this.parts.codeEditors.hidden = false
      }
    } else {
      this.refresh()
    }
  }
}

export const liveExample = LiveExample.elementCreator({
  tag: 'xin-example',
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

const params = new URL(window.location.href).searchParams
const remoteId = params.get('lx')
if (remoteId) {
  document.title += ' [code editor]'
  document.body.textContent = ''
  document.body.append(liveExample({ remoteId }))
}
