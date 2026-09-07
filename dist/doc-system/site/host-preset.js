/*
Does an EXISTING host config actually serve what we just built? (tosijs-ui#134)

`host: 'firebase'` scaffolds a `firebase.json` for a fresh project and — correctly — keeps its
hands off an existing one. The gap was that it then checked nothing: if `hosting.public` names
a different directory than `outputDir`, `buildSite` writes one place and `firebase deploy`
publishes another. Both commands succeed. The site goes live serving whatever was in that
directory last.

Reported by tjs-lang, whose `firebase.json` says `"public": ".demo"` against a default
`outputDir` of `docs`. They had already been bitten by the sibling of this — Cloud Functions
running an eight-releases-old `tjs-lang` for months, because publishing to npm and deploying to
Firebase are separate acts and nothing compared them.

Pure, because the shape has more edge cases than it looks:

  - `hosting` may be an OBJECT or an ARRAY (multi-site projects).
  - `public` may be ABSENT — framework-aware hosting uses `source` instead, and comparing
    against a directory we did not build would be a false positive.
  - paths may be spelled `./docs`, `docs`, or `docs/`.

A false alarm here is worse than the silence it replaces: it would fire on every build of a
correctly-configured multi-site project, and the first thing anyone does with a warning that is
usually wrong is stop reading warnings.
*/
/** Normalise a config path for comparison: `./docs/` and `docs` are the same directory. */
const normalizeDir = (p) => p.replace(/^\.\//, '').replace(/\/+$/, '');
/**
 * `null` when there is nothing to complain about — which includes "cannot tell".
 *
 * Returns a mismatch only when EVERY declared `public` disagrees with `outputDir`. A
 * multi-site config that serves the built directory from any of its targets is fine.
 */
export function firebasePublicMismatch(firebaseJson, outputDir) {
    let parsed;
    try {
        parsed = JSON.parse(firebaseJson);
    }
    catch {
        return null; // not ours to diagnose; `firebase` itself will complain
    }
    const hosting = parsed?.hosting;
    if (!hosting)
        return null;
    const entries = Array.isArray(hosting) ? hosting : [hosting];
    const declared = entries
        .map((h) => h?.public)
        .filter((p) => typeof p === 'string');
    // No `public` anywhere — framework-aware hosting, or a config we do not understand.
    if (declared.length === 0)
        return null;
    const built = normalizeDir(outputDir);
    if (declared.some((p) => normalizeDir(p) === built))
        return null;
    return { declared, built };
}
/**
 * `baseUrl` is the ORIGIN; `basePath` is the mount path. Supplying the path in BOTH is
 * always wrong and always silent: `generate-site` emits `baseUrl + withBase(basePath, …)`,
 * so every canonical URL, `og:url` and sitemap entry carries the prefix twice.
 *
 * Nothing fails — `basePath` affects metadata only (#25), so the site builds, serves and
 * navigates correctly with assets resolving relative. You find it by reading the emitted
 * `<head>`, or from Search Console. The reporter's shipped to GitHub Pages first (#144).
 *
 * Warns rather than throws: the emitted site is usable, and refusing to build over a
 * metadata defect would be disproportionate. But it names the exact fix, because "these two
 * fields overlap" is not something a reader can act on.
 */
export function basePathDoubling(config) {
    const { baseUrl, basePath } = config;
    if (!baseUrl || !basePath || basePath === '/')
        return undefined;
    let pathname;
    try {
        pathname = new URL(baseUrl).pathname;
    }
    catch {
        return undefined; // not our business — a malformed baseUrl fails louder elsewhere
    }
    const urlPath = pathname.replace(/\/$/, '');
    if (!urlPath)
        return undefined;
    return (`baseUrl and basePath both carry a path, so every canonical URL, og:url and sitemap ` +
        `entry will repeat it:\n` +
        `    baseUrl:  ${baseUrl}\n` +
        `    basePath: ${basePath}\n` +
        `    result:   ${baseUrl.replace(/\/$/, '')}${basePath.startsWith('/') ? basePath : '/' + basePath}…\n` +
        `  baseUrl must be the ORIGIN ONLY — drop "${urlPath}" from it and keep basePath, ` +
        `or drop basePath. The site will still work either way; only its metadata is wrong.`);
}
/**
 * Does a custom `bundleEntry` bundle actually contain the doc system?
 *
 * `bundleEntry` REPLACES tosijs-ui's bundle rather than extending it, so an entry that
 * imports only the adopter's own library produces a site where every page renders its
 * prerendered markup and nothing else: no header, no nav, no menu, no live examples. Nothing
 * fails — `docs.json`, `hydrate.js` and the HTML all serve 200, `<tosi-doc-system>` is
 * present in the markup, and the adopter's own `customElements.get('their-element')` returns
 * true, so the bundle looks healthy. It is inert because nothing defined `tosi-doc-system`
 * (tosijs-ui#145; cost the reporter more than any other onboarding problem).
 *
 * Checked by looking for the tag names in the built output, which survives minification
 * because `customElements.define` needs the literal string. This is the one case where
 * grepping a bundle is sound — we are looking for a STRING the runtime must contain, not for
 * a package path that minification erases.
 *
 * `liveExample` is reported separately: a corpus with no executable fences legitimately does
 * not need it, so the caller decides whether its absence is worth mentioning.
 */
export function bundleRegistrations(bundleSource) {
    return {
        docSystem: bundleSource.includes('tosi-doc-system'),
        liveExample: bundleSource.includes('tosi-example'),
    };
}
