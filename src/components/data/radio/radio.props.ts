import type { InputHTMLAttributes } from 'vue'
import type { RadioColor, RadioSize } from './radio.types'

export interface RadioConfigurableProps {
  /**
   * Color of the radio button.
   */
  color?: RadioColor

  /**
   * Size of the radio button.
   *
   * @default 'md'
   */
  size?: RadioSize
}

interface NativeRadio {
  /**
   * Disables the radio button.
   */
  disabled?: InputHTMLAttributes['disabled']

  /**
   * Marks the field as required.
   */
  required?: InputHTMLAttributes['required']

  /**
   * Groups radio buttons together natively. Inferred from FormField name if omitted.
   */
  name?: InputHTMLAttributes['name']
}

export interface RadioProps extends RadioConfigurableProps, NativeRadio {
  /**
   * The value this radio represents.
   * The radio is checked when `modelValue === value`.
   */
  value: string | number | boolean

  /**
   * Description text displayed next to the radio.
   */
  description?: string
}
