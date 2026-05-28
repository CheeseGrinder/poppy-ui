<script lang="ts">
import { useComponentConfig } from '@/composables/use-component-config'
import type { ComponentClass } from '@/types/utils.type'
import { getClass } from '@/utils/build-class.util'
import { isTrue } from '@/utils/is-true'
import { AVATAR_CONFIG } from './avatar.context'
import type { AvatarProps } from './avatar.props'
import type { AvatarPresence, AvatarSize } from './avatar.types'

const avatarSizes: Record<AvatarSize, `w-${number}`> = {
  xs: 'w-8',
  sm: 'w-16',
  md: 'w-20',
  lg: 'w-24',
  xl: 'w-32',
}

const avatarPresences: ComponentClass<'avatar', AvatarPresence> = {
  online: 'avatar-online',
  offline: 'avatar-offline',
}
</script>

<script setup lang="ts">
const props = defineProps<AvatarProps>()
const config = useComponentConfig(AVATAR_CONFIG, props, {
  shape: 'rounded-full',
})
</script>

<template>
  <!-- Group mode -->
  <div
    v-if="isTrue(group)"
    class="avatar-group -space-x-6"
  >
    <slot />
  </div>

  <!-- Avatar mode -->
  <div
    v-else
    class="avatar"
    :class="[
      getClass(avatarPresences, config.presence),
      isTrue(placeholder) && 'avatar-placeholder',
    ]"
  >
    <div
      :class="[
        getClass(avatarSizes, config.size),
        config.shape,
      ]"
    >
      <slot />
    </div>
  </div>
</template>