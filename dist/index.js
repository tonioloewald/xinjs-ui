import {Component as $hgUW1$Component, elements as $hgUW1$elements, xin as $hgUW1$xin, vars as $hgUW1$vars, xinValue as $hgUW1$xinValue, debounce as $hgUW1$debounce} from "xinjs";
import {marked as $hgUW1$marked} from "marked";

// https://lottiefiles.github.io/lottie-docs/advanced_interactions/


// TODO scriptTag provided a property that if present in globalThis is returned
// so that a user can load the modules themselves if desired.
const $5c31145f3e970423$var$loadedScripts = {};
function $5c31145f3e970423$export$c6e082819e9a0330(src) {
    if ($5c31145f3e970423$var$loadedScripts[src] === undefined) {
        const scriptElt = (0, $hgUW1$elements).script({
            src: src
        });
        // @ts-expect-error
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
        // @ts-expect-error
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
        if ($59f50bee37676c09$var$BodymovinPlayer.bodymovinAvailable === undefined) $59f50bee37676c09$var$BodymovinPlayer.bodymovinAvailable = // @ts-expect-error
        globalThis.bodymovinPlayer === undefined ? (0, $5c31145f3e970423$export$c6e082819e9a0330)("https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js") : Promise.resolve();
    }
    doneLoading = ()=>{
        this._loading = false;
    };
    load = ()=>{
        this._loading = true;
        this.config.container = this.shadowRoot;
        if (this.json !== "") {
            this.config.animationData = this.json;
            delete this.config.path;
        } else if (this.src !== "") {
            delete this.config.animationData;
            this.config.path = this.src;
        } else console.log("%c<bodymovin-player>%c expected either %cjson%c (animation data) or %csrc% c(url) but found neither.", "color: #44f; background: #fff; padding: 0 5px", "color: default", "color: #44f; background: #fff; padding: 0 5px", "color: default", "color: #44f; background: #fff; padding: 0 5px", "color: default");
        if (this.animation) {
            this.animation.destroy();
            this.shadowRoot.querySelector("svg").remove();
        }
        // @ts-expect-error
        this.animation = globalThis.bodymovin.loadAnimation(this.config);
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




const $8a70bd76f9b7e656$var$ACE_BASE_URL = "https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/";
const $8a70bd76f9b7e656$var$DEFAULT_THEME = "ace/theme/monokai";
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
        // @ts-expect-error
        if (event.target !== this && this.editor) this.value = this.editor.getValue();
    };
    connectedCallback() {
        super.connectedCallback();
        if (this.value === "") this.value = this.textContent.trim("\n");
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




const $b92d846b773fd5ef$export$fb335fe3908368a2 = (callback, cursor)=>{
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
    // @ts-expect-error
    document.body.append(tracker);
    tracker.addEventListener("mousemove", (event)=>{
        if (callback(event) === true) tracker.remove();
    });
    tracker.addEventListener("mouseup", (event)=>{
        callback(event);
        tracker.remove();
    });
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
    value = {
        array: []
    };
    charWidth = 15;
    rowHeight = 30;
    minColumnWidth = 30;
    constructor(){
        super();
        this.initAttributes("rowHeight", "charWidth", "minColumnWidth");
    }
    get filter() {
        return typeof this.value.filter === "function" ? this.value.filter : $e6e19030d0c18d6f$var$passThru;
    }
    get columns() {
        if (!Array.isArray(this.value.columns)) {
            const { array: array } = this.value;
            this.value.columns = Object.keys(array[0] || {}).map((prop)=>{
                const width = $e6e19030d0c18d6f$var$defaultWidth(array, prop, this.charWidth);
                return {
                    name: prop.replace(/([a-z])([A-Z])/g, "$1 $2").toLocaleLowerCase(),
                    prop: prop,
                    align: typeof array[0][prop] === "number" || array[0][prop] !== "" && !isNaN(array[0][prop]) ? "right" : "left",
                    visible: width !== false,
                    width: width ? width : 0
                };
            });
        }
        return this.value.columns;
    }
    get visibleColumns() {
        return this.columns.filter((c)=>c.visible !== false);
    }
    get visibleRecords() {
        return (0, $hgUW1$xin)[this.instanceId];
    }
    content = null;
    getColumn(event) {
        // @ts-expect-error
        const x = event.clientX - this.getBoundingClientRect().x;
        let boundaryX = 0;
        const log = [];
        const column = this.visibleColumns.find((options)=>{
            if (options.visible !== false) {
                boundaryX += options.width;
                log.push(boundaryX);
                return Math.abs(x - boundaryX) < 5;
            }
        });
        return column;
    }
    trackMouse = (event)=>{
        const column = this.getColumn(event);
        if (column !== undefined) this.style.cursor = "col-resize";
        else this.style.cursor = "";
    };
    resizeColumn = (event)=>{
        const column = this.getColumn(event);
        if (column !== undefined) {
            const origWidth = column.width;
            // @ts-expect-error
            const origX = event.clientX;
            (0, $b92d846b773fd5ef$export$fb335fe3908368a2)((event)=>{
                // @ts-expect-error
                const width = event.clientX - origX + origWidth;
                column.width = width > this.minColumnWidth ? width : this.minColumnWidth;
                this.setColumnWidths();
            }, "col-resize");
        }
    };
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener("mousemove", this.trackMouse);
        this.addEventListener("mousedown", this.resizeColumn);
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
    headerCell = (options)=>options.headerCell !== undefined ? options.headerCell() : $e6e19030d0c18d6f$var$span({
            class: "th",
            role: "columnheader",
            ariaSort: "none",
            style: {
                ...this.cellStyle,
                textAlign: options.align || "left"
            }
        }, typeof options.name === "string" ? options.name : options.prop);
    dataCell = (options)=>{
        if (options.dataCell !== undefined) return options.dataCell();
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
    render() {
        super.render();
        (0, $hgUW1$xin)[this.instanceId] = this.filter((0, $hgUW1$xinValue)(this.value.array));
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
                virtual: {
                    height: this.rowHeight
                }
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



const { input: $46dc716dd2cf5925$var$input } = (0, $hgUW1$elements);
const $46dc716dd2cf5925$var$passThru = (array)=>array;
const $46dc716dd2cf5925$var$NULL_FILTER_DESCRIPTION = "null filter, everything matches";
const $46dc716dd2cf5925$export$16a138bde9d9de87 = [
    {
        hint: "field=value",
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
            return (obj)=>Object.values(obj).find((val)=>Number(val) == num);
        }
    },
    {
        hint: "field!=value",
        description: (field, value)=>`${field} ≠ ${value}`,
        token: /^([\w-_]+)!=(.+)$/,
        makeFilter: (field, value)=>{
            value = value.toLocaleLowerCase();
            return (obj)=>String(obj[field]).toLocaleLowerCase() != value;
        }
    },
    {
        hint: "field>value",
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
        description: (field, value)=>`${field} contains ${value}`,
        token: /^([\w-_]+):(.+)$/,
        makeFilter: (field, value)=>{
            value = value.toLocaleLowerCase();
            return (obj)=>obj[field].toLocaleLowerCase().includes(value);
        }
    },
    {
        hint: "!!field",
        description: (match)=>`${match} is truthy`,
        token: /^!!([\w-_]+)$/,
        makeFilter: (match)=>(obj)=>!!obj[match]
    },
    {
        hint: "!field",
        description: (match)=>`${match} is falsy`,
        token: /^!([\w-_]+)$/,
        makeFilter: (match)=>(obj)=>!obj[match]
    },
    {
        hint: "value",
        description: (match)=>`"${match}" in any property`,
        token: /^(.+)$/,
        makeFilter: (match)=>(obj)=>Object.values(obj).find((value)=>String(value).toLocaleLowerCase().includes(match)) !== undefined
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
        style: {
            width: "100%",
            height: "auto"
        }
    });
    placeholder = "";
    filters = $46dc716dd2cf5925$export$16a138bde9d9de87;
    constructor(){
        super();
        this.initAttributes("title", "placeholder");
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
        const { input: input } = this.refs;
        this.buildFilter(input.value);
        this.value = input.value;
        event.stopPropagation();
        event.preventDefault();
    };
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute("title", this.title);
        const { input: input } = this.refs;
        input.value = this.value;
        input.addEventListener("input", this.handleInput);
        input.addEventListener("change", this.handleInput);
        this.style.position = "relative";
    }
    render() {
        super.render();
        const { input: input } = this.refs;
        input.placeholder = this.placeholder !== "" ? this.placeholder : this.filters.map((filter)=>filter.hint).join(" ");
        input.value = this.value;
    }
}
const $46dc716dd2cf5925$export$8ca73b4108207c1f = $46dc716dd2cf5925$var$FilterBuilder.elementCreator({
    tag: "filter-builder"
});




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
        const { div: div } = this.refs;
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




class $1b88c9cb596c3426$var$MarkdownViewer extends (0, $hgUW1$Component) {
    src = "";
    value = "";
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
        this.innerHTML = (0, $hgUW1$marked)(this.value, {
            mangle: false,
            headerIds: false
        });
    }
}
const $1b88c9cb596c3426$export$305b975a891d0dfa = $1b88c9cb596c3426$var$MarkdownViewer.elementCreator();



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
            // @ts-expect-error
            display: "none !important"
        },
        ":host .tab-holder": {
            display: "flex",
            flexDirection: "column"
        },
        ":host .tabs": {
            display: "flex",
            userSelect: "none"
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
            dataRef: "tabs"
        }), $6bbe441346901d5a$var$div({
            class: "border"
        }, $6bbe441346901d5a$var$div({
            class: "selected",
            dataRef: "selected"
        }))),
        $6bbe441346901d5a$var$slot()
    ];
    constructor(){
        super();
        this.initAttributes("anne", "example");
    }
    // @ts-expect-error
    addTabBody(body, selectTab = false) {
        if (!body.hasAttribute("name")) throw new Error("element has no name attribute", body);
        this.shadowRoot.append(body);
        this.setupTabs();
        if (selectTab) this.value = this.bodies.length - 1;
        this.queueRender();
    }
    // @ts-expect-error
    keyTab = (event)=>{
        const { tabs: tabs } = this.refs;
        // @ts-expect-error
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
    // @ts-expect-error
    get bodies() {
        return [
            ...this.children
        ].filter((elt)=>elt.hasAttribute("name"));
    }
    pickTab = (event)=>{
        const { tabs: tabs } = this.refs;
        // @ts-expect-error
        const target = event.target;
        const tabIndex = [
            ...tabs.children
        ].indexOf(target);
        if (tabIndex > -1) this.value = tabIndex;
    };
    setupTabs = ()=>{
        const { tabs: tabs } = this.refs;
        const tabBodies = [
            ...this.querySelectorAll("[name]")
        ];
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
        const { tabs: tabs } = this.refs;
        tabs.addEventListener("click", this.pickTab);
        tabs.addEventListener("keydown", this.keyTab);
        this.setupTabs();
    }
    render() {
        const { tabs: tabs, selected: selected } = this.refs;
        const tabBodies = this.bodies;
        for(let i = 0; i < tabBodies.length; i++){
            const tabBody = tabBodies[i];
            // @ts-expect-error
            const tab = tabs.children[i];
            if (this.value === Number(i)) {
                tab.setAttribute("aria-selected", true);
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






export {$59f50bee37676c09$export$d75ad8f79fe096cb as bodymovinPlayer, $8a70bd76f9b7e656$export$d89b6f4d34274146 as codeEditor, $e6e19030d0c18d6f$export$f71ce0a5ddbe8fa0 as dataTable, $46dc716dd2cf5925$export$8ca73b4108207c1f as filterBuilder, $6246d5006b5a56c3$export$ca243e53be209efb as mapBox, $1b88c9cb596c3426$export$305b975a891d0dfa as markdownViewer, $6bbe441346901d5a$export$a932f737dcd864a2 as tabSelector, $b92d846b773fd5ef$export$fb335fe3908368a2 as trackMouse, $5c31145f3e970423$export$c6e082819e9a0330 as scriptTag, $5c31145f3e970423$export$63257fda812a683f as styleSheet};
//# sourceMappingURL=index.js.map
