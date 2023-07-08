import { Component as WebComponent, elements, vars } from 'xinjs'

const { div, slot } = elements

class TabSelector extends WebComponent {
  value = 0

  role = 'tabpanel'

  styleNode = WebComponent.StyleNode({
    ':host': {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    },
    slot: {
      position: 'relative',
      display: 'block',
      flex: '1 1 auto',
      overflow: 'hidden',
      overflowY: 'auto',
    },
    '::slotted([hidden])': {
      // @ts-expect-error
      display: 'none !important',
    },
    ':host .tab-holder': {
      display: 'flex',
      flexDirection: 'column',
    },
    ':host .tabs': {
      display: 'flex',
      userSelect: 'none',
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
      { class: 'tab-holder' },
      div({ class: 'tabs', dataRef: 'tabs' }),
      div({ class: 'border' }, div({ class: 'selected', dataRef: 'selected' }))
    ),
    slot(),
  ]

  constructor() {
    super()
    this.initAttributes('anne', 'example')
  }

  // @ts-expect-error
  addTabBody(body: HTMLElement, selectTab = false): void {
    if (!body.hasAttribute('name')) {
      throw new Error('element has no name attribute', body)
    }
    this.shadowRoot.append(body)
    this.setupTabs()
    if (selectTab) {
      this.value = this.bodies.length - 1
    }
    this.queueRender()
  }

  // @ts-expect-error
  keyTab = (event: KeyboardEvent): void => {
    const { tabs } = this.refs
    // @ts-expect-error
    const tabIndex = [...tabs.children].indexOf(event.target as HTMLElement)
    switch (event.key) {
      case 'ArrowLeft':
        this.value =
          (tabIndex + Number(tabs.children.length) - 1) % tabs.children.length
        // @ts-expect-error
        ;(tabs.children[this.value] as HTMLElement).focus()
        event.preventDefault()
        break
      case 'ArrowRight':
        this.value = (tabIndex + 1) % tabs.children.length
        // @ts-expect-error
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

  // @ts-expect-error
  get bodies(): HTMLElement[] {
    return [...this.children].filter((elt) => elt.hasAttribute('name'))
  }

  pickTab = (event: Event): void => {
    const { tabs } = this.refs
    // @ts-expect-error
    const target = event.target as HTMLElement
    const tabIndex = [...tabs.children].indexOf(target)
    if (tabIndex > -1) {
      this.value = tabIndex
    }
  }

  setupTabs = (): void => {
    const { tabs } = this.refs
    const tabBodies = [...this.querySelectorAll('[name]')]
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
    const { tabs } = this.refs
    tabs.addEventListener('click', this.pickTab)
    tabs.addEventListener('keydown', this.keyTab)
    this.setupTabs()
  }

  render(): void {
    const { tabs, selected } = this.refs
    const tabBodies = this.bodies
    for (let i = 0; i < tabBodies.length; i++) {
      const tabBody = tabBodies[i]
      // @ts-expect-error
      const tab = tabs.children[i] as HTMLElement
      if (this.value === Number(i)) {
        tab.setAttribute('aria-selected', true)
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

export const tabSelector = TabSelector.elementCreator({ tag: 'tab-selector' })
