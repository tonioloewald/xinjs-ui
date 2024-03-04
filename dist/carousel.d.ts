/*!
# carousel

```html
<xin-carousel arrows dots>
  <div class="thing pink">item 1</div>
  <div class="thing green">item 2</div>
  <div class="thing blue">item 3</div>
  <div class="thing yellow">item 3</div>
</xin-carousel>
```
```css
.thing {
  width: 200px;
  height: 200px;
}

.pink {
  background: #fdd;
}

.green {
  background: #dfd;
}

.blue {
  background: #ddf;
}

.yellow {
  background: #ffd;
}
```

This is a minimalist carousel control that supports the usual stuff.
*/
import { Component as WebComponent } from 'xinjs';
declare class XinCarousel extends WebComponent {
    arrows: boolean;
    dots: boolean;
    visibleRows: number;
    visibleColumns: number;
    static styleSpec: {
        ':host': {
            display: string;
        };
    };
    content: () => any[];
    constructor();
    render(): void;
}
export declare const xinCarousel: ElementCreator<XinCarousel>;
export {};
