<script lang="ts">
import { FORM_CONTEXT_KEY } from '@/components/data/form/form.context'
import { FORM_FIELD_CONTEXT_KEY } from '@/components/data/form-field/form-field.context'
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { isTrue } from '@/utils/is-true'
import { computed, inject, useTemplateRef } from 'vue'
import { INPUT_CONFIG } from './input.context'
import type { InputProps } from './input.props'
import type { InputColor, InputSize, InputVariant } from './input.types'

const colors: ComponentClass<'input', InputColor> = {
  neutral: 'input-neutral',
  primary: 'input-primary',
  secondary: 'input-secondary',
  accent: 'input-accent',
  info: 'input-info',
  success: 'input-success',
  warning: 'input-warning',
  error: 'input-error',
}

const sizes: ComponentClass<'input', InputSize> = {
  xs: 'input-xs',
  sm: 'input-sm',
  md: 'input-md',
  lg: 'input-lg',
  xl: 'input-xl',
}

const variants: ComponentClass<'input', InputVariant> = {
  bordered: 'input-bordered',
  ghost: 'input-ghost',
}
</script>

<script setup lang="ts">

const props = defineProps<InputProps>()

/**
 * Bound value. Supports `.number` and `.trim` modifiers.
 * - `v-model.number` → coerces to number
 * - `v-model.trim` → trims whitespace on update
 */
const model = defineModel<string | number>()

// ── Context injection ────────────────────────────────────────────────────────

const formCtx = inject(FORM_CONTEXT_KEY, null)
const fieldCtx = inject(FORM_FIELD_CONTEXT_KEY, null)

// contextOverrides: Form/FormField counter values fed into mergeProps.
// Priority: fieldCtx (own prop) → formCtx (own prop).
// Both are raw boolean | undefined — undefined is skipped by mergeProps.
// contextOverrides feeds Form/FormField counter values into the mergeProps chain.
// Passed as a getter so useComponentConfig's computed stays reactive to context changes.
const contextOverrides = {
  get counter()       { return fieldCtx?.counter.value       ?? formCtx?.counter.value },
  get counterFormat() { return fieldCtx?.counterFormat.value ?? formCtx?.counterFormat.value },
}

// @ts-ignore - Type too complexe
const config = useComponentConfig(
  INPUT_CONFIG,
  props,
  { size: 'md', type: 'text', counter: false },
  contextOverrides,
)

// ── Element ref + form field ─────────────────────────────────────────────────

const inputEl = useTemplateRef('inputEl')

const { field, onBlur, clearError } = useFormField({
  required: computed(() => isTrue(props.required)),
  inputEl,
})

// ── Value resolution ─────────────────────────────────────────────────────────

// When inside a FormField: field context owns the value.
// Standalone: falls back to defineModel, then defaultValue.
const resolvedValue = computed(() =>
  field ? field.value.value : (model.value ?? props.defaultValue),
)

function handleUpdate(event: Event): void {
  const raw = (event.target as HTMLInputElement).value
  model.value = raw
  field?.setValue(raw)
  field?.setDirty(true)
  clearError()
}

// ── Counter ──────────────────────────────────────────────────────────────────

const currentLength = computed(() => String(resolvedValue.value ?? '').length)

const showCounter = computed(() => isTrue(config.value.counter))

const formattedCounter = computed(() => {
  const fmt = config.value.counterFormat ?? '{current} / {max}'
  const current = currentLength.value
  const min = config.value.minLength
  const max = config.value.maxLength

  if (typeof fmt === 'function') return fmt(current, min, max)

  return fmt
    .replace('{current}', String(current))
    .replace('{min}', min != null ? String(min) : '')
    .replace('{max}', max != null ? String(max) : '')
})

// ── Error display ────────────────────────────────────────────────────────────

// Active error from FormField context (available in both standalone and form modes).
// When inside FormField, the FormField owns the error text rendering.
// When standalone, we render it in the bottom label row below.
const activeError = computed(() => field?.error.value)

// Error color applied to the input element itself in both modes.
const hasError = computed(() => !!activeError.value)
</script>

<template>
  <div class="w-full">
    <!-- Top label row — standalone use only (FormField owns label when present) -->
    <div v-if="!field && (label || $slots.label)" class="label">
      <span class="label-text">
        <slot name="label">{{ label }}</slot>
      </span>
    </div>

    <input
      ref="inputEl"
      class="input w-full"
      :class="[
        getClass(colors, config.color),
        getClass(sizes, config.size),
        getClass(variants, config.variant),
        { 'input-error': hasError },
      ]"
      :type="config.type"
      :value="resolvedValue"
      :disabled="disabled"
      :required="isTrue(required)"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :pattern="pattern"
      :title="title"
      :maxlength="config.maxLength"
      :minlength="config.minLength"
      @input="handleUpdate"
      @blur="onBlur"
    />

    <!-- Bottom label row — standalone use only -->
    <div
      v-if="!field && (activeError || hint || $slots.hint || showCounter)"
      class="label"
    >
      <span
        class="label-text-alt"
        :class="{ 'text-error': activeError }"
      >
        <slot name="hint">{{ activeError || hint }}</slot>
      </span>
      <span v-if="showCounter" class="label-text-alt">
        <slot
          name="counter"
          :current="currentLength"
          :min="config.minLength"
          :max="config.maxLength"
        >
          {{ formattedCounter }}
        </slot>
      </span>
    </div>

    <!-- Counter slot exposed for FormField's bottom row when inside a FormField -->
    <template v-if="field && showCounter">
      <slot
        name="counter"
        :current="currentLength"
        :min="config.minLength"
        :max="config.maxLength"
      >
        <!-- rendered by FormField in its own label row -->
      </slot>
    </template>
  </div>
</template>