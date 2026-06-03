<script lang="ts" setup>
import Button from '@/components/actions/button/Button.vue'
import Alert from '@/components/feedback/alert/Alert.vue'
import type { ToastItem } from '@/composables/use-toast.ts'
import { computed, provide, reactive, ref } from 'vue'
import Toast from './Toast.vue'
import { TOAST_CONTEXT_KEY } from './toast.context'
import type { ToastProps } from './toast.props'
import type { ToastAlign, ToastSide } from './toast.types'

const state = reactive<ToastProps>({
  align: 'end',
  side: 'bottom',
})

// ── Toast state ───────────────────────────────────────────────────────────────

const toasts = ref<ToastItem[]>([])
let nextId = 0

function push(message: string, options?: Partial<Omit<ToastItem, 'id' | 'message'>>) {
  const duration = options?.duration ?? 3000
  const item: ToastItem = { id: nextId++, message, duration, ...options }
  toasts.value.push(item)
  if (item.duration) setTimeout(() => dismiss(item.id), item.duration)
}

function dismiss(id: number) {
  toasts.value = toasts.value.filter(t => t.id !== id)
}

provide(TOAST_CONTEXT_KEY, { push, dismiss })

// ── Positions variant ─────────────────────────────────────────────────────────

type PositionToast = ToastItem & { align: ToastAlign; side: ToastSide }

const positionToasts = ref<PositionToast[]>([])
let posNextId = 0

const positions: { align: ToastAlign; side: ToastSide; label: string }[] = [
  { align: 'start', side: 'top', label: 'top start' },
  { align: 'center', side: 'top', label: 'top center' },
  { align: 'end', side: 'top', label: 'top end' },
  { align: 'start', side: 'middle', label: 'middle start' },
  { align: 'center', side: 'middle', label: 'middle center' },
  { align: 'end', side: 'middle', label: 'middle end' },
  { align: 'start', side: 'bottom', label: 'bottom start' },
  { align: 'center', side: 'bottom', label: 'bottom center' },
  { align: 'end', side: 'bottom', label: 'bottom end' },
]

function pushAt(align: ToastAlign, side: ToastSide) {
  const item: PositionToast = { id: posNextId++, message: `${align} · ${side}`, duration: 3000, align, side }
  positionToasts.value.push(item)
  setTimeout(() => {
    positionToasts.value = positionToasts.value.filter(t => t.id !== item.id)
  }, 3000)
}

const positionGroups = computed(() => {
  const map = new Map<string, { align: ToastAlign; side: ToastSide; toasts: PositionToast[] }>()
  for (const toast of positionToasts.value) {
    const key = `${toast.align}-${toast.side}`
    if (!map.has(key)) map.set(key, { align: toast.align, side: toast.side, toasts: [] })
    map.get(key)?.toasts.push(toast)
  }
  return [...map.values()]
})
</script>

<template>
  <Story group="components" title="Feedback/Toast" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Align" v-model="state.align" :options="['start', 'center', 'end']" />
          <HstSelect title="Side" v-model="state.side" :options="['top', 'middle', 'bottom']" />
        </template>

        <template #source>
          <textarea v-pre>
            <Toast :align="state.align" :side="state.side" class="z-50">
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
          </textarea>
        </template>

        <div class="toast-story toast-story--col">
          <p class="toast-story--hint">
            Toasts are teleported to <code>&lt;body&gt;</code> — change align/side to see them move.
          </p>
          <div class="toast-story--row">
            <Button color="primary" @click="push('Default toast message')">Push toast</Button>
            <Button color="info" @click="push('Info message', { color: 'info' })">Info</Button>
            <Button color="success" @click="push('Changes saved!', { color: 'success' })">Success</Button>
            <Button color="warning" @click="push('Check your settings', { color: 'warning' })">Warning</Button>
            <Button color="error" @click="push('Something went wrong', { color: 'error' })">Error</Button>
          </div>
        </div>

        <Teleport to="body">
          <Toast v-bind="state" class="z-50">
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
      </Variant>

      <Variant title="Positions">
        <div class="toast-story toast-story--col">
          <p class="toast-story--hint">Click a button to see a toast appear at that position.</p>
          <div class="toast-story--grid">
            <Button
              v-for="pos in positions"
              :key="`${pos.align}-${pos.side}`"
              size="sm"
              variant="outline"
              @click="pushAt(pos.align, pos.side)"
            >
              {{ pos.label }}
            </Button>
          </div>
        </div>

        <Teleport to="body">
          <Toast
            v-for="group in positionGroups"
            :key="`${group.align}-${group.side}`"
            :align="group.align"
            :side="group.side"
            class="z-50"
          >
            <Alert
              v-for="toast in group.toasts"
              :key="toast.id"
              :color="toast.color"
              class="cursor-pointer"
              @click="positionToasts = positionToasts.filter(t => t.id !== toast.id)"
            >
              {{ toast.message }}
            </Alert>
          </Toast>
        </Teleport>
      </Variant>

      <Variant title="Duration">
        <div class="toast-story toast-story--col">
          <p class="toast-story--hint">
            Each toast auto-dismisses after its <code>duration</code>.
            Set to <code>0</code> to disable auto-dismiss — click to close manually.
          </p>
          <div class="toast-story--row">
            <Button size="sm" @click="push('1 second', { duration: 1000, color: 'info' })">1s</Button>
            <Button size="sm" @click="push('3 seconds (default)', { duration: 3000, color: 'success' })">3s</Button>
            <Button size="sm" @click="push('5 seconds', { duration: 5000, color: 'warning' })">5s</Button>
            <Button size="sm" @click="push('No auto-dismiss — click to close', { duration: 0, color: 'error' })">∞</Button>
          </div>
        </div>

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
      </Variant>

      <Variant title="PoppyApp — useToast()">
        <template #source>
          <textarea v-pre>
            <!-- App.vue -->
            <PoppyApp>
              <MyLayout>
                <RouterView />
              </MyLayout>
            </PoppyApp>

            <!-- AnyComponent.vue -->
            <script setup>
            const { push } = useToast()
            </script>

            <Button @click="push('Done!', { color: 'success' })">Save</Button>
          </textarea>
        </template>
        <div class="toast-story toast-story--col">
          <p class="toast-story--hint">
            In a real app, wrap your root with <code>&lt;PoppyApp&gt;</code>.
            Any component in the tree can then call <code>useToast()</code> to push notifications.
          </p>

          <div class="toast-story--row">
            <Button color="primary" @click="push('Pushed via useToast()!', { color: 'success' })">
              Simulate useToast().push()
            </Button>
          </div>
        </div>

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
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.toast-story {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.toast-story--row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.toast-story--col {
  flex-direction: column;
}

.toast-story--grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 0.5rem;
  width: fit-content;
}

