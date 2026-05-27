<script lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { ListItemProps } from './list-item.props'
</script>

<script setup lang="ts">
const props = defineProps<ListItemProps>()

const tag = computed(() => props.to ? RouterLink : 'li')
</script>

<template>
  <component
    :is="tag"
    class="list-row"
    :to="to"
  >
    <slot />
  </component>
</template>