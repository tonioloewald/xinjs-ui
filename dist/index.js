import {xinProxy as $hgUW1$xinProxy, Component as $hgUW1$Component, elements as $hgUW1$elements, svgElements as $hgUW1$svgElements, xinValue as $hgUW1$xinValue, getListItem as $hgUW1$getListItem, touch as $hgUW1$touch, vars as $hgUW1$vars, xin as $hgUW1$xin, varDefault as $hgUW1$varDefault} from "xinjs";
import {marked as $hgUW1$marked} from "marked";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $86ec44903a84f851$exports = {};

$parcel$export($86ec44903a84f851$exports, "AbTest", () => $86ec44903a84f851$export$6aacb15d82c1f62a);
$parcel$export($86ec44903a84f851$exports, "abTest", () => $86ec44903a84f851$export$f3d50d6cab4ec980);
/*!
# ab-test

`<xin-ab>` provides a simple method for implementing A|B-testing.

```js
const { AbTest } = xinjsui

AbTest.conditions = {
  testA: true,
  testB: false,
  testC: Math.random() < 0.5
}
```
```html
<xin-ab condition="testA">
  <p>Visible if conditions.testA === true</p>
</xin-ab>
<xin-ab condition="testB">
  <p>Visible if conditions.testB === true</p>
</xin-ab>
<xin-ab not condition="testB">
  <p>Visible if conditions.testB !== true</p>
</xin-ab>
<xin-ab condition="testC">
  <p>Visible if conditions.testC === true (50/50 chance)</p>
</xin-ab>
```
```css
.preview {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
.preview p {
  background: #44c;
  color: white;
  display: block;
  border-radius: 99px;
  padding: 4px 10px;
  margin: 0;
}
```

1. Set `AbTest.conditions` to anything you like.
2. Use `<xin-ab>` elements to display conditional content.

If the value referenced by `condition` is `false` then the content
of `<xin-ab>` will be hidden (this is reversed if `not` is set).
*/ 
const { abTestConditions: $86ec44903a84f851$var$abTestConditions } = (0, $hgUW1$xinProxy)({
    abTestConditions: {}
});
class $86ec44903a84f851$export$6aacb15d82c1f62a extends (0, $hgUW1$Component) {
    static set conditions(context) {
        Object.assign($86ec44903a84f851$var$abTestConditions, context);
        for (const abTest of [
            ...$86ec44903a84f851$export$6aacb15d82c1f62a.instances
        ])abTest.queueRender();
    }
    condition = "";
    not = false;
    static instances = new Set();
    constructor(){
        super();
        this.initAttributes("condition", "not");
    }
    connectedCallback() {
        super.connectedCallback();
        $86ec44903a84f851$export$6aacb15d82c1f62a.instances.add(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        $86ec44903a84f851$export$6aacb15d82c1f62a.instances.delete(this);
    }
    render() {
        if (this.condition !== "" && (this.not ? $86ec44903a84f851$var$abTestConditions[this.condition] === true : $86ec44903a84f851$var$abTestConditions[this.condition] !== true)) {
            if (!this.hasAttribute("hidden")) this.setAttribute("hidden", "");
        } else if (this.hasAttribute("hidden")) this.removeAttribute("hidden");
    }
}
const $86ec44903a84f851$export$f3d50d6cab4ec980 = $86ec44903a84f851$export$6aacb15d82c1f62a.elementCreator({
    tag: "xin-ab"
});


var $ef1971ff775ba547$exports = {};

$parcel$export($ef1971ff775ba547$exports, "B3d", () => $ef1971ff775ba547$export$1bc633d0db17d4e1);
$parcel$export($ef1971ff775ba547$exports, "b3d", () => $ef1971ff775ba547$export$d0bb57305ce055c9);
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
/*!
# scriptTag & styleSheet

## scriptTag

If you need to load an old school (cjs) javascript or css library via cdn then use these two functions.

`xinjs-ui` uses this library to implement the `<xin-code>`, `<xin-lottie>`, and `<xin-map>`
elements.

`scriptTag()` and `styleSheet()` return promises that resolve `globalThis` when the module in question
has loaded and otherwise behave as much like `import()` as possible.

Using `scriptTag`:

```html
<!-- inline styles needed because chart.js overrides stylesheet -->
<canvas style="height: 100%; width: 100%"></canvas>
```
```js
const { scriptTag } = xinjsui

// Note that the current version of Chart.js is an ES6 module so you could just use `import()` instead
const { Chart } = await scriptTag('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js')
const data = {
  labels: ['first', 'second', 'third'],
  datasets: [
    {
      label: 'amazingness',
      backgroundColor: '#fff4',
      borderColor: '#f008',
      borderWidth: 2,
      data: [21, 27, 57]
    }
  ]
}
const options = {
  scales: {
    yAxes:[{
      stacked:true,
      gridLines: {
        display:true,
        color: '#00f2'
      }
    }],
    xAxes:[{
      gridLines: {
        display:false
      }
    }]
  }
}

Chart.Bar(preview.querySelector('canvas'), {data, options})
```

Note that `scriptTag` will resolve `globalThis` so it behaves as much like async `import()`
as possible.

As an aside:

`<xin-lottie>` is implemented in such a way that if you've preloaded the module
(e.g. via a script tag or packaging) it won't load it again, which affords offline
use.

There's no point for `<xin-map>` since it won't work without connectivity anyway.

## styleSheet

styleSheet creates a `<link>` tag for a specified css file.

Using `styleSheet`:

    styleSheet('../path/to/style.css')

This is awaitable, if you care. The stylesheet `<link>` will only be inserted _once_.
*/ 
const $5c31145f3e970423$var$loadedScripts = {};
function $5c31145f3e970423$export$c6e082819e9a0330(src, existingSymbolName) {
    if ($5c31145f3e970423$var$loadedScripts[src] === undefined) {
        if (existingSymbolName !== undefined) {
            // @ts-expect-error eslint is just wrong
            const existing = globalThis[existingSymbolName];
            $5c31145f3e970423$var$loadedScripts[src] = Promise.resolve({
                [existingSymbolName]: existing
            });
        }
        const scriptElt = (0, $hgUW1$elements).script({
            src: src
        });
        document.head.append(scriptElt);
        $5c31145f3e970423$var$loadedScripts[src] = new Promise((resolve)=>{
            scriptElt.onload = ()=>resolve(globalThis);
        });
    }
    return $5c31145f3e970423$var$loadedScripts[src];
}
const $5c31145f3e970423$var$loadedStyleSheets = {};
function $5c31145f3e970423$export$63257fda812a683f(href) {
    if ($5c31145f3e970423$var$loadedStyleSheets[href] === undefined) {
        const linkElement = (0, $hgUW1$elements).link({
            rel: "stylesheet",
            type: "text/css",
            href: href
        });
        document.head.append(linkElement);
        $5c31145f3e970423$var$loadedStyleSheets[href] = new Promise((resolve)=>{
            linkElement.onload = resolve;
        });
    }
    return $5c31145f3e970423$var$loadedStyleSheets[href];
}


var $fef058b85aa29b7a$exports = {};

$parcel$export($fef058b85aa29b7a$exports, "defineIcon", () => $fef058b85aa29b7a$export$c07bb2d77ca8d15);
$parcel$export($fef058b85aa29b7a$exports, "svg2DataUrl", () => $fef058b85aa29b7a$export$c12d014da9da5ff8);
$parcel$export($fef058b85aa29b7a$exports, "icons", () => $fef058b85aa29b7a$export$df03f54e09e486fa);
$parcel$export($fef058b85aa29b7a$exports, "SvgIcon", () => $fef058b85aa29b7a$export$dbcb8210e8a983ed);
$parcel$export($fef058b85aa29b7a$exports, "svgIcon", () => $fef058b85aa29b7a$export$8c90725d55a8eef);
/*!
# icons

A library that provides `ElementCreator` functions that produce SVG icons. It leverages `xinjs`'s
`svgElements` proxy.

## icons

`icons` is a proxy that generates an `ElementCreator` for a given icon on demand,
e.g. `icons.chevronDown()` produces an `<svg>` element containing a downward-pointing chevron
icon with the class `icon-chevron-down`.

```js
const { icons, svgIcon } = xinjsui
const { div } = xinjs.elements

preview.append(...Object.keys(icons).sort().map(iconName => div(
  { class: 'tile' },
  svgIcon({icon: iconName}),
  div(iconName)
)))
```
```css
.preview {
  display: flex;
  flex-wrap: wrap;
  padding: var(--spacing);
  gap: var(--spacing);
  overflow: hidden scroll !important;
}

.preview svg {
  fill: var(--text-color);
}

.preview .tile {
  display: inline-block;
  width: 160px;
  text-align: center;
  cursor: pointer;
  background: #fff8;
  padding: 10px;
  border-radius: 5px;
}

.preview .tile:hover {
  --text-color: var(--brand-color);
}

.preview .tile > div {
  font-family: Menlo, Monaco, monospace;
  whitespace: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.5;
}
```

These icons are completely unstyled and can be colored using the css `fill` property. This will
probably be broken out as a standalone library to allow the use of whatever icons you like
(its source data is currently generated from an [icomoon](https://icomoon.com/app)
`selection.json` file, but could just as easily be generated from a directory full of SVGs).

## Adding and redefining icons

`defineIcon(name: string, icon: IconSpec | string)` adds or replaces your own icons

he simplest option is simply to pass the `path` attribute (if the icon has a single path) while more c
omplex icons can be provide an `IconSpec` structure `{ p: string[]; w: number; h: number }` (specifying
any number of paths and the size of the bounding box).

Clearly it would be easy to extend this to allow multi-colored icons in the future.

## `<xin-icon>`

`<xin-icon>` is a simple component that lets you embed icons as HTML. Check the CSS tab to see
how it's styled.

`<xin-icon>` supports two attributes:

- `icon` is the name of the icon
- `color` is the fill color (if you don't want to style it using CSS)

```html
<xin-icon class="demo-2" icon="game" color="var(--brand-color)"></xin-icon>
```
```css
xin-icon.demo-2 > svg {
  height: 96px;
}
```

## SVGs as data-urls

`svg2DataUrl(svg: SVGElement, fill?: string, stroke?: string): string` is provided as a
utility for converting SVG elements into data-urls (e.g. for incorporation into
CSS properties. (It's used by the `<xin-3d>` component to render the XR widget.)

If you're using `SVGElement`s created using the `icons` proxy, you'll want to provide `fill` and/or
`stroke` values, because images loaded via css properties cannot be styled.

## Missing Icons

If you ask for an icon that isn't defined, the `icons` proxy will print a warning to console
and render a `square` (in fact, `icons.square()`) as a fallback.

## Why?

The motivation behind this is to avoid dealing with tooling issues that inevitably result from
integrating custom icon fonts or stylesheets needed by code libraries (and an icon-font also needs
a style-sheet. Importing code is simply easier (and as a bonus, more compact and flexible, and there's
no question as to when the stuff is available).

These icons are mainly sourced from [feather](https://github.com/feathericons/feather), but
all the icons have been processed to have integer coordinates in a `viewBox` typically scaled to 1024  &times; 1024.

*/ 
var $2d5b9d9e4f25abad$export$2e2bcd8739ae039 = {
    facebook: "M928 0h-832c-53 0-96 43-96 96v832c0 53 43 96 96 96h416v-448h-128v-128h128v-64c0-106 86-192 192-192h128v128h-128c-35 0-64 29-64 64v64h192l-32 128h-160v448h288c53 0 96-43 96-96v-832c0-53-43-96-96-96z",
    twitter: "M1024 226c-38 17-78 28-121 33 43-26 77-67 92-116-41 24-86 42-133 51-38-41-93-66-153-66-116 0-210 94-210 210 0 16 2 32 5 48-175-9-329-92-433-220-18 31-28 67-28 106 0 73 37 137 93 175-34-1-67-11-95-26 0 1 0 2 0 3 0 102 72 187 169 206-18 5-36 7-55 7-14 0-27-1-40-4 27 83 104 144 196 146-72 56-162 90-261 90-17 0-34-1-50-3 93 60 204 94 322 94 386 0 598-320 598-598 0-9-0-18-1-27 41-29 77-66 105-109z",
    game: {
        p: [
            "M992 194v-2h-672c-177 0-320 143-320 320s143 320 320 320c105 0 198-50 256-128h128c58 78 151 128 256 128 177 0 320-143 320-320 0-166-126-302-288-318zM512 576h-128v128h-128v-128h-128v-128h128v-128h128v128h128v128zM896 576c-35 0-64-29-64-64s29-64 64-64 64 29 64 64-29 64-64 64zM1088 576c-35 0-64-29-64-64 0-35 29-64 64-64s64 29 64 64c0 35-29 64-64 64z"
        ],
        w: 1280
    },
    google: "M512 0c-283 0-512 229-512 512s229 512 512 512 512-229 512-512-229-512-512-512zM520 896c-212 0-384-172-384-384s172-384 384-384c104 0 190 38 257 100l-104 100c-29-27-78-59-153-59-131 0-238 109-238 242s107 242 238 242c152 0 209-109 218-166h-218v-132h363c3 19 6 38 6 64 0 219-147 375-369 375z",
    github: "M512 13c-283 0-512 229-512 512 0 226 147 418 350 486 26 5 35-11 35-25 0-12-0-53-1-95-142 31-173-60-173-60-23-59-57-75-57-75-46-32 4-31 4-31 51 4 78 53 78 53 46 78 120 56 149 43 5-33 18-56 33-68-114-13-233-57-233-253 0-56 20-102 53-137-5-13-23-65 5-136 0 0 43-14 141 52 41-11 85-17 128-17 44 0 87 6 128 17 98-66 141-52 141-52 28 71 10 123 5 136 33 36 53 82 53 137 0 197-120 240-234 253 18 16 35 47 35 95 0 69-1 124-1 141 0 14 9 30 35 25 203-68 350-260 350-486 0-283-229-512-512-512z",
    npm: "M0 0v1024h1024v-1024h-1024zM832 832h-128v-512h-192v512h-320v-640h640v640z",
    xr: {
        p: [
            "M801 116c465 0 735 49 735 396 0 279-197 396-342 396-218 0-307-165-393-165-110 0-175 165-393 165-145 0-342-117-342-396 0-347 270-396 735-396zM949 285c-16-16-41-16-57 0-16 16-16 41-0 57v0l322 322c16 16 41 16 57 0 16-16 16-41 0-57-9-9-18-18-26-26l-4-4c-5-5-9-9-14-14l-4-4c-32-32-65-64-132-131l-8-8c-1-1-3-3-4-4l-18-18c-31-31-68-68-113-113zM801 272c-22 0-40 18-40 40v0 322c0 22 18 40 40 40 22 0 40-18 40-40 0-1 0-2 0-3l0-6c0-3 0-6 0-8l0-5c0-1 0-2 0-2l0-6c0-1 0-1 0-2l0-7c0-1 0-1 0-2l0-8c0-0 0-1 0-1l-0-20c-0-0-0-1-0-1l-0-12c-0-1-0-1-0-2l-0-15c-0-1-0-2-0-2l-0-14c-0-1-0-2-0-3l-0-22c-0-1-0-3-0-4l-0-28c-0-2-0-4-0-5l-0-50c-0-2-0-5-0-7l-0-84c0-22-18-40-40-40zM710 282c-16-16-41-16-57 0v0l-134 134-131-131c-16-16-41-16-57 0-16 16-16 41-0 57v0l131 131-132 132c-15 16-15 41 1 56 16 16 41 16 57 0v0l131-131 134 134c16 16 41 16 57 0 16-16 16-41 0-57v0l-134-133 134-133c16-16 16-41 0-57z"
        ],
        w: 1536
    },
    xinjs: "M976 0c4 0 8 2 11 5 4 4 7 7 11 11l21 21c3 3 5 7 5 11v928c0 4-2 8-5 11l-11 11c-5 5-9 9-14 14l-7 7c-3 3-7 5-11 5h-928c-4 0-8-2-11-5-4-4-7-7-11-11l-21-21c-3-3-5-7-5-11v-928c0-4 2-8 5-11 4-4 7-7 11-11l21-21c3-3 7-5 11-5h928zM858 546l-269 269c-13 13-13 34 0 48 13 13 34 13 48 0l104-104 165-165c13-13 13-34-0-48-13-13-34-13-48 0zM388 544l-112 112-110-110c-13-13-34-13-48 0-13 13-13 34-1 47l1 1 110 110-110 110c-13 13-13 34 0 48 13 13 34 13 48 0l110-110 112 112c13 13 34 13 48 0 13-13 13-34 0-48l-112-112 112-112c13-13 13-34 0-48-13-13-34-13-48 0zM512 534c-19 0-34 15-34 34v270c0 19 15 34 34 34 19 0 34-15 34-34v-270c0-19-15-34-34-34zM895 557c7 7 7 18 0 25l-0 0-11 11-19 19-215 214-24 24c-7 7-18 7-25-0-7-7-7-18-0-25l0-0 269-269c7-7 18-7 25 0zM425 555c7 7 7 18 0 25l-0 0-123 123 123 123c7 7 7 18 0 25l-0 0c-7 7-18 7-25 0l-0-0-123-123-121 121c-7 7-18 7-25-0-7-7-7-18-0-25l0-0 121-121-121-121c-7-7-7-18 0-25 7-7 18-7 25-0l0 0 121 121 123-123c7-7 18-7 25 0zM512 550c10 0 17 8 18 17l0 1 0 37-0 121-0 111c0 10-8 18-18 18-10 0-17-8-18-17l-0-1v-270c0-10 8-18 18-18zM637 170c-13-13-34-13-48 0-13 13-13 34-0 48v0l269 269c13 13 34 13 48 0 13-13 13-34 0-48v0l-9-9c-10-10-18-18-27-27l-3-3c-40-40-82-81-219-218zM436 168c-13-13-34-13-48 0v0l-112 112-110-110c-13-13-34-13-48 0-13 13-13 34-0 48v0l110 110-110 110c-13 13-12 34 1 47 13 13 34 13 48 0v0l110-110 112 112c13 13 34 13 48 0 13-13 13-34 0-48v0l-112-112 112-112c13-13 13-34 0-48zM512 158c-19 0-34 15-34 34v0 270c0 19 15 34 34 34 19 0 34-15 34-34v0l0-5c0-1 0-2 0-2l0-5c0-1 0-1 0-2l0-6c0-1 0-1 0-2l0-5c0-1 0-1 0-2l0-8c0-0 0-1 0-1l-0-27c-0-0-0-1-0-1l-0-12c-0-1-0-1-0-2l-0-15c-0-1-0-2-0-3l-0-21c-0-1-0-2-0-3l-0-33c-0-2-0-3-0-5l-0-109c0-19-15-34-34-34z",
    html5: "M61 0l82 922 369 102 370-103 82-921h-903zM785 301h-433l10 116h412l-31 347-232 64-232-64-16-178h113l8 90 126 34 0-0 126-34 13-147h-392l-30-342h566l-10 113z",
    calendar: "M299 85v43h-85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-85v-43c0-24-19-43-43-43s-43 19-43 43v43h-256v-43c0-24-19-43-43-43s-43 19-43 43zM853 384h-683v-128c0-12 5-22 13-30s18-13 30-13h85v43c0 24 19 43 43 43s43-19 43-43v-43h256v43c0 24 19 43 43 43s43-19 43-43v-43h85c12 0 22 5 30 13s13 18 13 30zM171 469h683v384c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30z",
    editDoc: "M469 128h-299c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-24-19-43-43-43s-43 19-43 43v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h299c24 0 43-19 43-43s-19-43-43-43zM759 77l-405 405c-5 5-9 12-11 20l-43 171c-2 6-2 14 0 21 6 23 29 37 52 31l171-43c7-2 14-6 20-11l405-405c26-26 39-60 39-94s-13-68-39-94-60-39-94-39-68 13-94 39zM819 137c9-9 22-14 34-14s24 5 34 14 14 22 14 34-5 24-14 34l-397 397-90 23 23-90z",
    edit: "M695 98l-576 576c-5 5-9 11-11 19l-64 235c-2 7-2 15 0 22 6 23 30 36 52 30l235-64c7-2 13-6 19-11l576-576c32-32 48-74 48-115s-16-84-48-115-74-48-115-48-84 16-115 48zM755 158c15-15 35-23 55-23s40 8 55 23 23 35 23 55-8 40-23 55l-568 568-152 41 41-152z",
    web: "M723 469c-9-115-47-228-114-329 67 17 127 53 174 100 60 60 100 140 110 229zM609 884c63-95 104-207 114-329h171c-10 89-50 169-110 229-47 47-107 83-174 100zM301 555c9 115 47 228 114 329-67-17-127-53-174-100-60-60-100-140-110-229zM415 140c-63 95-104 207-114 329h-171c10-89 50-169 110-229 48-47 107-83 174-100zM512 43c0 0 0 0 0 0-130 0-247 53-332 137-85 85-137 202-137 332s53 247 137 332c85 85 202 137 332 137 0 0 0 0 0 0 130-0 247-53 332-137 85-85 137-202 137-332s-53-247-137-332c-85-85-202-137-332-137zM638 555c-11 119-56 229-126 318-74-95-115-206-126-318zM512 151c74 95 115 206 126 318h-251c11-119 56-229 126-318z",
    mail: "M128 338l360 252c15 10 34 10 49 0l360-252v430c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30zM43 255c0 0 0 1 0 1v511c0 35 15 67 38 90s55 38 90 38h683c35 0 67-15 90-38s38-55 38-90v-511c0-0 0-1 0-1-0-35-15-67-38-90-23-23-55-38-90-38h-683c-35 0-67 15-90 38-23 23-37 55-38 90zM891 237l-379 266-379-266c2-4 5-8 8-11 8-8 19-13 30-13h683c12 0 22 5 30 13 3 3 6 7 8 11z",
    resize: "M175 102l271 271c20 20 20 52 0 72s-52 20-72 0l-271-271v184c0 28-23 51-51 51s-51-23-51-51v-307c0-7 1-14 4-20s6-12 11-17c0-0 0-0 0-0 5-5 10-8 17-11 6-3 13-4 20-4h307c28 0 51 23 51 51s-23 51-51 51h-184zM849 922l-271-271c-20-20-20-52 0-72s52-20 72 0l271 271v-184c0-28 23-51 51-51s51 23 51 51v307c0 28-23 51-51 51h-307c-28 0-51-23-51-51s23-51 51-51h184z",
    phone: "M981 722c1-30-10-60-29-83-20-24-48-41-82-46-34-4-72-13-110-28-18-7-38-9-57-7-28 3-56 15-78 36l-31 31c-76-48-143-114-196-196l31-31c14-14 24-31 30-49 9-27 9-57-2-86-12-32-22-70-27-111-4-30-19-57-41-77-23-21-54-33-86-33h-128c-4 0-8 0-12 1-35 3-66 20-87 45s-32 58-29 94c13 131 58 266 137 388 64 103 156 197 269 269 110 72 243 122 388 138 4 0 8 1 12 1 35-0 67-15 90-38s37-55 37-90zM896 722v128c0 12-5 23-12 30s-18 13-30 13c-134-14-254-59-353-124-104-66-186-151-243-243-72-112-113-234-125-351-1-11 3-22 10-31s17-14 29-15l132-0c12-0 22 4 29 11 7 7 12 16 14 26 6 46 17 90 32 129 3 9 3 19 0 28-2 6-6 12-10 17l-54 54c-14 14-16 35-7 51 68 119 164 211 272 272 17 9 38 6 51-7l54-54c7-7 16-11 26-12 6-1 13 0 20 3 44 16 88 27 129 32 10 1 20 7 26 15 6 8 10 18 10 29z",
    send: "M980 97c2-6 2-13 1-20-1-5-3-10-6-14-3-4-6-8-10-11-5-4-11-6-16-8s-12-1-18-0c-2 0-4 1-5 1l-1 0-852 298c-11 4-20 12-25 23-10 22 0 47 22 56l369 164 164 369c5 10 13 19 25 23 22 8 47-4 54-26l298-852c0-1 1-2 1-3zM460 504l-259-115 575-201zM837 248l-201 575-115-259z",
    copy: "M469 341c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h384c35 0 67-14 90-38s38-55 38-90v-384c0-35-14-67-38-90s-55-38-90-38zM469 427h384c12 0 22 5 30 13s13 18 13 30v384c0 12-5 22-13 30s-18 13-30 13h-384c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13zM213 597h-43c-12 0-22-5-30-13s-13-18-13-30v-384c0-12 5-22 13-30s18-13 30-13h384c12 0 22 5 30 13s13 18 13 30v43c0 24 19 43 43 43s43-19 43-43v-43c0-35-14-67-38-90s-55-38-90-38h-384c-35 0-67 14-90 38s-38 55-38 90v384c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43z",
    alignCenter: "M128 128h768v86h-768v-86zM298 298h428v86h-428v-86zM128 554v-84h768v84h-768zM128 896v-86h768v86h-768zM298 640h428v86h-428v-86z",
    alignLeft: "M128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 554v-84h768v84h-768zM640 298v86h-512v-86h512zM640 640v86h-512v-86h512z",
    alignRight: "M128 128h768v86h-768v-86zM384 384v-86h512v86h-512zM128 554v-84h768v84h-768zM384 726v-86h512v86h-512zM128 896v-86h768v86h-768z",
    fontBold: "M576 662q28 0 46-19t18-45-18-45-46-19h-150v128h150zM426 278v128h128q26 0 45-19t19-45-19-45-45-19h-128zM666 460q92 42 92 146 0 68-45 115t-113 47h-302v-598h268q72 0 121 50t49 122-70 118z",
    blockOutdent: "M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 512l170-170v340zM470 726v-86h426v86h-426z",
    blockIndent: "M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM470 726v-86h426v86h-426zM128 342l170 170-170 170v-340zM128 896v-86h768v86h-768z",
    fontItalic: "M426 170h342v128h-120l-144 342h94v128h-342v-128h120l144-342h-94v-128z",
    listBullet: "M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z",
    listNumber: "M298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM298 214h598v84h-598v-84zM86 470v-44h128v40l-78 88h78v44h-128v-40l76-88h-76zM128 342v-128h-42v-44h84v172h-42zM86 726v-44h128v172h-128v-44h84v-20h-42v-44h42v-20h-84z",
    fontUnderline: "M214 810h596v86h-596v-86zM512 726q-106 0-181-75t-75-181v-342h106v342q0 62 44 105t106 43 106-43 44-105v-342h106v342q0 106-75 181t-181 75z",
    airplay: "M213 683h-43c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13h683c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-43c-24 0-43 19-43 43s19 43 43 43h43c35 0 67-14 90-38s38-55 38-90v-427c0-35-14-67-38-90s-55-38-90-38h-683c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h43c24 0 43-19 43-43s-19-43-43-43zM545 613c-1-2-3-4-5-5-18-15-45-13-60 5l-213 256c-6 7-10 17-10 27 0 24 19 43 43 43h427c10 0 19-3 27-10 18-15 21-42 5-60zM512 707l122 147h-244z",
    bell: "M725 341c0 171 40 278 79 341h-585c39-63 79-170 79-341 0-59 24-112 62-151s92-62 151-62 112 24 151 62 62 92 62 151zM811 341c0-82-33-157-87-211s-129-87-211-87-157 33-211 87-87 129-87 211c0 261-102 343-109 349-19 13-24 39-11 59 8 12 22 19 35 19h768c24 0 43-19 43-43 0-14-7-27-18-35-8-6-110-87-110-349zM549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15z",
    bellOff: "M549 875c-6 10-15 17-26 20s-22 2-32-4c-7-4-12-9-15-15-12-20-38-28-58-16s-28 38-16 58c11 19 27 35 47 47 31 18 65 21 97 13s60-29 78-59c12-20 5-47-15-58s-47-5-58 15zM811 340c-0-82-33-156-87-210-54-54-129-88-211-88-62-0-119 19-166 50-19 13-25 40-11 59s40 25 59 11c33-22 73-35 116-36 62 0 115 24 153 63 38 39 62 92 62 150-2 71 7 148 28 225 6 23 30 36 52 30s36-30 30-52c-19-69-27-139-25-201 0-0 0-0 0-1 0-0 0-0 0-0zM298 359l324 324h-403c37-61 76-163 79-324zM13 73l207 207c-5 21-7 42-6 62 0 261-102 343-109 348-19 13-24 39-11 59 8 12 22 19 35 19h580l243 243c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",
    bookmark: "M786 931c7 5 15 8 25 8 24 0 43-19 43-43v-683c0-35-14-67-38-90s-55-38-90-38h-427c-35 0-67 14-90 38s-38 55-38 90v683c-0 8 3 17 8 25 14 19 40 24 60 10l274-196zM768 813l-231-165c-15-11-35-10-50 0l-231 165v-600c0-12 5-22 13-30s18-13 30-13h427c12 0 22 5 30 13s13 18 13 30z",
    camera: "M1024 811v-469c0-35-14-67-38-90s-55-38-90-38h-148l-73-109c-8-12-21-19-35-19h-256c-14 0-27 7-35 19l-73 109h-148c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h768c35 0 67-14 90-38s38-55 38-90zM939 811c0 12-5 22-13 30s-18 13-30 13h-768c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h171c15 0 28-7 35-19l73-109h210l73 109c8 12 22 19 35 19h171c12 0 22 5 30 13s13 18 13 30zM725 555c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 555c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",
    check: "M823 226l-439 439-183-183c-17-17-44-17-60 0s-17 44 0 60l213 213c17 17 44 17 60 0l469-469c17-17 17-44 0-60s-44-17-60 0z",
    chevronDown: "M226 414l256 256c17 17 44 17 60 0l256-256c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",
    chevronLeft: "M670 738l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60z",
    chevronRight: "M414 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0z",
    chevronUp: "M798 610l-256-256c-17-17-44-17-60 0l-256 256c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60z",
    code: "M713 798l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM311 226l-256 256c-17 17-17 44 0 60l256 256c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0z",
    undo: "M896 853v-299c0-59-24-112-62-151s-92-62-151-62h-409l141-141c17-17 17-44 0-60s-44-17-60 0l-213 213c-4 4-7 9-9 14s-3 11-3 16 1 11 3 16c2 5 5 10 9 14l213 213c17 17 44 17 60 0s17-44 0-60l-141-141h409c35 0 67 14 90 38s38 55 38 90v299c0 24 19 43 43 43s43-19 43-43z",
    redo: "M213 853v-299c0-35 14-67 38-90s55-38 90-38h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 4-10 4-22 0-33-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60l141 141h-409c-59 0-112 24-151 62s-62 92-62 151v299c0 24 19 43 43 43s43-19 43-43z",
    crop: "M302 302l381-3c11 0 22 5 30 13s13 18 13 30v384h-384c-12 0-22-5-30-13s-13-18-13-30zM43 304l174-1-3 380c0 36 14 68 38 91s55 38 90 38h384v171c0 24 19 43 43 43s43-19 43-43v-171h171c24 0 43-19 43-43s-19-43-43-43h-171v-384c0-35-14-67-38-90s-55-38-91-38l-380 3 1-174c0-24-19-43-42-43s-43 19-43 42l-2 175-175 2c-24 0-42 19-42 43s19 42 43 42z",
    database: "M171 213c0 0 0-4 9-12 10-10 29-21 56-31 64-25 163-42 277-42s213 17 277 42c27 11 45 22 56 31 9 8 9 12 9 12 0 0-0 4-9 12-10 10-29 21-56 31-64 25-163 42-277 42s-213-17-277-42c-27-11-45-22-56-31-9-8-9-12-9-12zM853 620v191c-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10l-0-193c11 5 22 10 33 15 77 30 187 48 307 48s231-18 307-48c12-5 23-10 34-15zM853 321v190c0 0 0 0 0 1-2 4-4 8-9 12-10 10-29 21-56 31-64 25-163 42-276 42s-213-17-276-42c-27-10-45-21-56-31-5-5-8-8-8-10-0-2-0-3-0-5l-0-188c11 5 22 10 34 15 77 30 187 48 308 48s231-18 308-48c12-5 23-10 34-15zM85 213v597c0 2 0 5 0 7 2 28 18 51 37 68 21 19 50 35 82 48 77 30 187 48 307 48s231-18 307-48c32-13 61-28 82-48 18-17 34-40 37-68 0-2 0-5 0-7v-597c0-2-0-5-0-7-2-28-18-51-36-68-21-20-50-35-82-48-77-30-187-48-308-48s-231 18-308 48c-32 13-61 28-82 48-18 17-34 40-36 68-0 2-0 5-0 7z",
    download: "M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM555 537v-409c0-24-19-43-43-43s-43 19-43 43v409l-141-141c-17-17-44-17-60 0s-17 44 0 60l213 213c4 4 9 7 14 9s11 3 16 3c11 0 22-4 30-13l213-213c17-17 17-44 0-60s-44-17-60 0z",
    downloadCloud: "M469 512v281l-98-98c-17-17-44-17-60 0s-17 44 0 60l171 171c4 4 9 7 14 9 10 4 22 4 33 0 5-2 10-5 14-9l171-171c17-17 17-44 0-60s-44-17-60 0l-98 98v-281c0-24-19-43-43-43s-43 19-43 43zM915 807c58-41 94-101 105-165s-2-133-43-191c-35-50-85-84-140-99-22-6-46-10-69-10h-22c-31-88-91-158-167-203-85-50-188-68-291-41s-185 92-235 176-68 188-41 291c16 62 46 116 85 159 16 17 43 19 60 3s19-43 3-60c-30-33-53-75-65-123-21-80-7-160 32-226s103-117 183-137 160-7 226 32 117 103 137 183c5 19 22 32 41 32h54c16 0 31 2 47 6 37 10 70 33 93 66 27 39 36 84 29 127s-31 83-70 110c-19 14-24 40-10 59s40 24 59 10z",
    externalLink: "M725 555v256c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-469c0-12 5-22 13-30s18-13 30-13h256c24 0 43-19 43-43s-19-43-43-43h-256c-35 0-67 14-90 38s-38 55-38 90v469c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-256c0-24-19-43-43-43s-43 19-43 43zM457 627l397-397v153c0 24 19 43 43 43s43-19 43-43v-256c0-6-1-11-3-16s-5-10-9-14c-0-0-0-0-0-0-4-4-9-7-14-9-5-2-11-3-16-3h-256c-24 0-43 19-43 43s19 43 43 43h153l-397 397c-17 17-17 44 0 60s44 17 60 0z",
    eye: "M5 493c-6 12-6 26 0 38 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 243 72s175-30 243-72c56-35 103-78 142-119 31-34 56-67 75-95 31-45 48-79 48-79 6-12 6-26 0-38 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72s-175 30-243 72c-56 35-103 78-142 119-31 34-56 67-75 95-31 45-48 79-48 79zM91 512c7-12 17-29 31-49 17-25 40-55 68-85 34-38 76-75 123-104 58-36 124-59 198-59s141 24 198 59c48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-7 12-17 29-31 49-17 25-40 55-68 85-34 38-76 75-123 104-58 36-124 59-198 59s-141-24-198-59c-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49zM683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",
    eyeOff: "M432 222c28-6 55-9 79-9 75 0 141 24 199 59 48 30 89 67 123 104 27 30 50 60 68 85 14 20 24 37 31 49-23 41-49 78-76 108-15 18-13 45 5 60s45 13 60-5c35-41 69-90 97-144 6-12 7-26 1-39 0 0-17-34-48-79-19-28-44-61-75-95-38-42-86-85-142-119-68-42-150-72-243-72-31-0-66 3-100 11-23 5-37 28-32 51s28 37 51 32zM428 488l108 108c-8 3-16 4-24 4-22 1-44-7-61-23s-26-38-27-59c-0-10 1-20 4-30zM255 316l109 109c-19 29-27 63-26 97 2 44 20 87 54 119s79 47 122 46c30-1 59-10 85-26l99 99c-59 34-124 51-187 52-74 0-140-24-198-59-48-30-89-67-123-104-27-30-50-60-68-85-14-20-24-37-31-49 45-78 101-144 164-197zM13 73l182 182c-74 63-139 143-190 237-6 12-7 26-1 39 0 0 17 34 48 79 19 28 44 61 75 95 38 42 86 85 142 119 68 42 150 72 244 72 85-1 171-26 248-75l191 191c17 17 44 17 60 0s17-44 0-60l-379-379c-0-0-0-0-0-0l-180-180c-0-0-1-1-1-1l-379-379c-17-17-44-17-60 0s-17 44 0 60z",
    fastForward: "M597 723v-423l272 211zM128 723v-423l272 211zM112 844l384-299c11-8 16-21 16-33v298c0 24 19 43 43 43 10 0 19-3 26-9l384-299c19-14 22-41 7-60-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v298c-0-9-3-18-9-26-2-3-5-6-7-7l-384-299c-19-14-45-11-60 7-6 8-9 17-9 26v597c0 24 19 43 43 43 10 0 19-3 26-9z",
    file: "M750 341h-153v-153zM883 354l-299-299c-4-4-9-7-14-9s-11-3-16-3h-299c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-469c0-12-5-22-13-30zM512 128v256c0 24 19 43 43 43h256v427c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13z",
    fileMinus: "M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",
    filePlus: "M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM384 683h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",
    fileText: "M750 299h-110v-110zM883 311l-256-256c-4-4-9-7-14-9s-11-3-16-3h-341c-35 0-67 14-90 38s-38 55-38 90v683c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-512c0-12-5-22-13-30zM555 128v213c0 24 19 43 43 43h213v469c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-683c0-12 5-22 13-30s18-13 30-13zM683 512h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM683 683h-341c-24 0-43 19-43 43s19 43 43 43h341c24 0 43-19 43-43s-19-43-43-43zM427 341h-85c-24 0-43 19-43 43s19 43 43 43h85c24 0 43-19 43-43s-19-43-43-43z",
    filter: "M847 171l-282 333c-6 7-10 17-10 28v295l-85-43v-253c0-10-3-19-10-28l-282-333zM939 85h-853c-24 0-43 19-43 43 0 11 4 20 10 28l331 392v263c0 17 9 31 24 38l171 85c21 11 47 2 57-19 3-6 5-13 4-19v-349l331-392c15-18 13-45-5-60-8-7-18-10-28-10z",
    flag: "M213 572v-421c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 55 0 97-7 128-17v421c-19 9-58 23-128 23-55 0-101-18-155-40-53-21-113-46-186-46-55 0-97 7-128 17zM213 939v-276c19-9 58-23 128-23 55 0 101 18 155 40 53 21 113 46 186 46 139 0 192-47 201-55 8-8 13-19 13-30v-512c0-24-19-43-43-43-11 0-22 4-29 12-4 3-42 31-141 31-55 0-101-18-155-40-53-21-113-46-186-46-139 0-192 47-201 55-8 8-13 19-13 30v811c0 24 19 43 43 43s43-19 43-43z",
    folder: "M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30z",
    folderMinus: "M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z",
    folderPlus: "M981 811v-469c0-35-14-67-38-90s-55-38-90-38h-361l-73-109c-8-12-21-19-35-19h-213c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h683c35 0 67-14 90-38s38-55 38-90zM896 811c0 12-5 22-13 30s-18 13-30 13h-683c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h191l73 109c8 12 22 19 35 19h384c12 0 22 5 30 13s13 18 13 30zM384 640h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",
    help: "M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM896 512c0 106-43 202-112 272s-165 112-272 112-202-43-272-112-112-165-112-272 43-202 112-272 165-112 272-112 202 43 272 112 112 165 112 272zM428 398c8-22 24-39 44-49s43-11 65-4c20 7 35 20 45 37 8 13 12 28 12 44 0 7-2 13-5 20-3 7-9 14-16 21-30 30-78 47-78 47-22 7-34 32-27 54s32 34 54 27c0 0 66-22 111-67 12-12 23-26 32-43 9-17 14-37 14-58-0-31-9-61-24-87-20-33-51-60-90-74-44-16-91-12-130 7s-72 53-87 97c-8 22 4 47 26 54s47-4 54-26zM512 768c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",
    home: "M102 350c-10 8-16 20-16 34v469c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-469c-0-13-6-25-16-34l-384-299c-15-12-37-12-52 0zM683 896v-384c0-24-19-43-43-43h-256c-24 0-43 19-43 43v384h-128c-12 0-22-5-30-13s-13-18-13-30v-448l341-265 341 265v448c0 12-5 22-13 30s-18 13-30 13zM427 896v-341h171v341z",
    image: "M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM469 363c0-29-12-56-31-75s-46-31-75-31-56 12-75 31-31 46-31 75 12 56 31 75 46 31 75 31 56-12 75-31 31-46 31-75zM384 363c0 6-2 11-6 15s-9 6-15 6-11-2-15-6-6-9-6-15 2-11 6-15 9-6 15-6 11 2 15 6 6 9 6 15zM316 853l366-366 171 171v153c0 12-5 22-13 30s-18 13-30 13zM853 537l-141-141c-17-17-44-17-60 0l-454 454c-6-2-11-6-15-10-8-8-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h597c12 0 22 5 30 13s13 18 13 30z",
    layers: "M512 133l331 166-331 166-331-166zM493 47l-427 213c-21 11-30 36-19 57 4 9 11 15 19 19l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57-4-9-11-15-19-19l-427-213c-12-6-26-6-38 0zM66 763l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57zM66 550l427 213c12 6 26 6 38 0l427-213c21-11 30-36 19-57s-36-30-57-19l-408 204-408-204c-21-11-47-2-57 19s-2 47 19 57z",
    link: "M392 580c42 57 104 91 168 100s133-6 190-48c10-8 20-16 28-24l128-128c50-51 73-117 72-183s-27-131-78-180c-50-48-115-72-179-72-64 0-127 24-177 72l-74 73c-17 17-17 44-0 60s44 17 60 0l73-72c33-32 75-48 118-48 43-0 86 16 119 48 34 33 51 76 52 120s-15 88-47 121l-128 128c-5 5-11 11-18 16-38 28-83 38-127 32s-84-29-112-67c-14-19-41-23-60-9s-23 41-9 60zM632 444c-42-57-104-91-168-100s-133 6-190 48c-10 8-20 16-28 24l-128 128c-50 51-73 117-72 183s27 131 78 180c50 48 115 72 179 72 64-0 127-24 177-72l74-74c17-17 17-44 0-60s-44-17-60 0l-72 72c-33 32-75 48-118 48-43 0-86-16-119-48-34-33-51-76-52-120s15-88 47-121l128-128c5-5 11-11 18-16 38-28 83-38 127-32s84 29 112 67c14 19 41 23 60 9s23-41 9-60z",
    lock: "M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM768 427v-128c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38zM341 427v-128c0-47 19-90 50-121s74-50 121-50 90 19 121 50 50 74 50 121v128z",
    logIn: "M640 171h171c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-171c-24 0-43 19-43 43s19 43 43 43h171c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38h-171c-24 0-43 19-43 43s19 43 43 43zM537 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14s3-11 3-16c0-6-1-11-3-16-2-5-5-10-9-14l-213-213c-17-17-44-17-60 0s-17 44 0 60z",
    logOut: "M384 853h-171c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13h171c24 0 43-19 43-43s-19-43-43-43h-171c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h171c24 0 43-19 43-43s-19-43-43-43zM793 469h-409c-24 0-43 19-43 43s19 43 43 43h409l-141 141c-17 17-17 44 0 60s44 17 60 0l213-213c4-4 7-9 9-14 6-15 3-34-9-47l-213-213c-17-17-44-17-60 0s-17 44 0 60z",
    map: "M299 159v584l-213 122v-584zM725 865v-584l213-122v584zM663 976c3 2 7 3 11 4 1 0 3 1 4 1s3 0 4 0c-0 0-0 0-0 0s0 0 0 0c7 0 15-2 21-6l1-0 298-170c14-8 21-22 21-37v-683c0-24-19-43-43-43-8 0-15 2-21 6l-279 159-320-160c-4-2-7-3-11-4-1-0-3-1-4-1s-3-0-4-0c0 0 0 0 0 0s0 0-0 0c-7 0-15 2-21 6l-1 0-298 170c-14 8-21 22-22 37v683c0 24 19 43 43 43 8 0 15-2 21-6l279-159zM640 282v587l-256-128v-587z",
    mapPin: "M939 427c0-118-48-225-125-302s-184-125-302-125-225 48-302 125-125 184-125 302c0 24 2 48 6 72 12 66 38 128 72 184 117 196 325 334 325 334 14 9 33 10 47 0 0 0 208-138 325-334 33-56 60-118 72-184 4-23 6-47 6-72zM853 427c0 19-2 38-5 57-9 53-31 106-61 156-82 137-215 245-272 288-60-39-196-148-279-288-30-50-52-102-61-156-3-19-5-38-5-57 0-94 38-180 100-241s147-100 241-100 180 38 241 100 100 147 100 241zM683 427c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 427c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",
    maximize: "M341 85h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43zM939 341v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43zM683 939h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43zM85 683v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43z",
    messageCircle: "M939 491v-21c0-1-0-2-0-2-6-100-47-190-113-258-68-71-163-117-269-123-1-0-2-0-2-0h-21c-60-1-123 13-182 43-52 26-98 63-134 108-56 70-90 158-90 254-1 54 11 111 35 165l-76 227c-3 8-3 18 0 27 7 22 32 34 54 27l227-76c49 22 106 35 165 35 59-0 116-13 168-37 82-37 151-101 194-187 27-53 43-116 43-182zM853 491c0 52-12 101-34 142-34 68-89 119-153 148-41 19-87 29-133 29-52 0-101-12-142-34-11-6-23-6-33-3l-162 54 54-162c4-11 3-23-2-33-24-47-34-96-34-142 0-76 26-146 71-201 29-35 65-65 106-86 47-24 96-34 142-34h19c84 5 158 41 212 97 51 53 84 124 89 203z",
    mic: "M512 85c24 0 45 10 60 25s25 37 25 60v341c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60v-341c0-24 10-45 25-60s37-25 60-25zM512 0c-47 0-90 19-121 50s-50 74-50 121v341c0 47 19 90 50 121s74 50 121 50 90-19 121-50 50-74 50-121v-341c0-47-19-90-50-121s-74-50-121-50zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-88c77-10 146-45 199-97 62-62 100-147 100-241v-85c0-24-19-43-43-43s-43 19-43 43v85c0 71-29 135-75 181s-110 75-181 75-135-29-181-75-75-110-75-181v-85c0-24-19-43-43-43s-43 19-43 43v85c0 94 38 180 100 241 52 52 121 88 199 97v88h-128c-24 0-43 19-43 43s19 43 43 43z",
    micOff: "M534 594c-7 2-14 3-22 3-24-0-45-10-60-25-15-15-25-37-25-60v-25zM683 399v-228c0-47-19-90-50-121s-74-50-121-50c-43-0-83 16-113 43-27 24-47 57-54 94-5 23 10 46 33 50s46-10 50-33c4-19 14-35 27-47 15-13 34-21 56-21 24 0 45 10 61 25 15 16 25 37 25 60v228c0 24 19 43 43 43s43-19 43-43zM768 427v85c0 16-1 32-4 45-4 23 11 45 34 50s45-11 50-34c3-19 5-39 5-60v-85c0-24-19-43-43-43s-43 19-43 43zM341 1024h341c24 0 43-19 43-43s-19-43-43-43h-128v-86c62-8 119-31 168-69l229 229c17 17 44 17 60 0s17-44 0-60l-249-249c-2-3-4-7-7-9-3-3-6-5-9-7l-674-674c-17-17-44-17-60 0s-17 44 0 60l329 329v110c0 47 19 90 50 121s74 50 121 50c32-0 61-9 86-24l63 63c-41 30-89 46-137 48-4-1-8-2-13-2-4 0-9 1-13 2-60-3-120-27-167-73-49-48-75-111-77-175-0-5-0-10-0-10v-86c0-24-19-43-43-43s-43 19-43 43v85c0 6 0 13 0 13 3 85 37 169 102 234 55 54 125 86 196 95v86h-128c-24 0-43 19-43 43s19 43 43 43z",
    minimize: "M299 128v128c0 12-5 22-13 30s-18 13-30 13h-128c-24 0-43 19-43 43s19 43 43 43h128c35 0 67-14 90-38s38-55 38-90v-128c0-24-19-43-43-43s-43 19-43 43zM896 299h-128c-12 0-22-5-30-13s-13-18-13-30v-128c0-24-19-43-43-43s-43 19-43 43v128c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43zM725 896v-128c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v128c0 24 19 43 43 43s43-19 43-43zM128 725h128c12 0 22 5 30 13s13 18 13 30v128c0 24 19 43 43 43s43-19 43-43v-128c0-35-14-67-38-90s-55-38-90-38h-128c-24 0-43 19-43 43s19 43 43 43z",
    minus: "M213 555h597c24 0 43-19 43-43s-19-43-43-43h-597c-24 0-43 19-43 43s19 43 43 43z",
    moon: "M938 550c1-10-2-20-8-29-14-19-41-23-60-9-41 30-88 46-136 50-58 4-118-12-169-49-57-42-91-103-101-168s5-133 47-190c6-8 9-19 8-29-2-23-23-41-47-38-96 9-184 50-252 113-74 69-124 164-134 272-11 117 27 228 97 312s172 141 289 152 228-27 312-97 141-172 152-289zM835 626c-21 58-57 109-103 147-67 56-156 86-250 77s-175-55-231-122-86-156-77-250c8-87 48-163 107-218 33-31 73-55 117-71-19 54-25 111-16 166 13 86 59 168 135 224 67 50 147 71 225 66 32-2 64-9 94-20z",
    more: "M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM896 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM299 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",
    moreVertical: "M597 512c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 213c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60zM597 811c0-24-10-45-25-60s-37-25-60-25-45 10-60 25-25 37-25 60 10 45 25 60 37 25 60 25 45-10 60-25 25-37 25-60z",
    mousePointer: "M207 207l524 218-208 71c-12 4-22 14-27 27l-71 208zM555 615l225 225c17 17 44 17 60 0s17-44 0-60l-225-225 250-85c22-8 34-32 27-54-4-12-13-21-24-26l-724-302c-22-9-47 1-56 23-5 11-4 23 0 33l302 724c9 22 34 32 56 23 12-5 20-14 24-26z",
    move: "M469 188v281h-281l55-55c17-17 17-44 0-60s-44-17-60 0l-128 128c-8 8-13 18-13 30 0 6 1 11 3 16s5 10 9 14l128 128c17 17 44 17 60 0s17-44 0-60l-55-55h281v281l-55-55c-17-17-44-17-60 0s-17 44 0 60l128 128c4 4 9 7 14 9s11 3 16 3c6 0 11-1 16-3 5-2 10-5 14-9l128-128c17-17 17-44 0-60s-44-17-60 0l-55 55v-281h281l-55 55c-17 17-17 44 0 60s44 17 60 0l128-128c4-4 7-9 9-14 6-15 3-34-9-47l-128-128c-17-17-44-17-60 0s-17 44 0 60l55 55h-281v-281l55 55c17 17 44 17 60 0s17-44 0-60l-128-128c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-128 128c-17 17-17 44 0 60s44 17 60 0z",
    music: "M341 768c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM939 683v-555c0-2-0-5-1-7-4-23-26-39-49-35l-512 85c-20 3-36 21-36 42v407c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121v-519l427-71v356c-25-15-54-23-85-23-47 0-90 19-121 50s-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM853 683c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60z",
    paperclip: "M885 441l-392 392c-42 42-96 63-151 63s-109-21-151-63-63-96-63-151 21-109 63-151l392-392c25-25 58-38 91-38s66 13 91 38 38 58 38 91-13 66-38 91l-393 392c-8 8-19 13-30 13s-22-4-30-13-13-19-13-30 4-22 13-30l362-362c17-17 17-44 0-60s-44-17-60-0l-362 362c-25 25-38 58-38 91s13 66 38 91 58 38 91 38 66-13 91-38l393-392c42-42 63-96 63-151s-21-109-63-151-96-63-151-63-109 21-151 63l-392 392c-58 58-88 135-88 211s29 153 88 211 135 88 211 88 153-29 211-88l392-392c17-17 17-44 0-60s-44-17-60 0z",
    pause: "M256 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM299 213h85v597h-85zM597 128c-24 0-43 19-43 43v683c0 24 19 43 43 43h171c24 0 43-19 43-43v-683c0-24-19-43-43-43zM640 213h85v597h-85z",
    play: "M236 92c-7-4-15-7-23-7-24 0-43 19-43 43v768c-0 8 2 16 7 23 13 20 39 26 59 13l597-384c5-3 9-7 13-13 13-20 7-46-13-59zM256 206l476 306-476 306z",
    plus: "M213 555h256v256c0 24 19 43 43 43s43-19 43-43v-256h256c24 0 43-19 43-43s-19-43-43-43h-256v-256c0-24-19-43-43-43s-43 19-43 43v256h-256c-24 0-43 19-43 43s19 43 43 43z",
    refresh: "M190 398c31-89 96-157 175-194s172-45 261-14c51 18 94 46 127 80l121 113h-148c-24 0-43 19-43 43s19 43 43 43h256c0 0 0 0 1 0 6-0 11-1 16-3 5-2 10-5 14-10 1-1 1-1 2-2 3-4 6-8 7-12s3-9 3-14c0-1 0-1 0-2v-256c0-24-19-43-43-43s-43 19-43 43v157l-125-117c-42-43-97-79-160-101-111-39-228-30-326 17s-179 132-218 243c-8 22 4 47 26 54s47-4 54-26zM85 696l126 118c82 82 192 124 301 124s218-42 302-125c47-47 81-103 101-160 8-22-4-47-26-54s-47 4-54 26c-15 45-42 89-80 127-67 67-154 100-241 100s-175-33-242-101l-119-112h148c24 0 43-19 43-43s-19-43-43-43h-256c-0 0-0 0-1 0-6 0-11 1-16 3-5 2-10 5-14 10-1 1-1 1-2 2-3 4-6 8-7 12s-3 9-3 14c-0 1-0 1-0 2v256c0 24 19 43 43 43s43-19 43-43z",
    rewind: "M427 723l-272-211 272-211zM912 844c7 6 16 9 26 9 24 0 43-19 43-43v-597c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-6 8-9 17-9 26v-298c0-9-3-18-9-26-14-19-41-22-60-7l-384 299c-3 2-5 5-7 7-14 19-11 45 7 60l384 299c7 6 16 9 26 9 24 0 43-19 43-43v-298c0 13 6 25 16 33zM896 723l-272-211 272-211z",
    settings: "M683 512c0-47-19-90-50-121s-74-50-121-50-90 19-121 50-50 74-50 121 19 90 50 121 74 50 121 50 90-19 121-50 50-74 50-121zM597 512c0 24-10 45-25 60s-37 25-60 25-45-10-60-25-25-37-25-60 10-45 25-60 37-25 60-25 45 10 60 25 25 37 25 60zM867 657c2-4 5-8 8-11 5-4 11-6 17-6h4c35 0 67-14 90-38s38-55 38-90-14-67-38-90-55-38-90-38h-7c-5-0-9-1-13-3-5-3-10-7-12-13-0-1-0-3-0-4-1-2-2-5-2-7 1-14 3-19 7-23l3-3c25-25 37-58 37-91s-13-66-38-91c-25-25-58-37-91-37s-66 13-90 38l-2 2c-4 3-8 6-12 7-6 2-12 1-19-1-4-2-8-5-11-8-4-5-6-11-6-17v-4c0-35-14-67-38-90s-55-38-90-38-67 14-90 38-38 55-38 90v7c-0 5-1 9-3 13-3 5-7 10-13 12-1 0-3 0-4 0-2 1-5 2-7 2-14-1-19-3-23-7l-3-3c-25-25-58-37-91-37s-65 13-91 38c-25 25-37 58-37 91s13 66 38 90l2 2c3 4 6 8 7 12 2 6 1 12-1 19-0 1-1 1-1 2-2 5-5 9-8 12-5 4-11 7-16 7h-4c-35 0-67 14-90 38s-38 55-38 91 14 67 38 90 55 38 90 38h7c5 0 9 1 13 3 5 3 10 7 13 14 1 2 2 5 2 7-1 14-3 19-7 23l-3 3c-25 25-37 58-37 91s13 66 38 91c25 25 58 37 91 37s66-13 90-38l2-2c4-3 8-6 12-7 6-2 12-1 19 1 1 0 1 1 2 1 5 2 9 5 12 8 4 5 7 11 7 16v4c0 35 14 67 38 90s55 38 90 38 67-14 90-38 38-55 38-90v-7c0-5 1-9 3-13 3-5 7-10 14-13 2-1 5-2 7-2 14 1 19 3 23 7l3 3c25 25 58 37 91 37s66-13 91-38c25-25 37-58 37-91s-13-66-38-90l-2-2c-3-4-6-8-7-12-2-6-1-12 1-19zM785 397c-1-9-2-13-3-16v3c0 2 0 4 0 5 1 3 2 5 3 8 0 4 0 4 0 4 11 25 29 44 52 56 16 8 33 13 52 13h8c12 0 22 5 30 13s13 18 13 30-5 22-13 30-18 13-30 13h-4c-27 0-52 10-71 26-14 11-25 26-32 42-11 25-12 52-5 76 5 18 15 35 28 48l3 3c8 8 13 19 13 30s-4 22-12 30c-8 8-19 13-30 13s-22-4-30-12l-3-3c-20-19-44-30-70-32-19-2-38 1-55 9-25 11-44 29-55 51-8 16-13 33-13 52v8c0 12-5 22-13 30s-18 12-30 12-22-5-30-13-13-18-13-30v-4c-1-28-11-53-27-72-12-14-28-25-45-32-25-11-51-12-75-5-18 5-35 15-48 28l-3 3c-8 8-19 13-30 13s-22-4-30-12c-8-8-13-19-13-30s4-22 12-30l3-3c19-20 30-44 32-70 2-19-1-38-9-55-11-25-29-44-51-55-16-8-33-13-52-13l-8 0c-12 0-22-5-30-13s-13-18-13-30 5-22 13-30 18-13 30-13h4c28-1 53-11 72-27 14-12 25-28 32-45 11-25 12-51 5-75-5-18-15-35-28-48l-3-3c-8-8-13-19-13-30s4-22 12-30c8-8 19-13 30-13s22 4 30 12l3 3c20 19 44 30 70 32 16 1 32-1 47-6 4-1 8-2 11-3-1 0-3 0-4 0-9 1-13 2-16 3h3c2 0 4-0 5-0 3-1 5-2 8-3 4-0 4-0 4-0 25-11 44-29 56-52 8-16 13-33 13-52v-8c0-12 5-22 13-30s18-13 30-13 22 5 30 13 13 18 13 30v4c0 27 10 52 26 71 11 14 26 25 42 32 25 11 51 12 76 5 18-5 35-15 48-28l3-3c8-8 19-13 30-13s22 4 30 12c8 8 13 19 13 30s-4 22-12 30l-3 3c-19 20-30 44-32 70-1 16 1 32 6 47 1 4 2 8 3 11-0-1-0-3-0-4z",
    share: "M128 512v341c0 35 14 67 38 90s55 38 90 38h512c35 0 67-14 90-38s38-55 38-90v-341c0-24-19-43-43-43s-43 19-43 43v341c0 12-5 22-13 30s-18 13-30 13h-512c-12 0-22-5-30-13s-13-18-13-30v-341c0-24-19-43-43-43s-43 19-43 43zM469 188v452c0 24 19 43 43 43s43-19 43-43v-452l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-171 171c-17 17-17 44 0 60s44 17 60 0z",
    begin: "M784 887c7 6 17 9 27 9 24 0 43-19 43-43v-683c0-9-3-19-9-27-15-18-42-21-60-7l-427 341c-2 2-5 4-7 7-15 18-12 45 7 60zM768 765l-316-253 316-253zM256 811v-597c0-24-19-43-43-43s-43 19-43 43v597c0 24 19 43 43 43s43-19 43-43z",
    skipForward: "M240 137c-7-6-17-9-27-9-24 0-43 19-43 43v683c-0 9 3 19 9 27 15 18 42 21 60 7l427-341c2-2 5-4 7-7 15-18 12-45-7-60zM256 259l316 253-316 253zM768 213v597c0 24 19 43 43 43s43-19 43-43v-597c0-24-19-43-43-43s-43 19-43 43z",
    forbidden: "M981 512c0-130-53-247-137-332s-202-137-332-137-247 53-332 137-137 202-137 332 53 247 137 332 202 137 332 137 247-53 332-137 137-202 137-332zM812 752l-540-540c66-53 149-84 240-84 106 0 202 43 272 112s112 165 112 272c0 91-31 174-84 240zM212 272l540 540c-66 53-149 84-240 84-106 0-202-43-272-112s-112-165-112-272c0-91 31-174 84-240z",
    square: "M213 85c-35 0-67 14-90 38s-38 55-38 90v597c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-597c0-35-14-67-38-90s-55-38-90-38zM213 171h597c12 0 22 5 30 13s13 18 13 30v597c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-597c0-12 5-22 13-30s18-13 30-13z",
    star: "M550 66c-4-8-11-15-19-19-21-10-47-2-57 19l-122 247-273 40c-9 1-18 5-24 12-16 17-16 44 1 60l197 192-47 271c-2 9-0 18 4 27 11 21 37 29 58 18l244-128 244 128c8 4 17 6 27 4 23-4 39-26 35-49l-47-271 197-192c6-6 11-15 12-24 3-23-13-45-36-48l-273-40zM512 182l94 190c6 13 19 21 32 23l209 31-151 147c-10 10-15 24-12 38l36 208-187-98c-13-7-28-6-40 0l-187 98 36-208c2-14-3-28-12-38l-151-147 209-31c14-2 26-11 32-23z",
    sun: "M768 512c0-71-29-135-75-181s-110-75-181-75-135 29-181 75-75 110-75 181 29 135 75 181 110 75 181 75 135-29 181-75 75-110 75-181zM683 512c0 47-19 90-50 121s-74 50-121 50-90-19-121-50-50-74-50-121 19-90 50-121 74-50 121-50 90 19 121 50 50 74 50 121zM469 43v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM469 896v85c0 24 19 43 43 43s43-19 43-43v-85c0-24-19-43-43-43s-43 19-43 43zM150 210l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM753 814l61 61c17 17 44 17 60 0s17-44 0-60l-61-61c-17-17-44-17-60 0s-17 44 0 60zM43 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM896 555h85c24 0 43-19 43-43s-19-43-43-43h-85c-24 0-43 19-43 43s19 43 43 43zM210 874l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0zM814 271l61-61c17-17 17-44 0-60s-44-17-60 0l-61 61c-17 17-17 44 0 60s44 17 60 0z",
    tag: "M909 602c25-25 37-58 37-90 0-33-12-65-37-90l-367-367c-8-8-18-12-30-12h-427c-24 0-43 19-43 43v427c0 11 4 22 13 30l367 366c25 25 58 37 91 37s66-13 90-38zM848 542l-306 306c-8 8-19 13-30 13s-22-4-30-12l-354-354v-366h366l354 354c8 8 12 19 12 30 0 11-4 22-12 30zM299 341c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",
    terminal: "M201 755l256-256c17-17 17-44 0-60l-256-256c-17-17-44-17-60 0s-17 44 0 60l226 226-226 226c-17 17-17 44 0 60s44 17 60 0zM512 853h341c24 0 43-19 43-43s-19-43-43-43h-341c-24 0-43 19-43 43s19 43 43 43z",
    thumbsDown: "M469 640c0-24-19-43-43-43h-242c-3-0-7-0-7-0-12-2-21-8-28-17s-10-20-8-32l59-384c2-10 7-19 14-26 8-7 18-11 29-11h439v418l-154 346c-13-4-25-11-34-21-15-15-25-37-25-60zM384 683v128c0 47 19 90 50 121s74 50 121 50c17 0 32-10 39-25l171-384c3-6 4-12 4-17v-469c0-24-19-43-43-43h-481c-33-0-63 12-86 33-22 19-37 46-41 76l-59 384c-5 35 4 69 23 95s49 45 84 51c7 1 14 2 21 1zM725 128h114c15-0 29 5 39 14 9 8 16 19 18 32v290c-2 15-9 27-19 36-10 8-23 13-37 13l-115 0c-24 0-43 19-43 43s19 43 43 43h113c35 1 67-12 92-32 27-22 45-53 50-90 0-2 0-4 0-6v-299c0-2-0-4-0-6-5-34-22-64-46-86-26-23-60-37-96-36h-114c-24 0-43 19-43 43s19 43 43 43z",
    thumbsUp: "M555 384c0 24 19 43 43 43h242c3 0 7 0 7 0 12 2 21 8 28 17s10 20 8 32l-59 384c-2 10-7 19-14 26-8 7-18 11-29 11h-439v-418l154-346c13 4 25 11 34 21 15 15 25 37 25 60zM640 341v-128c0-47-19-90-50-121s-74-50-121-50c-17 0-32 10-39 25l-171 384c-3 6-4 12-4 17v469c0 24 19 43 43 43h481c33 0 63-12 86-33 22-19 37-46 41-76l59-384c5-35-4-69-23-95s-49-45-84-51c-7-1-14-2-21-1zM299 896h-128c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13h128c24 0 43-19 43-43s-19-43-43-43h-128c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h128c24 0 43-19 43-43s-19-43-43-43z",
    trash: "M768 299v555c0 12-5 22-13 30s-18 13-30 13h-427c-12 0-22-5-30-13s-13-18-13-30v-555zM725 213v-43c0-35-14-67-38-90s-55-38-90-38h-171c-35 0-67 14-90 38s-38 55-38 90v43h-171c-24 0-43 19-43 43s19 43 43 43h43v555c0 35 14 67 38 90s55 38 90 38h427c35 0 67-14 90-38s38-55 38-90v-555h43c24 0 43-19 43-43s-19-43-43-43zM384 213v-43c0-12 5-22 13-30s18-13 30-13h171c12 0 22 5 30 13s13 18 13 30v43z",
    unlock: "M213 512h597c12 0 22 5 30 13s13 18 13 30v299c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-299c0-12 5-22 13-30s18-13 30-13zM341 427v-128c-0-47 19-90 50-121 31-31 73-50 120-50 44 0 83 16 113 43 27 24 47 57 55 94 5 23 27 38 50 33s38-27 33-50c-12-56-41-105-82-141-45-40-105-64-170-64-71 0-135 29-181 75s-75 110-75 181v128h-43c-35 0-67 14-90 38s-38 55-38 90v299c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-299c0-35-14-67-38-90s-55-38-90-38z",
    upload: "M853 640v171c0 12-5 22-13 30s-18 13-30 13h-597c-12 0-22-5-30-13s-13-18-13-30v-171c0-24-19-43-43-43s-43 19-43 43v171c0 35 14 67 38 90s55 38 90 38h597c35 0 67-14 90-38s38-55 38-90v-171c0-24-19-43-43-43s-43 19-43 43zM469 231v409c0 24 19 43 43 43s43-19 43-43v-409l141 141c17 17 44 17 60 0s17-44 0-60l-213-213c-4-4-9-7-14-9-10-4-22-4-33 0-5 2-10 5-14 9l-213 213c-17 17-17 44 0 60s44 17 60 0z",
    uploadCloud: "M469 615v281c0 24 19 43 43 43s43-19 43-43v-281l98 98c17 17 44 17 60 0s17-44 0-60l-171-171c-4-4-9-7-14-9s-11-3-16-3c-11 0-22 4-30 13l-171 171c-17 17-17 44 0 60s44 17 60 0zM890 822c62-34 105-90 123-152s13-133-21-195c-29-53-74-92-126-114-31-13-64-20-98-20h-22c-31-88-91-158-167-203-85-50-188-67-291-41s-185 92-235 177-67 188-41 291c16 61 46 116 84 158 16 18 43 19 60 3s19-43 3-60c-29-33-53-75-65-123-21-80-7-160 32-226s103-117 183-138 160-7 226 32 117 103 138 183c5 19 22 32 41 32h53c23 0 45 5 66 13 35 14 65 40 84 76 23 41 26 88 14 130s-41 79-82 102c-21 11-28 37-17 58s37 28 58 17z",
    user: "M896 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM725 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM640 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90z",
    userMinus: "M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-256c-24 0-43 19-43 43s19 43 43 43h256c24 0 43-19 43-43s-19-43-43-43z",
    userPlus: "M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM981 427h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43z",
    userX: "M725 896v-85c0-59-24-112-62-151s-92-62-151-62h-299c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h299c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM576 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM491 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM951 311l-77 77-77-77c-17-17-44-17-60 0s-17 44 0 60l77 77-77 77c-17 17-17 44 0 60s44 17 60 0l77-77 77 77c17 17 44 17 60 0s17-44 0-60l-77-77 77-77c17-17 17-44 0-60s-44-17-60 0z",
    users: "M768 896v-85c0-59-24-112-62-151s-92-62-151-62h-341c-59 0-112 24-151 62s-62 92-62 151v85c0 24 19 43 43 43s43-19 43-43v-85c0-35 14-67 38-90s55-38 90-38h341c35 0 67 14 90 38s38 55 38 90v85c0 24 19 43 43 43s43-19 43-43zM597 299c0-59-24-112-62-151s-92-62-151-62-112 24-151 62-62 92-62 151 24 112 62 151 92 62 151 62 112-24 151-62 62-92 62-151zM512 299c0 35-14 67-38 90s-55 38-90 38-67-14-90-38-38-55-38-90 14-67 38-90 55-38 90-38 67 14 90 38 38 55 38 90zM1024 896v-85c-0-53-19-102-52-139-28-32-65-56-108-67-23-6-46 8-52 30s8 46 30 52c26 7 48 21 65 41 19 22 31 51 31 83v85c0 24 19 43 43 43s43-19 43-43zM672 175c34 9 62 31 78 59s23 63 14 97c-8 29-25 54-47 70-13 10-29 17-45 22-23 6-36 29-30 52s29 36 52 30c27-7 53-19 75-36 38-28 66-69 79-118 15-57 5-115-23-162s-74-83-131-98c-23-6-46 8-52 31s8 46 31 52z",
    video: "M939 382v261l-183-130zM128 171c-35 0-67 14-90 38s-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38s38-55 38-90v-130l231 165c19 14 46 9 60-10 5-8 8-16 8-25v-427c0-24-19-43-43-43-9 0-18 3-25 8l-231 165v-130c0-35-14-67-38-90s-55-38-90-38zM128 256h469c12 0 22 5 30 13s13 18 13 30v427c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13z",
    videoOff: "M455 256h143c12 0 22 5 30 13s13 18 13 30v143c0 12 5 22 13 30l43 43c15 15 38 17 55 4l188-136v343c0 24 19 43 43 43s43-19 43-43v-427c0-9-3-17-8-25-14-19-40-23-60-10l-227 164-4-4v-125c0-35-14-67-38-90s-55-38-90-38h-143c-24 0-43 19-43 43s19 43 43 43zM196 256l444 444v25c0 12-5 22-13 30s-18 13-30 13h-469c-12 0-22-5-30-13s-13-18-13-30v-427c0-12 5-22 13-30s18-13 30-13zM13 73l99 99c-29 4-54 17-74 36-23 23-38 55-38 90v427c0 35 14 67 38 90s55 38 90 38h469c35 0 67-14 90-38 11-11 21-25 27-40l236 236c17 17 44 17 60 0s17-44 0-60l-939-939c-17-17-44-17-60 0s-17 44 0 60z",
    volume: "M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9z",
    volumeLow: "M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",
    volumeHigh: "M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM783 241c75 75 112 173 112 272 0 98-37 196-112 271-17 17-17 44 0 60s44 17 60 0c92-92 137-212 137-332 0-120-46-240-137-332-17-17-44-17-60 0s-17 44 0 60zM633 391c33 33 50 77 50 121s-17 87-50 121c-17 17-17 44 0 60s44 17 60 0c50-50 75-116 75-181s-25-131-75-181c-17-17-44-17-60 0s-17 44 0 60z",
    volumeOff: "M427 302v420l-144-115c-7-6-17-9-27-9h-128v-171h128c9 0 19-3 27-9zM443 180l-202 161h-156c-24 0-43 19-43 43v256c0 24 19 43 43 43h156l202 161c18 15 45 12 60-7 6-8 9-17 9-27v-597c0-24-19-43-43-43-10 0-19 4-27 9zM695 414l98 98-98 98c-17 17-17 44 0 60s44 17 60 0l98-98 98 98c17 17 44 17 60 0s17-44 0-60l-98-98 98-98c17-17 17-44 0-60s-44-17-60 0l-98 98-98-98c-17-17-44-17-60 0s-17 44 0 60z",
    wifi: "M241 568c84-70 186-102 287-98 92 3 184 36 259 98 18 15 45 12 60-6s12-45-6-60c-90-74-199-114-310-118-121-4-245 34-345 118-18 15-21 42-5 60s42 21 60 5zM89 416c125-110 282-163 437-159 147 3 293 57 410 160 18 16 45 14 60-4s14-45-4-60c-133-116-298-177-464-181-176-4-353 56-495 181-18 16-19 43-4 60s43 19 60 4zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 19 14 46 9 59-10s9-46-10-59c-45-31-97-50-150-54-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",
    wifiOff: "M695 510c34 16 64 37 88 57 18 15 45 13 60-4s13-45-4-60c-30-26-67-50-106-70-21-10-47-2-57 20s-2 47 20 57zM460 258c172-14 333 41 456 142 6 5 12 10 18 16 18 16 45 14 60-4s14-45-4-60c-7-6-14-12-21-18-140-114-323-177-517-161-23 2-41 22-39 46s22 41 46 39zM389 722c42-30 92-42 140-39 38 3 75 16 108 39 10 7 22 9 33 7l282 282c17 17 44 17 60 0s17-44 0-60l-544-544c-2-3-5-5-7-7l-387-387c-17-17-44-17-60 0s-17 44 0 60l174 174c-54 27-106 62-155 105-18 16-19 43-4 60s43 19 60 4c51-45 107-80 162-105l99 99c-58 19-114 50-164 92-18 15-20 42-5 60s42 20 60 5c54-45 116-75 179-88l119 119c-1-0-2-0-3-0-67-5-137 12-196 54-19 14-24 40-10 59s40 24 59 10zM512 896c24 0 43-19 43-43s-19-43-43-43-43 19-43 43 19 43 43 43z",
    x: "M226 286l226 226-226 226c-17 17-17 44 0 60s44 17 60 0l226-226 226 226c17 17 44 17 60 0s17-44 0-60l-226-226 226-226c17-17 17-44 0-60s-44-17-60 0l-226 226-226-226c-17-17-44-17-60 0s-17 44 0 60z",
    youtube: "M920 283c12 65 19 141 19 219 1 65-5 139-19 214-2 9-6 17-12 25-10 14-24 24-40 29-26 7-92 12-165 15-95 4-191 4-191 4s-95 0-191-4c-73-3-140-8-165-14-9-2-17-6-24-11-13-9-23-23-29-39-12-65-19-140-18-218-1-66 5-140 19-216 2-9 6-17 12-25 10-14 24-24 40-29 26-7 92-12 165-15 95-4 191-4 191-4s95 0 191 3c73 3 140 7 165 13 9 3 18 7 26 13 13 10 23 24 27 41zM1003 264c-9-37-31-68-59-89-16-12-34-21-53-27-38-9-115-14-185-16-97-3-194-3-194-3s-97 0-194 4c-70 3-147 7-184 17-37 11-67 33-88 62-12 16-20 35-25 54-0 1-0 2-1 3-15 81-21 162-20 234-1 82 7 163 20 235 0 1 1 3 1 4 10 37 33 67 62 87 15 11 32 19 50 24 38 10 115 15 185 17 97 4 194 4 194 4s97 0 194-4c70-3 147-7 184-17 37-11 67-33 88-62 12-16 20-35 25-54 0-1 1-2 1-3 15-80 21-161 20-232 1-82-7-164-20-235-0-1-0-2-1-2zM459 568v-132l116 66zM437 678l245-140c20-12 28-38 16-58-4-7-10-12-16-16l-245-140c-20-12-47-4-58 16-4 7-6 14-6 21v279c0 24 19 43 43 43 8 0 15-2 21-6z",
    zoomIn: "M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h85v85c0 24 19 43 43 43s43-19 43-43v-85h85c24 0 43-19 43-43s-19-43-43-43h-85v-85c0-24-19-43-43-43s-43 19-43 43v85h-85c-24 0-43 19-43 43s19 43 43 43z",
    zoomOut: "M684 677c-1 1-3 2-4 4s-3 3-4 4c-54 52-127 84-207 84-82 0-157-33-211-87s-87-129-87-211 33-157 87-211 129-87 211-87 157 33 211 87 87 129 87 211c0 80-32 153-84 207zM926 866l-157-157c53-66 84-149 84-240 0-106-43-202-112-272s-166-112-272-112-202 43-272 112-112 166-112 272 43 202 112 272 166 112 272 112c91 0 174-31 240-84l157 157c17 17 44 17 60 0s17-44 0-60zM341 512h256c24 0 43-19 43-43s-19-43-43-43h-256c-24 0-43 19-43 43s19 43 43 43z"
};


const { svg: $fef058b85aa29b7a$var$svg, path: $fef058b85aa29b7a$var$path } = (0, $hgUW1$svgElements);
function $fef058b85aa29b7a$var$getIconSpec(name) {
    let data = (0, $2d5b9d9e4f25abad$export$2e2bcd8739ae039)[name];
    if (data === undefined) {
        console.warn(`icon ${name} not found`);
        data = (0, $2d5b9d9e4f25abad$export$2e2bcd8739ae039).square;
    }
    const p = Array.isArray(data) ? data : typeof data === "string" ? [
        data
    ] : data.p;
    const { w: w, h: h } = Object.assign({
        w: 1024,
        h: 1024
    }, data);
    return {
        p: p,
        w: w,
        h: h
    };
}
const $fef058b85aa29b7a$export$c07bb2d77ca8d15 = (name, icon)=>{
    (0, $2d5b9d9e4f25abad$export$2e2bcd8739ae039)[name] = icon;
};
const $fef058b85aa29b7a$export$c12d014da9da5ff8 = (svg, fill, stroke, strokeWidth)=>{
    if (fill !== undefined) for (const path of [
        ...svg.querySelectorAll("path")
    ]){
        path.setAttribute("fill", fill);
        if (stroke !== undefined) path.setAttribute("stroke", stroke);
        if (strokeWidth !== undefined) path.setAttribute("stroke-width", String(strokeWidth));
    }
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const text = encodeURIComponent(svg.outerHTML);
    return `url(data:image/svg+xml;charset=UTF-8,${text})`;
};
const $fef058b85aa29b7a$export$df03f54e09e486fa = new Proxy((0, $2d5b9d9e4f25abad$export$2e2bcd8739ae039), {
    get (target, prop) {
        const iconSpec = $fef058b85aa29b7a$var$getIconSpec(prop);
        return iconSpec === undefined ? undefined : (...parts)=>{
            const { w: w, h: h } = Object.assign({
                w: 1024,
                h: 1024
            }, iconSpec);
            return $fef058b85aa29b7a$var$svg({
                viewBox: `0 0 ${w} ${h}`,
                class: "icon-" + prop.replace(/([a-z])([A-Z])/g, (_, a, b)=>a + "-" + b.toLocaleLowerCase())
            }, ...parts, ...iconSpec.p.map((d)=>$fef058b85aa29b7a$var$path({
                    d: d
                })));
        };
    }
});
class $fef058b85aa29b7a$export$dbcb8210e8a983ed extends (0, $hgUW1$Component) {
    icon = "";
    color = "";
    constructor(){
        super();
        this.initAttributes("icon", "color");
    }
    render() {
        this.textContent = "";
        this.append(this.color !== "" ? $fef058b85aa29b7a$export$df03f54e09e486fa[this.icon]({
            style: {
                fill: this.color
            }
        }) : $fef058b85aa29b7a$export$df03f54e09e486fa[this.icon]());
    }
}
const $fef058b85aa29b7a$export$8c90725d55a8eef = $fef058b85aa29b7a$export$dbcb8210e8a983ed.elementCreator({
    tag: "xin-icon"
});


class $ef1971ff775ba547$export$1bc633d0db17d4e1 extends (0, $hgUW1$Component) {
    babylonReady;
    BABYLON;
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            display: "block",
            position: "relative"
        },
        ":host canvas": {
            width: "100%",
            height: "100%"
        },
        ":host .babylonVRicon": {
            height: 50,
            width: 80,
            backgroundColor: "transparent",
            filter: "drop-shadow(0 0 4px #000c)",
            backgroundImage: (0, $fef058b85aa29b7a$export$c12d014da9da5ff8)((0, $fef058b85aa29b7a$export$df03f54e09e486fa).xr(), "#fffd"),
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            border: "none",
            borderRadius: 5,
            borderStyle: "none",
            outline: "none",
            transition: "transform 0.125s ease-out"
        },
        ":host .babylonVRicon:hover": {
            transform: "scale(1.1)"
        }
    });
    content = (0, $hgUW1$elements).canvas({
        part: "canvas"
    });
    constructor(){
        super();
        this.babylonReady = (async ()=>{
            const { BABYLON: BABYLON } = await (0, $5c31145f3e970423$export$c6e082819e9a0330)("https://cdn.babylonjs.com/babylon.js", "BABYLON");
            return BABYLON;
        })();
    }
    scene;
    engine;
    sceneCreated = ()=>{};
    update = ()=>{};
    _update = ()=>{
        if (this.scene) {
            if (this.update !== undefined) this.update(this, this.BABYLON);
            if (this.scene.activeCamera !== undefined) this.scene.render();
        }
    };
    onResize() {
        if (this.engine) this.engine.resize();
    }
    loadScene = async (path, file, processCallback)=>{
        const { BABYLON: BABYLON } = await (0, $5c31145f3e970423$export$c6e082819e9a0330)("https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js", "BABYLON");
        BABYLON.SceneLoader.Append(path, file, this.scene, processCallback);
    };
    loadUI = async (options)=>{
        const { BABYLON: BABYLON } = await (0, $5c31145f3e970423$export$c6e082819e9a0330)("https://cdn.babylonjs.com/gui/babylon.gui.min.js", "BABYLON");
        const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("GUI", true, this.scene);
        const { snippetId: snippetId, jsonUrl: jsonUrl, data: data, size: size } = options;
        if (size) {
            advancedTexture.idealWidth = size;
            advancedTexture.renderAtIdealSize = true;
        }
        // edit or create your own snippet here
        // https://gui.babylonjs.com/
        let gui;
        if (snippetId) gui = await advancedTexture.parseFromSnippetAsync(snippetId);
        else if (jsonUrl) gui = await advancedTexture.parseFromURLAsync(jsonUrl);
        else if (data) gui = advancedTexture.parseContent(data);
        else return null;
        const root = advancedTexture.getChildren()[0];
        const widgets = root.children.reduce((map, widget)=>{
            map[widget.name] = widget;
            return map;
        }, {});
        return {
            advancedTexture: advancedTexture,
            gui: gui,
            root: root,
            widgets: widgets
        };
    };
    connectedCallback() {
        super.connectedCallback();
        const { canvas: canvas } = this.parts;
        this.babylonReady.then(async (BABYLON)=>{
            this.BABYLON = BABYLON;
            this.engine = new BABYLON.Engine(canvas, true);
            this.scene = new BABYLON.Scene(this.engine);
            if (this.sceneCreated) await this.sceneCreated(this, BABYLON);
            if (this.scene.activeCamera === undefined) {
                const camera = new BABYLON.ArcRotateCamera("default-camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
                camera.attachControl(this.parts.canvas, true);
            }
            this.engine.runRenderLoop(this._update);
        });
    }
}
const $ef1971ff775ba547$export$d0bb57305ce055c9 = $ef1971ff775ba547$export$1bc633d0db17d4e1.elementCreator({
    tag: "xin-3d"
});


