import { Component as WebComponent, ElementCreator } from 'xinjs';
export declare class SideNav extends WebComponent {
    minSize: number;
    navSize: number;
    compact: boolean;
    content: any[];
    private _contentVisible;
    get contentVisible(): boolean;
    set contentVisible(visible: boolean);
    static styleSpec: {
        ':host': {
            display: string;
            gridTemplateColumns: string;
            gridTemplateRows: string;
            position: string;
            margin: any;
            transition: any;
        };
        ':host slot': {
            position: string;
        };
        ':host slot:not([name])': {
            display: string;
        };
        ':host slot[name="nav"]': {
            display: string;
        };
    };
    onResize: () => void;
    private observer;
    connectedCallback(): void;
    disconnectedCallback(): void;
    constructor();
    render(): void;
}
export declare const sideNav: ElementCreator<SideNav>;
