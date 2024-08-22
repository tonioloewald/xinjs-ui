/*!
# localize

`xinjs-ui` provides support for localization via the `localize` method and the `<xin-locale-picker>`
and `<xin-localized>` custom-elements.

You initialize localization using the `initLocalization()` function which takes data
in tsv format (see below).

All of the data can be bound in the `i18n` proxy (`xin.i18n`), including the currently selected
locale (which will default to `navigator.language`).

While viewing this documentation, all `<xin-localized>` elements should display a **red
underline**.

Usage:

```
import { initLocalization, localize, xinLocalized, i18n } from 'xinjs-ui'

initLocalization(... TSV data ...)

localize('foo') // returns localized version of 'foo' if present,
  // 'foo' otherwise

xinLocalized('foo') // returns a `<xin-localized>` element
  // that will display a localized 'foo' if available.

i18n.locale = 'fr' // set localization to French (if available)
```

## Creating Localized String Data

`localized.tsv` provides data for localizing strings. It can be created automatically
using my [localized](https://docs.google.com/spreadsheets/d/1L0_4g_dDhVCwVVxLzYbMj_H86xSp9lsRCKj7IS9psso/edit?usp=sharing)
Google Sheet which leverages `googletranslate` to automatically translate reference strings
(and which you can manually override as you like).

E.g. in this demo I've replaced the incorrect translation of "Finnish"
(`googletranslate` used the word for Finnish nationality rather than the language).

The format of the input data is a table in TSV format, that basically looks like this:

en-US | fr | fi | sv | zh
------|----|----|----|----
English (US) | French | Finnish | Swedish | Chinese (Mandarin)
English (US) | Français | Suomi | Svenska | 中文（普通话）
🇺🇸 | 🇫🇷 | 🇫🇮 | 🇸🇪 | 🇨🇳
Icon | Icône | Kuvake | Ikon | 图标
Ok | D'accord | Ok | Ok | 好的
Cancel | Annuler | Peruuttaa | Avboka | 取消

So, basically create a `tsv` file and then turn that into a Typescript file by adding:

```
export default `( content of tsv file )`
```

```html
<xin-locale-picker></xin-locale-picker>
<p>We can hide the caption to make it more compact</p>
<xin-locale-picker hide-caption></xin-locale-picker>
<blockquote>
  <h3>Localized Widgets</h3>
  <button><xin-localized>Yes</xin-localized></button>
  <button><xin-localized>No</xin-localized></button>

  <h3>Lowercase is preserved</h3>
  <button><xin-localized>yes</xin-localized></button>
  <button><xin-localized>no</xin-localized></button>
</blockquote>
```
```css
xin-localized {
  border-bottom: 2px solid red;
}
```
*/

import { Component, xinProxy, elements, bindings } from 'xinjs'

import { xinSelect, XinSelect } from './select'

interface TranslationMap {
  [key: string]: string[]
}

const { span } = elements

export const { i18n } = xinProxy(
  {
    i18n: {
      locale: window.navigator.language,
      locales: [window.navigator.language],
      languages: [window.navigator.language],
      emoji: [''],
      stringMap: {} as TranslationMap,
      localeOptions: [
        {
          icon: span(),
          caption: window.navigator.language,
          value: window.navigator.language,
        },
      ],
    },
  },
  true
)

bindings.localeOptions = {
  toDOM(select, options) {
    if (select instanceof XinSelect) {
      select.options = options
    }
  },
}

export function initLocalization(localizedStrings: string) {
  const [locales, , languages, emoji, ...strings] = localizedStrings
    .split('\n')
    .map((line) => line.split('\t'))
  if (locales && languages && emoji && strings) {
    i18n.locales = locales
    i18n.languages = languages
    i18n.emoji = emoji
    i18n.stringMap = strings.reduce(
      (map: TranslationMap, strings: string[]) => {
        map[strings[0].toLocaleLowerCase()] = strings
        return map
      },
      {} as TranslationMap
    )
    i18n.localeOptions = locales.map((locale, index) => ({
      icon: span(emoji[index]),
      caption: languages[index],
      value: locale,
    }))
  }
}

export function localize(ref: string): string {
  const index = i18n.locales.indexOf(i18n.locale.valueOf())
  if (index > -1) {
    const map = i18n.stringMap[ref.toLocaleLowerCase()]
    const localized = map && map[index]
    if (localized) {
      ref =
        ref.toLocaleLowerCase() === ref
          ? localized.toLocaleLowerCase()
          : localized
    }
  }
  return ref
}

export class LocalePicker extends Component {
  hideCaption = false

  content = () => {
    return xinSelect({
      part: 'select',
      showIcon: true,
      title: localize('Language'),
      bindValue: i18n.locale,
      bindLocaleOptions: i18n.localeOptions,
    })
  }

  constructor() {
    super()

    this.initAttributes('hideCaption')
  }

  updateLocalized() {
    const localizeds = [
      ...document.querySelectorAll(XinLocalized.tagName as string),
    ] as XinLocalized[]
    for (const localized of localizeds) {
      localized.render()
    }
  }

  connectedCallback(): void {
    super.connectedCallback()
    ;(this.parts.select as XinSelect).value = i18n.locale
    this.parts.select.addEventListener('change', this.updateLocalized)
  }

  render(): void {
    super.render()

    this.parts.select.toggleAttribute('hide-caption', this.hideCaption)
  }
}

export const localePicker = LocalePicker.elementCreator({
  tag: 'xin-locale-picker',
})

export class XinLocalized extends Component {
  contents = () => elements.xinSlot()

  refString = ''

  render() {
    super.render()

    if (!this.refString) {
      this.refString = this.textContent || ''
    }
    this.textContent = localize(this.refString)
  }
}

export const xinLocalized = XinLocalized.elementCreator({
  tag: 'xin-localized',
  styleSpec: {
    ':host': {
      pointerEvents: 'none',
    },
  },
})
