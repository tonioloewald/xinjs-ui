import { Component as WebComponent, ElementCreator } from 'tosijs';
interface HighlightParts {
    pre: HTMLPreElement;
    code: HTMLElement;
}
export declare class HighlightBlock extends WebComponent<HighlightParts> {
    static preferredTagName: string;
    static initAttributes: {
        /** Fence-style language name — `js`, `ts`, `rust`, `bash`, … */
        language: string;
    };
    private _value;
    /** `lang\0source` of the last DOM write — see the idempotence note in `render`. */
    private _rendered;
    get value(): string;
    set value(text: string);
    static lightStyleSpec: {
        'tosi-highlight': {
            display: string;
        };
    };
    content: () => HTMLPreElement[];
    render(): void;
}
export declare const tosiHighlight: ElementCreator<HighlightBlock>;
export {};
