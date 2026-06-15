<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { isTrue } from '@/utils/is-true'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { TAB_CONFIG } from './tab.context'
import type { TabProps } from './tab.props'
</script>

<script setup lang="ts">
const props = defineProps<TabProps>()
const config = useComponentConfig(TAB_CONFIG, props, {})

const tag = computed(() => {
  if (!props.to) return 'button'
  return RouterLink
})

const attr = computed(() => {
  if (tag.value === 'button') return {}
  return { to: props.to }
})
</script>

<template>
  <component
    :is="tag"
    v-bind="attr"
    role="tab"
    class="tab"
    :class="{
      'tab-active': isTrue(config.active),
      'tab-disabled': isTrue(config.disabled)
    }"
    :disabled="isTrue(config.disabled)"
  >
    <slot name="icon">
      <component v-if="config.icon" :is="config.icon" :size="16" class="me-2" />
    </slot>
    <slot />
  </component>
</template>
