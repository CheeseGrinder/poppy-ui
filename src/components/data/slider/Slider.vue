<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { getClass } from '@/utils/build-class.util'
import { useTemplateRefsList } from '@vueuse/core'
import { computed, onBeforeUnmount, ref, shallowRef, useTemplateRef, watch } from 'vue'
import { SLIDER_CONFIG } from './slider.context'
import type { SliderProps } from './slider.props'
import type { SliderColor, SliderSize } from './slider.types'

const colors: Record<SliderColor, string> = {
  neutral: 'slider--neutral',
  primary: 'slider--primary',
  secondary: 'slider--secondary',
  accent: 'slider--accent',
  info: 'slider--info',
  success: 'slider--success',
  warning: 'slider--warning',
  error: 'slider--error',
}

const sizes: Record<SliderSize, string> = {
  xs: 'slider--xs',
  sm: 'slider--sm',
  md: 'slider--md',
  lg: 'slider--lg',
  xl: 'slider--xl',
}
</script>

<script setup lang="ts" generic="R extends boolean = false">
type ModelType = R extends true ? [number, number] : number

const props = defineProps<SliderProps<R>>()
const model = defineModel<ModelType>()

// @ts-expect-error - Ignored due to the genereic in script
const config = useComponentConfig(SLIDER_CONFIG, props, {
  color: undefined,
  size: 'md',
  track: 'normal',
  min: 0,
  max: 100,
  step: 1,
  range: false,
  orientation: 'horizontal',
  showTooltip: 'hover',
  disableSwap: false,
})

const emit = defineEmits<{
  input: [value: ModelType]
  change: [value: ModelType]
}>()

const sliderRoot = useTemplateRef('sliderRoot')
const thumbRefs = useTemplateRefsList<HTMLElement>()

const isDragging = shallowRef(false)
const activeThumbIndex = shallowRef<number | null>(null)
const isHovering = shallowRef(false)
const hoverThumbIndex = shallowRef<number | null>(null)

// Internal mechanical values (always in min-max range)
const mechanicalValues = ref<number[]>([])

// Initialize mechanical values
const initMechanicalValues = () => {
  const defaultMin = props.min ?? 0
  const defaultMax = props.max ?? 100

  if (props.range || Array.isArray(model.value)) {
    const initial = model.value
      ? Array.isArray(model.value)
        ? model.value
        : [defaultMin, defaultMax]
      : [defaultMin, defaultMax]
    mechanicalValues.value = [
      Math.max(defaultMin, Math.min(defaultMax, initial[0])),
      Math.max(defaultMin, Math.min(defaultMax, initial[1])),
    ]
  } else {
    const value = model.value ?? defaultMin
    mechanicalValues.value = [Math.max(defaultMin, Math.min(defaultMax, value as number))]
  }
}

initMechanicalValues()

// Sync with prop changes (when not dragging)
watch(
  () => [model.value, props.range, props.min, props.max],
  () => {
    if (!isDragging.value) {
      initMechanicalValues()
    }
  },
  { deep: true },
)

// Computed properties
const isRange = computed(() => props.range || mechanicalValues.value.length > 1)
const displayThumbValues = computed(() => mechanicalValues.value)

// Should we render the track?
const shouldRenderTrack = computed(() => config.value.track !== 'none')

// Effective min/max/step with defaults
const effectiveMin = computed(() => config.value.min!)
const effectiveMax = computed(() => config.value.max!)
const effectiveStep = computed(() => config.value.step!)

// Scaled min/max for ARIA
const scaledMin = computed(() => props.scale?.(effectiveMin.value) ?? effectiveMin.value)
const scaledMax = computed(() => props.scale?.(effectiveMax.value) ?? effectiveMax.value)

// Get config values safely
const configDisableSwap = computed(() => props.disableSwap ?? false)

// Calculate percentage from mechanical value
const getPercent = (mechanicalValue: number): number => {
  const range = effectiveMax.value - effectiveMin.value
  if (range === 0) return 0
  return ((mechanicalValue - effectiveMin.value) / range) * 100
}

// Get mechanical value from percentage
const getMechanicalValueFromPercent = (percent: number): number => {
  const range = effectiveMax.value - effectiveMin.value
  let mechanical = effectiveMin.value + (percent / 100) * range

  if (effectiveStep.value > 0) {
    const steps = Math.round((mechanical - effectiveMin.value) / effectiveStep.value)
    mechanical = effectiveMin.value + steps * effectiveStep.value
  }

  return Math.min(effectiveMax.value, Math.max(effectiveMin.value, mechanical))
}

