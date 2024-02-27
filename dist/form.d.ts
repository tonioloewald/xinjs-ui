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
  <xin-field key="text" type="text" placeholder="type it in here">Tell us a long story</xin-field>
  <xin-field caption="Zip Code" placeholder="12345 or 12345-6789" key="zipcode" pattern="\d{5}(-\d{4})?"></xin-field>
  <xin-field caption="Date" key="date" type="date"></xin-field>
  <xin-field caption="Number" key="number" type="number"></xin-field>
  <xin-field caption="Range" key="range" type="range" min="0" max="10"></xin-field>
  <xin-field key="boolean" type="checkbox">😃 <b>Agreed?!</b></xin-field>
  <xin-field key="select">
    Custom Field
    <select slot="input">
      <option>This</option>
      <option>That</option>
      <option>The Other</option>
    </select>
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
form contents (generating feedback if desired) and calls its `onSubmit(value: {[key: string]: any}, isValid: boolean): void`
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
- `type` determines the data-type: '' | 'checkbox' | 'number' | 'range' | 'date' | 'text'
- `optional` turns off the `required` attribute (fields are required by default)
- `pattern` is an (optional) regex pattern
- `placeholder` is an (optional) placeholder

The `text` type actually populates the `input` slot with a `<textarea>` element.
*/
import { Component as XinComponent } from 'xinjs';
export declare class XinField extends XinComponent {
    caption: string;
    key: string;
    type: '' | 'checkbox' | 'number' | 'range' | 'date' | 'text';
    optional: boolean;
    pattern: string;
    placeholder: string;
    min: string;
    max: string;
    step: string;
    content: any;
    constructor();
    handleChange: () => void;
    connectedCallback(): void;
    render(): void;
}
export declare class XinForm extends XinComponent {
    context: {
        [key: string]: any;
    };
    value: {
        [key: string]: any;
    };
    get isValid(): boolean;
    static styleSpec: {
        ':host': {
            display: string;
            flexDirection: string;
        };
        ':host::part(header), :host::part(footer)': {
            display: string;
        };
        ':host::part(content)': {
            display: string;
            flexDirection: string;
            overflow: string;
            height: string;
            width: string;
            position: string;
            boxSizing: string;
        };
        ':host form': {
            display: string;
            flex: string;
            position: string;
            overflow: string;
        };
    };
    content: any[];
    submit(): void;
    handleSubmit: (event: SubmitEvent) => void;
    onSubmit: (value: {
        [key: string]: any;
    }, isValid: boolean) => void;
    connectedCallback(): void;
}
export declare const xinField: ElementCreator<XinField>;
export declare const xinForm: ElementCreator<XinForm>;