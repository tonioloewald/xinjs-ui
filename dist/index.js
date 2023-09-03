import * as $hgUW1$xinjs from "xinjs";
import {marked as $hgUW1$marked} from "marked";

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $149c1bd638913645$exports = {};

$parcel$export($149c1bd638913645$exports, "trackDrag", () => $5265d118b5240170$export$c947e3cd16175f27);
$parcel$export($149c1bd638913645$exports, "scriptTag", () => $5c31145f3e970423$export$c6e082819e9a0330);
$parcel$export($149c1bd638913645$exports, "styleSheet", () => $5c31145f3e970423$export$63257fda812a683f);
$parcel$export($149c1bd638913645$exports, "makeSorter", () => $5a28660a6cbe2731$export$b37fb374f2e92eb6);
var $ef1971ff775ba547$exports = {};

$parcel$export($ef1971ff775ba547$exports, "B3d", () => $ef1971ff775ba547$export$1bc633d0db17d4e1);
$parcel$export($ef1971ff775ba547$exports, "b3d", () => $ef1971ff775ba547$export$d0bb57305ce055c9);
/*!
# `<b-3d>`

A thin wrapper around [babylonjs](https://www.babylonjs.com/).

A `<b-3d>` element is initialized with an `engine`, `canvas`, `scene`, and update-loop.

You can access the `scene` and `engine` properties (see the example). You can also
assign `onSceneCreated` and `onUpdate` callbacks that will be executed when the scene is
first initialized and before each update, respectively.

By default, this component loads `babylon.max.js` from the `babylonjs` cdn, but if
BABYLON is already defined then it will use that.

If you want to load `gltf` content, you should load `https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js`.

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
/*!
# scriptTag & styleSheet

## scriptTag

If you need to load an old school (cjs) javascript library via cdn (both mapboxgl and bodymovin are
fine examples) then use these two functions. They return promises that resolve `globalThis` when the
module in question has loaded and otherwise behave as much like aync `import()` as possible.

Using `scriptTag`:

```html
<canvas></canvas>
```
```css
canvas {
  width: 100%;
  height: 100%;
}
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

`<bodymovin-player>` is implemented in such a way that if you've preloaded the module
(e.g. via a script tag or packaging) it won't load it again, which affords offline
use.

There's no point for `<map-box>` since it won't work without connectivity anyway.

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


class $ef1971ff775ba547$export$1bc633d0db17d4e1 extends (0, $hgUW1$Component) {
    babylonReady;
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            display: "block",
            position: "relative"
        },
        ":host canvas": {
            width: "100%",
            height: "100%"
        }
    });
    content = (0, $hgUW1$elements).canvas({
        part: "canvas"
    });
    constructor(){
        super();
        this.babylonReady = (async ()=>{
            const { BABYLON: BABYLON } = await (0, $5c31145f3e970423$export$c6e082819e9a0330)("https://cdn.babylonjs.com/babylon.max.js", "BABYLON");
            return BABYLON;
        })();
    }
    scene;
    engine;
    onSceneCreated;
    onUpdate;
    update = ()=>{
        if (this.scene) {
            if (this.onUpdate !== undefined) this.onUpdate();
            this.scene.render();
        }
    };
    onResize() {
        if (this.engine) this.engine.resize();
    }
    connectedCallback() {
        super.connectedCallback();
        const { canvas: canvas } = this.parts;
        this.babylonReady.then((BABYLON)=>{
            this.engine = new BABYLON.Engine(canvas, true);
            this.scene = new BABYLON.Scene(this.engine);
            if (this.onSceneCreated) this.onSceneCreated();
            this.engine.runRenderLoop(this.update);
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.engine.stopRenderLoop(this.update);
    }
}
const $ef1971ff775ba547$export$d0bb57305ce055c9 = $ef1971ff775ba547$export$1bc633d0db17d4e1.elementCreator({
    tag: "b-3d"
});


var $59f50bee37676c09$exports = {};

$parcel$export($59f50bee37676c09$exports, "BodymovinPlayer", () => $59f50bee37676c09$export$c74d6d817c60b9e6);
$parcel$export($59f50bee37676c09$exports, "bodymovinPlayer", () => $59f50bee37676c09$export$d75ad8f79fe096cb);
// https://lottiefiles.github.io/lottie-docs/advanced_interactions/


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
        } else console.log("%c<bodymovin-player>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.", "color: #44f; background: #fff; padding: 0 5px", "color: default", "color: #44f; background: #fff; padding: 0 5px", "color: default", "color: #44f; background: #fff; padding: 0 5px", "color: default");
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
    tag: "bodymovin-player"
});


var $8a70bd76f9b7e656$exports = {};

$parcel$export($8a70bd76f9b7e656$exports, "CodeEditor", () => $8a70bd76f9b7e656$export$b7127187684f7150);
$parcel$export($8a70bd76f9b7e656$exports, "codeEditor", () => $8a70bd76f9b7e656$export$d89b6f4d34274146);
/*!
# `<code-editor>`

Sometimes, it's nice to be able to just toss a code-editor in a web-page. `<code-editor>` is a thin wrapper around the [ACE Editor](https://ace.c9.io/). 

`<code-editor>`'s `value` is the code it contains. Its `mode` attribute sets the language, and you can further configure
the ACE editor instance via its `options` property.

```html
<code-editor style="width: 100%; height: 100%" mode="css">
body {
  box-sizing: border-box;
}
</code-editor>
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
        else this.editor.setValue(text);
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
    tag: "code-editor"
});


var $e6e19030d0c18d6f$exports = {};

$parcel$export($e6e19030d0c18d6f$exports, "DataTable", () => $e6e19030d0c18d6f$export$df30df7ec97b32b5);
$parcel$export($e6e19030d0c18d6f$exports, "dataTable", () => $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0);
/*!
# `<data-table>`

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

preview.append(dataTable({ array: emojiData, columns }))
```
```css
.preview input.td {
  margin: 0;
  border-radius: 0;
  box-shadow: none !important;
  background: transparent;
}

.preview data-table {
  height: 100%;
}
```

You can set the `<data-table>`'s `array`, `columns`, and `filter` properties directly, or set its `value` to:

```
{ 
  array: any[], 
  columns: ColumnOptions[] | null, 
  filter?: ArrayFilter 
}
```

If you set the `<data-table>`'s `rowHeight` to `0` it will render all its elements (i.e. not be virtual). This is
useful for smaller tables, or tables with variable row-heights.
*/ 

const $5265d118b5240170$export$c947e3cd16175f27 = (event, callback, cursor = "move")=>{
    const isTouchEvent = event.type.startsWith("touch");
    if (!isTouchEvent) {
        const origX = event.clientX;
        const origY = event.clientY;
        const tracker = (0, $hgUW1$elements).div({
            style: {
                content: " ",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                cursor: cursor
            }
        });
        document.body.append(tracker);
        const wrappedCallback = (event)=>{
            const dx = event.clientX - origX;
            const dy = event.clientY - origY;
            if (callback(dx, dy, event) === true) tracker.remove();
        };
        tracker.addEventListener("mousemove", wrappedCallback, {
            passive: true
        });
        tracker.addEventListener("mouseup", wrappedCallback, {
            passive: true
        });
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
            if (callback(dx, dy, event) === true || touch === undefined) {
                target.removeEventListener("touchmove", wrappedCallback);
                target.removeEventListener("touchend", wrappedCallback);
                target.removeEventListener("touchcancel", wrappedCallback);
            }
        };
        target.addEventListener("touchmove", wrappedCallback, {
            passive: true
        });
        target.addEventListener("touchend", wrappedCallback, {
            passive: true
        });
        target.addEventListener("touchcancel", wrappedCallback, {
            passive: true
        });
    }
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
        this.initAttributes("rowHeight", "charWidth", "minColumnWidth");
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
    get visibleRecords() {
        return (0, $hgUW1$xin)[this.instanceId];
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
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("mousemove", this.setCursor);
        this.addEventListener("mousedown", this.resizeColumn);
        this.addEventListener("touchstart", this.resizeColumn, {
            passive: true
        });
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
            style: this.rowStyle
        }, ...visibleColumns.map(this.dataCell)))));
    }
}
const $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0 = $e6e19030d0c18d6f$export$df30df7ec97b32b5.elementCreator({
    tag: "data-table"
});


var $46dc716dd2cf5925$exports = {};

