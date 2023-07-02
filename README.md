+# xinjs-polygons

[demo](https://tonioloewald.github.io/xinjs-polygons/) | [github](https://github.com/tonioloewald/xinjs-polygons#readme) | [npm](https://www.npmjs.com/package/xinjs-polygons) | ![bundlejs](https://deno.bundlejs.com/?q=xinjs-polygons&badge=)

Copyright ©2023 Tonio Loewald

## Background

While working on [xinjs-timezone-picker](https://tonioloewald.github.io/xinjs-timezone-picker/) I needed
to work on complex SVG files and wrote this code. It's really nice so I thought I'd pull it out so I can
use it elsewhere and you can too.

## Usage

### Types

The two key types are

    interface Point {
      x: number,
      y: number
    }

    type Polygon = Point[]

### Functions

The key function are:

    import { area, simplify } from 'xinjs-polygons'

And you use them like this:

    const polygonArea: number = area(...polygon)
    const simplifiedPolygon = simplify(polygon, 0.5)

The second argument to `simplify` is the `threshold` change in area a given point needs to justify its existence.
Sinplify simply walks the boundary of the polygon, and for any three successive points `a`, `b`, and `c`, it will
eliminate `b` if the area of the triangle `abc` is < `theshold`.

> If you want to compute a good threshold to use, you might consider a `small multiple` of the area of the original
> polygon divided by its number of points - 3. (Any polygon with three points will clearly be reduced to area 0 by
> eliminating any point.)

### Utilities

SVG polygon data is stored as a `points` attribute.

    import {stringToPolygon, polygonToString} from 'xinjs-polygons'

Assuming `polygon` is an SVG `<polygon>` element

    const points = stringToPolygon(polygon.getAttribute('points'))

`points` is now a `Polygon` (i.e. a `Point[]`) ripe for use with `simplify` and `area`.

You can convert it back using:

    polygon.setAttribute('points', polygonToString(points))

And that's about it. Play with the demo!
