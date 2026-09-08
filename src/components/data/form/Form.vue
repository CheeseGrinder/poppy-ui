<script lang="ts">
import type { CounterFn } from '@/types/utils.type'
import { safeClone } from '@/utils/clone'
import { provide, shallowReactive, shallowRef, watch } from 'vue'
import type { FormContext } from './form.context'
import { FORM_CONTEXT_KEY } from './form.context'
import type { FormProps } from './form.props'
import type { FieldState } from './form.types'
</script>

<script setup lang="ts">
const props = defineProps<FormProps>()

/**
 * The shared form data object. Mutated in place by child inputs via their own
 * `v-model` — Form never copies or writes through it, it only reads it for
 * `reset()` / `submit()`.
 */
const model = defineModel<Record<string, unknown>>({ required: true })

const emit = defineEmits<{
  /**
   * Fired on form submit after serialization.
   * The payload is the raw data (or serialized data if `serializer` is set).
   */
  submit: [data: Record<string, unknown>]
  /** Fired on form reset. Data is restored to the initial model value. */
  reset: []
}>()

// Internal state

// Snapshot taken once at creation, used to restore values on reset().
// safeClone (not JSON.parse(JSON.stringify(...))) so it doesn't choke on
// refs/computed nested in the model (#119).
const initialData: Record<string, unknown> = safeClone(model.value ?? {})

const errors = shallowRef<Record<string, string | undefined>>({})

const fieldStates = shallowReactive<Record<string, FieldState>>({})

// Counter — stored as raw boolean | undefined.
// undefined = "no opinion": mergeProps in useComponentConfig skips it,
// letting pluginConfig / defaults take over.
// false = explicitly disabled: mergeProps propagates it, overriding any lower-priority true.

const counter = shallowRef<boolean | undefined>(
  props.counter !== undefined ? props.counter : undefined,
)
const counterFormat = shallowRef<string | CounterFn | undefined>(props.counterFormat)

watch(() => props.counter, val => {
  counter.value = val !== undefined ? val : undefined
})
watch(() => props.counterFormat, (val) => { counterFormat.value = val })

// Field state helpers

function ensureFieldState(path: string): FieldState {
  if (!fieldStates[path]) {
    fieldStates[path] = {
      isDirty: false,
      isTouched: false,
      isValid: true,
      hasError: false,
      error: undefined,
    }
  }
  return fieldStates[path]
}

// FormContext implementation

function getFieldError(path: string): string | undefined {
  return errors.value[path]
}

function setFieldError(path: string, message: string | undefined): void {
  errors.value = { ...errors.value, [path]: message }
  const state = ensureFieldState(path)
  state.error = message
  state.isValid = !message
  state.hasError = !!message
}

function setErrors(newErrors: Record<string, string | undefined>): void {
  errors.value = { ...newErrors }
  for (const [path, message] of Object.entries(newErrors)) {
    const state = ensureFieldState(path)
    state.error = message
    state.isValid = !message
    state.hasError = !!message
  }
}

function clearErrors(path?: string): void {
  if (path != null) {
    const { [path]: _removed, ...rest } = errors.value
    errors.value = rest
    const state = fieldStates[path]
    if (state) {
      state.error = undefined
      state.isValid = true
      state.hasError = false
    }
  } else {
    errors.value = {}
    for (const state of Object.values(fieldStates)) {
      state.error = undefined
      state.isValid = true
      state.hasError = false
    }
  }
}

function getFieldState(path: string): FieldState {
  return ensureFieldState(path)
}

function setDirty(path: string, value = true): void {
  ensureFieldState(path).isDirty = value
}

function setTouched(path: string, value = true): void {
  ensureFieldState(path).isTouched = value
}

// Registered validate callbacks from child inputs (via useFormField)
const validators: Map<symbol, () => boolean> = new Map()

function registerValidator(key: symbol, fn: () => boolean): void {
  validators.set(key, fn)
}

function unregisterValidator(key: symbol): void {
  validators.delete(key)
}

function validate(): boolean {
  let allValid = true
  for (const [, validateFn] of validators) {
    if (!validateFn()) allValid = false
  }
  return allValid
}

function reset(): void {
  // Clear all current keys, then restore snapshot taken at component creation.
  // Mutated in place on the shared model object — never reassigned — so every
  // input's own `v-model` binding (pointing at the same object) picks it up.
  const current = model.value
  for (const key of Object.keys(current)) {
    delete current[key]
  }
  Object.assign(current, safeClone(initialData))
  clearErrors()
  for (const path of Object.keys(fieldStates)) {
    fieldStates[path] = {
      isDirty: false,
      isTouched: false,
      isValid: true,
      hasError: false,
      error: undefined,
    }
  }
  emit('reset')
}

// Provide context

const formContext: FormContext = {
  errors,
  counter,
  counterFormat,
  getFieldError,
  setFieldError,
  setErrors,
  clearErrors,
  getFieldState,
  setDirty,
  setTouched,
  validate,
  reset,
  registerValidator,
  unregisterValidator,
}

provide(FORM_CONTEXT_KEY, formContext)
defineExpose(formContext)

// Submit handler

function handleSubmit(): void {
  const isValid = validate()
  if (!isValid) return

  const serialized = props.serializer?.({ ...model.value }) ?? { ...model.value }
  emit('submit', serialized)
}
</script>

<template>
  <form novalidate @submit.prevent="handleSubmit" @reset.prevent="reset">
    <slot />
    <slot
      v-if="errors['$']"
      name="error"
      :error="errors['$']"
    >
      <p class="text-error text-sm mt-2" role="alert">{{ errors['$'] }}</p>
    </slot>
  </form>
</template>
