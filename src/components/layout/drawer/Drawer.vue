<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { isTrue } from '@/utils/is-true'
import { inject, provide, useId, watch } from 'vue'
import { DRAWER_CONFIG } from './drawer.context'
import type { DrawerProps } from './drawer.props'
import type { DrawerSide } from './drawer.types'

const drawerSides: ComponentClass<'drawer', DrawerSide> = {
  start: 'drawer-start',
  end: 'drawer-end',
}

const BASE = 20
</script>

<script setup lang="ts">
const props = defineProps<DrawerProps>()
const open = defineModel<boolean>({ default: false })

const emit = defineEmits<{
  present: []
  close: []
}>()

const config = useComponentConfig(DRAWER_CONFIG, props, {
  side: 'start',
  overlay: true,
})

const parentLevel = inject('drawer-level', 0)
const level = parentLevel + 1
provide('drawer-level', level)

const zIndex = BASE + level * 10 + 1
const drawerId = `drawer-${useId()}`

watch(open, isOpen => {
  isOpen ? emit('present') : emit('close')
})

function present() {
  open.value = true
  emit('present')
}

function close() {
  open.value = false
  emit('close')
}

defineExpose({
  present,
  close,
})
</script>

<template>
  <div
    class="drawer"
    :class="getClass(drawerSides, config.side)"
  >
    <input
      :id="drawerId"
      v-model="open"
      type="checkbox"
      class="drawer-toggle"
    />

    <div class="drawer-content" :class="config.contentClass">
      <slot :drawer-id="drawerId" :is-open="open" :present="present" :close="close" />
    </div>

    <aside
      class="drawer-side"
      :class="config.sidebarClass"
      :style="{ zIndex }"
    >
      <label
        v-if="isTrue(config.overlay)"
        :for="drawerId"
        aria-label="close"
        class="drawer-overlay"
      />

      <slot name="sidebar" :drawer-id="drawerId" :is-open="open" :present="present" :close="close" />
    </aside>
  </div>
</template>
