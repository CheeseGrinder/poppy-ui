import type { CardSize, CardVariant } from './card.types'
export interface CardConfigurableProps {
  /**
   * Visual style of the card.
   * - `'border'`: Adds a visible border around the card.
   * - `'dash'`: Adds a dashed border around the card.
   */
  variant?: CardVariant
  /**
   * Size of the card.
   *
   * @default 'md'
   */
  size?: CardSize
}
export interface CardProps extends CardConfigurableProps {
  /**
   * When `true`, The image in `<figure>` will be on to the side
   *
   * @default false
   */
  side?: boolean
  /**
   * When `true`, the image in `<figure>` element will be the background
   *
   * @default false
   */
  imageFull?: boolean
}
