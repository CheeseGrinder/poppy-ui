import { createComponentConfigKey } from '@/config/symbol'
import type { ComputedRef, InjectionKey, ShallowRef } from 'vue'
import type { FieldState } from '../form/form.types'

export interface FormFieldContext<T = unknown> {
  /** Field name / dot-notation path — matches FormContext data keys. */
  name: string

  /**
   * Whether the child input is required.
   * Set by child inputs calling `setRequired()` on mount and on change.
   * Drives the "*" indicator on the FormField label.
   */
  required: ShallowRef<boolean>

  /** Current field value resolved from FormContext. */
  value: ComputedRef<T>

  /** Current field error resolved from FormContext. */
  error: ComputedRef<string | undefined>

  /** Current FieldState resolved from FormContext. */
  state: ComputedRef<FieldState>

  /**
   * Counter config — raw `boolean | undefined`.
   * `undefined` = no opinion; the input resolves final value via `mergeProps`.
   */
  counter: ShallowRef<boolean | undefined>
  counterFormat: ShallowRef<string | ((c: number, min?: number, max?: number) => string) | undefined>

  /**
   * Counter display — pushed up by child inputs so FormField can render
   * the counter on the same line as the error/hint.
   */
  counterText: ShallowRef<string>
  counterColor: ShallowRef<string>

  /** Updates the field value in FormContext. */
  setValue: (value: unknown) => void

  /** Called by child inputs to declare themselves required or not. */
  setRequired: (value: boolean) => void

  /** Marks the field dirty in FormContext. */
  setDirty: (value?: boolean) => void

  /** Marks the field touched in FormContext. */
  setTouched: (value?: boolean) => void

  /** Sets the field error in FormContext. */
  setError: (message: string | undefined) => void

  /** Called by child inputs to push counter text/color up to FormField for rendering. */
  setCounterText: (text: string, colorClass: string) => void
}

export const FORM_FIELD_CONTEXT_KEY: InjectionKey<FormFieldContext> = Symbol('FormFieldContext')

// Config key for global FormField plugin config
export const FORM_FIELD_CONFIG = createComponentConfigKey('formField')
