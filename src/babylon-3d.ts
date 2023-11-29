/*!
# 3d

A [babylonjs](https://www.babylonjs.com/) wrapper.

A `<xin-3d>` element is initialized with an `engine`, `canvas`, `scene`, and an update-loop.

If you view this example with an XR-enabled device, such as the
[Meta Quest 3](https://www.meta.com/quest/quest-3/), then you should be able to view this
as an AR scene.

```js
const { b3d, gamepadText, xrControllers, xrControllersText } = xinjsui

preview.append(b3d({
  async sceneCreated(element, BABYLON) {
    const camera = new BABYLON.FreeCamera(
      'camera',
      new BABYLON.Vector3(0, 2, -2),
      element.scene
    )
    camera.attachControl(element.parts.canvas, true)

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, -0.5))
    const box = BABYLON.MeshBuilder.CreateBox('box', {})
    box.position.x = 0
    box.position.y = 1.25

    const size = 1024
    const textTexture = new BABYLON.DynamicTexture('Text', size, element.scene)
    const textContext = textTexture.getContext()
    textTexture.update()

    const textMaterial = new BABYLON.StandardMaterial('Text', element.scene)
    textMaterial.diffuseTexture = textTexture
    textMaterial.emissiveTexture = textTexture
    textMaterial.backfaceCulling = false

    const plaque = BABYLON.MeshBuilder.CreatePlane('Plaque', {size: 1}, element.scene)
    plaque.position.x = 0
    plaque.position.y = 3
    plaque.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL
    plaque.material = textMaterial

    let controllers
    if (navigator.xr) {
      const xrHelper = await element.scene.createDefaultXRExperienceAsync({
        uiOptions: {
          sessionMode: 'immersive-ar'
        }
      })
      controllers = xrControllers(xrHelper)
    }

    const interval = setInterval(() => {
      if (document.body.contains(element)) {
        textContext.fillStyle = '#204020'
        textContext.fillRect(0, 0, size, size)
        const text = gamepadText() + '\n' + xrControllersText(controllers)
        const lines = text.split('\n')
        textContext.fillStyle = '#afa'
        textContext.font = '32px monospace'
        for(let i = 0; i < lines.length; i++) {
          const line = lines[i]
          textContext.fillText(line, 40, 70 + i * 40)
        }
        textContext.fillStyle = '#bbb'
        textContext.fillText('xinjs-xr — debug info', 40, 984)
        textTexture.update()
      } else {
        clearInterval(interval)
      }
    }, 100)
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
*/
import { Component as WebComponent, ElementCreator, elements } from 'xinjs'
import { scriptTag } from './via-tag'
import { icons, svg2DataUrl } from './icons'

type B3dCallback =
  | ((element: B3d, BABYLON: any) => void)
  | ((element: B3d, BABYLON: any) => Promise<void>)

interface B3dUIOptions {
  snippetId?: string
  jsonUrl?: string
  data?: any
  size?: number
}

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
      backgroundColor: 'transparent',
      filter: 'drop-shadow(0 0 4px #000c)',
      backgroundImage: svg2DataUrl(icons.xr(), '#fffd'),
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      border: 'none',
      borderRadius: 5,
      borderStyle: 'none',
      outline: 'none',
      transition: 'transform 0.125s ease-out',
    },
    ':host .babylonVRicon:hover': {
      transform: 'scale(1.1)',
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

  loadUI = async (options: B3dUIOptions): Promise<any> => {
    const { BABYLON } = await scriptTag(
      'https://cdn.babylonjs.com/gui/babylon.gui.js',
      'BABYLON'
    )
    const advancedTexture =
      BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(
        'GUI',
        true,
        this.scene
      )
    const { snippetId, jsonUrl, data, size } = options
    if (size) {
      advancedTexture.idealWidth = size
      advancedTexture.renderAtIdealSize = true
    }
    // edit or create your own snippet here
    // https://gui.babylonjs.com/
    let gui
    if (snippetId) {
      gui = await advancedTexture.parseFromSnippetAsync(snippetId)
    } else if (jsonUrl) {
      gui = await advancedTexture.parseFromURLAsync(jsonUrl)
    } else if (data) {
      gui = advancedTexture.parseContent(data)
    } else {
      return null
    }

    const root = advancedTexture.getChildren()[0]
    const widgets = root.children.reduce(
      (map: { [key: string]: any }, widget: any) => {
        map[widget.name] = widget
        return map
      },
      {}
    )

    return { advancedTexture, gui, root, widgets }
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
}

export const b3d = B3d.elementCreator({ tag: 'xin-3d' }) as ElementCreator<B3d>
