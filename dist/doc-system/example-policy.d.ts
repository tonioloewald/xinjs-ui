/** Fence languages that EXECUTE. Everything else is display-only. */
export declare const EXECUTABLE_LANGS: Set<string>;
export type ExamplePolicy = 'auto' | 'opt-in';
/**
 * Will this fence become a live example?
 *
 * @param lang  the fence language, lowercased (`js`, `html`, `typescript`, …)
 * @param mode  the `:<mode>` suffix, if any (`inline` | `iframe` | `ide` | `static`)
 * @param policy `'auto'` (executables run) or `'opt-in'` (only fences that ask)
 */
export declare function isLiveFence(lang: string, mode: string | undefined, policy?: ExamplePolicy): boolean;
