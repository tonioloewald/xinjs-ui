/*!
# rating

`XinRating` / `<xin-rating>` provides a drop-in replacement for an `<input>`
that renders a rating using <xin-icon icon="star" color="red"></xin-icon>s.

```html
<xin-rating value=3.4></xin-rating>
<xin-rating min=0 value=3.4 step=0.5 hollow></xin-rating>
<xin-rating value=3.4 color="deepskyblue"></xin-rating>
<xin-rating value=3.1 max=10 color="hotpink" icon="heart" icon-size=32></xin-rating>
```
```css
.preview {
  display: flex;
  flex-direction: column;
}
```

## Attributes

- `icon-size` (24 by default) determines the height of the control and along with `max` its width
- `max` maximum rating
- `min` (1 by default) can be 0 or 1 (allowing ratings of 0 to max or 1 to max)
- `step` (0.5 by default) granularity of rating
- `icon` ('star' by default) determines the icon used
- `fill` (#f91 by default) is the color of rating icons
- `empty-color` (#ccc by default) is the color of background icons
- `readonly` (false by default) prevents the user from changing the rating
- `hollow` (false by default) makes the empty rating icons hollow.

## Keyboard

`<xin-rating>` should be fully keyboard navigable (and, I hope, accessible).

The up key increases the rating, down descreases it. This is the same
as the behavior of `<input type="number">`, [Shoelace's rating widget](https://shoelace.style/components/rating/),
and (in my opinion) common sense, but  not like [MUI's rating widget](https://mui.com/material-ui/react-rating/).
*/
import { Component, ElementCreator } from 'xinjs';
export declare class XinRating extends Component {
    iconSize: number;
    min: 0 | 1;
    max: number;
    step: number;
    value: number | null;
    icon: string;
    color: string;
    emptyColor: string;
    emptyStrokeWidth: number;
    readonly: boolean;
    hollow: boolean;
    static styleSpec: {
        ':host': {
            display: string;
            position: string;
            width: string;
        };
        ':host::part(empty), :host::part(filled)': {
            height: string;
            whiteSpace: string;
            overflow: string;
        };
        ':host::part(empty)': {
            pointerEvents: string;
            _textColor: string;
        };
        ':host [part="empty"]:not(.hollow)': {
            fill: any;
        };
        ':host .hollow': {
            fill: string;
            stroke: any;
            strokeWidth: any;
        };
        ':host::part(filled)': {
            position: string;
            left: number;
            fill: any;
            stroke: any;
            strokeWidth: any;
        };
        ':host svg': {
            transform: string;
            pointerEvents: string;
            transition: string;
        };
        ':host svg:hover': {
            transform: string;
        };
        ':host svg:active': {
            transform: string;
        };
    };
    constructor();
    content: () => any[];
    displayValue(value: number | null): void;
    update: (event: Event) => void;
    handleKey: (event: KeyboardEvent) => void;
    connectedCallback(): void;
    private _renderedIcon;
    render(): void;
}
export declare const xinRating: ElementCreator<XinRating>;
