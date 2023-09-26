/*!
# `<b-3d>`

A thin wrapper around [babylonjs](https://www.babylonjs.com/).

A `<b-3d>` element is initialized with an `engine`, `canvas`, `scene`, and an update-loop.

You can access the `scene` and `engine` properties. You can also assign `sceneCreated`
and `update` callbacks that will be executed when the scene is first initialized and
before each update, respectively. (See the example, it does both.)

By default, this component loads `babylon.js` from the [babylonjs CDN](https://doc.babylonjs.com/setup/frameworkPackages/CDN),
but if BABYLON is already defined (e.g. if you've bundled it) then it will use that instead.

If you want to load `gltf` content, you should load `https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js`.

```js
const { b3d } = xinjsui

preview.append(b3d({
  sceneCreated(element, BABYLON) {
    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      -Math.PI / 2,
      Math.PI / 2.5,
      3,
      new BABYLON.Vector3(0, 0, 0)
    )
    camera.attachControl(element.parts.canvas, true)

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, 0.75))
    BABYLON.MeshBuilder.CreateBox('box', {})
  },
  update(element) {
    element.scene.getMeshByName('box').rotation.y += 0.005
  }
}))
```
```css
.preview b-3d {
  width: 100%;
  height: 100%;
}
```

*/
import { Component as WebComponent, ElementCreator, elements } from 'xinjs'
import { scriptTag } from './via-tag'

export class B3d extends WebComponent {
  babylonReady: Promise<any>
  BABYLON?: any

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
        'https://cdn.babylonjs.com/babylon.js',
        'BABYLON'
      )
      return BABYLON
    })()
  }

  scene: any
  engine: any

  sceneCreated: (element: B3d, BABYLON: any) => void = () => {}
  update: (element: B3d, BABYLON: any) => void = () => {}

  private _update = () => {
    if (this.scene) {
      if (this.update !== undefined) {
        this.update(this, this.BABYLON)
      }
      if (this.scene.activeCamera !== undefined) {
        this.scene.render()
      }
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
      this.BABYLON = BABYLON
      this.engine = new BABYLON.Engine(canvas, true)
      this.scene = new BABYLON.Scene(this.engine)
      if (this.sceneCreated) {
        this.sceneCreated(this, BABYLON)
      }
      /*
      if (this.scene.activeCamera === undefined) {
        const camera = new BABYLON.ArcRotateCamera(
          'default-camera',
          -Math.PI / 2,
          Math.PI / 2.5,
          3,
          new BABYLON.Vector3(0, 0, 0)
        )
        camera.attachControl(this.parts.canvas, true)
      }
      */
      this.engine.runRenderLoop(this._update)
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.engine.stopRenderLoop(this._update)
  }
}

export const b3d = B3d.elementCreator({ tag: 'b-3d' }) as ElementCreator<B3d>
