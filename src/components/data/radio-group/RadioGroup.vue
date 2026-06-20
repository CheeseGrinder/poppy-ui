<script setup lang="ts">
import { FORM_FIELD_CONTEXT_KEY } from '@/components/data/form-field/form-field.context'
import { computed, inject, provide, shallowRef, useId, watch } from 'vue'
import type { RadioGroupContext } from './radio-group.context'
import { RADIO_GROUP_CONTEXT_KEY } from './radio-group.context'
import type { RadioGroupProps } from './radio-group.props'

const props = defineProps<RadioGroupProps>()

/**
 * The currently selected value.
 * Ignored when RadioGroup is inside a FormField (FormField owns the value).
 */
const model = defineModel<string | number | boolean>()

// RadioGroup must not be used inside FormField — FormField owns the value.
const fieldCtx = inject(FORM_FIELD_CONTEXT_KEY, null)

if (import.meta.env.DEV && fieldCtx) {
  console.warn(
    '[RadioGroup] Do not use <RadioGroup> inside <FormField>. ' +
      'Place <Radio> components directly inside <FormField> — they share the field value automatically.',
  )
}

const autoName = `radio-group-${useId()}`
const resolvedName = computed(() => props.name ?? autoName)
const required = shallowRef(!!props.required)

watch(
  () => props.required,
  val => {
    required.value = !!val
  },
)

// When inside FormField, defer to it; otherwise manage value locally.
const modelValue = computed<string | number | boolean | undefined>(() =>
  fieldCtx ? (fieldCtx.value.value as string | number | boolean | undefined) : model.value,
)

function setValue(value: string | number | boolean): void {
  if (fieldCtx) {
    fieldCtx.setValue(value)
    fieldCtx.setDirty(true)
  } else {
    model.value = value
  }
}

const context: RadioGroupContext = {
  name: resolvedName.value,
  modelValue,
  required,
  setValue,
}

provide(RADIO_GROUP_CONTEXT_KEY, context)
</script>

<template>
  <div role="radiogroup">
    <slot />
  </div>
</template>
