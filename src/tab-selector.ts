import { Component as WebComponent, elements, vars } from 'xinjs'

const { div, slot } = elements

class TabSelector extends WebComponent {
  value = 0

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
    ':host .tabs > .selected': {
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
  keyTab = (event: KeyboardEvent): void => {
    const { tabs } = this.refs
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
    for (const tabBody of tabBodies) {
      tabs.append(div(tabBody.getAttribute('name') as string, { tabindex: 0 }))
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
    const tabBodies = [...this.querySelectorAll('[name]')]
    for (let i = 0; i < tabBodies.length; i++) {
      const tabBody = tabBodies[i]
      const tab = tabs.children[i] as HTMLElement
      if (this.value === Number(i)) {
        tab.classList.add('selected')
        selected.style.marginLeft = `${tab.offsetLeft - tabs.offsetLeft}px`
        selected.style.width = `${tab.offsetWidth}px`
        tabBody.removeAttribute('hidden')
      } else {
        tab.classList.remove('selected')
        tabBody.setAttribute('hidden', '')
      }
    }
  }
}

export const tabSelector = TabSelector.elementCreator({ tag: 'tab-selector' })
