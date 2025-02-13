/*!
# ab-test

`<xin-ab>` provides a simple method for implementing A|B-testing.

```js
const { AbTest } = xinjsui

function randomize() {
  const conditions = {
    testA: Math.random() < 0.5,
    testB: Math.random() < 0.5,
    testC: Math.random() < 0.5
  }

  AbTest.conditions = conditions

  preview.querySelector('pre').innerText = JSON.stringify(conditions, null, 2)
}

preview.querySelector('.randomize-conditions').addEventListener('click', randomize)

randomize()
```
```html
<xin-ab class="a" condition="testA">
  <p>testA</p>
</xin-ab>
<xin-ab class="not-a" not condition="testA">
  <p>not testA</p>
</xin-ab>
<xin-ab class="b" condition="testB">
  <p>testB</p>
</xin-ab>
<xin-ab class="not-b" not condition="testB">
  <p>not testB</p>
</xin-ab>
<xin-ab class="c" condition="testC">
  <p>testC</p>
</xin-ab>
<xin-ab class="not-c" not condition="testC">
  <p>not testC</p>
</xin-ab>
<pre>
</pre>
<button class="randomize-conditions">Randomize</button>
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

.preview xin-ab[not] p {
  background: red;
}
```

- Set `AbTest.conditions` to anything you like.
- Use `<xin-ab>` elements to display conditional content.
- `condition` attribute determines which value in `AbTest.conditions` controls the element
- `not` reverses the condition (so `<xin-ab not condition="foo">` will be visible if `conditions.foo` is `false`)
*/

import { Component, xinProxy } from 'xinjs'

const { abTestConditions } = xinProxy({
  abTestConditions: {} as { [key: string]: any },
})

export class AbTest extends Component {
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
