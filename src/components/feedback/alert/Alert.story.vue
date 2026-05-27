<script lang="ts" setup>
import { CheckCircleIcon, InfoIcon, TriangleAlertIcon, XCircleIcon } from '@lucide/vue'
import { reactive } from 'vue'
import Alert from './Alert.vue'
import type { AlertProps } from './alert.props'

const state = reactive<AlertProps>({
  color: undefined,
  variant: undefined,
  direction: undefined,
})
</script>

<template>
  <Story title="Feedback/Alert" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Color" v-model="state.color" :options="[{ label: '-- default --', value: undefined}, 'info', 'success', 'warning', 'error']" />
          <HstSelect title="Variant" v-model="state.variant" :options="[{ label: '-- default --', value: undefined}, 'outline', 'dash', 'soft']" />
          <HstSelect title="Direction" v-model="state.direction" :options="[{ label: '-- default --', value: undefined}, 'horizontal', 'vertical']" />
        </template>

        <Alert v-bind="state" class="max-w-lg">
          <template #icon><InfoIcon class="size-5" /></template>
          <div>
            <div class="font-semibold">Heads up!</div>
            <div class="text-sm">This is an alert message with some useful information.</div>
          </div>
        </Alert>
      </Variant>

      <Variant title="Colors">
        <div class="alert-story alert-story--col">
          <Alert color="info" class="max-w-lg">
            <template #icon><InfoIcon class="size-5" /></template>
            <div>
              <div class="font-semibold">Info</div>
              <div class="text-sm">Here is some useful information for you.</div>
            </div>
          </Alert>
          <Alert color="success" class="max-w-lg">
            <template #icon><CheckCircleIcon class="size-5" /></template>
            <div>
              <div class="font-semibold">Success</div>
              <div class="text-sm">Your changes have been saved successfully.</div>
            </div>
          </Alert>
          <Alert color="warning" class="max-w-lg">
            <template #icon><TriangleAlertIcon class="size-5" /></template>
            <div>
              <div class="font-semibold">Warning</div>
              <div class="text-sm">Please review your settings before continuing.</div>
            </div>
          </Alert>
          <Alert color="error" class="max-w-lg">
            <template #icon><XCircleIcon class="size-5" /></template>
            <div>
              <div class="font-semibold">Error</div>
              <div class="text-sm">Something went wrong. Please try again.</div>
            </div>
          </Alert>
        </div>
      </Variant>

      <Variant title="Variants">
        <div class="alert-story alert-story--col">
          <div v-for="variant in ([undefined, 'outline', 'dash', 'soft'])" :key="variant ?? 'default'" class="alert-story--item">
            <span class="alert-story--label">{{ variant ?? 'default' }}</span>
            <Alert color="info" :variant="variant" class="max-w-lg">
              <template #icon><InfoIcon class="size-5" /></template>
              <div>
                <div class="font-semibold">Variant: {{ variant ?? 'default' }}</div>
                <div class="text-sm">Alert with <code>variant="{{ variant ?? 'default' }}"</code>.</div>
              </div>
            </Alert>
          </div>
        </div>
      </Variant>

      <Variant title="Directions">
        <div class="alert-story alert-story--col">
          <div class="alert-story--item">
            <span class="alert-story--label">horizontal</span>
            <Alert color="info" direction="horizontal" class="max-w-lg">
              <template #icon><InfoIcon class="size-5" /></template>
              <div>
                <div class="font-semibold">Horizontal</div>
                <div class="text-sm">Icon and content displayed side by side.</div>
              </div>
            </Alert>
          </div>
          <div class="alert-story--item">
            <span class="alert-story--label">vertical</span>
            <Alert color="info" direction="vertical" class="max-w-lg">
              <template #icon><InfoIcon class="size-5 mx-auto" /></template>
              <div class="text-center">
                <div class="font-semibold">Vertical</div>
                <div class="text-sm">Icon and content stacked vertically.</div>
              </div>
            </Alert>
          </div>
        </div>
      </Variant>

      <Variant title="Colors x Variants">
        <div class="alert-story alert-story--col">
          <div v-for="variant in ([undefined, 'outline', 'dash', 'soft'])" :key="variant ?? 'default'" class="alert-story--matrix-row">
            <span class="alert-story--label">{{ variant ?? 'default' }}</span>
            <div class="alert-story alert-story--col">
              <Alert v-for="color in (['info', 'success', 'warning', 'error'])" :key="color" :color="color" :variant="variant" class="max-w-lg">
                <template #icon>
                  <InfoIcon v-if="color === 'info'" class="size-5" />
                  <CheckCircleIcon v-else-if="color === 'success'" class="size-5" />
                  <TriangleAlertIcon v-else-if="color === 'warning'" class="size-5" />
                  <XCircleIcon v-else class="size-5" />
                </template>
                <span>{{ color }} — {{ variant ?? 'default' }}</span>
              </Alert>
            </div>
          </div>
        </div>
      </Variant>

      <Variant title="No icon">
        <div class="alert-story alert-story--col">
          <Alert color="info" class="max-w-lg">
            A simple informational alert without an icon.
          </Alert>
          <Alert color="success" variant="soft" class="max-w-lg">
            Your profile has been updated.
          </Alert>
          <Alert color="error" variant="outline" class="max-w-lg">
            Failed to connect to the server.
          </Alert>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.alert-story {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.alert-story--col {
  flex-direction: column;
}

.alert-story--item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.alert-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}

.alert-story--matrix-row {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding-bottom: 0.75rem;
  border-bottom: 0.5px solid #e5e7eb;
}

.alert-story--matrix-row:last-child {
  border-bottom: none;
}
</style>

<docs lang="md">
# Alert

## Description

A contextual feedback component used to display informational, success, warning, or error messages.
Built on DaisyUI's `alert` class system with support for colors, variants, and layout directions.
Supports an optional icon via the `icon` slot.

## Props

| Prop        | Type             | Default     | Required | Configurable | Description                                                           |
|-------------|------------------|-------------|----------|--------------|-----------------------------------------------------------------------|
| `color`     | `AlertColor`     | `undefined` | ❌       | ✅          | Color theme of the alert. `info` / `success` / `warning` / `error`.   |
| `variant`   | `AlertVariant`   | `undefined` | ❌       | ✅          | Visual style. `outline` / `dash` / `soft`.                            |
| `direction` | `AlertDirection` | `undefined` | ❌       | ✅          | Layout direction. `horizontal` (side by side) / `vertical` (stacked). |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.alert` option). See [Plugin Configuration](#) for more information.

## Slots

| Slot      | Description                                                  |
|-----------|--------------------------------------------------------------|
| `icon`    | Optional icon displayed before the main content.             |
| `default` | Main content of the alert (text, title + description, etc.). |

## Usage

```vue
<!-- Basic -->
<Alert color="info">
  Here is some useful information.
</Alert>

<!-- With icon and structured content -->
<Alert color="success">
  <template #icon>
    <CheckCircleIcon class="size-5" />
  </template>
  <div>
    <div class="font-semibold">Success</div>
    <div class="text-sm">Your changes have been saved.</div>
  </div>
</Alert>

<!-- Soft variant -->
<Alert color="warning" variant="soft">
  <template #icon>
    <TriangleAlertIcon class="size-5" />
  </template>
  Please review before continuing.
</Alert>

<!-- Vertical direction -->
<Alert color="error" direction="vertical">
  <template #icon>
    <XCircleIcon class="size-5 mx-auto" />
  </template>
  <div class="text-center">Something went wrong.</div>
</Alert>
```
</docs>