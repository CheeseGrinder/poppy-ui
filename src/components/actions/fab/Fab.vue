<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { FAB_CONFIG } from './fab.context'
import type { FabProps } from './fab.props'
import type { FabMode } from './fab.types'

const fabModes: ComponentClass<'fab', FabMode> = {
  flower: 'fab-flower',
}
</script>

<script setup lang="ts">
const props = defineProps<FabProps>()
const config = useComponentConfig(FAB_CONFIG, props)
</script>

<template>
  <div
    class="fab"
    :class="getClass(fabModes, config.mode)"
  >
    <div v-if="$slots.close" class="fab-close">
      <slot name="close"></slot>
    </div>
    <div v-if="$slots.mainAction" class="fab-main-action">
      <slot name="main-action"></slot>
    </div>

    <slot />
  </div>
</template>
