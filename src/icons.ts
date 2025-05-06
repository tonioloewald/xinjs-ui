/*!
# icons

<center>
  <xin-icon icon="settings" style="--font-size: 128px"></xin-icon>
  <xin-icon icon="xrColor" style="--font-size: 96px"></xin-icon>
  <xin-icon icon="rgb" style="--font-size: 128px"></xin-icon>
</center>

A library that provides `ElementCreator` functions that produce SVG icons. It leverages `xinjs`'s
`svgElements` proxy and is intended to address all the key use-cases for SVG icons in web
applications along with being very easy to extend and maintain.

> ### Supported Use Cases
> - inline SVGs that can be styled by CSS (for buttons, etc.)
> - No build process magic needed (it's "just javascript")
> - icons can be rendered  as data urls, e.g. to insert into CSS
> - highly optimized and compressible
> - support for color icons (with overrides via CSS)

## icons

`icons` is a proxy that generates an `ElementCreator` for a given icon on demand,
e.g. `icons.chevronDown()` produces an `<svg>` element containing a downward-pointing chevron
icon with the class `icon-chevron-down`.

```js
const { icons, svgIcon } = xinjsui
const { div } = xinjs.elements

preview.append(...Object.keys(icons).sort().map(iconName => div(
  { class: 'tile' },
  svgIcon({icon: iconName, size: 24}),
  div(iconName)
)))
```
```css
.preview {
  display: grid;
  grid-template-columns: calc(33% - 5px) calc(33% - 5px) calc(33% - 5px);
  flex-wrap: wrap;
  padding: var(--spacing);
  gap: var(--spacing);
  overflow: hidden scroll !important;
}

.preview svg {
  fill: var(--text-color);
}

.preview .tile {
  display: flex;
  text-align: center;
  cursor: pointer;
  background: #fff8;
  padding: 10px;
  gap: 10px;
  border-radius: 5px;
}

.preview .tile:hover {
  background: white;
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

.preview .tile xin-icon {
  font-size: 24px;
}
```

These icons are completely unstyled and can be colored using the css `fill` property. This will
probably be broken out as a standalone library to allow the use of whatever icons you like
(its source data is currently generated from an [icomoon](https://icomoon.com/app)
`selection.json` file, but could just as easily be generated from a directory full of SVGs).

## Adding and redefining icons

`defineIcon(name: string, icon: IconSpec | string)` adds or replaces your own icons

```
interface IconSpec {
  p: string[]  // paths
  c?: string[] // colors of the paths in p
  w: number    // width of icon
  h: number    // height of icon
}
```

The simplest option is simply to pass the `path` attribute (if the icon has a single path) while more
complex icons can be provide an `IconSpec` structure, specifying multiple paths (and colors if so
desired).

This utility loads SVG files (they should only contain paths with no strokes, transforms, or nesting)
and generates an `IconSpec`. It renders the original icon side-by-side with the `<xin-icon>` version.
**If the icon on the right appears garbled, it probably needs to be simplified**.

```js
const { defineIcon, xinIcon } = xinjsui

const fileInput = preview.querySelector('input')
const icon = preview.querySelector('.icon')
const svgContainer = preview.querySelector('.svg')
const iconSpec = preview.querySelector('textarea')
const simplify = preview.querySelector('.simplify')

function jsObject(o) {
  let json = JSON.stringify(o, null, 2)
  return json.replace(/"(\w+)":/g, '$1:')
}

fileInput.addEventListener('change', () => {
  if (fileInput.files.length) {
    const reader = new FileReader();
    reader.onload = function(e) {
      svgContainer.innerHTML = e.target.result
      const svg = svgContainer.querySelector('svg')
      const paths = Array.from(svg.querySelectorAll('path')).map(path => ({
        p: path.getAttribute('d'),
        c: path.style.fill
      }))
      const isMulticolor = [...new Set(paths.map(path => path.c))].length > 1
      let { width, height } = svg.viewBox.baseVal

      if (simplify.checked) {
        const scale = 1024 / height
        height = 1024
        width = width * scale

        paths.forEach(path => {
          path.p = path.p.replace(/\d+\.\d+/g, x => (Number(x) * scale).toFixed(0))
        })
      }

      if (width === 1024 && height === 1024 && paths.length === 1) {
        iconSpec.value = jsObject(paths[0])
      } else {
        const spec = {
          p: paths.map(path => path.p),
          w: width,
          h: height
        }
        if (isMulticolor) {
          spec.c = paths.map(path => path.c)
        }
        iconSpec.value = jsObject(spec)
        defineIcon('svgLoader', spec)
        icon.setAttribute('icon', 'svgLoader')
        fileInput.value = ''
      }
    };
    reader.readAsText(fileInput.files[0]);
  }
})
```
```html
<div class="svg-loader">
  <label>
    <span>Load an SVG file</span>
    <input accept="image/svg+xml" type="file">
  </label>
  <label style="flex-direction: row">
    <input type="checkbox" class="simplify" checked>
    <span>Scale to 1024 high and round floats?</span>
  </label>
  <div class="side-by-side">
    <label>
      <span>IconSpec</span>
      <textarea></textarea>
    </label>
    <label>
      <span>Icons</span>
      <div class="side-by-side">
        <div class="svg"></div>
        <xin-icon class="icon"></xin-icon>
      </div>
    </label>
  </div>
</div>
```
```css
.preview .svg-loader,
.preview .svg-loader label {
  display: flex;
  width: 100%;
  align-items: stretch;
  flex-direction: column;
}

.preview .svg-loader {
  gap: 10px;
  height: 100%;
}

.preview .svg-loader textarea {
  flex: 1;
  resize: none;
  font-family: Monaco, monospace;
  font-size: 12px;
  line-height: 15px;
}

.preview .side-by-side {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.preview .svg-loader .icon {
  position: relative;
}

.preview .svg-loader svg {
  height: 128px;
  width: 128px;
}

.preview xin-icon:not([icon]) {
  display: none;
}

.preview .svg-loader xin-icon {
  --font-size: 128px;
}
```

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
  elements.span({
    style: {
      display: 'inline-block',
      width: '100px',
      height: '200px',
      content: '" "',
      background: svg2DataUrl(icons.xinjsColor())
    }
  }),
)
```

`svg2DataUrl(svg: SVGElement, fill?: string, stroke?: string): string` is provided as a
utility for converting SVG elements into data-urls (e.g. for incorporation into
CSS properties. (It's used by the `<xin-3d>` component to render the XR widget.)

If you're using `SVGElement`s created using the `icons` proxy, you'll want to provide `fill` and/or
`stroke` values, because images loaded via css properties cannot be styled.

## Color Icons

```html
<xin-icon icon="xinjsColor" class="demo-icon"></xin-icon>
<xin-icon icon="xinjsColor" class="demo-icon recolored"></xin-icon>
```
```css
.demo-icon {
  --font-size: 160px
}

.recolored:not(:hover) {
  opacity: 0.76;
  filter: grayscale(0.75);
  transform: scale(1.0);
}

.recolored {
  pointer-events: all;
  transition: 0.25s ease-in-out;
  transform: scale(1.05);
  --icon-fill-0: black;
  --icon-fill-2: red;
  --icon-fill-3: orange;
  --icon-fill-4: limegreen;
  --icon-fill-5: yellow;
  --icon-fill-6: skyblue;
}
```

Each path inside an icon can be individually colored. When the icon is hydrated,
the colors will be assigned to a (minimal) set of CSS-variables (`--icon-fill-0`, etc.)
and these can be overridden in the usual way.

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

Internally, icons are stored as javascript path data.

Many of these icons are sourced from [Feather Icons](https://github.com/feathericons/feather), but
all the icons have been processed to have integer coordinates in a `viewBox` typically scaled to 1024  &times; 1024.

## Is this efficient?

I use [icomoon](https://icomoon.com/app) to manage my icon libraries. Its method of distributing icons
is to create custom fonts and an accompanying stylesheet.

- the iconData file, compressed is ~23kB
- icomoon's equivalent CSS file is ~3kB and the font files are 21kB

But these fonts are less flexible, harder to distribute as part of a library, you need to
distribute three versions for compatibility, and the color icons are very flaky and cannot
be styled.

## Feather Icons Copyright Notice

The MIT License (MIT)

Copyright (c) 2013-2023 Cole Bemis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
*/

