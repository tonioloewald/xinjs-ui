import { Component as WebComponent, elements, vars, varDefault } from 'xinjs'

const { slot } = elements

const flexDirections = {
  left: 'row',
  right: 'row-reverse',
  top: 'column',
  bottom: 'column-reverse',
}

const outsetMargins = {
  left: ['marginLeft', 'marginRight'],
  right: ['marginRight', 'marginLeft'],
  top: ['marginTop', 'marginBottom'],
  bottom: ['marginBottom', 'marginTop'],
}

class SideNav extends WebComponent {
  panelPosition: 'left' | 'right' | 'top' | 'bottom' = 'left'
  minSize = 600
  navSize = 200

  content = [slot({ name: 'nav' }), slot({ dataRef: 'content' })]

  private _contentVisible = false
  get contentVisible(): boolean {
    return this._contentVisible
  }

  set contentVisible(visible: boolean) {
    this._contentVisible = visible
    this.queueRender()
  }

  styleNode = WebComponent.StyleNode({
    ':host': {
      // @ts-expect-error
      display: 'flex',
      // @ts-expect-error
      flexDirection: vars.flexDirection,
      // @ts-expect-error
      transition: varDefault.sideNavTransition('0.25s ease-out'),
    },
    ':host slot': {
      position: 'relative',
    },
    ':host slot:not([name])': {
      display: 'block',
      flex: `0 0 ${vars.contentWidth}`,
      width: vars.contentWidth,
    },
    ':host slot[name="nav"]': {
      display: 'block',
      flex: `0 0 ${vars.navWidth}`,
      width: vars.navWidth,
    },
  })

  onResize = () => {
    const { content } = this.refs
    if (this.offsetParent === null) {
      return
    }

    this.style.marginLeft = 0
    this.style.marginRight = 0
    this.style.marginTop = 0
    this.style.marginBottom = 0

    // @ts-expect-error
    const empty =
      [...this.childNodes].find((node) =>
        node instanceof Element ? node.getAttribute('slot') !== 'nav' : true
      ) === undefined
    if (empty) {
      this.style.setProperty('--nav-width', '100%')
      this.style.setProperty('--content-width', '0%')
      return
    }

    const parent = this.offsetParent
    const size = this.panelPosition.match(/left|right/)
      ? parent.offsetWidth
      : parent.offsetWidth

    if (size >= this.minSize) {
      this.style.setProperty('--nav-width', `${this.navSize}px`)
      this.style.setProperty(
        '--content-width',
        `calc(100% - ${this.navSize}px)`
      )
    } else {
      this.style.setProperty('--nav-width', '50%')
      this.style.setProperty('--content-width', '50%')

      const margins = outsetMargins[this.panelPosition]
      if (this.contentVisible) {
        this.style[margins[0]] = '-100%'
      } else {
        this.style[margins[1]] = '-100%'
      }
    }
  }

  private observer: any
  connectedCallback(): void {
    super.connectedCallback()
    this.contentVisible = this.refs.content.childNodes.length === 0
    globalThis.addEventListener('resize', this.onResize)

    // @ts-expect-error
    this.observer = new MutationObserver(this.onResize)
    this.observer.observe(this, { childList: true })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.observer.disconnect()
  }

  constructor() {
    super()
    this.initAttributes('panelPosition', 'minSize', 'navSize')
  }

  render(): void {
    super.render()
    this.style.setProperty(
      '--flex-direction',
      flexDirections[this.panelPosition]
    )
    this.onResize()
  }
}

export const sideNav = SideNav.elementCreator({ tag: 'side-nav' })
