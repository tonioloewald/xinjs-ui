/*!
# editable-rect

`<xin-editable>` (`editableRect` is the `ElementCreator` and `EditableRect` is the class) is an element
for allowing the adjustment of another element's position and size. Simply insert it in a `position: absolute`
or `position: fixed` element and you can directly adjust its CSS positioning, including rotation.

Click on an element to adjust its position, dimensions, and rotation.

```js
const { editableRect, icons } = xinjsui
const { elements } = xinjs
const { button } = elements

const editable = editableRect(button({class: 'more-popup'}, icons.moreVertical()))
preview.addEventListener('click', (event) => {
  const target = event.target
  if (['absolute', 'fixed'].includes(getComputedStyle(target).position)) {
    target.append(editable)
  } else {
    editable.remove()
  }
})
preview.addEventListener('change', event => console.log(event))
```
```html
<div class="editable" style="top: 20px; left: 20px; width: auto; height: auto; right: 20px; bottom: 20px;">
  <div class="editable" style="top: 20px; left: 20px; width: 200px; height: 150px;">
  </div>
  <div class="editable" style="bottom: 20px; top: 20px; width: 300px; height: auto; right: 20px;">
  </div>
</div>
```
```css
.preview .editable {
  position: absolute;
  box-shadow: inset 0 0 0 1px #0ccc;
  background: #0cc1;
}

.preview button.more-popup {
  position: absolute;
  width: 44px;
  height: 44px;
  top: 2px;
  right: 2px;
  fill: var(--handle-hover-color);
  background: var(--handle-hover-bg);
  box-shadow: none;
}

.previw button
```

## Snapping

When `EditableRect.snapToGrid === true` or the shift-key is depresseed, position will snap to `EditableRect.gridSize` pixels (default = 8).

Similarly `EditableRect.snapAngle === true` or the shift-key will snap rotation to increments of `EditableRect.angleSize` degrees (default = 15).

## Events

After an element's position, size, or rotation are adjusted a `change` event is triggered on the element.
*/
import { Component } from 'xinjs';
interface Locks {
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
}
export declare class EditableRect extends Component {
    static angleSize: number;
    static gridSize: number;
    static snapAngle: boolean;
    static snapToGrid: boolean;
    static styleSpec: {
        ':host': {
            '--handle-bg': string;
            '--handle-color': string;
            '--handle-hover-bg': string;
            '--handle-hover-color': string;
            '--handle-size': string;
            '--handle-padding': string;
        };
        ':host ::slotted(*)': {
            position: string;
        };
        ':host > :not(style,slot)': {
            boxSizing: string;
            content: string;
            position: string;
            display: string;
            height: any;
            width: any;
            padding: any;
            '--text-color': any;
            background: any;
        };
        ':host > .drag-size': {
            top: number;
            bottom: number;
            left: number;
            right: number;
            height: string;
            width: string;
            background: string;
            cursor: string;
        };
        ':host > [part="rotate"]': {
            transform: string;
        };
        ':host > [locked] > svg:first-child, :host > :not([locked]) > svg+svg': {
            display: string;
        };
        ':host .icon-unlock': {
            opacity: number;
        };
        ':host svg': {
            pointerEvents: string;
        };
        ':host > *:hover': {
            '--text-color': any;
            background: any;
        };
    };
    static snappedCoords(event: PointerEvent, coords: number[]): number[];
    static snappedAngle(event: PointerEvent, a: number): number;
    get locked(): Locks;
    set locked(locks: Locks);
    get coords(): {
        top: number;
        left: number;
        bottom: number;
        right: number;
    };
    get left(): number;
    get width(): number;
    get right(): number;
    get top(): number;
    get height(): number;
    get bottom(): number;
    triggerChange: () => void;
    adjustPosition: (event: Event) => void;
    resize: (event: Event) => void;
    adjustSize: (event: Event) => void;
    get rect(): DOMRect;
    get center(): {
        x: number;
        y: number;
    };
    get element(): HTMLElement;
    adjustRotation: (event: Event) => void;
    toggleLock: (event: Event) => void;
    content: () => any[];
    constructor();
    connectedCallback(): void;
    render(): void;
}
export declare const editableRect: any;
export {};
