/*!
# forms

`<xin-form>` and `<xin-field>` can be used to quickly create forms complete with
validation.

```js
const xinForm = preview.querySelector('xin-form')
preview.querySelector('.submit').addEventListener('click', () => {
  xinForm.submit()
})
```
```html
<xin-form>
  <h3 slot="header">Example Form</h3>
  <xin-field caption="Required field" key="required"></xin-field>
  <xin-field caption="Optional field" optional key="optional"></xin-field>
  <xin-field caption="Zip Code" placeholder="12345 or 12345-6789" key="zipcode" pattern="\d{5}(-\d{4})?"></xin-field>
  <xin-field caption="Date" key="date" type="date"></xin-field>
  <xin-field caption="Number" key="number" type="number"></xin-field>
  <xin-field caption="Range" key="range" type="range"></xin-field>
  <xin-field caption="Do you agree?" key="boolean" type="checkbox"></xin-field>
  <div>
    <button type="reset">Reset</button><button class="submit">Submit</button>
  </div>
  <span slot="footer">Bottom of Form</span>
</xin-form>
```
```css
.preview xin-form {
  height: 100%;
}

.preview ::part(header), .preview ::part(footer) {
  background: var(--brand-color);
  --text-color: var(--brand-text-color);
  padding: calc(var(--spacing) * 0.5) var(--spacing);
}

.preview h3, .preview h4 {
  margin: 0;
  padding: 0;
}

.preview ::part(content) {
  padding: var(--spacing);
  gap: var(--spacing);
  background: #e8e8e8;
}

.preview label {
  display: flex;
  gap: var(--spacing);
}

.preview label [part="caption"] {
  flex: 0 0 150px;
  text-align: right;
}

.preview input:invalid {
  box-shadow: inset 0 0 2px red;
}

.preview label:has(input:invalid:required)::after {
  content: 'this field is required'
}
```
*/

import { Component as XinComponent, ElementCreator, elements } from 'xinjs'

const { form, slot, xinSlot, label, input } = elements

function attr(element: HTMLElement, name: string, value: any): void {
  if (value === true) {
    element.setAttribute(name, '')
  } else if (value !== '' && value !== false) {
    element.setAttribute(name, value)
  } else {
    element.removeAttribute(name)
  }
}

export class XinField extends XinComponent {
  caption = ''
  key = ''
  type: '' | 'checkbox' | 'number' | 'range' | 'date' = ''
  optional = false
  pattern = ''
  placeholder = ''

  content = label(
    xinSlot({ part: 'caption', name: 'caption' }),
    input({ part: 'input' })
  )

  constructor() {
    super()
    this.initAttributes(
      'caption',
      'key',
      'type',
      'optional',
      'pattern',
      'placeholder'
    )
  }

  handleChange = () => {
    const { input } = this.parts as {
      input: HTMLInputElement
      caption: HTMLElement
    }
    const form = this.closest('xin-form') as XinForm
    if (form && this.key !== '') {
      switch (this.type) {
        case 'checkbox':
          form.value[this.key] = input.checked
          break
        case 'number':
        case 'range':
          form.value[this.key] = Number(input.value)
          break
        default:
          form.value[this.key] = input.value
      }
    }
  }

  connectedCallback(): void {
    super.connectedCallback()
    const { input } = this.parts as {
      input: HTMLInputElement
      caption: HTMLElement
    }
    input.addEventListener('change', this.handleChange)
  }

  render() {
    const { input, caption } = this.parts as {
      input: HTMLInputElement
      caption: HTMLElement
    }
    if (caption.children.length === 0) {
      caption.append(this.caption !== '' ? this.caption : this.key)
    }
    attr(input, 'placeholder', this.placeholder)
    attr(input, 'type', this.type)
    attr(input, 'pattern', this.pattern)
    attr(input, 'required', !this.optional)
  }
}

export class XinForm extends XinComponent {
  context = {} as { [key: string]: any }
  value = {} as { [key: string]: any }

  styleNode = XinComponent.StyleNode({
    ':host': {
      display: 'flex',
      flexDirection: 'column',
    },
    ':host::part(header), :host::part(footer)': {
      display: 'flex',
    },
    ':host::part(content)': {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden auto',
      height: '100%',
      width: '100%',
      position: 'relative',
      boxSizing: 'border-box',
    },
    ':host form': {
      display: 'block',
      flex: '1 1 auto',
      position: 'relative',
      overflow: 'hidden',
    },
  })

  content = [
    slot({ part: 'header', name: 'header' }),
    form({ part: 'form' }, slot({ part: 'content' })),
    slot({ part: 'footer', name: 'footer' }),
  ]

  submit() {
    this.parts.form.dispatchEvent(new Event('submit'))
  }

  handleSubmit = (event: SubmitEvent) => {
    const widgets = (
      [...this.querySelectorAll('*')] as HTMLInputElement[]
    ).filter((widget) => widget.required !== undefined)
    const invalid = widgets.find((widget) => !widget.reportValidity())
    event.preventDefault()
    event.stopPropagation()
    this.onSubmit(this.value, invalid !== undefined)
  }

  onSubmit = (value: { [key: string]: any }, isValid: boolean): void => {
    console.log('override onSubmit to handle this data', { value, isValid })
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.parts.form.addEventListener('submit', this.handleSubmit)
  }
}

export const xinField = XinField.elementCreator({
  tag: 'xin-field',
}) as ElementCreator<XinField>
export const xinForm = XinForm.elementCreator({
  tag: 'xin-form',
}) as ElementCreator<XinForm>
