import { elements } from 'xinjs'

type TrackerCallback =
  | ((event: Event) => boolean | undefined)
  | ((event: Event) => void)

export const trackMouse = (callback: TrackerCallback, cursor: string): void => {
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
  // @ts-expect-error
  document.body.append(tracker)
  tracker.addEventListener('mousemove', (event: Event) => {
    if (callback(event) === true) {
      tracker.remove()
    }
  })
  tracker.addEventListener('mouseup', (event: Event) => {
    callback(event)
    tracker.remove()
  })
}
