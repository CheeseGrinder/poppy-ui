<script lang="ts">
import { reactive } from 'vue'
import Status from './Status.vue'
import type { StatusProps } from './status.props'
</script>

<script setup lang="ts">
const state = reactive<StatusProps>({
  color: undefined,
  size: 'md',
  animation: undefined,
  label: 'status',
})
</script>

<template>
  <Story group="components" title="Display/Status" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Color"     v-model="state.color"     :options="[{ label: '-- default --', value: undefined }, 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']" />
          <HstSelect title="Size"      v-model="state.size"      :options="['xs', 'sm', 'md', 'lg', 'xl']" />
          <HstSelect title="Animation" v-model="state.animation" :options="[{ label: '-- default --', value: undefined }, 'ping', 'bounce']" />
        </template>

        <template #source>
          <textarea v-pre>
            <Status color="success" size="md" />
          </textarea>
        </template>

        <Status v-bind="state" />
      </Variant>

      <Variant title="Colors">
        <div class="status-story status-story--row">
          <div v-for="color in (['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'])" :key="color" class="status-story--item">
            <Status :color="color" />
            <span class="status-story--label">{{ color }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Sizes">
        <div class="status-story status-story--row" style="align-items: flex-end;">
          <div v-for="size in (['xs', 'sm', 'md', 'lg', 'xl'])" :key="size" class="status-story--item">
            <Status color="primary" :size="size" />
            <span class="status-story--label">{{ size }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Animations">
        <template #source>
          <textarea v-pre>
            <!-- Ping -->
            <Status color="error" animation="ping" />

            <!-- Bounce -->
            <Status color="info" animation="bounce" />
          </textarea>
        </template>

        <div class="status-story status-story--col">
          <div class="status-story--item-group">
            <span class="status-story--label">ping</span>
            <div class="status-story status-story--row">
              <div v-for="color in (['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'])" :key="color" class="status-story--item">
                <Status :color="color" animation="ping" />
                <span class="status-story--label">{{ color }}</span>
              </div>
            </div>
          </div>
          <div class="status-story--item-group">
            <span class="status-story--label">bounce</span>
            <div class="status-story status-story--row">
              <div v-for="color in (['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'])" :key="color" class="status-story--item">
                <Status :color="color" animation="bounce" />
                <span class="status-story--label">{{ color }}</span>
              </div>
            </div>
          </div>
        </div>
      </Variant>

      <Variant title="Composition">
        <div class="status-story status-story--col">
          <div class="status-story--item-row">
            <Status color="error" animation="ping" />
            <span class="text-sm">Server is down</span>
          </div>
          <div class="status-story--item-row">
            <Status color="success" />
            <span class="text-sm">All systems operational</span>
          </div>
          <div class="status-story--item-row">
            <Status color="warning" animation="ping" />
            <span class="text-sm">Degraded performance</span>
          </div>
          <div class="status-story--item-row">
            <Status color="info" animation="bounce" size="sm" />
            <span class="text-sm">Unread messages</span>
          </div>
          <div class="status-story--item-row">
            <Status color="neutral" />
            <span class="text-sm">Unknown</span>
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.status-story {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.status-story--row {
  align-items: center;
}

.status-story--col {
  flex-direction: column;
  gap: 1rem;
}

.status-story--item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
}

.status-story--item-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-story--item-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.status-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}
</style>

<docs lang="md">
# Status

## Description

A small visual indicator used to represent the current state of an element — online, offline, error, etc.
Built on DaisyUI's `status` class system. Supports colors, sizes, and animations for active states.

## Props

| Prop        | Type              | Default     | Required | Configurable | Description                                                                        |
|-------------|-------------------|-------------|----------|--------------|------------------------------------------------------------------------------------|
| `color`     | `StatusColor`     | `undefined` | ❌       | ✅          | Color theme based on the DaisyUI palette.                                          |
| `size`      | `StatusSize`      | `'md'`      | ❌       | ✅          | Size of the indicator. `xs` / `sm` / `md` / `lg` / `xl`.                           |
| `animation` | `StatusAnimation` | `undefined` | ❌       | ✅          | `'ping'` renders two overlapping elements for urgency. `'bounce'` draws attention. |
| `label`     | `string`          | `undefined` | ❌       | ❌          | Accessible label set as `aria-label` on the root element.                          |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.status` option). See [Plugin Configuration](#) for more information.

## Usage

```vue
<!-- Basic -->
<Status color="success" />

<!-- Ping animation -->
<Status color="error" animation="ping" />

<!-- Bounce animation -->
<Status color="info" animation="bounce" />

<!-- Inline with text -->
<div class="flex items-center gap-2">
  <Status color="success" size="sm" />
  <span>Online</span>
</div>
```
</docs>