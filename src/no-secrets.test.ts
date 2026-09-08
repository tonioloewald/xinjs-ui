import { test, expect } from 'bun:test'
import { readdirSync, readFileSync, statSync } from 'fs'
import { join } from 'path'

/*
No credential-shaped string in shipped source (#145).

A real Mapbox `pk.` token sat in two `<tosi-map>` doc examples for years. Public tokens are
meant to be visible in client code, so nothing about it looked wrong — but a doc example is
compiled into `dist/`, inlined into `iife.js`, and lands in every adopter's sourcemap. Three
consequences, none of which is "a secret leaked":

  - it billed its owner for every adopter's map tiles;
  - it matches Mapbox's published secret pattern, so **GitHub push protection blocked
    adopters** the first time they committed their built site — a wall with someone else's
    name on it;
  - nobody could tell whether it was live or a placeholder without decoding it.

The rule this encodes is narrow and mechanical: a doc example may DESCRIBE a credential, and
must not CONTAIN one in a form a scanner will match.

WHAT THIS CANNOT SEE, stated plainly so the guard is not mistaken for more than it is: any
value that is encoded. `src/mapbox.ts` deliberately base64s its demo token and this test passes
over it. That is intentional and it is documented at the site — the token is PUBLIC by design
(Mapbox's own docs say to put it in client-side JS), so the encoding exists to dodge a false
positive, not to hide anything.

Which means this guard catches ACCIDENT, not INTENT. It is worth having anyway: every instance
it has caught was an accident, and a real credential does not belong in a repo at any encoding.
But do not read a pass here as "no secrets in the tree" — read it as "nothing credential-shaped
was left lying around in plaintext".
*/

const SECRET_PATTERNS: Array<{ name: string; re: RegExp }> = [
  // Mapbox public/secret tokens: pk./sk. + base64url payload + signature.
  {
    name: 'Mapbox token',
    re: /\b[ps]k\.eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/,
  },
  { name: 'AWS access key id', re: /\bAKIA[0-9A-Z]{16}\b/ },
  { name: 'GitHub token', re: /\bgh[pousr]_[A-Za-z0-9]{36,}\b/ },
  { name: 'Google API key', re: /\bAIza[0-9A-Za-z_-]{35}\b/ },
  { name: 'Slack token', re: /\bxox[abposr]-[0-9A-Za-z-]{10,}/ },
  {
    name: 'private key block',
    re: /-----BEGIN (?:RSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/,
  },
]

function sourceFiles(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) sourceFiles(full, out)
    else if (
      /\.(ts|js|md|html|css)$/.test(entry) &&
      !full.endsWith('no-secrets.test.ts')
    )
      out.push(full)
  }
  return out
}

test('#145: no credential-shaped string in src/', () => {
  const root = join(import.meta.dir)
  const hits: string[] = []
  for (const file of sourceFiles(root)) {
    const text = readFileSync(file, 'utf8')
    for (const { name, re } of SECRET_PATTERNS) {
      const m = text.match(re)
      if (m)
        hits.push(
          `${file.replace(root, 'src')}: ${name} — ${m[0].slice(0, 24)}…`
        )
    }
  }
  expect(
    hits,
    `credential-shaped strings in shipped source. A doc example may DESCRIBE a credential ` +
      `but must not CONTAIN one — it compiles into dist/, inlines into iife.js, and reaches ` +
      `every adopter's sourcemap (and their push protection). Use a placeholder:\n` +
      hits.join('\n')
  ).toEqual([])
})
