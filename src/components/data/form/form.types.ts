/**
 * Full state for a single registered field in the form.
 */
export interface FieldState {
  /** Current value. */
  value: unknown
  /** True after the user has changed the value at least once. */
  isDirty: boolean
  /** True after the input has lost focus at least once. */
  isTouched: boolean
  /** True when the field has no active error. */
  isValid: boolean
  /** True when there is an active error string. */
  hasError: boolean
  /** The current error string, or undefined. */
  error: string | undefined
}

/**
 * Transforms the raw form data before it is emitted in the submit event.
 * Use to parse, rename, or restructure fields.
 *
 * @example (data) => ({ ...data, age: Number(data.age) })
 */
export type FormSerializer<T = Record<string, unknown>> = (data: Record<string, unknown>) => T
