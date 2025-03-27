/*!
# tag-list

Building a tag-list from standard HTML elements is a bit of a nightmare.

`<xin-tag-list>` allows you to display an editable or read-only tag list (represented either
as a comma-delimited string or an array of strings).

```html
<label style="position: absolute; right: 10px; top: 10px; display: block">
  <input type="checkbox" class="disable-toggle">
  <b>Disable All</b>
</label>
<label>
  <b>Display Only</b>
  <xin-tag-list
    value="this,that,,the-other"
  ></xin-tag-list>
</label>
<xin-tag-list
  class="compact"
  value="this,that,,the-other"
></xin-tag-list>
<br>
<label>
  <b>Editable</b>
  <xin-tag-list
    class="editable-tag-list"
    value="belongs,also belongs,custom"
    editable
    available-tags="belongs,also belongs,not initially chosen"
  ></xin-tag-list>
</label>
<br>
<b>Text-Entry</b>
<xin-tag-list
  value="this,that,the-other,not,enough,space"
  editable
  text-entry
  available-tags="tomasina,dick,,harriet"
></xin-tag-list>
```
```css
.preview .compact {
  --spacing: 8px;
  --font-size: 12px;
  --line-height: 18px;
}
.preview label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
```
```js
preview.addEventListener('change', (event) => {
  console.log(event.target, event.target.value)
}, true)
preview.querySelector('.disable-toggle').addEventListener('change', (event) => {
  const tagLists = Array.from(preview.querySelectorAll('xin-tag-list'))
  for(const tagList of tagLists) {
    tagList.disabled = event.target.checked
  }
})
```

## Properties

### `value`: string | string[]

A list of tags

### `tags`: string[]

## `popSelectMenu`: () => void

This is the method called when the user clicks the menu button. By default is displays a
pick list of tags, but if you wish to customize the behavior, just replace this method.

A read-only property giving the value as an array.

### `available-tags`: string | string[]

A list of tags that will be displayed in the popup menu by default. The popup menu
will always display custom tags (allowing their removal).

### `editable`: boolean

Allows the tag list to be modified via menu and removing tags.

### `text-entry`: boolean

If `editable`, an input field is provided for entering tags directly.

### `placeholder`: string = 'enter tags'

Placeholder shown on input field.
*/
import { Component as WebComponent, ElementCreator } from 'xinjs';
export declare class XinTag extends WebComponent {
    caption: string;
    removeable: boolean;
    removeCallback: (event: Event) => void;
    content: () => any[];
    constructor();
}
export declare const xinTag: ElementCreator<XinTag>;
interface Tag {
    value: string;
    caption?: string;
    color?: string;
    background?: string;
    icon?: string | HTMLElement;
}
type TagList = (string | Tag | null)[];
export declare class XinTagList extends WebComponent {
    disabled: boolean;
    name: string;
    availableTags: string | TagList;
    value: string | string[];
    textEntry: boolean;
    editable: boolean;
    placeholder: string;
    get tags(): string[];
    constructor();
    addTag: (tag: string) => void;
    toggleTag: (toggled: string) => void;
    enterTag: (event: KeyboardEvent) => void;
    popSelectMenu: () => void;
    content: () => any[];
    removeTag: (event: Event) => void;
    render(): void;
}
export declare const xinTagList: ElementCreator<XinTagList>;
export {};
