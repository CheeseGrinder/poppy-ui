<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { STATS_CONFIG } from './stats.context'
import type { StatsProps } from './stats.props'
import type { StatsDirection } from './stats.types'

const statsDirections: ComponentClass<'stats', StatsDirection> = {
  horizontal: 'stats-horizontal',
  vertical: 'stats-vertical',
}
</script>

<script setup lang="ts">
const props = defineProps<StatsProps>()
const config = useComponentConfig(STATS_CONFIG, props, {
  direction: 'horizontal',
})
</script>

<template>
  <div
    class="stats"
    :class="getClass(statsDirections, config.direction)"
  >
    <slot />
  </div>
</template>
