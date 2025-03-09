/*!
# lottie / bodymovin

A [lottie](https://airbnb.io/lottie/#/web) (a.k.a. **bodymovin**) player.

It's designed to work like an `<img>` element (just set its `src` attribute).

```js
const { xinProxy } = xinjs
const { icons, popFloat } = xinjsui
const { div, label, input, select, option, span } = xinjs.elements

const rocket = preview.querySelector('xin-lottie')
setTimeout(
  () => {
 preview.append(
   popFloat({
     content: [
       { class: 'panel', drag: true },
       div({ class: 'panel-header' }, 'Player Controls' ),
       label(
         { class: 'no-drag' },
         'speed',
         input({ type: 'range', min: -1, max: 1, step: 0.1, value: 0, onInput(event) {
           const speed = Math.pow(5, Number(event.target.value))
           rocket.animation.setSpeed(speed)
           event.target.nextSibling.textContent = (speed * 100).toFixed(0) + '%'
         } }),
         span('100%', {style: { textAlign: 'right', width: '40px'}})
       ),
       label(
         { class: 'no-drag' },
         'direction',
         select(
           option('Forwards', {value: 1, selected: true}),
           option('Backwards', {value: -1}),
           {
             onChange(event) {
               rocket.animation.setDirection(event.target.value)
             }
           }
         ),
         icons.chevronDown(),
       )
     ],
     target: rocket,
     position: 's'
   })
 )
  },
  500
)
```
```html
<xin-lottie
  style="height: 100%; max-width: 100%"
  src="88140-rocket-livetrade.json"
></xin-lottie>
<div class="caption">
  Animation by <a target="_blank" href="https://lottiefiles.com/dvskjbicfc">chiến lê hồng</a>
</div>
```
```css
.preview {
  padding: var(--spacing);
  text-align: center;
}

.preview .panel {
  padding: 10px;
  border-radius: 5px;
  gap: 5px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.preview .caption {
  position: absolute;
  right: 5px;
  bottom: 5px;
}

.preview .panel-header {
  margin: 0;
  text-align: center;
  font-weight: bold;
  background: var(--brand-color);
  color: white;
  padding: 5px;
  margin: -10px -10px 0 -10px;
  cursor: move;
}
```

You can also directly set its `json` property to the content of a `lottie.json` file.

And of course just access the element's `animation` property to [use the bodymovin API](https://airbnb.io/lottie/#/web).

Also see the [documentation for advanced interactions](https://lottiefiles.github.io/lottie-docs/advanced_interactions/)
*/
import { Component as WebComponent, ElementCreator } from 'xinjs';
export interface LottieConfig {
    container?: HTMLElement | ShadowRoot;
    renderer: 'svg' | 'canvas' | 'html';
    loop: boolean;
    autoplay: boolean;
    animationData?: string;
    path?: string;
    [key: string]: any;
}
export declare class BodymovinPlayer extends WebComponent {
    content: any;
    src: string;
    json: string;
    config: LottieConfig;
    static bodymovinAvailable?: Promise<any>;
    animation: any;
    static styleSpec: {
        ':host': {
            width: number;
            height: number;
            display: string;
        };
    };
    private _loading;
    get loading(): boolean;
    constructor();
    private readonly doneLoading;
    private readonly load;
    render(): void;
}
export declare const bodymovinPlayer: ElementCreator<BodymovinPlayer>;
