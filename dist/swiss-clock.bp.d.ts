/*!
# swiss-clock

This is an implemention of the Swiss Railway Clock adapted from an old
[b8rjs demo component](https://b8rjs.com/?source=components/swiss-clock.js).
It is implemented as a xinjs `blueprint` (i.e. a component definition with
no included code from xinjs).

> **Note** this is a blueprint, so it cannot be consumed the way other
> custom-elements are consumed. Look at the first example to see how the
> custom-element is loaded and registered using `makeComponent`.

```js
const { swissClock } = xinjsui
const { makeComponent } = xinjs

makeComponent('xin-swiss-clock', swissClock)
```
```html
<xin-swiss-clock update-interval=30></xin-swiss-clock>
```

By default, the clock will update once per second, but you can set a
different `update-interval` (in milliseconds) if so desired.

If you set an `update-interval` that is over 1000, the second-hand will
automatically be hidden.

And you can set a timezone offset using the `timezone` (e.g. 'Europe/Helsinki') or `offset` (e.g. `3`).

Here's the time in "Australia/Sydney" and "America/Denver". `update-interval` has been set
to 10s (10000ms), so the second hands are not displayed.

```html
<xin-swiss-clock update-interval=10000 timezone="Australia/Sydney">Sydney</xin-swiss-clock>
<xin-swiss-clock update-interval=10000 timezone="America/Denver">Denver</xin-swiss-clock>
```

You can display a fixed time using the `time` (assumed to be an ISO time stamp).

You can get a list of supported timezones using `Intl.supportedValuesOf('timeZone')`.
[`Intl` Dodcumentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

```html
<xin-swiss-clock time="1976-04-01T08:23:45.678Z" timezone="America/Los_Angeles"></xin-swiss-clock>
```

<xin-css-var-editor element-selector="xin-swiss-clock"></xin-css-var-editor>
*/
import { XinBlueprint } from 'xinjs';
export declare const swissClock: XinBlueprint;
