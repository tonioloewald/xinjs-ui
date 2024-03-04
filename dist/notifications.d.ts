/*!

# notifications

`XinNotification` provides a singleton custom `<xin-notification>` element that manages
a list of notifications.

The notifications are displayed most-recent first. If the notifications would take more than
half the height of the display, they are scrolled.

You can post a notification simply with `XinNotification.post()` or `postNotification()`.

```
interface NotificationSpec {
  message: string
  type?: 'info' | 'log' | 'warn' | 'error' // default 'info'
  duration?: number
  progress?: () => number // return percentage completion
  close?: () => void
}
```

If you provide a `progress` callback (which is assumed to return a number from `0-100`, with
100+ indicating completion) then `XinNotification` will poll it every second until the
task completes or the notification is closed. Returning 100 or more will automatically close
the notification.

If you configure a notification's `type = "progress"` but don't provide a `progress` callback
then an indefinite `<progress>` element will be displayed.

If you provide a `close` callback, it will be fired if the user closes the notification.

```js
const { postNotification } = xinjsui

postNotification({
    message: 'Welcome to xinjs-ui, this message will disappear in 2s',
    duration: 2
})

postNotification({
  type: 'log',
  message: 'A log message…',
})

postNotification({
  type: 'warn',
  message: 'A warning!',
})

postNotification({
  type: 'error',
  message: 'An error!',
})

const start = Date.now()
postNotification({
  type: 'progress',
  message: 'Something is happening!',
  duration: 5,
  progress() {
    const completionPercentage = (Date.now() - start) / 50
    console.log(completionPercentage)
    return completionPercentage
  },
  close() {
    postNotification('cancelled something!')
  }
})
```

## `postNotification(spec: NotificationSpec | string)`

This is simply a wrapper for `XinNotification.post()`.
*/
import { Component } from 'xinjs';
interface NotificationSpec {
    message: string;
    type?: 'info' | 'log' | 'warn' | 'error' | 'progress';
    duration?: number;
    progress?: () => number;
    close?: () => void;
}
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
            _notificationBorderRadius: any;
            display: string;
            position: string;
            left: number;
            right: number;
            bottom: number;
            paddingBottom: any;
            width: any;
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
            transition: string;
            transitionProperty: string;
            zIndex: number;
        };
        ':host .note .icon': {
            fill: any;
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
            fill: any;
        };
        ':host .note button:active svg': {
            borderRadius: number;
            fill: any;
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
    static handleClick: (event: Event) => void;
    static post(spec: NotificationSpec | string): void;
    content: any;
}
export declare const xinNotification: any;
export declare function postNotification(spec: NotificationSpec | string): void;
export {};