$parcel$export($46dc716dd2cf5925$exports, "availableFilters", () => $46dc716dd2cf5925$export$16a138bde9d9de87);
$parcel$export($46dc716dd2cf5925$exports, "FilterPart", () => $46dc716dd2cf5925$export$b7838412d9f17b13);
$parcel$export($46dc716dd2cf5925$exports, "filterPart", () => $46dc716dd2cf5925$export$2237595b531763d7);
$parcel$export($46dc716dd2cf5925$exports, "FilterBuilder", () => $46dc716dd2cf5925$export$afb49bb3b076029e);
$parcel$export($46dc716dd2cf5925$exports, "filterBuilder", () => $46dc716dd2cf5925$export$8ca73b4108207c1f);
/*!
# `<filter-builder>`

Automatically creates `ArrayFilter` functions `(a: any[]) => any[]` based on the query you build using its
macOS Finder-inspired interface, using an easily customizable / extensible collection of `Filter` objects.

```js
const { dataTable, filterBuilder, availableFilters } = xinjsui

const sourceWords = ['acorn', 'bubblegum', 'copper', 'daisy', 'ellipse', 'fabulous', 'gerund', 'hopscotch', 'idiom', 'joke']
function randomWords () {
  let numWords = Math.random() * 4
  const words = []
  while (numWords > 0) {
    numWords -= 1
    words.push(sourceWords[Math.floor(Math.random() * 10)])
  }
  return words
}

const array = []
for(let i = 0; i < 1000; i++) {
  array.push({
    date: new Date(Math.random() * Date.now()).toISOString().split('T')[0],
    isLucky: Math.random() < 0.1,
    number: Math.floor(Math.random() * 200 - 100),
    string: randomWords().join(' '),
  })
}

const columns = [
  {
    prop: 'date',
    width: 120
  },
  {
    prop: 'isLucky',
    type: 'boolean',
    width: 100
  },
  {
    prop: 'number',
    align: 'right',
    width: 100
  },
  {
    prop: 'string',
    width: 300
  },
]

const table = dataTable({ array, columns })
const { contains, equals, after, isTrue, isFalse } = availableFilters
const filter = filterBuilder({
  filters: { contains, equals, after, isTrue, isFalse },
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

.preview data-table {
  flex: 1 1 auto;
}
```

## availableFilters

`<filter-builder>` has a default set of `FilterMaker` objects which it uses to construct filter function.
In the example above, the default collection of filters is reduced to `contains`, `equals`, `after`, and `isTrue`.

The full collection includes:

- **contains** * looks for fields containing a string (ignoring case)
- **equals** * looks for fields containing equivalent values (ignoring case)
- **after** * looks for fields with a date after a provided value
- **greaterThan** * looks for fields with a value greater than a provided value
- **truthy** * looks for fields that are true / non-zero / non-empty
- **true** looks for fields that are `true`
- **false** looks for fields that are `false`

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
    id: "filter-builder"
}, `filter-part {
  display: flex;
}

filter-part [part="needle"] {
  flex: 1 1 auto;
  width: 80px;
}

filter-part [hidden]+[part="padding"] {
  display: block;
  content: ' ';
  flex: 1 1 auto;
}

filter-builder {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}

filter-builder [part="filterContainer"] {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex: 1 1 auto;
}

filter-builder [part="add"],
filter-builder [part="reset"] {
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
        caption: "is true / non-empty / no-zero",
        negative: "is false / empty / zero",
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
    content = [
        $46dc716dd2cf5925$var$select({
            part: "haystack"
        }),
        (0, $fef058b85aa29b7a$export$df03f54e09e486fa).chevronDown(),
        $46dc716dd2cf5925$var$select({
            part: "condition"
        }),
        (0, $fef058b85aa29b7a$export$df03f54e09e486fa).chevronDown(),
        $46dc716dd2cf5925$var$input({
            part: "needle"
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
    buildFilter = ()=>{
        const { haystack: haystack, condition: condition, needle: needle } = this.parts;
        const [, negative, key] = condition.value.match(/^(~)?(.+)/);
        const filter = this.filters[key];
        needle.hidden = filter.needsValue === false;
        const baseTest = filter.needsValue === false ? filter.makeTest(undefined) : filter.makeTest(needle.value);
        const field = haystack.value;
        let test;
        if (field !== "") test = negative === "~" ? (obj)=>!baseTest(obj[field]) : (obj)=>baseTest(obj[field]);
        else test = negative === "~" ? (obj)=>Object.values(obj).find((v)=>!baseTest(v)) !== undefined : (obj)=>Object.values(obj).find((v)=>baseTest(v)) !== undefined;
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
        haystack.value = "";
        condition.value = Object.keys(this.filters)[0];
        needle.value = "";
        remove.addEventListener("click", ()=>{
            const { parentElement: parentElement } = this;
            this.remove();
            parentElement?.dispatchEvent(new Event("change"));
        });
    }
    render() {
        super.render();
        const { haystack: haystack, condition: condition } = this.parts;
        haystack.textContent = "";
        haystack.append($46dc716dd2cf5925$var$option("any field", {
            value: ""
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
    }
}
const $46dc716dd2cf5925$export$2237595b531763d7 = $46dc716dd2cf5925$export$b7838412d9f17b13.elementCreator({
    tag: "filter-part"
});
class $46dc716dd2cf5925$export$afb49bb3b076029e extends (0, $hgUW1$Component) {
    fields = [];
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
    tag: "filter-builder"
});


var $fef058b85aa29b7a$exports = {};

$parcel$export($fef058b85aa29b7a$exports, "icons", () => $fef058b85aa29b7a$export$df03f54e09e486fa);
/*!
# icons

A set of SVG icons that are easy-to-use. These icons are completely unstyled
and can be colored using the css `fill` property.

These icons are mainly sourced from [feather](https://github.com/feathericons/feather).

`icons` is simply a proxy that generates an `ElementCreator` for a given icon on demand.

```js
const { icons } = xinjsui
const { div } = xinjs.elements

preview.append(...Object.keys(icons).map(iconName => div(
  { class: 'tile' },
  icons[iconName](),
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

.preview [class^="icon-"] {
  fill: var(--text-color);
}

.preview .tile {
  display: inline-block;
  width: 160px;
  text-align: center;
}

.preview .tile:hover {
  --text-color: var(--brand-color);
}

.preview .tile > div {
  whitespace: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 80%;
  line-height: 1.5;
}
```



*/ 
var $2d5b9d9e4f25abad$export$2e2bcd8739ae039 = {
    copy: [
        "M469.333 341.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v384c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h384c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-384c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM469.333 426.667h384c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v384c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-384c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-384c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM213.333 597.333h-42.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-384c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h384c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v42.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-42.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-384c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v384c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h42.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"
    ],
    formatAlignCenter: [
        "M128 128h768v86h-768v-86zM298 298h428v86h-428v-86zM128 554v-84h768v84h-768zM128 896v-86h768v86h-768zM298 640h428v86h-428v-86z"
    ],
    formatAlignLeft: [
        "M128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 554v-84h768v84h-768zM640 298v86h-512v-86h512zM640 640v86h-512v-86h512z"
    ],
    formatAlignRight: [
        "M128 128h768v86h-768v-86zM384 384v-86h512v86h-512zM128 554v-84h768v84h-768zM384 726v-86h512v86h-512zM128 896v-86h768v86h-768z"
    ],
    formatBold: [
        "M576 662q28 0 46-19t18-45-18-45-46-19h-150v128h150zM426 278v128h128q26 0 45-19t19-45-19-45-45-19h-128zM666 460q92 42 92 146 0 68-45 115t-113 47h-302v-598h268q72 0 121 50t49 122-70 118z"
    ],
    formatIndentDecrease: [
        "M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM128 896v-86h768v86h-768zM128 512l170-170v340zM470 726v-86h426v86h-426z"
    ],
    formatIndentIncrease: [
        "M470 554v-84h426v84h-426zM470 384v-86h426v86h-426zM128 128h768v86h-768v-86zM470 726v-86h426v86h-426zM128 342l170 170-170 170v-340zM128 896v-86h768v86h-768z"
    ],
    formatItalic: [
        "M426 170h342v128h-120l-144 342h94v128h-342v-128h120l144-342h-94v-128z"
    ],
    formatListBulleted: [
        "M298 214h598v84h-598v-84zM298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM170 704q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM170 192q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18zM170 448q26 0 45 18t19 46-19 46-45 18-45-18-19-46 19-46 45-18z"
    ],
    formatListNumbered: [
        "M298 554v-84h598v84h-598zM298 810v-84h598v84h-598zM298 214h598v84h-598v-84zM86 470v-44h128v40l-78 88h78v44h-128v-40l76-88h-76zM128 342v-128h-42v-44h84v172h-42zM86 726v-44h128v172h-128v-44h84v-20h-42v-44h42v-20h-84z"
    ],
    formatUnderlined: [
        "M214 810h596v86h-596v-86zM512 726q-106 0-181-75t-75-181v-342h106v342q0 62 44 105t106 43 106-43 44-105v-342h106v342q0 106-75 181t-181 75z"
    ],
    airplay: [
        "M213.333 682.667h-42.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h682.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-42.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h42.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-426.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-682.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h42.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM544.768 612.693c-1.493-1.835-3.371-3.712-5.461-5.461-18.091-15.104-45.013-12.629-60.075 5.461l-213.333 256c-6.144 7.339-9.899 16.896-9.899 27.307 0 23.552 19.115 42.667 42.667 42.667h426.667c9.6 0.043 19.328-3.2 27.307-9.899 18.091-15.104 20.565-41.984 5.461-60.075zM512 706.645l122.24 146.688h-244.48z"
    ],
    bell: [
        "M725.333 341.333c0 171.136 40.405 278.187 78.976 341.333h-584.619c38.571-63.147 78.976-170.197 78.976-341.333 0-58.923 23.851-112.213 62.464-150.869s91.947-62.464 150.869-62.464 112.213 23.851 150.869 62.464 62.464 91.947 62.464 150.869zM810.667 341.333c0-82.475-33.493-157.184-87.467-211.2s-128.725-87.467-211.2-87.467-157.184 33.493-211.2 87.467-87.467 128.725-87.467 211.2c0 261.419-102.101 343.339-109.355 348.757-19.328 13.141-24.448 39.424-11.477 58.923 8.192 12.245 21.589 18.901 35.499 18.987h768c23.552 0 42.667-19.115 42.667-42.667 0-14.464-7.168-27.221-18.304-35.029-7.509-5.547-109.696-87.467-109.696-348.971zM548.907 874.581c-5.931 10.197-15.317 17.024-25.941 19.84s-22.187 1.579-32.384-4.309c-6.912-4.011-12.075-9.472-15.317-15.232-11.691-20.48-37.717-27.605-58.197-15.915s-27.605 37.717-15.915 58.197c10.667 18.731 26.581 35.115 46.635 46.763 30.549 17.749 65.493 21.376 97.109 12.971s60.117-28.928 77.824-59.477c11.819-20.395 4.864-46.507-15.488-58.325s-46.507-4.864-58.325 15.488z"
    ],
    bellOff: [
        "M548.907 874.581c-5.931 10.197-15.317 17.024-25.941 19.84s-22.187 1.579-32.384-4.309c-6.912-4.011-12.075-9.472-15.317-15.232-11.691-20.48-37.717-27.605-58.197-15.915s-27.605 37.717-15.915 58.197c10.667 18.731 26.581 35.115 46.635 46.763 30.549 17.749 65.493 21.376 97.109 12.971s60.117-28.928 77.824-59.477c11.819-20.395 4.864-46.507-15.488-58.325s-46.507-4.864-58.325 15.488zM810.667 340.352c-0.171-82.048-33.451-156.416-87.168-210.261-53.931-54.101-128.597-87.68-211.072-87.808-61.781-0.085-119.424 18.645-166.4 50.347-19.499 13.184-24.661 39.723-11.477 59.264s39.723 24.661 59.264 11.477c32.597-22.016 72.875-35.371 116.48-35.712 61.781 0.469 114.517 24.277 152.789 62.72 38.485 38.613 62.208 91.733 62.251 150.443-1.792 70.741 7.381 148.309 28.373 225.152 6.229 22.741 29.653 36.139 52.395 29.909s36.139-29.653 29.909-52.395c-18.901-69.333-26.965-138.667-25.344-200.875 0-0.213 0-0.469 0-0.683 0-0.128 0-0.256 0-0.384zM298.496 358.869l323.84 323.797h-402.645c37.205-60.928 76.075-162.645 78.805-323.797zM12.501 72.832l207.189 207.189c-4.523 21.035-6.613 41.984-6.357 61.867 0 260.864-102.101 342.784-109.355 348.203-19.328 13.141-24.448 39.424-11.477 58.923 8.192 12.245 21.589 18.901 35.499 18.987h579.669l243.499 243.499c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-938.667-938.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
    ],
    bookmark: [
        "M785.877 930.731c6.869 4.949 15.488 7.936 24.789 7.936 23.552 0 42.667-19.115 42.667-42.667v-682.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-426.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c-0.043 8.491 2.56 17.237 7.936 24.789 13.696 19.157 40.363 23.637 59.52 9.899l273.877-195.584zM768 813.099l-231.211-165.163c-15.147-10.837-34.944-10.325-49.579 0l-231.211 165.163v-599.765c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h426.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"
    ],
    camera: [
        "M1024 810.667v-469.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-147.84l-72.661-109.013c-7.765-11.52-20.736-18.987-35.499-18.987h-256c-13.909 0.085-27.307 6.741-35.499 18.987l-72.661 109.013h-147.84c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v469.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h768c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM938.667 810.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-768c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-469.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c14.763 0 27.733-7.467 35.499-18.987l72.661-109.013h210.347l72.661 109.013c8.192 12.245 21.589 18.901 35.499 18.987h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165zM725.333 554.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM640 554.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496z"
    ],
    check: [
        "M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"
    ],
    chevronDown: [
        "M225.835 414.165l256 256c16.683 16.683 43.691 16.683 60.331 0l256-256c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
    ],
    chevronLeft: [
        "M670.165 737.835l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
    ],
    chevronRight: [
        "M414.165 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
    ],
    chevronUp: [
        "M798.165 609.835l-256-256c-16.683-16.683-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
    ],
    code: [
        "M712.832 798.165l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0zM311.168 225.835l-256 256c-16.683 16.683-16.683 43.691 0 60.331l256 256c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"
    ],
    cornerUpLeft: [
        "M896 853.333v-298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-409.003l140.501-140.501c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-213.333 213.333c-4.096 4.096-7.168 8.789-9.259 13.824s-3.243 10.539-3.243 16.341 1.152 11.307 3.243 16.341c2.091 5.035 5.163 9.728 9.259 13.824l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-140.501-140.501h409.003c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v298.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z"
    ],
    cornerUpRight: [
        "M213.333 853.333v-298.667c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h409.003l-140.501 140.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l213.333-213.333c3.925-3.925 7.083-8.619 9.259-13.824 4.309-10.453 4.309-22.229 0-32.683-2.091-5.035-5.163-9.728-9.259-13.824l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l140.501 140.501h-409.003c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v298.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z"
    ],
    crop: [
        "M301.952 301.952l381.099-3.285c11.435 0 22.016 4.736 29.781 12.501s12.501 18.389 12.501 30.165v384h-384c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-29.781zM43.051 304.213l173.568-1.493-3.285 379.563c0 35.712 14.379 67.755 37.504 90.88s55.168 37.504 90.496 37.504h384v170.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-170.667h170.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-170.667v-384c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.88-37.504l-379.563 3.285 1.493-173.568c0.213-23.595-18.731-42.837-42.283-43.051s-42.837 18.731-43.051 42.283l-1.536 175.061-175.061 1.536c-23.552 0.213-42.496 19.456-42.283 43.051s19.456 42.496 43.051 42.283z"
    ],
    database: [
        "M170.667 213.419c0 0 0.128-4.053 9.088-12.288 10.453-9.6 28.629-20.608 55.723-31.147 63.957-24.96 163.029-41.984 276.523-41.984s212.565 17.024 276.565 41.984c27.051 10.539 45.269 21.547 55.723 31.147 8.747 8.064 9.045 11.989 9.045 12.288 0 0.128-0.299 4.053-9.088 12.117-10.453 9.6-28.629 20.608-55.723 31.147-63.957 24.96-163.029 41.984-276.523 41.984s-212.565-17.024-276.565-41.984c-27.051-10.539-45.269-21.547-55.723-31.147-8.875-8.192-9.045-12.117-9.045-12.117zM853.333 620.032v190.763c-1.749 4.139-4.096 7.723-9.259 12.416-10.453 9.6-28.629 20.565-55.595 31.061-63.787 24.832-162.517 41.728-276.48 41.728s-212.693-16.896-276.48-41.728c-27.008-10.496-45.141-21.461-55.595-31.061-5.12-4.693-7.509-8.277-8.491-10.325l-0.256-192.597c10.581 5.376 21.76 10.325 33.365 14.848 76.672 29.824 186.752 47.531 307.456 47.531s230.784-17.707 307.456-47.531c11.819-4.608 23.168-9.6 33.877-15.104zM853.333 321.152v190.421c0 0.171 0 0.341 0 0.555-1.749 4.139-4.096 7.723-9.259 12.416-10.453 9.6-28.629 20.565-55.595 31.061-63.787 24.832-162.517 41.728-276.48 41.728s-212.693-16.896-276.48-41.728c-27.008-10.496-45.141-21.461-55.595-31.061-5.12-4.693-7.509-8.277-8.491-10.325-0.043-1.707-0.171-3.371-0.384-4.992l-0.213-188.032c10.581 5.461 21.888 10.411 33.621 15.019 76.843 29.952 187.221 47.787 307.541 47.787s230.699-17.835 307.541-47.787c11.776-4.608 23.125-9.6 33.792-15.061zM85.333 213.333v597.333c0 2.475 0.085 4.949 0.299 7.424 2.432 28.373 18.133 51.072 36.565 68.011 21.248 19.499 50.133 35.157 82.347 47.701 76.672 29.824 186.752 47.531 307.456 47.531s230.784-17.707 307.456-47.531c32.213-12.544 61.099-28.203 82.347-47.701 18.432-16.939 34.133-39.637 36.565-68.011 0.213-2.475 0.299-4.949 0.299-7.424v-597.333c0-2.389-0.085-4.779-0.299-7.168-2.347-28.331-18.005-50.987-36.352-67.84-21.248-19.584-50.219-35.285-82.475-47.872-76.843-29.952-187.221-47.787-307.541-47.787s-230.699 17.835-307.541 47.787c-32.256 12.587-61.227 28.331-82.475 47.872-18.347 16.853-34.005 39.552-36.352 67.84-0.213 2.389-0.299 4.779-0.299 7.168z"
    ],
    download: [
        "M853.333 640v170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM554.667 537.003v-409.003c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v409.003l-140.501-140.501c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c3.925 3.925 8.619 7.083 13.824 9.259s10.795 3.243 16.341 3.243c10.923 0 21.845-4.181 30.165-12.501l213.333-213.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"
    ],
    downloadCloud: [
        "M469.333 512v281.003l-97.835-97.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l170.667 170.667c3.925 3.925 8.619 7.083 13.824 9.259 10.453 4.309 22.229 4.309 32.683 0 5.035-2.091 9.728-5.163 13.824-9.259l170.667-170.667c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-97.835 97.835v-281.003c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM915.413 806.741c57.813-40.661 93.696-100.992 104.96-165.461s-2.133-133.376-42.795-191.189c-35.2-50.091-85.248-83.755-140.245-99.157-22.443-6.272-45.739-9.515-69.163-9.6h-22.315c-30.805-87.808-91.179-158.293-166.699-203.008-84.523-50.005-188.245-67.797-290.944-41.472s-185.088 91.947-235.093 176.469-67.797 188.245-41.472 290.944c15.829 61.696 45.867 116.267 84.608 159.317 15.787 17.493 42.752 18.944 60.245 3.157s18.944-42.752 3.157-60.245c-29.525-32.811-52.992-75.093-65.408-123.435-20.523-79.915-6.699-160.469 32.256-226.304s102.912-116.736 182.827-137.216 160.469-6.699 226.304 32.256 116.736 102.912 137.216 182.827c4.949 18.56 21.589 32.043 41.387 32.043h53.589c15.787 0.043 31.445 2.219 46.507 6.443 36.736 10.283 69.931 32.64 93.44 66.048 27.136 38.571 36.053 84.395 28.544 127.488s-31.403 83.2-69.973 110.293c-19.285 13.568-23.893 40.149-10.368 59.435s40.149 23.893 59.435 10.368z"
    ],
    externalLink: [
        "M725.333 554.667v256c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-469.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-469.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v469.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h469.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM456.832 627.499l396.501-396.501v153.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h153.003l-396.501 396.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
    ],
    eye: [
        "M4.523 492.928c-5.803 11.691-6.229 25.728 0 38.144 0 0 16.896 33.664 47.787 78.635 19.243 27.989 44.288 61.099 74.965 94.635 38.144 41.771 85.504 84.779 141.611 119.467 68.053 42.069 149.589 72.192 243.115 72.192s175.061-30.123 243.115-72.192c56.107-34.688 103.467-77.696 141.611-119.467 30.635-33.536 55.723-66.645 74.965-94.635 30.891-44.971 47.787-78.635 47.787-78.635 5.803-11.691 6.229-25.728 0-38.144 0 0-16.896-33.664-47.787-78.635-19.243-27.989-44.288-61.099-74.965-94.635-38.144-41.771-85.504-84.779-141.611-119.467-68.053-42.069-149.589-72.192-243.115-72.192s-175.061 30.123-243.115 72.192c-56.107 34.688-103.467 77.696-141.611 119.467-30.677 33.536-55.723 66.603-74.965 94.635-30.891 44.971-47.787 78.635-47.787 78.635zM91.307 512c6.955-11.989 17.365-29.056 31.317-49.408 17.493-25.429 40.107-55.296 67.627-85.376 34.347-37.589 75.733-74.923 123.477-104.448 57.6-35.584 123.776-59.435 198.272-59.435s140.672 23.851 198.229 59.435c47.744 29.525 89.131 66.859 123.477 104.448 27.477 30.080 50.133 59.947 67.627 85.376 13.995 20.352 24.405 37.376 31.317 49.408-6.955 11.989-17.365 29.056-31.317 49.408-17.493 25.429-40.107 55.296-67.627 85.376-34.347 37.589-75.733 74.923-123.477 104.448-57.557 35.584-123.733 59.435-198.229 59.435s-140.672-23.851-198.229-59.435c-47.744-29.525-89.131-66.859-123.477-104.448-27.477-30.080-50.133-59.947-67.627-85.376-13.995-20.352-24.405-37.419-31.36-49.408zM682.667 512c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 512c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331z"
    ],
    eyeOff: [
        "M432.128 222.464c27.776-6.485 55.296-9.429 79.36-9.131 75.008 0 141.184 23.851 198.741 59.435 47.744 29.525 89.131 66.859 123.477 104.448 27.477 30.080 50.133 59.947 67.627 85.376 13.952 20.267 24.32 37.291 31.275 49.28-23.296 40.661-49.493 77.696-75.861 108.459-15.317 17.877-13.269 44.843 4.608 60.16s44.843 13.269 60.16-4.608c34.901-40.704 68.736-90.112 97.408-143.787 6.315-11.904 6.955-26.368 0.555-39.211 0 0-16.896-33.664-47.787-78.635-19.243-27.989-44.288-61.099-74.965-94.635-38.144-41.771-85.504-84.779-141.611-119.467-68.053-42.027-149.589-72.149-242.603-72.149-31.317-0.384-65.707 3.371-99.84 11.349-22.955 5.376-37.205 28.331-31.829 51.285s28.331 37.205 51.285 31.829zM427.819 488.192l107.989 107.989c-7.765 2.603-15.872 4.011-24.021 4.309-21.888 0.768-43.947-6.784-61.184-22.869s-26.325-37.547-27.093-59.435c-0.341-10.155 1.067-20.309 4.309-30.037zM255.275 315.605l108.928 108.928c-18.517 29.483-27.136 63.317-25.941 96.683 1.536 43.605 19.755 86.741 54.229 118.827s78.763 47.232 122.368 45.696c29.525-1.024 58.837-9.728 84.651-25.941l99.072 99.072c-58.795 34.091-123.52 51.029-187.051 51.797-73.984 0-140.16-23.851-197.717-59.435-47.744-29.525-89.131-66.859-123.477-104.448-27.477-30.080-50.133-59.947-67.627-85.376-13.909-20.267-24.32-37.248-31.232-49.237 44.8-77.739 101.376-144.171 163.883-196.565zM12.501 72.832l182.229 182.229c-73.856 63.104-139.477 143.275-189.653 236.757-6.315 11.904-6.997 26.411-0.555 39.253 0 0 16.896 33.664 47.787 78.635 19.243 27.989 44.288 61.099 74.965 94.635 38.144 41.771 85.504 84.779 141.611 119.467 68.053 42.069 149.589 72.192 243.627 72.192 85.035-1.024 171.477-25.643 248.107-75.051l190.549 190.549c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-378.709-378.709c-0.085-0.085-0.213-0.213-0.299-0.299l-179.584-179.627c-0.341-0.299-0.683-0.683-1.024-1.024l-379.051-379.008c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
    ],
    fastForward: [
        "M597.333 723.413v-422.827l271.829 211.413zM128 723.413v-422.827l271.829 211.413zM111.531 844.331l384-298.667c10.709-8.32 16.341-20.736 16.469-33.28v298.283c0 23.552 19.115 42.667 42.667 42.667 9.899 0 19.029-3.371 26.197-9.003l384-298.667c18.603-14.464 21.931-41.259 7.467-59.861-2.304-2.944-4.907-5.504-7.467-7.467l-384-298.667c-18.603-14.464-45.397-11.136-59.861 7.467-6.101 7.851-9.045 17.109-9.003 26.197v298.24c-0.085-9.003-3.029-18.091-9.003-25.771-2.304-2.944-4.907-5.504-7.467-7.467l-384-298.667c-18.603-14.464-45.397-11.136-59.861 7.467-6.101 7.851-9.045 17.109-9.003 26.197v597.333c0 23.552 19.115 42.667 42.667 42.667 9.899 0 19.029-3.371 26.197-9.003z"
    ],
    file: [
        "M750.336 341.333h-153.003v-153.003zM883.499 353.835l-298.667-298.667c-3.925-3.925-8.619-7.083-13.824-9.259s-10.795-3.243-16.341-3.243h-298.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h512c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-469.333c0-11.776-4.779-22.443-12.501-30.165zM512 128v256c0 23.552 19.115 42.667 42.667 42.667h256v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-682.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501z"
    ],
    fileMinus: [
        "M750.336 298.667h-110.336v-110.336zM883.499 311.168l-256-256c-3.925-3.925-8.619-7.083-13.824-9.259s-10.795-3.243-16.341-3.243h-341.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h512c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-512c0-11.776-4.779-22.443-12.501-30.165zM554.667 128v213.333c0 23.552 19.115 42.667 42.667 42.667h213.333v469.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-682.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM384 682.667h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    filePlus: [
        "M750.336 298.667h-110.336v-110.336zM883.499 311.168l-256-256c-3.925-3.925-8.619-7.083-13.824-9.259s-10.795-3.243-16.341-3.243h-341.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h512c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-512c0-11.776-4.779-22.443-12.501-30.165zM554.667 128v213.333c0 23.552 19.115 42.667 42.667 42.667h213.333v469.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-682.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM384 682.667h85.333v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-85.333v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    fileText: [
        "M750.336 298.667h-110.336v-110.336zM883.499 311.168l-256-256c-3.925-3.925-8.619-7.083-13.824-9.259s-10.795-3.243-16.341-3.243h-341.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v682.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h512c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-512c0-11.776-4.779-22.443-12.501-30.165zM554.667 128v213.333c0 23.552 19.115 42.667 42.667 42.667h213.333v469.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-682.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM682.667 512h-341.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h341.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM682.667 682.667h-341.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h341.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM426.667 341.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"
    ],
    filter: [
        "M846.72 170.667l-281.984 333.397c-6.272 7.381-10.069 17.024-10.069 27.563v295.339l-85.333-42.667v-252.672c0.043-9.685-3.285-19.499-10.069-27.563l-281.984-333.397zM938.667 85.333h-853.333c-23.552 0-42.667 19.115-42.667 42.667 0 10.539 3.797 20.181 10.069 27.563l331.264 391.68v263.424c0 16.597 9.472 31.019 23.595 38.144l170.667 85.333c21.077 10.539 46.72 2.005 57.259-19.072 3.072-6.229 4.523-12.843 4.48-19.072v-348.757l331.264-391.68c15.232-18.005 12.971-44.928-5.035-60.117-8.064-6.827-17.877-10.155-27.563-10.112z"
    ],
    flag: [
        "M213.333 571.605v-420.651c18.773-9.301 58.24-22.955 128-22.955 54.656 0 100.736 17.963 154.837 39.595 52.565 21.035 113.152 45.739 186.496 45.739 55.381 0 97.195-7.467 128-16.939v420.651c-18.773 9.301-58.24 22.955-128 22.955-54.656 0-100.736-17.963-154.837-39.595-52.565-21.035-113.152-45.739-186.496-45.739-55.381 0-97.195 7.467-128 16.939zM213.333 938.667v-275.712c18.773-9.301 58.24-22.955 128-22.955 54.656 0 100.736 17.963 154.837 39.595 52.565 21.035 113.152 45.739 186.496 45.739 138.539 0 192.299-46.635 200.832-55.168 8.32-8.32 12.501-19.243 12.501-30.165v-512c0-23.552-19.115-42.667-42.667-42.667-11.307 0-21.589 4.395-29.227 11.605-4.096 3.328-41.984 31.061-141.44 31.061-54.656 0-100.736-17.963-154.837-39.595-52.565-21.035-113.152-45.739-186.496-45.739-138.539 0-192.299 46.635-200.832 55.168-8.32 8.32-12.501 19.243-12.501 30.165v810.667c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z"
    ],
    folder: [
        "M981.333 810.667v-469.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-361.173l-72.661-109.013c-7.765-11.52-20.736-18.987-35.499-18.987h-213.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h682.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM896 810.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-682.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h190.507l72.661 109.013c8.192 12.245 21.589 18.901 35.499 18.987h384c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"
    ],
    folderMinus: [
        "M981.333 810.667v-469.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-361.173l-72.661-109.013c-7.765-11.52-20.736-18.987-35.499-18.987h-213.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h682.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM896 810.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-682.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h190.507l72.661 109.013c8.192 12.245 21.589 18.901 35.499 18.987h384c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165zM384 640h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    folderPlus: [
        "M981.333 810.667v-469.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-361.173l-72.661-109.013c-7.765-11.52-20.736-18.987-35.499-18.987h-213.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h682.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM896 810.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-682.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h190.507l72.661 109.013c8.192 12.245 21.589 18.901 35.499 18.987h384c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165zM384 640h85.333v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-85.333v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    help: [
        "M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM428.075 398.165c7.808-22.229 23.851-39.168 43.605-48.64s42.965-11.392 65.195-3.541c19.541 6.869 34.944 20.053 44.8 36.651 7.808 13.099 12.117 28.373 12.203 44.245 0 6.613-1.664 13.184-4.992 19.797-3.413 6.827-8.661 13.867-15.701 20.907-30.251 30.251-78.123 46.592-78.123 46.592-22.357 7.467-34.432 31.616-26.965 53.973s31.616 34.432 53.973 26.965c0 0 65.877-21.589 111.488-67.2 11.904-11.904 23.253-26.197 31.701-43.093 8.533-17.067 13.995-36.608 13.995-58.411-0.171-31.189-8.704-61.312-24.192-87.424-19.755-33.195-50.773-59.819-89.813-73.557-44.459-15.616-91.093-11.733-130.432 7.125s-71.595 52.821-87.211 97.28c-7.851 22.229 3.84 46.592 26.069 54.4s46.592-3.883 54.4-26.069zM512 768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667z"
    ],
    home: [
        "M101.803 350.336c-10.069 7.851-16.469 20.011-16.469 33.664v469.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-469.333c-0.043-12.8-5.717-25.301-16.469-33.664l-384-298.667c-15.275-11.733-36.736-12.16-52.395 0zM682.667 896v-384c0-23.552-19.115-42.667-42.667-42.667h-256c-23.552 0-42.667 19.115-42.667 42.667v384h-128c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-448.469l341.333-265.472 341.333 265.472v448.469c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501zM426.667 896v-341.333h170.667v341.333z"
    ],
    image: [
        "M213.333 85.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM469.333 362.667c0-29.44-11.989-56.149-31.232-75.435s-45.995-31.232-75.435-31.232-56.149 11.989-75.435 31.232-31.232 45.995-31.232 75.435 11.989 56.149 31.232 75.435 45.995 31.232 75.435 31.232 56.149-11.989 75.435-31.232 31.232-45.995 31.232-75.435zM384 362.667c0 5.888-2.347 11.179-6.229 15.104s-9.216 6.229-15.104 6.229-11.179-2.347-15.104-6.229-6.229-9.216-6.229-15.104 2.347-11.179 6.229-15.104 9.216-6.229 15.104-6.229 11.179 2.347 15.104 6.229 6.229 9.216 6.229 15.104zM316.331 853.333l366.336-366.336 170.667 170.667v153.003c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501zM853.333 537.003l-140.501-140.501c-16.683-16.683-43.691-16.683-60.331 0l-454.144 454.144c-5.76-2.133-10.88-5.504-15.189-9.813-7.765-7.765-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"
    ],
    layers: [
        "M512 133.035l331.264 165.632-331.264 165.632-331.264-165.632zM492.928 47.189l-426.667 213.333c-21.077 10.539-29.611 36.139-19.072 57.216 4.309 8.661 11.136 15.189 19.072 19.072l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259-4.309-8.619-11.179-15.147-19.072-19.072l-426.667-213.333c-12.459-6.229-26.453-5.803-38.144 0zM66.261 763.477l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259zM66.261 550.144l426.667 213.333c12.459 6.229 26.453 5.803 38.144 0l426.667-213.333c21.077-10.539 29.611-36.181 19.072-57.259s-36.181-29.611-57.259-19.072l-407.552 203.819-407.595-203.776c-21.077-10.539-46.72-2.005-57.259 19.072s-2.005 46.72 19.072 57.259z"
    ],
    link: [
        "M392.491 580.224c42.325 56.619 103.68 90.709 168.448 100.053s133.248-6.059 189.867-48.384c10.197-7.637 19.84-16 27.947-24.235l127.787-127.787c49.621-51.371 73.472-117.376 72.363-182.827s-27.264-130.603-78.123-179.669c-50.005-48.299-114.688-72.192-179.157-71.808-63.659 0.341-127.317 24.363-176.512 71.808l-73.856 73.429c-16.725 16.597-16.811 43.648-0.171 60.331s43.648 16.811 60.331 0.171l72.917-72.491c32.853-31.659 75.221-47.659 117.76-47.915 43.051-0.256 86.016 15.659 119.381 47.872 33.92 32.768 51.328 76.075 52.096 119.808s-15.147 87.637-47.36 121.003l-128.213 128.213c-4.864 4.949-11.221 10.539-18.261 15.787-37.76 28.245-83.285 38.485-126.592 32.256s-84.096-28.928-112.299-66.688c-14.123-18.859-40.832-22.741-59.733-8.619s-22.741 40.832-8.619 59.733zM631.509 443.776c-42.325-56.619-103.68-90.709-168.448-100.053s-133.291 6.059-189.909 48.384c-10.197 7.637-19.797 16-27.947 24.235l-127.787 127.787c-49.621 51.371-73.472 117.376-72.363 182.827s27.264 130.603 78.123 179.669c50.005 48.299 114.688 72.192 179.157 71.808 63.659-0.341 127.317-24.363 176.512-71.808l73.515-73.515c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-72.363 72.448c-32.853 31.659-75.221 47.659-117.76 47.915-43.051 0.256-86.016-15.659-119.381-47.872-33.92-32.768-51.328-76.075-52.096-119.808s15.147-87.637 47.36-121.003l128.213-128.213c4.864-4.949 11.221-10.539 18.261-15.787 37.76-28.245 83.285-38.485 126.592-32.256s84.096 28.928 112.299 66.688c14.123 18.859 40.832 22.741 59.733 8.619s22.741-40.832 8.619-59.733z"
    ],
    lock: [
        "M213.333 512h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v298.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-298.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM768 426.667v-128c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965-134.741 28.715-181.035 74.965-74.965 110.336-74.965 181.035v128h-42.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v298.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM341.333 426.667v-128c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005 89.728 19.072 120.661 50.005 50.005 73.515 50.005 120.661v128z"
    ],
    logIn: [
        "M640 170.667h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h170.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM537.003 469.333h-409.003c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h409.003l-140.501 140.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l213.333-213.333c4.096-4.096 7.168-8.789 9.259-13.824s3.243-10.539 3.243-16.341c0-5.547-1.067-11.136-3.243-16.341-2.091-5.035-5.163-9.728-9.259-13.824l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
    ],
    logOut: [
        "M384 853.333h-170.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h170.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM793.003 469.333h-409.003c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h409.003l-140.501 140.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l213.333-213.333c3.925-3.925 7.083-8.619 9.259-13.824 6.4-15.445 3.328-33.92-9.259-46.507l-213.333-213.333c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
    ],
    map: [
        "M298.667 158.848v584.405l-213.333 121.899v-584.405zM725.333 865.152v-584.405l213.333-121.899v584.363zM662.827 976.427c3.499 1.835 7.253 3.2 11.221 4.011 1.408 0.299 2.859 0.512 4.309 0.64s2.901 0.213 4.352 0.213c-0.043 0.043-0.043 0.043-0.043 0.043s0 0 0.043 0c7.381 0 14.677-1.963 21.163-5.632l0.64-0.384 298.027-170.283c13.653-7.808 21.376-22.101 21.461-37.035v-682.667c0-23.552-19.115-42.667-42.667-42.667-7.808 0-15.104 2.091-21.163 5.632l-278.827 159.317-320.128-160.085c-3.541-1.792-7.296-3.2-11.264-4.011-1.451-0.299-2.859-0.512-4.309-0.64s-2.901-0.213-4.352-0.213c0.043 0 0.043 0 0.043 0s0 0-0.043 0c-7.381 0-14.677 1.963-21.12 5.632l-0.64 0.341-298.027 170.325c-13.696 7.808-21.419 22.101-21.504 37.035v682.667c0 23.552 19.115 42.667 42.667 42.667 7.808 0 15.104-2.091 21.163-5.632l278.827-159.317zM640 282.368v587.264l-256-128v-587.264z"
    ],
    mapPin: [
        "M938.667 426.667c0-117.803-47.787-224.555-124.971-301.696s-183.893-124.971-301.696-124.971-224.555 47.787-301.696 124.971-124.971 183.893-124.971 301.696c0 24.277 2.261 48.128 6.4 71.509 11.691 66.048 38.357 128.171 71.765 184.32 116.565 195.883 324.821 334.336 324.821 334.336 14.123 9.259 32.64 9.771 47.317 0 0 0 208.299-138.453 324.821-334.336 33.408-56.149 60.075-118.272 71.765-184.32 4.181-23.381 6.443-47.232 6.443-71.509zM853.333 426.667c0 18.944-1.749 37.845-5.077 56.661-9.429 53.333-31.445 105.728-61.099 155.563-81.579 137.131-214.869 245.205-271.744 287.573-59.648-39.083-195.755-148.352-278.613-287.573-29.653-49.835-51.669-102.229-61.099-155.563-3.285-18.816-5.035-37.717-5.035-56.661 0-94.251 38.144-179.541 99.968-241.365s147.115-99.968 241.365-99.968 179.541 38.144 241.365 99.968 99.968 147.115 99.968 241.365zM682.667 426.667c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 426.667c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331z"
    ],
    maximize: [
        "M341.333 85.333h-128c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v128c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-128c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h128c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM938.667 341.333v-128c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h128c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v128c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM682.667 938.667h128c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-128c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v128c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM85.333 682.667v128c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h128c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-128c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"
    ],
    messageCircle: [
        "M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.725-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.683-0.043-1.536-0.085-2.347-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.496-97.749 63.488-133.931 108.16-56.405 69.717-89.899 158.080-89.941 253.696-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.797-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.749-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.827-153.259 148.139-41.387 18.859-86.827 28.971-133.376 29.269-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.677-34.304-96.171-33.792-142.421 0.043-76.331 26.411-145.92 70.955-200.917 28.629-35.371 64.768-64.725 106.24-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.152 51.285 53.376 84.139 124.416 89.003 202.795z"
    ],
    mic: [
        "M512 85.333c23.595 0 44.843 9.515 60.331 25.003s25.003 36.736 25.003 60.331v341.333c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331v-341.333c0-23.595 9.515-44.843 25.003-60.331s36.736-25.003 60.331-25.003zM512 0c-47.104 0-89.856 19.157-120.661 50.005s-50.005 73.557-50.005 120.661v341.333c0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661v-341.333c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005zM341.333 1024h341.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128v-87.979c77.184-9.643 146.432-45.056 198.699-97.323 61.696-61.739 99.968-147.115 99.968-241.365v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333c0 70.699-28.587 134.656-74.965 181.035s-110.336 74.965-181.035 74.965-134.656-28.587-181.035-74.965-74.965-110.336-74.965-181.035v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333c0 94.251 38.272 179.627 99.968 241.365 52.267 52.267 121.472 87.68 198.699 97.323v87.979h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    micOff: [
        "M534.016 594.347c-6.997 1.877-14.336 2.859-21.931 2.859-23.68-0.043-44.928-9.515-60.373-24.96-15.488-15.445-25.045-36.693-25.045-60.245v-25.003zM682.667 398.507v-227.84c0.043-47.061-19.072-89.813-49.877-120.704s-73.515-50.048-120.619-50.091c-43.264-0.043-82.901 16.085-113.024 42.752-27.136 24.021-46.592 56.619-54.357 93.739-4.821 23.083 9.984 45.653 33.067 50.475s45.653-9.984 50.475-33.067c3.925-18.773 13.739-35.2 27.349-47.275 14.933-13.227 34.389-21.205 55.808-21.291 24.363 0.128 45.483 9.643 60.885 25.045 15.488 15.531 25.003 36.779 24.96 60.416v227.84c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM768 426.667v85.333c0 16.043-1.493 31.573-3.968 44.587-4.352 23.168 10.88 45.483 34.048 49.835s45.483-10.88 49.835-34.048c3.499-18.517 5.419-39.339 5.419-60.373v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM341.333 1024h341.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128v-86.357c61.696-8.064 119.083-31.232 167.851-69.419l228.651 228.651c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-249.088-249.088c-1.92-3.371-4.309-6.528-7.211-9.344-2.688-2.645-5.632-4.821-8.747-6.613l-673.621-673.664c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l328.832 328.832v110.336c0.043 47.147 19.243 89.856 50.091 120.661s73.6 49.92 120.704 49.877c31.531-0.043 61.141-8.619 86.485-23.595l63.019 63.019c-40.917 29.568-88.661 45.568-137.045 47.915-4.011-1.237-8.235-1.877-12.587-1.877-4.395 0-8.576 0.64-12.587 1.877-60.459-2.944-119.979-27.179-166.613-72.832-49.195-48.171-74.795-111.275-76.715-175.189-0.085-4.779-0.085-9.557-0.085-9.557v-85.632c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.035c0 6.357 0.128 12.715 0.128 12.715 2.56 85.077 36.736 169.344 102.315 233.6 55.424 54.315 124.757 85.888 196.224 94.848v85.803h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    minimize: [
        "M298.667 128v128c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h128c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-128c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM896 298.667h-128c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-128c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v128c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h128c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM725.333 896v-128c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h128c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v128c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM128 725.333h128c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v128c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-128c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-128c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    minus: [
        "M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    moon: [
        "M938.496 549.632c0.939-9.941-1.621-20.309-8.021-29.056-13.867-19.029-40.576-23.211-59.605-9.344-40.533 29.568-87.893 46.336-136.021 49.579-58.368 3.925-117.973-12.075-168.533-49.408-56.875-42.027-91.264-103.040-100.992-167.893s5.291-133.291 47.317-190.123c6.059-8.149 9.216-18.56 8.149-29.483-2.261-23.467-23.125-40.619-46.592-38.315-96.341 9.387-184.064 50.347-251.52 113.109-74.069 68.907-123.819 164.139-133.845 272.469-10.837 117.291 26.923 227.968 96.683 311.936s171.605 141.355 288.939 152.192 227.968-26.923 311.936-96.683 141.355-171.605 152.192-288.939zM834.859 626.091c-20.907 58.155-56.96 108.501-103.083 146.816-67.243 55.851-155.648 86.016-249.515 77.355s-175.275-54.528-231.125-121.771-86.016-155.648-77.355-249.515c7.979-86.699 47.659-162.731 106.965-217.856 33.365-31.061 72.96-55.467 116.523-71.339-19.456 53.931-24.619 111.189-16.384 166.357 12.928 86.315 58.88 167.851 134.656 223.872 67.328 49.792 147.115 71.168 224.939 65.92 32.085-2.133 63.829-8.832 94.293-19.84z"
    ],
    moreHorizontal: [
        "M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM896 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM298.667 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"
    ],
    moreVertical: [
        "M597.333 512c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM597.333 213.333c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM597.333 810.667c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331z"
    ],
    mousePointer: [
        "M207.232 207.232l524.117 218.368-208.341 70.741c-12.16 4.181-22.272 13.653-26.667 26.667l-70.741 208.341zM555.093 615.424l225.408 225.408c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.408-225.408 250.368-85.035c22.315-7.595 34.261-31.829 26.667-54.101-4.096-12.075-13.056-21.077-23.979-25.643l-724.053-301.653c-21.76-9.045-46.72 1.237-55.808 22.997-4.565 10.923-4.224 22.699 0 32.811l301.653 724.053c9.045 21.76 34.048 32.043 55.808 22.997 11.733-4.907 20.139-14.421 23.979-25.643z"
    ],
    move: [
        "M469.333 188.331v281.003h-281.003l55.168-55.168c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-128 128c-7.723 7.723-12.501 18.389-12.501 30.165 0 5.803 1.152 11.307 3.243 16.341s5.163 9.728 9.259 13.824l128 128c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-55.168-55.168h281.003v281.003l-55.168-55.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l128 128c4.096 4.096 8.789 7.168 13.824 9.259s10.539 3.243 16.341 3.243c5.547 0 11.136-1.067 16.341-3.243 5.035-2.091 9.728-5.163 13.824-9.259l128-128c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-55.168 55.168v-281.003h281.003l-55.168 55.168c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l128-128c4.096-4.096 7.168-8.789 9.259-13.824 6.4-15.445 3.328-33.92-9.259-46.507l-128-128c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l55.168 55.168h-281.003v-281.003l55.168 55.168c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-128-128c-3.925-3.925-8.619-7.083-13.824-9.259-10.453-4.309-22.229-4.309-32.683 0-5.035 2.091-9.728 5.163-13.824 9.259l-128 128c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
    ],
    music: [
        "M341.333 768c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331zM938.667 682.667v-554.667c0-2.133-0.171-4.565-0.597-6.997-3.883-23.253-25.856-38.955-49.109-35.072l-512 85.333c-20.309 3.456-35.627 20.992-35.627 42.069v406.827c-25.088-14.507-54.272-22.827-85.333-22.827-47.104 0-89.856 19.157-120.661 50.005s-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661v-518.528l426.667-71.125v356.48c-25.088-14.507-54.272-22.827-85.333-22.827-47.104 0-89.856 19.157-120.661 50.005s-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM853.333 682.667c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331z"
    ],
    paperclip: [
        "M884.608 441.301l-392.107 392.107c-41.685 41.685-96.256 62.507-150.955 62.507s-109.269-20.821-150.955-62.507-62.507-96.256-62.507-150.955 20.821-109.269 62.507-150.955l392.107-392.107c25.003-25.003 57.728-37.504 90.581-37.504s65.536 12.501 90.581 37.504 37.504 57.728 37.504 90.581-12.501 65.536-37.504 90.581l-392.533 392.107c-8.363 8.363-19.243 12.544-30.208 12.544s-21.845-4.181-30.208-12.501-12.501-19.2-12.501-30.208 4.181-21.845 12.501-30.208l362.24-361.813c16.683-16.64 16.683-43.648 0.043-60.331s-43.648-16.683-60.331-0.043l-362.24 361.813c-25.003 25.003-37.504 57.856-37.504 90.539s12.501 65.536 37.504 90.539 57.856 37.504 90.539 37.504 65.536-12.501 90.539-37.504l392.533-392.107c41.685-41.685 62.507-96.341 62.507-150.912s-20.864-109.269-62.507-150.912-96.341-62.507-150.912-62.507-109.269 20.864-150.912 62.507l-392.107 392.107c-58.325 58.325-87.509 134.869-87.509 211.285s29.184 152.96 87.509 211.285 134.869 87.509 211.285 87.509 152.96-29.184 211.285-87.509l392.107-392.107c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"
    ],
    pause: [
        "M256 128c-23.552 0-42.667 19.115-42.667 42.667v682.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-682.667c0-23.552-19.115-42.667-42.667-42.667zM298.667 213.333h85.333v597.333h-85.333zM597.333 128c-23.552 0-42.667 19.115-42.667 42.667v682.667c0 23.552 19.115 42.667 42.667 42.667h170.667c23.552 0 42.667-19.115 42.667-42.667v-682.667c0-23.552-19.115-42.667-42.667-42.667zM640 213.333h85.333v597.333h-85.333z"
    ],
    play: [
        "M236.416 92.117c-6.528-4.267-14.507-6.784-23.083-6.784-23.552 0-42.667 19.115-42.667 42.667v768c-0.043 7.765 2.133 15.872 6.784 23.083 12.757 19.84 39.125 25.557 58.965 12.8l597.333-384c4.864-3.072 9.344-7.424 12.8-12.8 12.757-19.84 6.997-46.208-12.8-58.965zM256 206.165l475.776 305.835-475.776 305.835z"
    ],
    plus: [
        "M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    refresh: [
        "M189.995 398.251c31.445-88.875 95.872-156.544 174.763-194.219s172.032-45.184 260.864-13.739c50.603 17.92 94.123 46.421 127.275 80.213l120.747 113.493h-148.309c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h255.872c0.213 0 0.384 0 0.597 0 5.845-0.043 11.435-1.323 16.469-3.499 5.077-2.176 9.771-5.376 13.824-9.6 0.512-0.555 1.024-1.109 1.536-1.664 3.2-3.712 5.675-7.808 7.381-12.16s2.731-9.003 2.944-13.909c0.043-0.64 0.043-1.237 0.043-1.835v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v157.397l-124.843-117.291c-42.325-43.093-96.896-78.635-159.701-100.864-111.061-39.296-227.627-29.824-326.101 17.152s-179.157 131.669-218.453 242.731c-7.893 22.187 3.755 46.549 25.941 54.443s46.592-3.755 54.443-25.984zM85.333 695.979l126.080 118.485c82.304 82.389 191.573 124.075 300.715 124.117s218.411-41.6 301.739-124.885c47.104-47.104 81.109-102.699 100.736-159.787 7.68-22.272-4.181-46.549-26.496-54.229s-46.549 4.181-54.229 26.496c-15.403 44.8-42.368 89.216-80.341 127.189-66.688 66.645-153.984 99.925-241.365 99.925s-174.677-33.365-242.304-100.949l-119.467-112.341h148.267c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-255.872c-0.213 0-0.384 0-0.597 0-5.845 0.043-11.435 1.323-16.469 3.499-5.077 2.176-9.771 5.376-13.824 9.6-0.512 0.555-1.024 1.109-1.536 1.664-3.2 3.712-5.675 7.808-7.381 12.16s-2.731 9.003-2.944 13.909c-0.043 0.64-0.043 1.237-0.043 1.835v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z"
    ],
    rewind: [
        "M426.667 723.413l-271.829-211.413 271.829-211.413zM912.469 844.331c7.168 5.632 16.299 9.003 26.197 9.003 23.552 0 42.667-19.115 42.667-42.667v-597.333c0.043-9.088-2.901-18.347-9.003-26.197-14.464-18.603-41.259-21.931-59.861-7.467l-384 298.667c-2.603 1.963-5.205 4.523-7.467 7.467-5.973 7.68-8.917 16.725-9.003 25.771v-298.24c0.043-9.088-2.901-18.347-9.003-26.197-14.464-18.603-41.259-21.931-59.861-7.467l-384 298.667c-2.603 1.963-5.205 4.523-7.467 7.467-14.464 18.603-11.136 45.397 7.467 59.861l384 298.667c7.168 5.632 16.299 9.003 26.197 9.003 23.552 0 42.667-19.115 42.667-42.667v-298.283c0.128 12.587 5.76 24.96 16.469 33.28zM896 723.413l-271.829-211.413 271.829-211.413z"
    ],
    settings: [
        "M682.667 512c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 512c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331zM866.773 657.237c1.963-4.48 4.779-8.149 8.192-10.965 4.779-3.925 10.709-6.229 17.195-6.272h3.84c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496-14.379-67.413-37.504-90.496-55.168-37.504-90.496-37.504h-6.784c-4.693-0.043-9.173-1.195-13.141-3.243-5.419-2.816-9.813-7.339-12.459-13.312-0.128-1.237-0.171-2.517-0.171-3.797-1.024-2.347-1.707-4.736-2.091-7.168 0.853-14.251 3.285-19.371 7.168-23.339l2.645-2.645c24.96-25.003 37.461-57.856 37.419-90.539s-12.544-65.536-37.589-90.539c-25.003-24.96-57.856-37.461-90.539-37.419s-65.536 12.544-90.453 37.504l-1.963 1.963c-3.541 3.413-7.808 5.803-12.288 7.083-5.973 1.664-12.416 1.365-18.688-1.408-4.309-1.877-7.979-4.693-10.795-8.107-3.925-4.779-6.229-10.709-6.272-17.195v-3.84c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504-67.413 14.379-90.496 37.504-37.504 55.168-37.504 90.496v6.784c-0.043 4.693-1.195 9.173-3.243 13.141-2.816 5.419-7.339 9.813-13.312 12.459-1.237 0.128-2.517 0.171-3.797 0.171-2.347 1.024-4.736 1.707-7.168 2.091-14.293-0.896-19.413-3.328-23.381-7.211l-2.645-2.645c-25.003-24.96-57.813-37.461-90.539-37.461s-65.493 12.544-90.539 37.632c-24.96 25.003-37.461 57.813-37.461 90.539s12.544 65.536 37.504 90.453l2.048 2.005c3.413 3.541 5.803 7.808 7.083 12.288 1.664 5.973 1.365 12.416-1.323 18.517-0.256 0.683-0.555 1.451-0.896 2.219-1.749 4.651-4.608 8.661-8.149 11.733-4.693 4.053-10.667 6.528-16.341 6.656h-3.84c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.211-37.504 90.539 14.379 67.413 37.504 90.496 55.168 37.504 90.496 37.504h6.784c4.693 0.043 9.173 1.195 13.141 3.243 5.461 2.859 9.941 7.424 12.629 13.696 1.024 2.347 1.707 4.736 2.091 7.168-0.853 14.251-3.285 19.371-7.168 23.339l-2.645 2.645c-24.96 25.003-37.461 57.856-37.419 90.539s12.544 65.536 37.589 90.539c25.003 24.96 57.856 37.461 90.539 37.419s65.536-12.544 90.453-37.504l2.005-2.048c3.541-3.413 7.808-5.803 12.288-7.083 5.973-1.664 12.416-1.365 18.517 1.323 0.683 0.256 1.451 0.555 2.219 0.896 4.651 1.749 8.661 4.608 11.733 8.149 4.053 4.693 6.528 10.667 6.656 16.341v3.925c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504 67.413-14.379 90.496-37.504 37.504-55.168 37.504-90.496v-6.784c0.043-4.693 1.195-9.173 3.243-13.141 2.859-5.461 7.424-9.941 13.696-12.629 2.347-1.024 4.736-1.707 7.168-2.091 14.251 0.853 19.371 3.285 23.339 7.168l2.645 2.645c25.003 24.96 57.856 37.461 90.539 37.419s65.536-12.544 90.539-37.589c24.96-25.003 37.461-57.856 37.419-90.539s-12.544-65.536-37.504-90.453l-2.048-2.005c-3.413-3.541-5.803-7.808-7.083-12.288-1.664-5.973-1.365-12.416 1.323-18.517zM784.896 396.885c-0.512-8.576-1.621-12.672-3.243-16.299v3.413c0 1.835 0.128 3.584 0.341 5.333 0.896 2.56 1.835 5.077 2.901 7.552 0.171 3.84 0.213 3.883 0.213 3.925 10.624 24.789 29.184 43.947 51.541 55.595 15.829 8.235 33.493 12.715 51.669 12.928h7.68c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165-4.736 22.4-12.501 30.165-18.389 12.501-30.165 12.501h-3.84c-27.179 0.128-52.053 9.728-71.467 25.728-13.781 11.349-24.789 25.899-32 42.368-10.965 24.832-12.288 51.627-5.419 76.032 5.077 18.048 14.549 34.731 27.819 48.469l3.072 3.115c8.363 8.363 12.544 19.2 12.544 30.165s-4.139 21.845-12.459 30.165c-8.405 8.405-19.243 12.587-30.251 12.587s-21.845-4.139-30.165-12.459l-2.603-2.603c-19.755-19.328-44.373-29.952-69.632-32.085-18.645-1.579-37.632 1.451-55.168 9.045-24.661 10.581-43.819 29.141-55.467 51.456-8.235 15.829-12.715 33.493-12.928 51.669v7.723c0 11.776-4.736 22.4-12.501 30.165s-18.347 12.459-30.123 12.459-22.4-4.736-30.165-12.501-12.501-18.389-12.501-30.165v-3.84c-0.64-28.16-10.88-52.992-27.477-72.192-12.117-13.995-27.563-24.96-45.141-31.744-24.533-10.539-50.901-11.691-74.923-4.949-18.048 5.077-34.731 14.549-48.469 27.819l-3.115 3.072c-8.363 8.363-19.2 12.544-30.165 12.544s-21.845-4.139-30.165-12.459c-8.405-8.405-12.587-19.243-12.587-30.251s4.139-21.845 12.459-30.165l2.603-2.603c19.328-19.755 29.952-44.373 32.085-69.632 1.579-18.645-1.451-37.632-9.045-55.168-10.581-24.661-29.141-43.819-51.456-55.467-15.829-8.235-33.493-12.715-51.669-12.928l-7.68 0.043c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165 4.736-22.4 12.501-30.165 18.389-12.501 30.165-12.501h3.84c28.16-0.64 52.992-10.88 72.192-27.477 13.995-12.117 24.96-27.563 31.744-45.141 10.539-24.533 11.691-50.901 4.949-74.923-5.077-18.048-14.549-34.731-27.819-48.469l-3.115-3.115c-8.363-8.363-12.544-19.2-12.544-30.165s4.139-21.845 12.459-30.165c8.405-8.405 19.243-12.587 30.251-12.587s21.845 4.139 30.165 12.459l2.603 2.603c19.755 19.328 44.373 29.952 69.632 32.085 15.787 1.365 31.787-0.597 46.976-5.845 4.096-0.512 7.936-1.536 11.349-3.072-1.323 0.043-2.603 0.128-3.797 0.171-8.576 0.512-12.672 1.621-16.299 3.243h3.413c1.835 0 3.584-0.128 5.333-0.341 2.56-0.896 5.077-1.835 7.552-2.901 3.84-0.171 3.883-0.213 3.925-0.213 24.789-10.624 43.947-29.184 55.595-51.541 8.235-15.787 12.715-33.493 12.928-51.627v-7.723c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501 22.4 4.736 30.165 12.501 12.501 18.389 12.501 30.165v3.84c0.128 27.179 9.728 52.053 25.728 71.467 11.349 13.781 25.899 24.789 42.496 32.043 24.661 10.88 51.456 12.203 75.861 5.333 18.048-5.077 34.731-14.549 48.469-27.819l3.115-3.072c8.363-8.363 19.2-12.544 30.165-12.544s21.845 4.139 30.165 12.459c8.405 8.405 12.587 19.243 12.587 30.251s-4.139 21.845-12.459 30.165l-2.603 2.603c-19.328 19.755-29.952 44.373-32.085 69.632-1.365 15.787 0.597 31.787 5.845 46.976 0.512 4.053 1.579 7.893 3.072 11.349-0.043-1.365-0.085-2.645-0.171-3.797z"
    ],
    share: [
        "M128 512v341.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h512c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-341.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v341.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-341.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM469.333 188.331v451.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-451.669l97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-170.667-170.667c-3.925-3.925-8.619-7.083-13.824-9.259-10.453-4.309-22.229-4.309-32.683 0-5.035 2.091-9.728 5.163-13.824 9.259l-170.667 170.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
    ],
    begin: [
        "M784 886.656c7.253 5.803 16.555 9.344 26.667 9.344 23.552 0 42.667-19.115 42.667-42.667v-682.667c0.043-9.301-3.029-18.731-9.344-26.667-14.72-18.389-41.557-21.376-59.989-6.656l-426.667 341.333c-2.261 1.792-4.608 4.053-6.656 6.656-14.72 18.389-11.733 45.269 6.656 59.989zM768 764.544l-315.691-252.544 315.691-252.544zM256 810.667v-597.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v597.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667z"
    ],
    skipForward: [
        "M240 137.344c-7.253-5.803-16.555-9.344-26.667-9.344-23.552 0-42.667 19.115-42.667 42.667v682.667c-0.043 9.301 3.029 18.731 9.344 26.667 14.72 18.389 41.557 21.376 59.989 6.656l426.667-341.333c2.261-1.792 4.608-4.053 6.656-6.656 14.72-18.389 11.733-45.269-6.656-59.989zM256 259.456l315.691 252.544-315.691 252.544zM768 213.333v597.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-597.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"
    ],
    forbidden: [
        "M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM812.032 751.701l-539.733-539.733c65.707-52.565 149.035-83.968 239.701-83.968 106.069 0 201.984 42.923 271.531 112.469s112.469 165.461 112.469 271.531c0 90.667-31.403 173.995-83.968 239.701zM211.968 272.299l539.733 539.733c-65.707 52.565-149.035 83.968-239.701 83.968-106.069 0-201.984-42.923-271.531-112.469s-112.469-165.461-112.469-271.531c0-90.667 31.403-173.995 83.968-239.701z"
    ],
    square: [
        "M213.333 85.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM213.333 170.667h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501z"
    ],
    star: [
        "M550.272 66.432c-3.925-8.064-10.581-15.019-19.371-19.371-21.12-10.411-46.72-1.749-57.131 19.371l-121.941 246.997-272.683 39.893c-8.875 1.237-17.536 5.419-24.363 12.416-16.469 16.896-16.085 43.904 0.768 60.331l197.248 192.128-46.549 271.445c-1.536 8.832-0.256 18.389 4.309 27.051 10.965 20.864 36.779 28.885 57.643 17.92l243.797-128.213 243.84 128.213c7.936 4.224 17.408 5.931 27.051 4.309 23.211-3.968 38.827-26.027 34.859-49.28l-46.549-271.445 197.248-192.128c6.443-6.229 11.051-14.677 12.459-24.405 3.413-23.296-12.715-44.971-36.053-48.384l-272.64-39.851zM512 181.717l93.568 189.611c6.443 13.013 18.603 21.291 32.085 23.339l209.323 30.592-151.424 147.499c-10.411 10.155-14.549 24.277-12.288 37.76l35.712 208.341-187.136-98.432c-12.843-6.741-27.605-6.315-39.723 0l-187.136 98.432 35.712-208.341c2.475-14.336-2.517-28.203-12.288-37.76l-151.424-147.499 209.365-30.635c14.336-2.091 25.984-11.093 32.085-23.296z"
    ],
    sun: [
        "M768 512c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965-134.741 28.715-181.035 74.965-74.965 110.336-74.965 181.035 28.715 134.741 74.965 181.035 110.336 74.965 181.035 74.965 134.741-28.715 181.035-74.965 74.965-110.336 74.965-181.035zM682.667 512c0 47.147-19.072 89.728-50.005 120.661s-73.515 50.005-120.661 50.005-89.728-19.072-120.661-50.005-50.005-73.515-50.005-120.661 19.072-89.728 50.005-120.661 73.515-50.005 120.661-50.005 89.728 19.072 120.661 50.005 50.005 73.515 50.005 120.661zM469.333 42.667v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM469.333 896v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM149.888 210.219l60.587 60.587c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-60.587-60.587c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM753.195 813.525l60.587 60.587c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-60.587-60.587c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM42.667 554.667h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM896 554.667h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM210.219 874.112l60.587-60.587c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-60.587 60.587c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0zM813.525 270.805l60.587-60.587c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-60.587 60.587c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
    ],
    tag: [
        "M908.672 602.325c24.875-25.003 37.291-57.685 37.291-90.24 0.043-32.597-12.373-65.365-37.291-90.453l-366.507-366.507c-7.723-7.68-18.389-12.459-30.165-12.459h-426.667c-23.552 0-42.667 19.115-42.667 42.667v426.667c0 10.923 4.181 21.845 12.501 30.208l366.592 366.165c25.003 24.96 57.856 37.461 90.539 37.419s65.536-12.544 90.453-37.504zM848.341 541.995l-305.92 305.92c-8.363 8.363-19.2 12.544-30.165 12.544s-21.845-4.139-30.165-12.459l-354.091-353.707v-366.293h366.336l354.005 354.005c8.192 8.235 12.331 19.072 12.331 30.037 0 10.923-4.139 21.717-12.331 29.952zM298.667 341.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667z"
    ],
    terminal: [
        "M200.832 755.499l256-256c16.683-16.683 16.683-43.691 0-60.331l-256-256c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0zM512 853.333h341.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-341.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    thumbsDown: [
        "M469.333 640c0-23.552-19.115-42.667-42.667-42.667h-242.304c-2.773-0.085-6.528-0.469-6.528-0.469-11.648-1.749-21.419-8.021-27.947-16.896s-9.6-20.053-7.851-31.659l58.88-383.915c1.579-10.197 6.656-19.115 13.867-25.6 7.637-6.869 17.707-10.923 29.269-10.795h438.613v417.621l-153.941 346.368c-13.099-4.181-24.832-11.435-34.389-20.992-15.488-15.488-25.003-36.736-25.003-60.331zM384 682.667v128c0 47.104 19.157 89.856 50.005 120.661s73.557 50.005 120.661 50.005c17.28 0 32.171-10.283 38.997-25.344l170.667-384c2.56-5.717 3.712-11.733 3.669-17.323v-469.333c0-23.552-19.115-42.667-42.667-42.667h-481.28c-32.725-0.384-63.232 11.989-86.229 32.555-21.547 19.285-36.565 45.909-41.259 76.075l-58.88 384.085c-5.333 34.987 4.096 68.864 23.467 95.189s48.939 45.355 83.84 50.645c7.040 1.067 14.208 1.579 20.992 1.451zM725.333 128h113.92c15.403-0.256 28.757 5.077 38.912 14.165 9.088 8.149 15.531 19.2 17.835 31.829v289.579c-1.579 14.507-8.875 26.88-19.413 35.541-10.027 8.277-22.912 13.056-36.736 12.843l-114.517 0.043c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h113.323c34.56 0.512 66.944-11.52 92.16-32.256 26.539-21.803 45.184-53.376 50.176-90.027 0.213-1.707 0.341-3.712 0.341-5.717v-298.667c0-1.792-0.128-3.797-0.384-5.845-4.736-34.261-21.547-64.427-45.867-86.187-25.6-22.912-59.605-36.608-95.829-35.925h-113.92c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    thumbsUp: [
        "M554.667 384c0 23.552 19.115 42.667 42.667 42.667h242.304c2.773 0.085 6.528 0.469 6.528 0.469 11.648 1.749 21.419 8.021 27.947 16.896s9.6 20.053 7.851 31.659l-58.88 383.915c-1.579 10.197-6.656 19.115-13.867 25.6-7.68 6.869-17.707 10.923-29.269 10.795h-438.613v-417.621l153.941-346.368c13.099 4.181 24.832 11.435 34.389 20.992 15.488 15.488 25.003 36.736 25.003 60.331zM640 341.333v-128c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005c-17.28 0-32.171 10.283-38.997 25.344l-170.667 384c-2.56 5.717-3.712 11.733-3.669 17.323v469.333c0 23.552 19.115 42.667 42.667 42.667h481.28c32.725 0.384 63.232-11.989 86.229-32.555 21.547-19.285 36.565-45.909 41.259-76.075l58.88-384.085c5.333-34.987-4.096-68.864-23.467-95.189s-48.939-45.355-83.84-50.645c-7.040-1.067-14.208-1.579-20.992-1.451zM298.667 896h-128c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-298.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h128c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-128c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v298.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h128c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"
    ],
    trash: [
        "M768 298.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-426.667c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-554.667zM725.333 213.333v-42.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v42.667h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h42.667v554.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h426.667c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-554.667h42.667c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667zM384 213.333v-42.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v42.667z"
    ],
    unlock: [
        "M213.333 512h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v298.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-298.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM341.333 426.667v-128c-0.043-47.189 18.987-89.813 49.877-120.789 30.848-30.891 73.344-50.005 120.363-50.091 43.947 0.128 83.115 16.128 113.152 42.667 27.221 24.107 46.805 56.832 54.613 94.251 4.821 23.083 27.392 37.888 50.475 33.067s37.888-27.392 33.067-50.475c-11.605-55.765-40.875-104.704-81.579-140.757-45.227-40.021-104.619-64.171-169.515-64.085-70.699 0.085-134.699 28.843-180.949 75.179s-74.923 110.379-74.837 181.035v128h-42.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v298.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-298.667c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504z"
    ],
    upload: [
        "M853.333 640v170.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v170.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-170.667c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667zM469.333 230.997v409.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-409.003l140.501 140.501c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-213.333-213.333c-3.925-3.925-8.619-7.083-13.824-9.259-10.453-4.309-22.229-4.309-32.683 0-5.035 2.091-9.728 5.163-13.824 9.259l-213.333 213.333c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"
    ],
    uploadCloud: [
        "M469.333 614.997v281.003c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-281.003l97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-170.667-170.667c-3.925-3.925-8.619-7.083-13.824-9.259s-10.795-3.243-16.341-3.243c-10.923 0-21.845 4.181-30.165 12.501l-170.667 170.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0zM890.411 822.101c62.037-33.835 104.576-89.685 123.051-152.491s13.013-132.779-20.821-194.816c-28.971-53.12-74.112-91.947-126.251-113.621-30.891-12.843-64.213-19.627-98.091-19.84h-22.485c-30.933-87.765-91.477-158.208-167.125-202.752-84.608-49.835-188.373-67.456-291.029-40.917s-184.875 92.245-234.752 176.853-67.456 188.373-40.917 291.029c15.872 61.312 45.781 115.584 84.267 158.421 15.744 17.536 42.752 18.944 60.245 3.2s18.944-42.752 3.2-60.245c-29.355-32.64-52.693-74.667-65.109-122.752-20.651-79.872-6.997-160.469 31.829-226.347s102.699-116.907 182.571-137.557 160.469-6.997 226.347 31.829 116.907 102.699 137.557 182.571c4.949 18.56 21.589 32 41.344 32h53.461c22.869 0.171 45.269 4.736 65.92 13.312 34.773 14.464 64.725 40.235 84.053 75.648 22.571 41.387 26.24 87.936 13.867 129.877s-40.661 79.104-82.048 101.632c-20.693 11.264-28.331 37.205-17.024 57.899s37.205 28.331 57.899 17.024z"
    ],
    user: [
        "M896 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-341.333c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h341.333c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM725.333 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM640 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496z"
    ],
    userMinus: [
        "M725.333 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-298.667c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h298.667c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM576 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM490.667 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496zM981.333 426.667h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"
    ],
    userPlus: [
        "M725.333 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-298.667c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h298.667c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM576 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM490.667 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496zM981.333 426.667h-85.333v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667h85.333v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667z"
    ],
    userX: [
        "M725.333 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-298.667c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h298.667c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM576 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM490.667 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496zM951.168 311.168l-76.501 76.501-76.501-76.501c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l76.501 76.501-76.501 76.501c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l76.501-76.501 76.501 76.501c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-76.501-76.501 76.501-76.501c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"
    ],
    users: [
        "M768 896v-85.333c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464h-341.333c-58.88 0-112.299 23.936-150.869 62.464s-62.464 91.989-62.464 150.869v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333c0-35.371 14.293-67.285 37.504-90.496s55.125-37.504 90.496-37.504h341.333c35.371 0 67.285 14.293 90.496 37.504s37.504 55.125 37.504 90.496v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM597.333 298.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM512 298.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496zM1024 896v-85.333c-0.043-53.12-19.499-101.76-51.84-139.136-27.819-32.128-65.195-55.936-107.904-67.243-22.784-6.016-46.123 7.552-52.139 30.336s7.552 46.123 30.336 52.139c25.899 6.869 48.469 21.248 65.195 40.619 19.371 22.443 30.976 51.456 31.019 83.285v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667zM672.085 174.891c34.261 8.789 61.653 30.507 78.379 58.752s22.656 62.72 13.867 96.981c-7.509 29.355-24.533 53.589-47.147 70.485-13.397 10.027-28.8 17.451-45.355 21.803-22.784 5.973-36.437 29.312-30.421 52.096s29.312 36.437 52.096 30.421c27.179-7.125 52.565-19.413 74.752-36.011 37.717-28.16 66.219-68.821 78.72-117.675 14.592-57.045 4.693-114.731-23.125-161.621s-73.6-83.328-130.645-97.963c-22.827-5.845-46.080 7.936-51.925 30.763s7.936 46.080 30.763 51.925z"
    ],
    video: [
        "M938.667 381.568v260.864l-182.613-130.432zM128 170.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h469.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-130.432l231.211 165.163c19.157 13.696 45.824 9.259 59.52-9.899 5.376-7.595 7.979-16.341 7.936-24.832v-426.667c0-23.552-19.115-42.667-42.667-42.667-9.301 0-17.92 2.987-24.789 7.936l-231.211 165.163v-130.432c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM128 256h469.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v426.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-469.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501z"
    ],
    videoOff: [
        "M454.827 256h142.507c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v142.507c0 11.776 4.779 22.443 12.501 30.165l42.667 42.667c14.976 14.976 38.315 16.512 55.168 4.395l188.331-136.192v343.125c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0.043-8.576-2.603-17.408-8.107-25.003-13.824-19.072-40.491-23.381-59.563-9.557l-226.517 163.883-4.48-4.48v-124.843c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-142.507c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM195.669 256l444.331 444.331v25.003c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-469.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-426.667c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM12.501 72.832l98.901 98.901c-28.715 3.712-54.485 16.981-73.899 36.437-23.125 23.083-37.504 55.168-37.504 90.496v426.667c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h469.333c35.328 0 67.413-14.379 90.496-37.504 11.477-11.477 20.821-25.173 27.307-40.363l236.032 236.032c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-938.667-938.667c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
    ],
    volume: [
        "M426.667 302.123v419.797l-144-115.2c-7.253-5.845-16.555-9.387-26.667-9.387h-128v-170.667h128c9.301 0.043 18.731-3.029 26.667-9.344zM442.667 180.011l-201.643 161.323h-155.691c-23.552 0-42.667 19.115-42.667 42.667v256c0 23.552 19.115 42.667 42.667 42.667h155.691l201.643 161.323c18.389 14.72 45.269 11.733 59.989-6.656 6.315-7.893 9.387-17.365 9.344-26.667v-597.333c0-23.552-19.115-42.667-42.667-42.667-10.112 0-19.413 3.541-26.667 9.344z"
    ],
    volumeLow: [
        "M426.667 302.123v419.797l-144-115.2c-7.253-5.845-16.555-9.387-26.667-9.387h-128v-170.667h128c9.301 0.043 18.731-3.029 26.667-9.344zM442.667 180.011l-201.643 161.323h-155.691c-23.552 0-42.667 19.115-42.667 42.667v256c0 23.552 19.115 42.667 42.667 42.667h155.691l201.643 161.323c18.389 14.72 45.269 11.733 59.989-6.656 6.315-7.893 9.387-17.365 9.344-26.667v-597.333c0-23.552-19.115-42.667-42.667-42.667-10.112 0-19.413 3.541-26.667 9.344zM632.875 391.125c33.323 33.323 49.963 76.928 49.963 120.661s-16.64 87.339-49.963 120.661c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c49.963-49.963 74.965-115.541 74.965-180.992s-25.003-131.029-74.965-180.992c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
    ],
    volumeHigh: [
        "M426.667 302.123v419.797l-144-115.2c-7.253-5.845-16.555-9.387-26.667-9.387h-128v-170.667h128c9.301 0.043 18.731-3.029 26.667-9.344zM442.667 180.011l-201.643 161.323h-155.691c-23.552 0-42.667 19.115-42.667 42.667v256c0 23.552 19.115 42.667 42.667 42.667h155.691l201.643 161.323c18.389 14.72 45.269 11.733 59.989-6.656 6.315-7.893 9.387-17.365 9.344-26.667v-597.333c0-23.552-19.115-42.667-42.667-42.667-10.112 0-19.413 3.541-26.667 9.344zM783.488 240.512c74.965 75.008 112.427 173.184 112.427 271.531 0 98.304-37.461 196.48-112.427 271.445-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c91.605-91.605 137.387-211.755 137.429-331.776 0-120.021-45.824-240.213-137.429-331.861-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331zM632.875 391.125c33.323 33.323 49.963 76.928 49.963 120.661s-16.64 87.339-49.963 120.661c-16.64 16.683-16.64 43.691 0 60.331s43.691 16.64 60.331 0c49.963-49.963 74.965-115.541 74.965-180.992s-25.003-131.029-74.965-180.992c-16.64-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
    ],
    volumeOff: [
        "M426.667 302.123v419.797l-144-115.2c-7.253-5.845-16.555-9.387-26.667-9.387h-128v-170.667h128c9.301 0.043 18.731-3.029 26.667-9.344zM442.667 180.011l-201.643 161.323h-155.691c-23.552 0-42.667 19.115-42.667 42.667v256c0 23.552 19.115 42.667 42.667 42.667h155.691l201.643 161.323c18.389 14.72 45.269 11.733 59.989-6.656 6.315-7.893 9.387-17.365 9.344-26.667v-597.333c0-23.552-19.115-42.667-42.667-42.667-10.112 0-19.413 3.541-26.667 9.344zM695.168 414.165l97.835 97.835-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l97.835-97.835 97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-97.835-97.835 97.835-97.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-97.835 97.835-97.835-97.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
    ],
    wifi: [
        "M240.64 568.235c83.712-69.717 186.069-101.931 287.275-98.347 92.459 3.285 183.893 36.48 259.029 98.475 18.176 14.976 45.056 12.416 60.075-5.76s12.416-45.056-5.76-60.075c-89.899-74.155-199.424-113.963-310.272-117.888-121.429-4.309-244.523 34.389-344.917 118.059-18.091 15.061-20.565 41.984-5.461 60.075s41.984 20.565 60.075 5.461zM88.789 416c125.312-110.464 281.6-162.987 436.736-159.445 146.901 3.371 292.651 57.045 409.771 159.531 17.749 15.531 44.672 13.739 60.203-4.011s13.739-44.672-4.011-60.203c-132.608-116.053-297.685-176.853-464.043-180.651-175.744-4.011-353.067 55.595-495.061 180.779-17.707 15.573-19.371 42.539-3.797 60.203s42.539 19.371 60.203 3.797zM388.651 722.133c42.24-30.037 91.563-42.453 139.691-38.656 38.016 2.987 75.307 16.128 107.648 38.784 19.285 13.525 45.909 8.832 59.435-10.453s8.832-45.909-10.453-59.435c-44.928-31.488-96.811-49.792-149.888-53.973-67.413-5.333-136.704 12.16-195.84 54.144-19.2 13.653-23.723 40.277-10.069 59.477s40.277 23.723 59.477 10.069zM512 896c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667z"
    ],
    wifiOff: [
        "M694.656 510.251c33.664 16.427 63.915 36.565 88.064 57.472 17.835 15.403 44.757 13.483 60.203-4.352s13.483-44.757-4.352-60.203c-29.995-25.984-66.517-50.133-106.496-69.675-21.163-10.325-46.72-1.536-57.045 19.627s-1.536 46.72 19.627 57.045zM460.373 258.005c171.52-13.824 332.629 41.301 456.363 142.379 6.229 5.12 12.373 10.325 18.432 15.659 17.664 15.573 44.629 13.867 60.203-3.797s13.867-44.629-3.797-60.203c-6.827-6.016-13.824-11.947-20.864-17.707-140.117-114.475-322.816-177.024-517.205-161.323-23.467 1.835-40.96 22.4-39.083 45.867s22.485 41.003 45.952 39.083zM388.651 722.133c42.24-30.037 91.563-42.453 139.691-38.656 38.016 2.987 75.307 16.128 107.648 38.784 9.941 6.955 21.845 9.088 32.853 6.912l282.325 282.325c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-544-544c-2.133-2.688-4.523-5.12-7.211-7.211l-387.456-387.456c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l174.421 174.421c-53.632 26.837-106.24 61.995-154.581 104.747-17.664 15.616-19.328 42.581-3.712 60.245s42.581 19.328 60.245 3.712c50.816-44.928 106.624-80.085 162.219-104.576l99.115 99.115c-57.941 19.499-113.963 50.219-164.224 92.203-18.091 15.104-20.48 42.027-5.376 60.117s42.027 20.48 60.117 5.376c54.187-45.312 116.224-74.667 178.688-88.491l118.997 118.997c-1.109-0.085-2.219-0.213-3.328-0.299-67.413-5.333-136.704 12.16-195.84 54.144-19.2 13.653-23.723 40.277-10.069 59.477s40.277 23.723 59.477 10.069zM512 896c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667z"
    ],
    x: [
        "M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
    ],
    youtube: [
        "M920.021 283.179c12.245 65.237 19.115 140.587 18.645 218.667 0.811 65.195-5.248 139.392-18.645 214.229-2.432 8.875-6.4 17.195-11.605 24.533-9.685 13.696-23.808 24.107-40.491 28.8-25.771 6.869-91.989 11.733-165.419 14.549-95.147 3.669-190.507 3.669-190.507 3.669s-95.36 0-190.507-3.627c-73.429-2.816-139.648-7.637-164.949-14.421-8.747-2.432-16.896-6.357-24.149-11.435-13.269-9.387-23.467-22.869-28.587-39.381-12.16-65.109-18.944-140.203-18.475-218.027-0.896-65.707 5.163-140.459 18.645-215.893 2.432-8.875 6.4-17.195 11.605-24.533 9.685-13.696 23.808-24.107 40.491-28.8 25.771-6.869 91.989-11.733 165.419-14.549 95.147-3.627 190.507-3.627 190.507-3.627s95.36 0 190.549 3.328c73.344 2.56 140.032 6.955 164.523 12.928 9.344 2.688 17.963 7.040 25.515 12.757 13.099 9.899 22.955 23.936 27.435 40.875zM1003.093 263.552c-9.259-36.949-30.635-67.84-59.008-89.301-15.915-12.032-33.963-21.077-53.291-26.667-38.315-9.387-115.029-13.781-185.259-16.213-96.725-3.371-193.536-3.371-193.536-3.371s-96.939 0-193.749 3.712c-70.059 2.688-147.2 7.467-184.192 17.365-37.291 10.539-67.456 32.853-88.064 61.867-11.52 16.256-20.011 34.603-25.045 54.101-0.256 1.024-0.469 2.091-0.64 3.029-14.635 80.981-21.291 161.835-20.309 233.856-0.512 82.091 6.869 163.456 20.352 234.752 0.256 1.323 0.555 2.645 0.896 3.755 10.453 36.693 32.853 66.859 61.909 87.381 15.232 10.752 32.299 18.901 50.432 23.936 37.504 10.027 114.603 14.805 184.661 17.493 96.811 3.712 193.749 3.712 193.749 3.712s96.939 0 193.749-3.712c70.059-2.688 147.157-7.467 184.192-17.365 37.248-10.539 67.456-32.853 88.021-61.867 11.52-16.256 20.053-34.603 25.045-54.059 0.256-1.067 0.512-2.133 0.64-3.029 14.507-80.384 21.163-160.64 20.309-232.107 0.512-82.133-6.869-163.541-20.352-234.837-0.171-0.853-0.341-1.707-0.512-2.432zM458.667 567.509v-132.352l116.352 66.176zM437.077 677.931l245.333-139.52c20.48-11.648 27.648-37.717 16-58.197-3.968-6.997-9.643-12.459-16-16l-245.333-139.52c-20.48-11.648-46.549-4.48-58.197 16-3.84 6.741-5.632 14.080-5.589 21.077v279.040c0 23.552 19.115 42.667 42.667 42.667 7.765 0 15.019-2.091 21.077-5.589z"
    ],
    zoomIn: [
        "M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331zM341.333 512h85.333v85.333c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-85.333h85.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-85.333v-85.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v85.333h-85.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    zoomOut: [
        "M684.416 676.523c-1.451 1.109-2.859 2.347-4.224 3.712s-2.56 2.731-3.712 4.224c-53.675 51.755-126.677 83.541-207.147 83.541-82.475 0-157.099-33.365-211.2-87.467s-87.467-128.725-87.467-211.2 33.365-157.099 87.467-211.2 128.725-87.467 211.2-87.467 157.099 33.365 211.2 87.467 87.467 128.725 87.467 211.2c0 80.469-31.787 153.472-83.584 207.189zM926.165 865.835l-156.8-156.8c52.523-65.707 83.968-149.035 83.968-239.701 0-106.027-43.008-202.069-112.469-271.531s-165.504-112.469-271.531-112.469-202.069 43.008-271.531 112.469-112.469 165.504-112.469 271.531 43.008 202.069 112.469 271.531 165.504 112.469 271.531 112.469c90.667 0 173.995-31.445 239.701-83.968l156.8 156.8c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331zM341.333 512h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
    ],
    game: [
        "M992 193.588v-1.588h-672c-176.73 0-320 143.27-320 320s143.27 320 320 320c104.69 0 197.632-50.278 256.014-128h127.97c58.378 77.722 151.324 128 256.016 128 176.732 0 320-143.268 320-320 0-165.93-126.292-302.356-288-318.412zM512 576h-128v128h-128v-128h-128v-128h128v-128h128v128h128v128zM896 576c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1088 576c-35.348 0-64-28.654-64-64 0-35.348 28.652-64 64-64s64 28.652 64 64c0 35.346-28.652 64-64 64z"
    ],
    google: [
        "M512 0c-282.8 0-512 229.2-512 512s229.2 512 512 512 512-229.2 512-512-229.2-512-512-512zM519.6 896c-212.2 0-384-171.8-384-384s171.8-384 384-384c103.6 0 190.4 37.8 257.2 100.4l-104.2 100.4c-28.6-27.4-78.4-59.2-153-59.2-131.2 0-238 108.6-238 242.4s107 242.4 238 242.4c152 0 209-109.2 217.8-165.6h-217.8v-131.6h362.6c3.2 19.2 6 38.4 6 63.6 0.2 219.4-146.8 375.2-368.6 375.2z"
    ],
    github: [
        "M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"
    ],
    npm: [
        "M0 0v1024h1024v-1024h-1024zM832 832h-128v-512h-192v512h-320v-640h640v640z"
    ],
    html5: [
        "M60.538 0l82.144 921.63 368.756 102.37 369.724-102.524 82.3-921.476h-902.924zM784.63 301.428h-432.54l10.302 115.75h411.968l-31.042 347.010-231.844 64.254-231.572-64.254-15.83-177.512h113.494l8.048 90.232 125.862 33.916 0.278-0.078 125.934-33.992 13.070-146.55h-391.74l-30.494-341.8h566.214l-10.108 113.024z"
    ]
};


