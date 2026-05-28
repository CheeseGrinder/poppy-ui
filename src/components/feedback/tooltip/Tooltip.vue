<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { TOOLTIP_CONFIG } from './tooltip.context'
import type { TooltipProps } from './tooltip.props'
import type { TooltipColor, TooltipPlacement } from './tooltip.types'

const tooltipColors: ComponentClass<'tooltip', TooltipColor> = {
  neutral: 'tooltip-neutral',
  primary: 'tooltip-primary',
  secondary: 'tooltip-secondary',
  accent: 'tooltip-accent',
  info: 'tooltip-info',
  success: 'tooltip-success',
  warning: 'tooltip-warning',
  error: 'tooltip-error',
}

const tooltipPlacements: ComponentClass<'tooltip', TooltipPlacement> = {
  top: 'tooltip-top',
  bottom: 'tooltip-bottom',
  left: 'tooltip-left',
  right: 'tooltip-right',
}
</script>

<script setup lang="ts">
import { onMounted, useId, useTemplateRef } from 'vue'

const props = defineProps<TooltipProps>()
const config = useComponentConfig(TOOLTIP_CONFIG, props, {
  as: 'div',
  placement: 'top',
})

const id = useId()
const tooltipId = `tooltip-${id}`
const anchorName = `--anchor-${id}`

const tooltip = useTemplateRef('tooltip')

onMounted(() => {
  if (config.value.open && !config.value.disabled) {
    tooltip.value?.showPopover()
  }
})
</script>

<template>
  <component
    :is="config.as"
    class="tooltip-anchor"
    @mouseenter="!config.disabled && !config.open && tooltip?.showPopover()"
    @mouseleave="!config.disabled && !config.open && tooltip?.hidePopover()"
  >
    <slot />

    <Teleport to="body">
      <div
        v-show="!config.disabled && (config.tip || $slots.content)"
        ref="tooltip"
        popover="manual"
        :id="tooltipId"
        class="tooltip-popover"
        :class="[
          getClass(tooltipColors, config.color),
          getClass(tooltipPlacements, config.placement),
          { 'tooltip-open': config.open },
        ]"
      >
        <slot name="content">{{ config.tip }}</slot>
      </div>
    </Teleport>
  </component>
</template>

<style scoped lang="scss">
.tooltip-anchor {
  anchor-name: v-bind(anchorName);
  display: inline-block;
}

.tooltip-popover {
  position: fixed;
  position-anchor: v-bind(anchorName);
  margin: 0;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.25rem;
  background: var(--color-base-300);
  color: var(--color-base-content);
  font-size: 0.875rem;
  white-space: nowrap;
  inset: unset;

  &.tooltip-top {
    bottom: calc(anchor(top) + 0.5rem);
    justify-self: anchor-center;
  }
  &.tooltip-bottom {
    top: calc(anchor(bottom) + 0.5rem);
    justify-self: anchor-center;
  }
  &.tooltip-left {
    right: calc(anchor(left) + 0.5rem);
    align-self: anchor-center;
  }
  &.tooltip-right {
    left: calc(anchor(right) + 0.5rem);
    align-self: anchor-center;
  }

  $tooltip-colors: "neutral", "primary", "secondary", "accent", "info", "success", "warning", "error";

  @each $name in $tooltip-colors {
    &.tooltip-#{$name} {
      background: var(--color-#{$name});
      color: var(--color-#{$name}-content);
    }
  }
}
</style>