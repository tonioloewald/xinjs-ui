import { Component as WebComponent, ElementCreator } from 'xinjs';
export declare function blockStyle(options?: {
    caption: string;
    tagType: string;
}[]): any;
export declare function spacer(width?: string): any;
export declare function elastic(width?: string): any;
export declare function commandButton(title: string, dataCommand: string, icon: SVGElement): any;
export declare const richTextWidgets: () => any[];
export declare class RichText extends WebComponent {
    widgets: 'none' | 'minimal' | 'default';
    private isInitialized;
    get value(): string;
    set value(docHtml: string);
    blockElement(elt: Node): Element | undefined;
    get selectedBlocks(): any[];
    get selectedText(): string;
    selectionChange: (event: Event, editor: RichText) => void;
    handleSelectChange: (event: Event) => void;
    handleButtonClick: (event: Event) => void;
    content: any[];
    constructor();
    doCommand(command?: string): void;
    updateBlockStyle(): void;
    connectedCallback(): void;
    render(): void;
}
export declare const richText: ElementCreator<RichText>;
