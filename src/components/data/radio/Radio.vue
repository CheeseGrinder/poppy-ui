<script lang="ts">
import type { FormFieldContext } from '@/components/data/form-field/form-field.context'
import { FORM_FIELD_CONTEXT_KEY } from '@/components/data/form-field/form-field.context'
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { isTrue } from '@/utils/is-true'
import { computed, inject, useId, useTemplateRef, watch } from 'vue'
import { RADIO_CONFIG } from './radio.context'
import type { RadioProps } from './radio.props'
import type { RadioColor, RadioSize } from './radio.types'

const colors: ComponentClass<'radio', RadioColor> = {
  neutral: 'radio-neutral',
  primary: 'radio-primary',
  secondary: 'radio-secondary',
  accent: 'radio-accent',
  info: 'radio-info',
  success: 'radio-success',
  warning: 'radio-warning',
  error: 'radio-error',
}

const sizes: ComponentClass<'radio', RadioSize> = {
  xs: 'radio-xs',
  sm: 'radio-sm',
  md: 'radio-md',
  lg: 'radio-lg',
  xl: 'radio-xl',
}
</script>

<script setup lang="ts">
const props = defineProps<RadioProps>()
const model = defineModel<string | number | boolean>()
const inputEl = useTemplateRef('inputEl')

const config = useComponentConfig(RADIO_CONFIG, props, {
  size: 'md',
})

const inputId = `radio-${useId()}`

// Try to get name from FormField context
const fieldCtx = inject(FORM_FIELD_CONTEXT_KEY, null as FormFieldContext | null)
const resolvedName = computed(() => props.name ?? fieldCtx?.name ?? 'radio-group')

// Bridge to form field context
const { field, onBlur } = useFormField({
  required: computed(() => isTrue(props.required)),
  inputEl,
})

// Resolved value: field context wins when inside FormField
const resolvedValue = computed(() =>
  field ? field.value.value : model.value
)

// Checked state
const isChecked = computed(() => resolvedValue.value === props.value)

// Sync model with field context
watch(
  () => field?.value.value,
  (val) => {
    if (val !== undefined && model.value !== val) {
      model.value = val as string | number | boolean
    }
  }
)

function handleChange(event: Event): void {
  const value = props.value
  model.value = value
  field?.setValue(value)
  field?.setDirty(true)
}

function handleBlur(): void {
  onBlur()
}
</script>

<template>
  <div class="flex items-center gap-3">
    <input
      ref="inputEl"
      :id="inputId"
      type="radio"
      class="radio bg-base-200"
      :class="[getClass(colors, config.color), getClass(sizes, config.size)]"
      :name="resolvedName"
      :value="value"
      :checked="isChecked"
      :disabled="disabled"
      :required="required"
      @change="handleChange"
      @blur="handleBlur"
    />
    <label v-if="description || $slots.description" :for="inputId" class="text-sm text-base-content/70 cursor-pointer">
      <slot name="description">{{ description }}</slot>
    </label>
  </div>
</template>
