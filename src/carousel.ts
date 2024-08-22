/*!
# carousel

```html
<xin-carousel arrows dots max-visible-items=2>
  <div class="thing pink">item 1</div>
  <div class="thing green">item 2</div>
  <div class="thing blue">item 3</div>
  <div class="thing yellow">item 4</div>
  <div class="thing pink">item 5</div>
  <div class="thing green">item 6</div>
  <div class="thing blue">item 7</div>
</xin-carousel>
```
```css
.thing {
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 32px;
}

.pink {
  background: #fdd;
}

.green {
  background: #dfd;
}

.blue {
  background: #ddf;
}

.yellow {
  background: #ffd;
}
```

This is a minimalist carousel component that supports the usual stuff.

## Attributes

- `arrows` (boolean, false by default) shows/hides the arrow paging controls
- `dots` (boolean, false by default) shows/hides the dot progress indicators
- `max-visible-items` (number, 1 by default) determines how many items are shown at once.
- `snap-duration` (number, 0.25 [seconds] by default) determines the time taken to scroll / snap scroll.
- `snap-delay` (number, 0.1 [seconds] by default)
- `loop` (boolean, false by default) causes next/previous buttons to loop

<xin-css-var-editor element-selector="xin-carousel"></xin-css-var-editor>
*/

import {
  Component as WebComponent,
  ElementCreator,
  elements,
  vars,
} from 'xinjs'
import { icons } from './icons'

const { button, slot, div } = elements

interface CarouselParts {
  [key: string]: HTMLElement
  back: HTMLButtonElement
  forward: HTMLButtonElement
}

export class XinCarousel extends WebComponent {
  arrows = false
  dots = false
  loop = false
  maxVisibleItems = 1
  snapDelay = 0.1
  snapDuration = 0.25
  role = 'listbox'

  private _page = 0

  get page(): number {
    return this._page
  }

  set page(p: number) {
    const { scroller, back, forward } = this.parts as CarouselParts
    if (this.lastPage <= 0) {
      forward.disabled = back.disabled = true
      p = 0
    } else {
      p = Math.max(0, Math.min(this.lastPage, p))
      p = isNaN(p) ? 0 : p
    }
    if (this._page !== p) {
      this._page = isNaN(p) ? 0 : p
      this.animateScroll(this._page * scroller.offsetWidth)
      back.disabled = this.page <= 0 && !this.loop
      forward.disabled = this.page >= this.lastPage && !this.loop
    }
  }

  get visibleItems(): HTMLElement[] {
    return [...this.children].filter(
      (element) => getComputedStyle(element).display !== 'none'
    ) as HTMLElement[]
  }

  get lastPage(): number {
    return Math.max(
      Math.ceil(this.visibleItems.length / (this.maxVisibleItems || 1)) - 1,
      0
    )
  }

