<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { LINK_CONFIG } from './link.context'
import type { LinkProps } from './link.props'
import type { LinkColor } from './link.types'

const colors: ComponentClass<'link', LinkColor> = {
  neutral: 'link-neutral',
  primary: 'link-primary',
  secondary: 'link-secondary',
  accent: 'link-accent',
  info: 'link-info',
  success: 'link-success',
  warning: 'link-warning',
  error: 'link-error',
}
</script>

<script setup lang="ts">
const props = defineProps<LinkProps>()
const config = useComponentConfig(LINK_CONFIG, props, {
  hover: false,
})

const tag = computed(() => {
  return props.to ? props.to === '#' ? 'a' : RouterLink : 'a'
})

const attr = computed(() => {
  if (tag.value === 'a') {
    return {
      href: props.to,
    }
  }
  return {
    to: props.to,
  }
})
</script>

<template>
  <component
    :is="tag"
    v-bind="attr"
    class="link"
    :class="[
      getClass(colors, config.color),
      config.hover && 'link-hover',
    ]"
  >
    <slot />
  </component>
</template>