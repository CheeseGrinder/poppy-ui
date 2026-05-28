<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { isTrue } from '@/utils/is-true'
import { MASK_CONFIG } from './mask.context'
import type { MaskProps } from './mask.props'
import type { MaskHalf, MaskVariant } from './mask.types'

const maskVariants: ComponentClass<'mask', MaskVariant> = {
  squircle: 'mask-squircle',
  heart: 'mask-heart',
  hexagon: 'mask-hexagon',
  'hexagon-2': 'mask-hexagon-2',
  decagon: 'mask-decagon',
  pentagon: 'mask-pentagon',
  diamond: 'mask-diamond',
  square: 'mask-square',
  circle: 'mask-circle',
  star: 'mask-star',
  'star-2': 'mask-star-2',
  triangle: 'mask-triangle',
  'triangle-2': 'mask-triangle-2',
  'triangle-3': 'mask-triangle-3',
  'triangle-4': 'mask-triangle-4',
}

const maskHalfs: ComponentClass<'mask', MaskHalf> = {
  'half-1': 'mask-half-1',
  'half-2': 'mask-half-2',
}
</script>

<script setup lang="ts">
const props = defineProps<MaskProps>()
const config = useComponentConfig(MASK_CONFIG, props)
</script>

<template>
  <div
    class="mask"
    :class="[
      getClass(maskVariants, config.variant),
      isTrue(config.inline) && 'inline-block',
      getClass(maskHalfs, config.half),
    ]"
  >
    <slot />
  </div>
</template>
