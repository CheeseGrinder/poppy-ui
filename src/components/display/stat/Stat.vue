<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { STAT_CONFIG } from './stat.context'
import type { StatProps } from './stat.props'
import type { StatAlign } from './stat.types'

const statAligns: ComponentClass<'place-items', StatAlign> = {
  start: 'place-items-start',
  center: 'place-items-center',
  end: 'place-items-end',
}
</script>

<script setup lang="ts">
const props = defineProps<StatProps>()
const config = useComponentConfig(STAT_CONFIG, props, {})
</script>

<template>
  <div
    class="stat"
    :class="getClass(statAligns, config.align)"
  >
    <div v-if="$slots.figure" class="stat-figure" :class="figureClass">
      <slot name="figure" />
    </div>
    <div v-if="title || $slots.title" class="stat-title" :class="titleClass">
      <slot name="title">{{ title }}</slot>
    </div>
    <div v-if="value !== undefined || $slots.value" class="stat-value" :class="valueClass">
      <slot name="value">{{ value }}</slot>
    </div>
    <div v-if="desc || $slots.desc" class="stat-desc" :class="descClass">
      <slot name="desc">{{ desc }}</slot>
    </div>
    <div v-if="$slots.actions" class="stat-actions" :class="actionsClass">
      <slot name="actions" />
    </div>
    <slot />
  </div>
</template>
