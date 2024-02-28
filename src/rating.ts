/*!
# rating

`XinRating` / `<xin-rating>` provides a drop-in replacement for an `<input>`
that renders a rating using <xin-icon icon="starFilled" color="red"></xin-icon>s.

`<xin-rating>` is very lightweight, comprising exactly two internal elements, versus
(for example) at least 12 for [Shoelace's <sl-rating>](https://shoelace.style/components/rating/)
or 33 for [MUI's rating](https://mui.com/material-ui/react-rating/). On the other
hand it isn't as nicely interactive as these controls.

```html
<xin-rating value=3.4 step=1></xin-rating>
<xin-rating value=3.4 empty-icon="star"></xin-rating>
<xin-rating value=3.4 fill-color="deepskyblue"></xin-rating>
<xin-rating value=3.1 max=10 color="green" icon="bug" icon-size=32></xin-rating>
```
```css
xin-rating {
	display: block;
}
```

## Attributes

- `icon-size` (24 by default) determines the height of the control and along with `max` its width
- `max` maximum rating
- `min` (1 by default) can be 0 or 1 (allowing ratings of 0 to max or 1 to max)
- `step` (0.5 by default) granularity of rating
- `icon` ('starFilled' by default) determines the icon used
- `empty-icon` ('' by default) will determine the appearance of the background icons by default
- `fill-color` (#f91 by default) is the color of rating icons
- `empty-color` (#ccc by default) is the color of background icons
- `readonly` (false by default) prevents the user from changing the rating
*/

import { Component, elements, ElementCreator } from 'xinjs'
import { icons, svg2DataUrl } from './icons'

const { span } = elements

export class XinRating extends Component {
  iconSize = 24
  min: 0 | 1 = 1
  max = 5
  step = 0.5
  value: number | null = null
  icon = 'starFilled'
  emptyIcon = ''
  fillColor = '#f91'
  emptyColor = '#ccc'
  readonly = false

  static styleSpec = {
    ':host': {
      display: 'inline-block',
      position: 'relative',
    },
    ':host::part(filled)': {
      position: 'absolute',
      pointerEvents: 'none',
      height: '100%',
    },
  }

  constructor() {
    super()

    this.initAttributes(
      'max',
      'min',
      'icon',
      'step',
      'emptyIcon',
      'fillColor',
      'emptyColor',
      'readonly',
      'iconSize'
    )
  }

  content = () => span({ part: 'filled' })

  private aspectRatio = 1

  displayValue(value: number) {
    const { filled } = this.parts
    const roundedValue = Math.round(value / this.step) * this.step
    filled.style.width = this.iconSize * roundedValue * this.aspectRatio + 'px'
  }

  update = (event: Event) => {
    if (this.readonly) {
      return
    }

    const value = Math.max(
      this.min,
      Math.round(
        ((event.layerX / this.offsetWidth) * this.max) / this.step +
          this.step * 0.5
      ) * this.step
    )
    if (event.type === 'click') {
      this.value = value
    } else if (event.type === 'mousemove') {
      this.displayValue(value)
    } else {
      this.displayValue(this.value)
    }
  }

  connectedCallback() {
    super.connectedCallback()

    this.addEventListener('mousemove', this.update)
    this.addEventListener('mouseleave', this.update)
    this.addEventListener('blur', this.update)
    this.addEventListener('click', this.update)
  }

  render() {
    super.render()

    const { filled } = this.parts

    const filledIcon = icons[this.icon]()
    const [, , w, h] = filledIcon.getAttribute('viewBox').split(' ')
    this.aspectRatio = Number(w) / Number(h)

    this.style.background = svg2DataUrl(
      icons[this.emptyIcon || this.icon](),
      this.emptyColor
    )
    this.style.height = this.iconSize + 'px'
    this.style.width = this.iconSize * this.max * this.aspectRatio + 'px'

    filled.style.background = svg2DataUrl(filledIcon, this.fillColor)

    this.displayValue(this.value)
  }
}

export const xinRating = XinRating.elementCreator({
  tag: 'xin-rating',
}) as ElementCreator<XinRating>