var $59f50bee37676c09$exports = {};

$parcel$export($59f50bee37676c09$exports, "BodymovinPlayer", () => $59f50bee37676c09$export$c74d6d817c60b9e6);
$parcel$export($59f50bee37676c09$exports, "bodymovinPlayer", () => $59f50bee37676c09$export$d75ad8f79fe096cb);
/*!
# lottie

A [lottie](https://airbnb.io/lottie/#/web) (a.k.a. **bodymovin**) player.

It's designed to work like an `<img>` element (just set its `src` attribute).

```js
const { xinProxy } = xinjs
const { icons, popFloat } = xinjsui
const { h4, label, input, select, option, span } = xinjs.elements

const rocket = preview.querySelector('xin-lottie')
setTimeout(
  () => {
 preview.append(
   popFloat({
     content: [
       { class: 'panel', drag: true },
       h4('Player Controls'),
       label(
         { class: 'no-drag' },
         'speed',
         input({ type: 'range', min: -1, max: 1, step: 0.1, value: 0, onInput(event) {
           const speed = Math.pow(5, Number(event.target.value))
           rocket.animation.setSpeed(speed)
           event.target.nextSibling.textContent = (speed * 100).toFixed(0) + '%'
         } }),
         span('100%', {style: { textAlign: 'right', width: '40px'}})
       ),
       label(
         { class: 'no-drag' },
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
     ],
     target: rocket,
     position: 'w'
   })
 )
  },
  500
)
```
```html
<xin-lottie
  style="height: 100%; max-width: 100%"
  src="https://raw.githubusercontent.com/tonioloewald/xinjs-ui/main/demo/88140-rocket-livetrade.json"
></xin-lottie>
<div class="caption">
  Animation by <a target="_blank" href="https://lottiefiles.com/dvskjbicfc">chiến lê hồng</a>
</div>
```
```css
.preview {
  padding: var(--spacing);
  text-align: center;
}

.preview .panel {
  padding: 10px;
  border-radius: 5px;
  gap: 5px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.preview .caption {
  position: absolute;
  right: 5px;
  bottom: 5px;
}

.preview h4 {
  margin: 0;
  text-align: center;
  background: var(--brand-color);
  color: white;
  padding: 5px;
  margin: -10px -10px 0 -10px;
  cursor: move;
}
```

You can also directly set its `json` property to the content of a `lottie.json` file.

And of course just access the element's `animation` property to [use the bodymovin API](https://airbnb.io/lottie/#/web).

Also see the [documentation for advanced interactions](https://lottiefiles.github.io/lottie-docs/advanced_interactions/)
*/ 

