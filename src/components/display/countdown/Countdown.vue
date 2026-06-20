<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { computed, onUnmounted, ref, watch } from 'vue'
import { COUNTDOWN_CONFIG } from './countdown.context'
import type { CountdownProps } from './countdown.props'
import type { CountdownDelta, CountdownTarget } from './countdown.types'

/**
 * Converts any supported CountdownTarget to a Unix timestamp in ms.
 */
function toTimestamp(to: CountdownTarget): number {
  // Native Date
  if (to instanceof Date) return to.getTime()

  // String or number
  if (typeof to === 'string' || typeof to === 'number') return new Date(to).getTime()

  // Temporal API (feature detection via duck typing)
  if (typeof to === 'object' && to !== null) {
    // Temporal.Instant — has epochMilliseconds
    if ('epochMilliseconds' in to) return (to as Temporal.Instant).epochMilliseconds

    // Temporal.ZonedDateTime — has epochMilliseconds
    if ('epochMilliseconds' in to && 'timeZoneId' in to) return (to as Temporal.ZonedDateTime).epochMilliseconds

    // Temporal.PlainDateTime — no timezone, convert via Temporal.Now.timeZoneId
    if ('toZonedDateTime' in to) {
      const zdt = (to as Temporal.PlainDateTime).toZonedDateTime(
        typeof Temporal !== 'undefined' ? Temporal.Now.timeZoneId() : 'UTC',
      )
      return zdt.epochMilliseconds
    }
  }

  return Number.NaN
}

function getDelta(targetMs: number): CountdownDelta {
  const diff = Math.max(0, targetMs - Date.now())
  return {
    days: Math.floor(diff / 1000 / 60 / 60 / 24),
    hours: Math.floor(diff / 1000 / 60 / 60) % 24,
    minutes: Math.floor(diff / 1000 / 60) % 60,
    seconds: Math.floor(diff / 1000) % 60,
    done: diff === 0,
  }
}
</script>

<script setup lang="ts">
const props = defineProps<CountdownProps>()
const config = useComponentConfig(COUNTDOWN_CONFIG, props, { digits: 2 })

const digits = computed(() => config.value.digits)

const emit = defineEmits<{
  /**
   * Emitted once when the countdown reaches zero.
   */
  end: []
}>()

const targetMs = computed(() => toTimestamp(props.to))
const delta = ref<CountdownDelta>(getDelta(targetMs.value))

let interval: ReturnType<typeof setInterval> | undefined

function stop() {
  if (interval !== undefined) {
    clearInterval(interval)
    interval = undefined
  }
}

function start() {
  stop()
  interval = setInterval(() => {
    delta.value = getDelta(targetMs.value)
    if (delta.value.done) {
      stop()
      emit('end')
    }
  }, 500)
}

watch(targetMs, () => {
  delta.value = getDelta(targetMs.value)
  start()
}, { immediate: true })

onUnmounted(stop)

defineExpose({ delta })
</script>

<template>
  <slot
    :days="delta.days"
    :hours="delta.hours"
    :minutes="delta.minutes"
    :seconds="delta.seconds"
    :done="delta.done"
    :digits="digits"
  >
    <!-- Default render: hh:mm:ss -->
    <span class="countdown font-mono text-2xl">
      <span :style="{ '--value': delta.hours, '--digits': digits }" :aria-label="String(delta.hours)">{{ delta.hours }}</span>
      :
      <span :style="{ '--value': delta.minutes, '--digits': digits }" :aria-label="String(delta.minutes)">{{ delta.minutes }}</span>
      :
      <span :style="{ '--value': delta.seconds, '--digits': digits }" :aria-label="String(delta.seconds)">{{ delta.seconds }}</span>
    </span>
  </slot>
</template>