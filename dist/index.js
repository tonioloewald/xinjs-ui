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
var $59f50bee37676c09$exports = {};

$parcel$export($59f50bee37676c09$exports, "BodymovinPlayer", () => $59f50bee37676c09$export$c74d6d817c60b9e6);
$parcel$export($59f50bee37676c09$exports, "bodymovinPlayer", () => $59f50bee37676c09$export$d75ad8f79fe096cb);
// https://lottiefiles.github.io/lottie-docs/advanced_interactions/

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
    console.log(filter.filter, filter.description)
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
        $46dc716dd2cf5925$var$select({
            part: "condition"
        }),
        $46dc716dd2cf5925$var$input({
            part: "needle"
        }),
        $46dc716dd2cf5925$var$span({
            part: "padding"
        }),
        $46dc716dd2cf5925$var$button({
            part: "remove",
            title: "delete"
        }, $46dc716dd2cf5925$var$span({
            class: "icon-trash"
        }))
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
        console.log(description);
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
            }, $46dc716dd2cf5925$var$span({
                class: "icon-plus"
            })),
            $46dc716dd2cf5925$var$div({
                part: "filterContainer"
            }),
            $46dc716dd2cf5925$var$button({
                part: "reset",
                title: "reset filter",
                onClick: this.reset
            }, $46dc716dd2cf5925$var$span({
                class: "icon-x"
            }))
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
        console.log(this.description, this.filter);
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

