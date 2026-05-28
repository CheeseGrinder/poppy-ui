<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { isTrue } from '@/utils/is-true'
import SwapItem from './SwapItem.vue'
import { SWAP_CONFIG } from './swap.context'
import type { SwapProps } from './swap.props'
import type { SwapVariant } from './swap.types'

const swapVariants: ComponentClass<'swap', SwapVariant> = {
  flip: 'swap-flip',
  rotate: 'swap-rotate',
}
</script>

<script setup lang="ts">
/**
 * Controls which slot is visible.
 * When `true`, the `on` slot is shown. Use `v-model` to bind reactively.
 *
 * @default false
 */
const model = defineModel<boolean>({ default: false })

const props = defineProps<SwapProps>()
const config = useComponentConfig(SWAP_CONFIG, props, {})

function toggle() {
  if (!isTrue(props.indeterminate)) {
    model.value = !model.value
  }
}
</script>

<template>
  <div
    class="swap"
    :class="[
      getClass(swapVariants, config.variant),
      isTrue(indeterminate) ? 'swap-indeterminate' : model && 'swap-active',
    ]"
    role="button"
    tabindex="0"
    @click="toggle"
    @keydown.enter.space.prevent="toggle"
  >
    <template v-if="isTrue(indeterminate) && $slots.indeterminate">
      <slot name="indeterminate" />
    </template>
    <template v-else>
      <SwapItem name="swap-on">
        <slot name="on" />
      </SwapItem>
      <SwapItem name="swap-off">
        <slot name="off" />
      </SwapItem>
    </template>
  </div>
</template>