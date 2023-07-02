import { elements } from 'xinjs'

interface PromiseMap {
  [key: string]: Promise<void>
}

const loadedScripts: PromiseMap = {}
export function scriptTag(src: string): Promise<void> {
  if (loadedScripts[src] === undefined) {
    const scriptElt = elements.script({ src })

    // @ts-expect-error
    document.head.append(scriptElt)

    loadedScripts[src] = new Promise((resolve) => {
      scriptElt.onload = resolve
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

    loadedScripts[href] = new Promise((resolve) => {
      linkElement.onload = resolve
    })
  }

  return loadedStyleSheets[href]
}
