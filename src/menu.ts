/*#
# menu

Being able to pop a menu up anywhere is just so nice, and `xinjs-ui` allows menus
to be generated on-the-fly, and even supports hierarchical menus.

```js
const { popMenu } = xinjsui
const { elements } = xinjs

let picked = ''
let testingEnabled = false

preview.addEventListener('click', (event) => {
  if (!event.target.closest('button')) {
    return
  }
  popMenu({
    target: event.target,
    menuItems: [
      {
        icon: 'thumbsUp',
        caption: 'Like',
        shortcut: '^L',
        action() {
          window.alert('I like it!')
        }
      },
      null, // separator
      {
        icon: 'thumbsDown',
        caption: 'dislike',
        shortcut: '⌘D',
        action() {
          window.alert('Awwwww!')
        }
      },
      {
        icon: elements.span('🥹'),
        caption: 'Also see…',
        menuItems: [
          {
            icon: elements.span('😳'),
            caption: 'And that’s not all…',
            menuItems: [
              {
                icon: 'externalLink',
                caption: 'timezones',
                action: 'https://timezones.xinjs.net/'
              },
              {
                icon: 'externalLink',
                caption: 'b8rjs',
                action: 'https://b8rjs.com'
              },
            ]
          },
          {
            icon: 'xinjs',
            caption: 'xinjs',
            action: 'https://xinjs.net'
          },
          {
            icon: 'xinie',
            caption: 'xinie',
            action: 'https://xinie.net'
          },
        ]
      },
      {
        icon: testingEnabled ? 'check' : '',
        caption: 'Testing Enabled',
        action() {
          testingEnabled = !testingEnabled
        }
      },
      {
        caption: 'Testing…',
        enabled() {
          return testingEnabled
        },
        menuItems: [
          {
            caption: 'one',
            checked: () => picked === 'one',
            action () {
              picked = 'one'
            }
          },
          {
            caption: 'two',
            checked: () => picked === 'two',
            action () {
              picked = 'two'
            }
          },
          {
            caption: 'three',
            checked: () => picked === 'three',
            action () {
              picked = 'three'
            }
          }
        ]
      }
    ]
  })
})
```
```html
<button title="menu test">
  <xin-icon icon="moreVertical"></xin-icon>
</button>
<button title="menu test from bottom-right" style="position: absolute; bottom: 0; right: 0">
  <xin-icon icon="moreVertical"></xin-icon>
</button>
```

## Overflow test

```js
const { popMenu, icons } = xinjsui
const { elements } = xinjs

preview.querySelector('button').addEventListener('click', (event) => {
  popMenu({
    target: event.target,
    menuItems:  Object.keys(icons).map(icon => ({
      icon,
      caption: icon,
      action() {
        console.log(caption)
      }
    }))
  })
})
```
```html
<button title="big menu test" style="position: absolute; top: 0; left: 0">
  Big Menu Test
</button>
```

## popMenu({target, width, menuItems…})

```
export interface PopMenuOptions {
  target: HTMLElement
  menuItems: MenuItem[]
  width?: string | number
  position?: FloatPosition
  submenuDepth?: number   // don't set this, it's set internally by popMenu
  submenuOffset?: { x: number; y: number }
  localized?: boolean
}
```

`popMenu` will spawn a menu on a target element. A menu is just a `MenuItem[]`.

## MenuItem

A `MenuItem` can be one of three things:

- `null` denotes a separator
- `MenuAction` denotes a labeled button or `<a>` tag based on whether the `action` provided
  is a url (string) or an event handler (function).
- `SubMenu` is a submenu.

### MenuAction

Note that popMenu does not implement shortcuts for you (yet!).

```
interface MenuAction {
  caption: string
  shortcut?: string
  checked?: () => boolean
  enabled?: () => boolean
  action: ActionCallback | string
  icon?: string | Element
}
```

### SubMenu

```
interface SubMenu {
  caption: string
  enabled?: () => boolean
  menuItems: MenuItem[]
  icon?: string | Element
}
```

## Localization

If you set `localized: true` in `PopMenuOptions` then menu captions will be be
passed through `localize`. You'll need to provide the appropriate localized strings,
of course.

To see this in action, see the example below, or look at the
[table example](?data-table.ts). It uses a `localized` menu
to render column names when you show hidden columns.

```js
const { elements } = xinjs
const { xinLocalized, icons, popMenu } = xinjsui
const { button } = elements
const target = button(
  {
    onClick(event) {
      popMenu({
        target: event.target.closest('button'),
        localized: true,
        menuItems: [
          {
            caption: 'New',
            action() {}
          },
          {
            caption: 'Open…',
            action() {}
          },
          {
            caption: 'Save',
            action() {}
          },
          {
            caption: 'Close',
            action() {}
          },
        ]
      })
    }
  },
  xinLocalized(
    { style: { marginRight: '5px' }},
    'menu'
  ),
  icons.chevronDown()
)
preview.append(target)
```

## Why another menu library?!

Support for menus is sadly lacking in HTML, and unfortunately there's a huge conceptual problem
with menus implemented the way React and React-influenced libraries work, i.e. you need
to have an instance of a menu "wrapped around" the DOM element that triggers it, whereas
a better approach (and one dating back at least as far as the original Mac UI) is to treat
a menu as a separate resource that can be instantiated on demand.

A simple example where this becomes really obvious is if you want to associate a "more options"
menu with every row of a large table. Either you end up having an enormous DOM (virtual or otherwise)
or you have to painfully swap out components on-the-fly.

And, finally, submenus are darn useful for any serious app.

For this reason, `xinjs-ui` has its own menu implementation.
*/

