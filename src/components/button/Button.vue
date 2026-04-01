<script setup lang="ts">
import { computed } from 'vue'
import { buildClassesFromProps } from '../../utils/build-class.util'

type ButtonColor = 'neutral' | 'primary' | 'secondary' | 'accent' | 'success' | 'danger' | 'warning' | 'info'
type ButtonStyle = 'outline' | 'dash' | 'soft' | 'ghost' | 'link'
type ButtonBehavior = 'active' | 'disabled'
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ButtonModifier = 'wide' | 'block' | 'square' | 'circle'

interface Props {
  /**
   * @since 0.0.0
   */
  color?: ButtonColor
  /**
   * @since 0.0.0
   */
  style?: ButtonStyle
  /**
   * @since 0.0.0
   */
  behavior?: ButtonBehavior
  /**
   * @since 0.0.0
   */
  size?: ButtonSize
  /**
   * @since 0.0.0
   */
  modifier?: ButtonModifier
}

const props = defineProps<Props>()

const classes = computed(() => buildClassesFromProps('btn', props))
/**
 * btn-neutral
 * btn-primary
 * btn-secondary
 * btn-accent
 * btn-success
 * btn-danger
 * btn-warning
 * btn-info
 * 
 * btn-outline
 * btn-dash
 * btn-soft
 * btn-ghost
 * btn-link
 * 
 * btn-active
 * btn-disabled
 * 
 * btn-xs
 * btn-sm
 * btn-md (default)
 * btn-lg
 * btn-xl
 * 
 * btn-wide
 * btn-block
 * btn-square
 * btn-circle
 */
</script>

<template>
  <button :class="classes">
    <slot></slot>
  </button>
</template>