// Track style based on track mode
const trackStyle = computed(() => {
  const percent0 = getPercent(displayThumbValues.value[0])
  const percent1 = isRange.value ? getPercent(displayThumbValues.value[1]) : 0

  const minPercent = Math.min(percent0, percent1)
  const maxPercent = Math.max(percent0, percent1)

  if (isRange.value) {
    if (config.value.track === 'inverted') {
      // Normal track for inverted mode will be hidden, we use separate elements
      return { display: 'none' }
    }
    // Normal: show track between thumbs
    if (props.orientation === 'vertical') {
      return {
        bottom: `${minPercent}%`,
        height: `${maxPercent - minPercent}%`,
      }
    }
    return {
      left: `${minPercent}%`,
      width: `${maxPercent - minPercent}%`,
    }
  }
  // Single thumb
  if (config.value.track === 'inverted') {
    if (props.orientation === 'vertical') {
      return {
        bottom: `${percent0}%`,
        height: `${100 - percent0}%`,
      }
    }
    return {
      left: `${percent0}%`,
      width: `${100 - percent0}%`,
    }
  }
  if (props.orientation === 'vertical') {
    return {
      bottom: '0%',
      height: `${percent0}%`,
    }
  }
  return {
    left: '0%',
    width: `${percent0}%`,
  }
})

// Inverted track styles for range mode
const invertedTrackStartStyle = computed(() => {
  if (!isRange.value || config.value.track !== 'inverted') return {}
  const minVal = Math.min(displayThumbValues.value[0], displayThumbValues.value[1])
  const minPercent = getPercent(minVal)
  if (props.orientation === 'vertical') {
    return {
      bottom: '0%',
      height: `${minPercent}%`,
    }
  }
  return {
    left: '0%',
    width: `${minPercent}%`,
  }
})

const invertedTrackEndStyle = computed(() => {
  if (!isRange.value || config.value.track !== 'inverted') return {}
  const maxVal = Math.max(displayThumbValues.value[0], displayThumbValues.value[1])
  const maxPercent = getPercent(maxVal)
  if (props.orientation === 'vertical') {
    return {
      bottom: `${maxPercent}%`,
      height: `${100 - maxPercent}%`,
    }
  }
  return {
    left: `${maxPercent}%`,
    width: `${100 - maxPercent}%`,
  }
})

// Thumb style
const getThumbStyle = (thumbIndex: number) => {
  const percent = getPercent(displayThumbValues.value[thumbIndex])
  if (props.orientation === 'vertical') {
    return {
      bottom: `${percent}%`,
      left: '50%',
      transform: 'translateX(-50%)',
    }
  }
  return {
    left: `${percent}%`,
    top: '50%',
    transform: 'translate(-50%, -50%)',
  }
}

// Tooltip style
const getTooltipStyle = (thumbIndex: number) => {
  const percent = getPercent(displayThumbValues.value[thumbIndex])
  if (props.orientation === 'vertical') {
    return {
      bottom: `${percent + 10}%`,
      left: '50%',
      transform: 'translateX(-50%)',
    }
  }
  return {
    left: `${percent}%`,
    top: '-32px',
    transform: 'translateX(-50%)',
  }
}

// Format value for display (applies scale if available)
const formatValueForDisplay = (mechanicalValue: number): string => {
  if (props.scale) {
    return String(props.scale(mechanicalValue))
  }
  return String(mechanicalValue)
}

// Get ARIA value (applies scale if available)
const getAriaValue = (thumbIndex: number): number => {
  if (props.scale) {
    return props.scale(displayThumbValues.value[thumbIndex])
  }
  return displayThumbValues.value[thumbIndex]
}

// Tooltip visibility
const shouldShowTooltip = (thumbIndex: number): boolean => {
  if (props.showTooltip === 'never') return false
  if (props.showTooltip === 'always') return true
  return (
    (isHovering.value && hoverThumbIndex.value === thumbIndex) ||
    (isDragging.value && activeThumbIndex.value === thumbIndex)
  )
}

// ARIA
const computedAriaLabel = computed(() => props.ariaLabel || 'Slider')

const getThumbAriaLabel = (thumbIndex: number): string => {
  if (isRange.value) {
    return thumbIndex === 0 ? `${computedAriaLabel.value} - Minimum` : `${computedAriaLabel.value} - Maximum`
  }
  return computedAriaLabel.value
}

