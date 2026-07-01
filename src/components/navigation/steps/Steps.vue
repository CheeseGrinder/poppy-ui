<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { STEPS_CONFIG } from './steps.context'
import type { StepsProps } from './steps.props'
import type { StepsDirection } from './steps.types'

const stepsDirections: ComponentClass<'steps', StepsDirection> = {
  horizontal: 'steps-horizontal',
  vertical: 'steps-vertical',
}
</script>

<script setup lang="ts">
const props = defineProps<StepsProps>()
const config = useComponentConfig(STEPS_CONFIG, props, {
  direction: 'horizontal',
})
</script>

<template>
  <ul :class="['steps', getClass(stepsDirections, config.direction)]">
    <slot />
  </ul>
</template>
