<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { CARD_ACTIONS_CONFIG } from './card-actions.context'
import type { CardActionsProps } from './card-actions.props'
import type { CardActionsAlign } from './card-actions.types'

const cardActionsAligns: ComponentClass<'justify', CardActionsAlign> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
}
</script>

<script setup lang="ts">
const props = defineProps<CardActionsProps>()
const config = useComponentConfig(CARD_ACTIONS_CONFIG, props, {
  align: 'start',
})
</script>

<template>
  <div
    class="card-actions"
    :class="getClass(cardActionsAligns, config.align)"
  >
    <slot />
  </div>
</template>