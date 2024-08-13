/*!
# select

`<xin-select>` (`xinSelect` is the `ElementCreator`) is a replacement for the lamentable
built in `<select>` element that addresses its various shortcomings.

- since `<xin-select>` is powered by `popMenu`, and supports separators and submenus.
- options can have icons.
- `<xin-select>` will retain and display a value even if the matching option is missing.
- its displayed value can be made `editable`, allowing use as a "combo box".
- options can have `async` callbacks that return a value.
- picking an item triggers an `action` event even if the value hasn't changed.
- available options are set via the `options` attribute or the element's `options` property (not `<option>` elements)

```html
<xin-select
  title="simple select"
  options="this,that,,the other"
  value="not an option!"
></xin-select><br>
<xin-select
  title="has captions"
  class="captions"
  value="this"
></xin-select><br>
<xin-select
  title="combo select"
  class="icons"
  editable
  placeholder="pick an icon"
></xin-select>
<pre contenteditable>Select some text in here…
…to check for focus stealing</pre>
```
```js
const { icons } = xinjsui

const captions = preview.querySelector('.captions')

captions.options = [
  {
    caption: 'choose this',
    value: 'this'
  },
  {
    caption: 'choose that',
    value: 'that'
  },
  null,
  {
    caption: 'choose some other',
    options: [
      {
        caption: 'the other',
        value: 'the other'
      },
      {
        caption: 'another',
        value: 'another',
      },
      {
        caption: 'mother',
        value: 'mother'
      },
      null,
      {
        caption: 'anything goes…',
        value: () => prompt('Enter your other', 'other') || undefined
      },
      {
        caption: 'brother… (after 1s delay)',
        value: async () => new Promise(resolve => {
          setTimeout(() => resolve('brother'), 1000)
        })
      }
    ]
  }
]

const iconsSelect = preview.querySelector('.icons')

iconsSelect.options = Object.keys(icons).sort().map(icon =>({
  icon,
  caption: icon,
  value: icon
}))
```

## `options`

    type OptionRequest = () => Promise<string | undefined>

    export interface SelectOption {
      icon?: string | HTMLElement
      caption: string
      value: string | OptionRequest
    }

    export interface SelectOptionSubmenu {
      icon?: string | HTMLElement
      caption: string
      options: SelectOptions
    }

    export type SelectOptions = Array<string | null | SelectOption | SelectOptionSubmenu>

A `<xin-select>` can be assigned `options` as a string of comma-delimited choices,
or be provided a `SelectOptions` array (which allows for submenus, separators, etc.).

## Events

Picking an option triggers an `action` event (whether or not this changes the value).

Changing the value, either by typing in an editable `<xin-select>` or picking a new
value triggers a `change` event.

You can look at the console to see the events triggered by the second example.
*/

import {
  Component as WebComponent,
  ElementCreator,
  elements,
  vars,
} from 'xinjs'
import { icons } from './icons'
import { popMenu, MenuItem } from './menu'

const { button, input } = elements

type OptionRequest = () => Promise<string | undefined>

export interface SelectOption {
  icon?: string | HTMLElement
  caption: string
  value: string | OptionRequest
}

export interface SelectOptionSubmenu {
  icon?: string | HTMLElement
  caption: string
  options: SelectOptions
}

export type SelectOptions = Array<
  string | null | SelectOption | SelectOptionSubmenu
>

const hasValue = (options: SelectOptions, value: string): boolean => {
  return !!options.find((option) => {
    if (option === null || value == null) {
      return false
    } else if (Array.isArray(option)) {
      return hasValue(option, value)
    } else if ((option as SelectOption).value === value || option === value) {
      return true
    }
  })
}

export class XinSelect extends WebComponent {
  editable = false
  options: string | SelectOptions = ''
  value: string = ''
  placeholder: string = ''

  private setValue = (value: string, triggerAction = false) => {
    if (this.value !== value) {
      this.value = value
      this.queueRender(true)
    }
    if (triggerAction) {
      this.dispatchEvent(new Event('action'))
    }
  }

