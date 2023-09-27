/*!
# icons

A library that provides `ElementCreator` functions that produce SVG icons.

These icons are completely unstyled and can be colored using the css `fill` property. This will
probably be broken out as a standalone library to allow the use of whatever icons you like
(its source data is currently generated from an [icomoon](https://icomoon.com/app)
`selection.json` file, but could just as easily be generated from a directory full of SVGs).

The motivation behind this is to avoid dealing with tooling issues that inevitably result from
providing custom icon fonts or stylesheets for use with code. While `import` and `require` are
fairly well established for `javascript` and `TypeScript`, everyone seems to deal with CSS and
image files differently.

These icons are mainly sourced from [feather](https://github.com/feathericons/feather), but
all the icons have been processed to have integer coordinates in a `viewBox` typically scaled to 1024  &times; 1024.

`icons` is simply a proxy that generates an `ElementCreator` for a given icon on demand,
e.g. `icons.chevronDown()` produces an `<svg>` element containing a downward-pointing chevron
icon with the class `icon-chevron-down`.

```js
const { icons } = xinjsui
const { div } = xinjs.elements

preview.append(...Object.keys(icons).sort().map(iconName => div(
  { class: 'tile' },
  icons[iconName](),
  div(iconName)
)))
```
```css
.preview {
  display: flex;
  flex-wrap: wrap;
  padding: var(--spacing);
  gap: var(--spacing);
  overflow: hidden scroll !important;
}

.preview svg {
  fill: var(--text-color);
  height: 48px;
}

.preview .tile {
  display: inline-block;
  width: 160px;
  text-align: center;
  cursor: pointer;
  background: #fff8;
  padding: 10px;
  border-radius: 5px;
}

.preview .tile:hover {
  --text-color: var(--brand-color);
}

.preview .tile > div {
  font-family: Menlo, Monaco, monospace;
  whitespace: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 1.5;
}
```

*/

import { svgElements, ElementCreator, ElementPart } from 'xinjs'
import iconData from './icon-data'

const { svg, path } = svgElements

type SVGIconMap = { [key: string]: ElementCreator<SVGElement> }

export const icons = new Proxy(iconData, {
  get(target, prop: string): ElementCreator<SVGElement> | undefined {
    const iconSpec = target[prop]
    return iconSpec === undefined
      ? undefined
      : (...parts: ElementPart[]) => {
          const { w, h } = Object.assign({ w: 1024, h: 1024 }, iconSpec)
          return svg(
            {
              width: '24',
              height: '24',
              viewBox: `0 0 ${w} ${h}`,
              class:
                'icon-' +
                prop.replace(
                  /([a-z])([A-Z])/g,
                  (_, a, b) => a + '-' + b.toLocaleLowerCase()
                ),
            },
            ...parts,
            ...iconSpec.p.map((d: string) => path({ d }))
          )
        }
  },
}) as unknown as SVGIconMap
