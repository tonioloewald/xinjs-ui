/*!
# segmented select

This is a fairly general-purpose segmented select control.

```html
<blockquote>
Check the console to see the values being set.
</blockquote>

<div class="grid">
<xin-segmented value="yes" choices="yes, no, don't care">
  Should we?
</xin-segmented>

<xin-segmented title="do you like?" choices="yes=Yes:thumbsUp, no=No:thumbsDown"></xin-segmented>

<xin-segmented
  style="--segmented-direction: column; --segmented-align-items: stretch" 
  choices="in a relationship, single" other="it's complicated…" 
  placeholder="oooh… please elaborate"
  value="separated"
>
  Relationship Status
</xin-segmented>

<xin-segmented 
  multiple 
  style="--segmented-direction: column; --segmented-align-items: start; --segmented-option-grid-columns: 24px 24px 100px" 
  choices="star=Star:star, game=Game:game, bug=Bug:bug, camera=Camera:camera"
  value="star,bug"
>
  Pick all that apply
</xin-segmented>
</div>
```
```css
.preview .grid {
  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
```
```js
function logEvent(event) {
  const { target } = event
  if (target.tagName === 'XIN-SEGMENTED') {
    console.log((target.textContent || target.title).trim(), target.value)
  }
}
preview.addEventListener('change', logEvent, true)
```

## Properties

- `values` is an array of values (only really useful if `multiple` is set to true)

You can set `choices` programmatically to an array of `Choice` objects:

    interface Choice {
      icon?: string | SVGElement
      value: string
      caption: string
    }

## Attributes

- `choices` is a string of comma-delimited options of the form `value=caption:icon`, 
  where caption and icon are optional
- `multiple` allows multiple selection
- `name` allows you to set the name of the `<input>` elements to a specific value, it will default 
  to the component's `instanceId`
- `other` (default '', meaning other is not allowed) is the caption for other options, allowing 
  the user to input their choice. It will be reset to '' if `multiple` is set.
- `placeholder` is the placeholder displayed in the `<input>` field for **other** responses

## Styling

The following CSS variables can be used to control customize the `<xin-segmented>` component.

    --segmented-align-items
    --segmented-direction
    --segmented-option-color
    --segmented-option-current-background
    --segmented-option-current-color
    --segmented-option-font-size
    --segmented-option-gap
    --segmented-option-grid-columns
    --segmented-option-icon-color
    --segmented-option-padding
    --segmented-options-background
    --segmented-options-border-radius
    --segmented-placeholder-opacity
*/

import {
  Component as WebComponent,
  ElementCreator,
  elements,
  varDefault,
} from 'xinjs'
import { icons } from './icons'

const { div, slot, label, span, input } = elements

const OTHER = '_OTHER_'

interface Choice {
  icon?: string | SVGElement
  value: string
  caption: string
}

interface SegmentParts {
  [key: string]: HTMLElement
  custom: HTMLInputElement
}

class XinSegmented extends WebComponent {
  choices: string | Choice[] = ''
  other: string = ''
  multiple = false
  name = ''
  placeholder = 'Please specify…'

  value = ''

  get values(): string[] {
    return this.value
      .split(',')
      .map((v) => v.trim())
      .filter((v) => v !== '')
  }

  content = () => [
    slot(),
    div({ part: 'options' }, input({ part: 'custom', hidden: true })),
  ]

