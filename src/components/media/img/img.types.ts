export type ImgFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
export type ImgRounded = 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
export type ImgAspect = 'auto' | 'square' | 'video' | (string & {})

export interface ImgSource {
  /**
   * One or more image candidates, forwarded directly to the `<source srcset>` attribute.
   *
   * Accepts the same syntax as the native `srcset`:
   * - Width descriptors: `'image-400.webp 400w, image-800.webp 800w'`
   * - Pixel-density descriptors: `'image.webp 1x, image@2x.webp 2x'`
   * - A single URL with no descriptor: `'image.webp'`
   */
  srcset: string

  /**
   * Media condition that must match for this source to be selected, forwarded to `<source media>`.
   *
   * Uses standard CSS media query syntax:
   * - `'(max-width: 640px)'` — mobile
   * - `'(min-width: 641px) and (max-width: 1024px)'` — tablet
   * - `'(prefers-color-scheme: dark)'` — dark mode
   *
   * When omitted, this source acts as a format fallback (evaluated after all media-matched sources).
   */
  media?: string

  /**
   * MIME type hint for the source, forwarded to `<source type>`.
   * Allows the browser to skip sources whose format it does not support without fetching them.
   *
   * Common values: `'image/webp'`, `'image/avif'`, `'image/png'`, `'image/jpeg'`
   */
  type?: string
}
