import { Component as WebComponent, ElementCreator, elements } from 'xinjs'

const { style, xinSlot, div } = elements

const richTextStyle = style()

richTextStyle.innerText = `
rich-text {
  display: flex;
  flex-direction: column;
  height: 100%;
}
rich-text [part="toolbar"] {
  padding: 4px;
  display: flex;
  gap: 0px;
  flex: 0 0 auto;
}
`

document.head.append(richTextStyle)

/*!
# `<rich-text>`

A simple and easily extensible `document.execCommand` WYSIWYG editor with some conveniences.

By default, it treats its initial contents as its document, but you can also set (and get)
its `value`.

It has a `toolbar` slot (actually a xin-slot because it doesn't use the shadowDOM).

A `<button>` element in the toolbar simply needs a `data-command` attribute and it
will fire `document.execCommand`. You can add extra parameters (the second parameter is
added as `false` automatically) using commas, e.g. `data-command="formatBlock,H2"` will
trigger `document.execCommand('formatBlock', false, 'H2')`.

`<select>` elements are also supported, just put the same string in the `<option>` elements'
`value` property.

Obviously, you can just implement your own widgets and do anything you want.

The `<rich-text>` component provides `selectedText` and `selectedBlocks` properties, allowing
you to easily perform operations on text selections, and a `selectionChange` callback (which
simply passes through document `selectionchange` events, but also passes a reference to
the `<rich-text>` component).
*/

export class RichText extends WebComponent {
  get value(): string {
    return this.parts.doc.innerHTML
  }

  set value(docHtml: string) {
    this.parts.doc.innerHTML = docHtml
  }

  blockElement(elt: Node): Element | undefined {
    const { doc } = this.parts
    while (elt.parentElement !== null && elt.parentElement !== doc) {
      elt = elt.parentElement
    }
    return elt.parentElement === doc ? (elt as Element) : undefined
  }

  get selectedBlocks(): any[] {
    const { doc } = this.parts
    const selObject = window.getSelection()
    if (selObject === null) {
      return []
    }
    const blocks = [] as any[]
    for (let i = 0; i < selObject.rangeCount; i++) {
      const range = selObject.getRangeAt(i)
      if (!doc.contains(range.commonAncestorContainer)) {
        continue
      }
      let block: Element | null = this.blockElement(
        range.startContainer
      ) as Element
      const lastBlock = this.blockElement(range.endContainer) as Element
      blocks.push(block)
      while (block !== lastBlock && block !== null) {
        block = block.nextElementSibling
        blocks.push(block)
      }
    }
    return blocks
  }

  get selectedText(): string {
    const selObject = window.getSelection()
    if (selObject === null) {
      return ''
    }
    return this.selectedBlocks.length ? selObject.toString() : ''
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectionChange = (event: Event, editor: RichText): void => {}

  content = [
    xinSlot({
      name: 'toolbar',
      part: 'toolbar',
    }),
    div({
      part: 'doc',
      contenteditable: true,
      style: {
        flex: '1 1 auto',
        outline: 'none',
      },
    }),
    xinSlot({
      part: 'content',
    }),
  ]

  doCommand(command?: string) {
    if (command === undefined) {
      return
    }
    const args = command.split(',') as string[]

    console.log('execCommand', args[0], false, ...args.slice(1))
    document.execCommand(args[0], false, ...args.slice(1))
  }

  handleSelectChange = (event: Event) => {
    // @ts-expect-error Typescript is wrong about event.target lacking closest
    const select = event.target.closest('select') as HTMLSelectElement
    if (select == null) {
      return
    }

    this.doCommand(select.value)
  }

  handleButtonClick = (event: Event) => {
    // @ts-expect-error Typescript is wrong about event.target lacking closest
    const button = event.target.closest('button')
    if (button == null) {
      return
    }

    this.doCommand(button.dataset.command)
  }

  connectedCallback(): void {
    super.connectedCallback()

    const { doc, content, toolbar } = this.parts
    if (content.innerHTML !== '' && doc.innerHTML === '') {
      doc.innerHTML = content.innerHTML
      content.innerHTML = ''
    }
    content.style.display = 'none'

    toolbar.addEventListener('click', this.handleButtonClick)
    toolbar.addEventListener('change', this.handleSelectChange)

    document.addEventListener('selectionchange', (event: Event) => {
      this.selectionChange(event, this)
    })
  }
}

export const richText = RichText.elementCreator({
  tag: 'rich-text',
}) as ElementCreator<RichText>