import { elements, varDefault, vars, StyleSheet } from 'xinjs'
import { popFloat, FloatPosition } from './pop-float'
import { icons } from './icons'
import { localize } from './localize'

export type ActionCallback = () => void | Promise<void>

export interface MenuAction {
  caption: string
  shortcut?: string
  checked?: () => boolean
  enabled?: () => boolean
  action: ActionCallback | string
  icon?: string | Element
}

export interface SubMenu {
  caption: string
  checked?: () => boolean
  enabled?: () => boolean
  menuItems: MenuItem[]
  icon?: string | Element
}

export type MenuSeparator = null

export type MenuItem = MenuAction | SubMenu | MenuSeparator

const { div, button, span, a } = elements

StyleSheet('xin-menu-helper', {
  '.xin-menu': {
    overflow: 'hidden auto',
    maxHeight: `calc(${vars.maxHeight} - ${varDefault.menuInset('8px')})`,
    borderRadius: vars.spacing50,
    background: varDefault.menuBg('#fafafa'),
    boxShadow: `${vars.spacing13} ${vars.spacing50} ${vars.spacing} ${vars.shadowColor}`,
  },
  '.xin-menu > div': {
    width: varDefault.menuWidth('auto'),
  },
  '.xin-menu-trigger': {
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: varDefault.touchSize('48px'),
  },
  '.xin-menu-separator': {
    display: 'inline-block',
    content: ' ',
    height: '1px',
    width: '100%',
    background: varDefault.menuItemColor('#222'),
    opacity: 0.25,
    margin: varDefault.menuSeparatorMargin('8px 0'),
  },
  '.xin-menu-item': {
    boxShadow: 'none',
    border: 'none !important',
    display: 'grid',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    gridTemplateColumns: '0px 1fr 30px',
    width: '100%',
    gap: 0,
    background: 'transparent',
    padding: varDefault.menuItemPadding('0 16px'),
    height: varDefault.menuItemHeight('48px'),
    lineHeight: varDefault.menuItemHeight('48px'),
    textAlign: 'left',
  },
  '.xin-menu-item, .xin-menu-item > span': {
    color: varDefault.menuItemColor('#222'),
  },
  '.xin-menu-with-icons .xin-menu-item': {
    gridTemplateColumns: '30px 1fr 30px',
  },
  '.xin-menu-item svg': {
    fill: varDefault.menuItemIconColor('#222'),
  },
  '.xin-menu-item.xin-menu-item-checked': {
    background: varDefault.menuItemHoverBg('#eee'),
  },
  '.xin-menu-item > span:nth-child(2)': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'left',
  },
  '.xin-menu-item:hover': {
    // chrome rendering bug
    boxShadow: 'none !important',
    background: varDefault.menuItemHoverBg('#eee'),
  },
  '.xin-menu-item:active': {
    // chrome rendering bug
    boxShadow: 'none !important',
    background: varDefault.menuItemActiveBg('#aaa'),
    color: varDefault.menuItemActiveColor('#000'),
  },
  '.xin-menu-item:active svg': {
    fill: varDefault.menuItemIconActiveColor('#000'),
  },
})

