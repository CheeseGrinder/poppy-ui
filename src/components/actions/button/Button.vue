<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { clsx, getClass } from '@/utils/build-class.util'
import { isTrue } from '@/utils/is-true'
import { computed, useAttrs } from 'vue'
import { RouterLink } from 'vue-router'
import { BUTTON_CONFIG } from './button.context'
import type { ButtonProps } from './button.props'
import type { ButtonBehavior, ButtonColor, ButtonShape, ButtonSize, ButtonVariant } from './button.types'

const colors: ComponentClass<'btn', ButtonColor> = {
  neutral: 'btn-neutral',
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
}
const variants: ComponentClass<'btn', ButtonVariant> = {
  solid: 'btn-solid',
  outline: 'btn-outline',
  dash: 'btn-dash',
  soft: 'btn-soft',
  ghost: 'btn-ghost',
  link: 'btn-link',
}
const sizes: ComponentClass<'btn', ButtonSize> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
  xl: 'btn-xl',
}
const shapes: ComponentClass<'btn', ButtonShape> = {
  wide: 'btn-wide',
  block: 'btn-block',
  square: 'btn-square',
  circle: 'btn-circle',
}
const behaviors: ComponentClass<'btn', ButtonBehavior> = {
  active: 'btn-active',
  disabled: 'btn-disabled',
}
</script>

<script setup lang="ts">
defineEmits<{
  click: [event: MouseEvent]
}>()

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button'
})
const config = useComponentConfig(BUTTON_CONFIG, props)

const { class: classAttr, ...attrs } = useAttrs()

const tag = computed(() => {
  return props.to ? RouterLink : 'button'
})

const extraClasses = computed(() => {
  return props.disabled ? behaviors.disabled : ''
})

const disabledAttrs = computed(() =>
  props.behavior === 'disabled' || isTrue(props.disabled)
    ? {
        disabled: true,
        'aria-disabled': true,
        tabIndex: -1,
      }
    : {},
)
</script>

<template>
  <component
    :is="tag"
    :type
    class="btn"
    :class="clsx([
      getClass(colors, config.color),
      getClass(variants, config.variant),
      getClass(sizes, config.size),
      getClass(shapes, config.shape),
      getClass(behaviors, config.behavior),
      extraClasses,
      classAttr,
    ])"
    v-bind="{...attrs, ...disabledAttrs}"
    :to="to"
    @click="$emit('click', $event)"
  >
    <slot v-if="loading" name="loading">
      <span class="loading loading-spinner"></span>
    </slot>
    <slot></slot>
  </component>
</template>