<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { useFormField } from '@/composables/use-form-field'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { computed, useTemplateRef } from 'vue'
import { RATING_CONFIG } from './rating.context'
import type { RatingProps } from './rating.props'
import type { RatingColor, RatingMask, RatingSize } from './rating.types'

const colors: ComponentClass<'bg', RatingColor> = {
  neutral: 'bg-neutral',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
  info: 'bg-info',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
}

const sizes: ComponentClass<'rating', RatingSize> = {
  xs: 'rating-xs',
  sm: 'rating-sm',
  md: 'rating-md',
  lg: 'rating-lg',
  xl: 'rating-xl',
}

const masks: ComponentClass<'mask', RatingMask> = {
  'hexagon-2': 'mask-hexagon-2',
  'star-2': 'mask-star-2',
  'triangle-2': 'mask-triangle-2',
  'triangle-3': 'mask-triangle-3',
  'triangle-4': 'mask-triangle-4',
  circle: 'mask-circle',
  decagon: 'mask-decagon',
  diamond: 'mask-diamond',
  heart: 'mask-heart',
  hexagon: 'mask-hexagon',
  pentagon: 'mask-pentagon',
  square: 'mask-square',
  squircle: 'mask-squircle',
  star: 'mask-star',
  triangle: 'mask-triangle',
}
</script>

<script setup lang="ts">
const props = defineProps<RatingProps>()

/**
 * The current rating value (1-based star index).
 * In half mode, increments by 0.5 (e.g. 0.5, 1, 1.5, 2…).
 * A value of 0 means no star is selected.
 */
const model = defineModel<number>()

const config = useComponentConfig(RATING_CONFIG, props, {
  size: 'md',
  count: 5,
  half: false,
  clearable: true,
  mask: 'star',
})

// ── Refs ─────────────────────────────────────────────────────────────────────

const rootEl = useTemplateRef('rootEl')

// ── Form field ───────────────────────────────────────────────────────────────

// Rating uses a hidden input as the form field anchor for constraint validation
const hiddenEl = useTemplateRef('hiddenEl')

const { field, fieldValue, onBlur, clearError } = useFormField<number>({
  required: computed(() => !!props.required),
  inputEl: hiddenEl,
})

// ── Value resolution ─────────────────────────────────────────────────────────

const resolvedValue = computed(() => field ? (fieldValue.value ?? 0) : (model.value ?? 0))

function handleChange(value: number): void {
  model.value = value
  field?.setValue(value)
  field?.setDirty(true)
  clearError()
}

// ── Star generation ──────────────────────────────────────────────────────────

interface StarInput {
  key: string
  value: number
  // full mode: 'mask-star' | half mode left half: 'mask-star-2 mask-half-1' | right half: 'mask-star-2 mask-half-2'
  maskClass: string
}

const stars = computed<StarInput[]>(() => {
  const count = config.value.count ?? 5
  const half = config.value.half
  const result: StarInput[] = []
  const mask = getClass(masks, config.value.mask)

  for (let i = 1; i <= count; i++) {
    if (half) {
      result.push({
        key: `${i}-left`,
        value: i - 0.5,
        maskClass: `mask ${mask} mask-half-1`,
      })
      result.push({
        key: `${i}-right`,
        value: i,
        maskClass: `mask ${mask} mask-half-2`,
      })
    } else {
      result.push({
        key: String(i),
        value: i,
        maskClass: `mask ${mask}`,
      })
    }
  }

  return result
})

// ── Error ────────────────────────────────────────────────────────────────────

const hasError = computed(() => !!field?.error.value)

defineExpose({
  $el: rootEl,
  focus: () => rootEl.value
    ?.querySelector<HTMLInputElement>('input[type="radio"]:not(.hidden):not(.rating-hidden)')
    ?.focus(),
})
</script>

<template>
  <div
    ref="rootEl"
    class="rating"
    :class="[
      getClass(sizes, config.size),
      { 'rating-half': config.half },
      { 'opacity-50 pointer-events-none': disabled },
    ]"
    @blur.capture="onBlur"
  >
    <!-- Hidden anchor input for constraint validation -->
    <input
      ref="hiddenEl"
      type="radio"
      class="hidden"
      :required="required"
      :checked="resolvedValue > 0"
    />

    <!-- Clear affordance — hidden radio at index 0 -->
    <input
      v-if="config.clearable"
      type="radio"
      class="rating-hidden"
      name="rating"
      :disabled="disabled"
      :checked="resolvedValue === 0"
      @change="handleChange(0)"
    />

    <!-- Star inputs -->
    <input
      v-for="star in stars"
      :key="star.key"
      type="radio"
      name="rating"
      :class="[
        star.maskClass,
        getClass(colors, config.color),
        { 'border-error': hasError },
      ]"
      :checked="resolvedValue === star.value"
      :disabled="disabled"
      @change="handleChange(star.value)"
    />
  </div>
</template>