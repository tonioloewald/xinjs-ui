import { Component } from 'xinjs';
export declare class MarkdownViewer extends Component {
    src: string;
    value: string;
    content: any;
    elements: boolean;
    context: {
        [key: string]: any;
    };
    constructor();
    connectedCallback(): void;
    didRender: (() => void) | (() => Promise<void>);
    render(): void;
}
export declare const markdownViewer: ElementCreator<MarkdownViewer>;