class $59f50bee37676c09$export$c74d6d817c60b9e6 extends (0, $hgUW1$Component) {
    content = null;
    src = "";
    json = "";
    config = {
        renderer: "svg",
        loop: true,
        autoplay: true
    };
    static bodymovinAvailable;
    animation;
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            width: 400,
            height: 400,
            display: "inline-block"
        }
    });
    _loading = false;
    get loading() {
        return this._loading;
    }
    constructor(){
        super();
        this.initAttributes("src", "json");
        if ($59f50bee37676c09$export$c74d6d817c60b9e6.bodymovinAvailable === undefined) $59f50bee37676c09$export$c74d6d817c60b9e6.bodymovinAvailable = (0, $5c31145f3e970423$export$c6e082819e9a0330)("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js", "bodymovin");
    }
    doneLoading = ()=>{
        this._loading = false;
    };
    load = ({ bodymovin: bodymovin })=>{
        this._loading = true;
        this.config.container = this.shadowRoot !== null ? this.shadowRoot : undefined;
        if (this.json !== "") {
            this.config.animationData = this.json;
            delete this.config.path;
        } else if (this.src !== "") {
            delete this.config.animationData;
            this.config.path = this.src;
        } else console.log("%c<xin-lottie>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.", "color: #44f; background: #fff; padding: 0 5px", "color: default", "color: #44f; background: #fff; padding: 0 5px", "color: default", "color: #44f; background: #fff; padding: 0 5px", "color: default");
        if (this.animation) {
            this.animation.destroy();
            const root = this.shadowRoot;
            if (root !== null) root.querySelector("svg")?.remove();
        }
        this.animation = bodymovin.loadAnimation(this.config);
        this.animation.addEventListener("DOMLoaded", this.doneLoading);
    };
    render() {
        super.render();
        $59f50bee37676c09$export$c74d6d817c60b9e6.bodymovinAvailable.then(this.load).catch((e)=>{
            console.error(e);
        });
    }
}
const $59f50bee37676c09$export$d75ad8f79fe096cb = $59f50bee37676c09$export$c74d6d817c60b9e6.elementCreator({
    tag: "xin-lottie"
});


