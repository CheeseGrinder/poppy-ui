import type { InputHTMLAttributes } from 'vue'
import type { CheckboxColor, CheckboxSize } from './checkbox.types'
export interface CheckboxConfigurableProps {
  /**
   * Color of the checkbox.
   */
  color?: CheckboxColor
  /**
   * Size of the checkbox.
   *
   * @default 'md'
   */
  size?: CheckboxSize
}
interface NativeCheckbox {
  /** Disables the checkbox. */
  disabled?: InputHTMLAttributes['disabled']
  /** Marks the field as required — signals FormField to display "*". */
  required?: InputHTMLAttributes['required']
}
export interface CheckboxProps extends CheckboxConfigurableProps, NativeCheckbox {
  /**
   * Renders the checkbox in an indeterminate visual state.
   *
   * @default false
   */
  indeterminate?: boolean
  /**
   * Primary label text displayed to the right of the checkbox.
   * Use the `#description` slot for richer content.
   */
  description?: string
  /**
   * Secondary hint text displayed below the description label.
   * Use the `#hint` slot for richer content.
   */
  hint?: string
  /**
   * Makes the checkbox read-only (prevents toggling).
   */
  readonly?: boolean
}
