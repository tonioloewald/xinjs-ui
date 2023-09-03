// https://lottiefiles.github.io/lottie-docs/advanced_interactions/

import { Component as WebComponent, ElementCreator } from 'xinjs'
import { scriptTag } from './via-tag'

export interface LottieConfig {
  container?: HTMLElement | ShadowRoot
  renderer: 'svg' | 'canvas' | 'html'
  loop: boolean
  autoplay: boolean
  animationData?: string
  path?: string
  [key: string]: any
}

/*!
# `<bodymovin-player>`

A wrapper for AirBnb's bodymovin, a.k.a. [lottie](https://airbnb.io/lottie/#/web), player. It's designed
to work like an `<img>` element (just set its `src` attribute).

```js
const { xinProxy } = xinjs
const { icons } = xinjsui
const { div, label, input, select, option, span } = xinjs.elements

const rocket = preview.querySelector('bodymovin-player')
preview.append(
  div(
    { class: 'panel' },
    label(
      'speed',
      input({ type: 'range', min: -1, max: 1, step: 0.1, value: 0, onInput(event) {
        const speed = Math.pow(5, Number(event.target.value))
        rocket.animation.setSpeed(speed)
        event.target.nextSibling.textContent = (speed * 100).toFixed(0) + '%'
      } }),
      span('100%', {style: { textAlign: 'right', width: '40px'}})
    ),
    label(
      'direction',
      select(
        option('Forwards', {value: 1, selected: true}),
        option('Backwards', {value: -1}),
        {
          onChange(event) {
            rocket.animation.setDirection(event.target.value)
          }
        }
      ),
      icons.chevronDown(),
    )
  )
)
```
```html
<bodymovin-player
  style="max-height: calc(100% - 40px); width: 100%"
  src="https://raw.githubusercontent.com/tonioloewald/xinjs-ui/main/demo/88140-rocket-livetrade.json"
></bodymovin-player>
<div style="height: 40px; line-height: 40px">
  Animation by <a target="_blank" href="https://lottiefiles.com/dvskjbicfc">chiến lê hồng</a>
</div>
```
```css
.preview {
  padding: var(--spacing);
  text-align: center;
}

.preview .panel {
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px;
  border-radius: 5px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
}
```

You can also directly set its `json` property to the content of a `lottie.json` file.

And of course just access the element's `animation` property to [use the bodymovin API](https://airbnb.io/lottie/#/web).
*/

export class BodymovinPlayer extends WebComponent {
  content = null
  src = ''
  json = ''
  config: LottieConfig = {
    renderer: 'svg',
    loop: true,
    autoplay: true,
  }

  static bodymovinAvailable?: Promise<any>

  animation: any

  styleNode = WebComponent.StyleNode({
    ':host': {
      width: 400,
      height: 400,
      display: 'inline-block',
    },
  })

  private _loading = false

  get loading(): boolean {
    return this._loading
  }

  constructor() {
    super()
    this.initAttributes('src', 'json')
    if (BodymovinPlayer.bodymovinAvailable === undefined) {
      BodymovinPlayer.bodymovinAvailable = scriptTag(
        'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js',
        'bodymovin'
      )
    }
  }

  private readonly doneLoading = (): void => {
    this._loading = false
  }

  private readonly load = ({ bodymovin }: { bodymovin: any }): void => {
    this._loading = true

    this.config.container =
      this.shadowRoot !== null ? this.shadowRoot : undefined
    if (this.json !== '') {
      this.config.animationData = this.json
      delete this.config.path
    } else if (this.src !== '') {
      delete this.config.animationData
      this.config.path = this.src
    } else {
      console.log(
        '%c<bodymovin-player>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.',
        'color: #44f; background: #fff; padding: 0 5px',
        'color: default',
        'color: #44f; background: #fff; padding: 0 5px',
        'color: default',
        'color: #44f; background: #fff; padding: 0 5px',
        'color: default'
      )
    }

    if (this.animation) {
      this.animation.destroy()
      const root = this.shadowRoot
      if (root !== null) {
        root.querySelector('svg')?.remove()
      }
    }
    this.animation = bodymovin.loadAnimation(this.config)
    this.animation.addEventListener('DOMLoaded', this.doneLoading)
  }

  render(): void {
    super.render()

    BodymovinPlayer.bodymovinAvailable!.then(this.load).catch(
      (e: string): void => {
        console.error(e)
      }
    )
  }
}

export const bodymovinPlayer = BodymovinPlayer.elementCreator({
  tag: 'bodymovin-player',
}) as ElementCreator<BodymovinPlayer>
