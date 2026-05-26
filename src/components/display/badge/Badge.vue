<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { BADGE_CONFIG } from './badge.context'
import type { BadgeProps } from './badge.props'
import type { BadgeColor, BadgeSize, BadgeVariant } from './badge.types'

const badgeColors: ComponentClass<'badge', BadgeColor> = {
  neutral: 'badge-neutral',
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
}

const badgeVariants: ComponentClass<'badge', BadgeVariant> = {
  outline: 'badge-outline',
  soft: 'badge-soft',
  dash: 'badge-dash',
}

const badgeSizes: ComponentClass<'badge', BadgeSize> = {
  xs: 'badge-xs',
  sm: 'badge-sm',
  md: 'badge-md',
  lg: 'badge-lg',
  xl: 'badge-xl',
}
</script>

<script setup lang="ts">
const props = defineProps<BadgeProps>()
const config = useComponentConfig(BADGE_CONFIG, props, {})
</script>

<template>
  <span
    class="badge"
    :class="[
      getClass(badgeColors, config.color),
      getClass(badgeVariants, config.variant),
      getClass(badgeSizes, config.size),
    ]"
  >
    <slot />
  </span>
</template>