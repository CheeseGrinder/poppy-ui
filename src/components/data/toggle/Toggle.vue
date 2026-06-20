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
 * Use `v-model` to bind to a boolean reactive value.
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
  const checked = (event.target as HTMLInputElement).checked
  model.value = checked
  field?.setValue(checked)
  field?.setDirty(true)
  clearError()
}

// ── Error ────────────────────────────────────────────────────────────────────

const hasError = computed(() => !!field?.error.value)

// ── Description presence ─────────────────────────────────────────────────────

const hasDescription = computed(() => !!(props.description || slots.description))

defineExpose({
  $el: inputEl,
  focus: () => inputEl.value?.focus(),
})
</script>

<template>
  <!-- Bare toggle — no description -->
  <input
    v-if="!hasDescription"
    ref="inputEl"
    type="checkbox"
    class="toggle"
    :class="[
      getClass(colors, config.color),
      getClass(sizes, config.size),
      { 'toggle-error': hasError },
    ]"
    :checked="resolvedValue"
    :disabled="disabled"
    :required="required"
    @change="handleChange"
    @blur="onBlur"
  />

  <!-- Toggle with description -->
  <label v-else class="flex cursor-pointer items-center gap-2">
    <input
      ref="inputEl"
      type="checkbox"
      class="toggle"
      :class="[
        getClass(colors, config.color),
        getClass(sizes, config.size),
        { 'toggle-error': hasError },
      ]"
      :checked="resolvedValue"
      :disabled="disabled"
      :required="required"
      @change="handleChange"
      @blur="onBlur"
    />
    <span class="label-text text-base-content/60">
      <slot name="description">{{ description }}</slot>
    </span>
  </label>
</template>