import {
  svgElements,
  ElementCreator,
  ElementPart,
  ElementProps,
  Component as WebComponent,
  XinStyleRule,
  Color,
  varDefault,
} from 'xinjs'
import { IconSpec, SVGIconMap } from './icon-types'
import iconData from './icon-data'

const { svg, path } = svgElements

function getIconSpec(name: string): IconSpec {
  let data = iconData[name]
  if (data === undefined) {
    if (name) {
      console.warn(`icon ${name} not found`)
    }
    data = iconData.square
  }
  return typeof data !== 'string'
    ? (data as IconSpec)
    : {
        w: 1024,
        h: 1024,
        p: [data],
      }
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
  const styled = svg.querySelectorAll('[style]')
  svg.removeAttribute('style')
  for (const item of [...styled]) {
    const [color] = item.getAttribute('style')?.match(/rgb\([^)]+\)/) || []
    item.removeAttribute('style')
    if (color && !fill) {
      item.setAttribute('fill', Color.fromCss(color).html)
    }
  }
  const text = encodeURIComponent(svg.outerHTML)
  return `url(data:image/svg+xml;charset=UTF-8,${text})`
}

export const icons = new Proxy(iconData, {
  get(
    target,
    prop: string
  ): ElementCreator<SVGElement, ElementProps> | undefined {
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
              style: {
                height: varDefault.uiIconHeight('16px'),
              },
            },
            ...parts,
            ...iconSpec.p.map((d: string, index: number) => {
              const uniqueColors = Array.from(new Set(iconSpec.c))
              const p = iconSpec.c
                ? path({
                    d,
                    style: {
                      fill: `var(--icon-fill-${uniqueColors.indexOf(
                        iconSpec.c[index]
                      )}, ${iconSpec.c[index]})`,
                    },
                  })
                : path({ d })
              return p
            })
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
      display: 'inline-flex',
    },
  },
})
