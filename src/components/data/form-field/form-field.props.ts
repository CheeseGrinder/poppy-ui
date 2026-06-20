import type { CounterFn } from '@/types/utils.type'

export interface FormFieldConfigurableProps {
  /**
   * Overrides the counter setting inherited from `<Form>`.
   */
  counter?: boolean

  /**
   * Overrides the counter format inherited from `<Form>`.
   */
  counterFormat?: string | CounterFn
}

export interface FormFieldProps extends FormFieldConfigurableProps {
  /**
   * Field name or dot-notation path mapping to the parent Form's data.
   *
   * @example 'email'
   * @example 'address.street'
   * @example 'tags.0'
   */
  name: string

  /**
   * Label text rendered as the fieldset legend above the field.
   */
  label?: string

  /**
   * Helper text displayed below the field (hidden when an error is active).
   */
  hint?: string

  /**
   * When true, wraps the field in a `floating-label` layout so the label
   * floats above the input when focused or filled.
   *
   * @default false
   */
  floating?: boolean
}
