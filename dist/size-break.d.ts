import { Component as WebComponent, ElementCreator } from 'xinjs';
export declare class SizeBreak extends WebComponent {
    minWidth: number;
    minHeight: number;
    value: 'normal' | 'small';
    content: any[];
    static styleSpec: {
        ':host': {
            display: string;
            position: string;
        };
    };
    constructor();
    onResize: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export declare const sizeBreak: ElementCreator<SizeBreak>;
