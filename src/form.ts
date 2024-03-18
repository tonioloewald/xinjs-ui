/*!
# forms

`<xin-form>` and `<xin-field>` can be used to quickly create forms complete with
[client-side validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#built-in_form_validation_examples).

```js
const form = preview.querySelector('xin-form')
preview.querySelector('.submit').addEventListener('click', form.submit)
```
```html
<xin-form value='{"formInitializer": "initial value of the form"}'>
  <h3 slot="header">Example Form Header</h3>
  <xin-field caption="Required field" key="required"></xin-field>
  <xin-field optional key="optional"><i>Optional</i> Field</xin-field>
  <xin-field key="text" type="text" placeholder="type it in here">Tell us a long story</xin-field>
  <xin-field caption="Zip Code" placeholder="12345 or 12345-6789" key="zipcode" pattern="\d{5}(-\d{4})?"></xin-field>
  <xin-field caption="Date" key="date" type="date"></xin-field>
  <xin-field caption="Number" key="number" type="number"></xin-field>
  <xin-field caption="Range" key="range" type="range" min="0" max="10"></xin-field>
  <xin-field key="boolean" type="checkbox">😃 <b>Agreed?!</b></xin-field>
  <xin-field type="color" value="pink">
    favorite color
  </xin-field>
  <xin-field key="select">
    Custom Field
    <select slot="input">
      <option>This</option>
      <option>That</option>
      <option>The Other</option>
    </select>
  </xin-field>
  <xin-field key="rating">
    Rate this form!
    <xin-rating slot="input"></xin-rating>
  </xin-field>
  <xin-field key="like">
    Do you like it?
    <xin-segmented 
      choices="yes=Yes:thumbsUp,no=No:thumbsDown" 
      slot="input"
    ></xin-segmented>
  </xin-field>
  <xin-field key="relationship">
    Relationship Status
    <xin-segmented
      style="--segmented-direction: column; --segmented-align-items: stretch"
      choices="couple=In a relationship,single=Single"
      other="It's complicated…"
      slot="input"
    ></xin-segmented>
  </xin-field>
  <xin-field key="amount" fixed-precision="2" type="number" prefix="$" suffix="(USD)">
    What's it worth?
  </xin-field>
  <xin-field key="valueInitializer" value="initial value of the field">
    Initialized by field
  </xin-field>
  <xin-field key="formInitializer">
    Initialized by form
  </xin-field>
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

.preview :invalid {
  box-shadow: inset 0 0 2px red;
}

.preview label:has(:invalid:required)::after {
  content: '* required'
}
```

## `<xin-form>`

`<xin-form>` prevents the default form behavior when a `submit` event is triggered and instead validates the
form contents (generating feedback if desired) and calls its `submitCallback(value: {[key: string]: any}, isValid: boolean): void`
method.

`<xin-form>` instances have `value` and `isValid` properties you can access any time. Note that `isValid` is computed
and triggers form validation.

`<xin-form>` has `header` and `footer` `<slot>`s in addition to default `<slot>`, which is tucked inside a `<form>` element.

## `<xin-field>`

`<xin-field>` is a simple web-component with no shadowDOM that combines an `<input>` field wrapped with a `<label>`. Any
content of the custom-element will become the `caption` or you can simply set the `caption` attribute.

You can replace the default `<input>` field by adding an element to the slot `input` (it's a `xinSlot`) whereupon
the `value` of that element will be used instead of the built-in `<input>`. (The `<input>` is retained and
is used to drive form-validation.)

`<xin-field>` supports the following attributes:

- `caption` labels the field
- `key` determines the form property the field will populate
- `type` determines the data-type: '' | 'checkbox' | 'number' | 'range' | 'date' | 'text' | 'color'
- `optional` turns off the `required` attribute (fields are required by default)
- `pattern` is an (optional) regex pattern
- `placeholder` is an (optional) placeholder

The `text` type actually populates the `input` slot with a `<textarea>` element.

<xin-css-var-editor element-selector="xin-field" target-selector=".preview"></xin-css-var-editor>
*/

import {
  Component as XinComponent,
  ElementCreator,
  elements,
  varDefault,
} from 'xinjs'

import { colorInput } from './color-input'

