// https://lottiefiles.github.io/lottie-docs/advanced_interactions/

import { Component as WebComponent, ElementCreator } from 'xinjs'
import { scriptTag } from './via-tag'

export interface LottieConfig {
  container?: HTMLElement | ShadowRoot
  renderer: 'svg' | 'cancas' | 'html'
  loop: boolean
  autoplay: boolean
  animationData?: string
  path?: string
  [key: string]: any
}

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