```html
<tab-selector>
  <div name="first">first body</div>
  <div name="second">second body</div>
  <div name="third">third body</div>
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
```js
[...preview.querySelectorAll('div[name]')].forEach(div => {
  div.style.color = `hsl(${(Math.random() * 360).toFixed(0)} 50% 50%)`
})
```

Usage:

`TabSelector` is the class and `tabSelector` is the `ElementCreator`. So the three methods
of creating a `<tab-selector>` are:

1. importing `TabSelector` and inserting the appropriate HTML: `<tab-selector>`.
2. using `new TabSelector()` and appending it to the DOM.
3. using `tabSelector()` and appending it to the DOM. This last is more convenient because
   `ElementCreator` allows composition, convenient assignment of properties and attributes,
   and so forth.
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
        this.shadowRoot?.append(body);
        this.setupTabs();
        if (selectTab) this.value = this.bodies.length - 1;
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
        ];
        tabBodies.filter((child)=>child.hasAttribute("name"));
        tabs.textContent = "";
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


const { div: $ada9b1474dc4b958$var$div, span: $ada9b1474dc4b958$var$span, xinSlot: $ada9b1474dc4b958$var$xinSlot, style: $ada9b1474dc4b958$var$style, button: $ada9b1474dc4b958$var$button } = (0, $hgUW1$elements);
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
            }, $ada9b1474dc4b958$var$span({
                class: "icon-copy"
            })), $ada9b1474dc4b958$var$button({
                slot: "after-tabs",
                title: "reload",
                class: "transparent",
                onClick: this.refresh
            }, $ada9b1474dc4b958$var$span({
                class: "icon-refresh"
            })), $ada9b1474dc4b958$var$button({
                part: "maximize",
                slot: "after-tabs",
                title: "maximize",
                class: "transparent",
                onClick: this.toggleMaximize
            }, $ada9b1474dc4b958$var$span({
                class: "show-if-maximized icon-minimize"
            }), $ada9b1474dc4b958$var$span({
                class: "hide-if-maximized icon-maximize"
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
        const js = this.js !== "" ? "```js\n" + this.js + "\n```\n" : "";
        const html = this.js !== "" ? "```html\n" + this.html + "\n```\n" : "";
        const css = this.js !== "" ? "```css\n" + this.css + "\n```\n" : "";
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
        }))), $815deb6062b0b31b$var$span({
        class: "icon-chevron-down"
    }));
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
function $815deb6062b0b31b$export$74540e56d8cdd242(title, dataCommand, iconClass) {
    return $815deb6062b0b31b$var$button({
        slot: "toolbar",
        dataCommand: dataCommand,
        title: title
    }, $815deb6062b0b31b$var$span({
        class: iconClass
    }));
}
const $815deb6062b0b31b$var$paragraphStyleWidgets = ()=>[
        $815deb6062b0b31b$export$74540e56d8cdd242("left-justify", "justifyLeft", "icon-format_align_left"),
        $815deb6062b0b31b$export$74540e56d8cdd242("center", "justifyCenter", "icon-format_align_center"),
        $815deb6062b0b31b$export$74540e56d8cdd242("right-justify", "justifyRight", "icon-format_align_right"),
        $815deb6062b0b31b$export$8cc075c801fd6817(),
        $815deb6062b0b31b$export$74540e56d8cdd242("bullet list", "insertUnorderedList", "icon-format_list_bulleted"),
        $815deb6062b0b31b$export$74540e56d8cdd242("numbered list", "insertOrderedList", "icon-format_list_numbered"),
        $815deb6062b0b31b$export$8cc075c801fd6817(),
        $815deb6062b0b31b$export$74540e56d8cdd242("indent", "indent", "icon-format_indent_increase"),
        $815deb6062b0b31b$export$74540e56d8cdd242("indent", "outdent", "icon-format_indent_decrease")
    ];
const $815deb6062b0b31b$var$characterStyleWidgets = ()=>[
        $815deb6062b0b31b$export$74540e56d8cdd242("bold", "bold", "icon-format_bold"),
        $815deb6062b0b31b$export$74540e56d8cdd242("italic", "italic", "icon-format_italic"),
        $815deb6062b0b31b$export$74540e56d8cdd242("underline", "underline", "icon-format_underlined")
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    selectionChange = (event, editor)=>{};
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


export {$5265d118b5240170$export$c947e3cd16175f27 as trackDrag, $5c31145f3e970423$export$c6e082819e9a0330 as scriptTag, $5c31145f3e970423$export$63257fda812a683f as styleSheet, $5a28660a6cbe2731$export$b37fb374f2e92eb6 as makeSorter, $59f50bee37676c09$export$c74d6d817c60b9e6 as BodymovinPlayer, $59f50bee37676c09$export$d75ad8f79fe096cb as bodymovinPlayer, $8a70bd76f9b7e656$export$b7127187684f7150 as CodeEditor, $8a70bd76f9b7e656$export$d89b6f4d34274146 as codeEditor, $e6e19030d0c18d6f$export$df30df7ec97b32b5 as DataTable, $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0 as dataTable, $46dc716dd2cf5925$export$16a138bde9d9de87 as availableFilters, $46dc716dd2cf5925$export$b7838412d9f17b13 as FilterPart, $46dc716dd2cf5925$export$2237595b531763d7 as filterPart, $46dc716dd2cf5925$export$afb49bb3b076029e as FilterBuilder, $46dc716dd2cf5925$export$8ca73b4108207c1f as filterBuilder, $ada9b1474dc4b958$export$41199f9ac14d8c08 as LiveExample, $ada9b1474dc4b958$export$dafbe0fa988b899b as liveExample, $ada9b1474dc4b958$export$afa6494eb589c19e as makeExamplesLive, $6246d5006b5a56c3$export$7d6f3ccbb0a81c30 as MAPSTYLES, $6246d5006b5a56c3$export$f2ffec4d96a433ed as MapBox, $6246d5006b5a56c3$export$ca243e53be209efb as mapBox, $1b88c9cb596c3426$export$575eb698d362902 as MarkdownViewer, $1b88c9cb596c3426$export$305b975a891d0dfa as markdownViewer, $815deb6062b0b31b$export$94309935dd6eab19 as blockStyle, $815deb6062b0b31b$export$8cc075c801fd6817 as spacer, $815deb6062b0b31b$export$e3f8198a677f57c2 as elastic, $815deb6062b0b31b$export$74540e56d8cdd242 as commandButton, $815deb6062b0b31b$export$8ed2ffe5d58aaa75 as richTextWidgets, $815deb6062b0b31b$export$f284d8638abd8920 as RichText, $815deb6062b0b31b$export$7bcc4193ad80bf91 as richText, $b9e5aa5581e8f051$export$1a35787d6353cf6a as SideNav, $b9e5aa5581e8f051$export$938418df2b06cb50 as sideNav, $0f2017ffca44b547$export$7140c0f3c1b65d3f as SizeBreak, $0f2017ffca44b547$export$96370210d2ca0fff as sizeBreak, $6bbe441346901d5a$export$a3a7254f7f149b03 as TabSelector, $6bbe441346901d5a$export$a932f737dcd864a2 as tabSelector};
//# sourceMappingURL=index.js.map
