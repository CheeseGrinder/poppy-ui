<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { clsx, getClass } from '@/utils/build-class.util'
import { DIVIDER_CONFIG } from './divider.context'
import type { DividerProps } from './divider.props'
import type { DividerColor, DividerOrientation, DividerPlacement } from './divider.types'

const dividerOrientations: ComponentClass<'divider', DividerOrientation> = {
  horizontal: 'divider-horizontal',
  vertical: 'divider-vertical',
}

const dividerColors: ComponentClass<'divider', DividerColor> = {
  neutral: 'divider-neutral',
  primary: 'divider-primary',
  secondary: 'divider-secondary',
  accent: 'divider-accent',
  info: 'divider-info',
  success: 'divider-success',
  warning: 'divider-warning',
  error: 'divider-error',
}

const dividerPlacements: ComponentClass<'divider', DividerPlacement> = {
  start: 'divider-start',
  end: 'divider-end',
}
</script>

<script setup lang="ts">
const props = defineProps<DividerProps>()
const config = useComponentConfig(DIVIDER_CONFIG, props)
</script>

<template>
  <div
    class="divider"
    :class="clsx([
      'w-full',
      getClass(dividerOrientations, config.orientation),
      getClass(dividerColors, config.color),
      getClass(dividerPlacements, config.placement),
    ])"
  >
    <slot />
  </div>
</template>
