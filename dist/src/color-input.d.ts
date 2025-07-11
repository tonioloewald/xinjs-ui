import { Component, ElementCreator, PartsMap } from 'xinjs';
interface ColorParts extends PartsMap {
    rgb: HTMLInputElement;
    alpha: HTMLInputElement;
    css: HTMLInputElement;
}
declare class ColorInput extends Component<ColorParts> {
    value: any;
    color: any;
    static styleSpec: {
        ':host': {
            _gap: number;
            _swatchSize: number;
            _cssWidth: number;
            _alphaWidth: number;
            display: string;
            gap: any;
            alignItems: string;
        };
        ':host input[type="color"]': {
            border: number;
            width: any;
            height: any;
            background: string;
        };
        ':host::part(alpha)': {
            width: any;
        };
        ':host::part(css)': {
            width: any;
            fontFamily: string;
        };
    };
    content: any[];
    private valueChanged;
    update: (event: Event) => void;
    connectedCallback(): void;
    render(): void;
}
export declare const colorInput: ElementCreator<ColorInput>;
export {};
