<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import { RouterLink } from 'vue-router'
import { BREADCRUMBS_CONFIG } from './breadcrumbs.context'
import type { BreadcrumbsProps } from './breadcrumbs.props'
</script>

<script setup lang="ts">
const props = defineProps<BreadcrumbsProps>()
const config = useComponentConfig(BREADCRUMBS_CONFIG, props, {})

function isLast(index: number) {
  return index === props.items.length - 1
}
</script>

<template>
  <div
    class="breadcrumbs text-sm"
    :class="config.maxWidth"
  >
    <ul>
      <li
        v-for="(item, index) in items"
        :key="index"
      >
        <!-- Clickable item (not the last) -->
        <component
          :is="item.to ? item.to === '#' ? 'a' : RouterLink : 'a'"
          v-if="!isLast(index)"
          v-bind="{
            to: item.to && item.to !== '#',
            href: item.to && item.to === '#',
          }"
          :to="item.to"
          class="inline-flex items-center gap-2"
        >
          <component :is="item.icon" v-if="item.icon" :size="16" />
          {{ item.label }}
        </component>

        <!-- Last item (current page, non-clickable) -->
        <span
          v-else
          class="inline-flex items-center gap-2"
        >
          <component :is="item.icon" v-if="item.icon" :size="16" />
          {{ item.label }}
        </span>
      </li>
    </ul>
  </div>
</template>