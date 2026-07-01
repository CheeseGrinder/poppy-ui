<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { computed } from 'vue'
import { STEP_CONFIG } from './step.context'
import type { StepProps } from './step.props'
</script>

<script setup lang="ts">
const props = defineProps<StepProps>()
const config = useComponentConfig(STEP_CONFIG, props, {})

const highlightColor = computed(() =>
  props.highlighted && config.value.color ? `var(--color-${config.value.color})` : 'transparent',
)
</script>

<template>
  <li
    :class="[
      'step',
      !highlighted && config.color && `step-${config.color}`,
      highlighted && config.color && 'step-highlighted',
    ]"
    :data-content="content"
  >
    <span v-if="$slots.icon" class="step-icon">
      <slot name="icon" />
    </span>
    <slot />
  </li>
</template>

<style scoped>
.step-highlighted {
  --step-bg: color-mix(in oklab, v-bind(highlightColor) 20%, var(--color-base-100));
  --step-fg: v-bind(highlightColor);
}
</style>
