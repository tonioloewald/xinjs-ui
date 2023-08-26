/*!
# scriptTag & styleSheet

## scriptTag

If you need to load an old school javascript library via cdn (both mapboxgl and bodymovin are
fine examples) then use these two functions. They return promises that resolve `globalThis` when the
module in question has loaded.

Using `scriptTag`:

    import { scriptTag } from 'xinjs-ui'
    const { bodyMovin } = await scriptTag('../lottie.min.js')

    bodymovin.loadAnimation(...)

Note that `scriptTag` will resolve `globalThis` so it behaves as much like async `import()`
as possible.

As an aside:

`<bodymovin-player>` is implemented in such a way that if you've preloaded the module
(e.g. via a script tag or packaging) it won't load it again, which affords offline
use.

There's no point for `<map-box>` since it won't work without connectivity anyway.

## styleSheet

styleSheet creates a `<link>` tag for a specified css file.

Using `styleSheet`:

    styleSheet('../path/to/style.css')

This is awaitable, if you care. The stylesheet `<link>` will only be inserted _once_.
*/

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
      // @ts-expect-error eslint is just wrong
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
