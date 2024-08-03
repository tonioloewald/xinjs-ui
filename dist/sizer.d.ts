/*!
# sizer

This is a super-simple component that you can put in a fixed size element allowing it to be resized
from the bottom-right.

```html
<div>
  <xin-sizer></xin-sizer>
</div>
```
```css
.preview div {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 200px;
  height: 100px;
  background: #ff02;
  border: 1px solid #555;
}
```

<xin-css-var-editor element-selector="xin-sizer"></xin-css-var-editor>
*/
import { Component as XinComponent } from 'xinjs';
export declare class XinSizer extends XinComponent {
    target?: HTMLElement | null;
    static styleSpec: {
        ':host': {
            _resizeIconFill: string;
            display: string;
            position: string;
            bottom: number;
            right: number;
            padding: number;
            width: number;
            height: number;
            opacity: number;
            transition: string;
        };
        ':host(:hover)': {
            opacity: number;
        };
        ':host svg': {
            width: number;
            height: number;
            fill: any;
        };
    };
    content: any;
    get minSize(): {
        width: number;
        height: number;
    };
    resizeTarget: (event: Event) => void;
    connectedCallback(): void;
}
export declare const xinSizer: ElementCreator<XinSizer>;