var $8a70bd76f9b7e656$exports = {};

$parcel$export($8a70bd76f9b7e656$exports, "CodeEditor", () => $8a70bd76f9b7e656$export$b7127187684f7150);
$parcel$export($8a70bd76f9b7e656$exports, "codeEditor", () => $8a70bd76f9b7e656$export$d89b6f4d34274146);
/*!
# code

An [ACE Editor](https://ace.c9.io/) wrapper.

Sometimes, it's nice to be able to just toss a code-editor in a web-page.

`<xin-code>`'s `value` is the code it contains. Its `mode` attribute sets the language, and you can further configure
the ACE editor instance via its `options` property.

```html
<xin-code style="width: 100%; height: 100%" mode="css">
body {
  box-sizing: border-box;
}
</xin-code>
```
*/ 

const $8a70bd76f9b7e656$var$ACE_BASE_URL = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/";
const $8a70bd76f9b7e656$var$DEFAULT_THEME = "ace/theme/tomorrow";
const $8a70bd76f9b7e656$var$makeCodeEditor = async (codeElement, mode = "html", options = {}, theme = $8a70bd76f9b7e656$var$DEFAULT_THEME)=>{
    const { ace: ace } = await (0, $5c31145f3e970423$export$c6e082819e9a0330)(`${$8a70bd76f9b7e656$var$ACE_BASE_URL}ace.min.js`);
    ace.config.set("basePath", $8a70bd76f9b7e656$var$ACE_BASE_URL);
    const editor = ace.edit(codeElement, {
        mode: `ace/mode/${mode}`,
        tabSize: 2,
        useSoftTabs: true,
        useWorker: false,
        ...options
    });
    editor.setTheme(theme);
    return editor;
};
class $8a70bd76f9b7e656$export$b7127187684f7150 extends (0, $hgUW1$Component) {
    source = "";
    get value() {
        return this.editor === undefined ? this.source : this.editor.getValue();
    }
    set value(text) {
        if (this.editor === undefined) this.source = text;
        else {
            this.editor.setValue(text);
            this.editor.clearSelection();
            this.editor.session.getUndoManager().reset();
        }
    }
    mode = "javascript";
    disabled = false;
    role = "code editor";
    get editor() {
        return this._editor;
    }
    _editor;
    _editorPromise;
    options = {};
    theme = $8a70bd76f9b7e656$var$DEFAULT_THEME;
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            display: "block",
            position: "relative"
        }
    });
    constructor(){
        super();
        this.initAttributes("mode", "theme", "disabled");
    }
    onResize() {
        if (this.editor !== undefined) this.editor.resize(true);
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.source === "") this.value = this.textContent !== null ? this.textContent.trim() : "";
        if (this._editorPromise === undefined) {
            this._editorPromise = $8a70bd76f9b7e656$var$makeCodeEditor(this, this.mode, this.options, this.theme);
            this._editorPromise.then((editor)=>{
                this._editor = editor;
                editor.setValue(this.source, 1);
                editor.clearSelection();
                editor.session.getUndoManager().reset();
            });
        }
        this.addEventListener("change", this.updateValue);
    }
    render() {
        super.render();
        if (this._editorPromise !== undefined) this._editorPromise.then((editor)=>editor.setReadOnly(this.disabled));
    }
}
const $8a70bd76f9b7e656$export$d89b6f4d34274146 = $8a70bd76f9b7e656$export$b7127187684f7150.elementCreator({
    tag: "xin-code"
});


var $e6e19030d0c18d6f$exports = {};

$parcel$export($e6e19030d0c18d6f$exports, "DataTable", () => $e6e19030d0c18d6f$export$df30df7ec97b32b5);
$parcel$export($e6e19030d0c18d6f$exports, "dataTable", () => $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0);
/*!
# table

A virtual data-table, configurable via a `columns` array (which will automatically be generated if not provided),
that displays gigantic tables with fixed headers (and live column-resizing) using a minimum of resources and cpu.

```js
const { dataTable } = xinjsui
const { input } = xinjs.elements

const emojiRequest = await fetch('https://raw.githubusercontent.com/tonioloewald/emoji-metadata/master/emoji-metadata.json')
const emojiData = await emojiRequest.json()

const columns = [
  {
    name: "emoji",
    prop: "chars",
    align: "center",
    width: 80
  },
  {
    prop: "name",
    width: 300,
    // custom cell using xinjs bindings to make the field editable
    dataCell() {
      return input({
        class: 'td',
        bindValue: '^.name',
        title: 'name',
        onMouseup: (event) => { event.stopPropagation() },
        onTouchend: (event) => { event.stopPropagation() },
      })
    },
  },
  {
    prop: "category",
    width: 150
  },
  {
    prop: "subcategory",
    width: 150
  },
]

preview.append(dataTable({ multiple: true, array: emojiData, columns }))
```
```css
.preview input.td {
  margin: 0;
  border-radius: 0;
  box-shadow: none !important;
  background: #fff4;
}

.preview xin-table {
  height: 100%;
}
```

> In the preceding example, the `name` column is *editable* (and *bound*, try editing something and scrolling
> it out of view and back) and `multiple` select is enabled. In the console, you can try `$('xin-table').visibleRows`
> and $('xin-table').selectedRows`.

You can set the `<xin-table>`'s `array`, `columns`, and `filter` properties directly, or set its `value` to:

```
{
  array: any[],
  columns: ColumnOptions[] | null,
  filter?: ArrayFilter
}
```

## selection

`<xin-table>` supports `select` and `multiple` boolean properties allowing rows to be selectable. Selected rows will
be given the `[aria-selected]` attribute, so style them as you wish.

`multiple` select supports shift-clicking and command/meta-clicking.

`<xin-table>` provides an `selectionChanged(visibleSelectedRows: any[]): void` callback property allowing you to respond to changes
in the selection, and also `selectedRows` and `visibleSelectedRows` properties.

The following methods are also provided:

- `<xin-table>.selectRow(row: any, select = true)` (de)selects specified row
- `<xin-table>.selectRows(rows?: any[], select = true)` (de)selects specified rows
- `<xin-table>.deSelect(rows?: any[])` deselects all or specified rows.

These are rather fine-grained but they're used internally by the selection code so they may as well be documented.

## rowHeight

This property dictates the height of each row. It defaults to `30` (px).

If you set the `<xin-table>`'s `rowHeight` to `0` it will render all its elements (i.e. not be virtual). This is
useful for smaller tables, or tables with variable row-heights.
*/ 

