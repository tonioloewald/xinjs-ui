/*!
# menu

Being able to pop a menu up anywhere is just so nice, and `xinjs-ui` allows menus
to be generated on-the-fly, and even supports hierarchical menus.

```js
const { popMenu } = xinjsui
const { elements } = xinjs

let number = 1

preview.addEventListener('click', (event) => {
  if (!event.target.closest('button')) {
    return
  }
  popMenu({
    target: event.target,
    fillWidthThreshold: 400,
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
        caption: 'Testing…',
        menuItems: [
          {
            caption: 'one',
            action () {
              number = 1
            },
            checked() {
              return number === 1
            }
          },
          {
            caption: 'two',
            action () {
              number = 2
            },
            checked() {
              return number === 2
            }
          },
          {
            caption: 'three',
            action () {
              number = 3
            },
            checked() {
              return number === 3
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

`popMenu` will spawn a menu on a `target` element. A menu is just a `MenuItem[]`.

The full set of options this function takes:

```
interface PopMenuOptions {
  target: HTMLElement
  menuItems: MenuItem[]
  width?: string | number
  fillWidthThreshold?: number
  position?: FloatPosition
}
```

- `target` is the element which will appear to display the menu.
- `menuItems` are of course the items in the menu.
- `width` will set the width of the menu (by default it will try to match the target's width)
- `fillWidthThreshold` will cause the menu to fill the available horizontal space below a certain
  threshold (useful for mobile devices such as phones).
- `position` is a `FloatPosition` (see the `pop-float.ts` documentation).

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
  enabled?: () => boolean
  checked?: () => boolean
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
import { FloatPosition } from './pop-float';
export type ActionCallback = () => void | Promise<void>;
export interface MenuAction {
    caption: string;
    shortcut?: string;
    enabled?: () => boolean;
    checked?: () => boolean;
    action: ActionCallback | string;
    icon?: string | Element;
}
export interface SubMenu {
    caption: string;
    enabled?: () => boolean;
    menuItems: MenuItem[];
    icon?: string | Element;
}
export type MenuSeparator = null;
export type MenuItem = MenuAction | SubMenu | MenuSeparator;
export declare const createMenuAction: (item: MenuAction) => HTMLElement;
export declare const createSubMenu: (item: SubMenu, options: PopMenuOptions) => HTMLElement;
export declare const createMenuItem: (item: MenuItem, options: PopMenuOptions) => HTMLElement;
export declare const menu: (options: PopMenuOptions) => HTMLDivElement;
export interface PopMenuOptions {
    target: HTMLElement;
    menuItems: MenuItem[];
    width?: string | number;
    fillWidthThreshold?: number;
    position?: FloatPosition;
    submenuDepth?: number;
    submenuOffset?: {
        x: number;
        y: number;
    };
}
export declare const popMenu: (options: PopMenuOptions) => void;
