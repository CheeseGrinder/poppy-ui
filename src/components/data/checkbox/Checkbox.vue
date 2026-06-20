<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { computed, useSlots, useTemplateRef, watchEffect } from 'vue'
import { CHECKBOX_CONFIG } from './checkbox.context'
import type { CheckboxProps } from './checkbox.props'
import type { CheckboxColor, CheckboxSize } from './checkbox.types'

const colors: ComponentClass<'checkbox', CheckboxColor> = {
  neutral: 'checkbox-neutral',
  primary: 'checkbox-primary',
  secondary: 'checkbox-secondary',
  accent: 'checkbox-accent',
  info: 'checkbox-info',
  success: 'checkbox-success',
  warning: 'checkbox-warning',
  error: 'checkbox-error',
}

const sizes: ComponentClass<'checkbox', CheckboxSize> = {
  xs: 'checkbox-xs',
  sm: 'checkbox-sm',
  md: 'checkbox-md',
  lg: 'checkbox-lg',
  xl: 'checkbox-xl',
}
</script>

<script setup lang="ts">
const props = defineProps<CheckboxProps>()
const model = defineModel<boolean>()
const config = useComponentConfig(CHECKBOX_CONFIG, props, { size: 'md' })

const inputEl = useTemplateRef('inputEl')

const slots = useSlots()

// ── Indeterminate — must be set imperatively on the DOM node ─────────────────

watchEffect(() => {
  if (inputEl.value) {
    inputEl.value.indeterminate = !!props.indeterminate
  }
})

// ── Form field ───────────────────────────────────────────────────────────────

const { field, fieldValue, onBlur, clearError } = useFormField<boolean>({
  required: computed(() => !!props.required),
  inputEl,
})

// ── Value resolution ─────────────────────────────────────────────────────────

const resolvedValue = computed(() =>
  field ? fieldValue.value : model.value,
)

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
  <!-- Bare checkbox — no description -->
  <input
    v-if="!hasDescription"
    ref="inputEl"
    type="checkbox"
    class="checkbox"
    :class="[
      getClass(colors, config.color),
      getClass(sizes, config.size),
      { 'checkbox-error': hasError },
    ]"
    :checked="resolvedValue"
    :disabled="disabled"
    :required="required"
    @change="handleChange"
    @blur="onBlur"
  />

  <!-- Checkbox with description -->
  <label v-else class="flex cursor-pointer items-start gap-2">
    <input
      ref="inputEl"
      type="checkbox"
      class="checkbox mt-0.5"
      :class="[
        getClass(colors, config.color),
        getClass(sizes, config.size),
        { 'checkbox-error': hasError },
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