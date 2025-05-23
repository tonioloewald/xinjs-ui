import { Component, ElementCreator } from 'xinjs';
interface ExampleContext {
    [key: string]: any;
}
export declare class LiveExample extends Component {
    persistToDom: boolean;
    prettier: boolean;
    prefix: string;
    storageKey: string;
    context: ExampleContext;
    uuid: string;
    remoteId: string;
    lastUpdate: number;
    interval?: any;
    static insertExamples(element: HTMLElement, context?: ExampleContext): void;
    constructor();
    get activeTab(): Element | undefined;
    private getEditorValue;
    private setEditorValue;
    get css(): string;
    set css(code: string);
    get html(): string;
    set html(code: string);
    get js(): string;
    set js(code: string);
    updateUndo: () => void;
    undo: () => void;
    redo: () => void;
    get isMaximized(): boolean;
    flipLayout: () => void;
    exampleMenu: () => void;
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
    updateSources: () => void;
    refresh: () => void;
    initFromElements(elements: HTMLElement[]): void;
    showDefaultTab(): void;
    render(): void;
}
export declare const liveExample: ElementCreator<LiveExample>;
export declare function makeExamplesLive(element: HTMLElement): void;
export {};
