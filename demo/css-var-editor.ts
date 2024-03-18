import {
  Component as WebComponent,
  ElementCreator,
  elements,
  Color,
} from 'xinjs'
import { xinForm, XinForm, xinField } from '../src'

const { h2, code } = elements

class XinCssVarEditor extends WebComponent {
  elementSelector = ''
  targetSelector = ''

  constructor() {
    super()

    this.initAttributes('elementSelector', 'targetSelector')
  }

  content = () => [
    h2({ part: 'title' }, 'CSS variables'),
    xinForm({ part: 'variables' }),
  ]

  loadVars = () => {
    const { title, variables } = this.parts

    variables.textContent = ''

    if (this.elementSelector) {
      title.textContent = `CSS variables for ${this.elementSelector}`
      const element = document.querySelector(this.elementSelector)
      if (!element) {
        setTimeout(this.loadVars, 250)
        return
      }
      if (element.shadowRoot) {
        const styleNode = element.shadowRoot.querySelector('style')
        const computedStyle = getComputedStyle(element)
        if (styleNode && styleNode.textContent) {
          const cssVars = [
            ...new Set([...(styleNode.textContent!.match(/--[\w-]+/g) || [])]),
          ]

          for (const cssVar of cssVars) {
            let value = computedStyle.getPropertyValue(cssVar)
            const type = value.match(/^(#|rgb|hsl)[\d()a-fA-F]+$/)
              ? 'color'
              : 'string'
            if (type === 'color') {
              value = Color.fromCss(value).html
            }
            variables.append(
              xinField(code(cssVar), { key: cssVar, value, type })
            )
          }
        }
      }
    }
  }

  update = (event: Event) => {
    console.log(event)
    const selector = this.targetSelector || this.elementSelector
    if (selector) {
      const target = document.querySelector(selector) as HTMLElement | null
      if (!target) {
        return
      }
      console.log(target)
      const { value } = this.parts.variables as XinForm
      for (const key of Object.keys(value)) {
        target.style.setProperty(key, value[key])
      }
    }
  }

  connectedCallback() {
    super.connectedCallback()

    this.loadVars()

    this.parts.variables.addEventListener('change', this.update, true)
  }
}

export const xinCssVarEditor = XinCssVarEditor.elementCreator({
  tag: 'xin-css-var-editor',
}) as ElementCreator<XinCssVarEditor>
