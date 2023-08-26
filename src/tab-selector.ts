/*!
# `<tab-selector>`

`<tab-selector>` creates a `tabpanel` for its children, creating a `tab` for each based on its
`name` attribute.

```html
<tab-selector>
  <div name="first">first body</div>
  <div name="second">second body</div>
  <div name="third">third body</div>
</tab-selector>
```
```css
  tab-selector {
    height: 100%;
  }
  
  div[name] {
    padding: 20px;
    text-align: center;
    height: 100%;
    font-size: 200%;
  }
```
```js
[...preview.querySelectorAll('div[name]')].forEach(div => {
  div.style.color = `hsl(${(Math.random() * 360).toFixed(0)} 50% 50%)`
})
```

Usage:

`TabSelector` is the class and `tabSelector` is the `ElementCreator`. So the three methods
of creating a `<tab-selector>` are:

1. importing `TabSelector` and inserting the appropriate HTML: `<tab-selector>`.
2. using `new TabSelector()` and appending it to the DOM.
3. using `tabSelector()` and appending it to the DOM. This last is more convenient because
   `ElementCreator` allows composition, convenient assignment of properties and attributes,
   and so forth.
*/

import {
  Component as WebComponent,
  ElementCreator,
  elements,
  vars,
} from 'xinjs'

const { div, slot } = elements

export class TabSelector extends WebComponent {
  value = 0

  styleNode = WebComponent.StyleNode({
    ':host': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: 'none !important',
    },
    slot: {
      position: 'relative',
      display: 'block',
      flex: '1 1 auto',
      overflow: 'hidden',
      overflowY: 'auto',
    },
    'slot[name="after-tabs"]': {
      flex: '0 0 auto',
    },
    '::slotted([hidden])': {
      display: 'none !important',
    },
    ':host .tab-holder': {
      display: 'flex',
      flexDirection: 'column',
    },
    ':host .tab-row': {
      display: 'flex',
    },
    ':host .tabs': {
      display: 'flex',
      userSelect: 'none',
      whiteSpace: 'nowrap',
    },
    ':host .tabs > div': {
      padding: `${vars.spacing50} ${vars.spacing}`,
      cursor: 'default',
    },
    ':host .tabs > [aria-selected="true"]': {
      color: vars.tabSelectorSelectedColor,
    },
    ':host .border': {
      background: 'var(--tab-selector-bar-color, #ccc)',
    },
    ':host .border > .selected': {
      content: ' ',
      width: 0,
      height: 'var(--tab-selector-bar-height, 2px)',
      background: vars.tabSelectorSelectedColor,
      transition: 'ease-out 0.2s',
    },
  })

  content = [
    div(
      { class: 'tab-holder', role: 'tabpanel' },
      div(
        { class: 'tab-row' },
        div({ class: 'tabs', part: 'tabs' }),
        div({ style: { flex: '1 1 auto' } }),
        slot({ name: 'after-tabs' })
      ),
      div({ class: 'border' }, div({ class: 'selected', part: 'selected' }))
    ),
    slot(),
  ]

  constructor() {
    super()
    this.initAttributes('anne', 'example')
  }

  addTabBody(body: HTMLElement, selectTab = false): void {
    if (!body.hasAttribute('name')) {
      console.error('element has no name attribute', body)
      throw new Error('element has no name attribute')
    }
    this.shadowRoot?.append(body)
    this.setupTabs()
    if (selectTab) {
      this.value = this.bodies.length - 1
    }
    this.queueRender()
  }

  keyTab = (event: KeyboardEvent): void => {
    const { tabs } = this.parts
    const tabIndex = [...tabs.children].indexOf(event.target as HTMLElement)
    switch (event.key) {
      case 'ArrowLeft':
        this.value =
          (tabIndex + Number(tabs.children.length) - 1) % tabs.children.length
        ;(tabs.children[this.value] as HTMLElement).focus()
        event.preventDefault()
        break
      case 'ArrowRight':
        this.value = (tabIndex + 1) % tabs.children.length
        ;(tabs.children[this.value] as HTMLElement).focus()
        event.preventDefault()
        break
      case ' ':
        this.pickTab(event)
        event.preventDefault()
        break
      default:
      // console.log(event.key)
    }
  }

  get bodies(): Element[] {
    return [...this.children].filter((elt) => elt.hasAttribute('name'))
  }

  pickTab = (event: Event): void => {
    const { tabs } = this.parts
    const target = event.target as HTMLElement
    const tabIndex = [...tabs.children].indexOf(target)
    if (tabIndex > -1) {
      this.value = tabIndex
    }
  }

  setupTabs = (): void => {
    const { tabs } = this.parts
    const tabBodies = [...this.children] as Element[]

    tabBodies.filter((child) => child.hasAttribute('name'))
    tabs.textContent = ''
    for (const index in tabBodies) {
      const tabBody = tabBodies[index]
      const name = tabBody.getAttribute('name') as string
      const bodyId = `${this.instanceId}-${index}`
      tabBody.id = bodyId
      tabs.append(div(name, { tabindex: 0, role: 'tab', ariaControls: bodyId }))
    }
  }

  connectedCallback(): void {
    super.connectedCallback()
    const { tabs } = this.parts
    tabs.addEventListener('click', this.pickTab)
    tabs.addEventListener('keydown', this.keyTab)
    this.setupTabs()
  }

  render(): void {
    const { tabs, selected } = this.parts
    const tabBodies = this.bodies
    for (let i = 0; i < tabBodies.length; i++) {
      const tabBody = tabBodies[i]
      const tab = tabs.children[i] as HTMLElement
      if (this.value === Number(i)) {
        tab.setAttribute('aria-selected', 'true')
        selected.style.marginLeft = `${tab.offsetLeft - tabs.offsetLeft}px`
        selected.style.width = `${tab.offsetWidth}px`
        tabBody.removeAttribute('hidden')
      } else {
        tab.removeAttribute('aria-selected')
        tabBody.setAttribute('hidden', '')
      }
    }
  }
}

export const tabSelector = TabSelector.elementCreator({
  tag: 'tab-selector',
}) as ElementCreator<TabSelector>
