import { Component, ElementCreator } from "xinjs";
export function scriptTag(src: string, existingSymbolName?: string): Promise<any>;
export function styleSheet(href: string): Promise<void>;
interface LottieConfig {
    container?: HTMLElement | ShadowRoot;
    renderer: 'svg' | 'cancas' | 'html';
    loop: boolean;
    autoplay: boolean;
    animationData?: string;
    path?: string;
    [key: string]: any;
}
declare class BodymovinPlayer extends Component {
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
declare class CodeEditor extends Component {
    value: string;
    mode: string;
    disabled: boolean;
    role: string;
    get editor(): any;
    options: any;
    theme: string;
    styleNode: HTMLStyleElement;
    constructor();
    onResize(): void;
    updateValue: (event: Event) => Promise<void>;
    connectedCallback(): void;
    render(): void;
}
export const codeEditor: ElementCreator<CodeEditor>;
type TrackerCallback = (dx: number, dy: number, event: any) => true | undefined;
export const trackDrag: (event: any, callback: TrackerCallback, cursor?: string) => void;
interface ColumnOptions {
    name?: string;
    prop: string;
    width: number;
    visible?: boolean;
    align?: string;
    headerCell?: (options: ColumnOptions) => HTMLElement;
    dataCell?: (options: ColumnOptions) => HTMLElement;
}
interface TableData {
    columns?: ColumnOptions[] | null;
    array: any[];
    filter?: ArrayFilter | null;
}
type ArrayFilter = (array: any[]) => any[];
declare class DataTable extends Component {
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
declare class FilterBuilder extends Component {
    value: string;
    filter: _ArrayFilter1;
    title: string;
    content: HTMLInputElement;
    placeholder: string;
    help: string;
    filters: FilterMaker[];
    constructor();
    buildFilter: import("xinjs").VoidFunc;
    reset(): void;
    handleInput: (event: Event) => void;
    connectedCallback(): void;
    render(): void;
}
export const filterBuilder: ElementCreator<FilterBuilder>;
export const MAPSTYLES: {
    name: string;
    url: string;
}[];
declare class MapBox extends Component {
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
declare class MarkdownViewer extends Component {
    src: string;
    value: string;
    content: null;
    constructor();
    connectedCallback(): void;
    didRender: (() => void) | (() => Promise<void>);
    render(): void;
}
export const markdownViewer: ElementCreator<MarkdownViewer>;
declare class RichText extends Component {
    get value(): string;
    set value(docHtml: string);
    blockElement(elt: Node): Element | undefined;
    get selectedBlocks(): any[];
    get selectedText(): string;
    selectionChange: (event: Event, editor: RichText) => void;
    content: any[];
    doCommand(command?: string): void;
    handleSelectChange: (event: Event) => void;
    handleButtonClick: (event: Event) => void;
    connectedCallback(): void;
}
export const richText: ElementCreator<RichText>;
declare class SideNav extends Component {
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
declare class SizeBreak extends Component {
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
declare class TabSelector extends Component {
    value: number;
    role: string;
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
type SortValuator<T> = (f: T) => (string | number)[];
type SortCallback<T> = (p: T, q: T) => number;
export function makeSorter<T>(sortValuator: SortValuator<T>, ascending?: boolean): SortCallback<T>;

//# sourceMappingURL=types.d.ts.map
