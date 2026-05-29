<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { computed } from 'vue'
import { RouterLink, useLink } from 'vue-router'
import { DOCK_ITEM_CONFIG } from './dock.context'
import type { DockItemProps } from './dock.props'
</script>

<script setup lang="ts">
const props = defineProps<DockItemProps>()
const config = useComponentConfig(DOCK_ITEM_CONFIG, props, {})

const tag = computed(() => {
  return props.to ? props.to === '#' ? 'a' : RouterLink : 'button'
})
const attr = computed(() => {
  if (tag.value === 'a') {
    return {
      href: props.to,
    }
  }
  if (tag.value === 'button') {
    return {}
  }

  return {
    to: props.to,
  }
})

const isActive = computed(() => {
  if (!props.to || props.to === '#') {
    return false
  }

  const link = useLink({ to: props.to })
  return link.isActive.value
})
</script>

<template>
  <component
    :is="tag"
    v-binf="attr"
    :class="isActive && 'dock-active'"
  >
    <component :is="config.icon" :size="20" />
    <span v-if="config.label" class="dock-label">{{ config.label }}</span>
  </component>
</template>