.toast-story--hint {
  font-size: 0.875rem;
  color: #6b7280;
  background: #f9fafb;
  border-left: 3px solid #d1d5db;
  padding: 0.6rem 0.875rem;
  border-radius: 0 4px 4px 0;
  max-width: 480px;
}

.toast-story--hint code {
  font-size: 0.8rem;
  background: #e5e7eb;
  padding: 1px 4px;
  border-radius: 3px;
}

</style>

<docs lang="md">
# Toast

## Description

A fixed-position container for stacked notification messages. Built on DaisyUI's `toast` class system.
Each notification is rendered as an `Alert` inside the `Toast` container.

In most cases, use `<PoppyApp />` at the root and `useToast()` anywhere in the tree to push notifications transparently.
The `Toast` component itself remains available as a low-level primitive for custom implementations.

## Toast props

| Prop       | Type         | Default    | Required | Configurable       | Description                                                           |
|------------|--------------|------------|----------|--------------------|-----------------------------------------------------------------------|
| `align`    | `ToastAlign` | `'end'`    | :x:      | :white_check_mark: | Horizontal position. `start` / `center` / `end`.                      |
| `side`     | `ToastSide`  | `'bottom'` | :x:      | :white_check_mark: | Vertical position. `top` / `middle` / `bottom`.                       |
| `duration` | `number`     | `3000`     | :x:      | :white_check_mark: | Default auto-dismiss delay in ms. Set to `0` to disable auto-dismiss. |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.toast` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## ToastItem

| Field     | Type         | Default     | Description                                            |
|-----------|--------------|-------------|--------------------------------------------------------|
| `id`      | `number`     | auto        | Auto-incremented identifier.                           |
| `message` | `string`     | —           | Text content of the notification.                      |
| `color`   | `ToastColor` | `undefined` | Alert color. `info` / `success` / `warning` / `error`. |
| `duration`| `number`     | `3000`      | Overrides the global default for this toast.           |

## useToast()

```ts
const { push, dismiss } = useToast()

// Push a notification
push('Saved!', { color: 'success' })

// Push with custom duration
push('Check this out', { color: 'info', duration: 5000 })

// Push with no auto-dismiss
push('Action required', { color: 'warning', duration: 0 })

// Dismiss manually
dismiss(id)
```

## PoppyApp

Wrap your root component with `<PoppyApp />` to enable `useToast()` anywhere in the tree.
The toast container is rendered automatically via `Teleport`.

```vue
<!-- App.vue -->
<PoppyApp>
  <MyLayout>
    <RouterView />
  </MyLayout>
</PoppyApp>
```

> **Nuxt note** — `useToast()` uses `inject()` to read state from `<PoppyApp />`, avoiding module-level singletons that would be shared across SSR requests.

## Slots

| Component  | Slot      | Description                         |
|------------|-----------|-------------------------------------|
| `Toast`    | `default` | Alert components to display.        |
| `PoppyApp` | `default` | App content (layouts, RouterView…). |
</docs>