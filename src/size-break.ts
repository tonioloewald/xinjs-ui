import { Component as WebComponent, ElementCreator, elements } from 'xinjs'

const { slot } = elements

/*!
# size-break

While we wait for enough browsers to implement [container-queries](https://www.w3.org/TR/css-contain-3/),
and in any event when you simply want to do different things at different sizes (e.g. in the project I'm
working on right now, a row of buttons turns into a menu at narrow widths) there's `<xin-sizebreak>`.

Note that the sizes referred to are of the `<xin-sizebreak>`'s `.offsetParent`, and it watches for
the window's `resize` events and its own (via `ResizeObserver`).

```js
const { trackDrag } = xinjsui

const container = preview.querySelector('.container')
const sizer = preview.querySelector('.sizer')

function resize(event) {
  const w = container.offsetWidth
  const h = container.offsetHeight
  trackDrag(event, (dx, dy, event) => {
    container.style.width = (w + dx) + 'px'
    container.style.height = (h + dy) + 'px'
    return event.type === 'mouseup'
  }, 'nwse-resize')
}

sizer.addEventListener('mousedown', resize, 'nwse-resize')
sizer.addEventListener('touchstart', resize, 'nwse-resize')
```
```html
<div class="container">
  <xin-sizebreak min-width="150" min-height="80">
    <h1>BIG!</h1>
    <i slot="small">little</i>
  </xin-sizebreak>
  <div class="sizer"></div>
</div>
```
```css
.preview {
  touch-action: none;
}

.preview xin-sizebreak {
  width: 100%;
  height: 100%;
  background: #fff8;
  border: 1px solid #aaa;
}

.preview xin-sizebreak * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.preview .container {
  position: relative;
  min-width: 100px;
  min-height: 40px;
  max-height: 200px;
  width: 400px;
  height: 100px;
}

.preview .sizer {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #0003;
  bottom: 0;
  right: 0;
  cursor: nwse-resize;
}
```

`<xin-sizebreak>` supports both `min-width` and/or `min-height`, and you can of course target only one
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
    if (!(parent instanceof HTMLElement)) {
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
  // is inserted or moved into the DOM.
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
  tag: 'xin-sizebreak',
}) as ElementCreator<SizeBreak>