// Value from position (returns mechanical value)
function getMechanicalValueFromPosition(clientX: number, clientY: number): number {
  if (!sliderRoot.value) return effectiveMin.value

  const rect = sliderRoot.value.getBoundingClientRect()
  let percent: number

  if (props.orientation === 'vertical') {
    const y = clientY - rect.top
    percent = 1 - y / rect.height
  } else {
    const x = clientX - rect.left
    percent = x / rect.width
  }

  percent = Math.max(0, Math.min(1, percent))
  return getMechanicalValueFromPercent(percent * 100)
}

// Find closest thumb index
function findClosestThumb(mechanicalValue: number): number {
  if (!isRange.value) return 0

  const dist0 = Math.abs(mechanicalValue - displayThumbValues.value[0])
  const dist1 = Math.abs(mechanicalValue - displayThumbValues.value[1])
  return dist0 < dist1 ? 0 : 1
}

// Update mechanical values with swap logic
function updateMechanicalValue(newMechanicalValue: number, thumbIndex: number) {
  if (isRange.value) {
    const nextValues = [...displayThumbValues.value]

    if (configDisableSwap.value) {
      // Prevent crossing: clamp to other thumb
      if (thumbIndex === 0) {
        nextValues[0] = Math.min(newMechanicalValue, nextValues[1])
      } else {
        nextValues[1] = Math.max(newMechanicalValue, nextValues[0])
      }
    } else {
      // Allow swap: set the value directly
      nextValues[thumbIndex] = newMechanicalValue

      // Always keep values sorted: index 0 = min, index 1 = max
      if (nextValues[0] > nextValues[1]) {
        // Swap the values
        ;[nextValues[0], nextValues[1]] = [nextValues[1], nextValues[0]]
        // Swap active thumb index so user continues controlling the same visual thumb
        if (isDragging.value && activeThumbIndex.value !== null) {
          activeThumbIndex.value = activeThumbIndex.value === 0 ? 1 : 0
        }
      }
    }

    mechanicalValues.value = nextValues
    const scaledValues: [number, number] = [
      props.scale ? props.scale(nextValues[0]) : nextValues[0],
      props.scale ? props.scale(nextValues[1]) : nextValues[1],
    ]
    // @ts-expect-error
    model.value = scaledValues
  } else {
    mechanicalValues.value = [newMechanicalValue]
    const scaledValue = props.scale ? props.scale(newMechanicalValue) : newMechanicalValue
    // @ts-expect-error
    model.value = scaledValue
  }

  // @ts-expect-error
  emit('input', model.value)
}

// Handle rail click
function handleRailClick(event: MouseEvent | TouchEvent) {
  if (props.disabled) return

  const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
  const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY

  const clickValue = getMechanicalValueFromPosition(clientX, clientY)
  const thumbIndex = findClosestThumb(clickValue)

  updateMechanicalValue(clickValue, thumbIndex)

  if (event.type === 'mousedown' || ('touches' in event && event.touches.length > 0)) {
    isDragging.value = true
    activeThumbIndex.value = thumbIndex

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseup', handleEnd)
    window.addEventListener('touchmove', handleMove, { passive: false })
    window.addEventListener('touchend', handleEnd)
  }
}

// Handle thumb down
function handleThumbDown(event: MouseEvent | TouchEvent, thumbIndex: number) {
  if (props.disabled) return

  event.preventDefault()
  event.stopPropagation()

  isDragging.value = true
  activeThumbIndex.value = thumbIndex

  window.addEventListener('mousemove', handleMove)
  window.addEventListener('mouseup', handleEnd)
  window.addEventListener('touchmove', handleMove, { passive: false })
  window.addEventListener('touchend', handleEnd)
}

// Handle move
function handleMove(event: MouseEvent | TouchEvent) {
  if (!isDragging.value || activeThumbIndex.value === null) return

  const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX
  const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY

  const newValue = getMechanicalValueFromPosition(clientX, clientY)
  updateMechanicalValue(newValue, activeThumbIndex.value)
}

// Handle end
function handleEnd() {
  if (!isDragging.value) return

  isDragging.value = false
  activeThumbIndex.value = null

  window.removeEventListener('mousemove', handleMove)
  window.removeEventListener('mouseup', handleEnd)
  window.removeEventListener('touchmove', handleMove)
  window.removeEventListener('touchend', handleEnd)

  // @ts-expect-error
  emit('change', model.value)
}

