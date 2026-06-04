<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import type { ComponentClass } from '@/types/utils.type'
import { isTrue } from '@/utils/is-true'
import { computed, useTemplateRef } from 'vue'
import { RANGE_CONFIG } from './range.context'
import type { RangeColor, RangeSize } from './range.types'

const colors: ComponentClass<'range', RangeColor> = {
  neutral: 'range-neutral',
  primary: 'range-primary',
  secondary: 'range-secondary',
  accent: 'range-accent',
  info: 'range-info',
  success: 'range-success',
  warning: 'range-warning',
  error: 'range-error',
}

const sizes: ComponentClass<'range', RangeSize> = {
  xs: 'range-xs',
  sm: 'range-sm',
  md: 'range-md',
  lg: 'range-lg',
  xl: 'range-xl',
}
</script>

<script setup lang="ts" generic="R extends boolean = false">
import { getClass } from '@/utils/build-class.util'
import type { RangeProps } from './range.props'

type ModelType = R extends true ? [number, number] : number

const props = defineProps<RangeProps<R>>()

/**
 * The current slider value.
 * In single mode: a number.
 * In double/range mode: a `[min, max]` tuple where the two values are always sorted.
 */
const model = defineModel<ModelType>()

// @ts-expect-error - Ignored due to the genereic in script
const config = useComponentConfig(RANGE_CONFIG, props, {
  size: 'md'
})

// ── Element ref + form field ─────────────────────────────────────────────────

const inputEl = useTemplateRef('inputEl')

const { field, fieldValue, onBlur, clearError } = useFormField<ModelType>({
  required: computed(() => isTrue(props.required)),
  inputEl,
})

// ── Value resolution ─────────────────────────────────────────────────────────

const resolvedMin = computed(() => props.min ?? 0)
const resolvedMax = computed(() => props.max ?? 100)
const resolvedStep = computed(() => props.step ?? 1)

const resolvedValue = computed<ModelType>(() => {
  const val = field ? fieldValue.value : model.value
  if (props.range) {
    return (val ?? [resolvedMin.value, resolvedMax.value]) as ModelType
  }
  return (val ?? resolvedMin.value) as ModelType
})

// ── Single mode helpers ──────────────────────────────────────────────────────

const singleValue = computed(() => resolvedValue.value as number)

// ── Double mode helpers ──────────────────────────────────────────────────────

const doubleValue = computed(() => resolvedValue.value as [number, number])

// ── Track background ─────────────────────────────────────────────────────────

/**
 * Converts a value to a percentage position on the track.
 */
function toPercent(val: number): number {
  const min = resolvedMin.value
  const max = resolvedMax.value
  return ((val - min) / (max - min)) * 100
}

/**
 * Computes the inline background gradient for the track fill.
 *
 * Single mode:
 *   - min >= 0 → fill from left edge to thumb
 *   - min < 0  → fill from zero (center anchor) to thumb
 *
 * Double mode:
 *   - fill between the two thumbs
 */
const trackStyle = computed(() => {
  const fill = 'oklch(var(--color-primary))'
  const empty = 'color-mix(in oklch, currentColor 20%, transparent)'

  if (props.range) {
    const [lo, hi] = doubleValue.value
    const loP = toPercent(lo)
    const hiP = toPercent(hi)
    return {
      background: `linear-gradient(to right,
        ${empty} ${loP}%,
        ${fill} ${loP}%,
        ${fill} ${hiP}%,
        ${empty} ${hiP}%
      )`,
    }
  }

  const val = singleValue.value
  const min = resolvedMin.value

  if (min < 0) {
    // Anchor at zero
    const zeroP = toPercent(0)
    const valP = toPercent(val)
    const loP = Math.min(zeroP, valP)
    const hiP = Math.max(zeroP, valP)
    return {
      background: `linear-gradient(to right,
        ${empty} ${loP}%,
        ${fill} ${loP}%,
        ${fill} ${hiP}%,
        ${empty} ${hiP}%
      )`,
    }
  }

  // Standard: fill from left to thumb
  const valP = toPercent(val)
  return {
    background: `linear-gradient(to right,
      ${fill} ${valP}%,
      ${empty} ${valP}%
    )`,
  }
})

// ── Change handlers ──────────────────────────────────────────────────────────

function setValue(next: ModelType): void {
  model.value = next
  field?.setValue(next)
  field?.setDirty(true)
  clearError()
}

function handleSingleChange(event: Event): void {
  const val = Number((event.target as HTMLInputElement).value)
  setValue(val as ModelType)
}

function handleDoubleChange(index: 0 | 1, event: Event): void {
  const newVal = Number((event.target as HTMLInputElement).value)
  const [a, b] = doubleValue.value

  if (index === 0) {
    // Left thumb crosses right → inversion
    setValue((newVal > b ? [b, newVal] : [newVal, b]) as ModelType)
  } else {
    // Right thumb crosses left → inversion
    setValue((newVal < a ? [newVal, a] : [a, newVal]) as ModelType)
  }
}
</script>

<template>
  <!-- Single mode -->
  <div v-if="!range" class="relative w-full">
    <input
      ref="inputEl"
      type="range"
      class="range w-full"
      :class="[
        getClass(colors, config.color),
        getClass(sizes, config.size),
      ]"
      :style="trackStyle"
      :value="singleValue"
      :min="resolvedMin"
      :max="resolvedMax"
      :step="resolvedStep"
      :disabled="disabled"
      :required="isTrue(required)"
      @input="handleSingleChange"
      @blur="onBlur"
    />
  </div>

  <!-- Double / range mode -->
  <div v-else class="relative w-full">
    <!-- Shared track background -->
    <div
      class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-2 rounded-full pointer-events-none"
      :style="trackStyle"
    />

    <!-- Left thumb -->
    <input
      ref="inputEl"
      type="range"
      class="range w-full absolute inset-0 pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-moz-range-thumb]:pointer-events-auto"
      :class="[
        getClass(colors, config.color),
        getClass(sizes, config.size),
        'range-track-transparent',
      ]"
      :value="doubleValue[0]"
      :min="resolvedMin"
      :max="resolvedMax"
      :step="resolvedStep"
      :disabled="disabled"
      @input="handleDoubleChange(0, $event)"
      @blur="onBlur"
    />

    <!-- Right thumb -->
    <input
      type="range"
      class="range w-full"
      :class="[
        getClass(colors, config.color),
        getClass(sizes, config.size),
        'range-track-transparent',
      ]"
      :value="doubleValue[1]"
      :min="resolvedMin"
      :max="resolvedMax"
      :step="resolvedStep"
      :disabled="disabled"
      @input="handleDoubleChange(1, $event)"
      @blur="onBlur"
    />
  </div>
</template>

<style scoped>
/* Hide the native track on both thumbs in double mode — we draw our own */
.range-track-transparent::-webkit-slider-runnable-track {
  background: transparent;
}

.range-track-transparent::-moz-range-track {
  background: transparent;
}
</style>