const { svg: $fef058b85aa29b7a$var$svg, path: $fef058b85aa29b7a$var$path } = (0, $hgUW1$svgElements);
const $fef058b85aa29b7a$export$df03f54e09e486fa = new Proxy((0, $2d5b9d9e4f25abad$export$2e2bcd8739ae039), {
    get (target, prop) {
        return target[prop] === undefined ? undefined : (...parts)=>$fef058b85aa29b7a$var$svg({
                width: "24",
                height: "24",
                viewBox: "0 0 1024 1024",
                class: "icon-" + prop.replace(/([a-z])([A-Z])/g, (_, a, b)=>a + "-" + b.toLocaleLowerCase())
            }, ...parts, ...target[prop].map((d)=>$fef058b85aa29b7a$var$path({
                    d: d
                })));
    }
});


var $ada9b1474dc4b958$exports = {};

$parcel$export($ada9b1474dc4b958$exports, "LiveExample", () => $ada9b1474dc4b958$export$41199f9ac14d8c08);
$parcel$export($ada9b1474dc4b958$exports, "liveExample", () => $ada9b1474dc4b958$export$dafbe0fa988b899b);
$parcel$export($ada9b1474dc4b958$exports, "makeExamplesLive", () => $ada9b1474dc4b958$export$afa6494eb589c19e);
/*!
# `<live-example>`

`<live-example>` makes it easy to insert interactive code examples in a web page.
It's effectively a super lightweight fiddle based on the `b8rjs`'s `fiddle` component
(which I miss dearly). (You're probably looking at it right now.)

You can simply wrap it around a sequence of code blocks in the DOM with the
languages (js, html, css) as annotations or you can directly set the `js`, `html`,
and `css` properties.

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
```js
// this code executes in an async function body
// it has xinjs, xinjsui, and preview (the preview div) available as local variables
const { div } = xinjs.elements
preview.append(div({class: 'example'}, 'fiddle de dee!'))
```
```html
<h2>Example</h2>
```

A `<live-example>` can be given a `context` object {[key: string]: any}, which is the
set of values available in the javascript's execution context (it is wrapped in an
async function and passed those values). By default, that context comprises `preview`
(the `<div>` in which the example is rendered), `xinjs` (`* from xinjs`),
and `xinjsui` (`* from xinjsui`).

The `LiveExample` class provides the static `insertExamples(element: HTMLElement)`
function that will replace any sequence of
`pre code[class="language-html"],pre code[class="language-js"],pre code[class="language-css"]`
elements with a `<live-example>` instance.
*/ 


