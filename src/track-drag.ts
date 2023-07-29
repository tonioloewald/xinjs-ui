import { elements } from 'xinjs'

type TrackerCallback = (dx: number, dy: number, event: any) => true | undefined

export const trackDrag = (
  event: any,
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
  } else if (event.type.startsWith('touch')) {
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
