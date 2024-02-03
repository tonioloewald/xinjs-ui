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

const { div } = elements

export class EditableRect extends Component {
  content = () => [
    div(
      {
        style: { top: '50%', left: '50%', transform: 'translate(-50%,-50%)' },
      },
      icons.move()
    ),
    div({
      title: 'resize left',
      class: 'drag-size',
      style: { left: '-6px', width: '8px' },
    }),
    div({
      title: 'resize right',
      class: 'drag-size',
      style: { left: 'calc(100% - 2px)', width: '8px' },
    }),
    div({
      title: 'resize top',
      class: 'drag-size',
      style: { top: '-6px', height: '8px', cursor: 'ns-resize' },
    }),
    div({
      title: 'resize bottom',
      class: 'drag-size',
      style: { top: 'calc(100% - 2px)', height: '8px', cursor: 'ns-resize' },
    }),
    div(
      {
        style: { bottom: '0', right: '0' },
      },
      icons.resize()
    ),
    div(
      {
        style: { top: '100%', left: '100%' },
      },
      icons.refresh()
    ),
    div(
      {
        part: 'lockLeft',
        title: 'lock left',
        style: { top: '50%', left: 0, transform: 'translate(-100%, -50%)' },
      },
      icons.lock(),
      icons.unlock()
    ),
    div(
      {
        part: 'lockRight',
        title: 'lock right',
        style: { top: '50%', left: '100%', transform: 'translate(0%, -50%)' },
      },
      icons.lock(),
      icons.unlock()
    ),
    div(
      {
        part: 'lockTop',
        title: 'lock top',
        style: { top: 0, left: '50%', transform: 'translate(-50%, -100%)' },
      },
      icons.lock(),
      icons.unlock()
    ),
    div(
      {
        part: 'lockBottom',
        title: 'lock left',
        style: { top: '100%', left: '50%', transform: 'translate(-50%, 0%)' },
      },
      icons.lock(),
      icons.unlock()
    ),
  ]

  render() {
    super.render()

    const { lockLeft, lockRight, lockTop, lockBottom } = this.parts

    const { style } = this.parentElement
    lockLeft.toggleAttribute('locked', !style.left.match(/\d/))
    lockRight.toggleAttribute('locked', !style.right.match(/\d/))
    lockTop.toggleAttribute('locked', !style.top.match(/\d/))
    lockBottom.toggleAttribute('locked', !style.bottom.match(/\d/))
  }
}

export const editableRect = EditableRect.elementCreator({
  tag: 'xin-editable-rect',
  styleSpec: {
    ':host': {
      '--handle-bg': '#fff8',
      '--handle-color': '#222',
    },
    ':host > *': {
      content: '" "',
      position: 'absolute',
      display: 'flex',
      height: '20px',
      width: '20px',
      padding: '2px',
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
    ':host > :not([locked]) > svg+svg, :host > [locked] > svg:first-child': {
      display: 'none',
    },
    ':host > * > svg+svg': {
      opacity: 0.5,
    },
  },
})
