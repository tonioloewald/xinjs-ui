import { elements } from 'xinjs'

type TrackerCallback = (dx: number, dy: number, event: any) => true | undefined

/*!
# trackDrag

Sometimes you want to track a mouse-drag or touch-drag operation without messing around.
This is how the resizeable columns in `<data-table>` work.

Just call `trackDrag(event, (dx, dy, event) => { ... })` and you'll get updates on corresponding events until
you return `true` from the event-handler (or, in the case of `touch` events, the last `touch` ends).
For mouse events, a "tracker" element is thrown up in front of everything for the event.

For example, this is how the `<data-table>` component tracks the user resizing a column.

```html
<p>
  Try dragging the squares…
</p>
<div class="draggable" style="top: 20px; left: 40px; background: #f008"></div>
<div class="draggable" style="left: 40%; bottom: 30%; background: #0f08"></div>
<div class="draggable" style="bottom: 30px; right: 10px; background: #00f8"></div>
```
```css
.draggable {
  content: ' ';
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: move;
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

preview.addEventListener('mousedown', dragItem)
preview.addEventListener('touchstart', dragItem, { passive: true } )
```

```
trackDrag(
  event,
  (dx, dy, event: any) => {
    const touch = isTouchEvent
      ? [...event.touches].find(
          (touch: any) => touch.identifier === touchIdentifier
        )
      : true
    if (touch === undefined) {
      return true
    }
    const width = origWidth + dx
    column.width =
      width > this.minColumnWidth ? width : this.minColumnWidth
    this.setColumnWidths()
    event.preventDefault()
    if (event.type === 'mouseup') {
      return true
    }
  },
  'col-resize'
)
```

For `touch` events, `dx` and `dy` are based on `event.touches[0]`. If you want to handle
multi-touch or specific touches, handle `event.touches` etc. yourself.
*/
export const trackDrag = (
  event: PointerEvent,
  callback: TrackerCallback,
  cursor = 'default'
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
    const origX = event.touches[0].clientX
    const origY = event.touches[0].clientY
    const target: any = event.target

    let dx = 0
    let dy = 0
    const wrappedCallback = (event: any) => {
      if (event.touches.length > 0) {
        dx = event.touches[0].clientX - origX
        dy = event.touches[0].clientY - origY
      }
      if (callback(dx, dy, event) === true || event.touches.length === 0) {
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
