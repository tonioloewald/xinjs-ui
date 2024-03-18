/*!

# color input field

This is a color input field that supports opacity

```html
<xin-color value="red"></xin-color>
```

<xin-css-var-editor element-selector="xin-color"></xin-css-var-editor>
*/
import { Component as WebComponent } from 'xinjs';
declare class ColorInput extends WebComponent {
    role: string;
    value: any;
    color: any;
    static styleSpec: {
        ':host': {
            _gap: number;
            _swatchSize: number;
            _cssWidth: number;
            display: string;
            gap: any;
            alignItems: string;
        };
        ':host input[type="color"]': {
            border: number;
            width: any;
            height: any;
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
