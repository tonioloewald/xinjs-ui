# xinjs-ui

[ui.xinjs.net live demo](https://ui.xinjs.net) [xinjs](https://xinjs.net) [discord](https://discord.gg/ramJ9rgky5) [github](https://github.com/tonioloewald/xinjs-ui#readme) [npm](https://www.npmjs.com/package/xinjs-ui) <xin-sizebreak min-width="500"><img alt="bundlejs" src="https://deno.bundlejs.com/?q=xinjs-ui&badge="></xin-sizebreak>

Copyright ©2023 Tonio Loewald

## the xinjs ui library

In general, `xinjs` strives to work _with_ the browser rather than trying to _replace_ it.

In a similar vein, `xinjs-ui` comprises a collection of [web-components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
with the goal of augmenting what _already_ works well, and the components are intended be interoperable as
similar as possible to things that you already use, such as `<input>` or `<select>` elements.
E.g. where appropriate, the `value` of an element is its malleable `state`, and when this changes,
the element emits a `change` event.

Similarly, the xinjs base `Component` class and the components in this collection stive to
be as similar in operation as possible to DOM elements as possible. E.g. binary attributes
work as expected. Adding the `hidden` attribute makes them disappear.
Intinsic properties of components will default to `null` rather than `undefined`.

Similarly, because web-components are highly interoperable, there's no reason to reinvent
wheels. In particular, this library won't try to replace existing, excellent libraries
such as [shoelace.style](https://shoelace.style/) or wrap perfectly functional HTML
elements, like the venerable `<input>` or `<form>` elements that are already capable
and accessible.

The goal here is to provide useful components and other utilities that add to what's built into HTML5 and CSS3.

## custom elements

The simplest way to use these elements is to simply import the element and then either
use HTML or the `ElementCreator` function exported.

E.g. to use the markdown viewer:

```
import { markdownViewer } from 'xinjs-ui'
document.body.append(markdownViewer('# hello world\nthis is a test'))
```

```js
const { markdownViewer } = xinjsui

preview.append(
  markdownViewer(`
## hello world
here is some markdown
`)
)
```

Assuming you import the module somewhere, the HTML will work as well.

```
<xin-md>
## hello world
here is some markdown
</xin-md>
```

The big difference with using the `markdownViewer()` function is that the `xinjs` `Component`
class will automatically pick a new tag if the expected tag is taken (e.g. by a previously
defined custom-element from another library). `markdownViewer()` will create an element of
the correct type.

The other thing is that `xinjs` `ElementCreator` functions are convenient and composable,
allowing you to build DOM elements with less code than pretty much any other option, including
JSX, TSX, or HTML.
