/*!
# sidebar

The default layout for iOS / iPadOS apps is to hide the sidebar when displaying content on small
screens, and display the sidebar when space is available (with the user able to explicitly hide
the sidebar if so desired). `<xin-sidenav>` provides this functionality.

`<xin-sidenav>` is used to handle the layout of the documentation tab panel.

`<xin-sidenav>`'s behavior is controlled by two attributes, `minSize` is the point at which it will toggle between showing the navigation
sidebar and content, while `navSize` is the width of the sidebar. You can interrogate its `compact` property to find out if it's
currently in `compact` form.
*/
import { Component as WebComponent } from 'xinjs';
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
