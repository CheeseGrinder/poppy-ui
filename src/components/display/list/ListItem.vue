<script lang="ts">
import { computed, useSlots } from 'vue'
import { RouterLink } from 'vue-router'
import type { ListItemProps } from './list-item.props'
</script>

<script setup lang="ts">
const props = defineProps<ListItemProps>()

const tag = computed(() => props.to ? props.to === '#' ? 'a' : RouterLink : 'li')
const attr = computed(() => {
  if (tag.value === 'a') {
    return {
      href: props.to
    }
  }
  if (tag.value === 'li') {
    return {}
  }
  return {
    to: props.to
  }
})

const slots = useSlots()
const hasContent = computed(() => !!props.title || !!props.description || !!slots.title || !!slots.description)
</script>

<template>
  <component
    :is="tag"
    class="list-row"
    v-bind="attr"
  >
    <slot name="prefix" />

    <div v-if="hasContent" class="list-col-grow">
      <slot name="title">
        <div>{{ title }}</div>
      </slot>
      <slot name="description">
        <div class="text-xs uppercase font-semibold opacity-60">{{ description }}</div>
      </slot>
    </div>
    <slot v-else />

    <div v-if="$slots.details" class="list-col-wrap text-xs opacity-60">
      <slot name="details" />
    </div>

    <slot name="actions" />
  </component>
</template>