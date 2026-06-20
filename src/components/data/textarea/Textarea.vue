<script lang="ts">
import { FORM_CONTEXT_KEY } from '@/components/data/form/form.context'
import { FORM_FIELD_CONTEXT_KEY } from '@/components/data/form-field/form-field.context'
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { computed, inject, useAttrs, useTemplateRef, watchEffect } from 'vue'
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
defineOptions({ inheritAttrs: false })

const props = defineProps<TextareaProps>()

/**
 * Bound string value.
 */
const model = defineModel<string>()

// ── Context injection ────────────────────────────────────────────────────────

const formCtx = inject(FORM_CONTEXT_KEY, null)
const fieldCtx = inject(FORM_FIELD_CONTEXT_KEY, null)

const contextOverrides = {
  get counter() { return fieldCtx?.counter.value ?? formCtx?.counter.value },
  get counterFormat() { return fieldCtx?.counterFormat.value ?? formCtx?.counterFormat.value },
}

// @ts-ignore - Type too complex
const config = useComponentConfig(TEXTAREA_CONFIG, props, { size: 'md', counter: false }, contextOverrides)

// ── Element ref ──────────────────────────────────────────────────────────────

const textareaEl = useTemplateRef('textareaEl')
const attrs = useAttrs()

// ── Form field ───────────────────────────────────────────────────────────────

const { field, onBlur, clearError } = useFormField<string>({
  required: computed(() => !!props.required),
  inputEl: textareaEl as any,
})

// ── Value resolution ─────────────────────────────────────────────────────────

const resolvedValue = computed(() =>
  field ? (field.value.value as string | undefined) : model.value,
)

function handleUpdate(event: Event): void {
  const raw = (event.target as HTMLTextAreaElement).value
  model.value = raw
  field?.setValue(raw)
  field?.setDirty(true)
  clearError()
}

// ── Implicit validator ───────────────────────────────────────────────────────

const hasConstraints = computed(() =>
  !!props.required
  || attrs.minlength != null
  || attrs.maxlength != null,
)

// ── Counter ──────────────────────────────────────────────────────────────────

const currentLength = computed(() => (resolvedValue.value ?? '').length)
const showCounter = computed(() => config.value.counter)

const counterText = computed<string>(() => {
  if (!showCounter.value) return ''
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

const counterColor = computed<string>(() => {
  const max = config.value.maxLength
  const min = config.value.minLength
  const current = currentLength.value
  if (max != null && current > max) return 'text-error'
  if (min != null && current < min) return 'text-warning'
  return ''
})

// Push counter up to FormField
watchEffect(() => {
  if (!field) return
  field.setCounterText(
    showCounter.value ? counterText.value : '',
    showCounter.value ? counterColor.value : '',
  )
})

// ── Error ────────────────────────────────────────────────────────────────────

const hasError = computed(() => !!field?.error.value)

defineExpose({
  $el: textareaEl,
  focus: () => textareaEl.value?.focus(),
})
</script>

<template>
  <textarea
    ref="textareaEl"
    v-bind="$attrs"
    class="textarea w-full"
    :class="[
      getClass(colors, config.color),
      getClass(sizes, config.size),
      getClass(variants, config.variant),
      { 'textarea-error': hasError },
      { validator: hasConstraints },
      { 'resize-none': !autoGrow },
    ]"
    :value="resolvedValue"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :placeholder="placeholder"
    :rows="rows"
    @input="handleUpdate"
    @blur="onBlur"
  />

  <!-- Standalone counter (no FormField) -->
  <div v-if="!field && showCounter" class="flex justify-end mt-1">
    <span class="text-xs" :class="counterColor">{{ counterText }}</span>
  </div>
</template>
