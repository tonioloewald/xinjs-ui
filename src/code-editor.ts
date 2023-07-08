import { Component as WebComponent, elements, vars } from 'xinjs'
import { scriptTag } from './via-tag'

const ACE_BASE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.23.2/'
const DEFAULT_THEME = 'ace/theme/monokai'

const makeCodeEditor = async (
  codeElement: any,
  mode = 'html',
  options = {},
  theme = DEFAULT_THEME
) => {
  const { ace } = await scriptTag(`${ACE_BASE_URL}ace.min.js`)
  ace.config.set('basePath', ACE_BASE_URL)
  const editor = ace.edit(codeElement, {
    mode: `ace/mode/${mode}`,
    tabSize: 2,
    useSoftTabs: true,
    useWorker: false,
    ...options,
  })
  editor.setTheme(theme)
  return editor
}

class CodeEditor extends WebComponent {
  value = ''
  mode = 'javascript'
  disabled = false
  role = 'code editor'

  get editor(): any {
    return this._editor
  }
  private _editor: any | undefined
  private _editorPromise: Promise<any> | undefined
  options: any = {}
  theme = DEFAULT_THEME

  styleNode = WebComponent.StyleNode({
    ':host': {
      display: 'block',
      position: 'relative',
    },
  })

  constructor() {
    super()

    this.initAttributes('mode', 'theme', 'disabled')
  }

  onResize() {
    if (this.editor !== undefined) {
      this.editor.resize(true)
    }
  }

  updateValue = async (event: Event) => {
    // changes to the element will be targted on the custom-element
    // changes by the user will target the textarea created by ace editor
    // @ts-expect-error
    if (event.target !== this && this.editor) {
      this.value = this.editor.getValue()
    }
  }

  connectedCallback() {
    super.connectedCallback()

    if (this.value === '') {
      this.value = this.textContent.trim('\n')
    }

    if (this._editorPromise === undefined) {
      this._editorPromise = makeCodeEditor(
        this,
        this.mode,
        this.options,
        this.theme
      )
      this._editorPromise.then((editor) => {
        this._editor = editor
        editor.setValue(this.value, 1)
      })
    }

    this.addEventListener('change', this.updateValue)
  }

  render(): void {
    super.render()

    if (this.editor !== undefined) {
      if (this.editor.getValue() !== this.value) {
        this.editor.setValue(this.value)
      }
    }
    if (this._editorPromise !== undefined) {
      this._editorPromise.then((editor) => editor.setReadOnly(this.disabled))
    }
  }
}

export const codeEditor = CodeEditor.elementCreator({ tag: 'code-editor' })
