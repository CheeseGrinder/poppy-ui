<script lang="ts">
import type { CounterFn } from '@/types/utils.type'
import { isTrue } from '@/utils/is-true'
import { getByPath, setByPath } from '@/utils/path'
import { provide, shallowReactive, shallowRef, watch } from 'vue'
import type { FormContext } from './form.context'
import { FORM_CONTEXT_KEY } from './form.context'
import type { FormProps } from './form.props'
import type { FieldState } from './form.types'
</script>

<script setup lang="ts">
const props = defineProps<FormProps>()

/**
 * The form data object. All field values are stored under their name/path key.
 * Supports nested paths and arrays via dot-notation.
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

// const initialData = JSON.parse(JSON.stringify(unref(model.value) ?? {}))

// Shallow reactive copy — mutations here don't affect the model until emitted
const data = shallowReactive<Record<string, unknown>>({ ...model.value })

const errors = shallowRef<Record<string, string | undefined>>({})

const fieldStates = shallowReactive<Record<string, FieldState>>({})

// Keep data in sync when the model is updated externally
watch(model, val => Object.assign(data, val))

// Counter — stored as raw boolean | undefined.
// undefined = "no opinion": mergeProps in useComponentConfig skips it,
// letting pluginConfig / defaults take over.
// false = explicitly disabled: mergeProps propagates it, overriding any lower-priority true.

const counter = shallowRef<boolean | undefined>(
  props.counter !== undefined ? isTrue(props.counter) : undefined,
)
const counterFormat = shallowRef<string | CounterFn | undefined>(props.counterFormat)

watch(() => props.counter, val => {
  counter.value = val !== undefined ? isTrue(val) : undefined
})
watch(() => props.counterFormat, (val) => { counterFormat.value = val })

// Field state helpers

function ensureFieldState(path: string): FieldState {
  if (!fieldStates[path]) {
    fieldStates[path] = {
      value: getByPath(data, path),
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

function setFieldValue(path: string, value: unknown): void {
  setByPath(data, path, value)
  const state = ensureFieldState(path)
  state.value = value
  model.value = { ...data }
}

function getFieldValue(path: string): unknown {
  return getByPath(data, path)
}

function setValues(values: Record<string, unknown>): void {
  Object.assign(data, values)
  model.value = { ...data }
}

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

function validate(): boolean {
  let allValid = true
  for (const [, validateFn] of validators) {
    if (!validateFn()) allValid = false
  }
  return allValid
}

// Registered validate callbacks from child inputs (via useFormField)
const validators: Map<string, () => boolean> = new Map()

function reset(): void {
  Object.assign(data, {})
  model.value = { ...data }
  clearErrors()
  for (const path of Object.keys(fieldStates)) {
    fieldStates[path] = {
      value: getByPath(data, path),
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
  data,
  counter,
  counterFormat,
  setFieldValue,
  getFieldValue,
  setValues,
  getFieldError,
  setFieldError,
  setErrors,
  clearErrors,
  getFieldState,
  setDirty,
  setTouched,
  validate,
  reset,
}

provide(FORM_CONTEXT_KEY, formContext)
defineExpose(formContext)

// Submit handler

function handleSubmit(): void {
  const isValid = validate()
  if (!isValid) return

  const serialized = props.serializer?.({ ...data }) ?? { ...data }
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
