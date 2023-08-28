import { elements } from 'xinjs'

type TrackerCallback = (dx: number, dy: number, event: any) => true | undefined

/*!
# trackDrag

Sometimes you want to track a mouse-drag or touch-drag operation without messing around.
This is how the resizeable columns in `<data-table>` work.

Just call `trackDrag(event, (dx, dy, event) => { ... })` and you'll get updates on corresponding events until
you return `true` from the event-handler (or, in the case of `touch` events, the last `touch` ends).
For mouse events, a "tracker" element is thrown up in front of everything for the event.

```html
<p>
  Try dragging the squares…<br>
  (You can drag them separately with multi-touch!)
</p>
<div class="draggable" style="top: 20px; left: 40px; background: #f008"></div>
<div class="draggable" style="left: 40%; bottom: 30%; background: #0f08"></div>
<div class="draggable" style="bottom: 30px; right: 10px; background: #00f8"></div>
```
```css
.preview {
  touch-action: none;
}

.draggable {
  content: ' ';
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: move;
}

.preview p {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```
```js
const { trackDrag } = xinjsui

function dragItem(event) {
  const draggable = event.target
  if (draggable.classList.contains('draggable')) {
    const x = draggable.offsetLeft
    const y = draggable.offsetTop
    trackDrag(event, (dx, dy, event) => {
      draggable.style.left = (x + dx) + 'px'
      draggable.style.top = (y + dy) + 'px'
      draggable.style.bottom = 'auto'
      draggable.style.right = 'auto'
      return event.type === 'mouseup'
    })
  }
}

preview.addEventListener('mousedown', dragItem )
preview.addEventListener('touchstart', dragItem, { passive: true } )
```

For `touch` events, `dx` and `dy` are based on tracking `event.changedTouches[0]` which
is almost certainly what you want.

To handle multi-touch gestures you will need to track the touches yourself.
*/
export const trackDrag = (
  event: PointerEvent,
  callback: TrackerCallback,
  cursor = 'move'
): void => {
  const isTouchEvent = event.type.startsWith('touch')

  if (!isTouchEvent) {
    const origX = event.clientX
    const origY = event.clientY

    const tracker = elements.div({
      style: {
        content: ' ',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        cursor,
      },
    })

    document.body.append(tracker)

    const wrappedCallback = (event: any) => {
      const dx = event.clientX - origX
      const dy = event.clientY - origY
      if (callback(dx, dy, event) === true) {
        tracker.remove()
      }
    }

    tracker.addEventListener('mousemove', wrappedCallback, { passive: true })
    tracker.addEventListener('mouseup', wrappedCallback, { passive: true })
  } else if (event instanceof TouchEvent) {
    const touch = event.changedTouches[0]
    const touchId = touch.identifier
    const origX = touch.clientX
    const origY = touch.clientY
    const target: any = event.target

    let dx = 0
    let dy = 0
    const wrappedCallback = (event: any) => {
      const touch = [...event.touches].find(
        (touch) => touch.identifier === touchId
      )
      if (touch !== undefined) {
        dx = touch.clientX - origX
        dy = touch.clientY - origY
      }
      if (callback(dx, dy, event) === true || touch === undefined) {
        target.removeEventListener('touchmove', wrappedCallback)
        target.removeEventListener('touchend', wrappedCallback)
        target.removeEventListener('touchcancel', wrappedCallback)
      }
    }

    target.addEventListener('touchmove', wrappedCallback, { passive: true })
    target.addEventListener('touchend', wrappedCallback, { passive: true })
    target.addEventListener('touchcancel', wrappedCallback, { passive: true })
  }
}
