/*#
# gamepads

A couple of utility functions for dealing with gamepads and XRInputs.

`gamepadState()` gives you a condensed version of active gamepad state

`gamepadText()` provides the above in minimal text form for debugging

```js
const { elements } = xinjs
const { gamepadText } = xinjsui

const pre = elements.pre()
preview.append(pre)

const interval = setInterval(() => {
  if (!pre.closest('body')) {
    clearInterval(interval)
  } else {
    pre.textContent = gamepadText()
  }
}, 100)
```

## XRInput Devices

> This is experimental, the API is changing and stuff doesn't work. Hopefully it
> will become a lot more generally useful once Apple's VisionPro comes out.

`xrControllers(babylonjsXRHelper)` returns an `XinXRControllerMap` structure that tries to
conveniently render the current state of XR controls. (The babylonjs API for this is horrific!)

`xrControllerText(controllerMap)` renders the map output by the above in a compact form
which is useful when debugging.
*/
export function gamepadState() {
    const gamepads = navigator
        .getGamepads()
        .filter((p) => p !== null);
    return gamepads.map((p) => {
        const { id, axes, buttons } = p;
        return {
            id,
            axes,
            buttons: buttons
                .map((button, index) => {
                const { pressed, value } = button;
                return {
                    index,
                    pressed,
                    value,
                };
            })
                .filter((b) => b.pressed || b.value !== 0)
                .reduce((map, button) => {
                map[button.index] = button.value;
                return map;
            }, {}),
        };
    });
}
export function gamepadText() {
    const state = gamepadState();
    return state.length === 0
        ? 'no active gamepads'
        : state
            .map(({ id, axes, buttons }) => {
            const axesText = axes.map((a) => a.toFixed(2)).join(' ');
            const buttonText = Object.keys(buttons)
                .map((key) => `[${key}](${buttons[Number(key)].toFixed(2)})`)
                .join(' ');
            return `${id}\n${axesText}\n${buttonText}`;
        })
            .join('\n');
}
export function xrControllers(xrHelper) {
    const controllers = {};
    xrHelper.input.onControllerAddedObservable.add((controller) => {
        controller.onMotionControllerInitObservable.add((mc) => {
            const state = {};
            const componentIds = mc.getComponentIds();
            componentIds.forEach((componentId) => {
                const component = mc.getComponent(componentId);
                state[componentId] = { pressed: component.pressed };
                component.onButtonStateChangedObservable.add(() => {
                    state[componentId].pressed = component.pressed;
                });
                // TODO does this work?! inquiring minds…
                if (component.onAxisValueChangedObservable) {
                    state[componentId].axes = [];
                    component.onAxisValueChangedObservable.add((axes) => {
                        state[componentId].axes = axes;
                    });
                }
            });
            controllers[mc.handedness] = state;
        });
    });
    return controllers;
}
export function xrControllersText(controllers) {
    if (controllers === undefined || Object.keys(controllers).length === 0) {
        return 'no xr inputs';
    }
    return Object.keys(controllers)
        .map((controllerId) => {
        const state = controllers[controllerId];
        const buttonText = Object.keys(state)
            .filter((componentId) => state[componentId].pressed)
            .join(' ');
        return `${controllerId}\n${buttonText}`;
    })
        .join('\n');
}
