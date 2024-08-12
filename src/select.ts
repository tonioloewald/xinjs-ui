/*!
# select

`<xin-select>` (`xinSelect` is the `ElementCreator`) is a replacement for the lamentable
built in `<select>` element that addresses its various shortcomings.

- since `<xin-select>` is powered by `popMenu`, it supports separators.
- it will retain and display a value even if the matching option is missing.
- its displayed value can be made `editable` allowing use as a "combo box".
- options can have icons.
- options can have callbacks (e.g. an "Other…" that launches a dialog).
- picking an item triggers an `action` event even if the value hasn't changed.
- available options are set via attribute or the element's `options` property

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
></xin-select><br>
<xin-select
  title="little women"
  options="Meg,Jo,Beth,Amy"
  placeholder="pick a child"
></xin-select>
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
    caption: 'choose the other',
    value: 'other',
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

    export interface SelectOption {
      icon?: string | HTMLElement
      caption: string
      value: string | OptionRequest
    }

    type OptionRequest = () => string

    export type SelectOptions = (string | null | SelectOption)[]

A `<xin-select>` can be assigned `options` as a string of comma-delimited choices,
or be provided with an array of options.

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

type OptionRequest = () => string

export interface SelectOption {
  icon?: string | HTMLElement
  caption: string
  value: string | OptionRequest
}

export type SelectOptions = (string | null | SelectOption)[]

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

  get optionsMenu(): MenuItem[] {
    const { setValue, getValue } = this

    return this.selectOptions.map((option) => {
      if (option === null) {
        return null
      }
      let icon: string | HTMLElement | undefined
      let caption: string
      let value: string | OptionRequest
      if (typeof option === 'string') {
        caption = value = option
      } else {
        ;({ icon, caption, value } = option)
      }
      return {
        icon,
        caption,
        checked: () => getValue() === value,
        action() {
          setValue(typeof value === 'string' ? value : value(), true)
        },
      }
    })
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

  blockIfEditable = (event: Event) => {
    if (this.editable) {
      event.stopPropagation()
    }
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
        class: 'not-visibly-disabled',
        onKeydown: this.handleKey,
        onChange: this.handleChange,
        onMousedown: this.blockIfEditable,
        onMouseup: this.blockIfEditable,
        onClick: this.blockIfEditable,
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
      (option: string | null | SelectOption) =>
        typeof option === 'string'
          ? option === this.value
          : option?.value === this.value
    )
    value.value =
      option && typeof option === 'object' ? option.caption : this.value
    value.setAttribute('placeholder', this.placeholder)
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
