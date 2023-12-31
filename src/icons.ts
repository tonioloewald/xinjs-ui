/*!
# icons

A library that provides `ElementCreator` functions that produce SVG icons. It leverages `xinjs`'s
`svgElements` proxy.

## icons

`icons` is a proxy that generates an `ElementCreator` for a given icon on demand,
e.g. `icons.chevronDown()` produces an `<svg>` element containing a downward-pointing chevron
icon with the class `icon-chevron-down`.

```js
const { icons, svgIcon } = xinjsui
const { div } = xinjs.elements

preview.append(...Object.keys(icons).sort().map(iconName => div(
  { class: 'tile' },
  svgIcon({icon: iconName}),
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

These icons are completely unstyled and can be colored using the css `fill` property. This will
probably be broken out as a standalone library to allow the use of whatever icons you like
(its source data is currently generated from an [icomoon](https://icomoon.com/app)
`selection.json` file, but could just as easily be generated from a directory full of SVGs).

## Adding and redefining icons

`defineIcon(name: string, icon: IconSpec | string)` adds or replaces your own icons

he simplest option is simply to pass the `path` attribute (if the icon has a single path) while more c
omplex icons can be provide an `IconSpec` structure `{ p: string[]; w: number; h: number }` (specifying
any number of paths and the size of the bounding box).

Clearly it would be easy to extend this to allow multi-colored icons in the future.

## `<xin-icon>`

`<xin-icon>` is a simple component that lets you embed icons as HTML. Check the CSS tab to see
how it's styled.

`<xin-icon>` supports two attributes:

- `icon` is the name of the icon
- `color` is the fill color (if you don't want to style it using CSS)

```html
<xin-icon class="demo-2" icon="game" color="var(--brand-color)"></xin-icon>
```
```css
xin-icon.demo-2 > svg {
  height: 96px;
}
```

## SVGs as data-urls

`svg2DataUrl(svg: SVGElement, fill?: string, stroke?: string): string` is provided as a
utility for converting SVG elements into data-urls (e.g. for incorporation into
CSS properties. (It's used by the `<xin-3d>` component to render the XR widget.)

If you're using `SVGElement`s created using the `icons` proxy, you'll want to provide `fill` and/or
`stroke` values, because images loaded via css properties cannot be styled.

## Missing Icons

If you ask for an icon that isn't defined, the `icons` proxy will print a warning to console
and render a `square` (in fact, `icons.square()`) as a fallback.

## Why?

The motivation behind this is to avoid dealing with tooling issues that inevitably result from
integrating custom icon fonts or stylesheets needed by code libraries (and an icon-font also needs
a style-sheet. Importing code is simply easier (and as a bonus, more compact and flexible, and there's
no question as to when the stuff is available).

These icons are mainly sourced from [feather](https://github.com/feathericons/feather), but
all the icons have been processed to have integer coordinates in a `viewBox` typically scaled to 1024  &times; 1024.

*/

import {
  svgElements,
  ElementCreator,
  ElementPart,
  Component as WebComponent,
} from 'xinjs'
import iconData from './icon-data'

const { svg, path } = svgElements

type SVGIconMap = { [key: string]: ElementCreator<SVGElement> }
type IconSpec = { p: string[]; w: number; h: number }

function getIconSpec(name: string): IconSpec {
  let data = iconData[name]
  if (data === undefined) {
    console.warn(`icon ${name} not found`)
    data = iconData.square
  }
  const p = Array.isArray(data)
    ? data
    : typeof data === 'string'
    ? [data]
    : data.p
  const { w, h } = Object.assign({ w: 1024, h: 1024 }, data)
  return { p, w, h }
}

export const defineIcon = (name: string, icon: IconSpec | string): void => {
  iconData[name] = icon
}

export const svg2DataUrl = (
  svg: SVGElement,
  fill?: string,
  stroke?: string,
  strokeWidth?: number | string
): string => {
  if (fill !== undefined) {
    for (const path of [...svg.querySelectorAll('path')]) {
      path.setAttribute('fill', fill)
      if (stroke !== undefined) path.setAttribute('stroke', stroke)
      if (strokeWidth !== undefined)
        path.setAttribute('stroke-width', String(strokeWidth))
    }
  }

  svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
  const text = encodeURIComponent(svg.outerHTML)
  return `url(data:image/svg+xml;charset=UTF-8,${text})`
}

export const icons = new Proxy(iconData, {
  get(target, prop: string): ElementCreator<SVGElement> | undefined {
    const iconSpec = getIconSpec(prop)
    return iconSpec === undefined
      ? undefined
      : (...parts: ElementPart[]) => {
          const { w, h } = Object.assign({ w: 1024, h: 1024 }, iconSpec)
          return svg(
            {
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

export class SvgIcon extends WebComponent {
  icon = ''
  color = ''

  constructor() {
    super()

    this.initAttributes('icon', 'color')
  }

  render(): void {
    this.textContent = ''
    this.append(
      this.color !== ''
        ? icons[this.icon]({ style: { fill: this.color } })
        : icons[this.icon]()
    )
  }
}

export const svgIcon = SvgIcon.elementCreator({ tag: 'xin-icon' })
