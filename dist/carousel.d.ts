import { Component as WebComponent, ElementCreator } from 'xinjs';
export declare class XinCarousel extends WebComponent {
    arrows: boolean;
    dots: boolean;
    loop: boolean;
    maxVisibleItems: number;
    snapDelay: number;
    snapDuration: number;
    auto: number;
    private lastAutoAdvance;
    private interval?;
    private autoAdvance;
    private _page;
    get page(): number;
    set page(p: number);
    get visibleItems(): HTMLElement[];
    get lastPage(): number;
    static styleSpec: {
        ':host': {
            display: string;
            flexDirection: string;
            position: string;
        };
        ':host svg': {
            height: any;
        };
        ':host button': {
            outline: string;
            border: string;
            boxShadow: string;
            background: string;
            fill: any;
            padding: number;
        };
        ':host::part(back), :host::part(forward)': {
            position: string;
            top: number;
            bottom: number;
            width: any;
            zIndex: number;
        };
        ':host::part(back)': {
            left: number;
        };
        ':host::part(forward)': {
            right: number;
        };
        ':host button:disabled': {
            opacity: number;
            pointerEvents: string;
        };
        ':host button:hover': {
            fill: any;
        };
        ':host button:active': {
            fill: any;
        };
        ':host::part(pager)': {
            position: string;
        };
        ':host::part(scroller)': {
            overflow: string;
            position: string;
        };
        ':host::part(grid)': {
            display: string;
            justifyItems: string;
        };
        ':host *::-webkit-scrollbar, *::-webkit-scrollbar-thumb': {
            display: string;
        };
        ':host .dot': {
            background: any;
            borderRadius: any;
            height: any;
            width: any;
            transition: any;
        };
        ':host .dot:not(.current):hover': {
            background: any;
            height: any;
            width: any;
            margin: any;
        };
        ':host .dot:not(.current):active': {
            background: any;
        };
        ':host .dot.current': {
            background: any;
        };
        ':host::part(progress)': {
            display: string;
            gap: any;
            justifyContent: string;
            padding: any;
        };
    };
    easing: (t: number) => number;
    indicateCurrent: () => void;
    snapPosition: () => void;
    back: () => void;
    forward: () => void;
    handleDotClick: (event: Event) => void;
    private snapTimer;
    private animationFrame;
    animateScroll(position: number, startingPosition?: number, timestamp?: number): void;
    content: () => any[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): void;
}
export declare const xinCarousel: ElementCreator<XinCarousel>;