/*!
# trackDrag

Sometimes you want to track a mouse-drag or touch-drag operation without messing around.
This is how the resizeable columns in `<xin-table>` work.

Just call `trackDrag(event, (dx, dy, event) => { ... })` and you'll get updates on corresponding events until
you return `true` from the event-handler (or, in the case of `touch` events, the last `touch` ends).
For mouse events, a "tracker" element is thrown up in front of everything for the event.

```html
<p>
  Try dragging the squares…<br>
  (You can drag them separately with multi-touch!)
</p>
<div class="draggable" style="top: 20px; left: 40px; background: #f008"></div>
<div class="draggable" style="left: 40%; bottom: 30%; background: #0f08"></div>
<div class="draggable" style="bottom: 30px; right: 10px; background: #00f8"></div>
```
```css
.preview {
  touch-action: none;
}

.draggable {
  content: ' ';
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: move;
}

.preview p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```
```js
const { trackDrag } = xinjsui

function dragItem(event) {
  const draggable = event.target
  if (draggable.classList.contains('draggable')) {
    const x = draggable.offsetLeft
    const y = draggable.offsetTop
    trackDrag(event, (dx, dy, event) => {
      draggable.style.left = (x + dx) + 'px'
      draggable.style.top = (y + dy) + 'px'
      draggable.style.bottom = 'auto'
      draggable.style.right = 'auto'
      return event.type === 'mouseup'
    })
  }
}

preview.addEventListener('mousedown', dragItem )
preview.addEventListener('touchstart', dragItem, { passive: true } )
```

For `touch` events, `dx` and `dy` are based on tracking `event.changedTouches[0]` which
is almost certainly what you want.

To handle multi-touch gestures you will need to track the touches yourself.

## bringToFront

`bringToFront(element: HTMLElement, selector = 'body *')`  gives the element the highest
`z-index` of any element matching the selector (which is passed to findHighestZ).

## findHighestZ

`findHighestZ(selector = 'body *'): number` returns the the highest `z-index` of any element
matching `selector`.
*/ const $5265d118b5240170$var$TRACKER = (0, $hgUW1$elements).div({
    style: {
        content: " ",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
});
const $5265d118b5240170$var$PASSIVE = {
    passive: true
};
const $5265d118b5240170$export$c947e3cd16175f27 = (event, callback, cursor = "move")=>{
    const isTouchEvent = event.type.startsWith("touch");
    if (!isTouchEvent) {
        const origX = event.clientX;
        const origY = event.clientY;
        $5265d118b5240170$var$TRACKER.style.cursor = cursor;
        $5265d118b5240170$export$1937b0002823d405($5265d118b5240170$var$TRACKER);
        document.body.append($5265d118b5240170$var$TRACKER);
        const wrappedCallback = (event)=>{
            const dx = event.clientX - origX;
            const dy = event.clientY - origY;
            if (callback(dx, dy, event) === true) {
                $5265d118b5240170$var$TRACKER.removeEventListener("mousemove", wrappedCallback);
                $5265d118b5240170$var$TRACKER.removeEventListener("mouseup", wrappedCallback);
                $5265d118b5240170$var$TRACKER.remove();
            }
        };
        $5265d118b5240170$var$TRACKER.addEventListener("mousemove", wrappedCallback, $5265d118b5240170$var$PASSIVE);
        $5265d118b5240170$var$TRACKER.addEventListener("mouseup", wrappedCallback, $5265d118b5240170$var$PASSIVE);
    } else if (event instanceof TouchEvent) {
        const touch = event.changedTouches[0];
        const touchId = touch.identifier;
        const origX = touch.clientX;
        const origY = touch.clientY;
        const target = event.target;
        let dx = 0;
        let dy = 0;
        const wrappedCallback = (event)=>{
            const touch = [
                ...event.touches
            ].find((touch)=>touch.identifier === touchId);
            if (touch !== undefined) {
                dx = touch.clientX - origX;
                dy = touch.clientY - origY;
            }
            if (event.type === "touchmove") {
                event.stopPropagation();
                event.preventDefault();
            }
            if (callback(dx, dy, event) === true || touch === undefined) {
                target.removeEventListener("touchmove", wrappedCallback);
                target.removeEventListener("touchend", wrappedCallback);
                target.removeEventListener("touchcancel", wrappedCallback);
            }
        };
        target.addEventListener("touchmove", wrappedCallback);
        target.addEventListener("touchend", wrappedCallback, $5265d118b5240170$var$PASSIVE);
        target.addEventListener("touchcancel", wrappedCallback, $5265d118b5240170$var$PASSIVE);
    }
};
const $5265d118b5240170$export$f3caf27c1d0ebf0c = (selector = "body *")=>[
        ...document.querySelectorAll(selector)
    ].map((elt)=>parseFloat(getComputedStyle(elt).zIndex)).reduce((z, highest)=>isNaN(z) || Number(z) < highest ? highest : Number(z), 0);
const $5265d118b5240170$export$1937b0002823d405 = (element, selector = "body *")=>{
    element.style.zIndex = String($5265d118b5240170$export$f3caf27c1d0ebf0c(selector) + 1);
};


function $e6e19030d0c18d6f$var$defaultWidth(array, prop, charWidth) {
    const example = array.find((item)=>item[prop] !== undefined && item[prop] !== null);
    if (example !== undefined) {
        const value = example[prop];
        switch(typeof value){
            case "string":
                if (value.match(/^\d+(\.\d+)?$/)) return 6 * charWidth;
                else if (value.includes(" ")) return 20 * charWidth;
                else return 12 * charWidth;
            case "number":
                return 6 * charWidth;
            case "boolean":
                return 5 * charWidth;
            case "object":
                return false;
            default:
                return 8 * charWidth;
        }
    }
    return false;
}
const { div: $e6e19030d0c18d6f$var$div, span: $e6e19030d0c18d6f$var$span, template: $e6e19030d0c18d6f$var$template } = (0, $hgUW1$elements);
const $e6e19030d0c18d6f$var$passThru = (array)=>array;
class $e6e19030d0c18d6f$export$df30df7ec97b32b5 extends (0, $hgUW1$Component) {
    select = false;
    multiple = false;
    selectionChanged = ()=>{};
    selectedKey = Symbol("selected");
    selectBinding = (elt, obj)=>{
        if (obj[this.selectedKey]) elt.setAttribute("aria-selected", "");
        else elt.removeAttribute("aria-selected");
    };
    maxVisibleRows = 10000;
    get value() {
        return {
            array: this.array,
            filter: this.filter,
            columns: this.columns
        };
    }
    set value(data) {
        const { array: array, columns: columns, filter: filter } = (0, $hgUW1$xinValue)(data);
        if (this._array !== array || this._columns !== columns || this._filter !== filter) this.queueRender();
        this._array = array || [];
        this._columns = columns || null;
        this._filter = filter || $e6e19030d0c18d6f$var$passThru;
    }
    _array = [];
    _columns = null;
    _filter = $e6e19030d0c18d6f$var$passThru;
    charWidth = 15;
    rowHeight = 30;
    minColumnWidth = 30;
    get virtual() {
        return this.rowHeight > 0 ? {
            height: this.rowHeight
        } : undefined;
    }
    constructor(){
        super();
        this.initAttributes("rowHeight", "charWidth", "minColumnWidth", "select", "multiple");
    }
    get array() {
        return this._array;
    }
    set array(newArray) {
        this._array = (0, $hgUW1$xinValue)(newArray);
        this.queueRender();
    }
    get filter() {
        return this._filter;
    }
    set filter(filterFunc) {
        if (this._filter !== filterFunc) {
            this._filter = filterFunc;
            this.queueRender();
        }
    }
    get columns() {
        if (!Array.isArray(this._columns)) {
            const { _array: _array } = this;
            this._columns = Object.keys(_array[0] || {}).map((prop)=>{
                const width = $e6e19030d0c18d6f$var$defaultWidth(_array, prop, this.charWidth);
                return {
                    name: prop.replace(/([a-z])([A-Z])/g, "$1 $2").toLocaleLowerCase(),
                    prop: prop,
                    align: typeof _array[0][prop] === "number" || _array[0][prop] !== "" && !isNaN(_array[0][prop]) ? "right" : "left",
                    visible: width !== false,
                    width: width ? width : 0
                };
            });
        }
        return this._columns;
    }
    set columns(newColumns) {
        this._columns = newColumns;
        this.queueRender();
    }
    get visibleColumns() {
        return this.columns.filter((c)=>c.visible !== false);
    }
    content = null;
    getColumn(event) {
        const x = (event.touches !== undefined ? event.touches[0].clientX : event.clientX) - this.getBoundingClientRect().x;
        const epsilon = event.touches !== undefined ? 20 : 5;
        let boundaryX = 0;
        const log = [];
        const column = this.visibleColumns.find((options)=>{
            if (options.visible !== false) {
                boundaryX += options.width;
                log.push(boundaryX);
                return Math.abs(x - boundaryX) < epsilon;
            }
        });
        return column;
    }
    setCursor = (event)=>{
        const column = this.getColumn(event);
        if (column !== undefined) this.style.cursor = "col-resize";
        else this.style.cursor = "";
    };
    resizeColumn = (event)=>{
        const column = this.getColumn(event);
        if (column !== undefined) {
            const origWidth = column.width;
            const isTouchEvent = event.touches !== undefined;
            const touchIdentifier = isTouchEvent ? event.touches[0].identifier : undefined;
            (0, $5265d118b5240170$export$c947e3cd16175f27)(event, (dx, _dy, event)=>{
                const touch = isTouchEvent ? [
                    ...event.touches
                ].find((touch)=>touch.identifier === touchIdentifier) : true;
                if (touch === undefined) return true;
                const width = origWidth + dx;
                column.width = width > this.minColumnWidth ? width : this.minColumnWidth;
                this.setColumnWidths();
                if (event.type === "mouseup") return true;
            }, "col-resize");
        }
    };
    selectRow(row, select = true) {
        if (select) row[this.selectedKey] = true;
        else delete row[this.selectedKey];
    }
    selectRows(rows, select = true) {
        for (const row of rows || this.array)this.selectRow(row, select);
    }
    deSelect(rows) {
        this.selectRows(rows, false);
    }
    // tracking click / shift-click
    rangeStart;
    updateSelection = (event)=>{
        if (!this.select && !this.multiple) return;
        const { target: target } = event;
        if (!(target instanceof HTMLElement)) return;
        const tr = target.closest(".tr");
        if (!(tr instanceof HTMLElement)) return;
        const pickedItem = (0, $hgUW1$getListItem)(tr);
        const mouseEvent = event;
        // prevent ugly selection artifacts
        const selection = window.getSelection();
        if (selection !== null) selection.removeAllRanges();
        const rows = this.visibleRows;
        if (this.multiple && mouseEvent.shiftKey && rows.length > 0 && this.rangeStart !== pickedItem) {
            const mode = this.rangeStart === undefined || this.rangeStart[this.selectedKey] === true;
            const [start, finish] = [
                this.rangeStart !== undefined ? rows.indexOf(this.rangeStart) : 0,
                rows.indexOf(pickedItem)
            ].sort((a, b)=>a - b);
            // if start is -1 then one of the items is no longer visible
            if (start > -1) for(let idx = start; idx <= finish; idx++){
                const row = rows[idx];
                this.selectRow(row, mode);
            }
        } else if (this.multiple && mouseEvent.metaKey) {
            this.selectRow(pickedItem, !pickedItem[this.selectedKey]);
            const pickedIndex = rows.indexOf(pickedItem);
            const nextItem = rows[pickedIndex + 1];
            const previousItem = pickedIndex > 0 ? rows[pickedIndex - 1] : undefined;
            if (nextItem !== undefined && nextItem[this.selectedKey] === true) this.rangeStart = nextItem;
            else if (previousItem !== undefined && previousItem[this.selectedKey] === true) this.rangeStart = previousItem;
            else this.rangeStart = undefined;
        } else {
            this.rangeStart = pickedItem;
            this.deSelect();
            pickedItem[this.selectedKey] = true;
        }
        this.selectionChanged(this.visibleSelectedRows);
        (0, $hgUW1$touch)(this.instanceId);
    };
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("mousemove", this.setCursor);
        this.addEventListener("mousedown", this.resizeColumn);
        this.addEventListener("touchstart", this.resizeColumn, {
            passive: true
        });
        this.addEventListener("mouseup", this.updateSelection);
        this.addEventListener("touchend", this.updateSelection);
    }
    setColumnWidths() {
        this.style.setProperty("--grid-columns", this.visibleColumns.map((c)=>c.width + "px").join(" "));
    }
    get rowStyle() {
        return {
            display: "grid",
            gridTemplateColumns: (0, $hgUW1$vars).gridColumns,
            height: this.rowHeight + "px",
            lineHeight: this.rowHeight + "px"
        };
    }
    get cellStyle() {
        return {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
        };
    }
    headerCell = (options)=>options.headerCell !== undefined ? options.headerCell(options) : $e6e19030d0c18d6f$var$span({
            class: "th",
            role: "columnheader",
            ariaSort: "none",
            style: {
                ...this.cellStyle,
                textAlign: options.align || "left"
            }
        }, typeof options.name === "string" ? options.name : options.prop);
    dataCell = (options)=>{
        if (options.dataCell !== undefined) return options.dataCell(options);
        return $e6e19030d0c18d6f$var$span({
            class: "td",
            role: "cell",
            style: {
                ...this.cellStyle,
                textAlign: options.align || "left"
            },
            bindText: `^.${options.prop}`
        });
    };
    get visibleRows() {
        return (0, $hgUW1$xinValue)((0, $hgUW1$xin)[this.instanceId]);
    }
    get visibleSelectedRows() {
        return this.visibleRows.filter((obj)=>obj[this.selectedKey]);
    }
    get selectedRows() {
        return this.array.filter((obj)=>obj[this.selectedKey]);
    }
    render() {
        super.render();
        const found = this.filter(this._array);
        (0, $hgUW1$xin)[this.instanceId] = found.slice(0, this.maxVisibleRows);
        this.textContent = "";
        this.style.display = "flex";
        this.style.flexDirection = "column";
        const { visibleColumns: visibleColumns } = this;
        this.setColumnWidths();
        this.append($e6e19030d0c18d6f$var$div({
            class: "thead",
            role: "rowgroup",
            style: {
                touchAction: "none"
            }
        }, $e6e19030d0c18d6f$var$div({
            class: "tr",
            role: "row",
            style: this.rowStyle
        }, ...visibleColumns.map(this.headerCell))), $e6e19030d0c18d6f$var$div({
            class: "tbody",
            role: "rowgroup",
            style: {
                content: " ",
                minHeight: "100px",
                flex: "1 1 100px",
                overflow: "hidden",
                overflowY: "scroll"
            },
            bindList: {
                value: this.instanceId,
                virtual: this.virtual
            }
        }, $e6e19030d0c18d6f$var$template($e6e19030d0c18d6f$var$div({
            class: "tr",
            role: "row",
            style: this.rowStyle,
            bind: {
                value: "^",
                binding: {
                    toDOM: this.selectBinding
                }
            }
        }, ...visibleColumns.map(this.dataCell)))));
    }
}
const $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0 = $e6e19030d0c18d6f$export$df30df7ec97b32b5.elementCreator({
    tag: "xin-table"
});


var $46dc716dd2cf5925$exports = {};

$parcel$export($46dc716dd2cf5925$exports, "availableFilters", () => $46dc716dd2cf5925$export$16a138bde9d9de87);
$parcel$export($46dc716dd2cf5925$exports, "FilterPart", () => $46dc716dd2cf5925$export$b7838412d9f17b13);
$parcel$export($46dc716dd2cf5925$exports, "filterPart", () => $46dc716dd2cf5925$export$2237595b531763d7);
$parcel$export($46dc716dd2cf5925$exports, "FilterBuilder", () => $46dc716dd2cf5925$export$afb49bb3b076029e);
$parcel$export($46dc716dd2cf5925$exports, "filterBuilder", () => $46dc716dd2cf5925$export$8ca73b4108207c1f);
/*!
# filter

Automatically creates `ArrayFilter` functions `(a: any[]) => any[]` based on the query you build using its
macOS Finder-inspired interface, using an easily customizable / extensible collection of `Filter` objects.

```js
const { elements } = xinjs
const { dataTable, filterBuilder, availableFilters } = xinjsui

const sourceWords = ['acorn', 'bubblegum', 'copper', 'daisy', 'ellipse', 'fabulous', 'gerund', 'hopscotch', 'idiom', 'joke']
function randomWords () {
  let numWords = Math.random() * 4
  const words = []
  while (numWords > 0) {
    numWords -= 1
    words.push(sourceWords[Math.floor(Math.random() * 10)])
  }
  return [...new Set(words)]
}

const array = []
for(let i = 0; i < 1000; i++) {
  array.push({
    date: new Date(Math.random() * Date.now()).toISOString().split('T')[0],
    isLucky: Math.random() < 0.1,
    number: Math.floor(Math.random() * 200 - 100),
    string: randomWords().join(' '),
    tags: randomWords()
  })
}

const { span } = elements
const tagsBinding = {
  value: '^.tags',
  binding: {
    toDOM(element, value) {
      element.classList.add('tag-list')
      element.textContent = ''
      element.append(...value.map(tag => span(tag, {class: 'tag'})))
    }
  }
}

const columns = [
  {
    prop: 'date',
    width: 120
  },
  {
    prop: 'isLucky',
    type: 'boolean',
    width: 90
  },
  {
    prop: 'number',
    align: 'right',
    width: 90
  },
  {
    prop: 'string',
    width: 200
  },
  {
    prop: 'tags',
    width: 200,
    dataCell() {
      return elements.div({ bind: tagsBinding })
    }
  },
]

const table = dataTable({ array, columns })
const filter = filterBuilder({
  fields: columns,
  onChange(event) {
    table.filter = filter.filter
  }
})
preview.append(filter, table)
```
```css
.preview {
  display: flex;
  flex-direction: column;
}

.preview xin-table {
  flex: 1 1 auto;
}

.preview .tag-list {
  display: flex;
  font-size: 80%;
  align-items: center;
  gap: 2px;
}

.preview .tag {
  display: inline-block;
  border-radius: 4px;
  padding: 0 5px;
  line-height: 20px;
  height: 20px;
  color: var(--brand-text-color);
  background: var(--brand-color);
}
```

## serialization

The current state of a `<xin-filter>` can be serialized as, and restored from, a Javascript object (which itself
can easily be converted into JSON or a URL component) via its `state` property. Obviously, a `<xin-filter>` can
only restore state if it has the necessary constituent `filters`.

## availableFilters

`<xin-filter>` has a default set of `FilterMaker` objects which it uses to construct filter function.
In the example above, the default collection of filters is reduced to `contains`, `equals`, `after`, and `isTrue`.

The full collection includes:

- **contains** * looks for fields containing a string (ignoring case)
- **equals** * looks for fields containing equivalent values (ignoring case)
- **after** * looks for fields with a date after a provided value
- **greaterThan** * looks for fields with a value greater than a provided value
- **truthy** * looks for fields that are true / non-zero / non-empty
- **true** looks for fields that are `true`
- **false** looks for fields that are `false`
- **hasTags** looks for fields that are arrays containing all the (space/comma) delimited strings
- **doesNotHaveTags** looks for fields that are arrays containing *none* of the strings

**Note**: the filters marked with an * have negative version (e.g. does not contain).

```
type ObjectTest (obj: any) => boolean

interface FilterMaker {
  caption: string                                 // describes the test condition
  negative?: string                               // describes the negative test condition
  needsValue?: boolean                            // if false, the filterMaker doesn't need a needle value
  filterMaker(needle: any) => ObjectTest          // builds an ObjectTest
}
```
*/ 

const { div: $46dc716dd2cf5925$var$div, input: $46dc716dd2cf5925$var$input, select: $46dc716dd2cf5925$var$select, option: $46dc716dd2cf5925$var$option, button: $46dc716dd2cf5925$var$button, span: $46dc716dd2cf5925$var$span, style: $46dc716dd2cf5925$var$style } = (0, $hgUW1$elements);
document.head.append($46dc716dd2cf5925$var$style({
    id: "xin-filter"
}, `xin-filter-part {
  display: flex;
}

xin-filter-part svg[class^="icon-"]: {
  height: var(--font-size, 16px);
  verticalAlign: middle;
  fill: var(--text-color);
  pointer-event: none;
},

xin-filter-part [part="haystack"],
xin-filter-part [part="condition"] {
  flex: 1;
}


xin-filter-part [part="needle"] {
  flex: 2
}

xin-filter-part [hidden]+[part="padding"] {
  display: block;
  content: ' ';
  flex: 1 1 auto;
}

xin-filter {
  height: auto;
  display: grid;
  grid-template-columns: 32px calc(100% - 64px) 32px;
  align-items: center;
}

xin-filter [part="filterContainer"] {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 auto;
}

xin-filter [part="add"],
xin-filter [part="reset"] {
  --button-size: var(--touch-size, 32px);
  border-radius: 999px;
  height: var(--button-size);
  line-height: var(--button-size);
  margin: 0;
  padding: 0;
  text-align: center;
  width: var(--button-size);
  flex: 0 0 var(--button-size);
}
`));
const $46dc716dd2cf5925$var$passThru = (array)=>array;
const $46dc716dd2cf5925$var$NULL_FILTER_DESCRIPTION = "null filter, everything matches";
const $46dc716dd2cf5925$export$16a138bde9d9de87 = {
    contains: {
        caption: "contains",
        negative: "does not contain",
        makeTest: (value)=>{
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj).toLocaleLowerCase().includes(value);
        }
    },
    hasTags: {
        caption: "has tags",
        makeTest: (value)=>{
            const tags = value.split(/[\s,]/).map((tag)=>tag.trim().toLocaleLowerCase()).filter((tag)=>tag !== "");
            console.log(tags);
            return (obj)=>Array.isArray(obj) && tags.find((tag)=>!obj.includes(tag)) === undefined;
        }
    },
    doesNotHaveTags: {
        caption: "does not have tags",
        makeTest: (value)=>{
            const tags = value.split(/[\s,]/).map((tag)=>tag.trim().toLocaleLowerCase()).filter((tag)=>tag !== "");
            console.log(tags);
            return (obj)=>Array.isArray(obj) && tags.find((tag)=>obj.includes(tag)) === undefined;
        }
    },
    equals: {
        caption: "=",
        negative: "≠",
        makeTest: (value)=>{
            if (isNaN(Number(value))) {
                value = String(value).toLocaleLowerCase();
                return (obj)=>String(obj).toLocaleLowerCase() === value;
            }
            const num = Number(value);
            return (obj)=>Number(obj) === num;
        }
    },
    after: {
        caption: "is after",
        negative: "is before",
        makeTest: (value)=>{
            const date = new Date(value);
            return (obj)=>new Date(obj) > date;
        }
    },
    greaterThan: {
        caption: ">",
        negative: "≤",
        makeTest: (value)=>{
            if (!isNaN(Number(value))) {
                const num = Number(value);
                return (obj)=>Number(obj) > num;
            }
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj).toLocaleLowerCase() > value;
        }
    },
    truthy: {
        caption: "is true/non-empty/non-zero",
        negative: "is false/empty/zero",
        needsValue: false,
        makeTest: ()=>(obj)=>!!obj
    },
    isTrue: {
        caption: "= true",
        needsValue: false,
        makeTest: ()=>(obj)=>obj === true
    },
    isFalse: {
        caption: "= false",
        needsValue: false,
        makeTest: ()=>(obj)=>obj === false
    }
};
const $46dc716dd2cf5925$var$passAnything = {
    description: "anything",
    test: ()=>true
};
function $46dc716dd2cf5925$var$getSelectText(select) {
    return select.options[select.selectedIndex].text;
}
class $46dc716dd2cf5925$export$b7838412d9f17b13 extends (0, $hgUW1$Component) {
    fields = [];
    filters = $46dc716dd2cf5925$export$16a138bde9d9de87;
    haystack = "*";
    condition = "";
    needle = "";
    content = ()=>[
            $46dc716dd2cf5925$var$select({
                part: "haystack"
            }),
            (0, $fef058b85aa29b7a$export$df03f54e09e486fa).chevronDown(),
            $46dc716dd2cf5925$var$select({
                part: "condition"
            }),
            (0, $fef058b85aa29b7a$export$df03f54e09e486fa).chevronDown(),
            $46dc716dd2cf5925$var$input({
                part: "needle",
                type: "search"
            }),
            $46dc716dd2cf5925$var$span({
                part: "padding"
            }),
            $46dc716dd2cf5925$var$button({
                part: "remove",
                title: "delete"
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).trash())
        ];
    filter = $46dc716dd2cf5925$var$passAnything;
    constructor(){
        super();
        this.initAttributes("haystack", "condition", "needle");
    }
    get state() {
        const { haystack: haystack, needle: needle, condition: condition } = this.parts;
        return {
            haystack: haystack.value,
            needle: needle.value,
            condition: condition.value
        };
    }
    set state(newState) {
        Object.assign(this, newState);
    }
    buildFilter = ()=>{
        const { haystack: haystack, condition: condition, needle: needle } = this.parts;
        const negative = condition.value.startsWith("~");
        const key = negative ? condition.value.slice(1) : condition.value;
        const filter = this.filters[key];
        needle.hidden = filter.needsValue === false;
        const baseTest = filter.needsValue === false ? filter.makeTest(undefined) : filter.makeTest(needle.value);
        const field = haystack.value;
        let test;
        if (field !== "*") test = negative ? (obj)=>!baseTest(obj[field]) : (obj)=>baseTest(obj[field]);
        else test = negative ? (obj)=>Object.values(obj).find((v)=>!baseTest(v)) !== undefined : (obj)=>Object.values(obj).find((v)=>baseTest(v)) !== undefined;
        const matchValue = filter.needsValue !== false ? ` "${needle.value}"` : "";
        const description = `${$46dc716dd2cf5925$var$getSelectText(haystack)} ${$46dc716dd2cf5925$var$getSelectText(condition)}${matchValue}`;
        this.filter = {
            description: description,
            test: test
        };
        this.parentElement?.dispatchEvent(new Event("change"));
    };
    connectedCallback() {
        super.connectedCallback();
        const { haystack: haystack, condition: condition, needle: needle, remove: remove } = this.parts;
        haystack.addEventListener("change", this.buildFilter);
        condition.addEventListener("change", this.buildFilter);
        needle.addEventListener("input", this.buildFilter);
        haystack.value = this.haystack;
        condition.value = this.condition;
        needle.value = this.needle;
        remove.addEventListener("click", ()=>{
            const { parentElement: parentElement } = this;
            this.remove();
            parentElement?.dispatchEvent(new Event("change"));
        });
    }
    render() {
        super.render();
        const { haystack: haystack, condition: condition, needle: needle } = this.parts;
        haystack.textContent = "";
        haystack.append($46dc716dd2cf5925$var$option("any field", {
            value: "*"
        }), ...this.fields.map((field)=>{
            const caption = field.name || field.prop;
            return $46dc716dd2cf5925$var$option(`${caption}`, {
                value: field.prop
            });
        }));
        condition.textContent = "";
        const conditions = Object.keys(this.filters).map((key)=>{
            const filter = this.filters[key];
            return filter.negative !== undefined ? [
                $46dc716dd2cf5925$var$option(filter.caption, {
                    value: key
                }),
                $46dc716dd2cf5925$var$option(filter.negative, {
                    value: "~" + key
                })
            ] : $46dc716dd2cf5925$var$option(filter.caption, {
                value: key
            });
        }).flat();
        condition.append(...conditions);
        if (this.haystack !== "") haystack.value = this.haystack;
        if (this.condition !== "") condition.value = this.condition;
        if (this.needle !== "") needle.value = this.needle;
        this.buildFilter();
    }
}
const $46dc716dd2cf5925$export$2237595b531763d7 = $46dc716dd2cf5925$export$b7838412d9f17b13.elementCreator({
    tag: "xin-filter-part"
});
class $46dc716dd2cf5925$export$afb49bb3b076029e extends (0, $hgUW1$Component) {
    _fields = [];
    get fields() {
        return this._fields;
    }
    set fields(_fields) {
        this._fields = _fields;
        this.queueRender();
    }
    get state() {
        const { filterContainer: filterContainer } = this.parts;
        return [
            ...filterContainer.children
        ].map((part)=>part.state);
    }
    set state(parts) {
        const { fields: fields, filters: filters } = this;
        const { filterContainer: filterContainer } = this.parts;
        filterContainer.textContent = "";
        for (const state of parts)filterContainer.append($46dc716dd2cf5925$export$2237595b531763d7({
            fields: fields,
            filters: filters,
            ...state
        }));
    }
    filter = $46dc716dd2cf5925$var$passThru;
    description = $46dc716dd2cf5925$var$NULL_FILTER_DESCRIPTION;
    addFilter = ()=>{
        const { fields: fields, filters: filters } = this;
        const { filterContainer: filterContainer } = this.parts;
        filterContainer.append($46dc716dd2cf5925$export$2237595b531763d7({
            fields: fields,
            filters: filters
        }));
    };
    content = ()=>[
            $46dc716dd2cf5925$var$button({
                part: "add",
                title: "add filter condition",
                onClick: this.addFilter,
                class: "round"
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).plus()),
            $46dc716dd2cf5925$var$div({
                part: "filterContainer"
            }),
            $46dc716dd2cf5925$var$button({
                part: "reset",
                title: "reset filter",
                onClick: this.reset
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).x())
        ];
    filters = $46dc716dd2cf5925$export$16a138bde9d9de87;
    reset = ()=>{
        const { fields: fields, filters: filters } = this;
        const { filterContainer: filterContainer } = this.parts;
        this.description = $46dc716dd2cf5925$var$NULL_FILTER_DESCRIPTION;
        this.filter = $46dc716dd2cf5925$var$passThru;
        filterContainer.textContent = "";
        filterContainer.append($46dc716dd2cf5925$export$2237595b531763d7({
            fields: fields,
            filters: filters
        }));
        this.dispatchEvent(new Event("change"));
    };
    buildFilter = ()=>{
        const { filterContainer: filterContainer } = this.parts;
        if (filterContainer.children.length === 0) {
            this.reset();
            return;
        }
        const filters = [
            ...filterContainer.children
        ].map((filterPart)=>filterPart.filter);
        const tests = filters.map((filter)=>filter.test);
        this.description = filters.map((filter)=>filter.description).join(", ");
        this.filter = (array)=>array.filter((obj)=>tests.find((f)=>f(obj) === false) === undefined);
        this.dispatchEvent(new Event("change"));
    };
    connectedCallback() {
        super.connectedCallback();
        const { filterContainer: filterContainer } = this.parts;
        filterContainer.addEventListener("change", this.buildFilter);
        this.reset();
    }
    render() {
        super.render();
    }
}
const $46dc716dd2cf5925$export$8ca73b4108207c1f = $46dc716dd2cf5925$export$afb49bb3b076029e.elementCreator({
    tag: "xin-filter"
});


var $ddbe66d066773fc1$exports = {};

$parcel$export($ddbe66d066773fc1$exports, "XinFloat", () => $ddbe66d066773fc1$export$dfef4eaf9958ab9d);
$parcel$export($ddbe66d066773fc1$exports, "xinFloat", () => $ddbe66d066773fc1$export$aeb0f03cef938121);
/*!
# float

A floating, potentially draggable user interface element.

```html
<xin-float class="float" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" style="top: 50px; right: 20px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>

<xin-float class="float" style="bottom: 20px; left: 50px;" drag>
  <h4>Drag Me</h4>
  <div class="no-drag balloon">🎈</div>
  <footer style="font-size: 75%">neunundneunzig pixel-ballon</footer>
</xin-float>
```
```css
.preview .float {
  width: 220px;
  height: 180px;
  padding: 0;
  gap: 5px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fff8;
  box-shadow: 2px 10px 20px #0004;
  overflow: hidden;
  cursor: move;
}

.preview h4 {
  margin: 0;
  padding: 5px 10px;
  color: white;
  background: red;
}

.preview .balloon {
  cursor: default;
  flex: 1 1 auto;
  font-size: 99px;
  line-height: 120px;
  text-align: center;
  height: auto;
  overflow: hidden;
}

.preview footer {
  text-align: center;
  background: #f008;
  color: white;
```

Note that the `<xin-float>` element has absolutely minimal styling. It's up to you to provide a drop
shadow and background and so on.

To make a `<xin-float>` element draggable, simply set its `drag` attribute.

To prevent dragging for an interior element (e.g. if you want a floating palette with buttons or input fields)
just add the `no-drag` class to an element or its container.
*/ 