  static styleSpec = {
    ':host': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
    },
    ':host svg': {
      height: vars.carouselIconSize,
    },
    ':host button': {
      outline: 'none',
      border: 'none',
      boxShadow: 'none',
      background: 'transparent',
      fill: vars.carouselButtonColor,
      padding: 0,
    },
    ':host::part(back), :host::part(forward)': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: vars.carouseButtonWidth,
      zIndex: 2,
    },
    ':host::part(back)': {
      left: 0,
    },
    ':host::part(forward)': {
      right: 0,
    },
    ':host button:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
    },
    ':host button:hover': {
      fill: vars.carouselButtonHoverColor,
    },
    ':host button:active': {
      fill: vars.carouselButtonActiveColor,
    },
    ':host::part(pager)': {
      position: 'relative',
    },
    ':host::part(scroller)': {
      overflow: 'auto hidden',
      position: 'relative',
    },
    ':host::part(grid)': {
      display: 'grid',
      justifyItems: 'center',
    },
    ':host *::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
      display: 'none',
    },
    ':host .dot': {
      background: vars.carouselButtonColor,
      borderRadius: vars.carouselDotSize,
      height: vars.carouselDotSize,
      width: vars.carouselDotSize,
      transition: vars.carouselDotTransition,
    },
    ':host .dot:not(.current):hover': {
      background: vars.carouselButtonHoverColor,
      height: vars.carouselDotSize150,
      width: vars.carouselDotSize150,
      margin: vars.carouselDotSize_25,
    },
    ':host .dot:not(.current):active': {
      background: vars.carouselButtonActiveColor,
    },
    ':host .dot.current': {
      background: vars.carouselDotCurrentColor,
    },
    ':host::part(progress)': {
      display: 'flex',
      gap: vars.carouselDotSpacing,
      justifyContent: 'center',
      padding: vars.carouselProgressPadding,
    },
  }

  easing = (t: number) => {
    return Math.sin(t * Math.PI * 0.5)
  }

  indicateCurrent = () => {
    const { scroller, progress } = this.parts as CarouselParts
    const page = scroller.scrollLeft / scroller.offsetWidth
    ;[...progress.children].forEach((dot, index) => {
      dot.classList.toggle(
        'current',
        Math.floor(index / this.maxVisibleItems - page) === 0
      )
    })
    clearTimeout(this.snapTimer)
    this.snapTimer = setTimeout(this.snapPosition, this.snapDelay * 1000)
  }

  snapPosition = () => {
    const { scroller } = this.parts
    const currentPosition = scroller.scrollLeft / scroller.offsetWidth
    if (currentPosition !== this.page) {
      this.page =
        currentPosition > this.page
          ? Math.ceil(currentPosition)
          : Math.floor(currentPosition)
    }
  }

  back = () => {
    this.page = this.page > 0 ? this.page - 1 : this.lastPage
  }

  forward = () => {
    this.page = this.page < this.lastPage ? this.page + 1 : 0
  }

  handleDotClick = (event: Event) => {
    const { progress } = this.parts
    const index = [...progress.children].indexOf(event.target as HTMLElement)
    if (index > -1) {
      this.page = Math.floor(index / this.maxVisibleItems)
    }
  }

  private snapTimer: any
  private animationFrame: any
  animateScroll(position: number, startingPosition = -1, timestamp = 0) {
    cancelAnimationFrame(this.animationFrame)
    const { scroller } = this.parts
    if (startingPosition === -1) {
      startingPosition = scroller.scrollLeft
      timestamp = Date.now()
      this.animationFrame = requestAnimationFrame(() => {
        this.animateScroll(position, startingPosition, timestamp)
      })
      return
    }
    const elapsed = (Date.now() - timestamp) / 1000
    if (
      elapsed >= this.snapDuration ||
      Math.abs(scroller.scrollLeft - position) < 2
    ) {
      scroller.scrollLeft = position
      this.animationFrame = null
    } else {
      scroller.scrollLeft =
        startingPosition +
        this.easing(elapsed / this.snapDuration) * (position - startingPosition)
      this.animationFrame = requestAnimationFrame(() => {
        this.animateScroll(position, startingPosition, timestamp)
      })
    }
  }

  content = () => [
    div(
      { part: 'pager' },
      button({ part: 'back' }, icons.chevronLeft()),
      div({ part: 'scroller' }, div({ part: 'grid' }, slot())),
      button({ part: 'forward' }, icons.chevronRight())
    ),
    div({ part: 'progress' }),
  ]

  constructor() {
    super()

    this.initAttributes(
      'dots',
      'arrows',
      'maxVisibleItems',
      'snapDuration',
      'loop'
    )
  }

  connectedCallback() {
    super.connectedCallback()

    this.ariaOrientation = 'horizontal'
    this.ariaReadOnly = 'true'

    const { back, forward, scroller, progress } = this.parts
    back.addEventListener('click', this.back)
    forward.addEventListener('click', this.forward)
    scroller.addEventListener('scroll', this.indicateCurrent)
    progress.addEventListener('click', this.handleDotClick)
  }

  render() {
    super.render()

    const { dots, arrows, visibleItems, lastPage } = this
    const { progress, back, forward, grid } = this.parts

    visibleItems.forEach((item) => {
      item.role = 'option'
    })
    grid.style.gridTemplateColumns = `${
      100 / this.maxVisibleItems / (1 + this.lastPage)
    }% `
      .repeat(visibleItems.length)
      .trim()
    grid.style.width = (1 + this.lastPage) * 100 + '%'
    progress.textContent = ''
    progress.append(...visibleItems.map(() => button({ class: 'dot' })))

    this.indicateCurrent()
    progress.style.display = dots && lastPage > 0 ? '' : 'none'
    back.hidden = forward.hidden = !(arrows && lastPage > 0)
  }
}

export const xinCarousel = XinCarousel.elementCreator({
  tag: 'xin-carousel',
  styleSpec: {
    ':host': {
      _carouselIconSize: 24,
      _carouselButtonColor: '#0004',
      _carouselButtonHoverColor: '#0006',
      _carouselButtonActiveColor: '#000c',
      _carouseButtonWidth: 48,
      _carouselDotCurrentColor: '#0008',
      _carouselDotSize: 8,
      _carouselDotSpacing: vars.carouselDotSize,
      _carouselProgressPadding: 12,
      _carouselDotTransition: '0.125s ease-in-out',
    },
    ':host:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  },
}) as ElementCreator<XinCarousel>
