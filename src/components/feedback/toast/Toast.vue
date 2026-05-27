<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { TOAST_CONFIG } from './toast.context'
import type { ToastProps } from './toast.props'
import type { ToastAlign, ToastSide } from './toast.types'

const toastAligns: ComponentClass<'toast', ToastAlign> = {
  start: 'toast-start',
  center: 'toast-center',
  end: 'toast-end',
}

const toastSides: ComponentClass<'toast', ToastSide> = {
  top: 'toast-top',
  middle: 'toast-middle',
  bottom: 'toast-bottom',
}
</script>

<script setup lang="ts">
const props = defineProps<ToastProps>()
const config = useComponentConfig(TOAST_CONFIG, props, {
  align: 'end',
  side: 'bottom',
})
</script>

<template>
  <div
    class="toast"
    :class="[
      getClass(toastAligns, config.align),
      getClass(toastSides, config.side),
    ]"
  >
    <slot />
  </div>
</template>