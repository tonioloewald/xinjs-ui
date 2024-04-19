/*!
# ab-test

`<xin-ab>` provides a simple method for implementing A|B-testing.

```js
const { AbTest } = xinjsui

const conditions = {
  testA: true,
  testB: false,
  testC: Math.random() < 0.5
}

AbTest.conditions = conditions

preview.querySelector('pre').innerText = JSON.stringify(conditions, null, 2)
```
```html
<xin-ab condition="testA">
  <p>testA is true</p>
</xin-ab>
<xin-ab not condition="testA">
  <p>not testA</p>
</xin-ab>
<xin-ab condition="testB">
  <p>testB is true</p>
</xin-ab>
<xin-ab not condition="testB">
  <p>not testB</p>
</xin-ab>
<xin-ab condition="testC">
  <p>testC is true</p>
</xin-ab>
<h3>Conditions</h3>
<pre>
</pre>
```
```css
.preview {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
}
.preview p {
  background: #44c;
  color: white;
  display: block;
  border-radius: 99px;
  padding: 4px 10px;
  margin: 0;
}
```

1. Set `AbTest.conditions` to anything you like.
2. Use `<xin-ab>` elements to display conditional content.

If the value referenced by `condition` is `false` then the content
of `<xin-ab>` will be hidden (this is reversed if `not` is set).
*/

import { Component as XinComponent, xinProxy } from 'xinjs'

const { abTestConditions } = xinProxy({
  abTestConditions: {} as { [key: string]: any },
})

export class AbTest extends XinComponent {
  static set conditions(context: { [key: string]: any }) {
    Object.assign(abTestConditions, context)

    for (const abTest of [...AbTest.instances]) {
      abTest.queueRender()
    }
  }

  condition = ''

  not = false

  static instances: Set<AbTest> = new Set()

  constructor() {
    super()
    this.initAttributes('condition', 'not')
  }

  connectedCallback() {
    super.connectedCallback()
    AbTest.instances.add(this)
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    AbTest.instances.delete(this)
  }

  render(): void {
    if (
      this.condition !== '' &&
      (this.not
        ? abTestConditions[this.condition] !== true
        : abTestConditions[this.condition] === true)
    ) {
      this.toggleAttribute('hidden', false)
    } else {
      this.toggleAttribute('hidden', true)
    }
  }
}

export const abTest = AbTest.elementCreator({ tag: 'xin-ab' })
