import { Component as WebComponent, ElementCreator } from 'xinjs';
interface Choice {
    icon?: string | SVGElement;
    value: string;
    caption: string;
}
export declare class XinSegmented extends WebComponent {
    choices: string | Choice[];
    other: string;
    multiple: boolean;
    name: string;
    placeholder: string;
    localized: boolean;
    value: null | string;
    get values(): string[];
    content: () => any[];
    static styleSpec: {
        ':host': {
            display: string;
            gap: any;
            alignItems: any;
        };
        ':host, :host::part(options)': {
            flexDirection: any;
        };
        ':host label': {
            display: string;
            alignItems: string;
            gap: any;
            gridTemplateColumns: any;
            padding: any;
            font: any;
        };
        ':host label:has(:checked)': {
            color: any;
            background: any;
        };
        ':host svg': {
            height: any;
            stroke: any;
        };
        ':host label.no-icon': {
            gap: number;
            gridTemplateColumns: any;
        };
        ':host input[type="radio"], :host input[type="checkbox"]': {
            visibility: any;
        };
        ':host::part(options)': {
            display: string;
            borderRadius: any;
            background: any;
            color: any;
            overflow: string;
            alignItems: any;
        };
        ':host::part(custom)': {
            padding: any;
            color: any;
            background: any;
            font: any;
            border: string;
            outline: string;
        };
        ':host::part(custom)::placeholder': {
            color: any;
            opacity: any;
        };
    };
    constructor();
    private valueChanged;
    handleChange: () => void;
    handleKey: (event: KeyboardEvent) => void;
    connectedCallback(): void;
    private get _choices();
    get isOtherValue(): boolean;
    render(): void;
}
export declare const xinSegmented: ElementCreator<XinSegmented>;
export {};
