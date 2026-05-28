<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { isTrue } from '@/utils/is-true'
import IndicatorItem from './IndicatorItem.vue'
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
    <IndicatorItem v-if="$slots.indicator && !isTrue(config.hide)">
      <slot name="indicator" />
    </IndicatorItem>
    <slot />
  </div>
</template>
