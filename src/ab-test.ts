/*!
# ab-test

`<xin-ab>` provides a simple method for implementing A|B-testing.

```js
const { AbTest } = xinjsui

AbTest.conditions = {
  testA: true,
  testB: false,
  testC: Math.random() < 0.5
}
```
```html
<xin-ab condition="testA">
  <p>Visible if conditions.testA === true</p>
</xin-ab>
<xin-ab condition="testB">
  <p>Visible if conditions.testB === true</p>
</xin-ab>
<xin-ab not condition="testB">
  <p>Visible if conditions.testB !== true</p>
</xin-ab>
<xin-ab condition="testC">
  <p>Visible if conditions.testC === true (50/50 chance)</p>
</xin-ab>
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
        ? abTestConditions[this.condition] === true
        : abTestConditions[this.condition] !== true)
    ) {
      this.toggleAttribute('hidden', true)
    } else {
      this.toggleAttribute('hidden', false)
    }
  }
}

export const abTest = AbTest.elementCreator({ tag: 'xin-ab' })
