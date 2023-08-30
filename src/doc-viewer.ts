import { Component as WebComponent, ElementCreator } from 'xinjs'
import { markdownViewer, MarkdownViewer } from './markdown-viewer'
import { liveExample } from './live-example'

export class DocViewer extends WebComponent {
  get value(): string {
    const { doc } = this.parts as { doc: MarkdownViewer }
    return doc.value
  }

  set value(markdown: string) {
    const { doc } = this.parts as { doc: MarkdownViewer }
    doc.value = markdown
  }

  insertExamples = () => {
    const sources = [
      ...this.querySelectorAll(
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
      const example = liveExample({ style: { margin: `1em -1em` } })
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

  content = () =>
    markdownViewer({
      part: 'doc',
      style: {
        display: 'block',
        maxWidth: '44em',
        margin: 'auto',
        padding: `0 1em`,
      },
      didRender: this.insertExamples,
    })
}

export const docViewer = DocViewer.elementCreator({
  tag: 'doc-viewer',
}) as ElementCreator<DocViewer>
