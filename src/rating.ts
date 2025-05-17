/*#
# rating

`XinRating` / `<xin-rating>` provides a drop-in replacement for an `<input>`
that renders a rating using <xin-icon icon="star" color="red"></xin-icon>s.

```html
<xin-rating value=3.4></xin-rating>
<xin-rating min=0 value=3.4 step=0.5 hollow></xin-rating>
<xin-rating value=3.4 color="deepskyblue"></xin-rating>
<xin-rating value=3.1 max=10 color="hotpink" icon="heart" icon-size=32></xin-rating>
```
```css
.preview {
  display: flex;
  flex-direction: column;
}
```

## Attributes

- `icon-size` (24 by default) determines the height of the control and along with `max` its width
- `max` maximum rating
- `min` (1 by default) can be 0 or 1 (allowing ratings of 0 to max or 1 to max)
- `step` (0.5 by default) granularity of rating
- `icon` ('star' by default) determines the icon used
- `fill` (#f91 by default) is the color of rating icons
- `empty-color` (#ccc by default) is the color of background icons
- `readonly` (false by default) prevents the user from changing the rating
- `hollow` (false by default) makes the empty rating icons hollow.

## Keyboard

`<xin-rating>` should be fully keyboard navigable (and, I hope, accessible).

The up key increases the rating, down descreases it. This is the same
as the behavior of `<input type="number">`, [Shoelace's rating widget](https://shoelace.style/components/rating/),
and (in my opinion) common sense, but  not like [MUI's rating widget](https://mui.com/material-ui/react-rating/).
*/

import { Component, elements, ElementCreator, vars, PartsMap } from 'xinjs'
import { icons } from './icons'

const { span } = elements

interface RatingParts extends PartsMap {
  empty: HTMLElement
  filled: HTMLElement
  container: HTMLElement
}

export class XinRating extends Component {
  iconSize = 24
  min: 0 | 1 = 1
  max = 5
  step = 1
  value: number | null = null
  icon = 'star'
  color = '#f91'
  emptyColor = '#8888'
  emptyStrokeWidth = 2
  readonly = false
  hollow = false

  static styleSpec = {
    ':host': {
      display: 'inline-block',
      position: 'relative',
      width: 'fit-content',
    },
    ':host::part(container)': {
      position: 'relative',
      display: 'inline-block',
    },
    ':host::part(empty), :host::part(filled)': {
      height: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    ':host::part(empty)': {
      pointerEvents: 'none',
      _textColor: 'transparent',
    },
    ':host [part="empty"]:not(.hollow)': {
      fill: vars.ratingEmptyColor,
    },
    ':host .hollow': {
      fill: 'none',
      stroke: vars.ratingEmptyColor,
      strokeWidth: vars.ratingEmptyStrokeWidth,
    },
    ':host::part(filled)': {
      position: 'absolute',
      left: 0,
      fill: vars.ratingColor,
      stroke: vars.ratingColor,
      strokeWidth: vars.ratingEmptyStrokeWidth,
    },
    ':host svg': {
      transform: 'scale(0.7)',
      pointerEvents: 'all !important',
      transition: '0.25s ease-in-out',
    },
    ':host svg:hover': {
      transform: 'scale(0.9)',
    },
    ':host svg:active': {
      transform: 'scale(1)',
    },
  }

  constructor() {
    super()

    this.initAttributes(
      'max',
      'min',
      'icon',
      'step',
      'color',
      'emptyColor',
      'readonly',
      'iconSize',
      'hollow'
    )
  }

  content = () =>
    span(
      { part: 'container' },
      span({ part: 'empty' }),
      span({ part: 'filled' })
    )

  displayValue(value: number | null) {
    const { empty, filled } = this.parts as RatingParts
    const roundedValue = Math.round((value || 0) / this.step) * this.step
    filled.style.width = (roundedValue / this.max) * empty.offsetWidth + 'px'
  }

  update = (event: Event) => {
    if (this.readonly) {
      return
    }

    const { empty } = this.parts as RatingParts

    const x =
      event instanceof MouseEvent
        ? event.pageX - empty.getBoundingClientRect().x
        : 0
    const value = Math.min(
      Math.max(
        this.min,
        Math.round(
          ((x / empty.offsetWidth) * this.max) / this.step + this.step * 0.5
        ) * this.step
      ),
      this.max
    )
    if (event.type === 'click') {
      this.value = value
    } else if (event.type === 'mousemove') {
      this.displayValue(value)
    } else {
      this.displayValue(this.value || 0)
    }
  }

  handleKey = (event: KeyboardEvent) => {
    let value = Number(this.value)
    if (value == null) {
      value = Math.round((this.min + this.max) * 0.5 * this.step) * this.step
    }
    let blockEvent = false
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowRight':
        value += this.step
        blockEvent = true
        break
      case 'ArrowDown':
      case 'ArrowLeft':
        value -= this.step
        blockEvent = true
        break
    }
    this.value = Math.max(Math.min(value, this.max), this.min)
    if (blockEvent) {
      event.stopPropagation()
      event.preventDefault()
    }
  }

  connectedCallback() {
    super.connectedCallback()

    const { container } = this.parts as RatingParts

    container.tabIndex = 0
    container.addEventListener('mousemove', this.update, true)
    container.addEventListener('mouseleave', this.update)
    container.addEventListener('blur', this.update)
    container.addEventListener('click', this.update)

    container.addEventListener('keydown', this.handleKey)
  }

  private _renderedIcon = ''

  render() {
    super.render()

    this.style.setProperty('--rating-color', this.color)
    this.style.setProperty('--rating-empty-color', this.emptyColor)
    this.style.setProperty(
      '--rating-empty-stroke-width',
      String(this.emptyStrokeWidth * 32)
    )

    if (this.readonly) {
      this.role = 'image'
    } else {
      this.role = 'slider'
    }
    this.ariaLabel = `rating ${this.value} out of ${this.max}`
    this.ariaValueMax = String(this.max)
    this.ariaValueMin = String(this.min)
    this.ariaValueNow = this.value === null ? String(-1) : String(this.value)

    const { empty, filled } = this.parts
    const height = this.iconSize + 'px'
    empty.classList.toggle('hollow', this.hollow)

    if (this._renderedIcon !== this.icon) {
      this._renderedIcon = this.icon
      for (let i = 0; i < this.max; i++) {
        empty.append(icons[this.icon]({ height }))
        filled.append(icons[this.icon]({ height }))
      }
    }
    this.style.height = height

    this.displayValue(this.value)
  }
}

export const xinRating = XinRating.elementCreator({
  tag: 'xin-rating',
}) as ElementCreator<XinRating>
