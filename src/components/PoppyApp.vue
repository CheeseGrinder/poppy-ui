<script setup lang="ts">
import Alert from '@/components/feedback/alert/Alert.vue'
import Toast from '@/components/feedback/toast/Toast.vue'
import { TOAST_CONFIG, TOAST_CONTEXT_KEY } from '@/components/feedback/toast/toast.context'
import type { ToastItem } from '@/composables/use-toast'
import { computed, inject, provide, ref } from 'vue'

// ── Toast config from plugin ──────────────────────────────────────────────────

const toastConfig = inject(TOAST_CONFIG, {})
const defaultDuration = computed(() => toastConfig?.duration ?? 3000)

// ── Toast state ───────────────────────────────────────────────────────────────

const toasts = ref<ToastItem[]>([])
let nextId = 0

function push(message: string, options?: Partial<Omit<ToastItem, 'id' | 'message'>>) {
  const duration = options?.duration ?? defaultDuration.value
  const item: ToastItem = { id: nextId++, message, duration, ...options }
  toasts.value.push(item)
  if (item.duration) setTimeout(() => dismiss(item.id), item.duration)
}

function dismiss(id: number) {
  toasts.value = toasts.value.filter(t => t.id !== id)
}

provide(TOAST_CONTEXT_KEY, { push, dismiss })
</script>

<template>
  <slot />

  <Teleport to="body">
    <Toast class="z-50">
      <Alert
        v-for="toast in toasts"
        :key="toast.id"
        :color="toast.color"
        class="cursor-pointer"
        @click="dismiss(toast.id)"
      >
        {{ toast.message }}
      </Alert>
    </Toast>
  </Teleport>
</template>