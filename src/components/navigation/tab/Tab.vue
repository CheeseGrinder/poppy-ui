<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { computed, inject, useSlots, useTemplateRef } from 'vue'
import { RouterLink, useLink } from 'vue-router'
import { TAB_CONFIG, TABS_CONTEXT } from './tab.context'
import type { TabProps } from './tab.props'
</script>

<script setup lang="ts">
const props = defineProps<TabProps>()
const config = useComponentConfig(TAB_CONFIG, props, {})
const tabsContext = inject(TABS_CONTEXT, null)
const slots = useSlots()

if (tabsContext && props.value !== undefined) {
  tabsContext.register(props.value, !!props.active)
}

const tag = computed(() => {
  if (!props.to) {
    return 'button'
  }

  if (props.to.startsWith('#')) {
    return 'a'
  }

  return RouterLink
})

const attr = computed(() => {
  if (tag.value === 'button') {
    return {}
  }

  if (tag.value === 'a') {
    return { href: props.to }
  }

  return { to: props.to }
})

const isRouterActive = computed(() => {
  if (!props.to || props.to === '#') {
    return false
  }

  const { isExactActive } = useLink({ to: computed(() => props.to!) })
  return isExactActive.value
})

const isActive = computed(() => {
  if (tabsContext && props.value !== undefined) {
    return tabsContext.activeValue.value === props.value
  }

  if (props.to) {
    return isRouterActive.value
  }

  return config.value.active
})

const hasContent = computed(() => !!slots.default)

function onClick() {
  if (!props.to && tabsContext && props.value !== undefined) {
    tabsContext.setActive(props.value)
  }
}

const tabEl = useTemplateRef('tab-el')

defineExpose({
  $el: tabEl,
  focus: () => tabEl.value?.focus(),
})
</script>

<template>
  <component
    ref="tab-el"
    :is="tag"
    v-bind="attr"
    role="tab"
    class="tab"
    :class="{
      'tab-active': isActive,
      'tab-disabled': config.disabled
    }"
    :disabled="!props.to && config.disabled"
    @click="onClick"
  >
    <slot name="icon">
      <component v-if="config.icon" :is="config.icon" :size="16" class="me-2" />
    </slot>
    <slot name="title">{{ config.title }}</slot>
  </component>
  <div
    v-if="hasContent"
    class="tab-content bg-base-100 border-base-300 p-6"
    :style="{ display: isActive ? 'block' : 'none' }"
  >
    <slot />
  </div>
</template>
