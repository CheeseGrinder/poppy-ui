<script lang="ts">
import type { FormFieldContext } from '@/components/data/form-field/form-field.context'
import { FORM_FIELD_CONTEXT_KEY } from '@/components/data/form-field/form-field.context'
import { RADIO_GROUP_CONTEXT_KEY } from '@/components/data/radio-group/radio-group.context'
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { computed, inject, useId, useSlots, useTemplateRef } from 'vue'
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
const slots = useSlots()

const config = useComponentConfig(RADIO_CONFIG, props, { size: 'md' })

const inputId = `radio-${useId()}`

// Priority: FormField > RadioGroup > standalone prop
const fieldCtx = inject(FORM_FIELD_CONTEXT_KEY, null as FormFieldContext | null)
const groupCtx = inject(RADIO_GROUP_CONTEXT_KEY, null)

const resolvedName = computed(() => props.name ?? fieldCtx?.name ?? groupCtx?.name ?? 'radio-group')

// Bridge to form field context
const { field, onBlur, clearError } = useFormField({
  required: computed(() => !!props.required || !!groupCtx?.required.value),
  inputEl,
})

// Resolved value priority: FormField > RadioGroup > local model
const resolvedValue = computed(() => {
  if (field) return field.value.value
  if (groupCtx) return groupCtx.modelValue.value
  return model.value
})

// Checked state
const isChecked = computed(() => resolvedValue.value === props.value)

function handleChange(): void {
  model.value = props.value
  if (field) {
    field.setValue(props.value)
    field.setDirty(true)
    clearError()
  }
  else if (groupCtx) {
    groupCtx.setValue(props.value)
  }
}

// ── Description / hint ────────────────────────────────────────────────────────

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
  <!-- Radio with description / hint label to the right -->
  <label
    v-if="hasLabel"
    :for="inputId"
    class="flex cursor-pointer items-start gap-2"
    :class="{ 'opacity-60 pointer-events-none': disabled }"
  >
    <input
      :id="inputId"
      ref="inputEl"
      type="radio"
      class="radio mt-0.5"
      :class="[
        getClass(colors, config.color),
        getClass(sizes, config.size),
        { 'radio-error': hasError },
        { validator: required },
      ]"
      :name="resolvedName"
      :value="value"
      :checked="isChecked"
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

  <!-- Bare radio — no label -->
  <input
    v-else
    :id="inputId"
    ref="inputEl"
    type="radio"
    class="radio"
    :class="[
      getClass(colors, config.color),
      getClass(sizes, config.size),
      { 'radio-error': hasError },
      { validator: required },
    ]"
    :name="resolvedName"
    :value="value"
    :checked="isChecked"
    :disabled="disabled"
    :required="required"
    :aria-invalid="hasError || undefined"
    @change="handleChange"
    @blur="onBlur"
  />
</template>
