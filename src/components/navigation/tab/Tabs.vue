<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { TABS_CONFIG } from './tab.context'
import type { TabsProps } from './tab.props'
import type { TabPlacement, TabSize, TabVariant } from './tab.types'

const variants: ComponentClass<'tabs', TabVariant> = {
  box: 'tabs-box',
  border: 'tabs-border',
  lift: 'tabs-lift',
}

const sizes: ComponentClass<'tabs', TabSize> = {
  xs: 'tabs-xs',
  sm: 'tabs-sm',
  md: 'tabs-md',
  lg: 'tabs-lg',
  xl: 'tabs-xl',
}

const placements: ComponentClass<'tabs', TabPlacement> = {
  top: 'tabs-top',
  bottom: 'tabs-bottom',
}
</script>

<script setup lang="ts">
const props = defineProps<TabsProps>()
const config = useComponentConfig(TABS_CONFIG, props, {
  size: 'md',
  placement: 'top',
})
</script>

<template>
  <div
    role="tablist"
    class="tabs"
    :class="[
      getClass(variants, config.variant),
      getClass(sizes, config.size),
      getClass(placements, config.placement),
      config.class
    ]"
  >
    <slot />
  </div>
</template>
