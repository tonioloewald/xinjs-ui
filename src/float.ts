/*!
# float

A floating, potentially draggable user interface element.

```html
<xin-float class="float" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" style="top: 50px; right: 20px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" style="bottom: 20px; left: 50px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>
```
```css
.preview .float {
  width: 220px;
  height: 180px;
  padding: 0;
  gap: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fff8;
  box-shadow: 2px 10px 20px #0004;
  overflow: hidden;
  cursor: move;
}

.preview h4 {
  margin: 0;
  padding: 5px 10px;
  color: white;
  background: red;
}

.preview .balloon {
  cursor: default;
  flex: 1 1 auto;
  font-size: 99px;
  line-height: 120px;
  text-align: center;
  height: auto;
  overflow: hidden;
}

.preview footer {
  text-align: center;
  background: #f008;
  color: white;
```

Note that the `<xin-float>` element has absolutely minimal styling. It's up to you to provide a drop
shadow and background and so on.

To make a `<xin-float>` element draggable, simply set its `drag` attribute.

To prevent dragging for an interior element (e.g. if you want a floating palette with buttons or input fields)
just add the `no-drag` class to an element or its container.
*/

import { Component as WebComponent, elements, ElementCreator } from 'xinjs'
import { trackDrag, findHighestZ } from './track-drag'

const { slot } = elements

export class XinFloat extends WebComponent {
  drag = false

  content = slot()

  styleNode = WebComponent.StyleNode({
    ':host': {
      position: 'fixed',
    },
  })

  constructor() {
    super()
    this.initAttributes('drag')
  }

  reposition = (event: Event) => {
    const target = event.target as HTMLElement | null
    if (target?.closest('.no-drag')) {
      return
    }
    if (this.drag) {
      this.style.zIndex = String(findHighestZ() + 1)
      const x = this.offsetLeft
      const y = this.offsetTop

      trackDrag(
        event as PointerEvent,
        (
          dx: number,
          dy: number,
          pointerEvent: PointerEvent
        ): true | undefined => {
          this.style.left = `${x + dx}px`
          this.style.top = `${y + dy}px`
          this.style.right = 'auto'
          this.style.bottom = 'auto'
          if (pointerEvent.type === 'mouseup') {
            return true
          }
        }
      )
    }
  }

  connectedCallback(): void {
    super.connectedCallback()

    this.addEventListener('touchstart', this.reposition)
    this.addEventListener('mousedown', this.reposition)
    this.style.zIndex = String(findHighestZ() + 1)
  }
}

export const xinFloat = XinFloat.elementCreator({
  tag: 'xin-float',
}) as ElementCreator<XinFloat>
