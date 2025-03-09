/*!
# tabs

`<xin-tabs>` creates a `tabpanel` for its children, creating a `tab` for each based on its
`name` attribute.

```js
[...preview.querySelectorAll('div[name]')].forEach(div => {
  div.style.color = `hsl(${(Math.random() * 360).toFixed(0)} 50% 50%)`
})

const { div, button } = xinjs.elements
const tabSelector = preview.querySelector('xin-tabs')

tabSelector.onCloseTab = body => {
  if (!confirm(`Are you sure you want to close the ${body.getAttribute('name')} tab?`)) {
    return false
  }
}

let bodycount = 0
preview.querySelector('.add').addEventListener('click', () => {
  const name = `new tab ${++bodycount}`
  const body = div(
    {name, dataClose: true},
    name,
  )
  tabSelector.addTabBody(body, true)
})
```
```html
<xin-tabs>
  <div name="first">first body</div>
  <div name="second" data-close>
    <template role="tab">
      <xin-icon
        style="
          display: inline-block;
          width: 16px;
          height: 16px;
          transform: translateY(2px);
          margin-right: 4px;
          fill: var(--brand-color);
        "
        icon="eye"
      ></xin-icon>
      <span>Ooooh!!!</span>
    </template>
    look at the html…
  </div>
  <div name="third">third body</div>
  <button class="add" slot="after-tabs">
    <xin-icon icon="plus"></xin-icon>
  </button>
</xin-tabs>
```
```css
  .preview xin-tabs {
    height: 100%;
  }

  .preview div[name] {
    padding: 20px;
    text-align: center;
    height: 100%;
    font-size: 200%;
  }

  .preview .add {
    width: 38px;
    line-height: 38px;
    height: 38px;
    padding: 0;
  }
```

The `<xin-tabs>`s `value` is the index of its active body.

A `<xin-tabs>` has `addTabBody(body: HTMLElement, select?: boolean)` and
`removeTabBody(body: number | HTMLElement)` methods for updating its content.

You can also just insert or remove tab bodies directly and call `setupTabs()`.

## Closeable Tabs

Adding the `data-close` attribute to a tab will make it closeable.

When a tab is closed, the `<xin-tabs>` element's `onCloseTab: (tabBody: Element) => boolean | undefined | void`
will be called. If you override this method and return `false`, the tab will
not be closed (e.g. if you want to implement save/cancel behavior).

## Custom Tab Content

You can specify the exact content of the tab for a given body by
adding a `<template role="tab">` to that body. The contents of that
template will be cloned into the tab.
*/
import { Component as WebComponent, ElementCreator } from 'xinjs';
type TabCloseHandler = (tabBody: Element) => boolean | undefined | void;
export declare class TabSelector extends WebComponent {
    value: number;
    static makeTab(tabs: TabSelector, tabBody: HTMLElement, bodyId: string): HTMLElement;
    static styleSpec: {
        ':host': {
            display: string;
            flexDirection: string;
            position: string;
            overflow: string;
            boxShadow: string;
        };
        slot: {
            position: string;
            display: string;
            flex: string;
            overflow: string;
            overflowY: string;
        };
        'slot[name="after-tabs"]': {
            flex: string;
        };
        '::slotted([hidden])': {
            display: string;
        };
        ':host::part(tabpanel)': {
            display: string;
            flexDirection: string;
            overflowX: string;
        };
        ':host::part(tabrow)': {
            display: string;
        };
        ':host .tabs': {
            display: string;
            userSelect: string;
            whiteSpace: string;
        };
        ':host .tabs > div': {
            padding: string;
            cursor: string;
            display: string;
            alignItems: string;
        };
        ':host .tabs > [aria-selected="true"]': {
            '--text-color': any;
            color: any;
        };
        ':host .elastic': {
            flex: string;
        };
        ':host .border': {
            background: string;
        };
        ':host .border > .selected': {
            content: string;
            width: number;
            height: string;
            background: any;
            transition: string;
        };
        ':host button.close': {
            fill: any;
            border: number;
            background: string;
            textAlign: string;
            marginLeft: any;
            padding: number;
        };
        ':host button.close > svg': {
            height: string;
        };
    };
    onCloseTab: TabCloseHandler | null;
    content: any[];
    constructor();
    addTabBody(body: HTMLElement, selectTab?: boolean): void;
    removeTabBody(body: HTMLElement): void;
    keyTab: (event: Event) => void;
    get bodies(): Element[];
    pickTab: (event: Event) => void;
    setupTabs: () => void;
    connectedCallback(): void;
    onResize(): void;
    render(): void;
}
export declare const tabSelector: ElementCreator<TabSelector>;
export {};
