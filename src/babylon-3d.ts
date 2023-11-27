/*!
# 3d

A [babylonjs](https://www.babylonjs.com/) wrapper.

A `<xin-3d>` element is initialized with an `engine`, `canvas`, `scene`, and an update-loop.

If you view this example with a VR-enabled device, such as the
[Meta Quest 3](https://www.meta.com/quest/quest-3/), then you should be able to view this
as an AR scene.

```js
const { b3d } = xinjsui

preview.append(b3d({
  sceneCreated(element, BABYLON) {
    const camera = new BABYLON.FreeCamera(
      'camera',
      new BABYLON.Vector3(0, 2, -2),
      element.scene
    )
    camera.attachControl(element.parts.canvas, true)

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, 0.75))
    const box = BABYLON.MeshBuilder.CreateBox('box', {})
    box.position.y = 1.25

    if (navigator.xr) {
      element.scene.createDefaultXRExperienceAsync({
        uiOptions: {
          sessionMode: 'immersive-ar'
        }
      })
    }
  },
  update(element) {
    element.scene.getMeshByName('box').rotation.y += 0.005
  }
}))
```
```css
.preview xin-3d {
  width: 100%;
  height: 100%;
}
```

You can access the `scene` and `engine` properties. You can also assign `sceneCreated`
and `update` callbacks that will be executed when the scene is first initialized and
before each update, respectively. (See the example, it does both.)

Both `sceneCreated` and `update` may be `async`. The component will `await` `sceneCreated`
before starting the renderLoop, but `update` is simply passed to babylon, so be careful.

By default, this component loads `babylon.js` from the [babylonjs CDN](https://doc.babylonjs.com/setup/frameworkPackages/CDN),
but if `BABYLON` is already defined (e.g. if you've bundled it) then it will use that instead.

If you need additional libraries, e.g. `https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js` for loading models
such as `gltf` and `glb` files, you should load those in `sceneCreated`.

### Gamepad State

A quick and dirty viewer for gamepad state.

```js
const pre = preview.querySelector('pre')

const interval = setInterval(() => {
  if (document.body.contains(preview)) {
    const pads = navigator.getGamepads().filter(p => p !== null).map(({id, axes, buttons}) => ({
      id,
      axes: axes.map(a => a.toFixed(2)).join(', '),
      buttons: buttons.map(({pressed, touched, value}, idx) => `${idx}: p: ${pressed}, t: ${touched}, ${value}`)
    }))
    pre.innerText = JSON.stringify(pads, false, 2)
  } else {
    clearInterval(interval)
  }
}, 100)
```
```html
<pre></pre>
```
```css
.preview pre {
  background: transparent;
  color: #444;
}
```
*/
import { Component as WebComponent, ElementCreator, elements } from 'xinjs'
import { scriptTag } from './via-tag'

type B3dCallback =
  | ((element: B3d, BABYLON: any) => void)
  | ((element: B3d, BABYLON: any) => Promise<void>)

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
    ':host .babylonVRicon': {
      height: 50,
      width: 80,
      backgroundColor: '#0004',
      backgroundImage:
        'url(data:image/svg+xml;charset=UTF-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20viewBox%3D%220%200%20800%20500%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20%3E%3Cpath%20d%3D%22m400%2069c157%200%20335%207%20335%2081v101c0%2041-42%20180-191%20180-43%200-64-17-82-33l-2-2-4-4c-15-13-30-25-55-25-24%200-39%2011-54%2024l-2%202-3%203-2%202c-18%2016-40%2033-82%2033-148%200-191-137-191-179l-0-1v-101c0-74%20178-81%20335-81z%22%20stroke%3D%22%23fffc%22%20stroke-width%3D%2240%22/%3E%3C/g%3E%3C/svg%3E)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '80%',
      border: 'none',
      borderRadius: 5,
      borderStyle: 'none',
      outline: 'none',
      transition: 'transform 0.125s ease-out',
    },
    ':host .babylonVRicon:hover': {
      transform: 'scale(1.05)',
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

  sceneCreated: B3dCallback = () => {}
  update: B3dCallback = () => {}

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

    this.babylonReady.then(async (BABYLON) => {
      this.BABYLON = BABYLON
      this.engine = new BABYLON.Engine(canvas, true)
      this.scene = new BABYLON.Scene(this.engine)
      if (this.sceneCreated) {
        await this.sceneCreated(this, BABYLON)
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

export const b3d = B3d.elementCreator({ tag: 'xin-3d' }) as ElementCreator<B3d>
