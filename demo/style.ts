/*!
# style

## Convert CSS to Javascript

This is a simple utility for converting CSS into a xinjs `XinStyleSheet` object.
Having all of your CSS start as Javascript (or Typescript) has many
benefits, such as being able to do color math using `xinjs`'s `Color` class,
and use the same values that are in your CSS for inline code when needed.

> ### Caution
>
> - This is not a real parser but regexp hackery!
> - Doesn't handle edge-cases like semicolons inside string values or
>   skipped semicolons for the last property in a rule.
> - Doesn't convert variable references inside style values (e.g. calc(var(--foo) * 0.5))
>   into `vars` values.

```js
const tabs = preview.querySelector('xin-tabs')
const [css, js] = preview.querySelectorAll('xin-code')
const convertButton = preview.querySelector('button')

function quoteTrim(s, symbol = false) {
  s = s.trim()
  if (s.match(/[^\w_]/) || !symbol) {
    s = s.replace(/'/g, "\\'")
    return `'${s}'`
  } else {
    return s
  }
}

function kebabToCamel(s) {
  s = s.replace(/--/, '_')
  return s.replace(/\-(\w)/g, (_, c) => c.toLocaleUpperCase())
}

function css2js () {
  const source = css.value
  const lines = source.split('\n')
  const output = ['{']
  let rule = ''
  for(const line of lines) {
    if (!line.trim()) {
      continue
    }
    try {
      rule = rule ? rule + ' ' + line.trim() : line
      if (rule.match(/@import .*;/)) {
        const [,url] = rule.match(/@import url\(['"](.*)['"]\);/)
        output.push(`'@import': ${quoteTrim(url)},`)
        rule = ''
      } else if (rule.match(/\{\s*$/)) {
        const [,whitespace, selector] = rule.match(/(\s*)([^\s].*)\{/)
        output.push(`${whitespace}${quoteTrim(selector, true)}: {`)
        rule = ''
      } else if (line.match(/[^\s]*\}\s*$/)) {
        output.push(line + ',')
        rule = ''
      } else if (rule.match(/.*:.*;/)) {
        let [,whitespace, prop, value] = rule.match(/(\s*)(.*):(.*);/)
        prop = kebabToCamel(prop)
        output.push(`${whitespace}${quoteTrim(prop, true)}: ${quoteTrim(value)},`)
        rule = ''
      }
    } catch(e) {
      console.error(e, line)
    }
  }
  output.push('}')
  let code = output.join('\n')
  code = code.replace(/'var\(--([^)]*)\)'/g, (_,v) => `vars.${kebabToCamel(v)}`)

  js.value = `import { vars } from 'xinjs'\n\nexport const styleSpec = ${code}`
}

convertButton.addEventListener('click', () => {
  css2js()
  tabs.value = 1
})
```
```html
<xin-tabs>
<button slot="after-tabs">Convert</button>
<xin-code mode="css" name="css">
@import url('https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&famiSpline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap');

tr:nth-child(2n) {
  background: var(--background-shaded);
}

th,
td {
  padding: calc(var(--spacing) * 0.5) var(--spacing);
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

header xin-locale-picker xin-select button {
  --brand-color: var(--brand-text-color);
  background: transparent;
  gap: 2px;
}

header xin-locale-picker xin-select button svg {
  fill: var(--brand-text-color) !important;
}
</xin-code>
<xin-code mode="javascript" name="js"></xin-code>
</xin-tabs>
```
```css
.preview xin-tabs {
  background: var(--inset-bg);
}
.preview xin-tabs, .preview textarea, .preview xin-code {
  width: 100%;
  height: 100%;
  resize: none;
}
```

## Using the Output

You can turn the output of this utility using `xinjs`'s `StyleSheet` utility function:

```
import { styleSpec } from './my-style'

StyleSheet('base-style', styleSpec) // creates a `<style id="base-style>` element in
  the `<head>` of the page.
```

You can convert the output to Typescript by importing the `XinStyleSheet` from `xinjs`:

```
import { XinStyleSheet, vars } from 'xinjs'

export const styleSpec: XinStyleSheet = ...
```
*/

import { XinStyleSheet, vars } from 'xinjs'

