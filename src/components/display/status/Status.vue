<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { STATUS_CONFIG } from './status.context'
import type { StatusProps } from './status.props'
import type { StatusColor, StatusSize } from './status.types'

const statusColors: ComponentClass<'status', StatusColor> = {
  neutral: 'status-neutral',
  primary: 'status-primary',
  secondary: 'status-secondary',
  accent: 'status-accent',
  info: 'status-info',
  success: 'status-success',
  warning: 'status-warning',
  error: 'status-error',
}

const statusSizes: ComponentClass<'status', StatusSize> = {
  xs: 'status-xs',
  sm: 'status-sm',
  md: 'status-md',
  lg: 'status-lg',
  xl: 'status-xl',
}
</script>

<script setup lang="ts">
const props = defineProps<StatusProps>()
const config = useComponentConfig(STATUS_CONFIG, props, {
  size: 'md',
})
</script>

<template>
  <!-- Ping: two overlapping elements via inline-grid -->
  <div
    v-if="config.animation === 'ping'"
    class="inline-grid *:[grid-area:1/1]"
    :aria-label="label"
  >
    <div
      class="status animate-ping"
      :class="[
        getClass(statusColors, config.color),
        getClass(statusSizes, config.size),
      ]"
    />
    <div
      class="status"
      :class="[
        getClass(statusColors, config.color),
        getClass(statusSizes, config.size),
      ]"
    />
  </div>

  <!-- Bounce or default -->
  <div
    v-else
    class="status"
    :aria-label="label"
    :class="[
      getClass(statusColors, config.color),
      getClass(statusSizes, config.size),
      config.animation === 'bounce' && 'animate-bounce',
    ]"
  />
</template>