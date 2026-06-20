<script setup lang="ts">
import type { FieldSetProps } from './field-set.props'

defineProps<FieldSetProps>()
</script>

<template>
  <fieldset
    class="fieldset w-full"
    :class="[
      bordered && 'border border-base-300 rounded-box p-4',
      background && 'bg-base-200',
    ]"
  >
    <legend v-if="legend || $slots.legend" class="fieldset-legend">
      <slot name="legend">{{ legend }}</slot>
    </legend>
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </fieldset>
</template>
