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
import { ElementCreator, Component as WebComponent } from 'xinjs';
type SVGIconMap = {
    [key: string]: ElementCreator<SVGElement>;
};
type IconSpec = {
    p: string[];
    w: number;
    h: number;
};
export declare const defineIcon: (name: string, icon: IconSpec | string) => void;
export declare const svg2DataUrl: (svg: SVGElement, fill?: string, stroke?: string, strokeWidth?: number | string) => string;
export declare const icons: SVGIconMap;
export declare class SvgIcon extends WebComponent {
    icon: string;
    color: string;
    constructor();
    render(): void;
}
export declare const svgIcon: any;
export {};
