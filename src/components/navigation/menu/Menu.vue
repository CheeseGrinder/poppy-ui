<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { MENU_CONFIG } from './menu.context'
import type { MenuProps } from './menu.props'
import type { MenuDirection, MenuSize } from './menu.types'

const sizes: ComponentClass<'menu', MenuSize> = {
  xs: 'menu-xs',
  sm: 'menu-sm',
  md: 'menu-md',
  lg: 'menu-lg',
  xl: 'menu-xl',
}

const directions: ComponentClass<'menu', MenuDirection> = {
  vertical: 'menu-vertical',
  horizontal: 'menu-horizontal',
}
</script>

<script setup lang="ts">
const props = defineProps<MenuProps>()
const config = useComponentConfig(MENU_CONFIG, props, {
  size: 'md',
  direction: 'vertical'
})
</script>

<template>
  <ul
    class="menu"
    :class="[
      getClass(sizes, config.size),
      getClass(directions, config.direction),
    ]"
  >
    <slot />
  </ul>
</template>