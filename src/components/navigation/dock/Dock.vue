<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { DOCK_CONFIG } from './dock.context'
import type { DockProps } from './dock.props'
import type { DockSize } from './dock.types'

const sizes: ComponentClass<'dock', DockSize> = {
  xs: 'dock-xs',
  sm: 'dock-sm',
  md: 'dock-md',
  lg: 'dock-lg',
  xl: 'dock-xl',
}
</script>

<script setup lang="ts">
const props = defineProps<DockProps>()
const config = useComponentConfig(DOCK_CONFIG, props, {
  size: 'md',
})
</script>

<template>
  <div
    class="dock"
    :class="getClass(sizes, config.size)"
  >
    <slot />
  </div>
</template>