<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { STACK_CONFIG } from './stack.context'
import type { StackProps } from './stack.props'
import type { StackDirection } from './stack.types'

const stackDirections: ComponentClass<'stack', StackDirection> = {
  start: 'stack-start',
  end: 'stack-end',
  top: 'stack-top',
  bottom: 'stack-bottom',
}
</script>

<script setup lang="ts">
const props = defineProps<StackProps>()
const config = useComponentConfig(STACK_CONFIG, props)
</script>

<template>
  <div
    class="stack"
    :class="getClass(stackDirections, config.direction)"
  >
    <slot />
  </div>
</template>
