/** Join base + segments into a clean URL
 * - If base is absolute URL → return absolute
 * - If base is empty/null/undefined → return relative path
 * - Handles slash trimming and edge cases
 */
export function joinUrl(base: string | null | undefined, ...segments: (string | null | undefined)[]): string {
  base = base?.trim() ?? '';
  const isAbsUrl = /^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(base) || base.startsWith('//');

  if (!base) {
    return segments
      .filter(Boolean)
      .map(s => s!.replace(/^\/+|\/+$/g, ''))
      .join('/');
  }

  if (isAbsUrl) {
    const withSlash = base.endsWith('/') ? base : base + '/';
    let url = new URL(withSlash);
    for (const s of segments) {
      const clean = (s ?? '').replace(/^\/+/, '');
      url = new URL(clean, url);
    }
    return url.href.replace(/\/+$/, '');
  }

  const parts = [base, ...segments]
    .filter(Boolean)
    .map(s => (s ?? '').replace(/^\/+|\/+$/g, ''));

  let joined = parts.join('/');
  if (base.startsWith('/')) joined = '/' + joined;
  return joined;
}
