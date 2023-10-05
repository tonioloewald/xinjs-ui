/*!
# forms

`<xin-form>` and `<xin-field>` can be used to quickly create forms complete with
validation.

```html
<xin-form>
  <h3 slot="header">Example Form</h3>
  <xin-field caption="String" key="string"></xin-field>
  <xin-field caption="Number" key="number" type="number"></xin-field>
  <xin-field caption="Range" key="range" type="range"></xin-field>
  <span slot="footer">Bottom of Form</span>
</xin-form>
```
```css
.preview ::part(content) {
  display: flex;
  flex-direction: column;
  padding: var(--spacing);
  gap: var(--spacing);
}

.preview label {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
```
*/

import { Component as XinComponent, ElementCreator, elements } from 'xinjs'

const { form, xinSlot, label, input } = elements

export class XinField extends XinComponent {
  caption = ''
  key = ''
  type = ''

  content = label(
    xinSlot({ part: 'caption', name: 'caption' }),
    input({ part: 'input' })
  )

  constructor() {
    super()
    this.initAttributes('caption', 'key', 'type')
  }

  handleChange = () => {
    const { input } = this.parts as {
      input: HTMLInputElement
      caption: HTMLElement
    }
    const form = this.closest('xin-form') as XinForm
    if (form && this.key !== '') {
      form.value[this.key] = input.value
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
      caption.append(this.caption)
    }
    if (this.type !== '') {
      input.type = this.type
    }
  }
}

export class XinForm extends XinComponent {
  context = {} as { [key: string]: any }
  value = {} as { [key: string]: any }

  content = form(
    xinSlot({ part: 'head', name: 'head' }),
    xinSlot({ part: 'content' }),
    xinSlot({ part: 'footer', name: 'footer' })
  )
}

export const xinField = XinField.elementCreator({
  tag: 'xin-field',
}) as ElementCreator<XinField>
export const xinForm = XinForm.elementCreator({
  tag: 'xin-form',
}) as ElementCreator<XinForm>
