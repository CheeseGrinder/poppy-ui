import type { AlertColor, AlertDirection, AlertVariant } from './alert.types'

export interface AlertConfigurableProps {
  /**
   * Color theme of the alert.
   * - `'info'`: Informational message.
   * - `'success'`: Success message.
   * - `'warning'`: Warning message.
   * - `'error'`: Error message.
   */
  color?: AlertColor

  /**
   * Visual style of the alert.
   * - `'outline'`: Border only.
   * - `'dash'`: Dashed border.
   * - `'soft'`: Soft background tint.
   */
  variant?: AlertVariant

  /**
   * Layout direction of the alert content.
   * - `'horizontal'`: Icon and content side by side.
   * - `'vertical'`: Icon and content stacked.
   */
  direction?: AlertDirection
}

export interface AlertProps extends AlertConfigurableProps {}