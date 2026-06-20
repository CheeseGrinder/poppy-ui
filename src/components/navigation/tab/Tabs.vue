<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { onMounted, provide } from 'vue'
import { TABS_CONFIG, TABS_CONTEXT } from './tab.context'
import type { TabsProps } from './tab.props'
import type { TabPlacement, TabSize, TabVariant } from './tab.types'

const variants: ComponentClass<'tabs', TabVariant> = {
  box: 'tabs-box',
  border: 'tabs-border',
  lift: 'tabs-lift',
}

const sizes: ComponentClass<'tabs', TabSize> = {
  xs: 'tabs-xs',
  sm: 'tabs-sm',
  md: 'tabs-md',
  lg: 'tabs-lg',
  xl: 'tabs-xl',
}

const placements: ComponentClass<'tabs', TabPlacement> = {
  top: 'tabs-top',
  bottom: 'tabs-bottom',
}
</script>

<script setup lang="ts">
const model = defineModel<string>()
const props = defineProps<TabsProps>()
const config = useComponentConfig(TABS_CONFIG, props, {
  size: 'md',
  placement: 'top',
})

const registeredTabs: Array<{ value: string; initiallyActive: boolean }> = []

provide(TABS_CONTEXT, {
  activeValue: model,
  setActive: (value) => { model.value = value },
  register: (value, initiallyActive) => { registeredTabs.push({ value, initiallyActive }) },
})

onMounted(() => {
  if (model.value !== undefined) {
    return
  }

  const preSelected = registeredTabs.find(t => t.initiallyActive)

  if (preSelected) {
    model.value = preSelected.value
    return
  }

  if (registeredTabs.length > 0) {
    model.value = registeredTabs[0].value
  }
})
</script>

<template>
  <div
    role="tablist"
    class="tabs"
    :class="[
      getClass(variants, config.variant),
      getClass(sizes, config.size),
      getClass(placements, config.placement),
    ]"
  >
    <slot />
  </div>
</template>
