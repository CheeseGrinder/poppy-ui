import type { CarouselDirection, CarouselSnap } from './carousel.types'
export interface CarouselConfigurableProps {
  /**
   * Direction of the carousel.
   * - `'horizontal'`: Slides move left/right.
   * - `'vertical'`: Slides move up/down.
   *
   * @default 'horizontal'
   */
  direction?: CarouselDirection
  /**
   * Snap alignment for carousel items.
   * - `'start'`: Snap elements to start.
   * - `'center'`: Snap elements to center.
   * - `'end'`: Snap elements to end.
   *
   * @default 'start'
   */
  snap?: CarouselSnap
  /**
   * When `true`, shows carousel indicators.
   *
   * @default false
   */
  indicators?: boolean
  /**
   * When `true`, shows prev/next navigation controls.
   *
   * @default false
   */
  controls?: boolean
  /**
   * When `true`, enables autoplay.
   *
   * @default false
   */
  autoplay?: boolean
  /**
   * Autoplay interval in milliseconds.
   *
   * @default 3000
   */
  interval?: number
}
export interface CarouselProps extends CarouselConfigurableProps {
  /**
   * Index of the initial slide.
   * @default 0
   */
  initialIndex?: number
}
