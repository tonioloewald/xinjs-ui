/*!
# `<rich-text>`

A simple and easily extensible `document.execCommand` WYSIWYG editor with some conveniences.

By default, it treats its initial contents as its document, but you can also set (and get)
its `value`.

```html
<rich-text widgets="minimal">
<h3>Heading</h3>
<p>And some <b>text</b></p>
</rich-text>
```

It has a `toolbar` slot (actually a xin-slot because it doesn't use the shadowDOM).

If you set the `widgets` attribute to `default` or `minimal` you will get a toolbar
for free. Or you can add your own custom widgets.

A number of convenience functions available, including:

- `commandButton(title: string, command: string, iconClass: string)`
- `blockStyle(options: Array<{caption: string, tagType: string}>)`
- `spacer(width = '10px')`
- `elastic(width = '10px')`

These each create a toolbar widget. A `blockStyle`-generated `<select>` element will
automatically have its value changed based on the current selection.

The `<rich-text>` component provides `selectedText` and `selectedBlocks` properties, allowing
you to easily perform operations on text selections, and a `selectionChange` callback (which
simply passes through document `selectionchange` events, but also passes a reference to
the `<rich-text>` component).
*/

import { Component as WebComponent, ElementCreator, elements } from 'xinjs'

const { style, xinSlot, div, select, option, button, span } = elements

document.head.append(
  style(
    { id: 'rich-text' },
    `rich-text {
  display: flex;
  flex-direction: column;
  height: 100%;
}
rich-text [part="toolbar"] {
  padding: 4px;
  display: flex;
  gap: 0px;
  flex: 1 0 auto;
  flex-wrap: wrap;
}
`
  )
)

const blockStyles = [
  {
    caption: 'Title',
    tagType: 'H1',
  },
  {
    caption: 'Heading',
    tagType: 'H2',
  },
  {
    caption: 'Subheading',
    tagType: 'H3',
  },
  {
    caption: 'Minor heading',
    tagType: 'H4',
  },
  {
    caption: 'Body',
    tagType: 'P',
  },
  {
    caption: 'Code Block',
    tagType: 'PRE',
  },
]

export function blockStyle(options = blockStyles) {
  return select(
    { title: 'paragraph style', slot: 'toolbar', class: 'block-style' },
    ...options.map(({ caption, tagType }) =>
      option(caption, { value: `formatBlock,${tagType}` })
    )
  )
}

export function spacer(width = '10px') {
  return span({
    slot: 'toolbar',
    style: { flex: `0 0 ${width}`, content: ' ' },
  })
}

export function elastic(width = '10px') {
  return span({
    slot: 'toolbar',
    style: { flex: `0 0 ${width}`, content: ' ' },
  })
}

export function commandButton(
  title: string,
  dataCommand: string,
  iconClass: string
) {
  return button(
    { slot: 'toolbar', dataCommand, title },
    span({ class: iconClass })
  )
}

const paragraphStyleWidgets = () => [
  commandButton('left-justify', 'justifyLeft', 'icon-format_align_left'),
  commandButton('center', 'justifyCenter', 'icon-format_align_center'),
  commandButton('right-justify', 'justifyRight', 'icon-format_align_right'),
  spacer(),
  commandButton(
    'bullet list',
    'insertUnorderedList',
    'icon-format_list_bulleted'
  ),
  commandButton(
    'numbered list',
    'insertOrderedList',
    'icon-format_list_numbered'
  ),
  spacer(),
  commandButton('indent', 'indent', 'icon-format_indent_increase'),
  commandButton('indent', 'outdent', 'icon-format_indent_decrease'),
]

const characterStyleWidgets = () => [
  commandButton('bold', 'bold', 'icon-format_bold'),
  commandButton('italic', 'italic', 'icon-format_italic'),
  commandButton('underline', 'underline', 'icon-format_underlined'),
]

const minimalWidgets = () => [
  blockStyle(),
  spacer(),
  ...characterStyleWidgets(),
]

export const richTextWidgets = () => [
  blockStyle(),
  spacer(),
  ...paragraphStyleWidgets(),
  spacer(),
  ...characterStyleWidgets(),
]

export class RichText extends WebComponent {
  widgets: 'none' | 'minimal' | 'default' = 'default'

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

  constructor() {
    super()
    this.initAttributes('widgets')
  }

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

  updateBlockStyle() {
    const select = this.parts.toolbar.querySelector(
      'select.block-style'
    ) as HTMLSelectElement | null
    if (select === null) {
      return
    }
    let blockTags = (this.selectedBlocks as HTMLElement[]).map(
      (block) => block.tagName
    )
    blockTags = [...new Set(blockTags)]
    select.value = blockTags.length === 1 ? `formatBlock,${blockTags[0]}` : ''
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
      this.updateBlockStyle()
      this.selectionChange(event, this)
    })
  }

  render(): void {
    const { toolbar } = this.parts

    super.render()

    if (toolbar.children.length === 0) {
      switch (this.widgets) {
        case 'minimal':
          toolbar.append(...minimalWidgets())
          break
        case 'default':
          toolbar.append(...richTextWidgets())
          break
      }
    }
  }
}

export const richText = RichText.elementCreator({
  tag: 'rich-text',
}) as ElementCreator<RichText>
