<script lang="ts">
import { FORM_CONTEXT_KEY } from '@/components/data/form/form.context'
import { FORM_FIELD_CONTEXT_KEY } from '@/components/data/form-field/form-field.context'
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { isTrue } from '@/utils/is-true'
import { computed, inject, useTemplateRef } from 'vue'
import { TEXTAREA_CONFIG } from './textarea.context'
import type { TextareaProps } from './textarea.props'
import type { TextareaColor, TextareaSize, TextareaVariant } from './textarea.types'

const colors: ComponentClass<'textarea', TextareaColor> = {
  neutral: 'textarea-neutral',
  primary: 'textarea-primary',
  secondary: 'textarea-secondary',
  accent: 'textarea-accent',
  info: 'textarea-info',
  success: 'textarea-success',
  warning: 'textarea-warning',
  error: 'textarea-error',
}

const sizes: ComponentClass<'textarea', TextareaSize> = {
  xs: 'textarea-xs',
  sm: 'textarea-sm',
  md: 'textarea-md',
  lg: 'textarea-lg',
  xl: 'textarea-xl',
}

const variants: ComponentClass<'textarea', TextareaVariant> = {
  bordered: 'textarea-bordered',
  ghost: 'textarea-ghost',
}
</script>

<script setup lang="ts">
const props = defineProps<TextareaProps>()

/**
 * The current text content of the textarea.
 * Supports the `.trim` modifier:
 * - `v-model.trim` → trims leading and trailing whitespace on update
 */
const model = defineModel<string>()

// ── Context injection ────────────────────────────────────────────────────────

const formCtx = inject(FORM_CONTEXT_KEY, null)
const fieldCtx = inject(FORM_FIELD_CONTEXT_KEY, null)

const contextOverrides = {
  get counter() { return fieldCtx?.counter.value ?? formCtx?.counter.value },
  get counterFormat() { return fieldCtx?.counterFormat.value ?? formCtx?.counterFormat.value },
}

const config = useComponentConfig(
  TEXTAREA_CONFIG,
  props,
  { size: 'md', rows: 4, autoGrow: false, counter: false },
  contextOverrides,
)

// ── Element ref + form field ─────────────────────────────────────────────────

const textareaEl = useTemplateRef('textareaEl')

const { field, fieldValue, onBlur, clearError } = useFormField<string>({
  required: computed(() => isTrue(props.required)),
  inputEl: textareaEl,
})

// ── Value resolution ─────────────────────────────────────────────────────────

const resolvedValue = computed(() => field ? fieldValue.value : model.value)

function handleUpdate(event: Event): void {
  const raw = (event.target as HTMLTextAreaElement).value
  model.value = raw
  field?.setValue(raw)
  field?.setDirty(true)
  clearError()
}

// ── Counter ──────────────────────────────────────────────────────────────────

const currentLength = computed(() => (resolvedValue.value ?? '').length)

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

const activeError = computed(() => field?.error.value)

const hasError = computed(() => !!activeError.value)
</script>

<template>
  <div class="w-full">
    <!-- Top label row — standalone use only -->
    <div v-if="!field && (label || $slots.label)" class="label">
      <span class="label-text">
        <slot name="label">{{ label }}</slot>
      </span>
    </div>

    <textarea
      ref="textareaEl"
      class="textarea w-full"
      :class="[
        getClass(colors, config.color),
        getClass(sizes, config.size),
        getClass(variants, config.variant),
        { 'textarea-error': hasError },
        { 'field-sizing-content': isTrue(config.autoGrow) },
      ]"
      :value="resolvedValue"
      :disabled="disabled"
      :required="isTrue(required)"
      :placeholder="placeholder"
      :rows="isTrue(config.autoGrow) ? undefined : config.rows"
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
