interface KeyboardEventLike {
  key: string
  ctrlKey: boolean
  metaKey: boolean
  altKey: boolean
  shiftKey: boolean
}

export const matchShortcut = (
  keystroke: KeyboardEventLike,
  shortcut: string
): boolean => {
  shortcut = shortcut.toLocaleLowerCase()
  const ctrlKey = !!shortcut.match(/\^|ctrl/)
  const metaKey = !!shortcut.match(/⌘|meta/)
  const altKey = !!shortcut.match(/⌥|⎇|alt|option/)
  const shiftKey = !!shortcut.match(/⇧|shift/)
  const baseKey = shortcut.slice(-1)

  return (
    keystroke.key === baseKey &&
    keystroke.metaKey === metaKey &&
    keystroke.ctrlKey === ctrlKey &&
    keystroke.altKey === altKey &&
    keystroke.shiftKey === shiftKey
  )
}
