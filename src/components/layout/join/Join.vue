<script lang="ts">
import ClassWrapper from '@/components/ClassWrapper.vue'
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { JOIN_CONFIG } from './join.context'
import type { JoinProps } from './join.props'
import type { JoinDirection } from './join.types'

const joinDirections: ComponentClass<'join', JoinDirection> = {
  horizontal: 'join-horizontal',
  vertical: 'join-vertical',
}
</script>

<script setup lang="ts">
const props = defineProps<JoinProps>()
const config = useComponentConfig(JOIN_CONFIG, props, {
  direction: 'horizontal',
})
</script>

<template>
  <div
    class="join"
    :class="getClass(joinDirections, config.direction)"
  >
    <ClassWrapper class="join-item">
      <slot></slot>
    </ClassWrapper>
  </div>
</template>
