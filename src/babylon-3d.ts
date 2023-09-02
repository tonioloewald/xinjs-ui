/*!
# `<b-3d>`

A thin wrapper around [babylonjs](https://www.babylonjs.com/).

A `<b-3d>` element is initialized with an `engine`, `canvas`, `scene`, and update-loop.

You can access the `scene` and `engine` properties (see the example) and if you set
`onUpdate` that will be executed before each update.

```js
const b3d = preview.querySelector('b-3d')
const BABYLON = await b3d.babylonReady

const camera = new BABYLON.ArcRotateCamera(
  'camera',
  -Math.PI / 2,
  Math.PI / 2.5,
  3,
  new BABYLON.Vector3(0, 0, 0)
)
camera.attachControl(b3d.parts.canvas, true)

new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, 0.75))

const box = BABYLON.MeshBuilder.CreateBox('box', {})

b3d.onUpdate = () => {
  box.rotation.y += 0.005
}
```
```html
<b-3d></b-3d>
```
```css
.preview b-3d {
  width: 100%;
  height: 100%;
}
```

*/
import { Component as WebComponent, elements } from 'xinjs'
import { scriptTag } from './via-tag'

export class B3d extends WebComponent {
  private babylonReady: Promise<any>

  styleNode = WebComponent.StyleNode({
    ':host': {
      display: 'block',
      position: 'relative',
    },
    ':host canvas': {
      width: '100%',
      height: '100%',
    },
  })

  content = elements.canvas({ part: 'canvas' })

  constructor() {
    super()

    this.babylonReady = (async () => {
      const { BABYLON } = await scriptTag(
        'https://cdn.babylonjs.com/babylon.max.js'
      )
      scriptTag('https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js')
      return BABYLON
    })()
  }

  scene: any
  engine: any

  onUpdate?: () => void
  private update = () => {
    if (this.scene) {
      if (this.onUpdate !== undefined) {
        this.onUpdate()
      }
      this.scene.render()
    }
  }

  onResize() {
    if (this.engine) {
      this.engine.resize()
    }
  }

  connectedCallback(): void {
    super.connectedCallback()

    const { canvas } = this.parts as { canvas: HTMLCanvasElement }

    this.babylonReady.then((BABYLON) => {
      this.engine = new BABYLON.Engine(canvas, true)
      this.scene = new BABYLON.Scene(this.engine)
      this.engine.runRenderLoop(this.update)
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.engine.stopRenderLoop(this.update)
  }
}

export const b3d = B3d.elementCreator({ tag: 'b-3d' })
