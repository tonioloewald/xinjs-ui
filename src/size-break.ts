import { Component as WebComponent, ElementCreator, elements } from 'xinjs'

const { slot } = elements

/*!
# `<size-break>`

While we wait for enough browsers to implement [container-queries](https://www.w3.org/TR/css-contain-3/),
and in any event when you simply want to do different things at different sizes (e.g. in the project I'm
working on right now, a row of buttons turns into a menu at narrow widths) there's `<size-break>`.

Note that the sizes referred to are of the `<size-break>`'s `.offsetParent`, and it watches for
the window's `resize` events and its own (via `ResizeObserver`).

```
<size-break min-width="500">
  <default-thing>I am big!</default-thing>
  <small-thing slot="small">I am little</small-thing>
</size-break>
```

`<size-break>` supports both `min-width` and/or `min-height`, and you can of course target only one
of the slots if you like. The demo site uses them to hide the [bundlejs](https://bundlejs.com/) badge when
space is tight.
*/

export class SizeBreak extends WebComponent {
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