// Thumb hover/enter/leave
function handleThumbEnter(thumbIndex: number) {
  isHovering.value = true
  hoverThumbIndex.value = thumbIndex
}

function handleThumbLeave() {
  isHovering.value = false
  hoverThumbIndex.value = null
}

// Focus handling
function handleThumbFocus(_thumbIndex: number) {
  // No-op for now
}

function handleThumbBlur() {
  // @ts-expect-error
  emit('change', model.value)
}

// Container keydown
function handleContainerKeydown(event: KeyboardEvent) {
  if (props.disabled) return
  if (event.key === 'Tab' && !isHovering.value) {
    event.preventDefault()
    thumbRefs.value[0]?.focus()
  }
}

// Thumb keyboard navigation
function handleThumbKeydown(event: KeyboardEvent, thumbIndex: number) {
  if (props.disabled) return

  const currentValue = displayThumbValues.value[thumbIndex]
  let newValue: number

  const rangeSize = effectiveMax.value - effectiveMin.value
  const pageStep = rangeSize * 0.1
  const arrowStep = effectiveStep.value

  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowUp':
      newValue = currentValue + arrowStep
      break
    case 'ArrowLeft':
    case 'ArrowDown':
      newValue = currentValue - arrowStep
      break
    case 'PageUp':
      newValue = currentValue + pageStep
      break
    case 'PageDown':
      newValue = currentValue - pageStep
      break
    case 'Home':
      newValue = effectiveMin.value
      break
    case 'End':
      newValue = effectiveMax.value
      break
    case 'Escape':
      isDragging.value = false
      activeThumbIndex.value = null
  // @ts-expect-error
      emit('change', model.value)
      return
    default:
      return
  }

  event.preventDefault()

  newValue = Math.min(effectiveMax.value, Math.max(effectiveMin.value, newValue))

  // Only prevent crossing if disableSwap is true
  if (isRange.value && configDisableSwap.value) {
    const otherValue = thumbIndex === 0 ? displayThumbValues.value[1] : displayThumbValues.value[0]
    if (thumbIndex === 0) {
      newValue = Math.min(newValue, otherValue)
    } else {
      newValue = Math.max(newValue, otherValue)
    }
  }

  updateMechanicalValue(newValue, thumbIndex)
  // @ts-expect-error
  emit('change', model.value)
}

// Cleanup event listeners
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMove)
  window.removeEventListener('mouseup', handleEnd)
  window.removeEventListener('touchmove', handleMove)
  window.removeEventListener('touchend', handleEnd)
})
</script>

