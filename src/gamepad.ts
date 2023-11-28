/*!
# gamepads

A couple of utility functions for dealing with gamepads.

`gamepadState()` gives you a condensed version of active gamepad state

`gamepadText()` provides the above in minimal text form for debugging
*/

export interface XinButton {
  index: number
  pressed: boolean
  value: number
}
export interface XinGamepad {
  id: string
  axes: number[]
  buttons: { [key: number]: number }
}

export function gamepadState() {
  const gamepads: Gamepad[] = navigator
    .getGamepads()
    .filter((p) => p !== null) as Gamepad[]

  return gamepads.map((p) => {
    const { id, axes, buttons } = p
    return {
      id,
      axes,
      buttons: buttons
        .map((button, index) => {
          const { pressed, value } = button
          return {
            index,
            pressed,
            value,
          } as XinButton
        })
        .filter((b) => b.pressed || b.value !== 0)
        .reduce((map: { [key: number]: number }, button) => {
          map[button.index] = button.value
          return map
        }, {}),
    }
  })
}

export function gamepadText() {
  const state = gamepadState()
  return state.length === 0
    ? 'no active gamepads'
    : state
        .map(({ id, axes, buttons }) => {
          const axesText = axes.map((a) => a.toFixed(2)).join(' ')
          const buttonText = Object.keys(buttons)
            .map((key) => `[${key}](${buttons[Number(key)].toFixed(2)})`)
            .join(' ')
          return `${id}\n${axesText}\n${buttonText}`
        })
        .join('\n')
}
