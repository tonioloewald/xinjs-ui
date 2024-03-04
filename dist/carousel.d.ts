/*!
# carousel

```html
<xin-carousel arrows dots max-visible-items=2>
  <div class="thing pink">item 1</div>
  <div class="thing green">item 2</div>
  <div class="thing blue">item 3</div>
  <div class="thing yellow">item 4</div>
  <div class="thing pink">item 5</div>
  <div class="thing green">item 6</div>
  <div class="thing blue">item 7</div>
  <div class="thing yellow">item 8</div>
</xin-carousel>
```
```css
.thing {
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 32px;
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
    maxVisibleItems: number;
    page: number;
    snapDuration: number;
    role: string;
    get visibleItems(): HTMLElement[];
    get lastPage(): number;
    static styleSpec: {
        ':host': {
            display: string;
            flexDirection: string;
            position: string;
        };
        ':host svg': {
            height: any;
        };
        ':host button': {
            outline: string;
            border: string;
            boxShadow: string;
            background: string;
            fill: any;
            padding: number;
        };
        ':host::part(back), :host::part(forward)': {
            position: string;
            top: number;
            bottom: number;
            width: any;
            zIndex: number;
        };
        ':host::part(back)': {
            left: number;
        };
        ':host::part(forward)': {
            right: number;
        };
        ':host button:disabled': {
            opacity: number;
            pointerEvents: string;
        };
        ':host button:hover': {
            fill: any;
        };
        ':host button:active': {
            fill: any;
        };
        ':host::part(pager)': {
            position: string;
        };
        ':host::part(scroller)': {
            overflow: string;
            position: string;
        };
        ':host::part(grid)': {
            display: string;
            justifyItems: string;
        };
        ':host *::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
            display: string;
        };
        ':host .dot': {
            background: any;
            borderRadius: any;
            height: any;
            width: any;
            transition: any;
        };
        ':host .dot:not(.current):hover': {
            background: any;
            height: any;
            width: any;
            margin: any;
        };
        ':host .dot:not(.current):active': {
            background: any;
        };
        ':host .dot.current': {
            background: any;
        };
        ':host::part(progress)': {
            display: string;
            gap: any;
            justifyContent: string;
            padding: any;
        };
    };
    easing: (t: number) => number;
    indicateCurrent: () => void;
    snapPosition: () => void;
    back: () => void;
    forward: () => void;
    handleDotClick: (event: Event) => void;
    private snapTimer;
    private animationFrame;
    animateScroll(position: number, startingPosition?: number, timestamp?: number): void;
    content: () => any[];
    constructor();
    connectedCallback(): void;
    render(): void;
}
export declare const xinCarousel: ElementCreator<XinCarousel>;
export {};