var $6bbe441346901d5a$exports = {};

$parcel$export($6bbe441346901d5a$exports, "TabSelector", () => $6bbe441346901d5a$export$a3a7254f7f149b03);
$parcel$export($6bbe441346901d5a$exports, "tabSelector", () => $6bbe441346901d5a$export$a932f737dcd864a2);
/*!
# `<tab-selector>`

`<tab-selector>` creates a `tabpanel` for its children, creating a `tab` for each based on its
`name` attribute.

```js
[...preview.querySelectorAll('div[name]')].forEach(div => {
  div.style.color = `hsl(${(Math.random() * 360).toFixed(0)} 50% 50%)`
})

const { div, button } = xinjs.elements
const tabSelector = preview.querySelector('tab-selector')

let bodycount = 0
preview.querySelector('.add').addEventListener('click', () => {
  const name = `new tab ${++bodycount}`
  const body = div(
    {name}, 
    name,
    button('Remove Me', { onClick() { tabSelector.removeTabBody(body) }})
  )
  tabSelector.addTabBody(body, true)
})
```
```html
<tab-selector>
  <div name="first">first body</div>
  <div name="second">second body</div>
  <div name="third">third body</div>
  <button class="add" slot="after-tabs">
    <span class="icon-plus"></span>
  </button>
</tab-selector>
```
```css
tab-selector {
    height: 100%;
  }
  
  div[name] {
    padding: 20px;
    text-align: center;
    height: 100%;
    font-size: 200%;
  }
```


The `<tab-selector>`s `value` is the index of its active body.

A `<tab-selector>` has `addTabBody(body: HTMLElement, select?: boolean)` and 
`removeTabBody(body: number | HTMLElement)` methods for updating its content.

If you want 
*/ 
const { div: $6bbe441346901d5a$var$div, slot: $6bbe441346901d5a$var$slot } = (0, $hgUW1$elements);
class $6bbe441346901d5a$export$a3a7254f7f149b03 extends (0, $hgUW1$Component) {
    value = 0;
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
            cursor: "default"
        },
        ':host .tabs > [aria-selected="true"]': {
            color: (0, $hgUW1$vars).tabSelectorSelectedColor
        },
        ":host .border": {
            background: "var(--tab-selector-bar-color, #ccc)"
        },
        ":host .border > .selected": {
            content: " ",
            width: 0,
            height: "var(--tab-selector-bar-height, 2px)",
            background: (0, $hgUW1$vars).tabSelectorSelectedColor,
            transition: "ease-out 0.2s"
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
        const tabIndex = [
            ...tabs.children
        ].indexOf(target);
        if (tabIndex > -1) this.value = tabIndex;
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
            const name = tabBody.getAttribute("name");
            const bodyId = `${this.instanceId}-${index}`;
            tabBody.id = bodyId;
            tabs.append($6bbe441346901d5a$var$div(name, {
                tabindex: 0,
                role: "tab",
                ariaControls: bodyId
            }));
        }
    };
    connectedCallback() {
        super.connectedCallback();
        const { tabs: tabs } = this.parts;
        tabs.addEventListener("click", this.pickTab);
        tabs.addEventListener("keydown", this.keyTab);
        this.setupTabs();
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
    tag: "tab-selector"
});



