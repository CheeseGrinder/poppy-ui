<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { CHAT_CONFIG } from './chat.context'
import type { ChatProps } from './chat.props'
import type { ChatColor } from './chat.types'

const chatColors: ComponentClass<'chat-bubble', ChatColor> = {
  neutral: 'chat-bubble-neutral',
  primary: 'chat-bubble-primary',
  secondary: 'chat-bubble-secondary',
  accent: 'chat-bubble-accent',
  info: 'chat-bubble-info',
  success: 'chat-bubble-success',
  warning: 'chat-bubble-warning',
  error: 'chat-bubble-error',
}
</script>

<script setup lang="ts">
const props = defineProps<ChatProps>()
const config = useComponentConfig(CHAT_CONFIG, props, {
  side: 'start',
})
</script>

<template>
  <div
    class="chat"
    :class="config.side === 'end' ? 'chat-end' : 'chat-start'"
  >
    <div v-if="$slots.image" class="chat-image">
      <slot name="image" />
    </div>

    <div v-if="$slots.header" class="chat-header">
      <slot name="header" />
    </div>

    <div
      class="chat-bubble"
      :class="getClass(chatColors, config.color)"
    >
      <slot />
    </div>

    <div v-if="$slots.footer" class="chat-footer">
      <slot name="footer" />
    </div>

    <div v-if="$slots.meta" class="chat-meta">
      <slot name="meta" />
    </div>
  </div>
</template>