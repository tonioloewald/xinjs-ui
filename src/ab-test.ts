/*!
# ab-test

`<xin-ab>` provides a simple method for implementing ab-testing.

1. Set `AbTest.conditions` to anything you like.
2. Use `<xin-ab>` elements to display conditional content.

If the value referenced by `condition` is `false` then the content
of `<xin-ab>` will be hidden (this is reversed if `not` is set).

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
  <p>Visible if conditions.testA !== false</p>
</xin-ab>
<xin-ab condition="testB">
  <p>Visible if conditions.testB !== false</p>
</xin-ab>
<xin-ab not condition="testB">
  <p>Visible if conditions.testB === false</p>
</xin-ab>
<xin-ab condition="testC">
  <p>Visible if conditions.testC !== false (50/50 chance)</p>
</xin-ab>
```
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
        ? abTestConditions[this.condition] !== false
        : abTestConditions[this.condition] === false)
    ) {
      if (!this.hasAttribute('hidden')) {
        this.setAttribute('hidden', '')
      }
    } else if (this.hasAttribute('hidden')) {
      this.removeAttribute('hidden')
    }
  }
}

export const abTest = AbTest.elementCreator({ tag: 'xin-ab' })
