import { Component, ElementCreator } from "xinjs";
export class AbTest extends Component {
    static set conditions(context: {
        [key: string]: any;
    });
    condition: string;
    not: boolean;
    static instances: Set<AbTest>;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): void;
}
export const abTest: import("xinjs").ElementCreator<HTMLElement>;
export function scriptTag(src: string, existingSymbolName?: string): Promise<any>;
export function styleSheet(href: string): Promise<void>;
type B3dCallback = ((element: B3d, BABYLON: any) => void) | ((element: B3d, BABYLON: any) => Promise<void>);
export class B3d extends Component {
    babylonReady: Promise<any>;
    BABYLON?: any;
    styleNode: HTMLStyleElement;
    content: HTMLCanvasElement;
    constructor();
    scene: any;
    engine: any;
    sceneCreated: B3dCallback;
    update: B3dCallback;
    onResize(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export const b3d: ElementCreator<B3d>;
export interface LottieConfig {
    container?: HTMLElement | ShadowRoot;
    renderer: 'svg' | 'canvas' | 'html';
    loop: boolean;
    autoplay: boolean;
    animationData?: string;
    path?: string;
    [key: string]: any;
}
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
type ObjectTest = (obj: any) => boolean;
type _ArrayFilter1 = (array: any[]) => any[];
interface FilterMaker {
    caption: string;
    negative?: string;
    needsValue?: boolean;
    makeTest: (value: any) => ObjectTest;
}
export const availableFilters: {
    [key: string]: FilterMaker;
};
interface Filter {
    description: string;
    test: ObjectTest;
}
export class FilterPart extends Component {
    fields: {
        name?: string | undefined;
        prop: string;
    }[];
    filters: {
        [key: string]: FilterMaker;
    };
    content: () => (SVGElement | HTMLSpanElement)[];
    filter: Filter;
    buildFilter: () => void;
    connectedCallback(): void;
    render(): void;
}
export const filterPart: ElementCreator<HTMLElement>;
export class FilterBuilder extends Component {
    fields: {
        name?: string | undefined;
        prop: string;
    }[];
    filter: _ArrayFilter1;
    description: string;
    addFilter: () => void;
    content: () => (HTMLDivElement | HTMLButtonElement)[];
    filters: {
        [key: string]: FilterMaker;
    };
    reset: () => void;
    buildFilter: () => void;
    connectedCallback(): void;
    render(): void;
}
export const filterBuilder: ElementCreator<FilterBuilder>;
type SVGIconMap = {
    [key: string]: ElementCreator<SVGElement>;
};
export const icons: SVGIconMap;
export class SvgIcon extends Component {
    icon: string;
    constructor();
    render(): void;
}
export const svgIcon: ElementCreator<HTMLElement>;
export class TabSelector extends Component {
    value: number;
    styleNode: HTMLStyleElement;
    content: (HTMLSlotElement | HTMLDivElement)[];
    constructor();
    addTabBody(body: HTMLElement, selectTab?: boolean): void;
    removeTabBody(body: HTMLElement): void;
    keyTab: (event: KeyboardEvent) => void;
    get bodies(): Element[];
    pickTab: (event: Event) => void;
    setupTabs: () => void;
    connectedCallback(): void;
    render(): void;
}
export const tabSelector: ElementCreator<TabSelector>;
interface ExampleContext {
    [key: string]: any;
}
export class LiveExample extends Component {
    context: ExampleContext;
    static insertExamples(element: HTMLElement, context?: ExampleContext): void;
    get css(): string;
    set css(code: string);
    get html(): string;
    set html(code: string);
    get js(): string;
    set js(code: string);
    content: () => any[];
    connectedCallback(): void;
    copy: () => void;
    toggleMaximize: () => void;
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
    mapStyle: string;
    token: string;
    static mapboxCSSAvailable: Promise<void>;
    static mapboxAvailable?: Promise<any>;
    styleNode: HTMLStyleElement;
    constructor();
    connectedCallback(): void;
    render(): void;
}
export const mapBox: ElementCreator<MapBox>;
export class MarkdownViewer extends Component {
    src: string;
    value: string;
    content: null;
    elements: boolean;
    context: {
        [key: string]: any;
    };
    constructor();
    connectedCallback(): void;
    didRender: (() => void) | (() => Promise<void>);
    render(): void;
}
export const markdownViewer: ElementCreator<MarkdownViewer>;
export function blockStyle(options?: {
    caption: string;
    tagType: string;
}[]): any;
export function spacer(width?: string): HTMLSpanElement;
export function elastic(width?: string): HTMLSpanElement;
export function commandButton(title: string, dataCommand: string, icon: SVGElement): HTMLButtonElement;
export const richTextWidgets: () => any[];
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
# size-break

While we wait for enough browsers to implement [container-queries](https://www.w3.org/TR/css-contain-3/),
and in any event when you simply want to do different things at different sizes (e.g. in the project I'm
working on right now, a row of buttons turns into a menu at narrow widths) there's `<xin-sizebreak>`.

Note that the sizes referred to are of the `<xin-sizebreak>`'s `.offsetParent`, and it watches for
the window's `resize` events and its own (via `ResizeObserver`).

```js
const { trackDrag } = xinjsui

const container = preview.querySelector('.container')
const sizer = preview.querySelector('.sizer')

function resize(event) {
  const w = container.offsetWidth
  const h = container.offsetHeight
  trackDrag(event, (dx, dy, event) => {
    container.style.width = (w + dx) + 'px'
    container.style.height = (h + dy) + 'px'
    return event.type === 'mouseup'
  }, 'nwse-resize')
}

sizer.addEventListener('mousedown', resize, 'nwse-resize')
sizer.addEventListener('touchstart', resize, 'nwse-resize')
```
```html
<div class="container">
  <xin-sizebreak min-width="150" min-height="80">
    <h1>BIG!</h1>
    <i slot="small">little</i>
  </xin-sizebreak>
  <div class="sizer"></div>
</div>
```
```css
.preview {
  touch-action: none;
}

.preview xin-sizebreak {
  width: 100%;
  height: 100%;
  background: #fff8;
  border: 1px solid #aaa;
}

.preview xin-sizebreak * {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.preview .container {
  position: relative;
  min-width: 100px;
  min-height: 40px;
  max-height: 200px;
  width: 400px;
  height: 100px;
}

.preview .sizer {
  position: absolute;
  width: 20px;
  height: 20px;
  background: #0003;
  bottom: 0;
  right: 0;
  cursor: nwse-resize;
}
```

`<xin-sizebreak>` supports both `min-width` and/or `min-height`, and you can of course target only one
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

To create a sort callback that sorts by propA then propB (if propA is tied):
```
const sorter = makeSorter(
  obj => [obj.propA, obj.propB]
)
```

As above, but sort descending:
```
const sorter = makeSorter(
  obj => [obj.propA, obj.propB],
  false
)
```

As above but propA is sorted ascending, propB descending
```
const sorter = makeSorter(
  obj => [obj.propA, obj.propB],
  [true, false]
)
```

Interactive example:

```js
const { select, option, div, span, ul, li } = xinjs.elements
const { icons, makeSorter } = xinjsui

const people = [
  { first: 'Frasier', last: 'Crane', age: 38 },
  { first: 'Lilith', last: 'Crane', age: 37 },
  { first: 'Rebecca', last: 'Howe', age: 35 },
  { first: 'Woody', last: 'Boyd', age: 25 },
  { first: 'Sam', last: 'Malone', age: 40 },
  { first: 'Norm', last: 'Peterson', age: 38 },
]

const sorters = {
  firstSort: makeSorter(person => [person.first]),
  firstDescSort: makeSorter(person => [person.first], false),
  nameSort: makeSorter(person => [person.last, person.first]),
  ageFirst: makeSorter(person => [-person.age, person.last]),
  ageLast: makeSorter(person => [person.age, person.first], [true, false]),
}

function person({first, last, age}) {
  return li(`${first} ${last}, ${age}`)
}

const list = ul()
sortPicker = select(
  option('Sort by first', {value: 'firstSort'}),
  option('Sort by first (desc)', {value: 'firstDescSort'}),
  option('Sort by last, first', {value: 'nameSort'}),
  option('Sort by age (desc), first', {value: 'ageFirst'}),
  option('Sort by age, last (desc)', {value: 'ageLast'}),
  {
    onChange: render,
    value: 'nameSort'
  },
)

function render () {
  list.textContent = ''
  list.append(...people.sort(sorters[sortPicker.value]).map(person))
}

preview.append(
  div(
    sortPicker,
    icons.chevronDown()
  ),
  list
)

render()
```
```css
.preview {
  padding: var(--spacing);
}

.preview div {
  position: absolute;
  top: var(--spacing);
  right: var(--spacing);
}
```
*/
export function makeSorter<T>(sortValuator: SortValuator<T>, ascending?: boolean | boolean[]): SortCallback<T>;

//# sourceMappingURL=types.d.ts.map
