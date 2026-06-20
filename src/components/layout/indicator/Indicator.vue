<script lang="ts">
import ClassWrapper from '@/components/ClassWrapper.vue'
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { INDICATOR_CONFIG } from './indicator.context'
import type { IndicatorProps } from './indicator.props'
import type { IndicatorAlign, IndicatorSide } from './indicator.types'

const indicatorSides: ComponentClass<'indicator', IndicatorSide> = {
  start: 'indicator-start',
  end: 'indicator-end',
  top: 'indicator-top',
  bottom: 'indicator-bottom',
}

const indicatorAligns: ComponentClass<'indicator', IndicatorAlign> = {
  start: 'indicator-start',
  end: 'indicator-end',
  center: 'indicator-center',
  middle: 'indicator-middle',
}
</script>

<script setup lang="ts">
const props = defineProps<IndicatorProps>()
const config = useComponentConfig(INDICATOR_CONFIG, props)
</script>

<template>
  <div
    class="indicator"
    :class="[
      getClass(indicatorSides, config.side),
      getClass(indicatorAligns, config.align),
    ]"
  >
    <ClassWrapper v-if="$slots.indicator && !config.hide" class="indicator-item">
      <slot name="indicator" />
    </ClassWrapper>
    <slot />
  </div>
</template>
