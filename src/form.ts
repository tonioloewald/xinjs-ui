/*!
# forms

`<xin-form>` and `<xin-field>` can be used to quickly create forms complete with
[client-side validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#built-in_form_validation_examples).

```js
const xinForm = preview.querySelector('xin-form')
preview.querySelector('.submit').addEventListener('click', () => {
  xinForm.submit()
})
```
```html
<xin-form>
  <h3 slot="header">Example Form Header</h3>
  <xin-field caption="Required field" key="required"></xin-field>
  <xin-field optional key="optional"><i>Optional</i> Field</xin-field>
  <xin-field caption="Zip Code" placeholder="12345 or 12345-6789" key="zipcode" pattern="\d{5}(-\d{4})?"></xin-field>
  <xin-field caption="Date" key="date" type="date"></xin-field>
  <xin-field caption="Number" key="number" type="number"></xin-field>
  <xin-field caption="Range" key="range" type="range"></xin-field>
  <xin-field key="boolean" type="checkbox">😃 <b>Agreed?!</b></xin-field>
  <button slot="footer" class="submit">Submit</button>
</xin-form>
```
```css
.preview xin-form {
  height: 100%;
}

.preview ::part(header), .preview ::part(footer) {
  background: #ddd;
  justify-content: center;
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
  display: grid;
  grid-template-columns: 180px auto 100px;
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
  content: '* required'
}
```

## `<xin-form>`

`<xin-form>` prevents the default form behavior when a `submit` event is triggered and instead validates the
form contents (generating feedback if desired) and calls its `onSubmit(value: {[key: string]: any}, isValid: boolean): void`
method.

`<xin-form>` instances have `value` and `isValid` properties you can access any time. Note that `isValid` is computed
and triggers form validation.

`<xin-form>` has `header` and `footer` `<slot>`s in addition to default `<slot>`, which is tucked inside a `<form>` element.

## `<xin-field>`

`<xin-field>` is a simple web-component with no shadowDOM that combines an `<input>` field wrapped with a `<label>`. Any
content of the custom-element will become the `caption` or you can simply set the `caption` attribute.

`<xin-field>` supports the following attributes:

- `caption` labels the field
- `key` determines the form property the field will populate
- `type` determines the data-type: '' | 'checkbox' | 'number' | 'range' | 'date'
- `optional` turns off the `required` attribute (fields are required by default)
- `pattern` is an (optional) regex pattern
- `placeholder` is an (optional) placeholder
*/

import { Component as XinComponent, ElementCreator, elements } from 'xinjs'

const { form, slot, xinSlot, label, input } = elements

function attr(element: HTMLElement, name: string, value: any): void {
  if (value !== '' && value !== false) {
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

  content = label(xinSlot({ part: 'caption' }), input({ part: 'input' }))

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
    if (caption.textContent?.trim() === '') {
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
  get isValid(): boolean {
    const widgets = (
      [...this.querySelectorAll('*')] as HTMLInputElement[]
    ).filter((widget) => widget.required !== undefined)
    return widgets.find((widget) => !widget.reportValidity()) === undefined
  }

  static styleSpec = {
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
  }

  content = [
    slot({ part: 'header', name: 'header' }),
    form({ part: 'form' }, slot({ part: 'content' })),
    slot({ part: 'footer', name: 'footer' }),
  ]

  submit() {
    this.parts.form.dispatchEvent(new Event('submit'))
  }

  handleSubmit = (event: SubmitEvent) => {
    event.preventDefault()
    event.stopPropagation()
    this.onSubmit(this.value, this.isValid)
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
