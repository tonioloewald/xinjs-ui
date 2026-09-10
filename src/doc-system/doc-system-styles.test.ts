import { test, expect, describe } from 'bun:test'
import { docSystemStyleSpec } from './doc-system-styles.js'

describe('#150: no rule POISONS a global palette token', () => {
  test('`--text-color` is redefined only by rules that own a background', () => {
    /*
    `button, select, .clickable { --text-color: var(--brand-color) }` redefined the token the
    whole palette derives from (`--tosi-text: var(--text-color)`), so from any button downward
    it meant the brand colour. An embedded editor deriving its chrome from the page got
    unreadable toolbar icons — oklab L≈0.27 on an L 0.16 bar — with correct body text beside
    them. `pre, code` did the same, which put every syntax-token span in a poisoned palette.

    The distinction is not "which selectors are allowed" but WHY:

      - a rule that sets its own `background` establishes a palette SCOPE. `header` is brand
        coloured, so its contents genuinely need the matching text colour and should inherit
        it. That is correct and must keep working.
      - a rule that only wants to colour ITSELF should set `color`. Redefining an inherited
        token there poisons the subtree for every consumer of it, while looking like an
        ordinary style rule.

    Encoded as the rule rather than an allowlist, so a new inverted region passes on its
    merits and a new `button`-shaped mistake does not.
    */
    const spec = docSystemStyleSpec()
    const offenders: string[] = []
    for (const [selector, rules] of Object.entries(spec)) {
      if (typeof rules !== 'object' || rules === null) continue
      const r = rules as Record<string, unknown>
      if (!('_textColor' in r)) continue
      // Palette scopes: the document root, the host, and the dark-mode recomputation.
      if (/^(:root|:host|html|body|@|\.darkmode)/.test(selector)) continue
      // A rule that owns a background is establishing a scope, not poisoning one.
      if ('background' in r || 'backgroundColor' in r) continue
      offenders.push(selector)
    }
    expect(
      offenders,
      'these redefine --text-color without owning a background, so they poison the subtree ' +
        'for every consumer of the token. Set `color` instead.'
    ).toEqual([])
  })
})
