/*!

# notifications

`XinNotification` provides a singleton custom `<xin-notification>` element that manages
a list of notifications.

You can post a notification simply with `XinNotification.post()` or `postNotification()`.

```
interface NotificationSpec {
	message: string
	type?: 'log'| 'info' | 'warn' | 'error',
	duration?: number
}
```

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
```

## `postNotification(spec: NotificationSpec | string)`

This is simply a wrapper for `XinNotification.post()`.
*/

import { Component, elements, vars } from 'xinjs'
import { icons } from './icons'
import { findHighestZ } from './track-drag'
const { div, button } = elements

interface NotificationSpec {
  message: string
  type?: 'log' | 'info' | 'warn' | 'error'
  duration?: number
}

const COLOR_MAP = {
  error: 'red',
  warn: 'orange',
  info: 'blue',
  log: 'gray',
}

export class XinNotification extends Component {
  private static singleton?: XinNotification

  static styleSpec = {
    ':host': {
      _notificationSpacing: 8,
      _notificationWidth: 360,
      _notificationPadding: vars.notificationSpacing200,
      _notificationBg: '#fafafa',
      _notificationAccentColor: '#aaa',
      _notificationTextColor: '#444',
      _notificationIconSize: vars.notificationSpacing300,
      _notificationButtonSize: 48,
      _notificationBorderRadius: vars.notificationSpacing,
      display: 'block',
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      paddingBottom: vars.notificationSpacing,
      width: vars.notificationWidth,
      display: 'flex',
      flexDirection: 'column-reverse',
      margin: '0 auto',
      gap: vars.notificationSpacing,
      maxHeight: '50vh',
      overflow: 'hidden auto',
    },
    ':host *': {
      color: vars.notificationTextColor,
    },
    ':host .note': {
      display: 'grid',
      background: vars.notificationBg,
      padding: vars.notificationPadding,
      gridTemplateColumns: `${vars.notificationIconSize} 1fr ${vars.notificationButtonSize}`,
      gap: vars.notificationSpacing,
      alignItems: 'center',
      borderRadius: vars.notificationBorderRadius,
      boxShadow: `0 2px 8px #0006, inset 0 0 0 2px ${vars.notificationAccentColor}`,
      transition: '0.5s ease-out',
    },
    ':host .note .icon': {
      fill: vars.notificationAccentColor,
    },
    ':host .note button': {
      display: 'flex',
      lineHeight: vars.notificationButtonSize,
      padding: 0,
      margin: 0,
      height: vars.notificationButtonSize,
      width: vars.notificationButtonSize,
      background: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'none',
      border: 'none',
      position: 'relative',
    },
    ':host .note button:hover': {
      fill: vars.notificationAccentColor,
    },
    ':host .note button:active': {
      transformOrigin: '50% 50%',
      transform: 'scale(1.1)',
    },
    ':host .note svg': {
      height: vars.notificationIconSize,
      width: vars.notificationIconSize,
      pointerEvents: 'none',
    },
    ':host .note.closing': {
      opacity: 0,
    },
  }

  static removeNote(note: HTMLElement) {
    note.classList.add('closing')
    note.style.marginBottom = -note.offsetHeight + 'px'
    note.addEventListener('transitionend', () => {
      note.remove()
    })
  }

  static handleClick = (event: Event) => {
    if (event.target.classList.contains('close')) {
      XinNotification.removeNote(event.target.closest('.note'))
    }
  }

  static post(spec: NotificationSpec | string) {
    const { message, duration, type } = Object.assign(
      { type: 'info', duration: -1 },
      typeof spec === 'string' ? { message: spec } : spec
    )

    if (!this.singleton) {
      this.singleton = xinNotification()
    }

    document.body.append(this.singleton)
    this.singleton.style.zIndex = String(findHighestZ() + 1)

    const _notificationAccentColor = COLOR_MAP[type]
    const note = div(
      {
        class: 'note',
        style: {
          _notificationAccentColor,
        },
      },
      icons.info({
        class: 'icon',
      }),
      div({ class: 'message' }, message),
      button(
        {
          class: 'close',
          title: 'close',
          apply(elt) {
            elt.addEventListener('click', XinNotification.handleClick)
          },
        },
        icons.x()
      )
    )

    if (duration > 0) {
      setTimeout(() => {
        XinNotification.removeNote(note)
      }, duration * 1000)
    }

    this.singleton.shadowRoot.append(note)

    note.scrollIntoView()
  }

  content = null
}

export const xinNotification = XinNotification.elementCreator({
  tag: 'xin-notification',
})

export function postNotification(spec: NotificationSpec | string): void {
  XinNotification.post(spec)
}
