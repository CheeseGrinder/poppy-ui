<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { LOADING_CONFIG } from './loading.context'
import type { LoadingProps } from './loading.props'
import type { LoadingSize, LoadingVariant } from './loading.types'


const loadingVariants: ComponentClass<'loading', LoadingVariant> = {
  spinner: 'loading-spinner',
  dots: 'loading-dots',
  ring: 'loading-ring',
  ball: 'loading-ball',
  bars: 'loading-bars',
  infinity: 'loading-infinity',
}

const loadingSizes: ComponentClass<'loading', LoadingSize> = {
  xs: 'loading-xs',
  sm: 'loading-sm',
  md: 'loading-md',
  lg: 'loading-lg',
  xl: 'loading-xl',
}
</script>

<script setup lang="ts">
const props = defineProps<LoadingProps>()
const config = useComponentConfig(LOADING_CONFIG, props, {
  variant: 'spinner',
  size: 'md',
})
</script>

<template>
  <span
    class="loading"
    :class="[
      getClass(loadingVariants, config.variant),
      getClass(loadingSizes, config.size),
    ]"
  />
</template>