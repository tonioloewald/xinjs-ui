import {
  Component as WebComponent,
  ElementCreator,
  elements,
  varDefault,
} from 'xinjs'

const { slot } = elements

class SideNav extends WebComponent {
  minSize = 800
  navSize = 200
  compact = false

  content = [slot({ name: 'nav' }), slot({ part: 'content' })]

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
      display: 'grid',
      gridTemplateColumns: `${varDefault.navWidth(
        '50%'
      )} ${varDefault.contentWidth('50%')}`,
      gridTemplateRows: '100%',
      position: 'relative',
      margin: varDefault.margin('0 0 0 -100%'),
      transition: varDefault.sideNavTransition('0.25s ease-out'),
    },
    ':host slot': {
      position: 'relative',
    },
    ':host slot:not([name])': {
      display: 'block',
    },
    ':host slot[name="nav"]': {
      display: 'block',
    },
  })

  onResize = () => {
    const { content } = this.parts
    if (this.offsetParent === null) {
      return
    }

    const empty =
      [...this.childNodes].find((node) =>
        node instanceof Element ? node.getAttribute('slot') !== 'nav' : true
      ) === undefined
    if (empty) {
      this.style.setProperty('--nav-width', '100%')
      this.style.setProperty('--content-width', '0%')
      return
    }

    const parent = this.offsetParent as HTMLElement

    this.compact = parent.offsetWidth < this.minSize
    if (!this.compact) {
      content.classList.add('-side-nav-visible')
      this.style.setProperty('--nav-width', `${this.navSize}px`)
      this.style.setProperty(
        '--content-width',
        `calc(100% - ${this.navSize}px)`
      )
      this.style.setProperty('--margin', '0')
    } else {
      content.classList.remove('-side-nav-visible')
      this.style.setProperty('--nav-width', '50%')
      this.style.setProperty('--content-width', '50%')

      if (this.contentVisible) {
        this.style.setProperty('--margin', '0 0 0 -100%')
      } else {
        this.style.setProperty('--margin', '0 -100% 0 0')
      }
    }
  }

  private observer: any
  connectedCallback(): void {
    super.connectedCallback()
    this.contentVisible = this.parts.content.childNodes.length === 0
    globalThis.addEventListener('resize', this.onResize)

    this.observer = new MutationObserver(this.onResize)
    this.observer.observe(this, { childList: true })
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.observer.disconnect()
  }

  constructor() {
    super()
    this.initAttributes('minSize', 'navSize', 'compact')
  }

  render(): void {
    super.render()
    this.onResize()
  }
}

export const sideNav = SideNav.elementCreator({
  tag: 'side-nav',
}) as ElementCreator<SideNav>
