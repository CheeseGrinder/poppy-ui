<script lang="ts">
import ClassWrapper from '@/components/ClassWrapper.vue'
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
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
  if (!props.indeterminate) {
    model.value = !model.value
  }
}
</script>

<template>
  <div
    class="swap"
    :class="[
      getClass(swapVariants, config.variant),
      indeterminate ? 'swap-indeterminate' : model && 'swap-active',
    ]"
    role="button"
    tabindex="0"
    @click="toggle"
    @keydown.enter.space.prevent="toggle"
  >
    <template v-if="indeterminate && $slots.indeterminate">
      <slot name="indeterminate"></slot>
    </template>
    <template v-else>
      <ClassWrapper class="swap-on">
        <slot name="on"></slot>
      </ClassWrapper>
      <ClassWrapper class="swap-off">
        <slot name="off"></slot>
      </ClassWrapper>
    </template>
  </div>
</template>