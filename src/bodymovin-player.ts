// https://lottiefiles.github.io/lottie-docs/advanced_interactions/

import { Component as WebComponent, elements } from 'xinjs'
import { scriptTag } from './via-tag'

interface LottieConfig {
  container?: HTMLElement
  renderer: 'svg' | 'cancas' | 'html'
  loop: boolean
  autoplay: boolean
  animationData?: string
  path?: string
  [key: string]: any
}

class BodymovinPlayer extends WebComponent {
  content = null
  src = ''
  json = ''
  config: LottieConfig = {
    renderer: 'svg',
    loop: true,
    autoplay: true,
  }

  static bodymovinAvailable?: Promise<void>

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
      // @ts-expect-error
      BodymovinPlayer.bodymovinAvailable =
        globalThis.bodymovinPlayer === undefined
          ? scriptTag(
              'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js'
            )
          : Promise.resolve()
      console.log(BodymovinPlayer.bodymovinAvailable)
    }
  }

  private readonly doneLoading = (): void => {
    this._loading = false
  }

  private readonly load = (): void => {
    this._loading = true

    this.config.container = this.shadowRoot
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
      this.shadowRoot.querySelector('svg').remove()
    }
    // @ts-expect-error
    this.animation = globalThis.bodymovin.loadAnimation(this.config)
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
})
