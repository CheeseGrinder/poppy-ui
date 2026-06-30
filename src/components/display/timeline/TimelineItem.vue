<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { computed, inject, onMounted, onUnmounted, ref, useSlots, watch } from 'vue'
import { TIMELINE_CONTEXT_KEY, type TimelineItemState } from './timeline.context'
import { TIMELINE_ITEM_CONFIG } from './timeline-item.context'
import type { TimelineItemProps } from './timeline-item.props'
import type { TimelineItemColor } from './timeline-item.types'

const dotBgMap: ComponentClass<'bg', TimelineItemColor> = {
  neutral: 'bg-neutral',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
  info: 'bg-info',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
}

const dotTextMap: Record<TimelineItemColor, string> = {
  neutral: 'text-neutral-content',
  primary: 'text-primary-content',
  secondary: 'text-secondary-content',
  accent: 'text-accent-content',
  info: 'text-info-content',
  success: 'text-success-content',
  warning: 'text-warning-content',
  error: 'text-error-content',
}
</script>

<script setup lang="ts">
const props = defineProps<TimelineItemProps>()
const slots = useSlots()

const config = useComponentConfig(TIMELINE_ITEM_CONFIG, props, {})

// Register with parent Timeline for auto-connector management
const ctx = inject(TIMELINE_CONTEXT_KEY, null)
const id = Symbol()

const itemState = ref<TimelineItemState>({
  checked: props.checked ?? false,
  color: config.value.color,
})

watch(
  () => [props.checked, config.value.color] as const,
  ([checked, color]) => {
    itemState.value = { checked: checked ?? false, color }
  },
)

onMounted(() => ctx?.registerItem(id, itemState))
onUnmounted(() => ctx?.unregisterItem(id))

const isFirst = computed(() => ctx?.items.value[0] === id)
const isLast = computed(() => {
  const items = ctx?.items.value ?? []
  return items[items.length - 1] === id
})

const prevId = computed(() => {
  const items = ctx?.items.value ?? []
  const idx = items.indexOf(id)
  return idx > 0 ? items[idx - 1] : undefined
})

const prevState = computed(() => (prevId.value ? ctx?.getItemState(prevId.value) : undefined))

const showStartHr = computed(() => ctx !== null && !isFirst.value)
const showEndHr = computed(() => ctx !== null && !isLast.value)

// Connector colors: start hr inherits previous item's color, end hr uses this item's color
const startHrClass = computed(() =>
  prevState.value?.checked && prevState.value.color ? `bg-${prevState.value.color}` : undefined,
)
const endHrClass = computed(() =>
  (props.checked ?? false) && config.value.color ? `bg-${config.value.color}` : undefined,
)

// Layout logic:
// - no side (default): time → timeline-start, title+description → timeline-end
// - side='start': all content → timeline-start
// - side='end': all content → timeline-end
const hasTime = computed(() => !!(props.time || slots.time))
const hasContent = computed(() => !!(props.title || props.description || slots.title || slots.description))

const showStartDiv = computed(
  () => (hasTime.value && config.value.side !== 'end') || (hasContent.value && config.value.side === 'start'),
)
const showEndDiv = computed(
  () => (hasTime.value && config.value.side === 'end') || (hasContent.value && config.value.side !== 'start'),
)
</script>

<template>
  <li>
    <hr v-if="showStartHr" :class="startHrClass" />

    <!-- timeline-start: time only (default) OR all content (side='start') -->
    <div
      v-if="showStartDiv"
      :class="['timeline-start', config.side === 'start' && config.box && 'timeline-box', props.startClass]"
    >
      <!-- Time shown in start when side is 'start' or unset (not 'end') -->
      <slot name="time">
        <time v-if="props.time">{{ props.time }}</time>
      </slot>
      <!-- Title + description only in start when side='start' -->
      <template v-if="config.side === 'start'">
        <slot name="title">
          <div v-if="props.title" class="font-black">{{ props.title }}</div>
        </slot>
        <slot name="description">
          <p v-if="props.description">{{ props.description }}</p>
        </slot>
      </template>
    </div>

    <!-- timeline-middle: dot/icon -->
    <div
      v-if="slots.dot"
      :class="[
        'timeline-middle',
        config.color && 'rounded-full',
        config.color && (props.checked ? getClass(dotBgMap, config.color) : 'bg-base-300'),
        config.color && props.checked && dotTextMap[config.color],
        config.dotClass,
      ]"
    >
      <slot name="dot" />
    </div>

    <!-- timeline-end: title + description (default) OR all content (side='end') -->
    <div
      v-if="showEndDiv"
      :class="['timeline-end', config.side !== 'start' && config.box && 'timeline-box', props.endClass]"
    >
      <!-- Time shown in end only when side='end' -->
      <template v-if="config.side === 'end'">
        <slot name="time">
          <time v-if="props.time">{{ props.time }}</time>
        </slot>
      </template>
      <!-- Title + description shown in end when side='end' or no side -->
      <slot name="title">
        <div v-if="props.title" class="font-black">{{ props.title }}</div>
      </slot>
      <slot name="description">
        <p v-if="props.description">{{ props.description }}</p>
      </slot>
    </div>

    <hr v-if="showEndHr" :class="endHrClass" />
  </li>
</template>
