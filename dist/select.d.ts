/*!
# select

`<xin-select>` (`xinSelect` is the `ElementCreator`) is a replacement for the lamentable
built in `<select>` element that addresses its various shortcomings.

- since `<xin-select>` is powered by `popMenu`, it supports separators.
- it will retain and display a value even if the matching option is missing.
- its displayed value can be made `editable` allowing use as a "combo box".
- options can have icons.
- options can have callbacks (e.g. an "Other…" that launches a dialog)
- picking an item triggers an `action` event even if the value hasn't changed.

```html
<xin-select
  title="simple select"
  options="this,that,,the other"
  value="not an option!"
></xin-select><br>
<xin-select
  title="has captions"
  class="captions"
  value="this"
></xin-select><br>
<xin-select
  title="combo select"
  class="icons"
  editable
  placeholder="pick an icon"
></xin-select>
```
```js
const { icons } = xinjsui

const captions = preview.querySelector('.captions')

captions.options = [
  {
    caption: 'choose this',
    value: 'this'
  },
  {
    caption: 'choose that',
    value: 'that'
  },
  null,
  {
    caption: 'choose the other',
    value: 'other',
  }
]

const iconsSelect = preview.querySelector('.icons')

iconsSelect.options = Object.keys(icons).sort().map(icon =>({
  icon,
  caption: icon,
  value: icon
}))

iconsSelect.addEventListener('action', event => console.log(event))
iconsSelect.addEventListener('change', event => console.log(event))
```

## `options`

    export interface SelectOption {
      icon?: string | HTMLElement
      caption: string
      value: string | OptionRequest
    }

    type OptionRequest = () => string

    export type SelectOptions = (string | null | SelectOption)[]

A `<xin-select>` can be assigned `options` as a string of comma-delimited choices,
or be provided with an array of options.

## Events

Picking an option triggers an `action` event (whether or not this changes the value).

Changing the value, either by typing in an editable `<xin-select>` or picking a new
value triggers a `change` event.

You can look at the console to see the events triggered by the second example.
*/
import { Component as WebComponent } from 'xinjs';
import { MenuItem } from './menu';
type OptionRequest = () => string;
export interface SelectOption {
    icon?: string | HTMLElement;
    caption: string;
    value: string | OptionRequest;
}
export type SelectOptions = (string | null | SelectOption)[];
export declare class XinSelect extends WebComponent {
    editable: boolean;
    options: string | SelectOptions;
    value: string;
    placeholder: string;
    private setValue;
    get selectOptions(): SelectOptions;
    get optionsMenu(): MenuItem[];
    handleChange: (event: Event) => void;
    handleKey: (event: KeyboardEvent) => void;
    popOptions: () => void;
    blockIfEditable: (event: Event) => void;
    content: () => any[];
    constructor();
    render(): void;
}
export declare const xinSelect: ElementCreator<XinSelect>;
export {};
