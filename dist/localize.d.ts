import { Component } from 'xinjs';
export declare const i18n: any;
export declare const setLocale: (language: string) => void;
export declare const updateLocalized: () => void;
export declare function initLocalization(localizedStrings: string): void;
export declare function localize(ref: string): string;
export declare class LocalePicker extends Component {
    hideCaption: boolean;
    content: () => any;
    constructor();
    render(): void;
}
export declare const localePicker: any;
export declare class XinLocalized extends Component {
    static allInstances: Set<{
        AbstractLocalized: any;
    }>;
    contents: () => any;
    refString: string;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    localeChanged(): void;
    render(): void;
}
export declare const xinLocalized: any;
