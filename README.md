# xinjs-ui

[demo](https://tonioloewald.github.io/xinjs-ui/) | [github](https://github.com/tonioloewald/xinjs-ui#readme) | [npm](https://www.npmjs.com/package/xinjs-ui) | ![bundlejs](https://deno.bundlejs.com/?q=xinjs-ui&badge=)

Copyright ©2023 Tonio Loewald

## the xinjs component library

In general, `xinjs` strives to work _with_ the browser rather than trying to replace it.

This is _not_ a library of wrappers for things that work perfectly well in HTML!

Similarly, because web-components are highly interoperable, there's no reason to reinvent
wheels. In particular, this library won't try to replace existing, excellent libraries
such as [shoelace.style](https://shoelace.style/).

The goal here is to provide useful components that augment what's built into HTML5.

### `<tab-selector>`

A tab-selector with nice animations.

### `<map-box>`

A mapboxgl wrapper.

### `<bodymovin-player>`

A bodymovin, a.k.a. lottie, player.

### `<data-table>`

A virtual data-table, configurable via a `columns` array (which will automatically be generated if not provided),
that displays gigantic tables with fixed headers (and live column-resizing) using a minimum of resources and cpu.

### `<markdown-viewer>`

Render markdown anywhere, either using the `src` attribute to load the file asynchronousely, or
just put the text inside it:

    <markdown-viewer src="/path/to/file.md">

Or (but don't include the indentation!!):

    <markdown-viewer>
      # hello
      world
    </markdown-viewer>

### `<filter-builder>`

Automatically creates `ArrayFilter` functions `(a: any[]) => any[]` based on a text query that accepts the
following space-delimited criteria — all text matches are performed in `LocaleLowerCase`

- `string` will match any record that has a property that contains `word`
- `field:string` will match any record that has a property `field` containing `string`
- `field:>string` / `field:<string` will match any record that has a property `field` > / < `string` (alphabetic for now)
- `!field` will match any record where `field` is **falsy**
- `field!` will match any record where `field` is **truthy**

Right now multiple criteria are `AND`ed together. This will be extended to allow `()`, `OR`, `<` and `>` comparisons will
become smarter (convert both sides to numbers if possible), and extensibility will be added.

## utilities

### scriptTag & styleSheet

If you need to load an old schoole javascript library via cdn (both mapboxgl and bodymovin are
fine examples) then use these two functions. They return promises that resolve when the
module in question has loaded.

Usage:

    import { scriptTag } from 'xinjs-ui'

    const bodymovinAvailable = scriptTag('../lottie.min.js')

    bodymovinAvailable.then(() => {
      globalThis.bodymovien.loadAnimation(...)
    })

`<bodymovin-player>` is implemented in such a way that if you've preloaded the module
(e.g. via a script tag or packaging) it won't load it again, which affords offline
use.

There's no point for mapbox since it won't work without connectivity anyway.
