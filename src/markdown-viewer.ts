import { Component, ElementCreator } from 'xinjs'
import { marked } from 'marked'
class MarkdownViewer extends Component {
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
