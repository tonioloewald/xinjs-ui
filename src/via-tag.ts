/*!
# scriptTag & styleSheet

## scriptTag

If you need to load an old school (cjs) javascript or css library via cdn then use these two functions.

`xinjs-ui` uses this library to implement the `<code-editor>`, `<bodymovin-player>`, and `<map-box>`
elements.

`scriptTag()` and `styleSheet()` return promises that resolve `globalThis` when the module in question
has loaded and otherwise behave as much like `import()` as possible.

Using `scriptTag`:

```html
<!-- inline styles needed because chart.js overrides stylesheet -->
<canvas style="height: 100%; width: 100%"></canvas>
```
```js
const { scriptTag } = xinjsui

// Note that the current version of Chart.js is an ES6 module so you could just use `import()` instead
const { Chart } = await scriptTag('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js')
const data = {
  labels: ['first', 'second', 'third'],
  datasets: [
    {
      label: 'amazingness',
      backgroundColor: '#fff4',
      borderColor: '#f008',
      borderWidth: 2,
      data: [21, 27, 57]
    }
  ]
}
const options = {
  scales: {
    yAxes:[{
      stacked:true,
      gridLines: {
        display:true,
        color: '#00f2'
      }
    }],
    xAxes:[{
      gridLines: {
        display:false
      }
    }]
  }
}

Chart.Bar(preview.querySelector('canvas'), {data, options})
```

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
