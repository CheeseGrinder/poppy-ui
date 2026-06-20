import type { CounterFn } from '@/types/utils.type'
import type { FormSerializer } from './form.types'

export interface FormConfigurableProps {
  /**
   * Propagates a counter display to all child inputs that support it.
   * Can be overridden at FormField or input level.
   *
   * @default false
   */
  counter?: boolean

  /**
   * Default counter format applied to all child inputs.
   * Can be overridden at FormField or input level.
   *
   * @default (current, min, max) => `${current} / ${max}`
   */
  counterFormat?: string | CounterFn
}

export interface FormProps extends FormConfigurableProps {
  /**
   * Transforms the form data before it is passed to the `submit` event.
   * If not provided, the raw data object is emitted as-is.
   *
   * @example (data) => ({ ...data, createdAt: new Date().toISOString() })
   */
  serializer?: FormSerializer
}
