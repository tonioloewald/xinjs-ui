/*!
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
export interface XinButton {
    index: number;
    pressed: boolean;
    value: number;
}
export interface XinGamepad {
    id: string;
    axes: number[];
    buttons: {
        [key: number]: number;
    };
}
export declare function gamepadState(): {
    id: string;
    axes: readonly number[];
    buttons: {
        [key: number]: number;
    };
}[];
export declare function gamepadText(): string;
export interface XinXRControllerComponentState {
    pressed: boolean;
    axes?: number[];
}
export interface XinXRControllerState {
    [key: string]: XinXRControllerComponentState;
}
export interface XinXRControllerMap {
    [key: string]: XinXRControllerState;
}
export declare function xrControllers(xrHelper: any): {
    [key: string]: XinXRControllerState;
};
export declare function xrControllersText(controllers?: XinXRControllerMap): string;
