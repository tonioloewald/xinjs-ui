/*!
# segmented select

This is a fairly general-purpose segmented select control.

```html
<blockquote>
Check the console to see the values being set.
</blockquote>

<div class="grid">
<xin-segmented value="yes" choices="yes, no, don't care">
  Should we?
</xin-segmented>

<xin-segmented title="do you like?" choices="yes=Yes:thumbsUp, no=No:thumbsDown"></xin-segmented>

<xin-segmented
  style="--segmented-direction: column; --segmented-align-items: stretch"
  choices="in a relationship, single" other="it's complicated…"
  placeholder="oooh… please elaborate"
  value="separated"
>
  Relationship Status
</xin-segmented>

<xin-segmented
  multiple
  style="
    --segmented-direction: column;
    --segmented-align-items: start;
    --segmented-option-grid-columns: 24px 24px 100px;
    --segmented-input-visibility: visible;
  "
  choices="star=Star:star, game=Game:game, bug=Bug:bug, camera=Camera:camera"
  value="star,bug"
>
  Pick all that apply
</xin-segmented>
</div>
```
```css
.preview .grid {
  --segmented-option-current-background: var(--brand-color);
  --segmented-option-current-color: var(--brand-text-color);
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
```
```js
function logEvent(event) {
  const { target } = event
  if (target.tagName === 'XIN-SEGMENTED') {
    console.log((target.textContent || target.title).trim(), target.value)
  }
}
preview.addEventListener('change', logEvent, true)
```

## Properties

- `values` is an array of values (only really useful if `multiple` is set to true)

You can set `choices` programmatically to an array of `Choice` objects:

    interface Choice {
      icon?: string | SVGElement
      value: string
      caption: string
    }

## Attributes

- `choices` is a string of comma-delimited options of the form `value=caption:icon`,
  where caption and icon are optional
- `multiple` allows multiple selection
- `name` allows you to set the name of the `<input>` elements to a specific value, it will default
  to the component's `instanceId`
- `other` (default '', meaning other is not allowed) is the caption for other options, allowing
  the user to input their choice. It will be reset to '' if `multiple` is set.
- `placeholder` is the placeholder displayed in the `<input>` field for **other** responses

## Styling

The following CSS variables can be used to control customize the `<xin-segmented>` component.

    --segmented-align-items
    --segmented-direction
    --segmented-option-color
    --segmented-option-current-background
    --segmented-option-current-color
    --segmented-option-font
    --segmented-option-gap
    --segmented-option-grid-columns
    --segmented-option-icon-color
    --segmented-option-padding
    --segmented-options-background
    --segmented-options-border-radius
    --segmented-placeholder-opacity
*/
import { Component as WebComponent, ElementCreator } from 'xinjs';
interface Choice {
    icon?: string | SVGElement;
    value: string;
    caption: string;
}
declare class XinSegmented extends WebComponent {
    choices: string | Choice[];
    other: string;
    multiple: boolean;
    name: string;
    placeholder: string;
    value: null | string;
    get values(): string[];
    content: () => any[];
    static styleSpec: {
        ':host': {
            display: string;
            gap: any;
        };
        ':host, :host::part(options)': {
            flexDirection: any;
            alignItems: any;
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
            fill: any;
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
