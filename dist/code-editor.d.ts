/*!
# code

An [ACE Editor](https://ace.c9.io/) wrapper.

Sometimes, it's nice to be able to just toss a code-editor in a web-page.

`<xin-code>`'s `value` is the code it contains. Its `mode` attribute sets the language, and you can further configure
the ACE editor instance via its `options` property.

```html
<xin-code style="width: 100%; height: 100%" mode="css">
body {
  box-sizing: border-box;
}
</xin-code>
```
*/
import { Component as WebComponent } from 'xinjs';
export declare class CodeEditor extends WebComponent {
    private source;
    get value(): string;
    set value(text: string);
    mode: string;
    disabled: boolean;
    role: string;
    get editor(): any;
    private _editor;
    private _editorPromise;
    options: any;
    theme: string;
    static styleSpec: {
        ':host': {
            display: string;
            position: string;
            width: string;
            height: string;
        };
    };
    constructor();
    onResize(): void;
    connectedCallback(): void;
    render(): void;
}
export declare const codeEditor: ElementCreator<CodeEditor>;