export const styleSpec: XinStyleSheet = {
  '@import':
    'https://fonts.googleapis.com/css2?family=Aleo:ital,wght@0,100..900;1,100..900&famiSpline+Sans+Mono:ital,wght@0,300..700;1,300..700&display=swap',
  ':root': {
    _fontFamily: "'Aleo', sans-serif",
    _codeFontFamily: "'Spline Sans Mono', monospace",
    _fontSize: '16px',
    _codeFontSize: '14px',
    _textColor: '#222',
    _brandColor: '#088358',
    _background: '#fafafa',
    _backgroundShaded: '#f5f5f5',
    _navBg: '#efefeed2',
    _barColor: '#dae3df',
    _focusColor: '#08835880',
    _brandTextColor: '#ecf3dd',
    _insetBg: '#eee',
    _codeBg: '#f8ffe9',
    _spacing: '10px',
    _lineHeight: 'calc(var(--font-size) * 1.6)',
    _h1Scale: '2',
    _h2Scale: '1.5',
    _h3Scale: '1.25',
    _xinTabsSelectedColor: vars.brandColor,
    _xinTabsBarColor: vars.brandTextColor,
    _touchSize: '32px',
    _shadowColor: '#0004',
    _menuItemIconColor: vars.brandColor,
    _headerHeight:
      'calc( var(--line-height) * var(--h2-scale) + var(--spacing) * 2 )',
  },
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
    margin: '0',
    lineHeight: vars.lineHeight,
    background: vars.background,
    color: vars.textColor,
  },
  'input, button, select, textarea': {
    fontFamily: vars.fontFamily,
    fontSize: vars.fontSize,
  },
  select: {
    WebkitAppearance: 'none',
    appearance: 'none',
  },
  header: {
    background: vars.brandColor,
    color: vars.brandTextColor,
    _textColor: vars.brandTextColor,
    display: 'flex',
    alignItems: 'center',
    padding: '0 calc(var(--spacing) * 1.5)',
    lineHeight: 'calc(var(--line-height) * var(--h1-scale))',
    height: vars.headerHeight,
    whiteSpace: 'nowrap',
  },
  h1: {
    _textColor: vars.brandColor,
    fontSize: 'calc(var(--font-size) * var(--h1-scale))',
    lineHeight: 'calc(var(--line-height) * var(--h1-scale))',
    fontWeight: '400',
    margin: '0',
    padding: vars.spacing,
    textAlign: 'center',
  },
  'header h2': {
    color: vars.brandTextColor,
    whiteSpace: 'nowrap',
  },
  h2: {
    color: vars.brandColor,
    fontSize: 'calc(var(--font-size) * var(--h2-scale))',
    lineHeight: 'calc(var(--line-height) * var(--h2-scale))',
    margin: 'calc(var(--spacing) * var(--h2-scale)) 0',
  },
  h3: {
    fontSize: 'calc(var(--font-size) * var(--h3-scale))',
    lineHeight: 'calc(var(--line-height) * var(--h3-scale))',
    margin: 'calc(var(--spacing) * var(--h3-scale)) 0',
  },
  main: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100vw',
    height: '100vh',
    overflow: 'hidden',
  },
  'main > xin-sidenav': {
    height: 'calc(100vh - var(--header-height))',
  },
  blockquote: {
    background: vars.insetBg,
    margin: '0',
    padding: 'var(--spacing) calc(var(--spacing) * 2)',
  },
  'blockquote > :first-child': {
    marginTop: '0',
  },
  'blockquote > :last-child': {
    marginBottom: '0',
  },
  '.bar': {
    display: 'flex',
    gap: vars.spacing,
    justifyContent: 'center',
    alignItems: 'center',
    padding: vars.spacing,
    flexWrap: 'wrap',
    _textColor: vars.brandColor,
    background: vars.barColor,
  },
  a: {
    textDecoration: 'none',
    color: vars.brandColor,
    opacity: '0.9',
    borderBottom: '1px solid var(--brand-color)',
  },
  'button, select, .clickable': {
    transition: 'ease-out 0.2s',
    background: vars.brandTextColor,
    _textColor: vars.brandColor,
    display: 'inline-block',
    textDecoration: 'none',
    padding: '0 calc(var(--spacing) * 1.25)',
    border: 'none',
    borderRadius: 'calc(var(--spacing) * 0.5)',
  },
  'button, select, clickable, input': {
    lineHeight: 'calc(var(--line-height) + var(--spacing))',
  },
  'select:has(+ .icon-chevron-down)': {
    paddingRight: 'calc(var(--spacing) * 2.7)',
  },
  'select + .icon-chevron-down': {
    marginLeft: 'calc(var(--spacing) * -2.7)',
    width: 'calc(var(--spacing) * 2.7)',
    alignSelf: 'center',
    pointerEvents: 'none',
    objectPosition: 'left center',
    _textColor: vars.brandColor,
  },
  'label > select + .icon-chevron-down': {
    marginLeft: 'calc(var(--spacing) * -3.5)',
  },
  'input, textarea': {
    border: 'none',
    outline: 'none',
    borderRadius: 'calc(var(--spacing) * 0.5)',
  },
  input: {
    padding: '0 calc(var(--spacing) * 1.5)',
  },
  textarea: {
    padding: 'var(--spacing) calc(var(--spacing) * 1.25)',
    lineHeight: vars.lineHeight,
    minHeight: 'calc(var(--spacing) + var(--line-height) * 4)',
  },
  "input[type='number']": {
    paddingRight: 'calc(var(--spacing) * 0.5)',
    width: '6em',
    textAlign: 'right',
  },
  "input[type='checkbox'], input[type='radio']": {
    maxWidth: vars.lineHeight,
  },
  '::placeholder': {
    color: vars.focusColor,
  },
  img: {
    verticalAlign: 'middle',
  },
  'button:hover, button:hover, .clickable:hover': {
    boxShadow: 'inset 0 0 0 2px var(--brand-color)',
  },
  'button:active, button:active, .clickable:active': {
    background: vars.brandColor,
    color: vars.brandTextColor,
  },
  label: {
    display: 'inline-flex',
    gap: 'calc(var(--spacing) * 0.5)',
    alignItems: 'center',
  },
  '.elastic': {
    flex: '1 1 auto',
    overflow: 'hidden',
    position: 'relative',
  },
  'svg text': {
    pointerEvents: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    fill: '#000',
    stroke: '#fff8',
    strokeWidth: '0.5',
    opacity: '0',
  },
  'svg text.hover': {
    opacity: '1',
  },
  '.thead': {
    background: vars.brandColor,
    _textColor: vars.brandTextColor,
  },
  '.th + .th': {
    border: '1px solid #fff4',
    borderWidth: '0 1px',
  },
  '.th, .td': {
    padding: '0 var(--spacing)',
  },
  '.tr:not([aria-selected]):hover': {
    background: '#08835810',
  },
  '[aria-selected]': {
    background: '#08835820',
  },
  ':disabled': {
    opacity: '0.5',
    filter: 'saturate(0)',
    pointerEvents: 'none',
  },
  pre: {
    background: vars.codeBg,
    padding: vars.spacing,
    borderRadius: 'calc(var(--spacing) * 0.25)',
    overflow: 'scroll',
    fontSize: vars.codeFontSize,
    lineHeight: 'calc(var(--font-size) * 1.2)',
  },
  'pre, code': {
    fontFamily: vars.codeFontFamily,
    _textColor: vars.brandColor,
  },
  '.-xin-sidenav-visible .close-content': {
    display: 'none',
  },
  '.transparent, .iconic': {
    background: 'none',
  },
  '.iconic': {
    padding: '0',
    fontSize: '150%',
    lineHeight: 'calc(var(--line-height) + var(--spacing))',
    width: 'calc(var(--line-height) + var(--spacing))',
    textAlign: 'center',
  },
  '.transparent:hover, .iconic:hover': {
    background: '#0002',
    boxShadow: 'none',
    color: vars.textColor,
  },
  '.transparent:active, .iconic:active': {
    background: '#0004',
    boxShadow: 'none',
    color: vars.textColor,
  },
  'xin-sidenav:not([compact]) .show-within-compact': {
    display: 'none',
  },
  '.on.on': {
    background: vars.brandColor,
    _textColor: vars.brandTextColor,
  },
  '.current': {
    background: vars.background,
  },
  '.doc-link': {
    cursor: 'pointer',
    borderBottom: 'none',
    padding: 'calc(var(--spacing) * 0.5) calc(var(--spacing) * 1.5)',
  },
  '.doc-link:not(.current):hover': {
    background: vars.background,
  },
  '.doc-link:not(.current)': {
    opacity: '0.8',
  },
  'xin-example': {
    margin: 'var(--spacing) 0',
  },
  "[class*='icon-'], xin-icon": {
    fill: vars.textColor,
    height: vars.fontSize,
    pointerEvents: 'none',
  },
  "[class*='icon-']": {
    verticalAlign: 'middle',
  },
  '.icon-plus': {
    content: "'+'",
  },
  table: {
    borderCollapse: 'collapse',
  },
  thead: {
    background: vars.brandColor,
    color: vars.brandTextColor,
  },
  tbody: {
    background: vars.background,
  },
  'tr:nth-child(2n)': {
    background: vars.backgroundShaded,
  },
  'th, td': {
    padding: 'calc(var(--spacing) * 0.5) var(--spacing)',
  },
  'header xin-locale-picker xin-select button': {
    _brandColor: vars.brandTextColor,
    background: 'transparent',
    gap: '2px',
  },
  'header xin-locale-picker xin-select button svg': {
    fill: 'var(--brand-text-color) !important',
  },
}