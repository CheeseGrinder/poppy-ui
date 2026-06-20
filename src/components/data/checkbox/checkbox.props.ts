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
   * Secondary description displayed below the checkbox.
   */
  description?: string
}
