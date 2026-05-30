<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { isTrue } from '@/utils/is-true'
import { computed } from 'vue'
import { PROGRESS_CONFIG } from './progress.context'
import type { ProgressProps } from './progress.props'
import type { ProgressColor } from './progress.types'

const colors: ComponentClass<'progress', ProgressColor> = {
  neutral: 'progress-neutral',
  primary: 'progress-primary',
  secondary: 'progress-secondary',
  accent: 'progress-accent',
  info: 'progress-info',
  success: 'progress-success',
  warning: 'progress-warning',
  error: 'progress-error',
}
</script>

<script setup lang="ts">
const props = defineProps<ProgressProps>()
const config = useComponentConfig(PROGRESS_CONFIG, props, { max: 100 })

const isIndeterminate = computed(() => isTrue(props.indeterminate) || props.value === undefined)
</script>

<template>
  <progress
    class="progress"
    :class="getClass(colors, config.color)"
    :value="isIndeterminate ? undefined : props.value"
    :max="isIndeterminate ? undefined : config.max"
  />
</template>