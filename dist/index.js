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

If you need to load an old school javascript library via cdn (both mapboxgl and bodymovin are
fine examples) then use these two functions. They return promises that resolve `globalThis` when the
module in question has loaded.

Using `scriptTag`:

    import { scriptTag } from 'xinjs-ui'
    const { bodyMovin } = await scriptTag('../lottie.min.js')

    bodymovin.loadAnimation(...)

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

Sometimes, it's nice to be able to just toss a code-editor in a web-page. It's a thin wrapper around the [ACE Editor](https://ace.c9.io/). 

`<code-editor>`'s `value` is the code it contains. Its `mode` attribute sets the language, and you can further configure
the ACE editor instance via its `options` property.

```html
<code-editor style="width: 100%; height: 190px" mode="css">
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
        if (this.source === "") this.value = this.innerText.trim();
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

const emojiRequest = await fetch('https://raw.githubusercontent.com/tonioloewald/emoji-metadata/master/emoji-metadata.json')
const emojiData = await emojiRequest.json()

const columns = [
  {
    name: "emoji",
    prop: "chars",
    align: "center",
    visible: true,
    width: 80
  },
  {
    name: "name",
    prop: "name",
    align: "left",
    visible: true,
    width: 300
  },
  {
    name: "category",
    prop: "category",
    align: "left",
    visible: true,
    width: 150
  },
  {
    name: "subcategory",
    prop: "subcategory",
    align: "left",
    visible: true,
    width: 150
  },
]

preview.append(dataTable({ array: emojiData, columns }))
```

You can set the `<data-table>`'s `value` to `{ array: any[], columns: ColumnOptions[] | null, filter?: ArrayFilter }`

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
            (0, $5265d118b5240170$export$c947e3cd16175f27)(event, (dx, dy, event)=>{
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
                minHeight: "200px",
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
$parcel$export($46dc716dd2cf5925$exports, "getFilter", () => $46dc716dd2cf5925$export$61ec8404f465cd36);
$parcel$export($46dc716dd2cf5925$exports, "FilterBuilder", () => $46dc716dd2cf5925$export$afb49bb3b076029e);
$parcel$export($46dc716dd2cf5925$exports, "filterBuilder", () => $46dc716dd2cf5925$export$8ca73b4108207c1f);
/*!
# `<filter-builder>`

Automatically creates `ArrayFilter` functions `(a: any[]) => any[]` based on a text query that accepts the
following criteria — all text matches are performed in `LocaleLowerCase`. Criteria are space-delimited, but
a quoted string which can include spaces (but not nested quotation marks) is allowed on the right.

`<filter-builder>` has sets its `filter` property to an `ArrayFilter`, by default it just passes through
the array untouched. Its `value` is the source `string`.

The filter-builder has a default set of `FilterMaker` objects which it uses to **curry** an filter function.

    type ObjectTest (obj: any) => boolean

    interface FilterMaker {
      hint: string                                    // describes the grammar
      description: (...matches: string[]) => string   // describes the actual filter
      token: RegExp                                   // matches the token
      filterMaker(...matches: string) => ObjectTest   // builds an ObjectTest
    }

The `<filter-builder>` will use the `hint` values to write its `placeholder` (you can override this if
you explicitly set the `placeholder`) and it will use the `description` function to create the
`title` attribute, describing the filter.

## availableFilters

As well as `filterBuilder`, the `availableFilters` collection is exported and can be customized directly. By default,
each `<filter-builder>` element's `filters` property defaults to `availableFilters` but you can augment it or
individually set.

The default `filters` provided are (in priority order):

- `[field]=value` if `field` is specified, matches `value`, otherwise looks for `value` anwhere
- `field!=value` matches if `field` is not `value`
- `field<<value` / `field>>value` matches if `field` is before / after `value` (as a date)
- `field>value` / `field<value` matches if `field` is greater / less than `value`, if `isNaN(Number(value))` this will
  be an alphabetical order comparison, otherwise it will be numberic.
- `field:value` / `field!:value` matches if `field` contains / does not contain `value`
- `!!field` matches if `field` is **truthy**
- `!field` matches if `field` is **falsy** (e.g. `''`, `null`, `undefined`, `false`, `0`)
- `value` matches if any field contains `value`

Right now multiple criteria are `AND`ed together. This will be extended to allow `()`, `OR`, `<` and `>` comparisons will
become smarter (convert both sides to numbers if possible), and extensibility will be added.

### Customizing Filters

Filters should be ordered from strictest `token` to least-strict `token` where tokens have a chance of
overlapping. E.g. the `>>` (before) token has to be before the `>` (greater than) token, otherwise `>` will steal its tokens
(and the arguments of tokens are very liberal, since you never know what string someone will want to compare something to).

I just needed the new capabilities for the project I'm working on and figured they were probably pretty likely to be useful to other people.

A filter is just an object that conforms to the `FilterMaker` interface. E.g. the "contains" filter looks like this:

```
{
 hint: 'field:value',
 explanation: 'field contains value, ignoring case',
 description: (field: string, value: string) =>
   `${field} contains "${value}"`,
 token: /^([^\s]+?):(.+)$/,
 makeFilter: (field: string, value: string) => {
   value = value.toLocaleLowerCase()
   return (obj: any) =>
     String(obj[field]).toLocaleLowerCase().includes(value)
 },
}
```

This is sufficient to make each filter atom composable and self-documenting as a text `hint`, in general `explanation`, and in particular `description`.

Tokens are matched against a term, and must return enough values to drive `makeFilter`. A **term** currently looks like:

`query.match(/[^\s"]+("[^"]+")?/g)`

I.e. a bunch of non-whitespace characters optionally followed directly by a double-quoted string (containing not double-quotes). E.g. `foo` `$$foo:bar!><` or `foo"bar baz"`.
*/ 
const { input: $46dc716dd2cf5925$var$input } = (0, $hgUW1$elements);
const $46dc716dd2cf5925$var$passThru = (array)=>array;
const $46dc716dd2cf5925$var$NULL_FILTER_DESCRIPTION = "null filter, everything matches";
const $46dc716dd2cf5925$export$16a138bde9d9de87 = [
    {
        hint: "field=value",
        explanation: "field is value, ignoring case",
        description: (field, value)=>isNaN(Number(value)) ? field !== "" ? `${field} is "${value}"` : `any field is "${value}"` : field !== "" ? `${field} == ${value}` : `any field == ${value}`,
        token: /^([^\s]+?)=(.+)$/,
        makeFilter: (field, value)=>{
            if (isNaN(Number(value))) {
                value = String(value).toLocaleLowerCase();
                if (field !== "") return (obj)=>String(obj[field]).toLocaleLowerCase() == value;
                return (obj)=>Object.values(obj).find((val)=>String(val).toLocaleLowerCase() == value) !== undefined;
            }
            const num = Number(value);
            if (field !== "") return (obj)=>Number(obj[field]) == num;
            return (obj)=>Object.values(obj).find((val)=>Number(val) == num) !== undefined;
        }
    },
    {
        hint: "field!=value",
        explanation: "field is not value, ignoring case",
        description: (field, value)=>`${field} ≠ ${value}`,
        token: /^([^\s]+?)!=(.+)$/,
        makeFilter: (field, value)=>{
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj[field]).toLocaleLowerCase() != value;
        }
    },
    {
        hint: "field>>value",
        explanation: "field is after value (as date)",
        description: (field, value)=>`${field} is after ${new Date(value).toISOString()}`,
        token: /^([^\s]+?)>>(.+)$/,
        makeFilter: (field, value)=>{
            const date = new Date(value);
            return (obj)=>new Date(obj[field]) > date;
        }
    },
    {
        hint: "field<<value",
        explanation: "field is before value (as date)",
        description: (field, value)=>`${field} is before ${new Date(value).toISOString()}`,
        token: /^([^\s]+?)<<(.+)$/,
        makeFilter: (field, value)=>{
            const date = new Date(value);
            return (obj)=>new Date(obj[field]) < date;
        }
    },
    {
        hint: "field>value",
        explanation: "field > value (numeric / A-Z)",
        description: (field, value)=>isNaN(Number(value)) ? `${field} > ${value} (A-Z)` : `${field} > ${value}`,
        token: /^([^\s]+?)>(.+)$/,
        makeFilter: (field, value)=>{
            if (!isNaN(Number(value))) {
                const num = Number(value);
                return (obj)=>Number(obj[field]) > num;
            }
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj[field]).toLocaleLowerCase() > value;
        }
    },
    {
        hint: "field<value",
        explanation: "field < value (numeric / A-Z)",
        description: (field, value)=>isNaN(Number(value)) ? `${field} < ${value} (A-Z)` : `${field} < ${value}`,
        token: /^([^\s+]+?)<(.+)$/,
        makeFilter: (field, value)=>{
            if (!isNaN(Number(value))) {
                const num = Number(value);
                return (obj)=>Number(obj[field]) < num;
            }
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj[field]).toLocaleLowerCase() < value;
        }
    },
    {
        hint: "field!:value",
        explanation: "field does not contain value, ignoring case",
        description: (field, value)=>`${field} does not contain "${value}"`,
        token: /^([^\s]+?)!:(.+)$/,
        makeFilter: (field, value)=>{
            value = value.toLocaleLowerCase();
            return (obj)=>!String(obj[field]).toLocaleLowerCase().includes(value);
        }
    },
    {
        hint: "field:value",
        explanation: "field contains value, ignoring case",
        description: (field, value)=>`${field} contains "${value}"`,
        token: /^([^\s]+?):(.+)$/,
        makeFilter: (field, value)=>{
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj[field]).toLocaleLowerCase().includes(value);
        }
    },
    {
        hint: "!!field",
        explanation: "field is true, non-empty, non-zero",
        description: (match)=>`${match} is truthy`,
        token: /^!!([^\s]+?)$/,
        makeFilter: (match)=>(obj)=>!!obj[match]
    },
    {
        hint: "!field",
        explanation: "field is false, empty, zero",
        description: (match)=>`${match} is falsy`,
        token: /^!([^\s]+?)$/,
        makeFilter: (match)=>(obj)=>!obj[match]
    },
    {
        hint: "value",
        explanation: "any field contains value",
        description: (match)=>`"${match}" in any property`,
        token: /^(.+)$/,
        makeFilter: (match)=>{
            match = match.toLocaleLowerCase();
            return (obj)=>Object.values(obj).find((value)=>String(value).toLocaleLowerCase().includes(match)) !== undefined;
        }
    }
];
function $46dc716dd2cf5925$export$61ec8404f465cd36(term, filters = $46dc716dd2cf5925$export$16a138bde9d9de87) {
    const maker = filters.find((filter)=>filter.token.test(term));
    if (maker !== undefined) {
        // we know it will match
        const [, ...terms] = term.match(maker.token);
        return {
            description: maker.description(...terms),
            test: maker.makeFilter(...terms)
        };
    }
}
class $46dc716dd2cf5925$export$afb49bb3b076029e extends (0, $hgUW1$Component) {
    filter = $46dc716dd2cf5925$var$passThru;
    title = $46dc716dd2cf5925$var$NULL_FILTER_DESCRIPTION;
    content = $46dc716dd2cf5925$var$input({
        type: "search",
        part: "input",
        style: {
            width: "100%",
            height: "auto"
        }
    });
    placeholder = "";
    help = "";
    filters = $46dc716dd2cf5925$export$16a138bde9d9de87;
    get value() {
        return this.parts.input.value;
    }
    set value(query) {
        this.parts.input.value = query;
    }
    constructor(){
        super();
        this.initAttributes("title", "placeholder", "help");
    }
    buildFilter = (0, $hgUW1$debounce)((query)=>{
        const specs = (query.match(/[^\s"]+("[^"]+")?/g) || []).map((spec)=>spec.replace(/"/g, ""));
        const filters = specs.map((part)=>$46dc716dd2cf5925$export$61ec8404f465cd36(part, this.filters)).filter((part)=>part !== undefined);
        if (filters.length === 0) {
            this.title = $46dc716dd2cf5925$var$NULL_FILTER_DESCRIPTION;
            if (this.filter !== $46dc716dd2cf5925$var$passThru) {
                this.filter = $46dc716dd2cf5925$var$passThru;
                this.dispatchEvent(new Event("change"));
            }
        } else {
            this.filter = filters.reduce((f, filter)=>{
                let g;
                if (f === false) g = (array)=>array.filter(filter.test);
                else g = (array)=>f(array.filter(filter.test));
                return g;
            }, false) // because this array is not empty
            ;
            this.title = filters.map((f)=>f.description).join(", and ");
            this.dispatchEvent(new Event("change"));
        }
    }, 250);
    reset() {
        if (this.filter !== $46dc716dd2cf5925$var$passThru) {
            this.title = $46dc716dd2cf5925$var$NULL_FILTER_DESCRIPTION;
            this.filter = $46dc716dd2cf5925$var$passThru;
            this.dispatchEvent(new Event("change"));
        }
    }
    handleInput = (event)=>{
        const { input: input } = this.parts;
        this.buildFilter(input.value);
        this.value = input.value;
        event.stopPropagation();
        event.preventDefault();
    };
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("title", this.title);
        this.help = this.filters.map((f)=>f.explanation !== undefined ? `${f.hint} — ${f.explanation}` : f.hint).join("\n");
        const { input: input } = this.parts;
        input.value = this.value;
        input.addEventListener("input", this.handleInput);
        input.addEventListener("change", this.handleInput);
        this.style.position = "relative";
    }
    render() {
        super.render();
        const { input: input } = this.parts;
        input.placeholder = this.placeholder !== "" ? this.placeholder : this.filters.map((filter)=>filter.hint).join(" ");
        input.value = this.value;
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
}

live-example [part="example"] {
  flex: 1 1 50%;
  position: relative;
}

live-example [part=preview] {
  height: 100%;
  overflow: hidden;
  background: #f7f7f7 url('data:image/svg+xml,\
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 8 8" fill-opacity=".02" >\
  <rect x="4" width="4" height="4" /><rect y="4" width="4" height="4" /></svg>');
}

live-example [part="editors"] {
  flex: 1 1 var(--live-example-editor-height);
  position: relative;
}
`));
class $ada9b1474dc4b958$export$41199f9ac14d8c08 extends (0, $hgUW1$Component) {
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
            }), $ada9b1474dc4b958$var$div({
                part: "preview",
                class: "preview"
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
                title: "reload",
                class: "transparent",
                onClick: this.refresh
            }, $ada9b1474dc4b958$var$span({
                class: "icon-refresh"
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
    refresh = ()=>{
        const { style: style, preview: preview } = this.parts;
        style.innerText = this.css;
        preview.innerHTML = this.html;
        // @ts-expect-error ts is wrong
        const func = new $ada9b1474dc4b958$var$AsyncFunction("preview", "xinjs", "xinjsui", this.js);
        func(preview, $hgUW1$xinjs, $149c1bd638913645$exports).catch((err)=>console.error(err));
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
  style="width: 100%; height: 190px"
  coords="21.4389,-158.0001,9"
  token="pk.eyJ1IjoicG9kcGVyc29uIiwiYSI6ImNqc2JlbWU0bjA1ZmY0YW5ycHZod3VhbWcifQ.arvqfpOqMgFYkKgQ35UScA"
></map-box>
```

There's no need to learn new apis, just access the element's `map` property.
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
  flex: 1 0 auto;
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
        for(const i in pSort){
            if (pSort[i] !== qSort[i]) return ascending ? pSort[i] > qSort[i] ? 1 : -1 : pSort[i] > qSort[i] ? -1 : 1;
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


export {$5265d118b5240170$export$c947e3cd16175f27 as trackDrag, $5c31145f3e970423$export$c6e082819e9a0330 as scriptTag, $5c31145f3e970423$export$63257fda812a683f as styleSheet, $5a28660a6cbe2731$export$b37fb374f2e92eb6 as makeSorter, $59f50bee37676c09$export$c74d6d817c60b9e6 as BodymovinPlayer, $59f50bee37676c09$export$d75ad8f79fe096cb as bodymovinPlayer, $8a70bd76f9b7e656$export$b7127187684f7150 as CodeEditor, $8a70bd76f9b7e656$export$d89b6f4d34274146 as codeEditor, $e6e19030d0c18d6f$export$df30df7ec97b32b5 as DataTable, $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0 as dataTable, $46dc716dd2cf5925$export$16a138bde9d9de87 as availableFilters, $46dc716dd2cf5925$export$61ec8404f465cd36 as getFilter, $46dc716dd2cf5925$export$afb49bb3b076029e as FilterBuilder, $46dc716dd2cf5925$export$8ca73b4108207c1f as filterBuilder, $ada9b1474dc4b958$export$41199f9ac14d8c08 as LiveExample, $ada9b1474dc4b958$export$dafbe0fa988b899b as liveExample, $ada9b1474dc4b958$export$afa6494eb589c19e as makeExamplesLive, $6246d5006b5a56c3$export$7d6f3ccbb0a81c30 as MAPSTYLES, $6246d5006b5a56c3$export$f2ffec4d96a433ed as MapBox, $6246d5006b5a56c3$export$ca243e53be209efb as mapBox, $1b88c9cb596c3426$export$575eb698d362902 as MarkdownViewer, $1b88c9cb596c3426$export$305b975a891d0dfa as markdownViewer, $815deb6062b0b31b$export$94309935dd6eab19 as blockStyle, $815deb6062b0b31b$export$8cc075c801fd6817 as spacer, $815deb6062b0b31b$export$e3f8198a677f57c2 as elastic, $815deb6062b0b31b$export$74540e56d8cdd242 as commandButton, $815deb6062b0b31b$export$8ed2ffe5d58aaa75 as richTextWidgets, $815deb6062b0b31b$export$f284d8638abd8920 as RichText, $815deb6062b0b31b$export$7bcc4193ad80bf91 as richText, $b9e5aa5581e8f051$export$1a35787d6353cf6a as SideNav, $b9e5aa5581e8f051$export$938418df2b06cb50 as sideNav, $0f2017ffca44b547$export$7140c0f3c1b65d3f as SizeBreak, $0f2017ffca44b547$export$96370210d2ca0fff as sizeBreak, $6bbe441346901d5a$export$a3a7254f7f149b03 as TabSelector, $6bbe441346901d5a$export$a932f737dcd864a2 as tabSelector};
//# sourceMappingURL=index.js.map
