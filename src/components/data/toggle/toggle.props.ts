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
   * Primary label text displayed to the right of the toggle.
   * Use the `#description` slot for richer content.
   */
  description?: string
  /**
   * Secondary hint text displayed below the description label.
   * Use the `#hint` slot for richer content.
   */
  hint?: string
  /**
   * Makes the toggle read-only (prevents toggling).
   */
  readonly?: boolean
}
