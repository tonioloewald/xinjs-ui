import { Component as WebComponent, ElementCreator, elements } from 'xinjs'

const { slot } = elements

class SizeBreak extends WebComponent {
  minWidth = 0
  minHeight = 0
  value: 'normal' | 'small' = 'normal'

  content = [slot({ part: 'normal' }), slot({ part: 'small', name: 'small' })]

  styleNode = WebComponent.StyleNode({
    ':host': {
      display: 'inline-block',
      position: 'relative',
    },
  })

  constructor() {
    super()
    this.initAttributes('minWidth', 'minHeight')
  }

  onResize = () => {
    const { normal, small } = this.parts
    const parent = this.offsetParent as HTMLElement | null
    if (parent === null) {
      return
    } else if (
      parent.offsetWidth < this.minWidth ||
      parent.offsetHeight < this.minHeight
    ) {
      normal.hidden = true
      small.hidden = false
      this.value = 'small'
    } else {
      normal.hidden = false
      small.hidden = true
      this.value = 'normal'
    }
  }

  // TODO trigger a resize event when an ancestor element
  // is inerted or moved into the DOM.
  connectedCallback(): void {
    super.connectedCallback()
    globalThis.addEventListener('resize', this.onResize)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    globalThis.removeEventListener('resize', this.onResize)
  }
}

export const sizeBreak = SizeBreak.elementCreator({
  tag: 'size-break',
}) as ElementCreator<SizeBreak>
