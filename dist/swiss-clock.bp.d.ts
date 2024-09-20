/*!
# swiss-clock

This is an implemention of the Swiss Railway Clock adapted from an old
[b8rjs demo component](https://b8rjs.com/?source=components/swiss-clock.js).
It is implemented as a xinjs `blueprint` (i.e. a component definition with
  no included code from xinjs).

```js
const { swissClock } = xinjsui
const { makeComponent } = xinjs

makeComponent('xin-swiss-clock', swissClock)
```
```html
<xin-swiss-clock></xin-swiss-clock>
```

And you can set a timezone offset using the `timezone` (e.g. 'Europe/Helsinki') or `offset` (e.g. `3`).

Here's the time in "Australia/Sydney" and "America/Denver":

```html
<xin-swiss-clock timezone="Australia/Sydney">Sydney</xin-swiss-clock>
<xin-swiss-clock timezone="America/Denver">Denver</xin-swiss-clock>
```

You can display a fixed time using the `time` (assumed to be an ISO time stamp).

(You can get a list of supported timezones using `Intl.supportedValuesOf('timeZone')`).
The [documentation for the `Intl` object is here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).

```html
<xin-swiss-clock time="1976-04-01T08:23:45.678Z" timezone="America/Los_Angeles"></xin-swiss-clock>
```

<xin-css-var-editor element-selector="xin-swiss-clock"></xin-css-var-editor>
*/
import { XinBlueprint } from 'xinjs';
export declare const swissClock: XinBlueprint;
