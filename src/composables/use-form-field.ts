import type { FormFieldContext } from '@/components/data/form-field/form-field.context'
import { FORM_FIELD_CONTEXT_KEY } from '@/components/data/form-field/form-field.context'
import { getValidationMessage } from '@/utils/get-validation-message'
import { type ComputedRef, computed, inject, onMounted, type Ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export interface UseFormFieldOptions {
  required: ComputedRef<boolean>
  inputEl?: Ref<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>
}

export interface UseFormFieldReturn<T> {
  /** The FormFieldContext when inside a <FormField>, null otherwise. */
  field: FormFieldContext<T> | null
  /** The current field value typed as T, or undefined when not in a FormField. */
  fieldValue: ComputedRef<T | undefined>
  /** True when the field has a server-side error set via setErrors(). */
  hasServerError: ComputedRef<boolean>
  /** Triggers HTML5 constraint validation on the input element. */
  validate: () => boolean
  /** To be called on the input's blur event — marks the field as touched. */
  onBlur: () => void
  /** Clears the current field error. */
  clearError: () => void
  /** Sets a custom validation message (delegates to el.setCustomValidity). */
  setDelegateMessage: (msg: string) => void
}

export function useFormField<T = unknown>(options: UseFormFieldOptions): UseFormFieldReturn<T> {
  const { t } = useI18n()

  const field = inject(FORM_FIELD_CONTEXT_KEY, null) as FormFieldContext<T> | null

  // Signal required state to FormField on mount and on change
  onMounted(() => {
    field?.setRequired(options.required.value)
  })

  watch(options.required, val => {
    field?.setRequired(val)
  })

  const fieldValue = computed<T | undefined>(() => field?.value.value as T | undefined)

  const hasServerError = computed<boolean>(() => {
    if (!field) return false
    const state = field.state.value
    return state.hasError && !state.isDirty
  })

  function validate(): boolean {
    const el = options.inputEl?.value
    if (!el || !field) return true

    const message = getValidationMessage(el, t)
    field.setError(message ?? undefined)
    return !message
  }

  function onBlur(): void {
    field?.setTouched(true)
    validate()
  }

  function clearError(): void {
    field?.setError(undefined)
  }

  function setDelegateMessage(msg: string): void {
    const el = options.inputEl?.value
    if (!el) return
    el.setCustomValidity(msg)
  }

  return {
    field,
    fieldValue,
    hasServerError,
    validate,
    onBlur,
    clearError,
    setDelegateMessage,
  }
}
