<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { computed } from 'vue'
import { RADIAL_PROGRESS_CONFIG } from './radial-progress.context'
import type { RadialProgressProps } from './radial-progress.props'
import type { RadialProgressColor } from './radial-progress.types'

const colors: ComponentClass<'text', RadialProgressColor> = {
  neutral: 'text-neutral',
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
}
</script>

<script setup lang="ts">
const props = defineProps<RadialProgressProps>()
const config = useComponentConfig(RADIAL_PROGRESS_CONFIG, props, {
  value: 0,
  size: '5rem',
})

const cssVars = computed(() => ({
  '--value': config.value.value,
  ...(config.value.size && { '--size': config.value.size }),
  ...(config.value.thickness && { '--thickness': config.value.thickness }),
}))
</script>

<template>
  <div
    class="radial-progress"
    :class="getClass(colors, config.color)"
    :style="cssVars"
    :aria-valuenow="config.value"
    role="progressbar"
  >
    <slot>{{ config.value }}%</slot>
  </div>
</template>