const { form, slot, xinSlot, label, input, span } = elements

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
  type: '' | 'checkbox' | 'number' | 'range' | 'date' | 'text' | 'color' = ''
  optional = false
  pattern = ''
  placeholder = ''
  min = ''
  max = ''
  step = ''
  fixedPrecision = -1
  value: any = null

  content = label(
    xinSlot({ part: 'caption' }),
    span(
      { part: 'field' },
      input({ part: 'valueHolder' }),
      xinSlot({ part: 'input', name: 'input' })
    )
  )

  constructor() {
    super()
    this.initAttributes(
      'caption',
      'key',
      'type',
      'optional',
      'pattern',
      'placeholder',
      'min',
      'max',
      'step',
      'fixedPrecision',
      'prefix',
      'suffix'
    )
  }

  handleChange = () => {
    const { input, valueHolder } = this.parts as {
      input: HTMLElement
      valueHolder: HTMLInputElement
    }
    const inputElement = (input.children[0] || valueHolder) as HTMLInputElement
    if (inputElement !== valueHolder) {
      valueHolder.value = inputElement.value
    }
    const form = this.closest('xin-form') as XinForm
    if (form && this.key !== '') {
      switch (this.type) {
        case 'checkbox':
          form.fields[this.key] = inputElement.checked
          break
        case 'number':
        case 'range':
          if (this.fixedPrecision > -1) {
            inputElement.value = Number(inputElement.value).toFixed(
              this.fixedPrecision
            )
            form.fields[this.key] = Number(inputElement.value)
          } else {
            form.fields[this.key] = Number(inputElement.value)
          }
          break
        default:
          form.fields[this.key] = inputElement.value
      }
    }
  }

  initialize(form: XinForm) {
    const { valueHolder } = this.parts as {
      valueHolder: HTMLInputElement
    }
    const initialValue =
      form.fields[this.key] !== undefined ? form.fields[this.key] : this.value

    if (initialValue != null && initialValue !== '') {
      if (form.fields[this.key] == null) form.fields[this.key] = initialValue
      valueHolder.value = initialValue
    }
  }

  connectedCallback(): void {
    super.connectedCallback()
    const { input, valueHolder } = this.parts as {
      input: HTMLElement
      valueHolder: HTMLInputElement
    }

    const form = this.closest(XinForm.tagName!)
    if (form instanceof XinForm) {
      this.initialize(form)
    }

    valueHolder.addEventListener('change', this.handleChange)
    input.addEventListener('change', this.handleChange, true)
  }

  render() {
    const { input, caption, valueHolder, field } = this.parts as {
      input: HTMLElement
      field: HTMLElement
      caption: HTMLElement
      valueHolder: HTMLInputElement
    }
    if (caption.textContent?.trim() === '') {
      caption.append(this.caption !== '' ? this.caption : this.key)
    }
    if (this.type === 'text') {
      input.textContent = ''
      input.append(
        elements.textarea({
          placeholder: this.placeholder || false,
          value: this.value,
        })
      )
    } else if (this.type === 'color') {
      input.textContent = ''
      input.append(colorInput({ value: this.value }))
    } else if (input.children.length === 0) {
      attr(valueHolder, 'placeholder', this.placeholder)
      attr(valueHolder, 'type', this.type)
      attr(valueHolder, 'pattern', this.pattern)
      attr(valueHolder, 'min', this.min)
      attr(valueHolder, 'max', this.max)
      attr(valueHolder, 'step', this.step)
    }

    this.prefix
      ? field.setAttribute('prefix', this.prefix)
      : field.removeAttribute('prefix')
    this.suffix
      ? field.setAttribute('suffix', this.suffix)
      : field.removeAttribute('suffix')

    valueHolder.classList.toggle('hidden', input.children.length > 0)
    if (input.children.length > 0) {
      valueHolder.setAttribute('tabindex', '-1')
    } else {
      valueHolder.removeAttribute('tabindex')
    }
    input.style.display = input.children.length === 0 ? 'none' : ''
    attr(valueHolder, 'required', !this.optional)
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

  get fields(): any {
    if (typeof this.value === 'string') {
      try {
        console.log(this.value)
        this.value = JSON.parse(this.value)
      } catch (e) {
        console.log('<xin-form> could not use its value, expects valid JSON')
        this.value = {}
      }
    }
    const form = this
    return new Proxy(this.value, {
      get(target, prop: string): any {
        return target[prop]
      },

      set(target, prop: string, newValue: any): boolean {
        if (target[prop] !== newValue) {
          target[prop] = newValue
          form.dispatchEvent(new Event('true'))
        }
        return true
      }
    })
  }

  submit = () => {
    this.parts.form.dispatchEvent(new Event('submit'))
  }

  handleSubmit = (event: SubmitEvent) => {
    event.preventDefault()
    event.stopPropagation()
    this.submitCallback(this.value, this.isValid)
  }

  submitCallback = (value: { [key: string]: any }, isValid: boolean): void => {
    console.log('override submitCallback to handle this data', { value, isValid })
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.parts.form.addEventListener('submit', this.handleSubmit)
  }
}

export const xinField = XinField.elementCreator({
  tag: 'xin-field',
  styleSpec: {
    ':host [part="field"]': {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: varDefault.prefixSuffixGap('8px'),
    },
    ':host [part="field"][prefix]::before': {
      content: 'attr(prefix)',
    },
    ':host [part="field"][suffix]::after': {
      content: 'attr(suffix)',
    },
    ':host [part="field"] > *, :host [part="input"] > *': {
      width: '100%',
    },
    ':host textarea': {
      resize: 'none',
    },
    ':host input[type="checkbox"]': {
      width: 'fit-content',
    },
    ':host .hidden': {
      position: 'absolute',
      pointerEvents: 'none',
      opacity: 0,
    },
  },
}) as ElementCreator<XinField>

export const xinForm = XinForm.elementCreator({
  tag: 'xin-form',
}) as ElementCreator<XinForm>
