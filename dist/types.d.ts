import { Component, ElementCreator, ElementPart } from "xinjs";
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
type SVGIconMap = {
    [key: string]: ElementCreator<SVGElement>;
};
type IconSpec = {
    p: string[];
    w: number;
    h: number;
};
export const defineIcon: (name: string, icon: IconSpec | string) => void;
export const svg2DataUrl: (svg: SVGElement, fill?: string, stroke?: string, strokeWidth?: number | string) => string;
export const icons: SVGIconMap;
export class SvgIcon extends Component {
    icon: string;
    color: string;
    constructor();
    render(): void;
}
export const svgIcon: ElementCreator<HTMLElement>;
type B3dCallback = ((element: B3d, BABYLON: any) => void) | ((element: B3d, BABYLON: any) => Promise<void>);
interface B3dUIOptions {
    snippetId?: string;
    jsonUrl?: string;
    data?: any;
    size?: number;
}
type MeshProcessCallback = (meshes: any[]) => void;
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
    loadScene: (path: string, file: string, processCallback?: MeshProcessCallback) => Promise<void>;
    loadUI: (options: B3dUIOptions) => Promise<any>;
    connectedCallback(): void;
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
export const trackDrag: (event: PointerEvent, callback: TrackerCallback, cursor?: string) => void;
export const findHighestZ: (selector?: string) => number;
export const bringToFront: (element: HTMLElement, selector?: string) => void;
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
export type SelectCallback = (selected: any[]) => void;
export class DataTable extends Component {
    select: boolean;
    multiple: boolean;
    selectionChanged: SelectCallback;
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
    content: null;
    getColumn(event: any): ColumnOptions | undefined;
    selectRow(row: any, select?: boolean): void;
    selectRows(rows?: any[], select?: boolean): void;
    deSelect(rows?: any[]): void;
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
    get visibleSelectedRows(): any[];
    get selectedRows(): any[];
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
type Fields = Array<{
    name?: string;
    prop: string;
}>;
export interface FilterPartState {
    haystack: string;
    condition: string;
    needle: string;
}
export class FilterPart extends Component {
    fields: Fields;
    filters: {
        [key: string]: FilterMaker;
    };
    haystack: string;
    condition: string;
    needle: string;
    content: () => (SVGElement | HTMLSpanElement)[];
    filter: Filter;
    constructor();
    get state(): FilterPartState;
    set state(newState: FilterPartState);
    buildFilter: () => void;
    connectedCallback(): void;
    render(): void;
}
export const filterPart: ElementCreator<FilterPart>;
export type FilterState = FilterPartState[];
export class FilterBuilder extends Component {
    get fields(): Fields;
    set fields(_fields: Fields);
    get state(): FilterState;
    set state(parts: FilterState);
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
export class XinFloat extends Component {
    drag: boolean;
    content: HTMLSlotElement;
    styleNode: HTMLStyleElement;
    constructor();
    reposition: (event: Event) => void;
    connectedCallback(): void;
}
export const xinFloat: ElementCreator<XinFloat>;
export class XinField extends Component {
    caption: string;
    key: string;
    type: '' | 'checkbox' | 'number' | 'range' | 'date';
    optional: boolean;
    pattern: string;
    placeholder: string;
    content: HTMLLabelElement;
    constructor();
    handleChange: () => void;
    connectedCallback(): void;
    render(): void;
}
export class XinForm extends Component {
    context: {
        [key: string]: any;
    };
    value: {
        [key: string]: any;
    };
    get isValid(): boolean;
    styleNode: HTMLStyleElement;
    content: (HTMLSlotElement | HTMLFormElement)[];
    submit(): void;
    handleSubmit: (event: SubmitEvent) => void;
    onSubmit: (value: {
        [key: string]: any;
    }, isValid: boolean) => void;
    connectedCallback(): void;
}
export const xinField: ElementCreator<XinField>;
export const xinForm: ElementCreator<XinForm>;
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
*/
export interface XinButton {
    index: number;
    pressed: boolean;
    value: number;
}
export interface XinGamepad {
    id: string;
    axes: number[];
    buttons: {
        [key: number]: number;
    };
}
export function gamepadState(): {
    id: string;
    axes: readonly number[];
    buttons: {
        [key: number]: number;
    };
}[];
export function gamepadText(): string;
export interface XinXRControllerComponentState {
    pressed: boolean;
    axes?: number[];
}
export interface XinXRControllerState {
    [key: string]: XinXRControllerComponentState;
}
export interface XinXRControllerMap {
    [key: string]: XinXRControllerState;
}
export function xrControllers(xrHelper: any): {
    [key: string]: XinXRControllerState;
};
export function xrControllersText(controllers?: XinXRControllerMap): string;
export class TabSelector extends Component {
    value: number;
    static makeTab(tabs: TabSelector, tabBody: HTMLElement, bodyId: string): HTMLElement;
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
    onResize(): void;
    render(): void;
}
export const tabSelector: ElementCreator<TabSelector>;
interface ExampleContext {
    [key: string]: any;
}
export class LiveExample extends Component {
    prettier: boolean;
    prefix: string;
    storageKey: string;
    context: ExampleContext;
    uuid: string;
    remoteId: string;
    lastUpdate: number;
    interval?: Timer;
    static insertExamples(element: HTMLElement, context?: ExampleContext): void;
    get activeTab(): Element | undefined;
    get css(): string;
    set css(code: string);
    get html(): string;
    set html(code: string);
    get js(): string;
    set js(code: string);
    updateUndo: () => void;
    undo: () => void;
    redo: () => void;
    content: () => any[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    copy: () => void;
    toggleMaximize: () => void;
    get remoteKey(): string;
    remoteChange: (event?: StorageEvent) => void;
    showCode: () => void;
    closeCode: () => void;
    openEditorWindow: () => void;
    refreshRemote: () => void;
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
export type FloatPosition = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw' | 'auto';
export interface PopFloatOptions {
    content: HTMLElement | ElementPart[];
    target: HTMLElement;
    position?: FloatPosition;
}
export const popFloat: (options: PopFloatOptions) => XinFloat;
export const positionFloat: (element: HTMLElement, target: HTMLElement, position?: FloatPosition) => void;
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

```html
<div class="container">
  <xin-sizebreak min-width="150" min-height="80">
    <h1>BIG!</h1>
    <i slot="small">little</i>
  </xin-sizebreak>
  <xin-sizer></xin-sizer>
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
  max-height: 100%;
  width: 400px;
  height: 100px;
}

.preview .sizer {
  position: absolute;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: #0002;
  bottom: 0;
  right: 0;
  cursor: nwse-resize;
  opacity: 0.5;
}

.preview .sizer:hover {
  opacity: 1.0;
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
export class XinSizer extends Component {
    styleNode: HTMLStyleElement;
    content: SVGElement;
    resizeParent: (event: Event) => void;
    connectedCallback(): void;
}
export const xinSizer: ElementCreator<XinSizer>;
type SortValuator<T> = (f: T) => (string | number)[];
type SortCallback<T> = (p: T, q: T) => number;
/*!
# makeSorter

I'm always confusing myself when writing sort functions, so I wrote `makeSorter()`. It's
insanely simple and just works™. It makes writing an array sort callback for anything
other than an array of numbers or strings easier.

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

## Details

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
*/
export function makeSorter<T>(sortValuator: SortValuator<T>, ascending?: boolean | boolean[]): SortCallback<T>;

//# sourceMappingURL=types.d.ts.map