  private getValue = () => this.value

  get selectOptions(): SelectOptions {
    return typeof this.options === 'string'
      ? this.options.split(',').map((option) => option.trim() || null)
      : this.options
  }

  private buildOptionMenuItem = (
    option: string | null | SelectOption | SelectOptionSubmenu
  ): MenuItem => {
    if (option === null) {
      return null
    }
    const { setValue, getValue } = this
    let icon: string | HTMLElement | undefined
    let caption: string
    let value: string | OptionRequest
    if (typeof option === 'string') {
      caption = value = option
    } else {
      ;({ icon, caption, value } = option as SelectOption)
    }

    const { options } = option as SelectOptionSubmenu
    if (options) {
      return {
        icon,
        caption,
        checked: () => hasValue(options, getValue()),
        menuItems: options.map(this.buildOptionMenuItem),
      }
    }
    return {
      icon,
      caption,
      checked: () => getValue() === value,
      action:
        typeof value === 'function'
          ? async () => {
              const newValue = await (value as OptionRequest)()
              if (newValue !== undefined) {
                setValue(newValue, true)
              }
            }
          : () => {
              if (typeof value === 'string') {
                setValue(value, true)
              }
            },
    }
  }

  get optionsMenu(): MenuItem[] {
    return this.selectOptions.map(this.buildOptionMenuItem)
  }

  handleChange = (event: Event) => {
    const { value } = this.parts as { value: HTMLInputElement }
    const newValue = value.value || ''
    if (this.value !== String(newValue)) {
      this.value = newValue
      this.dispatchEvent(new Event('change'))
    }
    event.stopPropagation()
    event.preventDefault()
  }

  handleKey = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  popOptions = () => {
    popMenu({
      target: this,
      menuItems: this.optionsMenu,
    })
  }
  content = () => [
    button(
      {
        onClick: this.popOptions,
      },
      input({
        part: 'value',
        value: this.value,
        tabindex: 0,
        onKeydown: this.handleKey,
        onChange: this.handleChange,
      }),
      icons.chevronDown()
    ),
  ]

  constructor() {
    super()

    this.initAttributes('options', 'editable', 'placeholder')
  }

  render(): void {
    super.render()

    const { value } = this.parts as { value: HTMLInputElement }
    const option = this.selectOptions.find(
      (option: string | null | SelectOption | SelectOptionSubmenu) =>
        typeof option === 'string'
          ? option === this.value
          : (option as SelectOption)?.value === this.value
    )
    value.value =
      option && typeof option === 'object' ? option.caption : this.value
    value.setAttribute('placeholder', this.placeholder)
    value.style.pointerEvents = this.editable ? '' : 'none'
    value.readOnly = !this.editable
  }
}

export const xinSelect = XinSelect.elementCreator({
  tag: 'xin-select',
  styleSpec: {
    ':host': {
      '--gap': '8px',
      '--touch-size': '44px',
      '--padding': '0 4px 0 0',
      '--value-padding': '0 16px',
      '--icon-width': '24px',
      '--fieldWidth': '140px',
      display: 'inline-block',
      position: 'relative',
    },
    ':host button': {
      display: 'grid',
      alignItems: 'center',
      gap: vars.gap,
      textAlign: 'left',
      height: vars.touchSize,
      padding: vars.padding,
      gridTemplateColumns: `auto ${vars.iconWidth}`,
      position: 'relative',
    },
    ':host [part="value"]': {
      width: vars.fieldWidth,
      padding: vars.valuePadding,
      height: vars.touchSize,
      lineHeight: vars.touchSize,
      boxShadow: 'none',
      whiteSpace: 'nowrap',
      outline: 'none',
      background: 'transparent',
    },
    ':host [part="value"]:not(:focus)': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      background: 'transparent',
    },
  },
}) as ElementCreator<XinSelect>
