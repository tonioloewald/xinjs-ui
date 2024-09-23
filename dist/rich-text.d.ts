/*!
# word (rich text editor)

`<xin-word>` is a simple and easily extensible `document.execCommand` WYSIWYG editor with some conveniences.

```html
<xin-word widgets="minimal">
<h3>Heading</h3>
<p>And some <b>text</b></p>
</xin-word>
```
```css
xin-word {
  background: white;
}

xin-word [part="toolbar"] {
  background: #f8f8f8;
}

xin-word [part="doc"] {
  padding: 20px;
}
```

By default, `<xin-word>` treats its initial contents as its document, but you can also set (and get)
its `value`.

## toolbar

`<xin-word>` elements have a `toolbar` slot (actually a xin-slot because it doesn't use
the shadowDOM).

If you set the `widgets` attribute to `default` or `minimal` you will get a toolbar
for free. Or you can add your own custom widgets.

## helper functions

A number of helper functions are available, including:

- `commandButton(title: string, command: string, iconClass: string)`
- `blockStyle(options: Array<{caption: string, tagType: string}>)`
- `spacer(width = '10px')`
- `elastic(width = '10px')`

These each create a toolbar widget. A `blockStyle`-generated `<select>` element will
automatically have its value changed based on the current selection.

## properties

A `<xin-word>` element also has `selectedText` and `selectedBlocks` properties, allowing
you to easily perform operations on text selections, and a `selectionChange` callback (which
simply passes through document `selectionchange` events, but also passes a reference to
the `<xin-word>` component).
*/
import { Component as WebComponent, ElementCreator } from 'xinjs';
export declare function blockStyle(options?: {
    caption: string;
    tagType: string;
}[]): any;
export declare function spacer(width?: string): any;
export declare function elastic(width?: string): any;
export declare function commandButton(title: string, dataCommand: string, icon: SVGElement): any;
export declare const richTextWidgets: () => any[];
export declare class RichText extends WebComponent {
    widgets: 'none' | 'minimal' | 'default';
    private isInitialized;
    get value(): string;
    set value(docHtml: string);
    blockElement(elt: Node): Element | undefined;
    get selectedBlocks(): any[];
    get selectedText(): string;
    selectionChange: (event: Event, editor: RichText) => void;
    handleSelectChange: (event: Event) => void;
    handleButtonClick: (event: Event) => void;
    content: any[];
    constructor();
    doCommand(command?: string): void;
    updateBlockStyle(): void;
    connectedCallback(): void;
    render(): void;
}
export declare const richText: ElementCreator<RichText>;
