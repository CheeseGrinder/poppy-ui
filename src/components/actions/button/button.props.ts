import type { ButtonHTMLAttributes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { ButtonBehavior, ButtonColor, ButtonShape, ButtonSize, ButtonVariant } from './button.types'
export interface ButtonConfigurableProps {
  /**
   * The color theme of the button based on DaisyUI palette.
   */
  color?: ButtonColor
  /**
   * The visual style of the button.
   */
  variant?: ButtonVariant
  /**
   * Specific state behavior, such as forcing an active look or a disabled state.
   */
  behavior?: ButtonBehavior
  /**
   * The size of the button ranging from xs to xl.
   *
   * @default 'md'
   */
  size?: ButtonSize
  /**
   * Defines the shape or width constraints of the button.
   */
  shape?: ButtonShape
}
/**
 * Standard HTML button attributes supported by the component.
 */
interface NativeButton {
  /**
   * HTML type attribute for the button element.
   */
  type?: ButtonHTMLAttributes['type']
  /**
   * Disables interactions and applies a desaturated visual style.
   */
  disabled?: ButtonHTMLAttributes['disabled']
  /**
   * Associates the button with a specific form ID.
   */
  form?: ButtonHTMLAttributes['form']
}
export interface ButtonProps extends ButtonConfigurableProps, NativeButton {
  /**
   * When `true`, displays a loading spinner and disables the button.
   * Supports both `boolean` and string-based `true`/`false`.
   */
  loading?: boolean
  /**
   * If provided, the component renders as a `RouterLink`.
   * Can be a string path or a RouteLocation object.
   */
  to?: RouteLocationRaw
}
