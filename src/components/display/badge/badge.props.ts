import type { BadgeColor, BadgeSize, BadgeVariant } from './badge.types'

export interface BadgeConfigurableProps {
  /**
   * Color theme of the badge based on the DaisyUI palette.
   */
  color?: BadgeColor

  /**
   * Visual style of the badge.
   */
  variant?: BadgeVariant

  /**
   * Size of the badge.
   *
   * @default 'md'
   */
  size?: BadgeSize
}

export interface BadgeProps extends BadgeConfigurableProps {}