<template>
  <div
    ref="sliderRoot"
    class="slider-root"
    :class="[
      getClass(colors, config.color),
      getClass(sizes, config.size),
      {
        'slider-vertical': orientation === 'vertical',
        'slider-horizontal': orientation === 'horizontal',
        'slider-disabled': disabled,
        'slider-range': isRange
      }
    ]"
    role="group"
    :aria-label="computedAriaLabel"
    @mousedown="handleRailClick"
    @touchstart.prevent="handleRailClick"
    @keydown="handleContainerKeydown"
  >
    <!-- Rail -->
    <div class="slider-rail" ref="railRef"></div>

    <!-- Track (conditionally rendered based on track prop) -->
    <div v-if="shouldRenderTrack" class="slider-track" :style="trackStyle"></div>
    
    <!-- Inverted track for range mode - needs two elements -->
    <template v-if="isRange && config.track === 'inverted'">
      <div class="slider-track slider-track--inverted-start" :style="invertedTrackStartStyle"></div>
      <div class="slider-track slider-track--inverted-end" :style="invertedTrackEndStyle"></div>
    </template>

    <!-- Thumbs -->
    <div
      v-for="(thumbValue, thumbIndex) in displayThumbValues"
      :key="`thumb-${thumbIndex}`"
      :ref="thumbRefs.set"
      class="slider-thumb"
      :class="{
        'slider-thumb-active': isDragging && activeThumbIndex === thumbIndex,
        'slider-thumb-hover': isHovering && hoverThumbIndex === thumbIndex
      }"
      :style="getThumbStyle(thumbIndex)"
      role="slider"
      tabindex="0"
      :aria-valuemin="scaledMin"
      :aria-valuemax="scaledMax"
      :aria-valuenow="getAriaValue(thumbIndex)"
      :aria-label="getThumbAriaLabel(thumbIndex)"
      :aria-orientation="orientation"
      :aria-disabled="disabled || undefined"
      @mousedown.stop="handleThumbDown($event, thumbIndex)"
      @touchstart.stop.prevent="handleThumbDown($event, thumbIndex)"
      @mouseenter="() => handleThumbEnter(thumbIndex)"
      @mouseleave="() => handleThumbLeave()"
      @keydown.stop="handleThumbKeydown($event, thumbIndex)"
      @focus="() => handleThumbFocus(thumbIndex)"
      @blur="handleThumbBlur"
    >
      <!-- Tooltip -->
      <div
        v-if="shouldShowTooltip(thumbIndex)"
        class="slider-value-label"
        :class="{ 'slider-value-label-visible': isDragging || isHovering }"
        :style="getTooltipStyle(thumbIndex)"
      >
        {{ formatValueForDisplay(thumbValue) }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-root {
  /* Defaults → base 200 */
  --slider-color: var(--color-base-content);
  --slider-track-h: 0.375rem;
  --slider-thumb-size: 1.25rem;

  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(var(--slider-thumb-size) + 0.5rem);
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

/* Sizes */
.slider-root.slider--xs {
  --slider-track-h: 0.2rem;
  --slider-thumb-size: 0.75rem;
}
.slider-root.slider--sm {
  --slider-track-h: 0.25rem;
  --slider-thumb-size: 1rem;
}
.slider-root.slider--md {
  --slider-track-h: 0.375rem;
  --slider-thumb-size: 1.25rem;
}
.slider-root.slider--lg {
  --slider-track-h: 0.5rem;
  --slider-thumb-size: 1.625rem;
}
.slider-root.slider--xl {
  --slider-track-h: 0.625rem;
  --slider-thumb-size: 2rem;
}

/* Colors */
.slider-root.slider--neutral {
  --slider-color: var(--color-neutral);
}
.slider-root.slider--primary {
  --slider-color: var(--color-primary);
}
.slider-root.slider--secondary {
  --slider-color: var(--color-secondary);
}
.slider-root.slider--accent {
  --slider-color: var(--color-accent);
}
.slider-root.slider--info {
  --slider-color: var(--color-info);
}
.slider-root.slider--success {
  --slider-color: var(--color-success);
}
.slider-root.slider--warning {
  --slider-color: var(--color-warning);
}
.slider-root.slider--error {
  --slider-color: var(--color-error);
}

/* Orientation */
.slider-horizontal {
  width: 100%;
}

.slider-vertical {
  width: var(--slider-thumb-size);
  height: 200px;
  flex-direction: column;
  align-items: center;
}

/* Disabled state */
.slider-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Rail */
.slider-rail {
  position: absolute;
  width: 100%;
  height: var(--slider-track-h);
  border-radius: 9999px;
  background-color: color-mix(in oklch, var(--slider-color) 20%, var(--color-base-200));
  pointer-events: none;
}

.slider-vertical .slider-rail {
  width: var(--slider-track-h);
  height: 100%;
}

/* Track */
.slider-track {
  position: absolute;
  height: var(--slider-track-h);
  border-radius: 9999px;
  background-color: var(--slider-color);
  pointer-events: none;
}

.slider-vertical .slider-track {
  width: var(--slider-track-h);
}

/* Thumb */
.slider-thumb {
  position: absolute;
  width: var(--slider-thumb-size);
  height: var(--slider-thumb-size);
  border-radius: 9999px;
  background-color: var(--color-base-100);
  border: 2px solid var(--slider-color);
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.15);
  cursor: pointer;
  z-index: 2;
  pointer-events: auto;
  user-select: none;
  -webkit-user-select: none;
  display: block !important;
}

.slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 6px 0 rgb(0 0 0 / 0.2);
}

.slider-thumb:active {
  transform: scale(0.95);
}

.slider-thumb:focus {
  outline: 2px solid var(--slider-color);
  outline-offset: 2px;
}

.slider-disabled .slider-thumb {
  cursor: not-allowed;
  pointer-events: none;
  transform: none;
}

/* Tooltip */
.slider-value-label {
  position: absolute;
  background-color: var(--color-base-100);
  color: var(--color-base-content);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  z-index: 3;
  pointer-events: none;
}

.slider-value-label-visible {
  opacity: 1;
  visibility: visible;
}
</style>
