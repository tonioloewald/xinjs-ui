import { Component, ElementCreator } from 'xinjs'
import { marked } from 'marked'

/*!
# `<markdown-viewer>`

Render [markdown](https://www.markdownguide.org/) anywhere, either using the `src` attribute to load
the file asynchronously, or just put the text inside it.

`<markdown-viewer>` renders markdown using [marked](https://www.npmjs.com/package/marked).

```
<markdown-viewer src="/path/to/file.md">
```

You can wrap markdown source per the following example:

```html
<markdown-viewer>
## hello
world
</markdown-viewer>
```
```css
markdown-viewer {
  display: block;
  padding: var(--spacing);
}
```

Or, just set the element's `value` and it will render it for you. You can try
this in the console, e.g.

```
$('.preview markdown-viewer').value = 'testing\n\n## this is a test'
```
*/

export class MarkdownViewer extends Component {
  src = ''
  value = ''
  content = null
  constructor() {
    super()
    this.initAttributes('src')
  }
  connectedCallback(): void {
    super.connectedCallback()
    if (this.src !== '') {
      ;(async () => {
        const request = await fetch(this.src)
        this.value = await request.text()
      })()
    } else if (this.value === '') {
      this.value = this.textContent != null ? this.textContent : ''
    }
  }
  didRender: (() => void) | (() => Promise<void>) = (): void => {}
  render() {
    super.render()
    this.innerHTML = marked(typeof this.value === 'string' ? this.value : '', {
      mangle: false,
      headerIds: false,
    })
    this.didRender()
  }
}

export const markdownViewer = MarkdownViewer.elementCreator({
  tag: 'markdown-viewer',
}) as ElementCreator<MarkdownViewer>
