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
  type?: 'success' | 'info' | 'log' | 'warn' | 'error' | 'progress' // default 'info'
  icon?: SVGElement | string // defaults to an info icon
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

`postNotification` returns a callback function that closes the note programmatically (e.g.
when an operation completes). This will *also* call any `close` callback function you
provided. (The progress demos in the example exercise this functionality.)

```js
const { postNotification, icons } = xinjsui

const form = preview.querySelector('xin-form')
const submit = preview.querySelector('.submit')
const closeButton = preview.querySelector('.close')

let close

form.submitCallback = (value, isValid) => {
  if (!isValid) return
  if (value.type.startsWith('progress')) {
    startTime = Date.now()
    const { message, duration, icon } = value
    close = postNotification({
      message,
      type: 'progress',
      icon,
      progress: value.type === 'progress' ? () => (Date.now() - startTime) / (10 * duration) : undefined,
      close: () => { postNotification(`${value.message} cancelled`) },
    })
  } else {
    close = postNotification(value)
  }
  console.log(close)
  closeButton.disabled = false
}

submit.addEventListener('click', form.submit)
closeButton.addEventListener('click', () => {
  if (close) {
    close()
  }
})

postNotification({
  message: 'Welcome to xinjs-ui notifications, this message will disappear in 2s',
  duration: 2
})
```
```html
<xin-form>
  <h3 slot="header">Notification Test</h3>
  <xin-field caption="Message" key="message" type="string" value="This is a test…"></xin-field>
  <xin-field caption="Type" key="type" value="info">
    <xin-select slot="input"
      options="error,warn,info,success,log,,progress,progress (indefinite)"
    ></xin-select>
  </xin-field>
  <xin-field caption="Icon" key="icon" value="info">
    <xin-select slot="input"
      options="info,bug,thumbsUp,thumbsDown,message"
    ></xin-select>
  </xin-field>
  <xin-field caption="Duration" key="duration" type="number" value="2"></xin-field>
  <button slot="footer" class="close" disabled>Close Last Notification</button>
  <span slot="footer" class="elastic"></span>
  <button slot="footer" class="submit">Post Notification</button>
</xin-form>
```
```css
xin-form {
  height: 100%;
}

xin-form::part(content) {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  background: var(--background);
}

xin-form::part(header),
xin-form::part(footer) {
  background: #eee;
  justify-content: center;
  padding: 10px;
}

xin-form h3 {
  margin: 0;
}

xin-form label {
  display: grid;
  grid-template-columns: 120px 1fr;
}
```

## `postNotification(spec: NotificationSpec | string)`

This is simply a wrapper for `XinNotification.post()`.
*/
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
    static post(spec: NotificationSpec | string): callback;
    content: any;
}
export declare const xinNotification: ElementCreator<XinNotification>;
export declare function postNotification(spec: NotificationSpec | string): callback;
export {};
