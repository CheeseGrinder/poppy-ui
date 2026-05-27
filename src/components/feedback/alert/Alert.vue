<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { ALERT_CONFIG } from './alert.context'
import type { AlertProps } from './alert.props'
import type { AlertColor, AlertDirection, AlertVariant } from './alert.types'

const alertColors: ComponentClass<'alert', AlertColor> = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
}

const alertVariants: ComponentClass<'alert', AlertVariant> = {
  outline: 'alert-outline',
  dash: 'alert-dash',
  soft: 'alert-soft',
}

const alertDirections: ComponentClass<'alert', AlertDirection> = {
  horizontal: 'alert-horizontal',
  vertical: 'alert-vertical',
}
</script>

<script setup lang="ts">
const props = defineProps<AlertProps>()
const config = useComponentConfig(ALERT_CONFIG, props, {})
</script>

<template>
  <div
    role="alert"
    class="alert"
    :class="[
      getClass(alertColors, config.color),
      getClass(alertVariants, config.variant),
      getClass(alertDirections, config.direction),
    ]"
  >
    <slot name="icon" />
    <slot />
  </div>
</template>