<script setup lang="ts">
import { FORM_FIELD_CONTEXT_KEY } from '@/components/data/form-field/form-field.context'
import { computed, inject, provide, shallowRef, useId, watch } from 'vue'
import type { RadioGroupContext } from './radio-group.context'
import { RADIO_GROUP_CONTEXT_KEY } from './radio-group.context'
import type { RadioGroupProps } from './radio-group.props'

const props = defineProps<RadioGroupProps>()

/**
 * The currently selected value.
 * Each child `<Radio>` still owns its own `v-model` — this is only a
 * convenience model for standalone (non-FormField) usage.
 */
const model = defineModel<string | number | boolean>()

// RadioGroup should not be used inside FormField — place <Radio> directly
// inside <FormField> instead, each with its own `v-model`.
const fieldCtx = inject(FORM_FIELD_CONTEXT_KEY, null)

if (import.meta.env.DEV && fieldCtx) {
  console.warn(
    '[RadioGroup] Do not use <RadioGroup> inside <FormField>. ' +
      'Place <Radio> components directly inside <FormField>, each with its own `v-model`.',
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

const modelValue = computed<string | number | boolean | undefined>(() => model.value)

function setValue(value: string | number | boolean): void {
  model.value = value
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