const { div: $ada9b1474dc4b958$var$div, xinSlot: $ada9b1474dc4b958$var$xinSlot, style: $ada9b1474dc4b958$var$style, button: $ada9b1474dc4b958$var$button } = (0, $hgUW1$elements);
const $ada9b1474dc4b958$var$AsyncFunction = (async ()=>{}).constructor;
const $ada9b1474dc4b958$var$codeStyle = {
    style: {
        width: "100%",
        height: "100%"
    }
};
document.head.append($ada9b1474dc4b958$var$style({
    id: "live-example"
}, `:root {
  --live-example-height: 400px;
}

live-example {
  --live-example-preview-height: calc(var(--live-example-height) * 0.5);
  --live-example-editor-height: calc(var(--live-example-height) * 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  height: var(--live-example-height);
  background: var(--background);
}

live-example.-maximize {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  margin: 0 !important;
}

live-example.-maximize .hide-if-maximized,
live-example:not(.-maximize) .show-if-maximized {
  display: none;
}

live-example [part="example"] {
  flex: 1 1 var(--live-example-preview-height);
  height: var(--live-example-preview-height);
  position: relative;
}

live-example .preview {
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #f7f7f7 url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 8 8" fill-opacity=".02" >\
  <rect x="4" width="4" height="4" /><rect y="4" width="4" height="4" /></svg>');
}

live-example [part="editors"] {
  flex: 1 1 var(--live-example-editor-height);
  height: var(--live-example-editor-height);
  position: relative;
}
`));
class $ada9b1474dc4b958$export$41199f9ac14d8c08 extends (0, $hgUW1$Component) {
    context = {
        xinjs: $hgUW1$xinjs,
        xinjsui: $149c1bd638913645$exports
    };
    static insertExamples(element) {
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
                }
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
    get css() {
        return this.parts.css.value;
    }
    set css(code) {
        this.parts.css.value = code;
    }
    get html() {
        return this.parts.html.value;
    }
    set html(code) {
        this.parts.html.value = code;
    }
    get js() {
        return this.parts.js.value;
    }
    set js(code) {
        this.parts.js.value = code;
    }
    content = ()=>[
            $ada9b1474dc4b958$var$div({
                part: "example"
            }, $ada9b1474dc4b958$var$style({
                part: "style"
            })),
            (0, $6bbe441346901d5a$export$a932f737dcd864a2)({
                part: "editors"
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
            }), $ada9b1474dc4b958$var$button({
                slot: "after-tabs",
                title: "copy as markdown",
                class: "transparent",
                onClick: this.copy
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).copy()), $ada9b1474dc4b958$var$button({
                slot: "after-tabs",
                title: "reload",
                class: "transparent",
                onClick: this.refresh
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).refresh()), $ada9b1474dc4b958$var$button({
                part: "maximize",
                slot: "after-tabs",
                title: "maximize",
                class: "transparent",
                onClick: this.toggleMaximize
            }, (0, $fef058b85aa29b7a$export$df03f54e09e486fa).minimize({
                class: "icon-minimize show-if-maximized"
            }), (0, $fef058b85aa29b7a$export$df03f54e09e486fa).maximize({
                class: "icon-maximize show-if-minimized"
            }))),
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
    refresh = ()=>{
        const { example: example, style: style } = this.parts;
        const preview = $ada9b1474dc4b958$var$div({
            class: "preview"
        });
        preview.innerHTML = this.html;
        style.innerText = this.css;
        if (example.children.length > 1) example.children[1].replaceWith(preview);
        else example.append(preview);
        const context = {
            preview: preview,
            ...this.context
        };
        // @ts-expect-error ts is wrong
        const func = new $ada9b1474dc4b958$var$AsyncFunction(...Object.keys(context), this.js);
        func(...Object.values(context)).catch((err)=>console.error(err));
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
        this.refresh();
    }
}
const $ada9b1474dc4b958$export$dafbe0fa988b899b = $ada9b1474dc4b958$export$41199f9ac14d8c08.elementCreator({
    tag: "live-example"
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


var $6246d5006b5a56c3$exports = {};

$parcel$export($6246d5006b5a56c3$exports, "MAPSTYLES", () => $6246d5006b5a56c3$export$7d6f3ccbb0a81c30);
$parcel$export($6246d5006b5a56c3$exports, "MapBox", () => $6246d5006b5a56c3$export$f2ffec4d96a433ed);
$parcel$export($6246d5006b5a56c3$exports, "mapBox", () => $6246d5006b5a56c3$export$ca243e53be209efb);
/*!
# `<map-box>`

A [mapboxgl](https://docs.mapbox.com/mapbox-gl-js/api/) wrapper.

```html
<!-- please don't abuse my mapbox token -->
<map-box 
  style="width: 100%; height: 100%"
  coords="21.4389,-158.0001,9"
  token="pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA"
></map-box>
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
    mapStyle = $6246d5006b5a56c3$export$7d6f3ccbb0a81c30[0];
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
                style: this.mapStyle.url,
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
    tag: "map-box"
});


var $1b88c9cb596c3426$exports = {};

$parcel$export($1b88c9cb596c3426$exports, "MarkdownViewer", () => $1b88c9cb596c3426$export$575eb698d362902);
$parcel$export($1b88c9cb596c3426$exports, "markdownViewer", () => $1b88c9cb596c3426$export$305b975a891d0dfa);


class $1b88c9cb596c3426$export$575eb698d362902 extends (0, $hgUW1$Component) {
    src = "";
    value = "";
    content = null;
    constructor(){
        super();
        this.initAttributes("src");
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.src !== "") (async ()=>{
            const request = await fetch(this.src);
            this.value = await request.text();
        })();
        else if (this.value === "") this.value = this.textContent != null ? this.textContent : "";
    }
    didRender = ()=>{};
    render() {
        super.render();
        this.innerHTML = (0, $hgUW1$marked)(typeof this.value === "string" ? this.value : "", {
            mangle: false,
            headerIds: false
        });
        this.didRender();
    }
}
const $1b88c9cb596c3426$export$305b975a891d0dfa = $1b88c9cb596c3426$export$575eb698d362902.elementCreator({
    tag: "markdown-viewer"
});


var $815deb6062b0b31b$exports = {};

$parcel$export($815deb6062b0b31b$exports, "blockStyle", () => $815deb6062b0b31b$export$94309935dd6eab19);
$parcel$export($815deb6062b0b31b$exports, "spacer", () => $815deb6062b0b31b$export$8cc075c801fd6817);
$parcel$export($815deb6062b0b31b$exports, "elastic", () => $815deb6062b0b31b$export$e3f8198a677f57c2);
$parcel$export($815deb6062b0b31b$exports, "commandButton", () => $815deb6062b0b31b$export$74540e56d8cdd242);
$parcel$export($815deb6062b0b31b$exports, "richTextWidgets", () => $815deb6062b0b31b$export$8ed2ffe5d58aaa75);
$parcel$export($815deb6062b0b31b$exports, "RichText", () => $815deb6062b0b31b$export$f284d8638abd8920);
$parcel$export($815deb6062b0b31b$exports, "richText", () => $815deb6062b0b31b$export$7bcc4193ad80bf91);
/*!
# `<rich-text>`

A simple and easily extensible `document.execCommand` WYSIWYG editor with some conveniences.

By default, it treats its initial contents as its document, but you can also set (and get)
its `value`.

```html
<rich-text widgets="minimal">
<h3>Heading</h3>
<p>And some <b>text</b></p>
</rich-text>
```

It has a `toolbar` slot (actually a xin-slot because it doesn't use the shadowDOM).

If you set the `widgets` attribute to `default` or `minimal` you will get a toolbar
for free. Or you can add your own custom widgets.

A number of convenience functions available, including:

- `commandButton(title: string, command: string, iconClass: string)`
- `blockStyle(options: Array<{caption: string, tagType: string}>)`
- `spacer(width = '10px')`
- `elastic(width = '10px')`

These each create a toolbar widget. A `blockStyle`-generated `<select>` element will
automatically have its value changed based on the current selection.

The `<rich-text>` component provides `selectedText` and `selectedBlocks` properties, allowing
you to easily perform operations on text selections, and a `selectionChange` callback (which
simply passes through document `selectionchange` events, but also passes a reference to
the `<rich-text>` component).
*/ 

const { style: $815deb6062b0b31b$var$style, xinSlot: $815deb6062b0b31b$var$xinSlot, div: $815deb6062b0b31b$var$div, select: $815deb6062b0b31b$var$select, fragment: $815deb6062b0b31b$var$fragment, option: $815deb6062b0b31b$var$option, button: $815deb6062b0b31b$var$button, span: $815deb6062b0b31b$var$span } = (0, $hgUW1$elements);
document.head.append($815deb6062b0b31b$var$style({
    id: "rich-text"
}, `rich-text {
  display: flex;
  flex-direction: column;
  height: 100%;
}
rich-text [part="toolbar"] {
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
        $815deb6062b0b31b$export$74540e56d8cdd242("left-justify", "justifyLeft", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).form()),
        $815deb6062b0b31b$export$74540e56d8cdd242("center", "justifyCenter", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).formatAlignCenter()),
        $815deb6062b0b31b$export$74540e56d8cdd242("right-justify", "justifyRight", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).formatAlignRight()),
        $815deb6062b0b31b$export$8cc075c801fd6817(),
        $815deb6062b0b31b$export$74540e56d8cdd242("bullet list", "insertUnorderedList", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).formatListBulleted()),
        $815deb6062b0b31b$export$74540e56d8cdd242("numbered list", "insertOrderedList", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).formatListNumbered()),
        $815deb6062b0b31b$export$8cc075c801fd6817(),
        $815deb6062b0b31b$export$74540e56d8cdd242("indent", "indent", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).formatIndentIncrease()),
        $815deb6062b0b31b$export$74540e56d8cdd242("indent", "outdent", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).formatIndentDecrease())
    ];
const $815deb6062b0b31b$var$characterStyleWidgets = ()=>[
        $815deb6062b0b31b$export$74540e56d8cdd242("bold", "bold", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).formatBold()),
        $815deb6062b0b31b$export$74540e56d8cdd242("italic", "italic", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).formatItalic()),
        $815deb6062b0b31b$export$74540e56d8cdd242("underline", "underline", (0, $fef058b85aa29b7a$export$df03f54e09e486fa).formatUnderlined())
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
    tag: "rich-text"
});


var $b9e5aa5581e8f051$exports = {};

$parcel$export($b9e5aa5581e8f051$exports, "SideNav", () => $b9e5aa5581e8f051$export$1a35787d6353cf6a);
$parcel$export($b9e5aa5581e8f051$exports, "sideNav", () => $b9e5aa5581e8f051$export$938418df2b06cb50);
/*!
# `<side-nav>`

The default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small
screens, and display the sidebar when space is available (with the user able to explicitly hide
the sidebar if so desired). `<side-nav>` provides this functionality.

`<side-nav>` is used to handle the layout of the documentation tab panel.
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
        if (this.offsetParent === null) return;
        const empty = [
            ...this.childNodes
        ].find((node)=>node instanceof Element ? node.getAttribute("slot") !== "nav" : true) === undefined;
        if (empty) {
            this.style.setProperty("--nav-width", "100%");
            this.style.setProperty("--content-width", "0%");
            return;
        }
        const parent = this.offsetParent;
        this.compact = parent.offsetWidth < this.minSize;
        if (!this.compact) {
            content.classList.add("-side-nav-visible");
            this.style.setProperty("--nav-width", `${this.navSize}px`);
            this.style.setProperty("--content-width", `calc(100% - ${this.navSize}px)`);
            this.style.setProperty("--margin", "0");
        } else {
            content.classList.remove("-side-nav-visible");
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
    tag: "side-nav"
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
    tag: "size-break"
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


$parcel$exportWildcard($149c1bd638913645$exports, $59f50bee37676c09$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $8a70bd76f9b7e656$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $e6e19030d0c18d6f$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $46dc716dd2cf5925$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $ada9b1474dc4b958$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $6246d5006b5a56c3$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $1b88c9cb596c3426$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $815deb6062b0b31b$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $b9e5aa5581e8f051$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $0f2017ffca44b547$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $6bbe441346901d5a$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $ef1971ff775ba547$exports);
$parcel$exportWildcard($149c1bd638913645$exports, $fef058b85aa29b7a$exports);


export {$5265d118b5240170$export$c947e3cd16175f27 as trackDrag, $5c31145f3e970423$export$c6e082819e9a0330 as scriptTag, $5c31145f3e970423$export$63257fda812a683f as styleSheet, $5a28660a6cbe2731$export$b37fb374f2e92eb6 as makeSorter, $59f50bee37676c09$export$c74d6d817c60b9e6 as BodymovinPlayer, $59f50bee37676c09$export$d75ad8f79fe096cb as bodymovinPlayer, $8a70bd76f9b7e656$export$b7127187684f7150 as CodeEditor, $8a70bd76f9b7e656$export$d89b6f4d34274146 as codeEditor, $e6e19030d0c18d6f$export$df30df7ec97b32b5 as DataTable, $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0 as dataTable, $46dc716dd2cf5925$export$16a138bde9d9de87 as availableFilters, $46dc716dd2cf5925$export$b7838412d9f17b13 as FilterPart, $46dc716dd2cf5925$export$2237595b531763d7 as filterPart, $46dc716dd2cf5925$export$afb49bb3b076029e as FilterBuilder, $46dc716dd2cf5925$export$8ca73b4108207c1f as filterBuilder, $ada9b1474dc4b958$export$41199f9ac14d8c08 as LiveExample, $ada9b1474dc4b958$export$dafbe0fa988b899b as liveExample, $ada9b1474dc4b958$export$afa6494eb589c19e as makeExamplesLive, $6246d5006b5a56c3$export$7d6f3ccbb0a81c30 as MAPSTYLES, $6246d5006b5a56c3$export$f2ffec4d96a433ed as MapBox, $6246d5006b5a56c3$export$ca243e53be209efb as mapBox, $1b88c9cb596c3426$export$575eb698d362902 as MarkdownViewer, $1b88c9cb596c3426$export$305b975a891d0dfa as markdownViewer, $815deb6062b0b31b$export$94309935dd6eab19 as blockStyle, $815deb6062b0b31b$export$8cc075c801fd6817 as spacer, $815deb6062b0b31b$export$e3f8198a677f57c2 as elastic, $815deb6062b0b31b$export$74540e56d8cdd242 as commandButton, $815deb6062b0b31b$export$8ed2ffe5d58aaa75 as richTextWidgets, $815deb6062b0b31b$export$f284d8638abd8920 as RichText, $815deb6062b0b31b$export$7bcc4193ad80bf91 as richText, $b9e5aa5581e8f051$export$1a35787d6353cf6a as SideNav, $b9e5aa5581e8f051$export$938418df2b06cb50 as sideNav, $0f2017ffca44b547$export$7140c0f3c1b65d3f as SizeBreak, $0f2017ffca44b547$export$96370210d2ca0fff as sizeBreak, $6bbe441346901d5a$export$a3a7254f7f149b03 as TabSelector, $6bbe441346901d5a$export$a932f737dcd864a2 as tabSelector, $ef1971ff775ba547$export$1bc633d0db17d4e1 as B3d, $ef1971ff775ba547$export$d0bb57305ce055c9 as b3d, $fef058b85aa29b7a$export$df03f54e09e486fa as icons};
//# sourceMappingURL=index.js.map
