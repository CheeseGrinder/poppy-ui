<script lang="ts">
import { FORM_CONTEXT_KEY } from '@/components/data/form/form.context'
import { FORM_FIELD_CONTEXT_KEY } from '@/components/data/form-field/form-field.context'
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { XIcon } from '@lucide/vue'
import { computed, inject, useAttrs, useSlots, useTemplateRef, watchEffect } from 'vue'
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
defineOptions({ inheritAttrs: false })

const props = defineProps<InputProps>()

/**
 * Bound value. Supports `.number` and `.trim` modifiers.
 */
const model = defineModel<string | number>()

// ── Context injection ────────────────────────────────────────────────────────

const formCtx = inject(FORM_CONTEXT_KEY, null)
const fieldCtx = inject(FORM_FIELD_CONTEXT_KEY, null)

const contextOverrides = {
  get counter() { return fieldCtx?.counter.value ?? formCtx?.counter.value },
  get counterFormat() { return fieldCtx?.counterFormat.value ?? formCtx?.counterFormat.value },
}

// @ts-ignore - Type too complex
const config = useComponentConfig(INPUT_CONFIG, props, { size: 'md', type: 'text', counter: false }, contextOverrides)

// ── Element ref + slots ──────────────────────────────────────────────────────

const inputEl = useTemplateRef('inputEl')
const attrs = useAttrs()
const slots = useSlots()

const hasAddon = computed(() => !!slots.start || !!slots.end || props.clearable)

// ── Form field ───────────────────────────────────────────────────────────────

const { field, onBlur, clearError } = useFormField({
  required: computed(() => !!props.required),
  inputEl,
})

// ── Value resolution ─────────────────────────────────────────────────────────

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

function onClear(): void {
  model.value = undefined as any
  field?.setValue(undefined)
  clearError()
  inputEl.value?.focus()
}

// ── Implicit validator ───────────────────────────────────────────────────────

const hasConstraints = computed(() =>
  !!props.required
  || !!attrs.pattern
  || attrs.minlength != null
  || attrs.maxlength != null
  || attrs.min != null
  || attrs.max != null,
)

// ── Counter ──────────────────────────────────────────────────────────────────

const currentLength = computed(() => String(resolvedValue.value ?? '').length)
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

// Push counter text up to FormField so it renders on the same row as error/hint
watchEffect(() => {
  if (!field) return
  field.setCounterText(
    showCounter.value ? counterText.value : '',
    showCounter.value ? counterColor.value : '',
  )
})

// ── Error ────────────────────────────────────────────────────────────────────

const hasError = computed(() => !!field?.error.value)

// ── Shared input class ───────────────────────────────────────────────────────

const inputClass = computed(() => [
  getClass(colors, config.value.color),
  getClass(sizes, config.value.size),
  getClass(variants, config.value.variant),
  { 'input-error': hasError.value },
  { validator: hasConstraints.value },
])

defineExpose({
  $el: inputEl,
  focus: () => inputEl.value?.focus(),
})
</script>

<template>
  <!-- ── With addon (slots / clearable) ── -->
  <template v-if="hasAddon">
    <label class="input w-full" :class="inputClass">
      <slot name="start" />
      <input
        ref="inputEl"
        v-bind="$attrs"
        class="grow"
        :type="config.type"
        :value="resolvedValue"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :pattern="pattern"
        :title="title"
        :maxlength="config.maxLength"
        :minlength="config.minLength"
        @input="handleUpdate"
        @blur="onBlur"
      />
      <button
        v-if="clearable && resolvedValue != null && resolvedValue !== ''"
        type="button"
        class="btn btn-ghost btn-xs btn-circle opacity-50 hover:opacity-100"
        tabindex="-1"
        @click.stop="onClear"
      >
        <XIcon class="size-3" />
      </button>
      <slot name="end" />
    </label>

    <!-- Standalone counter (no FormField) -->
    <div v-if="!field && showCounter" class="flex justify-end mt-1">
      <span class="text-xs" :class="counterColor">{{ counterText }}</span>
    </div>
  </template>

  <!-- ── Bare input ── -->
  <template v-else>
    <input
      ref="inputEl"
      v-bind="$attrs"
      class="input w-full"
      :class="inputClass"
      :type="config.type"
      :value="resolvedValue"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :pattern="pattern"
      :title="title"
      :maxlength="config.maxLength"
      :minlength="config.minLength"
      @input="handleUpdate"
      @blur="onBlur"
    />

    <!-- Standalone counter (no FormField) -->
    <div v-if="!field && showCounter" class="flex justify-end mt-1">
      <span class="text-xs" :class="counterColor">{{ counterText }}</span>
    </div>
  </template>
</template>