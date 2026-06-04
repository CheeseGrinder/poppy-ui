import type { InputHTMLAttributes } from 'vue'
import type { ToggleColor, ToggleSize } from './toggle.types'

export interface ToggleConfigurableProps {
  /**
   * Color of the toggle.
   */
  color?: ToggleColor

  /**
   * Size of the toggle.
   *
   * @default 'md'
   */
  size?: ToggleSize
}

interface NativeToggle {
  /** Disables the toggle. */
  disabled?: InputHTMLAttributes['disabled']
  /** Marks the field as required — signals FormField to display "*". */
  required?: InputHTMLAttributes['required']
}

export interface ToggleProps extends ToggleConfigurableProps, NativeToggle {
  /**
   * Secondary description displayed next to the toggle.
   */
  description?: string
}
