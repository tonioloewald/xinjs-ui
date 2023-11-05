/*!
# sizer

This is a super-simple component that you can put in a fixed size element allowing it to be resized
from the bottom-right.

```html
<div>
  <xin-sizer></xin-sizer>
</div>
```
```css
.preview div {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 100px;
  background: #ff02;
  border: 1px solid #555;
}
```

*/

import { Component as XinComponent, ElementCreator } from 'xinjs'
import { icons } from './icons'
import { trackDrag } from './track-drag'

export class XinSizer extends XinComponent {
  styleNode = XinComponent.StyleNode({
    ':host': {
      display: 'block',
      position: 'absolute',
      bottom: -7,
      right: -7,
      padding: 14,
      width: 44,
      height: 44,
      opacity: 0.25,
      transition: 'opacity 0.25s ease-out',
    },
    ':host(:hover)': {
      opacity: 0.5,
    },
    ':host svg': {
      width: 16,
      height: 16,
    },
  })

  content = icons.resize()

  resizeParent = (event: Event): void => {
    const parent = this.parentElement as HTMLElement
    console.log(parent)
    const w = parent.offsetWidth
    const h = parent.offsetHeight
    parent.style.left = parent.offsetLeft + 'px'
    parent.style.top = parent.offsetTop + 'px'
    parent.style.bottom = ''
    parent.style.right = ''

    trackDrag(
      event as PointerEvent,
      (dx: number, dy: number, event: any): true | undefined => {
        parent.style.width = Math.max(200, w + dx) + 'px'
        parent.style.height = Math.max(100, h + dy) + 'px'
        if (event.type === 'mouseup') {
          return true
        }
      },
      'nwse-resize'
    )
  }

  connectedCallback(): void {
    super.connectedCallback()

    this.addEventListener('mousedown', this.resizeParent)
    this.addEventListener('touchstart', this.resizeParent)
  }
}

export const xinSizer = XinSizer.elementCreator({
  tag: 'xin-sizer',
}) as ElementCreator<XinSizer>
