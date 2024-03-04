/*!
# icons

A library that provides `ElementCreator` functions that produce SVG icons. It leverages `xinjs`'s
`svgElements` proxy and is intended to address all the key use-cases for SVG icons in web
applications along with being very easy to extend and maintain.

## icons

`icons` is a proxy that generates an `ElementCreator` for a given icon on demand,
e.g. `icons.chevronDown()` produces an `<svg>` element containing a downward-pointing chevron
icon with the class `icon-chevron-down`.

```js
const { icons, svgIcon } = xinjsui
const { div } = xinjs.elements

preview.append(...Object.keys(icons).sort().map(iconName => div(
  { class: 'tile' },
  svgIcon({icon: iconName, size: 16}),
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

The simplest option is simply to pass the `path` attribute (if the icon has a single path) while more 
complex icons can be provide an `IconSpec` structure `{ p: string[]; w: number; h: number }` (specifying
any number of paths and the size of the bounding box).

> This will be extended to allow multi-colored icons (whose colors can still be overridden via CSS) in the future.

## `<xin-icon>`

`<xin-icon>` is a simple component that lets you embed icons as HTML. Check the CSS tab to see
how it's styled.

`<xin-icon>` supports four attributes:

- `size` (defaults to 0) if non-zero sets the height of the icon in pixels
- `icon` is the name of the icon
- `color` is the fill color (if you don't want to style it using CSS)
- `stroke` is the stroke color
- `stroke-width` (defaults to 1) is the width of the stroke assuming the icon's viewBox is 1024 units tall but the
  icon is rendered at 32px (so it's multiplied by 32).

> **Aside**: the tool used to build the icon library scales up the viewBox to 1024 tall and then rounds
> all coordinates to nearest integer on the assumption that this is plenty precise enough for icons and
> makes everything smaller and easier to compress.

```html
<xin-icon size="64" icon="game" color="var(--brand-color)"></xin-icon>
<xin-icon size="96" icon="game" color="yellow" stroke="black"></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(345deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(180deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
<xin-icon size="64" icon="star"
 color="linear-gradient(90deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"
></xin-icon>
```
```css
xin-icon.demo-2 > svg {
  height: 96px;
}
```

**CSS-to-SVG Gradient** support is work-in-progress and experimental (there seem to be 
…issues… with how SVG  gradients behave). The goal is to be able to use CSS gradients 
to generate SVG gradients (which are kind of a pain) on-the-fly. Use at your own risk.

## SVGs as data-urls

```js
const { elements } = xinjs
const { icons, svg2DataUrl } = xinjsui

preview.append(
  elements.span({
    style: {
      display: 'inline-block',
      width: '120px',
      height: '24px',
      content: '" "',
      background: svg2DataUrl(icons.star(), 'none', '#bbb', 3)
    }
  }),
  elements.span({
    style: {
      display: 'inline-block',
      width: '120px',
      height: '24px',
      content: '" "',
      background: svg2DataUrl(icons.star(), 'gold', 'orange', 2)
    }
  }),
)
```

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

Until I wrote this library, I had settled on icomoon.io's system for generating and maintaining
custom icon fonts for managing icons within a project, but this makes exporting UI elements
with icons in them fiddly, and I looked at other UI libraries and found similar issues.

Even when just using this approach for projects over which I had full control, there were issues
with syncing icons with CSS (e.g. if you want to attach an element to a pseudo-element). `icons`
in combination with `svg2DataUrl` solves all these problems.

Basically, I wanted an icon solution that "just works" and this is it.

> Multi-color icons are not yet supported, but it's on the list and the colors
> will be overridable via styling.

Internally, icons are stored as javascript path data.

These icons are mainly sourced from [feather](https://github.com/feathericons/feather), but
all the icons have been processed to have integer coordinates in a `viewBox` typically scaled to 1024  &times; 1024.

*/

import {
  svgElements,
  ElementCreator,
  ElementPart,
  Component as WebComponent,
  XinStyleRule,
  Color,
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
  strokeWidth: number | string = 1
): string => {
  if (fill !== undefined) {
    for (const path of [...svg.querySelectorAll('path')]) {
      path.setAttribute('fill', fill)
      if (stroke !== undefined) {
        path.setAttribute('stroke', stroke)
        path.setAttribute('stroke-width', String(Number(strokeWidth) * 32))
      }
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
  size = 0
  color = ''
  stroke = ''
  strokeWidth = 1

  constructor() {
    super()

    this.initAttributes('icon', 'size', 'color', 'stroke', 'strokeWidth')
  }

  render(): void {
    this.textContent = ''
    const style: XinStyleRule = {}
    if (this.size) style.height = this.size
    if (this.stroke) {
      style.stroke = this.stroke
      style.strokeWidth = this.strokeWidth * 32
    }
    if (this.color.match(/linear-gradient/)) {
      const type = this.color.split('-')[0]
      const [, spec] = this.color.match(/[a-z-]+\((.*)\)/) || []
      const [, direction] = spec.match(/(\d+)deg/) || []
      const items = spec.match(/(#|rgb|hsl).*?%/g) || []
      console.log(items)
      const stops = items
        .map((item) => {
          const [, color, position] = item.match(/^(.*)\s(\d+%)$/) || [
            'black',
            '100%',
          ]
          return `<stop offset="${position}" stop-color="${
            Color.fromCss(color).html
          }" ></stop>`
        })
        .join('')
      let transform = ''
      if (direction) {
        const angle = parseFloat(direction)
        transform = ` gradientTransform="rotate(${angle.toFixed(0)})"`
      }
      const defs = svgElements.defs()
      const id = 'g-' + Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
      defs.innerHTML = `<${type}Gradient id="${id}" ${transform}>${stops}</${type}Gradient>`
      console.log(defs)
      style.fill = `url(#${id})`
      this.append(icons[this.icon]({ style }, defs))
    } else {
      style.fill = this.color
      this.append(icons[this.icon]({ style }))
    }
  }
}

export const svgIcon = SvgIcon.elementCreator({
  tag: 'xin-icon',
  styleSpec: {
    ':host': {
      verticalAlign: 'baseline',
    },
  },
})