const { slot: $ddbe66d066773fc1$var$slot } = (0, $hgUW1$elements);
class $ddbe66d066773fc1$export$dfef4eaf9958ab9d extends (0, $hgUW1$Component) {
    drag = false;
    content = $ddbe66d066773fc1$var$slot();
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            position: "fixed"
        }
    });
    constructor(){
        super();
        this.initAttributes("drag");
    }
    reposition = (event)=>{
        const target = event.target;
        if (target?.closest(".no-drag")) return;
        if (this.drag) {
            (0, $5265d118b5240170$export$1937b0002823d405)(this);
            const x = this.offsetLeft;
            const y = this.offsetTop;
            (0, $5265d118b5240170$export$c947e3cd16175f27)(event, (dx, dy, pointerEvent)=>{
                this.style.left = `${x + dx}px`;
                this.style.top = `${y + dy}px`;
                this.style.right = "auto";
                this.style.bottom = "auto";
                if (pointerEvent.type === "mouseup") return true;
            });
        }
    };
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("touchstart", this.reposition);
        this.addEventListener("mousedown", this.reposition);
        (0, $5265d118b5240170$export$1937b0002823d405)(this);
    }
}
const $ddbe66d066773fc1$export$aeb0f03cef938121 = $ddbe66d066773fc1$export$dfef4eaf9958ab9d.elementCreator({
    tag: "xin-float"
});


var $f78058ae816e78a2$exports = {};

$parcel$export($f78058ae816e78a2$exports, "XinField", () => $f78058ae816e78a2$export$f0aa272ac8112266);
$parcel$export($f78058ae816e78a2$exports, "XinForm", () => $f78058ae816e78a2$export$470ae7cc5ec6d2a);
$parcel$export($f78058ae816e78a2$exports, "xinField", () => $f78058ae816e78a2$export$1e17fa265ee93a1d);
$parcel$export($f78058ae816e78a2$exports, "xinForm", () => $f78058ae816e78a2$export$ab08039c332a0d0e);
/*!
# forms

`<xin-form>` and `<xin-field>` can be used to quickly create forms complete with
[client-side validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#built-in_form_validation_examples).

```js
const xinForm = preview.querySelector('xin-form')
preview.querySelector('.submit').addEventListener('click', () => {
  xinForm.submit()
})
```
```html
<xin-form>
  <h3 slot="header">Example Form Header</h3>
  <xin-field caption="Required field" key="required"></xin-field>
  <xin-field optional key="optional"><i>Optional</i> Field</xin-field>
  <xin-field caption="Zip Code" placeholder="12345 or 12345-6789" key="zipcode" pattern="\d{5}(-\d{4})?"></xin-field>
  <xin-field caption="Date" key="date" type="date"></xin-field>
  <xin-field caption="Number" key="number" type="number"></xin-field>
  <xin-field caption="Range" key="range" type="range"></xin-field>
  <xin-field key="boolean" type="checkbox">😃 <b>Agreed?!</b></xin-field>
  <button slot="footer" class="submit">Submit</button>
</xin-form>
```
```css
.preview xin-form {
  height: 100%;
}

.preview ::part(header), .preview ::part(footer) {
  background: #ddd;
  justify-content: center;
  padding: calc(var(--spacing) * 0.5) var(--spacing);
}

.preview h3, .preview h4 {
  margin: 0;
  padding: 0;
}

.preview ::part(content) {
  padding: var(--spacing);
  gap: var(--spacing);
  background: #e8e8e8;
}

.preview label {
  display: flex;
  gap: var(--spacing);
}

.preview label [part="caption"] {
  flex: 0 0 150px;
  text-align: right;
}

.preview input:invalid {
  box-shadow: inset 0 0 2px red;
}

.preview label:has(input:invalid:required)::after {
  content: '* required'
}
```

## `<xin-form>`

`<xin-form>` prevents the default form behavior when a `submit` event is triggered and instead validates the
form contents (generating feedback if desired) and calls its `onSubmit(value: {[key: string]: any}, isValid: boolean): void`
method.

`<xin-form>` instances have `value` and `isValid` properties you can access any time. Note that `isValid` is computed
and triggers form validation.

`<xin-form>` has `header` and `footer` `<slot>`s in addition to default `<slot>`, which is tucked inside a `<form>` element.

## `<xin-field>`

`<xin-field>` is a simple web-component with no shadowDOM that combines an `<input>` field wrapped with a `<label>`. Any
content of the custom-element will become the `caption` or you can simply set the `caption` attribute.

`<xin-field>` supports the following attributes:

- `caption` labels the field
- `key` determines the form property the field will populate
- `type` determines the data-type: '' | 'checkbox' | 'number' | 'range' | 'date'
- `optional` turns off the `required` attribute (fields are required by default)
- `pattern` is an (optional) regex pattern
- `placeholder` is an (optional) placeholder
*/ 
const { form: $f78058ae816e78a2$var$form, slot: $f78058ae816e78a2$var$slot, xinSlot: $f78058ae816e78a2$var$xinSlot, label: $f78058ae816e78a2$var$label, input: $f78058ae816e78a2$var$input } = (0, $hgUW1$elements);
function $f78058ae816e78a2$var$attr(element, name, value) {
    if (value === true) element.setAttribute(name, "");
    else if (value !== "" && value !== false) element.setAttribute(name, value);
    else element.removeAttribute(name);
}
class $f78058ae816e78a2$export$f0aa272ac8112266 extends (0, $hgUW1$Component) {
    caption = "";
    key = "";
    type = "";
    optional = false;
    pattern = "";
    placeholder = "";
    content = $f78058ae816e78a2$var$label($f78058ae816e78a2$var$xinSlot({
        part: "caption"
    }), $f78058ae816e78a2$var$input({
        part: "input"
    }));
    constructor(){
        super();
        this.initAttributes("caption", "key", "type", "optional", "pattern", "placeholder");
    }
    handleChange = ()=>{
        const { input: input } = this.parts;
        const form = this.closest("xin-form");
        if (form && this.key !== "") switch(this.type){
            case "checkbox":
                form.value[this.key] = input.checked;
                break;
            case "number":
            case "range":
                form.value[this.key] = Number(input.value);
                break;
            default:
                form.value[this.key] = input.value;
        }
    };
    connectedCallback() {
        super.connectedCallback();
        const { input: input } = this.parts;
        input.addEventListener("change", this.handleChange);
    }
    render() {
        const { input: input, caption: caption } = this.parts;
        if (caption.textContent?.trim() === "") caption.append(this.caption !== "" ? this.caption : this.key);
        $f78058ae816e78a2$var$attr(input, "placeholder", this.placeholder);
        $f78058ae816e78a2$var$attr(input, "type", this.type);
        $f78058ae816e78a2$var$attr(input, "pattern", this.pattern);
        $f78058ae816e78a2$var$attr(input, "required", !this.optional);
    }
}
class $f78058ae816e78a2$export$470ae7cc5ec6d2a extends (0, $hgUW1$Component) {
    context = {};
    value = {};
    get isValid() {
        const widgets = [
            ...this.querySelectorAll("*")
        ].filter((widget)=>widget.required !== undefined);
        return widgets.find((widget)=>!widget.reportValidity()) === undefined;
    }
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            display: "flex",
            flexDirection: "column"
        },
        ":host::part(header), :host::part(footer)": {
            display: "flex"
        },
        ":host::part(content)": {
            display: "flex",
            flexDirection: "column",
            overflow: "hidden auto",
            height: "100%",
            width: "100%",
            position: "relative",
            boxSizing: "border-box"
        },
        ":host form": {
            display: "block",
            flex: "1 1 auto",
            position: "relative",
            overflow: "hidden"
        }
    });
    content = [
        $f78058ae816e78a2$var$slot({
            part: "header",
            name: "header"
        }),
        $f78058ae816e78a2$var$form({
            part: "form"
        }, $f78058ae816e78a2$var$slot({
            part: "content"
        })),
        $f78058ae816e78a2$var$slot({
            part: "footer",
            name: "footer"
        })
    ];
    submit() {
        this.parts.form.dispatchEvent(new Event("submit"));
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        this.onSubmit(this.value, this.isValid);
    };
    onSubmit = (value, isValid)=>{
        console.log("override onSubmit to handle this data", {
            value: value,
            isValid: isValid
        });
    };
    connectedCallback() {
        super.connectedCallback();
        this.parts.form.addEventListener("submit", this.handleSubmit);
    }
}
const $f78058ae816e78a2$export$1e17fa265ee93a1d = $f78058ae816e78a2$export$f0aa272ac8112266.elementCreator({
    tag: "xin-field"
});
const $f78058ae816e78a2$export$ab08039c332a0d0e = $f78058ae816e78a2$export$470ae7cc5ec6d2a.elementCreator({
    tag: "xin-form"
});


var $534e33669d896770$exports = {};

$parcel$export($534e33669d896770$exports, "gamepadState", () => $534e33669d896770$export$3ba85dfa569d0a2);
$parcel$export($534e33669d896770$exports, "gamepadText", () => $534e33669d896770$export$12a9b81fff6446ce);
$parcel$export($534e33669d896770$exports, "xrControllers", () => $534e33669d896770$export$26767cb0bb5a32c4);
$parcel$export($534e33669d896770$exports, "xrControllersText", () => $534e33669d896770$export$eecbd93f0e9594d8);
/*!
# gamepads

A couple of utility functions for dealing with gamepads and XRInputs.

`gamepadState()` gives you a condensed version of active gamepad state

`gamepadText()` provides the above in minimal text form for debugging

## XRInput Devices

> This is experimental, the API is changing and stuff doesn't work. Hopefully it
> will become a lot more generally useful once Apple's VisionPro comes out.

`xrControllers(babylonjsXRHelper)` returns an `XinXRControllerMap` structure that tries to
conveniently render the current state of XR controls. (The babylonjs API for this is horrific!)

`xrControllerText(controllerMap)` renders the map output by the above in a compact form
which is useful when debugging.
*/ function $534e33669d896770$export$3ba85dfa569d0a2() {
    const gamepads = navigator.getGamepads().filter((p)=>p !== null);
    return gamepads.map((p)=>{
        const { id: id, axes: axes, buttons: buttons } = p;
        return {
            id: id,
            axes: axes,
            buttons: buttons.map((button, index)=>{
                const { pressed: pressed, value: value } = button;
                return {
                    index: index,
                    pressed: pressed,
                    value: value
                };
            }).filter((b)=>b.pressed || b.value !== 0).reduce((map, button)=>{
                map[button.index] = button.value;
                return map;
            }, {})
        };
    });
}
function $534e33669d896770$export$12a9b81fff6446ce() {
    const state = $534e33669d896770$export$3ba85dfa569d0a2();
    return state.length === 0 ? "no active gamepads" : state.map(({ id: id, axes: axes, buttons: buttons })=>{
        const axesText = axes.map((a)=>a.toFixed(2)).join(" ");
        const buttonText = Object.keys(buttons).map((key)=>`[${key}](${buttons[Number(key)].toFixed(2)})`).join(" ");
        return `${id}\n${axesText}\n${buttonText}`;
    }).join("\n");
}
function $534e33669d896770$export$26767cb0bb5a32c4(xrHelper) {
    const controllers = {};
    xrHelper.input.onControllerAddedObservable.add((controller)=>{
        controller.onMotionControllerInitObservable.add((mc)=>{
            const state = {};
            const componentIds = mc.getComponentIds();
            componentIds.forEach((componentId)=>{
                const component = mc.getComponent(componentId);
                state[componentId] = {
                    pressed: component.pressed
                };
                component.onButtonStateChangedObservable.add(()=>{
                    state[componentId].pressed = component.pressed;
                });
                // TODO does this work?! inquiring minds…
                if (component.onAxisValueChangedObservable) {
                    state[componentId].axes = [];
                    component.onAxisValueChangedObservable.add((axes)=>{
                        state[componentId].axes = axes;
                    });
                }
            });
            controllers[mc.handedness] = state;
        });
    });
    return controllers;
}
function $534e33669d896770$export$eecbd93f0e9594d8(controllers) {
    if (controllers === undefined || Object.keys(controllers).length === 0) return "no xr inputs";
    return Object.keys(controllers).map((controllerId)=>{
        const state = controllers[controllerId];
        const buttonText = Object.keys(state).filter((componentId)=>state[componentId].pressed).join(" ");
        return `${controllerId}\n${buttonText}`;
    }).join("\n");
}



var $ada9b1474dc4b958$exports = {};

$parcel$export($ada9b1474dc4b958$exports, "LiveExample", () => $ada9b1474dc4b958$export$41199f9ac14d8c08);
$parcel$export($ada9b1474dc4b958$exports, "liveExample", () => $ada9b1474dc4b958$export$dafbe0fa988b899b);
$parcel$export($ada9b1474dc4b958$exports, "makeExamplesLive", () => $ada9b1474dc4b958$export$afa6494eb589c19e);
/*!
# example

`<xin-example>` makes it easy to insert interactive code examples in a web page. It
started life as a super lightweight, easier-to-embed implementation of
[b8rjs's fiddle component](https://b8rjs.com)—which I dearly missed—but now the student
is, by far, the master. And it's still super lightweight.

*You're probably looking at it right now.*

```js
// this code executes in an async function body
// it has xinjs, xinjsui, and preview (the preview div) available as local variables
const { div } = xinjs.elements
preview.append(div({class: 'example'}, 'fiddle de dee!'))
preview.append('Try editing some code and hitting refresh…')
```
```html
<h2>Example</h2>
```
```css
.preview {
  padding: 0 var(--spacing);
}

.example {
  animation: throb ease-in-out 1s infinite alternate;
}

@keyframes throb {
  from { color: blue }
  to { color: red }
}
```

You can simply wrap it around a sequence of code blocks in the DOM with the
languages (js, html, css) as annotations or you can directly set the `js`, `html`,
and `css` properties.

## Code-Editor

The **code-editor** is actually the same component spawned in a new window using
a couple of clever tricks, the most important of which is leveraging
[StorageEvent](https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent).

This functionality was originally added to make working in XR easier, but it turned
out that it's just better than the earlier way of doing things.

It actually uses just one `localStorage` item to handle any number of code-editors,
and cleans up after itself when you close the example (including closing stray
windows.

> **To Do** a little refactoring and tweaking to split the the editor off as a
completely separate component that can be used for other things, and make the
example itself lighter-weight.

## context

A `<xin-example>` can be given a `context` object {[key: string]: any}, which is the
set of values available in the javascript's execution context (it is wrapped in an
async function and passed those values). By default, that context comprises `preview`
(the `<div>` in which the example is rendered), `xinjs` (`* from xinjs`),
and `xinjsui` (`* from xinjsui`).

The `LiveExample` class provides the static `insertExamples(element: HTMLElement)`
function that will replace any sequence of
`pre code[class="language-html"],pre code[class="language-js"],pre code[class="language-css"]`
elements with a `<xin-example>` instance.
*/ 

var $6bbe441346901d5a$exports = {};

$parcel$export($6bbe441346901d5a$exports, "TabSelector", () => $6bbe441346901d5a$export$a3a7254f7f149b03);
$parcel$export($6bbe441346901d5a$exports, "tabSelector", () => $6bbe441346901d5a$export$a932f737dcd864a2);
/*!
# tabs

`<xin-tabs>` creates a `tabpanel` for its children, creating a `tab` for each based on its
`name` attribute.

```js
[...preview.querySelectorAll('div[name]')].forEach(div => {
  div.style.color = `hsl(${(Math.random() * 360).toFixed(0)} 50% 50%)`
})

const { div, button } = xinjs.elements
const tabSelector = preview.querySelector('xin-tabs')

let bodycount = 0
preview.querySelector('.add').addEventListener('click', () => {
  const name = `new tab ${++bodycount}`
  const body = div(
    {name, dataClose: true},
    name,
  )
  tabSelector.addTabBody(body, true)
})
```
```html
<xin-tabs>
  <div name="first">first body</div>
  <div name="second" data-close>second body</div>
  <div name="third">third body</div>
  <button class="add" slot="after-tabs">
    <xin-icon icon="plus"></xin-icon>
  </button>
</xin-tabs>
```
```css
  .preview xin-tabs {
    height: 100%;
  }

  .preview div[name] {
    padding: 20px;
    text-align: center;
    height: 100%;
    font-size: 200%;
  }
```

The `<xin-tabs>`s `value` is the index of its active body.

A `<xin-tabs>` has `addTabBody(body: HTMLElement, select?: boolean)` and
`removeTabBody(body: number | HTMLElement)` methods for updating its content.
*/ 

const { div: $6bbe441346901d5a$var$div, slot: $6bbe441346901d5a$var$slot, span: $6bbe441346901d5a$var$span, button: $6bbe441346901d5a$var$button } = (0, $hgUW1$elements);
class $6bbe441346901d5a$export$a3a7254f7f149b03 extends (0, $hgUW1$Component) {
    value = 0;
    static makeTab(tabs, tabBody, bodyId) {
        const name = tabBody.getAttribute("name");
        const tab = $6bbe441346901d5a$var$div($6bbe441346901d5a$var$span(name), {
            tabindex: 0,
            role: "tab",
            ariaControls: bodyId
        }, tabBody.hasAttribute("data-close") ? $6bbe441346901d5a$var$button({
            title: "close",
            class: "close"
        }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).x()) : {});
        return tab;
    }
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            boxShadow: "none !important"
        },
        slot: {
            position: "relative",
            display: "block",
            flex: "1 1 auto",
            overflow: "hidden",
            overflowY: "auto"
        },
        'slot[name="after-tabs"]': {
            flex: "0 0 auto"
        },
        "::slotted([hidden])": {
            display: "none !important"
        },
        ":host .tab-holder": {
            display: "flex",
            flexDirection: "column"
        },
        ":host .tab-row": {
            display: "flex"
        },
        ":host .tabs": {
            display: "flex",
            userSelect: "none",
            whiteSpace: "nowrap"
        },
        ":host .tabs > div": {
            padding: `${(0, $hgUW1$vars).spacing50} ${(0, $hgUW1$vars).spacing}`,
            cursor: "default",
            display: "flex",
            alignItems: "baseline"
        },
        ':host .tabs > [aria-selected="true"]': {
            "--text-color": (0, $hgUW1$vars).xinTabsSelectedColor,
            color: (0, $hgUW1$vars).textColor
        },
        ":host .border": {
            background: "var(--xin-tabs-bar-color, #ccc)"
        },
        ":host .border > .selected": {
            content: " ",
            width: 0,
            height: "var(--xin-tabs-bar-height, 2px)",
            background: (0, $hgUW1$vars).xinTabsSelectedColor,
            transition: "ease-out 0.2s"
        },
        ":host button.close": {
            fill: (0, $hgUW1$vars).textColor,
            border: 0,
            background: "transparent",
            textAlign: "center",
            marginLeft: (0, $hgUW1$vars).spacing50,
            padding: 0
        },
        ":host button.close > svg": {
            height: "12px"
        }
    });
    content = [
        $6bbe441346901d5a$var$div({
            class: "tab-holder",
            role: "tabpanel"
        }, $6bbe441346901d5a$var$div({
            class: "tab-row"
        }, $6bbe441346901d5a$var$div({
            class: "tabs",
            part: "tabs"
        }), $6bbe441346901d5a$var$div({
            style: {
                flex: "1 1 auto"
            }
        }), $6bbe441346901d5a$var$slot({
            name: "after-tabs"
        })), $6bbe441346901d5a$var$div({
            class: "border"
        }, $6bbe441346901d5a$var$div({
            class: "selected",
            part: "selected"
        }))),
        $6bbe441346901d5a$var$slot()
    ];
    constructor(){
        super();
        this.initAttributes("anne", "example");
    }
    addTabBody(body, selectTab = false) {
        if (!body.hasAttribute("name")) {
            console.error("element has no name attribute", body);
            throw new Error("element has no name attribute");
        }
        this.append(body);
        this.setupTabs();
        if (selectTab) this.value = this.bodies.length - 1;
        this.queueRender();
    }
    removeTabBody(body) {
        body.remove();
        this.setupTabs();
        this.queueRender();
    }
    keyTab = (event)=>{
        const { tabs: tabs } = this.parts;
        const tabIndex = [
            ...tabs.children
        ].indexOf(event.target);
        switch(event.key){
            case "ArrowLeft":
                this.value = (tabIndex + Number(tabs.children.length) - 1) % tabs.children.length;
                tabs.children[this.value].focus();
                event.preventDefault();
                break;
            case "ArrowRight":
                this.value = (tabIndex + 1) % tabs.children.length;
                tabs.children[this.value].focus();
                event.preventDefault();
                break;
            case " ":
                this.pickTab(event);
                event.preventDefault();
                break;
            default:
        }
    };
    get bodies() {
        return [
            ...this.children
        ].filter((elt)=>elt.hasAttribute("name"));
    }
    pickTab = (event)=>{
        const { tabs: tabs } = this.parts;
        const target = event.target;
        const isCloseEvent = target.closest("button.close") !== null;
        const tab = target.closest(".tabs > div");
        const tabIndex = [
            ...tabs.children
        ].indexOf(tab);
        if (isCloseEvent) this.removeTabBody(this.bodies[tabIndex]);
        else if (tabIndex > -1) this.value = tabIndex;
    };
    setupTabs = ()=>{
        const { tabs: tabs } = this.parts;
        const tabBodies = [
            ...this.children
        ].filter((child)=>!child.hasAttribute("slot") && child.hasAttribute("name"));
        tabs.textContent = "";
        if (this.value >= tabBodies.length) this.value = tabBodies.length - 1;
        for(const index in tabBodies){
            const tabBody = tabBodies[index];
            const bodyId = `${this.instanceId}-${index}`;
            tabBody.id = bodyId;
            const tab = $6bbe441346901d5a$export$a3a7254f7f149b03.makeTab(this, tabBody, bodyId);
            tabs.append(tab);
        }
    };
    connectedCallback() {
        super.connectedCallback();
        const { tabs: tabs } = this.parts;
        tabs.addEventListener("click", this.pickTab);
        tabs.addEventListener("keydown", this.keyTab);
        this.setupTabs();
    }
    onResize() {
        this.queueRender();
    }
    render() {
        const { tabs: tabs, selected: selected } = this.parts;
        const tabBodies = this.bodies;
        for(let i = 0; i < tabBodies.length; i++){
            const tabBody = tabBodies[i];
            const tab = tabs.children[i];
            if (this.value === Number(i)) {
                tab.setAttribute("aria-selected", "true");
                selected.style.marginLeft = `${tab.offsetLeft - tabs.offsetLeft}px`;
                selected.style.width = `${tab.offsetWidth}px`;
                tabBody.removeAttribute("hidden");
            } else {
                tab.removeAttribute("aria-selected");
                tabBody.setAttribute("hidden", "");
            }
        }
    }
}
const $6bbe441346901d5a$export$a932f737dcd864a2 = $6bbe441346901d5a$export$a3a7254f7f149b03.elementCreator({
    tag: "xin-tabs"
});



