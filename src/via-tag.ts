import { elements } from 'xinjs'

interface PromiseMap {
  [key: string]: Promise<any>
}

const loadedScripts: PromiseMap = {}
export function scriptTag(
  src: string,
  existingSymbolName?: string
): Promise<any> {
  if (loadedScripts[src] === undefined) {
    if (existingSymbolName !== undefined) {
      // @ts-expect-error
      const existing = globalThis[existingSymbolName]
      loadedScripts[src] = Promise.resolve({ [existingSymbolName]: existing })
    }

    const scriptElt = elements.script({ src })

    document.head.append(scriptElt)

    loadedScripts[src] = new Promise((resolve) => {
      scriptElt.onload = () => resolve(globalThis)
    })
  }

  return loadedScripts[src]
}

const loadedStyleSheets: PromiseMap = {}
export function styleSheet(href: string): Promise<void> {
  if (loadedStyleSheets[href] === undefined) {
    const linkElement = elements.link({
      rel: 'stylesheet',
      type: 'text/css',
      href,
    })

    document.head.append(linkElement)

    loadedStyleSheets[href] = new Promise((resolve) => {
      linkElement.onload = resolve
    })
  }
  return loadedStyleSheets[href]
}
