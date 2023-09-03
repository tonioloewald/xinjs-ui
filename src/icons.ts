/*!
# icons

A set of SVG icons that are easy-to-use. These icons are completely unstyled
and can be colored using the css `fill` property.

These icons are mainly sourced from [feather](https://github.com/feathericons/feather).

`icons` is simply a proxy that generates an `ElementCreator` for a given icon on demand.

```js
const { icons } = xinjsui
const { div } = xinjs.elements

preview.append(...Object.keys(icons).map(iconName => div(
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

.preview [class^="icon-"] {
  fill: var(--text-color);
}

.preview .tile {
  display: inline-block;
  width: 160px;
  text-align: center;
}

.preview .tile:hover {
  --text-color: var(--brand-color);
}

.preview .tile > div {
  whitespace: no-wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 80%;
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
    return target[prop] === undefined
      ? undefined
      : (...parts: ElementPart[]) =>
          svg(
            {
              width: '24',
              height: '24',
              viewBox: '0 0 1024 1024',
              class:
                'icon-' +
                prop.replace(
                  /([a-z])([A-Z])/g,
                  (_, a, b) => a + '-' + b.toLocaleLowerCase()
                ),
            },
            ...parts,
            ...target[prop].map((d: string) => path({ d }))
          )
  },
}) as unknown as SVGIconMap
