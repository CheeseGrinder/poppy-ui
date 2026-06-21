<script lang="ts">
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

// Counter config — same lazy-undefined logic as Form.

const counter = shallowRef<boolean | undefined>(
  props.counter !== undefined ? props.counter : undefined,
)
const counterFormat = shallowRef<
  string | ((c: number, min?: number, max?: number) => string) | undefined
>(props.counterFormat)

watch(() => props.counter, (val) => {
  counter.value = val !== undefined ? val : undefined
})
watch(() => props.counterFormat, (val) => { counterFormat.value = val })

// Counter display — pushed up by child inputs

const counterText = shallowRef('')
const counterColor = shallowRef('')

function setCounterText(text: string, colorClass: string): void {
  counterText.value = text
  counterColor.value = colorClass
}

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

function registerValidator(key: symbol, fn: () => boolean): void {
  formCtx?.registerValidator(key, fn)
}

function unregisterValidator(key: symbol): void {
  formCtx?.unregisterValidator(key)
}

const fieldContext: FormFieldContext = {
  name: props.name,
  required,
  value: fieldValue,
  error: fieldError,
  state: fieldState,
  counter,
  counterFormat,
  counterText,
  counterColor,
  setValue,
  setRequired,
  setDirty,
  setTouched,
  setError,
  setCounterText,
  registerValidator,
  unregisterValidator,
} satisfies FormFieldContext

provide(FORM_FIELD_CONTEXT_KEY, fieldContext)

// Bottom row visibility

const showBottom = computed(() =>
  !!(fieldError.value || props.hint || counterText.value),
)
</script>

<template>
  <fieldset class="fieldset w-full">
    <!-- Floating label mode: label floats over the input -->
    <template v-if="floating">
      <label class="floating-label">
        <span v-if="label || $slots.label">
          <slot name="label" :required="required">
            {{ label }}<span v-if="required" class="text-error ml-0.5" aria-hidden="true">*</span>
          </slot>
        </span>
        <slot />
      </label>
    </template>

    <!-- Default mode: legend above the field -->
    <template v-else>
      <legend v-if="label || $slots.label" class="fieldset-legend">
        <slot name="label" :required="required">
          {{ label }}<span v-if="required" class="text-error ml-0.5" aria-hidden="true">*</span>
        </slot>
      </legend>
      <slot />
    </template>

    <!-- Bottom row: error/hint left, counter right -->
    <div v-if="showBottom" class="flex items-center justify-between gap-2 mt-1">
      <Transition name="field-message" mode="out-in">
        <p v-if="fieldError" key="error" class="label text-error text-xs" role="alert">
          <slot name="error" :error="fieldError">{{ fieldError }}</slot>
        </p>
        <p v-else-if="hint" key="hint" class="label text-xs">
          <slot name="hint">{{ hint }}</slot>
        </p>
        <span v-else key="empty" />
      </Transition>
      <span
        v-if="counterText"
        class="label text-xs shrink-0"
        :class="counterColor"
      >{{ counterText }}</span>
    </div>
  </fieldset>
</template>

<style scoped>
.field-message-enter-active,
.field-message-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.field-message-enter-from,
.field-message-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>