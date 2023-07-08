# xinjs-ui

[xinjs](https://xinjs.net) [github](https://github.com/tonioloewald/xinjs-ui#readme) [npm](https://www.npmjs.com/package/xinjs-ui) <size-break min-width="500"><img alt="bundlejs" src="https://deno.bundlejs.com/?q=xinjs-ui&badge="></size-break>

Copyright ©2023 Tonio Loewald

## the xinjs component library

In general, `xinjs` strives to work _with_ the browser rather than trying to _replace_ it.

`xinjs-ui` comprises a collection of [web-components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
with the goal of augmenting what _already_ works well and are as interoperable as
possible with the stuff you already use. E.g. where appropriate, the `value` of an
element is its malleable `state`, and when this changes, the element emits a
`change` event.

Similarly, because web-components are highly interoperable, there's no reason to reinvent
wheels. In particular, this library won't try to replace existing, excellent libraries
such as [shoelace.style](https://shoelace.style/).

The goal here is to provide useful components that augment what's built into HTML5 and CSS3.

### `<tab-selector>`

A tab-selector with nice animations.

### `<map-box>`

A [mapboxgl](https://docs.mapbox.com/mapbox-gl-js/api/) wrapper.

    <map-box coords="21.4389,-158.0001,9" token="your-mapbox-token-goes-here"></map-box>

There's no need to learn new apis, just access the element's `map` property.

### `<bodymovin-player>`

A wrapper for AirBnb's bodymovin, a.k.a. [lottie](https://airbnb.io/lottie/#/web), player.

    <bodymovin-player src="path/to/lottie.json"></bodymovin-player>

Or you can directly set its `json` property to the content of a `lottie.json` file.

And of course just access the element's `animation` property to use the usual APIs.

### `<data-table>`

A virtual data-table, configurable via a `columns` array (which will automatically be generated if not provided),
that displays gigantic tables with fixed headers (and live column-resizing) using a minimum of resources and cpu.

You can set the `<data-table>`'s `value` to `{ array: any[], columns: ColumnOptions[] | null, filter?: ArrayFilter }`

### `<markdown-viewer>`

Render [markdown](https://www.markdownguide.org/) anywhere, either using the `src` attribute to load
the file asynchronousely, or just put the text inside it. Powered by [marked](https://www.npmjs.com/package/marked).

    <markdown-viewer src="/path/to/file.md">

Or (but don't include the indentation!!):

    <markdown-viewer>
      # hello
      world
    </markdown-viewer>

And just set the element's `value` and it will render it for you.

### `<filter-builder>`

Automatically creates `ArrayFilter` functions `(a: any[]) => any[]` based on a text query that accepts the
following space-delimited criteria — all text matches are performed in `LocaleLowerCase`.

`<filter-builder>` has sets its `filter` property to an `ArrayFilter`, by default it just passes through
the array untouched. Its `value` is the source `string`.

The filter-builder has a default set of `FilterMaker` objects which it uses to **curry** an filter function.

    type ObjectTest (obj: any) => boolean

    interface FilterMaker {
      hint: string                                    // describes the grammar
      description: (...matches: string[]) => string   // describes the actual filter
      token: RegExp                                   // matches the token
      filterMaker(...matches: string) => ObjectTest   // builds an ObjectTest
    }

The `<filter-builder>` will use the `hint` values to write its `placeholder` (you can override this if
you explicitly set the `placeholder`) and it will use the `description` function to create the
`title` attribute, describing the filter.

The default `filters` provided are (in priority order):

- `[field]=value` if `field` is specified, matches `value`, otherwise looks for `value` anwhere
- `field!=value` matches if `field` is not `value`
- `field>value` / `field<value` - matches if `field` is `>`/`<` `value`, if `isNaN(Number(value))` this will
  be an alphabetical order comparison, otherwise it will be numberic.
- `field:value` matches if `field` contains `value`
- `!!field` matches if `field` is **truthy**
- `!field` matches if `field` is **falsy** (e.g. `''`, `null`, `undefined`, `false`, `0`)
- `value` matches if any field contains `value`

Right now multiple criteria are `AND`ed together. This will be extended to allow `()`, `OR`, `<` and `>` comparisons will
become smarter (convert both sides to numbers if possible), and extensibility will be added.

### `<code-editor>`

Sometimes, it's nice to be able to just toss a code-editor in a web-page. The element's `value` is
the code.

### `<size-break>`

While we wait for enough browsers to implement [container-queries](https://www.w3.org/TR/css-contain-3/),
and in any event when you simply want to do different things at different sizes (e.g. in the project I'm
working on right now, a row of buttons turns into a menu at narrow widths) there's `<size-break>`.

Note that the sizes referred to are of the `<size-break>`'s `.offsetParent`, and it watches for
the window's `resize` events and its own (via `ResizeObserver`).

    <size-break min-width="500">
      <default-thing>I am big!</default-thing>
      <small-thing slot="small">I am little</small-thing>
    </size-break>

`<size-break>` supports both `min-width` and/or `min-height`, and you can of course target only one
of the slots if you like. The demo site uses them to hide the [bundlejs](https://bundlejs.com/) badge when
space is tight.

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

`<bodymovin-player>` and is implemented in such a way that if you've preloaded the module
(e.g. via a script tag or packaging) it won't load it again, which affords offline
use.

There's no point for mapbox since it won't work without connectivity anyway.

### trackDrag

Sometimes you want to track a mouse-drag or touch-drag operation without messing around.
This is how the resizeable columns in `<data-table>` work.

Just call `trackDrag(event, (dx, dy, event) => { ... })` and you'll get updates on corresponding events until
you return `true` from the event-handler (or, in the case of `touch` events, the last `touch` ends).
For mouse events, a "tracker" element is thrown up in front of everything for the event.

For `touch` events, `dx` and `dy` are based on `event.touches[0]`. If you want to handle
multi-touch or specific touches, handle the `event` properties yourself.
