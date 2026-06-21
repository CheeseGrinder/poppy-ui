import type { ImgAspect, ImgFit, ImgRounded, ImgSource } from './img.types'

export interface ImgConfigurableProps {
  /**
   * How the image should be sized within its container.
   * Maps to Tailwind `object-*` utilities.
   */
  fit?: ImgFit

  /**
   * Border radius applied to the image container.
   * Maps to Tailwind `rounded-*` utilities.
   */
  rounded?: ImgRounded

  /**
   * Show a skeleton placeholder while the image is loading.
   *
   * @default true
   */
  skeleton?: boolean

  /**
   * IntersectionObserver threshold — fraction of the element visible before loading starts.
   *
   * @default 0
   */
  threshold?: number

  /**
   * IntersectionObserver rootMargin — start loading before the image enters the viewport.
   *
   * @default '200px'
   */
  rootMargin?: string
}

export interface ImgProps extends ImgConfigurableProps {
  /**
   * Image source URL.
   */
  src: string

  /**
   * Accessible alt text forwarded to the `<img>` element.
   */
  alt: string

  /**
   * Fallback source URL shown when the primary image fails to load.
   * If the fallback also fails, the `fallback` slot is rendered instead.
   */
  fallbackSrc?: string

  /**
   * Art-direction sources rendered as `<source>` elements inside a `<picture>`.
   * Each entry maps to `srcset`, optional `media`, and optional `type`.
   */
  sources?: ImgSource[]

  /**
   * Intrinsic width forwarded to `<img>` to prevent layout shift (CLS).
   */
  width?: number | string

  /**
   * Intrinsic height forwarded to `<img>` to prevent layout shift (CLS).
   */
  height?: number | string

  /**
   * Forced aspect ratio of the image container.
   * - `'auto'` — no constraint
   * - `'square'` — 1:1
   * - `'video'` — 16:9
   * - any string like `'4/3'`, `'3/2'` — applied as inline `aspect-ratio` style
   *
   * @default 'auto'
   */
  aspect?: ImgAspect

  /**
   * When `true`, loads the image immediately without waiting for it to enter the viewport.
   *
   * @default false
   */
  eager?: boolean
}
