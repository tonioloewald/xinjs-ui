import {Component as $hgUW1$Component, elements as $hgUW1$elements, xinValue as $hgUW1$xinValue, xin as $hgUW1$xin, vars as $hgUW1$vars, debounce as $hgUW1$debounce, varDefault as $hgUW1$varDefault} from "xinjs";
import {marked as $hgUW1$marked} from "marked";

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $59f50bee37676c09$exports = {};

$parcel$export($59f50bee37676c09$exports, "bodymovinPlayer", () => $59f50bee37676c09$export$d75ad8f79fe096cb);
// https://lottiefiles.github.io/lottie-docs/advanced_interactions/


const $5c31145f3e970423$var$loadedScripts = {};
function $5c31145f3e970423$export$c6e082819e9a0330(src, existingSymbolName) {
    if ($5c31145f3e970423$var$loadedScripts[src] === undefined) {
        if (existingSymbolName !== undefined) {
            // @ts-expect-error
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


class $59f50bee37676c09$var$BodymovinPlayer extends (0, $hgUW1$Component) {
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
        if ($59f50bee37676c09$var$BodymovinPlayer.bodymovinAvailable === undefined) $59f50bee37676c09$var$BodymovinPlayer.bodymovinAvailable = (0, $5c31145f3e970423$export$c6e082819e9a0330)("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js", "bodymovin");
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
        $59f50bee37676c09$var$BodymovinPlayer.bodymovinAvailable.then(this.load).catch((e)=>{
            console.error(e);
        });
    }
}
const $59f50bee37676c09$export$d75ad8f79fe096cb = $59f50bee37676c09$var$BodymovinPlayer.elementCreator({
    tag: "bodymovin-player"
});


var $8a70bd76f9b7e656$exports = {};

$parcel$export($8a70bd76f9b7e656$exports, "codeEditor", () => $8a70bd76f9b7e656$export$d89b6f4d34274146);


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
class $8a70bd76f9b7e656$var$CodeEditor extends (0, $hgUW1$Component) {
    value = "";
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
    updateValue = async (event)=>{
        // changes to the element will be targted on the custom-element
        // changes by the user will target the textarea created by ace editor
        if (event.target !== this && this.editor) this.value = this.editor.getValue();
    };
    connectedCallback() {
        super.connectedCallback();
        if (this.value === "") this.value = this.textContent !== null ? this.textContent.trim() : "";
        if (this._editorPromise === undefined) {
            this._editorPromise = $8a70bd76f9b7e656$var$makeCodeEditor(this, this.mode, this.options, this.theme);
            this._editorPromise.then((editor)=>{
                this._editor = editor;
                editor.setValue(this.value, 1);
            });
        }
        this.addEventListener("change", this.updateValue);
    }
    render() {
        super.render();
        if (this.editor !== undefined) {
            if (this.editor.getValue() !== this.value) this.editor.setValue(this.value);
        }
        if (this._editorPromise !== undefined) this._editorPromise.then((editor)=>editor.setReadOnly(this.disabled));
    }
}
const $8a70bd76f9b7e656$export$d89b6f4d34274146 = $8a70bd76f9b7e656$var$CodeEditor.elementCreator({
    tag: "code-editor"
});


var $e6e19030d0c18d6f$exports = {};

$parcel$export($e6e19030d0c18d6f$exports, "dataTable", () => $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0);


const $5265d118b5240170$export$c947e3cd16175f27 = (event, callback, cursor = "default")=>{
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
    } else if (event.type.startsWith("touch")) {
        const origX = event.touches[0].clientX;
        const origY = event.touches[0].clientY;
        const target = event.target;
        let dx = 0;
        let dy = 0;
        const wrappedCallback = (event)=>{
            if (event.touches.length > 0) {
                dx = event.touches[0].clientX - origX;
                dy = event.touches[0].clientY - origY;
            }
            if (callback(dx, dy, event) === true || event.touches.length === 0) {
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
class $e6e19030d0c18d6f$var$DataTable extends (0, $hgUW1$Component) {
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
        (0, $hgUW1$xin)[this.instanceId] = this.filter(this._array);
        this.textContent = "";
        this.style.display = "flex";
        this.style.flexDirection = "column";
        const { visibleColumns: visibleColumns } = this;
        this.setColumnWidths();
        this.append($e6e19030d0c18d6f$var$div({
            class: "thead",
            role: "rowgroup"
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
const $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0 = $e6e19030d0c18d6f$var$DataTable.elementCreator({
    tag: "data-table"
});


var $46dc716dd2cf5925$exports = {};

$parcel$export($46dc716dd2cf5925$exports, "availableFilters", () => $46dc716dd2cf5925$export$16a138bde9d9de87);
$parcel$export($46dc716dd2cf5925$exports, "getFilter", () => $46dc716dd2cf5925$export$61ec8404f465cd36);
$parcel$export($46dc716dd2cf5925$exports, "filterBuilder", () => $46dc716dd2cf5925$export$8ca73b4108207c1f);

const { input: $46dc716dd2cf5925$var$input } = (0, $hgUW1$elements);
const $46dc716dd2cf5925$var$passThru = (array)=>array;
const $46dc716dd2cf5925$var$NULL_FILTER_DESCRIPTION = "null filter, everything matches";
const $46dc716dd2cf5925$export$16a138bde9d9de87 = [
    {
        hint: "field=value",
        explanation: "field is value, ignoring case",
        description: (field, value)=>isNaN(Number(value)) ? field !== "" ? `${field} is "${value}"` : `any field is "${value}"` : field !== "" ? `${field} == ${value}` : `any field == ${value}`,
        token: /^([\w-_]*)=(.+)$/,
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
        token: /^([\w-_]+)!=(.+)$/,
        makeFilter: (field, value)=>{
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj[field]).toLocaleLowerCase() != value;
        }
    },
    {
        hint: "field>value",
        explanation: "field > value (numeric / A-Z)",
        description: (field, value)=>isNaN(Number(value)) ? `${field} > ${value} (A-Z)` : `${field} > ${value}`,
        token: /^([\w-_]+)>(.+)$/,
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
        token: /^([\w-_]+)<(.+)$/,
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
        hint: "field:value",
        explanation: "field contains value, ignoring case",
        description: (field, value)=>`${field} contains "${value}"`,
        token: /^([\w-_]+):(.+)$/,
        makeFilter: (field, value)=>{
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj[field]).toLocaleLowerCase().includes(value);
        }
    },
    {
        hint: "!!field",
        explanation: "field is true, non-empty, non-zero",
        description: (match)=>`${match} is truthy`,
        token: /^!!([\w-_]+)$/,
        makeFilter: (match)=>(obj)=>!!obj[match]
    },
    {
        hint: "!field",
        explanation: "field is false, empty, zero",
        description: (match)=>`${match} is falsy`,
        token: /^!([\w-_]+)$/,
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
class $46dc716dd2cf5925$var$FilterBuilder extends (0, $hgUW1$Component) {
    value = "";
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
    constructor(){
        super();
        this.initAttributes("title", "placeholder", "help");
    }
    buildFilter = (0, $hgUW1$debounce)((query)=>{
        // @ts-expect-error
        const filters = query.split(/\s+/).filter((part)=>part !== "").map((part)=>$46dc716dd2cf5925$export$61ec8404f465cd36(part, this.filters)).filter((part)=>part !== undefined) // because we remove undefined
        ;
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
    }, 500);
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
        this.help = this.filters.map((f)=>f.explanation !== undefined ? `${f.hint}: ${f.explanation}` : f.hint).join("\n");
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
const $46dc716dd2cf5925$export$8ca73b4108207c1f = $46dc716dd2cf5925$var$FilterBuilder.elementCreator({
    tag: "filter-builder"
});


var $6246d5006b5a56c3$exports = {};

$parcel$export($6246d5006b5a56c3$exports, "MAPSTYLES", () => $6246d5006b5a56c3$export$7d6f3ccbb0a81c30);
$parcel$export($6246d5006b5a56c3$exports, "mapBox", () => $6246d5006b5a56c3$export$ca243e53be209efb);


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
class $6246d5006b5a56c3$var$MapBox extends (0, $hgUW1$Component) {
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
        if ($6246d5006b5a56c3$var$MapBox.mapboxCSSAvailable === undefined) {
            $6246d5006b5a56c3$var$MapBox.mapboxCSSAvailable = (0, $5c31145f3e970423$export$63257fda812a683f)("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css").catch((e)=>{
                console.error("failed to load mapbox-gl.css", e);
            });
            $6246d5006b5a56c3$var$MapBox.mapboxAvailable = (0, $5c31145f3e970423$export$c6e082819e9a0330)("https://api.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.js").catch((e)=>{
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
        $6246d5006b5a56c3$var$MapBox.mapboxAvailable.then(({ mapboxgl: mapboxgl })=>{
            console.log("%cmapbox may complain about missing css because it is loaded async on demand", "background: orange; color: black; padding: 0 5px;");
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
const $6246d5006b5a56c3$export$ca243e53be209efb = $6246d5006b5a56c3$var$MapBox.elementCreator({
    tag: "map-box"
});


var $1b88c9cb596c3426$exports = {};

$parcel$export($1b88c9cb596c3426$exports, "markdownViewer", () => $1b88c9cb596c3426$export$305b975a891d0dfa);


class $1b88c9cb596c3426$var$MarkdownViewer extends (0, $hgUW1$Component) {
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
    render() {
        super.render();
        this.innerHTML = (0, $hgUW1$marked)(typeof this.value === "string" ? this.value : "", {
            mangle: false,
            headerIds: false
        });
    }
}
const $1b88c9cb596c3426$export$305b975a891d0dfa = $1b88c9cb596c3426$var$MarkdownViewer.elementCreator({
    tag: "markdown-viewer"
});


var $815deb6062b0b31b$exports = {};

$parcel$export($815deb6062b0b31b$exports, "richText", () => $815deb6062b0b31b$export$7bcc4193ad80bf91);

const { style: $815deb6062b0b31b$var$style, xinSlot: $815deb6062b0b31b$var$xinSlot, div: $815deb6062b0b31b$var$div } = (0, $hgUW1$elements);
const $815deb6062b0b31b$var$richTextStyle = $815deb6062b0b31b$var$style();
$815deb6062b0b31b$var$richTextStyle.innerText = `
rich-text {
  display: flex;
  flex-direction: column;
  height: 100%;
}
rich-text [part="toolbar"] {
  padding: 4px;
  display: flex;
  gap: 0px;
  flex: 0 0 auto;
}
`;
document.head.append($815deb6062b0b31b$var$richTextStyle);
class $815deb6062b0b31b$var$RichText extends (0, $hgUW1$Component) {
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
    doCommand(command) {
        if (command === undefined) return;
        const args = command.split(",");
        console.log("execCommand", args[0], false, ...args.slice(1));
        document.execCommand(args[0], false, ...args.slice(1));
    }
    handleSelectChange = (event)=>{
        // @ts-expect-error
        const select = event.target.closest("select");
        if (select == null) return;
        this.doCommand(select.value);
    };
    handleButtonClick = (event)=>{
        // @ts-expect-error
        const button = event.target.closest("button");
        if (button == null) return;
        this.doCommand(button.dataset.command);
    };
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
            this.selectionChange(event, this);
        });
    }
}
const $815deb6062b0b31b$export$7bcc4193ad80bf91 = $815deb6062b0b31b$var$RichText.elementCreator({
    tag: "rich-text"
});


var $b9e5aa5581e8f051$exports = {};

$parcel$export($b9e5aa5581e8f051$exports, "sideNav", () => $b9e5aa5581e8f051$export$938418df2b06cb50);

const { slot: $b9e5aa5581e8f051$var$slot } = (0, $hgUW1$elements);
const $b9e5aa5581e8f051$var$flexDirections = {
    left: "row",
    right: "row-reverse",
    top: "column",
    bottom: "column-reverse"
};
const $b9e5aa5581e8f051$var$outsetMargins = {
    left: [
        "marginLeft",
        "marginRight"
    ],
    right: [
        "marginRight",
        "marginLeft"
    ],
    top: [
        "marginTop",
        "marginBottom"
    ],
    bottom: [
        "marginBottom",
        "marginTop"
    ]
};
class $b9e5aa5581e8f051$var$SideNav extends (0, $hgUW1$Component) {
    panelPosition = "left";
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
            display: "flex",
            flexDirection: (0, $hgUW1$vars).flexDirection,
            transition: (0, $hgUW1$varDefault).sideNavTransition("0.25s ease-out")
        },
        ":host slot": {
            position: "relative"
        },
        ":host slot:not([name])": {
            display: "block",
            flex: `0 0 ${(0, $hgUW1$vars).contentWidth}`,
            width: (0, $hgUW1$vars).contentWidth
        },
        ':host slot[name="nav"]': {
            display: "block",
            flex: `0 0 ${(0, $hgUW1$vars).navWidth}`,
            width: (0, $hgUW1$vars).navWidth
        }
    });
    onResize = ()=>{
        const { content: content } = this.parts;
        if (this.offsetParent === null) return;
        this.style.marginLeft = this.style.marginRight = this.style.marginTop = this.style.marginBottom = "0";
        const empty = [
            ...this.childNodes
        ].find((node)=>node instanceof Element ? node.getAttribute("slot") !== "nav" : true) === undefined;
        if (empty) {
            this.style.setProperty("--nav-width", "100%");
            this.style.setProperty("--content-width", "0%");
            return;
        }
        const parent = this.offsetParent;
        const size = this.panelPosition.match(/left|right/) ? parent.offsetWidth : parent.offsetWidth;
        this.compact = size < this.minSize;
        if (!this.compact) {
            content.classList.add("-side-nav-visible");
            this.style.setProperty("--nav-width", `${this.navSize}px`);
            this.style.setProperty("--content-width", `calc(100% - ${this.navSize}px)`);
        } else {
            content.classList.remove("-side-nav-visible");
            this.style.setProperty("--nav-width", "50%");
            this.style.setProperty("--content-width", "50%");
            const margins = $b9e5aa5581e8f051$var$outsetMargins[this.panelPosition];
            if (this.contentVisible) // @ts-expect-error
            this.style[margins[0]] = "-100%";
            else // @ts-expect-error
            this.style[margins[1]] = "-100%";
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
        this.initAttributes("panelPosition", "minSize", "navSize", "compact");
    }
    render() {
        super.render();
        this.style.setProperty("--flex-direction", $b9e5aa5581e8f051$var$flexDirections[this.panelPosition]);
        this.onResize();
    }
}
const $b9e5aa5581e8f051$export$938418df2b06cb50 = $b9e5aa5581e8f051$var$SideNav.elementCreator({
    tag: "side-nav"
});


var $0f2017ffca44b547$exports = {};

$parcel$export($0f2017ffca44b547$exports, "sizeBreak", () => $0f2017ffca44b547$export$96370210d2ca0fff);

const { slot: $0f2017ffca44b547$var$slot } = (0, $hgUW1$elements);
class $0f2017ffca44b547$var$SizeBreak extends (0, $hgUW1$Component) {
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
        if (parent === null) return;
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
    // is inerted or moved into the DOM.
    connectedCallback() {
        super.connectedCallback();
        globalThis.addEventListener("resize", this.onResize);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        globalThis.removeEventListener("resize", this.onResize);
    }
}
const $0f2017ffca44b547$export$96370210d2ca0fff = $0f2017ffca44b547$var$SizeBreak.elementCreator({
    tag: "size-break"
});


var $6bbe441346901d5a$exports = {};

$parcel$export($6bbe441346901d5a$exports, "tabSelector", () => $6bbe441346901d5a$export$a932f737dcd864a2);

const { div: $6bbe441346901d5a$var$div, slot: $6bbe441346901d5a$var$slot } = (0, $hgUW1$elements);
class $6bbe441346901d5a$var$TabSelector extends (0, $hgUW1$Component) {
    value = 0;
    role = "tabpanel";
    styleNode = (0, $hgUW1$Component).StyleNode({
        ":host": {
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden"
        },
        slot: {
            position: "relative",
            display: "block",
            flex: "1 1 auto",
            overflow: "hidden",
            overflowY: "auto"
        },
        "::slotted([hidden])": {
            display: "none !important"
        },
        ":host .tab-holder": {
            display: "flex",
            flexDirection: "column"
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
            class: "tab-holder"
        }, $6bbe441346901d5a$var$div({
            class: "tabs",
            part: "tabs"
        }), $6bbe441346901d5a$var$div({
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
            ...this.childNodes
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
const $6bbe441346901d5a$export$a932f737dcd864a2 = $6bbe441346901d5a$var$TabSelector.elementCreator({
    tag: "tab-selector"
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




export {$5265d118b5240170$export$c947e3cd16175f27 as trackDrag, $5c31145f3e970423$export$c6e082819e9a0330 as scriptTag, $5c31145f3e970423$export$63257fda812a683f as styleSheet, $5a28660a6cbe2731$export$b37fb374f2e92eb6 as makeSorter, $59f50bee37676c09$export$d75ad8f79fe096cb as bodymovinPlayer, $8a70bd76f9b7e656$export$d89b6f4d34274146 as codeEditor, $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0 as dataTable, $46dc716dd2cf5925$export$16a138bde9d9de87 as availableFilters, $46dc716dd2cf5925$export$61ec8404f465cd36 as getFilter, $46dc716dd2cf5925$export$8ca73b4108207c1f as filterBuilder, $6246d5006b5a56c3$export$7d6f3ccbb0a81c30 as MAPSTYLES, $6246d5006b5a56c3$export$ca243e53be209efb as mapBox, $1b88c9cb596c3426$export$305b975a891d0dfa as markdownViewer, $b9e5aa5581e8f051$export$938418df2b06cb50 as sideNav, $0f2017ffca44b547$export$96370210d2ca0fff as sizeBreak, $6bbe441346901d5a$export$a932f737dcd864a2 as tabSelector, $815deb6062b0b31b$export$7bcc4193ad80bf91 as richText};
//# sourceMappingURL=index.js.map
