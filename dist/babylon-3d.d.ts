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
      new BABYLON.Vector3(0, 1, -4),
      element.scene
    )
    camera.attachControl(element.parts.canvas, true)

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, -0.5))

    this.loadScene('/', 'xin3d.glb')

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
    plaque.position.y = 2
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

If you need additional libraries, e.g. `https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js` for loading models such as `gltf` and `glb` files, you should load those in `sceneCreated`.

Here's a simple example of a terrain mesh comprising 125k triangles.

```js
const { b3d } = xinjsui

preview.append(b3d({
  async sceneCreated(element, BABYLON) {
    const { scene } = element
    const { createNoise2D } = await import('https://cdn.jsdelivr.net/npm/simplex-noise@4.0.1/+esm')

    new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0.25, 1, 2))

    const terrain = new BABYLON.Mesh('terrain', scene)
    const vertexData = new BABYLON.VertexData()

    const noise2D = createNoise2D()
    const positions = []
    const indices = []
    const gridSize = 100
    const gridResolution = 250
    const gridPoints = gridResolution + 1
    const noiseScale = 0.03
    const heightScale = 4.5
    terrain.position.y = -5
    const scale = t => t * gridSize / gridResolution - gridSize * 0.5
    for(let x = 0; x <= gridResolution; x++) {
      for(let z = 0; z <= gridResolution; z++) {
        positions.push(scale(x), noise2D(scale(x) * noiseScale, scale(z) * noiseScale) * heightScale, scale(z))
        if (x > 0 && z > 0) {
          const i = x * gridPoints + z
          indices.push(
            i, i - gridPoints - 1, i - 1,
            i, i - gridPoints, i - gridPoints - 1,
          )
        }
      }
    }
    const normals = []
    BABYLON.VertexData.ComputeNormals(positions, indices, normals);

    vertexData.positions = positions
    vertexData.indices = indices
    vertexData.normals = normals
    vertexData.applyToMesh(terrain)
  },
}))
```

## loadScene

`<xin-3d>.loadScene(path: string, file: string, callBack(meshes: any[]): void)` can
be used to load `.glb` files.

## loadUI

`<xin-3d>.loadUI(options: B3dUIOptions)` loads babylonjs guis, which you can create programmatically or using the [babylonjs gui tool](https://gui.babylonjs.com/).
*/
import { Component as WebComponent } from 'xinjs';
type B3dCallback = ((element: B3d, BABYLON: any) => void) | ((element: B3d, BABYLON: any) => Promise<void>);
interface B3dUIOptions {
    snippetId?: string;
    jsonUrl?: string;
    data?: any;
    size?: number;
}
type MeshProcessCallback = (meshes: any[]) => void;
export declare class B3d extends WebComponent {
    babylonReady: Promise<any>;
    BABYLON?: any;
    static styleSpec: {
        ':host': {
            display: string;
            position: string;
        };
        ':host canvas': {
            width: string;
            height: string;
        };
        ':host .babylonVRicon': {
            height: number;
            width: number;
            backgroundColor: string;
            filter: string;
            backgroundImage: string;
            backgroundPosition: string;
            backgroundRepeat: string;
            border: string;
            borderRadius: number;
            borderStyle: string;
            outline: string;
            transition: string;
        };
        ':host .babylonVRicon:hover': {
            transform: string;
        };
    };
    content: any;
    constructor();
    scene: any;
    engine: any;
    sceneCreated: B3dCallback;
    update: B3dCallback;
    private _update;
    onResize(): void;
    loadScene: (path: string, file: string, processCallback?: MeshProcessCallback) => Promise<void>;
    loadUI: (options: B3dUIOptions) => Promise<any>;
    connectedCallback(): void;
}
export declare const b3d: ElementCreator<B3d>;
export {};
