+# xinjs-ui

[demo](https://tonioloewald.github.io/xinjs-ui/) | [github](https://github.com/tonioloewald/xinjs-ui#readme) | [npm](https://www.npmjs.com/package/xinjs-ui) | ![bundlejs](https://deno.bundlejs.com/?q=xinjs-ui&badge=)

Copyright ©2023 Tonio Loewald

## the xinjs component library

In general, `xinjs` strives to work _with_ the browser rather than trying to replace it.

This is not a library of wrappers for things that work perfectly well in HTML!

The goal here is to provide useful components that augment what's built into HTML5.

### `<tab-selector>`

A tab-selector with nice animations.

### `<map-box>`

A mapboxgl wrapper.

### `<bodymovin-player>`

A bodymovin, a.k.a. lottie, player.

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
