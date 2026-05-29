<script lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { Hover3dProps } from './hover-3d.props'
</script>

<script setup lang="ts">
const props = defineProps<Hover3dProps>()

const tag = computed(() => props.to ?
  props.to === '#' 
    ? 'a'
    : RouterLink 
  : 'div')

const attr = computed(() => {
  if (tag.value === 'a') {
    return {
      href: props.to
    }
  }
  if (tag.value === 'div') {
    return {}
  }
  return {
    to: props.to
  }
})
</script>

<template>
  <component :is="tag" class="hover-3d" v-bind="attr">
    <slot />
    <!-- 8 empty divs required for the 3D zone detection -->
    <div v-for="i in 8" :key="i" />
  </component>
</template>