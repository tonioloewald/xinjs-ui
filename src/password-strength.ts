/*!
# password strength

Just wrap it a `<xin-password-strength>` element around an `<input>`
and it will gauge its content strength as a password. It will also
let you **securely verify** that the password hasn't been breached.

```html
<xin-password-strength>
  <input type="password">
  <button class="toggle">
    <xin-icon icon="eye"></xin-icon>
  </button>
</xin-password-strength>

<br><br>
<button class="breach">Check if breached</button>

```
```js
const toggle = preview.querySelector('.toggle')
const icon = preview.querySelector('xin-icon')
const input = preview.querySelector('input')
const breach = preview.querySelector('.breach')

toggle.addEventListener('click', () => {
  if (icon.icon === 'eye') {
    input.type = 'text'
    icon.icon = 'eyeOff'
  } else {
    input.type = 'password'
    icon.icon = 'eye'
  }
})

breach.addEventListener('click', async () => {
  preview.querySelector('xin-password-strength').isBreached().then(isBreached => {
    alert(
      isBreached
      ? 'This password has been breached, look at console for details'
      : 'Seems OK'
    )
  })
})
```
```css
input[type="password"] {
  box-shadow: inset 0 0 0 2px var(--indicator-color);
}
```

## Algorithm

The password is assessed to have a strength based on:

- **length** one point for at least `goodLength` characters long.
- **[a-z]** one point for containing a lowercase letter
- **[A-Z]** one point for containing an uppercase letter
- **[0-9]** one point for containing a numeric character
- **^[a-zA-Z0-9]]** one point for containing some other kind of character

A password smaller than `minLength` is an automatic `0`.

## Attributes

- `minLength` defaults to `8`
- `goodLength` defaults to `12`
- `indicatorColors` six HTML colors, separated by commas, defaults to `'#f00,#f40,#f80,#ef0,#8f0,#0d4'`

## Properties

- `value`, `strength` is a number from 0 to 5
- `issues` is a structure which you can use to generate feedback

```
<xin-password-strength>.issues = {
  tooShort: boolean,
  short: boolean,
  noUpper: boolean,
  noLower: boolean,
  noNumber: boolean,
  noSpecial: boolean,
}
```

## `isBreached()`

`<xin-password-meter>` also provides an `isBreached(): Promise<boolean>` method
which uses [weakpass.com's API](https://weakpass.com/) to tell you if the password has been
breached.

> Note that `isBreached` does not send the plain-text password anywhere. It uses **SHA-1**
to hash the password and then sends that for lookup.

## Utility Functions

Two functions used internally for querying [Weakpass,com](https://weakpass.com/) are
provided in case they're useful on their own.

`isBreached(password: striing): Promise<boolean>` will return `true` if the password is
found in Weakpass's database (and spit out extra info to the console).

`digest(s: string, method="sha-1"): Promise<string>` is just a nice wrapper for `crypto.digest`.
*/

import { Component, elements, vars, varDefault } from 'xinjs'

export const digest = async (s: string, method = 'SHA-1'): Promise<string> => {
  // Convert password to an ArrayBuffer
  const encoder = new TextEncoder()
  const data = encoder.encode(s)

  // Hash the password using SHA-1
  const hashBuffer = await crypto.subtle.digest(method, data)

  // Convert the hash to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')

  return hashHex
}

export const isBreached = async (password: string): Promise<boolean> => {
  const hashHex = await digest(password)

  const response = await fetch(`https://weakpass.com/api/v1/search/${hashHex}`)
  if (response.ok) {
    const result = await response.json()
    console.log('password found in weakpass database', result)
  }

  return response.status !== 404
}

const { span, xinSlot } = elements
export class XinPasswordStrength extends Component {
  minLength = 8
  goodLength = 12
  indicatorColors = '#f00,#f40,#f80,#ef0,#8f0,#0d4'
  issues = {
    tooShort: true,
    short: true,
    noUpper: true,
    noLower: true,
    noNumber: true,
    noSpecial: true,
  }
  value = 0

  constructor() {
    super()

    this.initAttributes('minLength', 'goodLength', 'indicatorColors')
  }

  strength(password: string): number {
    this.issues = {
      tooShort: password.length < this.minLength,
      short: password.length < this.goodLength,
      noUpper: !password.match(/[A-Z]/),
      noLower: !password.match(/[a-z]/),
      noNumber: !password.match(/[0-9]/),
      noSpecial: !password.match(/[^a-zA-Z0-9]/),
    }

    return this.issues.tooShort
      ? 0
      : Object.values(this.issues).filter((v) => !v).length - 1
  }

  async isBreached(): Promise<boolean> {
    const password = this.querySelector('input')?.value

    if (!password || typeof password !== 'string') {
      return true
    }

    return await isBreached(password)
  }

  updateIndicator = (password: string) => {
    const { level } = this.parts as { level: HTMLSpanElement }
    const colors = this.indicatorColors.split(',')
    const strength = this.strength(password)
    if (this.value !== strength) {
      this.value = strength
      this.dispatchEvent(new Event('change'))
    }
    level.style.width = `${strength * 20}%`
    this.style.setProperty(
      '--indicator-color',
      strength < 0 ? 'transparent' : colors[strength]
    )
  }

  update = (event: Event) => {
    const input = (event.target as HTMLElement).closest('input')

    this.updateIndicator(input?.value || '')
  }

  content = () => [
    xinSlot({ onInput: this.update }),
    span({ part: 'meter' }, span({ part: 'level' })),
  ]

  render() {
    super.render()

    const input = this.querySelector('input') as HTMLInputElement
    this.updateIndicator(input?.value)
  }
}

export const xinPasswordStrength = XinPasswordStrength.elementCreator({
  tag: 'xin-password-strength',
  styleSpec: {
    ':host': {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: vars.spacing50,
      position: 'relative',
    },
    ':host xin-slot': {
      display: 'flex',
    },
    ':host [part="meter"]': {
      display: 'block',
      position: 'relative',
      height: varDefault.meterHeight('24px'),
      background: varDefault.indicatorBg('white'),
    },
    ':host [part="level"]': {
      height: '100%',
      content: '" "',
      display: 'inline-block',
      width: 0,
      transition: '0.15s ease-out',
      background: vars.indicatorColor,
    },
  },
})
