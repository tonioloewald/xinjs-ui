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

import { Component, elements, vars } from 'xinjs'
import { icons } from './icons'
import { findHighestZ } from './track-drag'
const { div, button } = elements

interface NotificationSpec {
  message: string
  type?: 'info' | 'log' | 'warn' | 'error' | 'progress' // default 'info'
  duration?: number
  progress?: () => number
  close?: () => void
}

const COLOR_MAP = {
  error: 'red',
  warn: 'orange',
  info: 'royalblue',
  log: 'gray',
  progress: 'royalblue',
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
      boxShadow: 'none !important',
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
      transition: '0.5s ease-in',
      transitionProperty: 'margin, opacity',
      zIndex: 1,
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
    ':host .message': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: vars.notificationSpacing,
    },
    ':host .note.closing': {
      opacity: 0,
      zIndex: 0,
    },
  }

  static removeNote(note: HTMLElement) {
    note.classList.add('closing')
    note.style.marginBottom = -note.offsetHeight + 'px'
    const remove = () => {
      note.remove()
    }
    note.addEventListener('transitionend', remove)
    setTimeout(remove, 1000)
  }

  static handleClick = (event: Event) => {
    if (event.target.classList.contains('close')) {
      XinNotification.removeNote(event.target.closest('.note'))
    }
  }

  static post(spec: NotificationSpec | string) {
    const { message, duration, type, close, progress } = Object.assign(
      { type: 'info', duration: -1 },
      typeof spec === 'string' ? { message: spec } : spec
    )

    if (!this.singleton) {
      this.singleton = xinNotification()
    }

    document.body.append(this.singleton)
    this.singleton.style.zIndex = String(findHighestZ() + 1)

    const _notificationAccentColor = COLOR_MAP[type]
    const progressBar =
      progress | (type === 'progress') ? elements.progress() : null
    const note = div(
      {
        class: `note ${type}`,
        style: {
          _notificationAccentColor,
        },
      },
      icons.info({
        class: 'icon',
      }),
      div({ class: 'message' }, div(message), progressBar),
      button(
        {
          class: 'close',
          title: 'close',
          apply(elt) {
            if (close) {
              elt.addEventListener('click', (event: Event) => {
                close()
                XinNotification.handleClick(event)
              })
            } else {
              elt.addEventListener('click', XinNotification.handleClick)
            }
          },
        },
        icons.x()
      )
    )

    this.singleton.shadowRoot.append(note)

    if (progress) {
      progressBar.value = progress()
      progressBar.setAttribute('max', 100)
      const interval = setInterval(() => {
        if (!this.singleton.shadowRoot.contains(note)) {
          clearInterval(interval)
          return
        }
        const percentage = progress()
        progressBar.value = percentage
        if (percentage >= 0) {
          XinNotification.removeNote(node)
          clearInterval(interval)
        }
      }, 1000)
    }

    if (duration > 0) {
      setTimeout(() => {
        XinNotification.removeNote(note)
      }, duration * 1000)
    }

    note.scrollIntoView()
  }

  content = null
}

export const xinNotification = XinNotification.elementCreator({
  tag: 'xin-notification',
})

export function postNotification(spec: NotificationSpec | string) {
  XinNotification.post(spec)
}
