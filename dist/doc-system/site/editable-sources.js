/*
WHICH files `editableSources` may touch (tosijs-ui#128).

Containment was `resolveInRepo` — anywhere under the project root. That is the whole repo,
including `.git/hooks/*`, `bunfig.toml` (preload), `package.json` scripts and `bin/`, every one
of which executes on the developer's next ordinary command.

With the CSRF hole closed (#90/#121) there is no known path to an unauthorised write, so this
is hardening rather than a live hole. It is worth doing anyway, because the gap between what a
feature NEEDS and what it CAN do is where the next authorisation slip becomes code execution
instead of a bad doc edit.

An ALLOW-list, not a deny-list, and derived rather than maintained: the endpoint exists to edit
the source of a page you are looking at, so the writable set is exactly the files the doc
extractor scraped — which the corpus already records as each doc's `path`. A deny-list of
dangerous names would need updating every time someone invents a new way to execute a file, and
would be wrong by default; this is right by default and needs no maintenance.

FAILS CLOSED. An unreadable or empty corpus permits nothing. A write endpoint that opens up
when it cannot see is the failure this is meant to prevent, not a convenience to preserve.
*/
import * as path from 'path';
/*
Files the BUILD EXECUTES, which must never be writable however they are documented.

The corpus-derived allow-list was necessary and not sufficient: a doc source can itself be an
executed script. Found by the 1.14.0 review against the REAL corpus —
`bin/make-icon-data.js` carries a `/*#` block, so it was a doc source, so it was writable, and
`bin/dev.ts` spawns it on every build and every watch rebuild. A session holder could write
arbitrary JS there and have it run with the developer's privileges at the next rebuild — which
is verbatim the class the allow-list was introduced to close.

The unit tests passed because the synthetic corpus omitted `bin/`; the live check used
`.git/hooks/pre-commit`, which the corpus never contained. Both proved something true and
irrelevant.

The `-cli` scripts under src and `generate-css` are spawned as children too. They are absent from the
corpus today — but only because nobody has written a `/*#` block in them, which is not a
guarantee. Named explicitly so the protection does not depend on that continuing.

The cost, stated: the doc comments inside these files cannot be edited through the browser.
Editing a doc comment in an executed script means writing an executed script, and there is no
version of that which is safe. Edit them directly.
*/
const EXECUTED_BY_BUILD = [
    /^bin\//,
    /(^|\/)[a-z0-9-]+-cli\.[tj]s$/,
    /(^|\/)generate-css\.[tj]s$/,
    /(^|\/)make-icon-data\.[tj]s$/,
];
/** Is this repo-relative path something the build runs? */
export function isExecutedByBuild(relPath) {
    const normalized = relPath.replace(/^\.\//, '');
    return EXECUTED_BY_BUILD.some((re) => re.test(normalized));
}
/** Absolute paths the source editor may read or write, from the doc corpus. */
export function editableSourcePaths(corpus, projectRoot) {
    const allowed = new Set();
    if (!Array.isArray(corpus))
        return allowed;
    for (const doc of corpus) {
        if (!doc || typeof doc.path !== 'string' || doc.path === '')
            continue;
        const resolved = path.resolve(projectRoot, doc.path.replace(/^\/+/, ''));
        // A corpus entry escaping the root is not a reason to widen the set.
        if (resolved === projectRoot ||
            !resolved.startsWith(projectRoot + path.sep)) {
            continue;
        }
        // A doc source that the build EXECUTES is not editable, however well documented.
        if (isExecutedByBuild(doc.path.replace(/^\/+/, '')))
            continue;
        allowed.add(resolved);
    }
    return allowed;
}
/**
 * May the editor touch this resolved path?
 *
 * Takes the already-root-confined path, so this is the SECOND gate rather than a replacement
 * for the first — `resolveInRepo` still runs, and a path that escapes the root never reaches
 * here.
 */
export function mayEditSource(resolved, allowed) {
    return resolved !== null && allowed.has(resolved);
}
