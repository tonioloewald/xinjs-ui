/*!
# localize

`xinjs-ui` provides support for localization via the `localize` method and the `<xin-locale-picker>`
and `<xin-localized>` custom-elements.

> ### Important Note
> This module deals with the **language** used in the user interface. "locale" is
> *not the same thing*. The (usually) two-letter codes used designate **language**
> and **not locale**.
>
> E.g. the US *locale* includes things like measurement systems
> and date format. Most European locales use commas where we use decimal points in the US.
>
> Similarly, `ja` is the code for the Japanese **language** while `jp` is the **locale**.

## `initLocalization(localizationData: string)`

Enables localization from TSV data.

## XinLocalePicker

A selector that lets the user pick from among supported languages.

```html
<h3>Locale Picker</h3>
<xin-locale-picker></xin-locale-picker>

<h3>Locale Picker with <code>hide-captions</code></h3>
<xin-locale-picker hide-caption></xin-locale-picker>
```

## XinLocalized

A span-replacement that automatically localizes its text content.
By default the case in the localized data is preserved unless the
reference text is all lowercase, in which case the localized text
is also lowercased.

While viewing this documentation, all `<xin-localized>` elements should display a **red
underline**.

```html
<h3>Localized Widgets</h3>
<button><xin-localized>Yes</xin-localized></button>
<button><xin-localized>No</xin-localized></button>

<h3>Lowercase is preserved</h3>
<button><xin-localized>yes</xin-localized></button>
<button><xin-localized>no</xin-localized></button>
```
```css
xin-localized {
  border-bottom: 2px solid red;
}
```

## `i18n`

All of the data can be bound in the `i18n` proxy (`xin.i18n`), including the currently selected
locale (which will default to `navigator.language`).

You can take a look at `xin.i18n` in the console (and use it to set locale directly).

```
i18n.locale = 'fr' // set localization to French (if available)
```

## Creating Localized String Data

`localized.tsv` provides data for localizing strings. It can be created automatically
using something like my [localized](https://docs.google.com/spreadsheets/d/1L0_4g_dDhVCwVVxLzYbMj_H86xSp9lsRCKj7IS9psso/edit?usp=sharing)
Google Sheet which leverages `googletranslate` to automatically translate reference strings
(and which you can manually override as you like).

E.g. in this demo I've replaced the incorrect translation of "Finnish"
(`googletranslate` used the word for Finnish nationality rather than the language).

The format of the input data is a table in TSV format, that looks like this:

en-US | fr | fi | sv | zh
------|----|----|----|----
English (US) | French | Finnish | Swedish | Chinese (Mandarin)
English (US) | Français | suomi | svenska | 中文（普通话）
🇺🇸 | 🇫🇷 | 🇫🇮 | 🇸🇪 | 🇨🇳
Icon | Icône | Kuvake | Ikon | 图标
Ok | D'accord | Ok | Ok | 好的
Cancel | Annuler | Peruuttaa | Avboka | 取消

- Column 1 is your reference language.
- Row 1 is [language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes).
- Row 2 is the name of the language in your reference language.
- Row 3 is the name of the language in itself (because it's silly to expect people
  to know the name of their language in a language they don't know)
- Row 4 is the flag emoji for that language (yes, that's problematic, but languages
  do not have flags, per se)
- Rows 5 and on are user interface strings you want to localize

In the spreadsheet provided, each cell contains a formula that translates the term
in the left-most column from the language in that column to the language in the
destination column. Once you have an automatic translation, you can hand off the
sheet to language experts to vet the translations.

Finally, create a `tsv` file and then turn that into a Typescript file by wrapping
the content thus:

```
export default `( content of tsv file )`
```

## To Do

- support for automated localization of attributes such as `title`
- `data-xin-i18n` attribute to allow this (if present, text content localized
   actual value of attribute can specify attributes needing localization)
- DOM watcher looks for insertion of marked elements and localizes them
)
*/
import { Component } from 'xinjs';
export declare const i18n: any;
export declare const updateLocalized: () => void;
export declare function initLocalization(localizedStrings: string): void;
export declare function localize(ref: string): string;
export declare class LocalePicker extends Component {
    hideCaption: boolean;
    content: () => any;
    constructor();
    connectedCallback(): void;
    render(): void;
}
export declare const localePicker: any;
export declare class XinLocalized extends Component {
    contents: () => any;
    refString: string;
    render(): void;
}
export declare const xinLocalized: any;
