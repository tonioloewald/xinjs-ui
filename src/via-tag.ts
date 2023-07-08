import { elements } from 'xinjs'

interface PromiseMap {
  [key: string]: Promise<any>
}

// TODO scriptTag provided a property that if present in globalThis is returned
// so that a user can load the modules themselves if desired.
const loadedScripts: PromiseMap = {}
export function scriptTag(src: string): Promise<any> {
  if (loadedScripts[src] === undefined) {
    const scriptElt = elements.script({ src })

    // @ts-expect-error
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

    // @ts-expect-error
    document.head.append(linkElement)

    loadedStyleSheets[href] = new Promise((resolve) => {
      linkElement.onload = resolve
    })
  }
  return loadedStyleSheets[href]
}
