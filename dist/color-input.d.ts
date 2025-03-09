/*!

# color input field

This is a color input field that supports opacity

```js
const colorInput = preview.querySelector('xin-color')
const circle = preview.querySelector('div')

colorInput.addEventListener('change', () => {
  console.log(colorInput.value)
  circle.style.background = colorInput.value
})
```
```html
<xin-color value="red"></xin-color>
<div
  style="
    width: 200px;
    height: 200px;
    background: red;
    border-radius: 100px;
  "
></div>
```


<xin-css-var-editor element-selector="xin-color"></xin-css-var-editor>
*/
import { Component as WebComponent, ElementCreator } from 'xinjs';
declare class ColorInput extends WebComponent {
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
