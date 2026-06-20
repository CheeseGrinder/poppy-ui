<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { computed, useSlots, useTemplateRef } from 'vue'
import { TOGGLE_CONFIG } from './toggle.context'
import type { ToggleProps } from './toggle.props'
import type { ToggleColor, ToggleSize } from './toggle.types'

const colors: ComponentClass<'toggle', ToggleColor> = {
  neutral: 'toggle-neutral',
  primary: 'toggle-primary',
  secondary: 'toggle-secondary',
  accent: 'toggle-accent',
  info: 'toggle-info',
  success: 'toggle-success',
  warning: 'toggle-warning',
  error: 'toggle-error',
}

const sizes: ComponentClass<'toggle', ToggleSize> = {
  xs: 'toggle-xs',
  sm: 'toggle-sm',
  md: 'toggle-md',
  lg: 'toggle-lg',
  xl: 'toggle-xl',
}
</script>

<script setup lang="ts">
const props = defineProps<ToggleProps>()

/**
 * Whether the toggle is on or off.
 */
const model = defineModel<boolean>()

const config = useComponentConfig(TOGGLE_CONFIG, props, { size: 'md' })

const inputEl = useTemplateRef('inputEl')
const slots = useSlots()

// ── Form field ───────────────────────────────────────────────────────────────

const { field, fieldValue, onBlur, clearError } = useFormField<boolean>({
  required: computed(() => !!props.required),
  inputEl,
})

// ── Value resolution ─────────────────────────────────────────────────────────

const resolvedValue = computed(() => field ? fieldValue.value : model.value)

function handleChange(event: Event): void {
  if (props.readonly) {
    event.preventDefault()
    return
  }
  const checked = (event.target as HTMLInputElement).checked
  model.value = checked
  field?.setValue(checked)
  field?.setDirty(true)
  clearError()
}

// ── Error / description ──────────────────────────────────────────────────────

const hasError = computed(() => !!field?.error.value)
const hasDescription = computed(() => !!(props.description || slots.description))
const hasHint = computed(() => !!(props.hint || slots.hint))
const hasLabel = computed(() => hasDescription.value || hasHint.value)

defineExpose({
  $el: inputEl,
  focus: () => inputEl.value?.focus(),
})
</script>

<template>
  <!-- Toggle with description / hint label to the right -->
  <label
    v-if="hasLabel"
    class="flex cursor-pointer items-start gap-2"
    :class="{ 'opacity-60 pointer-events-none': disabled || readonly }"
  >
    <input
      ref="inputEl"
      type="checkbox"
      role="switch"
      class="toggle mt-0.5"
      :class="[
        getClass(colors, config.color),
        getClass(sizes, config.size),
        { 'toggle-error': hasError },
        { validator: required },
      ]"
      :checked="resolvedValue"
      :disabled="disabled"
      :required="required"
      :aria-invalid="hasError || undefined"
      @change="handleChange"
      @blur="onBlur"
    />
    <span class="flex flex-col gap-0.5">
      <span v-if="hasDescription" class="label-text leading-snug">
        <slot name="description">{{ description }}</slot>
        <span v-if="required" class="text-error ml-0.5" aria-hidden="true">*</span>
      </span>
      <span v-if="hasHint" class="label-text text-xs text-base-content/60 leading-snug">
        <slot name="hint">{{ hint }}</slot>
      </span>
    </span>
  </label>

  <!-- Bare toggle — no label -->
  <input
    v-else
    ref="inputEl"
    type="checkbox"
    role="switch"
    class="toggle"
    :class="[
      getClass(colors, config.color),
      getClass(sizes, config.size),
      { 'toggle-error': hasError },
      { validator: required },
    ]"
    :checked="resolvedValue"
    :disabled="disabled"
    :required="required"
    :aria-invalid="hasError || undefined"
    @change="handleChange"
    @blur="onBlur"
  />
</template>
