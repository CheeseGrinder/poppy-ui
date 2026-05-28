<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { KBD_CONFIG } from './kbd.context'
import type { KbdProps } from './kbd.props'
import type { KbdSize } from './kbd.types'

const kbdSizes: ComponentClass<'kbd', KbdSize> = {
  xs: 'kbd-xs',
  sm: 'kbd-sm',
  md: 'kbd-md',
  lg: 'kbd-lg',
  xl: 'kbd-xl',
}
</script>

<script setup lang="ts">
const props = defineProps<KbdProps>()
const config = useComponentConfig(KBD_CONFIG, props, {
  size: 'md',
})
</script>

<template>
  <kbd
    class="kbd"
    :class="getClass(kbdSizes, config.size)"
  >
    <slot />
  </kbd>
</template>