  static styleSpec = {
    ':host': {
      display: 'inline-flex',
      gap: varDefault.segmentedOptionGap('8px'),
    },
    ':host, :host::part(options)': {
      flexDirection: varDefault.segmentedDirection('row'),
      alignItems: varDefault.segmentedAlignItems('center'),
    },
    ':host label': {
      display: 'inline-grid',
      alignItems: 'center',
      gap: varDefault.segmentedOptionGap('8px'),
      gridTemplateColumns:
        varDefault.segmentedOptionGridColumns('0px 24px 1fr'),
      padding: varDefault.segmentedOptionPadding('4px 12px'),
      fontSize: varDefault.segmentedOptionFontSize('16px'),
    },
    ':host label:has(:checked)': {
      color: varDefault.segmentedOptionCurrentColor('#eee'),
      background: varDefault.segmentedOptionCurrentBackground('#44a'),
    },
    ':host svg': {
      fill: varDefault.segmentedOptionIconColor('currentColor'),
    },
    ':host label.no-icon': {
      gap: 0,
      gridTemplateColumns: varDefault.segmentedOptionGridColumns('0px 1fr'),
    },
    ':host::part(options)': {
      display: 'flex',
      borderRadius: varDefault.segmentedOptionsBorderRadius('8px'),
      background: varDefault.segmentedOptionsBackground('#fff'),
      color: varDefault.segmentedOptionColor('#222'),
      overflow: 'hidden',
    },
    ':host::part(custom)': {
      padding: varDefault.segmentedOptionPadding('4px 12px'),
      fontSize: varDefault.segmentedOptionFontSize('16px'),
      color: varDefault.segmentedOptionCurrentColor('#eee'),
      background: varDefault.segmentedOptionCurrentBackground('#44a'),
      border: '0',
      outline: 'none',
    },
    ':host::part(custom)::placeholder': {
      color: varDefault.segmentedOptionCurrentColor('#eee'),
      opacity: varDefault.segmentedPlaceholderOpacity(0.75),
    },
  }

  constructor() {
    super()

    this.initAttributes(
      'direction',
      'choices',
      'other',
      'multiple',
      'name',
      'placeholder'
    )
  }

  handleChange = (event: Event) => {
    const { target } = event

    if (target instanceof HTMLInputElement) {
      if (this.multiple) {
        const values = new Set(this.values)
        if (target.checked) {
          values.add(target.value)
        } else {
          values.delete(target.value)
        }
        this.value = [...values].join(',')
      } else {
        if ((target.type !== 'radio' && !target.disabled) || target.checked) {
          this.value = target.value
        }
      }
    }
  }

  handleKey = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'Space':
        ;(event.target as HTMLLabelElement).click()
        break
    }
  }

  private _customBlurred = false
  preventRefocus = () => {
    this._customBlurred = true
  }

  connectedCallback(): void {
    super.connectedCallback()
    const { custom, options } = this.parts

    if (this.name === '') {
      this.name = this.instanceId
    }

    options.addEventListener('change', this.handleChange)
    options.addEventListener('keydown', this.handleKey)
    custom.addEventListener('blur', this.preventRefocus)

    if (this.other && this.multiple) {
      console.warn(
        this,
        'is set to [other] and [multiple]; [other] will be ignored'
      )
      this.other = ''
    }
  }

  private get _choices(): Choice[] {
    const options: Choice[] = Array.isArray(this.choices)
      ? this.choices
      : this.choices
          .split(',')
          .filter((c) => c.trim() !== '')
          .map((c) => {
            const [value, remains] = c.split('=').map((v) => v.trim())
            const [caption, iconName] = (remains || value)
              .split(':')
              .map((v) => v.trim())

            const icon = iconName ? icons[iconName]() : ''
            const choice = { value, icon, caption }
            return choice
          })

    if (this.other && !this.multiple) {
      const [caption, icon] = this.other.split(':')
      options.push({
        value: OTHER,
        caption,
        icon,
      })
    }

    return options
  }

  get isOtherValue(): boolean {
    return Boolean(
      this.value === OTHER ||
        (this.value &&
          !this._choices.find((choice) => choice.value === this.value))
    )
  }

  render() {
    super.render()

    console.log('rendering')

    const { options, custom } = this.parts as SegmentParts
    options.textContent = ''
    const type = this.multiple ? 'checkbox' : 'radio'
    const { values, isOtherValue } = this
    options.append(
      ...this._choices.map((choice) => {
        return label(
          { tabindex: 0 },
          input({
            type,
            name: this.name,
            value: choice.value,
            checked:
              values.includes(choice.value) ||
              (choice.value === OTHER && isOtherValue),
            tabIndex: -1,
          }),
          choice.icon || { class: 'no-icon' },
          span(choice.caption)
        )
      })
    )
    if (this.other && !this.multiple && isOtherValue) {
      if (this.value !== OTHER && custom.value !== this.value) {
        custom.value = this.value
      } else if (this.value === OTHER && custom.value) {
        this.value = custom.value
      }
      custom.hidden = false
      custom.placeholder = this.placeholder
      options.append(custom)
      if (!this._customBlurred) {
        custom.focus()
      }
      this._customBlurred = false
    }
  }
}

export const xinSegmented = XinSegmented.elementCreator({
  tag: 'xin-segmented',
}) as ElementCreator<XinSegmented>
