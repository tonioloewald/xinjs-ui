/*!
# editable-rect

```html
<div class="editable" style="top: 20px; left: 20px">
	<xin-editable-rect></xin-editable-rect>
</div>
<div class="editable" style="bottom: 20px; right: 20px">
	<xin-editable-rect></xin-editable-rect>
</div>
```
```css
.preview .editable {
	position: absolute;
	width: 200px;
	height: 150px;
	box-shadow: inset 0 0 0 1px #0ccc;
	background: #0cc2;
}
*/

import { Component, elements, vars } from 'xinjs'
import { icons } from './icons'
import { xinSizer, XinSizer } from './sizer'
import { trackDrag } from './track-drag'

const { div } = elements

export class EditableRect extends Component {
  static rotationSnap = 15
  static positionSnap = 4

  get lockedRight(): boolean {
    return this.parentElement?.style.right.match(/\d/) !== null
  }

  get lockedLeft(): boolean {
    return (
      this.parentElement?.style.left.match(/\d/) !== null || !this.lockedRight
    )
  }

  get lockedBottom(): boolean {
    return this.parentElement?.style.bottom.match(/\d/) !== null
  }

  get lockedTop(): boolean {
    return (
      this.parentElement?.style.top.match(/\d/) !== null || !this.lockedBottom
    )
  }

  get coords(): {top: number, left: number, bottom: number, right: number} {
    const {top, left, right, bottom} = this.parentElement!.style
    return {
      top: parseFloat(top),
      left: parseFloat(left),
      right: parseFloat(right),
      bottom: parseFloat(bottom)
    }
  }

  adjustPosition = (event: PointerEvent) => {
    const target = this.parentElement!
    const { top, left, bottom, right } = this.coords
    trackDrag(event, (dx, dy, dragEvent) => {
      if (!isNaN(top)) {
        target.style.top = (top + dy) + 'px'
      }
      if (!isNaN(bottom)) {
        target.style.bottom = (bottom - dy) + 'px'
      }
      if (!isNaN(left)) {
        target.style.left = (left + dx) + 'px'
      }
      if (!isNaN(right)) {
        target.style.right = (right - dx) + 'px'
      }
      return dragEvent.type === 'mouseup'
    })
  }

  adjustSize = (event: Event) => {
    const dimension = (event.target as HTMLElement).getAttribute('part')!
    console.log(dimension)
  }

  get center(): { x: number; y: number } {
    const rect = this.parentElement!.getBoundingClientRect()
    return {
      x: rect.x + rect.width * 0.5,
      y: rect.y + rect.height * 0.5,
    }
  }

  get element(): HTMLElement {
    return this.parentElement as HTMLElement
  }

  adjustRotation = (event: PointerEvent) => {
    const { center } = this
    if (!this.element.style.transformOrigin) {
      this.element.style.transformOrigin = '50% 50%'
    }
    trackDrag(event, (dx, dy, dragEvent: PointerEvent) => {
      const { clientX, clientY } = dragEvent
      const x = clientX - center.x
      const y = clientY - center.y
      let alpha = y > 0 ? 90 : -90
      if (x !== 0) {
        alpha = (Math.atan2(y, x) * 180) / Math.PI;
      }
      console.log(x, alpha)
      if (dragEvent.shiftKey) {
        alpha =
          Math.round(alpha / EditableRect.rotationSnap) *
          EditableRect.rotationSnap
      }
      this.element.style.transform = `rotate(${alpha}deg)`
      return dragEvent.type === 'mouseup'
    })
  }

  content = () => [
    div(
      {
        style: { top: '50%', left: '50%', transform: 'translate(-50%,-50%)' },
        onMousedown: this.adjustPosition
      },
      icons.move()
    ),
    div({
      part: 'left',
      title: 'resize left',
      class: 'drag-size',
      style: { left: '-6px', width: '8px' },
    }),
    div({
      part: 'right',
      title: 'resize right',
      class: 'drag-size',
      style: { left: 'calc(100% - 2px)', width: '8px' },
      onMousedown: this.adjustSize,
    }),
    div({
      part: 'top',
      title: 'resize top',
      class: 'drag-size',
      style: { top: '-6px', height: '8px', cursor: 'ns-resize' },
    }),
    div({
      part: 'bottom',
      title: 'resize bottom',
      class: 'drag-size',
      style: { top: 'calc(100% - 2px)', height: '8px', cursor: 'ns-resize' },
    }),
    xinSizer(
      {
        part: 'resize',
        style: { bottom: '0', right: '0' },
      },
    ),
    div(
      {
        part: 'rotate',
        style: { top: '50%', right: '0' },
        onMousedown: this.adjustRotation,
      },
      icons.refresh()
    ),
    div(
      {
        part: 'lockLeft',
        title: 'lock left',
        style: { top: '50%', left: 0, transform: 'translate(-100%, -50%)' },
      },
      icons.unlock(),
      icons.lock()
    ),
    div(
      {
        part: 'lockRight',
        title: 'lock right',
        style: { top: '50%', left: '100%', transform: 'translate(0%, -50%)' },
      },
      icons.unlock(),
      icons.lock()
    ),
    div(
      {
        part: 'lockTop',
        title: 'lock top',
        style: { top: 0, left: '50%', transform: 'translate(-50%, -100%)' },
      },
      icons.unlock(),
      icons.lock()
    ),
    div(
      {
        part: 'lockBottom',
        title: 'lock left',
        style: { top: '100%', left: '50%', transform: 'translate(-50%, 0%)' },
      },
      icons.unlock(),
      icons.lock()
    ),
  ]

  constructor() {
    super()

    this.initAttributes('rotationSnap', 'positionSnap')
  }

  connectedCallback() {
    super.connectedCallback()

    ;(this.parts.resize as XinSizer).target = this.parentElement
  }

  render() {
    super.render()

    const { lockLeft, lockRight, lockTop, lockBottom } = this.parts

    lockLeft.toggleAttribute('locked', this.lockedLeft)
    lockRight.toggleAttribute('locked', this.lockedRight)
    lockTop.toggleAttribute('locked', this.lockedTop)
    lockBottom.toggleAttribute('locked', this.lockedBottom)
  }
}

export const editableRect = EditableRect.elementCreator({
  tag: 'xin-editable-rect',
  styleSpec: {
    ':host': {
      '--handle-bg': '#fff8',
      '--handle-color': '#222',
      '--handle-hover-bg': '#8ff8',
      '--handle-size': '20px',
      '--handle-padding': '2px',
    },
    ':host > *': {
      boxSizing: 'border-box',
      content: '" "',
      position: 'absolute',
      display: 'flex',
      height: vars.handleSize,
      width: vars.handleSize,
      padding: vars.handlePadding,
      '--text-color': vars.handleColor,
      background: vars.handleBg,
    },
    ':host > .drag-size': {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: 'auto',
      width: 'auto',
      background: 'transparent',
      cursor: 'ew-resize',
    },
    ':host > [part="rotate"]': {
      transform: `translateY(${vars.handleSize_50})`,
    },
    ':host > [locked] > svg:first-child, :host > :not([locked]) > svg+svg': {
      display: 'none',
    },
    ':host .icon-unlock': {
      opacity: 0.5,
    },
    ':host > div:hover': {
      background: vars.handleHoverBg,
    },
  },
})