const { div: $ada9b1474dc4b958$var$div, xinSlot: $ada9b1474dc4b958$var$xinSlot, style: $ada9b1474dc4b958$var$style, button: $ada9b1474dc4b958$var$button, h4: $ada9b1474dc4b958$var$h4 } = (0, $hgUW1$elements);
const $ada9b1474dc4b958$var$AsyncFunction = (async ()=>{}).constructor;
const $ada9b1474dc4b958$var$codeStyle = {
    style: {
        width: "100%",
        height: "100%"
    }
};
document.head.append($ada9b1474dc4b958$var$style({
    id: "xin-example"
}, `:root {
  --xin-example-height: 320px;
}

xin-example {
  --code-editors-bar-bg: #777;
  --code-editors-bar-color: #fff;
  --widget-bg: #fffc;
  --widget-color: #000;
  position: relative;
  display: flex;
  height: var(--xin-example-height);
  background: var(--background);
  box-sizing: border-box;
}

xin-example.-maximize {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  margin: 0 !important;
}

.-maximize {
  /* FIXME: kludge */
  z-index: 10;
}

xin-example.-maximize .hide-if-maximized,
xin-example:not(.-maximize) .show-if-maximized {
  display: none;
}

xin-example [part="example"] {
  flex: 1 1 50%;
  height: 100%;
  position: relative;
}

xin-example .preview {
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #f7f7f7 url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 8 8" fill-opacity=".02" >\
  <rect x="4" width="4" height="4" /><rect y="4" width="4" height="4" /></svg>');
}

xin-example [part="editors"] {
  flex: 1 1 200px;
  height: 100%;
  position: relative;
}

xin-example [part="exampleWidgets"] {
  position: absolute;
  right: 2px;
  top: 2px;
  background: var(--widget-bg);
  border-radius: 5px;
}

xin-example [part="exampleWidgets"] svg {
  fill: var(--widget-color);
}

xin-example .code-editors {
  overflow: hidden;
  background: white;
  position: relative;
  top: 0;
  right: 0;
  flex: 1 1 50%;
  height: 100%;
  flex-direction: column;
  z-index: 10;
}

@media (max-width: 1200px) {
}

xin-example .code-editors:not([hidden]) {
  display: flex;
}

xin-example .code-editors > h4 {
  padding: 5px;
  margin: 0;
  text-align: center;
  background: var(--code-editors-bar-bg);
  color: var(--code-editors-bar-color);
  cursor: move;
}

xin-example .close-button {
  position: absolute;
  top: 0;
  right: 0;
  --text-color: var(--code-editors-bar-color);
}

xin-example button.transparent,
xin-example .sizer {
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  padding: 0;
  margin: 0;
}

xin-example .sizer {
  cursor: nwse-resize;
}
`));
class $ada9b1474dc4b958$export$41199f9ac14d8c08 extends (0, $hgUW1$Component) {
    prettier = false;
    prefix = "lx";
    storageKey = "live-example-payload";
    context = {};
    uuid = crypto.randomUUID();
    remoteId = "";
    // FIXME workarounds for StorageEvent issue on Quest
    lastUpdate = 0;
    interval;
    static insertExamples(element, context = {}) {
        const sources = [
            ...element.querySelectorAll('pre code[class="language-html"],pre code[class="language-js"],pre code[class="language-css"]')
        ].map((code)=>({
                block: code.parentElement,
                language: code.classList[0].split("-").pop(),
                code: code.innerText
            }));
        for(let index = 0; index < sources.length; index += 1){
            const exampleSources = [
                sources[index]
            ];
            while(index < sources.length - 1 && sources[index].block.nextElementSibling === sources[index + 1].block){
                exampleSources.push(sources[index + 1]);
                index += 1;
            }
            const example = $ada9b1474dc4b958$export$dafbe0fa988b899b({
                style: {
                    margin: `1em -1em`
                },
                context: context
            });
            exampleSources[0].block.parentElement.insertBefore(example, exampleSources[0].block);
            exampleSources.forEach((source)=>{
                switch(source.language){
                    case "js":
                        example.js = source.code;
                        break;
                    case "html":
                        example.html = source.code;
                        break;
                    case "css":
                        example.css = source.code;
                        break;
                }
                source.block.remove();
            });
            example.showDefaultTab();
        }
    }
    get activeTab() {
        const { editors: editors } = this.parts;
        return [
            ...editors.children
        ].find((elt)=>elt.getAttribute("hidden") === null);
    }
    getEditorValue(which) {
        return this.parts[which].value;
    }
    setEditorValue(which, code) {
        const codeEditor = this.parts[which];
        codeEditor.value = code;
    }
    get css() {
        return this.getEditorValue("css");
    }
    set css(code) {
        this.setEditorValue("css", code);
    }
    get html() {
        return this.getEditorValue("html");
    }
    set html(code) {
        this.setEditorValue("html", code);
    }
    get js() {
        return this.getEditorValue("js");
    }
    set js(code) {
        this.setEditorValue("js", code);
    }
    updateUndo = ()=>{
        const { activeTab: activeTab } = this;
        const { undo: undo, redo: redo } = this.parts;
        if (activeTab instanceof (0, $8a70bd76f9b7e656$export$b7127187684f7150) && activeTab.editor !== undefined) {
            const undoManager = activeTab.editor.session.getUndoManager();
            undo.disabled = !undoManager.hasUndo();
            redo.disabled = !undoManager.hasRedo();
        } else {
            undo.disabled = true;
            redo.disabled = true;
        }
    };
    undo = ()=>{
        const { activeTab: activeTab } = this;
        if (activeTab instanceof (0, $8a70bd76f9b7e656$export$b7127187684f7150)) activeTab.editor.undo();
    };
    redo = ()=>{
        const { activeTab: activeTab } = this;
        if (activeTab instanceof (0, $8a70bd76f9b7e656$export$b7127187684f7150)) activeTab.editor.redo();
    };
    content = ()=>[
            $ada9b1474dc4b958$var$div({
                part: "example"
            }, $ada9b1474dc4b958$var$style({
                part: "style"
            }), $ada9b1474dc4b958$var$div({
                part: "exampleWidgets"
            }, $ada9b1474dc4b958$var$button({
                title: "view/edit code",
                class: "transparent",
                onClick: this.showCode
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).edit()), $ada9b1474dc4b958$var$button({
                title: "view/edit code (in new window)",
                class: "transparent",
                onClick: this.openEditorWindow
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).editDoc()), $ada9b1474dc4b958$var$button({
                part: "maximize",
                title: "maximize preview",
                class: "transparent",
                onClick: this.toggleMaximize
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).minimize({
                class: "icon-minimize show-if-maximized"
            }), (0, $fef058b85aa29b7a$export$df03f54e09e486fa).maximize({
                class: "icon-maximize hide-if-maximized"
            })))),
            $ada9b1474dc4b958$var$div({
                class: "code-editors",
                part: "codeEditors",
                hidden: true
            }, $ada9b1474dc4b958$var$h4("Code"), $ada9b1474dc4b958$var$button({
                title: "close code",
                class: "transparent close-button",
                onClick: this.closeCode
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).x()), (0, $6bbe441346901d5a$export$a932f737dcd864a2)({
                part: "editors",
                onChange: this.updateUndo
            }, (0, $8a70bd76f9b7e656$export$d89b6f4d34274146)({
                name: "js",
                mode: "javascript",
                part: "js",
                ...$ada9b1474dc4b958$var$codeStyle
            }), (0, $8a70bd76f9b7e656$export$d89b6f4d34274146)({
                name: "html",
                mode: "html",
                part: "html",
                ...$ada9b1474dc4b958$var$codeStyle
            }), (0, $8a70bd76f9b7e656$export$d89b6f4d34274146)({
                name: "css",
                mode: "css",
                part: "css",
                ...$ada9b1474dc4b958$var$codeStyle
            }), $ada9b1474dc4b958$var$div({
                slot: "after-tabs",
                class: "row"
            }, $ada9b1474dc4b958$var$button({
                title: "undo",
                part: "undo",
                class: "transparent",
                onClick: this.undo
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).undo()), $ada9b1474dc4b958$var$button({
                title: "redo",
                part: "redo",
                class: "transparent",
                onClick: this.redo
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).redo()), $ada9b1474dc4b958$var$button({
                title: "copy as markdown",
                class: "transparent",
                onClick: this.copy
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).copy()), $ada9b1474dc4b958$var$button({
                title: "reload",
                class: "transparent",
                onClick: this.refreshRemote
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).refresh())))),
            $ada9b1474dc4b958$var$xinSlot({
                part: "sources",
                hidden: true
            })
        ];
    connectedCallback() {
        super.connectedCallback();
        const { sources: sources } = this.parts;
        this.initFromElements([
            ...sources.children
        ]);
        addEventListener("storage", this.remoteChange);
        // FIXME workaround for Quest 3
        this.interval = setInterval(this.remoteChange, 500);
        this.undoInterval = setInterval(this.updateUndo, 250);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const { storageKey: storageKey, remoteKey: remoteKey } = this;
        // FIXME workaround for Quest 3
        clearInterval(this.interval);
        clearInterval(this.undoInterval);
        localStorage.setItem(storageKey, JSON.stringify({
            remoteKey: remoteKey,
            sentAt: Date.now(),
            close: true
        }));
    }
    copy = ()=>{
        const js = this.js !== "" ? "```js\n" + this.js.trim() + "\n```\n" : "";
        const html = this.html !== "" ? "```html\n" + this.html.trim() + "\n```\n" : "";
        const css = this.css !== "" ? "```css\n" + this.css.trim() + "\n```\n" : "";
        navigator.clipboard.writeText(js + html + css);
    };
    toggleMaximize = ()=>{
        this.classList.toggle("-maximize");
    };
    get remoteKey() {
        return this.remoteId !== "" ? this.prefix + "-" + this.remoteId : this.prefix + "-" + this.uuid;
    }
    remoteChange = (event)=>{
        const data = localStorage.getItem(this.storageKey);
        if (event instanceof StorageEvent && event.key !== this.storageKey) return;
        if (data === null) return;
        const { remoteKey: remoteKey, sentAt: sentAt, css: css, html: html, js: js, close: close } = JSON.parse(data);
        // FIXME workaround for Quest
        if (sentAt <= this.lastUpdate) return;
        if (remoteKey !== this.remoteKey) return;
        if (close === true) window.close();
        console.log("received new code from remote", sentAt, this.lastUpdate);
        this.lastUpdate = sentAt;
        this.css = css;
        this.html = html;
        this.js = js;
        this.refresh();
    };
    showCode = ()=>{
        this.parts.codeEditors.hidden = false;
    };
    closeCode = ()=>{
        if (this.remoteId !== "") window.close();
        else this.parts.codeEditors.hidden = true;
    };
    openEditorWindow = ()=>{
        const { storageKey: storageKey, remoteKey: remoteKey, css: css, html: html, js: js, uuid: uuid, prefix: prefix } = this;
        const href = location.href.split("?")[0] + `?${prefix}=${uuid}`;
        localStorage.setItem(storageKey, JSON.stringify({
            remoteKey: remoteKey,
            sentAt: Date.now(),
            css: css,
            html: html,
            js: js
        }));
        window.open(href);
    };
    refreshRemote = ()=>{
        const { remoteKey: remoteKey, css: css, html: html, js: js } = this;
        localStorage.setItem(this.storageKey, JSON.stringify({
            remoteKey: remoteKey,
            sentAt: Date.now(),
            css: css,
            html: html,
            js: js
        }));
    };
    refresh = ()=>{
        if (this.remoteId !== "") return;
        const { example: example, style: style } = this.parts;
        const preview = $ada9b1474dc4b958$var$div({
            class: "preview"
        });
        preview.innerHTML = this.html;
        style.innerText = this.css;
        const oldPreview = example.querySelector(".preview");
        if (oldPreview) oldPreview.replaceWith(preview);
        else example.insertBefore(preview, this.parts.exampleWidgets);
        const context = {
            preview: preview,
            ...this.context
        };
        try {
            // @ts-expect-error ts is wrong and it makes me so mad
            const func = new $ada9b1474dc4b958$var$AsyncFunction(...Object.keys(context), this.js);
            func(...Object.values(context)).catch((err)=>console.error(err));
        } catch (e) {
            console.error(e);
            window.alert(`Error: ${e}, the console may have more information…`);
        }
    };
    initFromElements(elements) {
        for (const element of elements){
            element.hidden = true;
            const [mode, ...lines] = element.innerHTML.split("\n");
            if ([
                "js",
                "html",
                "css"
            ].includes(mode)) {
                const minIndex = lines.filter((line)=>line.trim() !== "").map((line)=>line.match(/^\s*/)[0].length).sort()[0];
                const source = (minIndex > 0 ? lines.map((line)=>line.substring(minIndex)) : lines).join("\n");
                this.parts[mode].value = source;
            }
        }
    }
    showDefaultTab() {
        const { editors: editors } = this.parts;
        if (this.js !== "") editors.value = 0;
        else if (this.html !== "") editors.value = 1;
        else if (this.css !== "") editors.value = 2;
    }
    render() {
        super.render();
        if (this.remoteId !== "") {
            const data = localStorage.getItem(this.storageKey);
            if (data !== null) {
                const { remoteKey: remoteKey, sentAt: sentAt, css: css, html: html, js: js } = JSON.parse(data);
                if (this.remoteKey !== remoteKey) return;
                this.lastUpdate = sentAt;
                this.css = css;
                this.html = html;
                this.js = js;
                this.parts.example.hidden = true;
                this.parts.codeEditors.hidden = false;
                this.classList.add("-maximize");
                this.updateUndo();
            }
        } else this.refresh();
    }
}
const $ada9b1474dc4b958$export$dafbe0fa988b899b = $ada9b1474dc4b958$export$41199f9ac14d8c08.elementCreator({
    tag: "xin-example"
});
function $ada9b1474dc4b958$export$afa6494eb589c19e(element) {
    const preElements = [
        ...element.querySelectorAll("pre")
    ].filter((pre)=>[
            "js",
            "html",
            "css",
            "json"
        ].includes(pre.innerText.split("\n")[0]));
    for(let i = 0; i < preElements.length; i++){
        const parts = [
            preElements[i]
        ];
        while(preElements[i].nextElementSibling === preElements[i + 1]){
            parts.push(preElements[i + 1]);
            i += 1;
        }
        const example = $ada9b1474dc4b958$export$dafbe0fa988b899b();
        element.insertBefore(example, parts[0]);
        example.initFromElements(parts);
    }
}
const $ada9b1474dc4b958$var$params = new URL(window.location.href).searchParams;
const $ada9b1474dc4b958$var$remoteId = $ada9b1474dc4b958$var$params.get("lx");
if ($ada9b1474dc4b958$var$remoteId) {
    document.title += " [code editor]";
    document.body.textContent = "";
    document.body.append($ada9b1474dc4b958$export$dafbe0fa988b899b({
        remoteId: $ada9b1474dc4b958$var$remoteId
    }));
}


var $6246d5006b5a56c3$exports = {};

$parcel$export($6246d5006b5a56c3$exports, "MAPSTYLES", () => $6246d5006b5a56c3$export$7d6f3ccbb0a81c30);
$parcel$export($6246d5006b5a56c3$exports, "MapBox", () => $6246d5006b5a56c3$export$f2ffec4d96a433ed);
$parcel$export($6246d5006b5a56c3$exports, "mapBox", () => $6246d5006b5a56c3$export$ca243e53be209efb);
/*!
# map

A [mapboxgl](https://docs.mapbox.com/mapbox-gl-js/api/) wrapper.

```html
<!-- please don't abuse my mapbox token -->
<xin-map
  style="width: 100%; height: 100%"
  coords="14.0093606,120.995083,17"
  token="pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA"
  map-style="mapbox://styles/mapbox/satellite-v9"
></xin-map>
```

There's no need to learn new APIs or write wrappers, just access the element's `map` property
and [use the standard mapbox APIs directly](https://docs.mapbox.com/).
*/ 

const $6246d5006b5a56c3$export$7d6f3ccbb0a81c30 = [
    {
        name: "streets",
        url: "mapbox://styles/mapbox/streets-v10"
    },
    {
        name: "outdoors",
        url: "mapbox://styles/mapbox/outdoors-v10"
    },
    {
        name: "light",
        url: "mapbox://styles/mapbox/light-v9"
    },
    {
        name: "dark",
        url: "mapbox://styles/mapbox/dark-v9"
    },
    {
        name: "satellite",
        url: "mapbox://styles/mapbox/satellite-v9"
    },
    {
        name: "sateliite + streets",
        url: "mapbox://styles/mapbox/satellite-streets-v10"
    },
    {
        name: "preview day",
        url: "mapbox://styles/mapbox/navigation-preview-day-v2"
    },
    {
        name: "preview night",
        url: "mapbox://styles/mapbox/navigation-preview-night-v2"
    },
    {
        name: "guidance day",
        url: "mapbox://styles/mapbox/navigation-guidance-day-v2"
    },
    {
        name: "guidance night",
        url: "mapbox://styles/mapbox/navigation-guidance-night-v2"
    }
];
const { div: $6246d5006b5a56c3$var$div } = (0, $hgUW1$elements);
class $6246d5006b5a56c3$export$f2ffec4d96a433ed extends (0, $hgUW1$Component) {
    coords = "65.01715565258993,25.48081004203459,12";
    content = $6246d5006b5a56c3$var$div({
        style: {
            width: "100%",
            height: "100%"
        }
    });
    get map() {
        return this._map;
    }
    mapStyle = $6246d5006b5a56c3$export$7d6f3ccbb0a81c30[0].url;
    token = "";
    static mapboxCSSAvailable;
    static mapboxAvailable;
    _map;
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            display: "inline-block",
            position: "relative",
            width: "400px",
            height: "400px",
            textAlign: "left"
        }
    });
    constructor(){
        super();
        this.initAttributes("coords", "token", "mapStyle");
        if ($6246d5006b5a56c3$export$f2ffec4d96a433ed.mapboxCSSAvailable === undefined) {
            $6246d5006b5a56c3$export$f2ffec4d96a433ed.mapboxCSSAvailable = (0, $5c31145f3e970423$export$63257fda812a683f)("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css").catch((e)=>{
                console.error("failed to load mapbox-gl.css", e);
            });
            $6246d5006b5a56c3$export$f2ffec4d96a433ed.mapboxAvailable = (0, $5c31145f3e970423$export$c6e082819e9a0330)("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").catch((e)=>{
                console.error("failed to load mapbox-gl.js", e);
            });
        }
    }
    connectedCallback() {
        super.connectedCallback();
        if (!this.token) console.error("mapbox requires an access token which you can provide via the token attribute");
    }
    render() {
        super.render();
        if (!this.token) return;
        const { div: div } = this.parts;
        const [long, lat, zoom] = this.coords.split(",").map((x)=>Number(x));
        if (this.map) this.map.remove();
        $6246d5006b5a56c3$export$f2ffec4d96a433ed.mapboxAvailable.then(({ mapboxgl: mapboxgl })=>{
            console.log("%cmapbox may complain about missing css -- don't panic!", "background: orange; color: black; padding: 0 5px;");
            mapboxgl.accessToken = this.token;
            this._map = new mapboxgl.Map({
                container: div,
                style: this.mapStyle,
                zoom: zoom,
                center: [
                    lat,
                    long
                ]
            });
            this._map.on("render", ()=>this._map.resize());
        });
    }
}
const $6246d5006b5a56c3$export$ca243e53be209efb = $6246d5006b5a56c3$export$f2ffec4d96a433ed.elementCreator({
    tag: "xin-map"
});


var $1b88c9cb596c3426$exports = {};

$parcel$export($1b88c9cb596c3426$exports, "MarkdownViewer", () => $1b88c9cb596c3426$export$575eb698d362902);
$parcel$export($1b88c9cb596c3426$exports, "markdownViewer", () => $1b88c9cb596c3426$export$305b975a891d0dfa);


/*!
# markdown

`<xin-md>` renders markdown using [marked](https://www.npmjs.com/package/marked).

`<xin-md>` renders [markdown](https://www.markdownguide.org/) anywhere, either using the
`src` attribute to load the file asynchronously, or rendering the text inside it.

```html
<xin-md>
## hello
world
</xin-md>
```
```css
xin-md {
  display: block;
  padding: var(--spacing);
}
```

Note that, by default, `<xin-md>` will use its `textContent` (not its `innerHTML`) as its source.

## rendering markdown from a url

Again, like an `<img>` tag, you can simply set a `<xin-md>`'s `src` attribute to a URL pointing
to markdown source and it will load it asynchronously and render it.

```
<xin-md src="/path/to/file.md">
```

## setting its `value`

Or, just set the element's `value` and it will render it for you. You can try
this in the console, e.g.

```
$('.preview xin-md').value = 'testing\n\n## this is a test'
```

## elements

`<xin-md>` also (optionally) allows the embedding of inline HTML elements without blocking markdown
rendering, so that you can embed specific elements while retaining markdown. You need to explicitly set
the `elements` property, and for markdown rendering not to be blocked, the html elements need to
start on a new line and not be indented. E.g.

```html
<xin-md elements>
<form>
### this is a form
<label>
fill in this field.
**It's important!**
<input>
</label>
</form>
</xin-md>
```

In this case `<xin-md>` uses its `innerHTML` and not its `textContent`.

## context and template variables

`<xin-md>` also supports **template** values. You need to provide data to the element in the form
of `context` (an arbitrary object, or a JSON string), and then embed the template text using
handlebars-style doubled curly braces, e.g. `{{path.to.value}}`.

If no value is found, the original text is passed through.

Finally, note that template substitution occurs *before* markdown transformation, which means you can
pass context data through to HTML elements.

```html
<xin-md
  elements
  context='{"title": "template example", "foo": {"bar": 17}, "nested": "*work*: {{foo.bar}}"}'
>
## {{title}}

The magic number is <input type="number" value={{foo.bar}}>

Oh, and nested templates {{nested}}.
</xin-md>
```
*/ function $1b88c9cb596c3426$var$populate(basePath, source) {
    if (source == null) source = "";
    else if (typeof source !== "string") source = String(source);
    return source.replace(/\{\{([^}]+)\}\}/g, (original, prop)=>{
        const value = (0, $hgUW1$xin)[`${basePath}${prop.startsWith("[") ? prop : "." + prop}`];
        return value === undefined ? original : $1b88c9cb596c3426$var$populate(basePath, String(value));
    });
}
class $1b88c9cb596c3426$export$575eb698d362902 extends (0, $hgUW1$Component) {
    src = "";
    value = "";
    content = null;
    elements = false;
    context = {};
    constructor(){
        super();
        this.initAttributes("src", "elements", "context");
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.src !== "") (async ()=>{
            const request = await fetch(this.src);
            this.value = await request.text();
        })();
        else if (this.value === "") {
            if (this.elements) this.value = this.innerHTML;
            else this.value = this.textContent != null ? this.textContent : "";
        }
    }
    didRender = ()=>{};
    render() {
        super.render();
        (0, $hgUW1$xin)[this.instanceId] = typeof this.context === "string" ? JSON.parse(this.context) : this.context;
        const source = $1b88c9cb596c3426$var$populate(this.instanceId, this.value);
        if (this.elements) {
            const chunks = source.split("\n").reduce((chunks, line)=>{
                if (line.startsWith("<") || chunks.length === 0) chunks.push(line);
                else {
                    const lastChunk = chunks[chunks.length - 1];
                    if (!lastChunk.startsWith("<") || !lastChunk.endsWith(">")) chunks[chunks.length - 1] += "\n" + line;
                    else chunks.push(line);
                }
                return chunks;
            }, []);
            this.innerHTML = chunks.map((chunk)=>chunk.startsWith("<") && chunk.endsWith(">") ? chunk : (0, $hgUW1$marked)(chunk, {
                    mangle: false,
                    headerIds: false
                })).join("");
        } else this.innerHTML = (0, $hgUW1$marked)(source, {
            mangle: false,
            headerIds: false
        });
        this.didRender();
    }
}
const $1b88c9cb596c3426$export$305b975a891d0dfa = $1b88c9cb596c3426$export$575eb698d362902.elementCreator({
    tag: "xin-md"
});


var $52362c0fb5690a1b$exports = {};

$parcel$export($52362c0fb5690a1b$exports, "popFloat", () => $52362c0fb5690a1b$export$81725bf7d66575d3);
$parcel$export($52362c0fb5690a1b$exports, "positionFloat", () => $52362c0fb5690a1b$export$90a23b8db6abf910);
/*!
# popFloat

There are so many cases in user-interfaces where it's useful to pop-up a floating
user interface element that a simple and reliable way of doing this seems like
a good idea.

The problem with many such approaches is that they assume a highly specific
use-case (e.g. popup menu or combo box) and while meeting the creator's intended
purpose admirably, turn out to have some annoying limitation that prevents them
handling the specific case at hand.

```js
const { popFloat, positionFloat } = xinjsui
const { button } = xinjs.elements
const grid = preview.querySelector('.grid')

grid.addEventListener('click', (event) => {
  const { target } = event
  const float = preview.querySelector('xin-float')
  if (float === null) {
    // create and position a float
    preview.append(
      popFloat({
        content: [
          'hello, I am a float',
          button('close me', {
            onClick(event){
              event.target.closest('xin-float').remove()
            }
          })
        ],
        target,
        position: target.dataset.float
      })
    )
  } else {
    // position an existing float
    positionFloat(float, target, target.dataset.float)
  }
})
```
```html
<h2>Pop Float Demo</h2>
<div class="grid">
  <button data-float="nw">nw</button>
  <button data-float="n">n</button>
  <button data-float="ne">ne</button>
  <button data-float="w">w</button>
  <button data-float="auto">auto</button>
  <button data-float="e">e</button>
  <button data-float="sw">sw</button>
  <button data-float="s">s</button>
  <button data-float="se">se</button>
</div>
```
```css
.preview .grid {
  display: grid;
  grid-template-columns: 80px 80px 80px;
}

.preview xin-float {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px;
  background: white;
  box-shadow: 2px 10px 5px #0004;
}
```

## popFloat

```
export interface PopFloatOptions {
  content: HTMLElement | ElementPart[]
  target: HTMLElement
  position?: FloatPosition
}

export const popFloat = (options: PopFloatOptions): XinFloat
```

Create a `<xin-float>` with the content provided, positioned as specified (or automatically).

## positionFloat

```
export const positionFloat = (
  element: HTMLElement,
  target: HTMLElement,
  position?: FloatPosition
): void
```

This allows you to, for example, provide a global menu that can be used on any element
instead of needing to have a whole instance of the menu wrapped around every instance
of the thing you want the menu to affect (a common anti-pattern of front-end frameworks).

## FloatPosition

```
export type FloatPosition =
| 'n'
| 's'
| 'e'
| 'w'
| 'ne'
| 'nw'
| 'se'
| 'sw'
| 'auto'
```

*/ 

