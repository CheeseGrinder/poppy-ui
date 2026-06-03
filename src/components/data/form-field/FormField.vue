<script lang="ts">
import { isTrue } from '@/utils/is-true'
import { computed, inject, provide, shallowRef, watch } from 'vue'
import { FORM_CONTEXT_KEY } from '../form/form.context'
import type { FieldState } from '../form/form.types'
import type { FormFieldContext } from './form-field.context'
import { FORM_FIELD_CONTEXT_KEY } from './form-field.context'
</script>

<script setup lang="ts">
import type { FormFieldProps } from './form-field.props'

const props = defineProps<FormFieldProps>()

// Inject parent Form context (optional)

const formCtx = inject(FORM_CONTEXT_KEY, null)

// Required state — pushed by child inputs via setRequired()

const required = shallowRef<boolean>(false)

// Counter — stored as raw boolean | undefined, same logic as Form.
// The input resolves the final value via mergeProps(defaults, pluginConfig, formCtx, fieldCtx, props).
// FormField exposes its own raw prop value; the input picks up formCtx separately.

const counter = shallowRef<boolean | undefined>(
  props.counter !== undefined ? isTrue(props.counter) : undefined,
)
const counterFormat = shallowRef<
  string | ((c: number, min?: number, max?: number) => string) | undefined
>(props.counterFormat)

watch(() => props.counter, (val) => {
  counter.value = val !== undefined ? isTrue(val) : undefined
})
watch(() => props.counterFormat, (val) => { counterFormat.value = val })

// Computed field state from FormContext

const fieldValue = computed<unknown>(() => formCtx?.getFieldValue(props.name))

const fieldError = computed<string | undefined>(() => formCtx?.getFieldError(props.name))

const fieldState = computed<FieldState>(() =>
  formCtx?.getFieldState(props.name) ?? {
    value: undefined,
    isDirty: false,
    isTouched: false,
    isValid: true,
    hasError: false,
    error: undefined,
  },
)

// FormFieldContext implementation

function setValue(value: unknown): void {
  formCtx?.setFieldValue(props.name, value)
}

function setRequired(value: boolean): void {
  required.value = value
}

function setDirty(value = true): void {
  formCtx?.setDirty(props.name, value)
}

function setTouched(value = true): void {
  formCtx?.setTouched(props.name, value)
}

function setError(message: string | undefined): void {
  formCtx?.setFieldError(props.name, message)
}

const fieldContext: FormFieldContext = {
  name: props.name,
  required,
  value: fieldValue,
  error: fieldError,
  state: fieldState,
  counter,
  counterFormat,
  setValue,
  setRequired,
  setDirty,
  setTouched,
  setError,
}

provide(FORM_FIELD_CONTEXT_KEY, fieldContext)
</script>

<template>
  <div class="form-control w-full">
    <!-- Top label row -->
    <label v-if="label || $slots.label" class="label">
      <slot name="label" :required="required">
        <span class="label-text">
          {{ label }}
          <slot name="required" :required="required">
            <span
              v-if="required"
              class="text-error ml-0.5"
              aria-hidden="true"
            >*</span>
          </slot>
        </span>
      </slot>
    </label>

    <!-- Input slot -->
    <slot />

    <!-- Bottom label row: error/hint -->
    <label
      v-if="fieldError || hint || $slots.hint"
      class="label"
    >
      <span
        class="label-text-alt"
        :class="{ 'text-error': fieldError }"
        role="alert"
      >
        <slot name="error" :error="fieldError">
          <slot name="hint">{{ fieldError || hint }}</slot>
        </slot>
      </span>
    </label>
  </div>
</template>