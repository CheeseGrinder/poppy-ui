import type { InjectionKey, ShallowRef } from 'vue'
import type { FieldState } from './form.types'

export interface FormContext {
  /**
   * Unified error record.
   * Global form error is stored under the `"$"` key.
   * Per-field errors are stored under their dot-notation field name/path.
   *
   * @example { '$': 'Server error', 'email': 'Invalid email', 'address.street': 'Required' }
   */
  errors: ShallowRef<Record<string, string | undefined>>

  /** Shallow reactive mirror of the form's v-model data. */
  data: Record<string, unknown>

  /**
   * Counter config — exposed as raw `boolean | undefined`.
   * `undefined` means "no opinion" — inputs resolve the final value themselves
   * via `mergeProps` in `useComponentConfig`.
   */
  counter: ShallowRef<boolean | undefined>
  counterFormat: ShallowRef<string | ((c: number, min?: number, max?: number) => string) | undefined>

  // ── Field value methods ─────────────────────────────────────────────────

  /** Sets a single field value by dot-notation path. Supports nested objects and arrays. */
  setFieldValue: (path: string, value: unknown) => void

  /** Returns the current value at a dot-notation path. */
  getFieldValue: (path: string) => unknown

  /** Replaces the entire data record and emits update:modelValue. */
  setValues: (values: Record<string, unknown>) => void

  // ── Field error methods ─────────────────────────────────────────────────

  /** Returns the error string for a path, or "$" for the global error. */
  getFieldError: (path: string) => string | undefined

  /** Sets an error on a specific field (or "$" for global). */
  setFieldError: (path: string, message: string | undefined) => void

  /**
   * Replaces the entire errors record.
   * Use "$" key for the global error.
   */
  setErrors: (errors: Record<string, string | undefined>) => void

  /**
   * Clears all errors, or a specific field's error if `path` is provided.
   * Pass `"$"` to clear only the global error.
   */
  clearErrors: (path?: string) => void

  // ── Field state methods ─────────────────────────────────────────────────

  /** Returns the full FieldState for a given path. */
  getFieldState: (path: string) => FieldState

  /** Marks a field as dirty (user has changed its value). */
  setDirty: (path: string, value?: boolean) => void

  /** Marks a field as touched (user has blurred the input). */
  setTouched: (path: string, value?: boolean) => void

  // ── Form-level methods ──────────────────────────────────────────────────

  /** Triggers validation on all registered fields. Returns true if all valid. */
  validate: () => boolean

  /** Resets data to initial values, clears all errors and field states. */
  reset: () => void

  /** Registers a field validator (called on form submit). Key must be unique per input instance. */
  registerValidator: (key: symbol, fn: () => boolean) => void

  /** Removes a previously registered field validator. */
  unregisterValidator: (key: symbol) => void
}

export const FORM_CONTEXT_KEY: InjectionKey<FormContext> = Symbol('FormContext')
