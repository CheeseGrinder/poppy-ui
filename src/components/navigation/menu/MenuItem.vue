<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { computed, useSlots } from 'vue'
import { RouterLink, useLink } from 'vue-router'
import { MENU_ITEM_CONFIG } from './menu.context'
import type { MenuItemProps } from './menu.props'
</script>

<script setup lang="ts">
const props = defineProps<MenuItemProps>()
const emit = defineEmits<{ click: [event: MouseEvent] }>()
const config = useComponentConfig(MENU_ITEM_CONFIG, props, {})

const slots = useSlots()

const hasSubmenu = computed(() => !!slots.submenu)
const isTitle = computed(() => props.title)

const tag = computed(() => {
  if (!props.to) return 'a'
  return props.to === '#' ? 'a' : RouterLink
})

const attr = computed(() => {
  if (tag.value === 'a') return { href: props.to }
  return { to: props.to }
})

const isActive = computed(() => {
  if (props.active) return true
  if (!props.to || props.to === '#') return false
  const { isActive } = useLink({ to: computed(() => props.to!) })
  return isActive.value
})
</script>

<template>
  <!-- Title item (standalone) -->
  <li v-if="isTitle && !hasSubmenu" class="menu-title inline-flex items-center gap-2">
    <component :is="props.icon" v-if="props.icon" :size="14" />
    <slot />
  </li>

  <!-- Title item as parent (with submenu): uses <h2> per DaisyUI spec -->
  <template v-else-if="isTitle && hasSubmenu">
    <h2 class="menu-title inline-flex items-center gap-2">
      <component :is="props.icon" v-if="props.icon" :size="14" />
      <slot />
    </h2>
    <ul>
      <slot name="submenu" />
    </ul>
  </template>

  <!-- Regular item -->
  <li v-else :class="{
    'menu-disabled': config.disabled
  }">

    <!-- With submenu + collapsible: <details>/<summary> -->
    <template v-if="hasSubmenu && config.collapsible">
      <details>
        <summary>
          <component :is="config.icon" v-if="config.icon" :size="16" />
          <slot />
          <slot name="badge" />
        </summary>
        <ul>
          <slot name="submenu" />
        </ul>
      </details>
    </template>

    <!-- With submenu, static: label + nested <ul> -->
    <template v-else-if="hasSubmenu">
      <component
        :is="tag"
        v-bind="attr"
        :class="isActive && 'menu-active'"
        @click="emit('click', $event)"
      >
        <component :is="config.icon" v-if="config.icon" :size="16" />
        <slot />
        <slot name="badge" />
      </component>
      <ul>
        <slot name="submenu" />
      </ul>
    </template>

    <!-- Leaf item -->
    <template v-else>
      <component
        :is="tag"
        v-bind="attr"
        :class="isActive && 'menu-active'"
        @click="emit('click', $event)"
      >
        <component :is="config.icon" v-if="config.icon" :size="16" />
        <slot />
        <slot name="badge" />
      </component>
    </template>

  </li>
</template>