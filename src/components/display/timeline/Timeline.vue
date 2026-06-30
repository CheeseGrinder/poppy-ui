<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { provide, type Ref, ref } from 'vue'
import { TIMELINE_CONFIG, TIMELINE_CONTEXT_KEY, type TimelineItemState } from './timeline.context'
import type { TimelineProps } from './timeline.props'
import type { TimelineDirection } from './timeline.types'

const timelineDirections: ComponentClass<'timeline', TimelineDirection> = {
  horizontal: 'timeline-horizontal',
  vertical: 'timeline-vertical',
}
</script>

<script setup lang="ts">
const props = defineProps<TimelineProps>()
const config = useComponentConfig(TIMELINE_CONFIG, props, {
  direction: 'horizontal',
})

const itemIds = ref<symbol[]>([])
const itemStateMap = new Map<symbol, Ref<TimelineItemState>>()

provide(TIMELINE_CONTEXT_KEY, {
  registerItem(id, state) {
    itemIds.value = [...itemIds.value, id]
    itemStateMap.set(id, state)
  },
  unregisterItem(id) {
    itemIds.value = itemIds.value.filter(i => i !== id)
    itemStateMap.delete(id)
  },
  items: itemIds,
  getItemState(id) {
    return itemStateMap.get(id)?.value
  },
})
</script>

<template>
  <ul
    :class="[
      'timeline',
      getClass(timelineDirections, config.direction),
      config.compact && 'timeline-compact',
      config.snapIcon && 'timeline-snap-icon',
    ]"
  >
    <slot />
  </ul>
</template>
