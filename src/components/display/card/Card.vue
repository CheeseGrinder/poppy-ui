<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { CARD_CONFIG } from './card.context'
import type { CardProps } from './card.props'
import type { CardSize, CardVariant } from './card.types'

const cardVariants: ComponentClass<'card', CardVariant> = {
  border: 'card-border',
  dash: 'card-dash',
}

const cardSizes: ComponentClass<'card', CardSize> = {
  xs: 'card-xs',
  sm: 'card-sm',
  md: 'card-md',
  lg: 'card-lg',
  xl: 'card-xl',
}
</script>

<script setup lang="ts">
const props = defineProps<CardProps>()
const config = useComponentConfig(CARD_CONFIG, props, {})
</script>

<template>
  <div
    class="card bg-base-100"
    :class="[
      getClass(cardVariants, config.variant),
      getClass(cardSizes, config.size),
      config.side && 'card-side',
      config.imageFull && 'image-full',
    ]"
  >
    <slot />
  </div>
</template>