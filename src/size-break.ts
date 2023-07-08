import { Component as WebComponent, elements, vars } from 'xinjs'

const { slot } = elements

class SizeBreak extends WebComponent {
  minWidth = 0
  minHeight = 0
  value: 'normal' | 'small' = 'normal'

  content = [
    slot({ dataRef: 'normal' }),
    slot({ dataRef: 'small', name: 'small' }),
  ]

  styleNode = WebComponent.StyleNode({
    ':host': {
      position: 'relative',
    },
  })

  constructor() {
    super()
    this.initAttributes('minWidth', 'minHeight')
  }

  onResize = () => {
    const { normal, small } = this.refs
    if (
      this.offsetParent.offsetWidth < this.minWidth ||
      this.offsetParent.offsetHeight < this.minHeight
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

  connectedCallback(): void {
    super.connectedCallback()
    globalThis.addEventListener('resize', this.onResize)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    globalThis.removeEventListener('resize', this.onResize)
  }
}

export const sizeBreak = SizeBreak.elementCreator({ tag: 'size-break' })