export const createMenuAction = (
  item: MenuAction,
  options: PopMenuOptions
): HTMLElement => {
  const checked = (item.checked && item.checked() && 'check') || false
  let icon = item?.icon || checked || span(' ')
  if (typeof icon === 'string') {
    icon = icons[icon]()
  }
  let menuItem: HTMLElement
  if (typeof item?.action === 'string') {
    menuItem = a(
      {
        class: 'xin-menu-item',
        href: item.action,
      },
      icon,
      options.localized ? span(localize(item.caption)) : span(item.caption),
      span(item.shortcut || ' ')
    )
  } else {
    menuItem = button(
      {
        class: 'xin-menu-item',
        onClick: item.action,
      },
      icon,
      options.localized ? span(localize(item.caption)) : span(item.caption),
      span(item.shortcut || ' ')
    )
  }
  menuItem.classList.toggle('xin-menu-item-checked', checked !== false)
  if (item?.enabled && !item.enabled()) {
    menuItem.setAttribute('disabled', '')
  }
  return menuItem
}

export const createSubMenu = (
  item: SubMenu,
  options: PopMenuOptions
): HTMLElement => {
  const checked = (item.checked && item.checked() && 'check') || false
  let icon = item?.icon || checked || span(' ')
  if (typeof icon === 'string') {
    icon = icons[icon]()
  }
  const submenuItem = button(
    {
      class: 'xin-menu-item',
      disabled: !(!item.enabled || item.enabled()),
      onClick(event: Event) {
        popMenu(
          Object.assign({}, options, {
            menuItems: item.menuItems,
            target: submenuItem,
            submenuDepth: (options.submenuDepth || 0) + 1,
            position: 'side',
          })
        )
        event.stopPropagation()
        event.preventDefault()
      },
    },
    icon,
    options.localized ? span(localize(item.caption)) : span(item.caption),
    icons.chevronRight({ style: { justifySelf: 'flex-end' } })
  )
  return submenuItem
}

export const createMenuItem = (
  item: MenuItem,
  options: PopMenuOptions
): HTMLElement => {
  if (item === null) {
    return span({ class: 'xin-menu-separator' })
  } else if ((item as MenuAction)?.action) {
    return createMenuAction(item as MenuAction, options)
  } else {
    return createSubMenu(item as SubMenu, options)
  }
}

export const menu = (options: PopMenuOptions): HTMLDivElement => {
  const { target, width, menuItems } = options
  const hasIcons = menuItems.find(
    (item) => item?.icon || (item as MenuAction)?.checked
  )
  return div(
    {
      class: hasIcons ? 'xin-menu xin-menu-with-icons' : 'xin-menu',
      onClick() {
        removeLastMenu(0)
      },
    },
    div(
      {
        style: {
          minWidth: target.offsetWidth + 'px',
          width: typeof width === 'number' ? `${width}px` : width,
        },
        onMousedown(event: Event) {
          event.preventDefault()
          event.stopPropagation()
        },
      },
      ...menuItems.map((item) => createMenuItem(item, options))
    )
  )
}

interface PoppedMenu {
  target: HTMLElement
  menu: HTMLElement
}
let lastPopped: PoppedMenu | undefined
const poppedMenus: PoppedMenu[] = []

export const removeLastMenu = (depth = 0): PoppedMenu | undefined => {
  const toBeRemoved = poppedMenus.splice(depth)
  for (const popped of toBeRemoved) {
    popped.menu.remove()
  }
  lastPopped = toBeRemoved[0]
  return depth > 0 ? poppedMenus[depth - 1] : undefined
}

export interface PopMenuOptions {
  target: HTMLElement
  menuItems: MenuItem[]
  width?: string | number
  position?: FloatPosition
  submenuDepth?: number
  submenuOffset?: { x: number; y: number }
  localized?: boolean
}

document.body.addEventListener('mousedown', (event: Event) => {
  if (
    event.target &&
    !poppedMenus.find((popped) => popped.target.contains(event.target as Node))
  ) {
    removeLastMenu(0)
  }
})
document.body.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    removeLastMenu(0)
  }
})

export const popMenu = (options: PopMenuOptions): void => {
  options = Object.assign({ submenuDepth: 0 }, options)
  const { target, position, submenuDepth } = options
  if (lastPopped && !document.body.contains(lastPopped?.menu)) {
    lastPopped = undefined
  }
  if (poppedMenus.length && !document.body.contains(poppedMenus[0].menu)) {
    poppedMenus.splice(0)
  }
  if (submenuDepth === 0 && lastPopped?.target === target) return
  const popped = removeLastMenu(submenuDepth)
  if (lastPopped?.target === target) return
  if (popped && popped.target === target) {
    removeLastMenu()
    return
  }

  const content = menu(options)
  const float = popFloat({
    content,
    target,
    position,
  })
  float.remainOnScroll = 'remove'
  poppedMenus.push({
    target,
    menu: float,
  })
}
