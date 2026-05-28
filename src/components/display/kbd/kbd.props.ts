import type { KbdSize } from './kbd.types'

export interface KbdConfigurableProps {
  /**
   * Size of the keyboard key.
   *
   * @default 'md'
   */
  size?: KbdSize
}

export interface KbdProps extends KbdConfigurableProps {}
