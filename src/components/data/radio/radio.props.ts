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
   * Primary label text displayed to the right of the radio.
   * Use the `#description` slot for richer content.
   */
  description?: string

  /**
   * Secondary hint text displayed below the description label.
   * Use the `#hint` slot for richer content.
   */
  hint?: string
}
