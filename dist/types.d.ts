import { Component, ElementCreator } from "xinjs";
export function scriptTag(src: string, existingSymbolName?: string): Promise<any>;
export function styleSheet(href: string): Promise<void>;
export interface LottieConfig {
    container?: HTMLElement | ShadowRoot;
    renderer: 'svg' | 'cancas' | 'html';
    loop: boolean;
    autoplay: boolean;
    animationData?: string;
    path?: string;
    [key: string]: any;
}
/*!
# `<bodymovin-player>`

A wrapper for AirBnb's bodymovin, a.k.a. [lottie](https://airbnb.io/lottie/#/web), player. It's designed
to work like an `<img>` element (just set its `src` attribute).

```html
<bodymovin-player
  style="height: 160px; width: 160px"
  src="https://raw.githubusercontent.com/tonioloewald/xinjs-ui/main/demo/88140-rocket-livetrade.json"
></bodymovin-player>
<div>
  Animation by <a target="_blank" href="https://lottiefiles.com/dvskjbicfc">chiến lê hồng</a>
</div>
```
```css
.preview {
  padding: var(--spacing);
  text-align: center;
}
```

You can also directly set its `json` property to the content of a `lottie.json` file.

And of course just access the element's `animation` property to [use the bodymovin API](https://airbnb.io/lottie/#/web).
*/
export class BodymovinPlayer extends Component {
    content: null;
    src: string;
    json: string;
    config: LottieConfig;
    static bodymovinAvailable?: Promise<any>;
    animation: any;
    styleNode: HTMLStyleElement;
    get loading(): boolean;
    constructor();
    render(): void;
}
export const bodymovinPlayer: ElementCreator<BodymovinPlayer>;
export class CodeEditor extends Component {
    get value(): string;
    set value(text: string);
    mode: string;
    disabled: boolean;
    role: string;
    get editor(): any;
    options: any;
    theme: string;
    styleNode: HTMLStyleElement;
    constructor();
    onResize(): void;
    connectedCallback(): void;
    render(): void;
}
export const codeEditor: ElementCreator<CodeEditor>;
type TrackerCallback = (dx: number, dy: number, event: any) => true | undefined;
/*!
# trackDrag

Sometimes you want to track a mouse-drag or touch-drag operation without messing around.
This is how the resizeable columns in `<data-table>` work.

Just call `trackDrag(event, (dx, dy, event) => { ... })` and you'll get updates on corresponding events until
you return `true` from the event-handler (or, in the case of `touch` events, the last `touch` ends).
For mouse events, a "tracker" element is thrown up in front of everything for the event.

```html
<p>
  Try dragging the squares…
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

For `touch` events, `dx` and `dy` are based on `event.touches[0]`. If you want to handle
multi-touch gestures (e.g. pinch-to-zoom) or specific touches, handle the `event.touches`
array yourself.
*/
export const trackDrag: (event: PointerEvent, callback: TrackerCallback, cursor?: string) => void;
export interface ColumnOptions {
    name?: string;
    prop: string;
    width: number;
    visible?: boolean;
    align?: string;
    headerCell?: (options: ColumnOptions) => HTMLElement;
    dataCell?: (options: ColumnOptions) => HTMLElement;
}
export interface TableData {
    columns?: ColumnOptions[] | null;
    array: any[];
    filter?: ArrayFilter | null;
}
export type ArrayFilter = (array: any[]) => any[];
export class DataTable extends Component {
    maxVisibleRows: number;
    get value(): TableData;
    set value(data: TableData);
    charWidth: number;
    rowHeight: number;
    minColumnWidth: number;
    get virtual(): {
        height: number;
    } | undefined;
    constructor();
    get array(): any[];
    set array(newArray: any[]);
    get filter(): ArrayFilter;
    set filter(filterFunc: ArrayFilter);
    get columns(): ColumnOptions[];
    set columns(newColumns: ColumnOptions[]);
    get visibleColumns(): ColumnOptions[];
    get visibleRecords(): any[];
    content: null;
    getColumn(event: any): ColumnOptions | undefined;
    setCursor: (event: Event) => void;
    resizeColumn: (event: any) => void;
    connectedCallback(): void;
    setColumnWidths(): void;
    get rowStyle(): {
        display: string;
        gridTemplateColumns: string;
        height: string;
        lineHeight: string;
    };
    get cellStyle(): {
        overflow: string;
        whiteSpace: string;
        textOverflow: string;
    };
    headerCell: (options: ColumnOptions) => HTMLElement;
    dataCell: (options: ColumnOptions) => HTMLElement;
    get visibleRows(): any[];
    render(): void;
}
export const dataTable: ElementCreator<DataTable>;
type _ArrayFilter1 = (array: any[]) => any[];
type ObjectTest = (obj: any) => boolean;
interface FilterMaker {
    hint: string;
    explanation?: string;
    description: (...matches: string[]) => string;
    token: RegExp;
    makeFilter: (...matches: string[]) => ObjectTest;
}
export const availableFilters: FilterMaker[];
interface Filter {
    description: string;
    test: ObjectTest;
}
export function getFilter(term: string, filters?: FilterMaker[]): Filter | undefined;
export class FilterBuilder extends Component {
    filter: _ArrayFilter1;
    title: string;
    content: HTMLInputElement;
    placeholder: string;
    help: string;
    filters: FilterMaker[];
    get value(): string;
    set value(query: string);
    constructor();
    buildFilter: import("xinjs").VoidFunc;
    reset(): void;
    handleInput: (event: Event) => void;
    connectedCallback(): void;
    render(): void;
}
export const filterBuilder: ElementCreator<FilterBuilder>;
export class TabSelector extends Component {
    value: number;
    styleNode: HTMLStyleElement;
    content: (HTMLSlotElement | HTMLDivElement)[];
    constructor();
    addTabBody(body: HTMLElement, selectTab?: boolean): void;
    keyTab: (event: KeyboardEvent) => void;
    get bodies(): Element[];
    pickTab: (event: Event) => void;
    setupTabs: () => void;
    connectedCallback(): void;
    render(): void;
}
export const tabSelector: ElementCreator<TabSelector>;
export class LiveExample extends Component {
    get css(): string;
    set css(code: string);
    get html(): string;
    set html(code: string);
    get js(): string;
    set js(code: string);
    content: () => any[];
    connectedCallback(): void;
    refresh: () => void;
    initFromElements(elements: HTMLElement[]): void;
    showDefaultTab(): void;
    render(): void;
}
export const liveExample: ElementCreator<LiveExample>;
export function makeExamplesLive(element: HTMLElement): void;
export const MAPSTYLES: {
    name: string;
    url: string;
}[];
export class MapBox extends Component {
    coords: string;
    content: HTMLDivElement;
    get map(): any;
    mapStyle: {
        name: string;
        url: string;
    };
    token: string;
    static mapboxCSSAvailable: Promise<void>;
    static mapboxAvailable?: Promise<any>;
    styleNode: HTMLStyleElement;
    constructor();
    connectedCallback(): void;
    render(): void;
}
export const mapBox: ElementCreator<MapBox>;
/*!
# `<markdown-viewer>`

Render [markdown](https://www.markdownguide.org/) anywhere, either using the `src` attribute to load
the file asynchronousely, or just put the text inside it. Powered by [marked](https://www.npmjs.com/package/marked).

```
<markdown-viewer src="/path/to/file.md">
```

And you can set the `<markdown-viewer>` element's `value` directly, or:

```html
<markdown-viewer>
## hello
world
</markdown-viewer>
```
```css
markdown-viewer {
  display: block;
  padding: var(--spacing);
}
```

And just set the element's `value` and it will render it for you.
*/
export class MarkdownViewer extends Component {
    src: string;
    value: string;
    content: null;
    constructor();
    connectedCallback(): void;
    didRender: (() => void) | (() => Promise<void>);
    render(): void;
}
export const markdownViewer: ElementCreator<MarkdownViewer>;
export function blockStyle(options?: {
    caption: string;
    tagType: string;
}[]): HTMLSelectElement;
export function spacer(width?: string): HTMLSpanElement;
export function elastic(width?: string): HTMLSpanElement;
export function commandButton(title: string, dataCommand: string, iconClass: string): HTMLButtonElement;
export const richTextWidgets: () => HTMLSpanElement[];
export class RichText extends Component {
    widgets: 'none' | 'minimal' | 'default';
    get value(): string;
    set value(docHtml: string);
    blockElement(elt: Node): Element | undefined;
    get selectedBlocks(): any[];
    get selectedText(): string;
    selectionChange: (event: Event, editor: RichText) => void;
    content: any[];
    constructor();
    doCommand(command?: string): void;
    handleSelectChange: (event: Event) => void;
    handleButtonClick: (event: Event) => void;
    updateBlockStyle(): void;
    connectedCallback(): void;
    render(): void;
}
export const richText: ElementCreator<RichText>;
export class SideNav extends Component {
    minSize: number;
    navSize: number;
    compact: boolean;
    content: HTMLSlotElement[];
    get contentVisible(): boolean;
    set contentVisible(visible: boolean);
    styleNode: HTMLStyleElement;
    onResize: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    constructor();
    render(): void;
}
export const sideNav: ElementCreator<SideNav>;
/*!
# `<size-break>`

While we wait for enough browsers to implement [container-queries](https://www.w3.org/TR/css-contain-3/),
and in any event when you simply want to do different things at different sizes (e.g. in the project I'm
working on right now, a row of buttons turns into a menu at narrow widths) there's `<size-break>`.

Note that the sizes referred to are of the `<size-break>`'s `.offsetParent`, and it watches for
the window's `resize` events and its own (via `ResizeObserver`).

```
<size-break min-width="500">
  <default-thing>I am big!</default-thing>
  <small-thing slot="small">I am little</small-thing>
</size-break>
```

`<size-break>` supports both `min-width` and/or `min-height`, and you can of course target only one
of the slots if you like. The demo site uses them to hide the [bundlejs](https://bundlejs.com/) badge when
space is tight.
*/
export class SizeBreak extends Component {
    minWidth: number;
    minHeight: number;
    value: 'normal' | 'small';
    content: HTMLSlotElement[];
    styleNode: HTMLStyleElement;
    constructor();
    onResize: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export const sizeBreak: ElementCreator<SizeBreak>;
type SortValuator<T> = (f: T) => (string | number)[];
type SortCallback<T> = (p: T, q: T) => number;
/*!
# makeSorter

I'm always confusing myself when writing sort functions, so I wrote `makeSorter()`. It's
insanely simple and just works™. It makes writing an array sort callback for anything
other than an array of numbers or strings easier.

Usage:

```
interface Person {
  nameFirst: string
  nameLast: string
}

const people: Person[] = await getRecords(...)

// sort by nameLast, then nameFirst
const nameSorter = makeSorter(
  (person: Person) => [person.nameLast, person.nameFirst]
)

people.sort(nameSorter)
```

Here's a slightly more complex example:

```
interface Product {
  name: string,
  category: string,
  sales: number
}

const productSales = await getRecords(...)

// sort by category (A-Z), then sales (highest to lowest)
const categorySalesSorter = makeSorter(
  (product: Product) => [product.category, -product.sales]
)

productSales.sort(categorySalesSorter)
```

Basically, you write a function that given some thing returns a prioritized list of
`string`s or `number`s and `makeSorter` produces an callback function for `Array.sort()`
that will sort the array in _ascending_ order.

If you pass `false` as the (optional) second parameter you'll get a _descending_ sorter,
but for numbers just multiplying by -1 is just as easy (per the example).

If I ever conceive of a need for a version that lets you invert the sort order of
multiple non-numerical array elements I'll extend it.
*/
export function makeSorter<T>(sortValuator: SortValuator<T>, ascending?: boolean): SortCallback<T>;

//# sourceMappingURL=types.d.ts.map
