import type { FormFieldContext } from '@/components/data/form-field/form-field.context'
import { FORM_FIELD_CONTEXT_KEY } from '@/components/data/form-field/form-field.context'
import {
  createFallbackValidationTranslator,
  getValidationMessage,
  type ValidationTranslator,
} from '@/utils/get-validation-message'
import * as Vue from 'vue'
import { type ComputedRef, computed, inject, onMounted, onUnmounted, type Ref, shallowRef, watch } from 'vue'

/**
 * `withAsyncContext` preserves the active component instance across an
 * `await`, so a composable relying on `getCurrentInstance()` (e.g.
 * `useI18n()`) can still be called after a dynamic `import()`. It's exported
 * at runtime since Vue 3.3 (the `<script setup>` compiler uses it for
 * top-level await) but missing from this Vue version's public type
 * declarations — module augmentation can't add it (`vue`'s types re-export
 * via `export * from '@vue/runtime-dom'`, which declaration merging for new,
 * not-already-present exports doesn't reliably attach to), hence this narrow
 * local cast instead of a `declare module 'vue'` shim.
 */
const withAsyncContext = (
  Vue as unknown as {
    withAsyncContext: <T>(getAwaitable: () => Promise<T>) => Promise<[T, () => void]>
  }
).withAsyncContext

/**
 * Resolves a translator for validation messages: vue-i18n's `useI18n().t` when
 * the package is installed AND its plugin is set up on the app; the hardcoded
 * English fallback otherwise (including while the dynamic import is pending).
 *
 * `vue-i18n` is marked `external` in the build, so a static top-level import
 * would force every consumer's bundler to resolve it even if unused — hence
 * the dynamic import here, which fails gracefully (a rejected promise) when
 * the package isn't installed at all, instead of a build-time resolution error.
 */
function useValidationTranslator(): Ref<ValidationTranslator> {
  const t = shallowRef<ValidationTranslator>(createFallbackValidationTranslator())

  ;(async () => {
    try {
      const [{ useI18n }, restore] = await withAsyncContext(() => import('vue-i18n'))
      restore()
      t.value = useI18n().t
    } catch {
      // Package not installed, or its plugin isn't set up on this app — keep the fallback.
    }
  })()

  return t
}

export interface UseFormFieldOptions {
  required: ComputedRef<boolean>
  inputEl?: Ref<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>
}

export interface UseFormFieldReturn {
  /**
   * The FormFieldContext when inside a <FormField>, null otherwise.
   * Only used for required/error/aria-invalid/touched-dirty/counter reporting —
   * never for reading or writing the field value. The input's own `v-model`
   * is always the single source of truth for the value.
   */
  field: FormFieldContext | null
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

export function useFormField(options: UseFormFieldOptions): UseFormFieldReturn {
  const t = useValidationTranslator()

  const field = inject(FORM_FIELD_CONTEXT_KEY, null)

  // Signal required state to FormField on mount and on change
  onMounted(() => {
    field?.setRequired(options.required.value)
  })

  watch(options.required, val => {
    field?.setRequired(val)
  })

  // Register this input's validator with the parent Form so it runs on submit
  const validatorKey = Symbol()

  onMounted(() => {
    if (!field) return
    field.registerValidator(validatorKey, () => {
      field.setTouched(true)
      return validate()
    })
  })

  onUnmounted(() => {
    field?.unregisterValidator(validatorKey)
  })

  const hasServerError = computed<boolean>(() => {
    if (!field) return false
    const state = field.state.value
    return state.hasError && !state.isDirty
  })

  function validate(): boolean {
    const el = options.inputEl?.value
    if (!el || !field) return true

    const message = getValidationMessage(el, t.value)
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
    hasServerError,
    validate,
    onBlur,
    clearError,
    setDelegateMessage,
  }
}
