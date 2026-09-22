/** Keeps public assets portable to GitHub Pages project sites. */
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
