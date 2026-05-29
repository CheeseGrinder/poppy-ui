<script setup lang="ts">
import type { ListProps } from './list.props'

defineProps<ListProps>()
</script>

<template>
  <ul class="list bg-base-100 rounded-box">
    <li v-if="title || $slots.title" class="p-4 pb-2 text-xs opacity-60 tracking-wide">
      <slot name="title">{{ title }}</slot>
    </li>
    <slot />
  </ul>
</template>