const $52362c0fb5690a1b$export$81725bf7d66575d3 = (options)=>{
    const { content: content, target: target, position: position } = options;
    const float = Array.isArray(content) ? (0, $ddbe66d066773fc1$export$aeb0f03cef938121)(...content) : (0, $ddbe66d066773fc1$export$aeb0f03cef938121)(content);
    $52362c0fb5690a1b$export$90a23b8db6abf910(float, target, position);
    document.body.append(float);
    return float;
};
const $52362c0fb5690a1b$export$90a23b8db6abf910 = (element, target, position)=>{
    {
        const { position: position } = getComputedStyle(element);
        if (position !== "fixed") element.style.position = "fixed";
        (0, $5265d118b5240170$export$1937b0002823d405)(element);
    }
    const { left: left, top: top, width: width, height: height } = target.getBoundingClientRect();
    const cx = left + width * 0.5;
    const cy = top + height * 0.5;
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (position === "auto" || position === undefined) position = (cy < h * 0.5 ? "s" : "n") + (cx < w * 0.5 ? "e" : "w");
    element.style.top = element.style.left = element.style.right = element.style.bottom = element.style.transform = "";
    if (position.length === 2) {
        if (position.includes("n")) element.style.bottom = (h - top).toFixed(2) + "px";
        else if (position.includes("s")) element.style.top = (top + height).toFixed(2) + "px";
        if (position.includes("e")) element.style.left = left.toFixed(2) + "px";
        else if (position.includes("w")) element.style.right = (w - left - width).toFixed(2) + "px";
        element.style.transform = "";
    } else if (position === "n") {
        element.style.bottom = (h - top).toFixed(2) + "px";
        element.style.left = cx.toFixed(2) + "px";
        element.style.transform = "translateX(-50%)";
    } else if (position === "s") {
        element.style.top = (top + height).toFixed(2) + "px";
        element.style.left = cx.toFixed(2) + "px";
        element.style.transform = "translateX(-50%)";
    } else if (position === "e") {
        element.style.left = (left + width).toFixed(2) + "px";
        element.style.top = cy.toFixed(2) + "px";
        element.style.transform = "translateY(-50%)";
    } else if (position === "w") {
        element.style.right = (w - left).toFixed(2) + "px";
        element.style.top = cy.toFixed(2) + "px";
        element.style.transform = "translateY(-50%)";
    }
};


var $815deb6062b0b31b$exports = {};

$parcel$export($815deb6062b0b31b$exports, "blockStyle", () => $815deb6062b0b31b$export$94309935dd6eab19);
$parcel$export($815deb6062b0b31b$exports, "spacer", () => $815deb6062b0b31b$export$8cc075c801fd6817);
$parcel$export($815deb6062b0b31b$exports, "elastic", () => $815deb6062b0b31b$export$e3f8198a677f57c2);
$parcel$export($815deb6062b0b31b$exports, "commandButton", () => $815deb6062b0b31b$export$74540e56d8cdd242);
$parcel$export($815deb6062b0b31b$exports, "richTextWidgets", () => $815deb6062b0b31b$export$8ed2ffe5d58aaa75);
$parcel$export($815deb6062b0b31b$exports, "RichText", () => $815deb6062b0b31b$export$f284d8638abd8920);
$parcel$export($815deb6062b0b31b$exports, "richText", () => $815deb6062b0b31b$export$7bcc4193ad80bf91);
/*!
# word (rich text editor)

`<xin-word>` is a simple and easily extensible `document.execCommand` WYSIWYG editor with some conveniences.

```html
<xin-word widgets="minimal">
<h3>Heading</h3>
<p>And some <b>text</b></p>
</xin-word>
```
```css
xin-word {
  background: white;
}

xin-word [part="toolbar"] {
  background: #f8f8f8;
}

xin-word [part="doc"] {
  padding: 20px;
}
```

By default, `<xin-word>` treats its initial contents as its document, but you can also set (and get)
its `value`.

## toolbar

`<xin-word>` elements have a `toolbar` slot (actually a xin-slot because it doesn't use
the shadowDOM).

If you set the `widgets` attribute to `default` or `minimal` you will get a toolbar
for free. Or you can add your own custom widgets.

## helper functions

A number of helper functions are available, including:

- `commandButton(title: string, command: string, iconClass: string)`
- `blockStyle(options: Array<{caption: string, tagType: string}>)`
- `spacer(width = '10px')`
- `elastic(width = '10px')`

These each create a toolbar widget. A `blockStyle`-generated `<select>` element will
automatically have its value changed based on the current selection.

## properties

A `<xin-word>` element also has `selectedText` and `selectedBlocks` properties, allowing
you to easily perform operations on text selections, and a `selectionChange` callback (which
simply passes through document `selectionchange` events, but also passes a reference to
the `<xin-word>` component).
*/ 

const { style: $815deb6062b0b31b$var$style, xinSlot: $815deb6062b0b31b$var$xinSlot, div: $815deb6062b0b31b$var$div, select: $815deb6062b0b31b$var$select, fragment: $815deb6062b0b31b$var$fragment, option: $815deb6062b0b31b$var$option, button: $815deb6062b0b31b$var$button, span: $815deb6062b0b31b$var$span } = (0, $hgUW1$elements);
document.head.append($815deb6062b0b31b$var$style({
    id: "xin-word"
}, `xin-word {
  display: flex;
  flex-direction: column;
  height: 100%;
}
xin-word [part="toolbar"] {
  padding: 4px;
  display: flex;
  gap: 0px;
  flex: 0 0 auto;
  flex-wrap: wrap;
}
`));
const $815deb6062b0b31b$var$blockStyles = [
    {
        caption: "Title",
        tagType: "H1"
    },
    {
        caption: "Heading",
        tagType: "H2"
    },
    {
        caption: "Subheading",
        tagType: "H3"
    },
    {
        caption: "Minor heading",
        tagType: "H4"
    },
    {
        caption: "Body",
        tagType: "P"
    },
    {
        caption: "Code Block",
        tagType: "PRE"
    }
];
function $815deb6062b0b31b$export$94309935dd6eab19(options = $815deb6062b0b31b$var$blockStyles) {
    return $815deb6062b0b31b$var$fragment($815deb6062b0b31b$var$select({
        title: "paragraph style",
        slot: "toolbar",
        class: "block-style"
    }, ...options.map(({ caption: caption, tagType: tagType })=>$815deb6062b0b31b$var$option(caption, {
            value: `formatBlock,${tagType}`
        }))), (0, $fef058b85aa29b7a$export$df03f54e09e486fa).chevronDown());
}
function $815deb6062b0b31b$export$8cc075c801fd6817(width = "10px") {
    return $815deb6062b0b31b$var$span({
        slot: "toolbar",
        style: {
            flex: `0 0 ${width}`,
            content: " "
        }
    });
}
function $815deb6062b0b31b$export$e3f8198a677f57c2(width = "10px") {
    return $815deb6062b0b31b$var$span({
        slot: "toolbar",
        style: {
            flex: `0 0 ${width}`,
            content: " "
        }
    });
}
function $815deb6062b0b31b$export$74540e56d8cdd242(title, dataCommand, icon) {
    return $815deb6062b0b31b$var$button({
        slot: "toolbar",
        dataCommand: dataCommand,
        title: title
    }, icon);
}
const $815deb6062b0b31b$var$paragraphStyleWidgets = ()=>[
        $815deb6062b0b31b$export$74540e56d8cdd242("left-justify", "justifyLeft", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).alignLeft()),
        $815deb6062b0b31b$export$74540e56d8cdd242("center", "justifyCenter", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).alignCenter()),
        $815deb6062b0b31b$export$74540e56d8cdd242("right-justify", "justifyRight", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).alignRight()),
        $815deb6062b0b31b$export$8cc075c801fd6817(),
        $815deb6062b0b31b$export$74540e56d8cdd242("bullet list", "insertUnorderedList", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).listBullet()),
        $815deb6062b0b31b$export$74540e56d8cdd242("numbered list", "insertOrderedList", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).listNumber()),
        $815deb6062b0b31b$export$8cc075c801fd6817(),
        $815deb6062b0b31b$export$74540e56d8cdd242("indent", "indent", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).blockIndent()),
        $815deb6062b0b31b$export$74540e56d8cdd242("indent", "outdent", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).blockOutdent())
    ];
const $815deb6062b0b31b$var$characterStyleWidgets = ()=>[
        $815deb6062b0b31b$export$74540e56d8cdd242("bold", "bold", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).fontBold()),
        $815deb6062b0b31b$export$74540e56d8cdd242("italic", "italic", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).fontItalic()),
        $815deb6062b0b31b$export$74540e56d8cdd242("underline", "underline", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).fontUnderline())
    ];
const $815deb6062b0b31b$var$minimalWidgets = ()=>[
        $815deb6062b0b31b$export$94309935dd6eab19(),
        $815deb6062b0b31b$export$8cc075c801fd6817(),
        ...$815deb6062b0b31b$var$characterStyleWidgets()
    ];
const $815deb6062b0b31b$export$8ed2ffe5d58aaa75 = ()=>[
        $815deb6062b0b31b$export$94309935dd6eab19(),
        $815deb6062b0b31b$export$8cc075c801fd6817(),
        ...$815deb6062b0b31b$var$paragraphStyleWidgets(),
        $815deb6062b0b31b$export$8cc075c801fd6817(),
        ...$815deb6062b0b31b$var$characterStyleWidgets()
    ];
class $815deb6062b0b31b$export$f284d8638abd8920 extends (0, $hgUW1$Component) {
    widgets = "default";
    get value() {
        return this.parts.doc.innerHTML;
    }
    set value(docHtml) {
        this.parts.doc.innerHTML = docHtml;
    }
    blockElement(elt) {
        const { doc: doc } = this.parts;
        while(elt.parentElement !== null && elt.parentElement !== doc)elt = elt.parentElement;
        return elt.parentElement === doc ? elt : undefined;
    }
    get selectedBlocks() {
        const { doc: doc } = this.parts;
        const selObject = window.getSelection();
        if (selObject === null) return [];
        const blocks = [];
        for(let i = 0; i < selObject.rangeCount; i++){
            const range = selObject.getRangeAt(i);
            if (!doc.contains(range.commonAncestorContainer)) continue;
            let block = this.blockElement(range.startContainer);
            const lastBlock = this.blockElement(range.endContainer);
            blocks.push(block);
            while(block !== lastBlock && block !== null){
                block = block.nextElementSibling;
                blocks.push(block);
            }
        }
        return blocks;
    }
    get selectedText() {
        const selObject = window.getSelection();
        if (selObject === null) return "";
        return this.selectedBlocks.length ? selObject.toString() : "";
    }
    selectionChange = ()=>{};
    content = [
        $815deb6062b0b31b$var$xinSlot({
            name: "toolbar",
            part: "toolbar"
        }),
        $815deb6062b0b31b$var$div({
            part: "doc",
            contenteditable: true,
            style: {
                flex: "1 1 auto",
                outline: "none"
            }
        }),
        $815deb6062b0b31b$var$xinSlot({
            part: "content"
        })
    ];
    constructor(){
        super();
        this.initAttributes("widgets");
    }
    doCommand(command) {
        if (command === undefined) return;
        const args = command.split(",");
        console.log("execCommand", args[0], false, ...args.slice(1));
        document.execCommand(args[0], false, ...args.slice(1));
    }
    handleSelectChange = (event)=>{
        // @ts-expect-error Typescript is wrong about event.target lacking closest
        const select = event.target.closest("select");
        if (select == null) return;
        this.doCommand(select.value);
    };
    handleButtonClick = (event)=>{
        // @ts-expect-error Typescript is wrong about event.target lacking closest
        const button = event.target.closest("button");
        if (button == null) return;
        this.doCommand(button.dataset.command);
    };
    updateBlockStyle() {
        const select = this.parts.toolbar.querySelector("select.block-style");
        if (select === null) return;
        let blockTags = this.selectedBlocks.map((block)=>block.tagName);
        blockTags = [
            ...new Set(blockTags)
        ];
        select.value = blockTags.length === 1 ? `formatBlock,${blockTags[0]}` : "";
    }
    connectedCallback() {
        super.connectedCallback();
        const { doc: doc, content: content, toolbar: toolbar } = this.parts;
        if (content.innerHTML !== "" && doc.innerHTML === "") {
            doc.innerHTML = content.innerHTML;
            content.innerHTML = "";
        }
        content.style.display = "none";
        toolbar.addEventListener("click", this.handleButtonClick);
        toolbar.addEventListener("change", this.handleSelectChange);
        document.addEventListener("selectionchange", (event)=>{
            this.updateBlockStyle();
            this.selectionChange(event, this);
        });
    }
    render() {
        const { toolbar: toolbar } = this.parts;
        super.render();
        if (toolbar.children.length === 0) switch(this.widgets){
            case "minimal":
                toolbar.append(...$815deb6062b0b31b$var$minimalWidgets());
                break;
            case "default":
                toolbar.append(...$815deb6062b0b31b$export$8ed2ffe5d58aaa75());
                break;
        }
    }
}
const $815deb6062b0b31b$export$7bcc4193ad80bf91 = $815deb6062b0b31b$export$f284d8638abd8920.elementCreator({
    tag: "xin-word"
});


var $b9e5aa5581e8f051$exports = {};

$parcel$export($b9e5aa5581e8f051$exports, "SideNav", () => $b9e5aa5581e8f051$export$1a35787d6353cf6a);
$parcel$export($b9e5aa5581e8f051$exports, "sideNav", () => $b9e5aa5581e8f051$export$938418df2b06cb50);
/*!
# sidebar

The default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small
screens, and display the sidebar when space is available (with the user able to explicitly hide
the sidebar if so desired). `<xin-sidenav>` provides this functionality.

`<xin-sidenav>` is used to handle the layout of the documentation tab panel.

`<xin-sidenav>`'s behavior is controlled by two attributes, `minSize` is the point at which it will toggle between showing the navigation
sidebar and content, while `navSize` is the width of the sidebar. You can interrogate its `compact` property to find out if it's
currently in `compact` form.
*/ 
const { slot: $b9e5aa5581e8f051$var$slot } = (0, $hgUW1$elements);
class $b9e5aa5581e8f051$export$1a35787d6353cf6a extends (0, $hgUW1$Component) {
    minSize = 800;
    navSize = 200;
    compact = false;
    content = [
        $b9e5aa5581e8f051$var$slot({
            name: "nav"
        }),
        $b9e5aa5581e8f051$var$slot({
            part: "content"
        })
    ];
    _contentVisible = false;
    get contentVisible() {
        return this._contentVisible;
    }
    set contentVisible(visible) {
        this._contentVisible = visible;
        this.queueRender();
    }
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            display: "grid",
            gridTemplateColumns: `${(0, $hgUW1$varDefault).navWidth("50%")} ${(0, $hgUW1$varDefault).contentWidth("50%")}`,
            gridTemplateRows: "100%",
            position: "relative",
            margin: (0, $hgUW1$varDefault).margin("0 0 0 -100%"),
            transition: (0, $hgUW1$varDefault).sideNavTransition("0.25s ease-out")
        },
        ":host slot": {
            position: "relative"
        },
        ":host slot:not([name])": {
            display: "block"
        },
        ':host slot[name="nav"]': {
            display: "block"
        }
    });
    onResize = ()=>{
        const { content: content } = this.parts;
        const parent = this.offsetParent;
        if (parent === null) return;
        this.compact = parent.offsetWidth < this.minSize;
        const empty = [
            ...this.childNodes
        ].find((node)=>node instanceof Element ? node.getAttribute("slot") !== "nav" : true) === undefined;
        if (empty) {
            this.style.setProperty("--nav-width", "100%");
            this.style.setProperty("--content-width", "0%");
            return;
        }
        if (!this.compact) {
            content.classList.add("-xin-sidenav-visible");
            this.style.setProperty("--nav-width", `${this.navSize}px`);
            this.style.setProperty("--content-width", `calc(100% - ${this.navSize}px)`);
            this.style.setProperty("--margin", "0");
        } else {
            content.classList.remove("-xin-sidenav-visible");
            this.style.setProperty("--nav-width", "50%");
            this.style.setProperty("--content-width", "50%");
            if (this.contentVisible) this.style.setProperty("--margin", "0 0 0 -100%");
            else this.style.setProperty("--margin", "0 -100% 0 0");
        }
    };
    observer;
    connectedCallback() {
        super.connectedCallback();
        this.contentVisible = this.parts.content.childNodes.length === 0;
        globalThis.addEventListener("resize", this.onResize);
        this.observer = new MutationObserver(this.onResize);
        this.observer.observe(this, {
            childList: true
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.observer.disconnect();
    }
    constructor(){
        super();
        this.initAttributes("minSize", "navSize", "compact");
    }
    render() {
        super.render();
        this.onResize();
    }
}
const $b9e5aa5581e8f051$export$938418df2b06cb50 = $b9e5aa5581e8f051$export$1a35787d6353cf6a.elementCreator({
    tag: "xin-sidenav"
});


var $0f2017ffca44b547$exports = {};

$parcel$export($0f2017ffca44b547$exports, "SizeBreak", () => $0f2017ffca44b547$export$7140c0f3c1b65d3f);
$parcel$export($0f2017ffca44b547$exports, "sizeBreak", () => $0f2017ffca44b547$export$96370210d2ca0fff);

const { slot: $0f2017ffca44b547$var$slot } = (0, $hgUW1$elements);
class $0f2017ffca44b547$export$7140c0f3c1b65d3f extends (0, $hgUW1$Component) {
    minWidth = 0;
    minHeight = 0;
    value = "normal";
    content = [
        $0f2017ffca44b547$var$slot({
            part: "normal"
        }),
        $0f2017ffca44b547$var$slot({
            part: "small",
            name: "small"
        })
    ];
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            display: "inline-block",
            position: "relative"
        }
    });
    constructor(){
        super();
        this.initAttributes("minWidth", "minHeight");
    }
    onResize = ()=>{
        const { normal: normal, small: small } = this.parts;
        const parent = this.offsetParent;
        if (!(parent instanceof HTMLElement)) return;
        else if (parent.offsetWidth < this.minWidth || parent.offsetHeight < this.minHeight) {
            normal.hidden = true;
            small.hidden = false;
            this.value = "small";
        } else {
            normal.hidden = false;
            small.hidden = true;
            this.value = "normal";
        }
    };
    // TODO trigger a resize event when an ancestor element
    // is inserted or moved into the DOM.
    connectedCallback() {
        super.connectedCallback();
        globalThis.addEventListener("resize", this.onResize);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        globalThis.removeEventListener("resize", this.onResize);
    }
}
const $0f2017ffca44b547$export$96370210d2ca0fff = $0f2017ffca44b547$export$7140c0f3c1b65d3f.elementCreator({
    tag: "xin-sizebreak"
});


var $862666af3c1254c2$exports = {};

$parcel$export($862666af3c1254c2$exports, "XinSizer", () => $862666af3c1254c2$export$5b41f1c4a4393ecb);
$parcel$export($862666af3c1254c2$exports, "xinSizer", () => $862666af3c1254c2$export$2404b448600702b8);
/*!
# sizer

This is a super-simple component that you can put in a fixed size element allowing it to be resized
from the bottom-right.

```html
<div>
  <xin-sizer></xin-sizer>
</div>
```
```css
.preview div {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 100px;
  background: #ff02;
  border: 1px solid #555;
}
```

*/ 


class $862666af3c1254c2$export$5b41f1c4a4393ecb extends (0, $hgUW1$Component) {
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            display: "block",
            position: "absolute",
            bottom: -7,
            right: -7,
            padding: 14,
            width: 44,
            height: 44,
            opacity: 0.25,
            transition: "opacity 0.25s ease-out"
        },
        ":host(:hover)": {
            opacity: 0.5
        },
        ":host svg": {
            width: 16,
            height: 16
        }
    });
    content = (0, $fef058b85aa29b7a$export$df03f54e09e486fa).resize();
    resizeParent = (event)=>{
        const parent = this.parentElement;
        console.log(parent);
        const w = parent.offsetWidth;
        const h = parent.offsetHeight;
        parent.style.left = parent.offsetLeft + "px";
        parent.style.top = parent.offsetTop + "px";
        parent.style.bottom = "";
        parent.style.right = "";
        (0, $5265d118b5240170$export$c947e3cd16175f27)(event, (dx, dy, event)=>{
            parent.style.width = Math.max(200, w + dx) + "px";
            parent.style.height = Math.max(100, h + dy) + "px";
            if (event.type === "mouseup") return true;
        }, "nwse-resize");
    };
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("mousedown", this.resizeParent);
        this.addEventListener("touchstart", this.resizeParent);
    }
}
const $862666af3c1254c2$export$2404b448600702b8 = $862666af3c1254c2$export$5b41f1c4a4393ecb.elementCreator({
    tag: "xin-sizer"
});





function $5a28660a6cbe2731$export$b37fb374f2e92eb6(sortValuator, ascending = true) {
    return (p, q)=>{
        const pSort = sortValuator(p);
        const qSort = sortValuator(q);
        for(const i in pSort)if (pSort[i] !== qSort[i]) {
            const isAscending = Array.isArray(ascending) ? ascending[i] !== false : ascending;
            return isAscending ? pSort[i] > qSort[i] ? 1 : -1 : pSort[i] > qSort[i] ? -1 : 1;
        }
        return 0;
    };
}




export {$5265d118b5240170$export$c947e3cd16175f27 as trackDrag, $5265d118b5240170$export$1937b0002823d405 as bringToFront, $5265d118b5240170$export$f3caf27c1d0ebf0c as findHighestZ, $5c31145f3e970423$export$c6e082819e9a0330 as scriptTag, $5c31145f3e970423$export$63257fda812a683f as styleSheet, $5a28660a6cbe2731$export$b37fb374f2e92eb6 as makeSorter, $86ec44903a84f851$export$6aacb15d82c1f62a as AbTest, $86ec44903a84f851$export$f3d50d6cab4ec980 as abTest, $ef1971ff775ba547$export$1bc633d0db17d4e1 as B3d, $ef1971ff775ba547$export$d0bb57305ce055c9 as b3d, $59f50bee37676c09$export$c74d6d817c60b9e6 as BodymovinPlayer, $59f50bee37676c09$export$d75ad8f79fe096cb as bodymovinPlayer, $8a70bd76f9b7e656$export$b7127187684f7150 as CodeEditor, $8a70bd76f9b7e656$export$d89b6f4d34274146 as codeEditor, $e6e19030d0c18d6f$export$df30df7ec97b32b5 as DataTable, $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0 as dataTable, $46dc716dd2cf5925$export$16a138bde9d9de87 as availableFilters, $46dc716dd2cf5925$export$b7838412d9f17b13 as FilterPart, $46dc716dd2cf5925$export$2237595b531763d7 as filterPart, $46dc716dd2cf5925$export$afb49bb3b076029e as FilterBuilder, $46dc716dd2cf5925$export$8ca73b4108207c1f as filterBuilder, $ddbe66d066773fc1$export$dfef4eaf9958ab9d as XinFloat, $ddbe66d066773fc1$export$aeb0f03cef938121 as xinFloat, $f78058ae816e78a2$export$f0aa272ac8112266 as XinField, $f78058ae816e78a2$export$470ae7cc5ec6d2a as XinForm, $f78058ae816e78a2$export$1e17fa265ee93a1d as xinField, $f78058ae816e78a2$export$ab08039c332a0d0e as xinForm, $534e33669d896770$export$3ba85dfa569d0a2 as gamepadState, $534e33669d896770$export$12a9b81fff6446ce as gamepadText, $534e33669d896770$export$26767cb0bb5a32c4 as xrControllers, $534e33669d896770$export$eecbd93f0e9594d8 as xrControllersText, $fef058b85aa29b7a$export$c07bb2d77ca8d15 as defineIcon, $fef058b85aa29b7a$export$c12d014da9da5ff8 as svg2DataUrl, $fef058b85aa29b7a$export$df03f54e09e486fa as icons, $fef058b85aa29b7a$export$dbcb8210e8a983ed as SvgIcon, $fef058b85aa29b7a$export$8c90725d55a8eef as svgIcon, $ada9b1474dc4b958$export$41199f9ac14d8c08 as LiveExample, $ada9b1474dc4b958$export$dafbe0fa988b899b as liveExample, $ada9b1474dc4b958$export$afa6494eb589c19e as makeExamplesLive, $6246d5006b5a56c3$export$7d6f3ccbb0a81c30 as MAPSTYLES, $6246d5006b5a56c3$export$f2ffec4d96a433ed as MapBox, $6246d5006b5a56c3$export$ca243e53be209efb as mapBox, $1b88c9cb596c3426$export$575eb698d362902 as MarkdownViewer, $1b88c9cb596c3426$export$305b975a891d0dfa as markdownViewer, $52362c0fb5690a1b$export$81725bf7d66575d3 as popFloat, $52362c0fb5690a1b$export$90a23b8db6abf910 as positionFloat, $815deb6062b0b31b$export$94309935dd6eab19 as blockStyle, $815deb6062b0b31b$export$8cc075c801fd6817 as spacer, $815deb6062b0b31b$export$e3f8198a677f57c2 as elastic, $815deb6062b0b31b$export$74540e56d8cdd242 as commandButton, $815deb6062b0b31b$export$8ed2ffe5d58aaa75 as richTextWidgets, $815deb6062b0b31b$export$f284d8638abd8920 as RichText, $815deb6062b0b31b$export$7bcc4193ad80bf91 as richText, $b9e5aa5581e8f051$export$1a35787d6353cf6a as SideNav, $b9e5aa5581e8f051$export$938418df2b06cb50 as sideNav, $0f2017ffca44b547$export$7140c0f3c1b65d3f as SizeBreak, $0f2017ffca44b547$export$96370210d2ca0fff as sizeBreak, $862666af3c1254c2$export$5b41f1c4a4393ecb as XinSizer, $862666af3c1254c2$export$2404b448600702b8 as xinSizer, $6bbe441346901d5a$export$a3a7254f7f149b03 as TabSelector, $6bbe441346901d5a$export$a932f737dcd864a2 as tabSelector};
//# sourceMappingURL=index.js.map
