import { Component, ElementCreator } from 'xinjs';
interface NotificationSpec {
    message: string;
    type?: 'success' | 'info' | 'log' | 'warn' | 'error' | 'progress';
    icon?: SVGElement | string;
    duration?: number;
    progress?: () => number;
    close?: () => void;
}
type callback = () => void;
export declare class XinNotification extends Component {
    private static singleton?;
    static styleSpec: {
        ':host': {
            _notificationSpacing: number;
            _notificationWidth: number;
            _notificationPadding: string;
            _notificationBg: string;
            _notificationAccentColor: string;
            _notificationTextColor: string;
            _notificationIconSize: any;
            _notificationButtonSize: number;
            _notificationBorderWidth: string;
            _notificationBorderRadius: any;
            position: string;
            left: number;
            right: number;
            bottom: number;
            paddingBottom: any;
            width: any;
            display: string;
            flexDirection: string;
            margin: string;
            gap: any;
            maxHeight: string;
            overflow: string;
            boxShadow: string;
        };
        ':host *': {
            color: any;
        };
        ':host .note': {
            display: string;
            background: any;
            padding: any;
            gridTemplateColumns: string;
            gap: any;
            alignItems: string;
            borderRadius: any;
            boxShadow: string;
            borderColor: any;
            borderWidth: any;
            borderStyle: string;
            transition: string;
            transitionProperty: string;
            zIndex: number;
        };
        ':host .note .icon': {
            stroke: any;
        };
        ':host .note button': {
            display: string;
            lineHeight: any;
            padding: number;
            margin: number;
            height: any;
            width: any;
            background: string;
            alignItems: string;
            justifyContent: string;
            boxShadow: string;
            border: string;
            position: string;
        };
        ':host .note button:hover svg': {
            stroke: any;
        };
        ':host .note button:active svg': {
            borderRadius: number;
            stroke: any;
            background: any;
            padding: any;
        };
        ':host .note svg': {
            height: any;
            width: any;
            pointerEvents: string;
        };
        ':host .message': {
            display: string;
            flexDirection: string;
            alignItems: string;
            gap: any;
        };
        ':host .note.closing': {
            opacity: number;
            zIndex: number;
        };
    };
    static removeNote(note: HTMLElement): void;
    static post(spec: NotificationSpec | string): callback;
    content: any;
}
export declare const xinNotification: ElementCreator<XinNotification>;
export declare function postNotification(spec: NotificationSpec | string): callback;
export {};
