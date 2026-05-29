<script lang="ts">
import { reactive } from 'vue'
import Fab from './Fab.vue'
import type { FabProps } from './fab.props'
</script>

<script setup lang="ts">
const state = reactive<FabProps>({
  mode: undefined,
})
</script>

<template>
  <Story group="components" title="Actions/Fab" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Mode" v-model="state.mode" :options="[{ label: '-- default --', value: undefined }, 'flower']" />
        </template>

        <template #source>
          <textarea v-pre>
            <Fab>
              <button class="btn btn-circle btn-primary">+</button>
              <button class="btn btn-circle btn-accent">1</button>
              <button class="btn btn-circle">2</button>
              <button class="btn btn-circle">3</button>
              <template #close>
                <button class="btn btn-circle fab-close">×</button>
              </template>
            </Fab>
          </textarea>
        </template>

        <div class="p-28">
          <Fab v-bind="state">
            <button class="btn btn-circle btn-primary">+</button>
            <button class="btn btn-circle btn-accent">1</button>
            <button class="btn btn-circle">2</button>
            <button class="btn btn-circle">3</button>
            <template #close>
              <button class="btn btn-circle fab-close">×</button>
            </template>
          </Fab>
        </div>
      </Variant>

      <Variant title="Flower mode">
        <template #source>
          <textarea v-pre>
            <Fab mode="flower">
              <button class="btn btn-circle btn-primary">+</button>
              <button class="btn btn-circle btn-accent">1</button>
              <button class="btn btn-circle">2</button>
              <button class="btn btn-circle">3</button>
              <template #close>
                <button class="btn btn-circle fab-close">×</button>
              </template>
            </Fab>
          </textarea>
        </template>

        <div class="p-28">
          <Fab mode="flower">
            <button class="btn btn-circle btn-primary">+</button>
            <button class="btn btn-circle btn-accent">1</button>
            <button class="btn btn-circle">2</button>
            <button class="btn btn-circle">3</button>
            <template #close>
              <button class="btn btn-circle fab-close">×</button>
            </template>
          </Fab>
        </div>
      </Variant>

      <Variant title="With main-action">
        <template #source>
          <textarea v-pre>
            <Fab mode="flower">
              <button class="btn btn-circle btn-primary">+</button>
              <button class="btn btn-circle btn-accent">1</button>
              <button class="btn btn-circle">2</button>
              <template #main-action>
                <button class="btn btn-circle btn-success">✓</button>
              </template>
              <template #close>
                <button class="btn btn-circle fab-close">×</button>
              </template>
            </Fab>
          </textarea>
        </template>

        <div class="p-28">
          <Fab mode="flower">
            <button class="btn btn-circle btn-primary">+</button>
            <button class="btn btn-circle btn-accent">1</button>
            <button class="btn btn-circle">2</button>
            <template #main-action>
              <button class="btn btn-circle btn-success">✓</button>
            </template>
            <template #close>
              <button class="btn btn-circle fab-close">×</button>
            </template>
          </Fab>
        </div>
      </Variant>

      <Variant title="With all slots">
        <template #source>
          <textarea v-pre>
            <Fab>
              <button class="btn btn-circle btn-primary">Menu</button>
              <button class="btn btn-circle btn-accent">Edit</button>
              <button class="btn btn-circle">Copy</button>
              <template #main-action>
                <button class="btn btn-circle btn-success">Save</button>
              </template>
              <template #close>
                <button class="btn btn-circle btn-error fab-close">Close</button>
              </template>
            </Fab>
          </textarea>
        </template>

        <div class="p-28">
          <Fab>
            <button class="btn btn-circle btn-primary">Menu</button>
            <button class="btn btn-circle btn-accent">Edit</button>
            <button class="btn btn-circle">Copy</button>
            <template #main-action>
              <button class="btn btn-circle btn-success">Save</button>
            </template>
            <template #close>
              <button class="btn btn-circle btn-error fab-close">Close</button>
            </template>
          </Fab>
        </div>
      </Variant>

      <Variant title="Composition">
        <div class="flex gap-4 p-4">
          <Fab mode="flower">
            <button class="btn btn-circle btn-primary">+</button>
            <button class="btn btn-circle btn-sm btn-accent">Edit</button>
            <button class="btn btn-circle btn-sm">Copy</button>
            <template #close>
              <button class="btn btn-circle btn-sm fab-close">×</button>
            </template>
          </Fab>
          <Fab>
            <button class="btn btn-circle btn-primary">✓</button>
            <button class="btn btn-circle btn-sm btn-success">Save</button>
            <button class="btn btn-circle btn-sm">Preview</button>
            <template #close>
              <button class="btn btn-circle btn-sm fab-close">×</button>
            </template>
          </Fab>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<docs lang="md">
# Fab (Speed Dial)

## Description

A floating action button with a dial of related actions that appear around it.
Built on DaisyUI's `fab` component. All direct children are treated as action buttons,
with the first one being the main trigger button.

## Props

| Prop   | Type      | Default     | Required | Configurable | Description                                         |
|--------|-----------|-------------|----------|--------------|-----------------------------------------------------|
| `mode` | `FabMode` | `undefined` | ❌       | ✅          | Visual mode: `'flower'` for radial opening pattern. |

## Slots

| Slot | Description                                                                         |
|------|-------------------------------------------------------------------------------------|
| `default`     | All action buttons, including the main trigger button.                     |
| `main-action` | Replaces the main action button content when the FAB is in its open state. |
| `close`       | A button with `fab-close` class that closes the FAB when clicked.          |

## Usage

```vue
<!-- Basic FAB -->
<Fab>
  <button class="btn btn-circle btn-primary">+</button>
  <button class="btn btn-circle btn-accent">Action 1</button>
  <button class="btn btn-circle">Action 2</button>
  <button class="btn btn-circle">Action 3</button>
  <template #close>
    <button class="btn btn-circle fab-close">×</button>
  </template>
</Fab>

<!-- Flower mode (radial opening) -->
<Fab mode="flower">
  <button class="btn btn-circle btn-primary">+</button>
  <button class="btn btn-circle">1</button>
  <button class="btn btn-circle">2</button>
  <button class="btn btn-circle">3</button>
  <template #close>
    <button class="btn btn-circle fab-close">×</button>
  </template>
</Fab>

<!-- With main-action slot -->
<Fab mode="flower">
  <button class="btn btn-circle btn-primary">+</button>
  <button class="btn btn-circle">1</button>
  <button class="btn btn-circle">2</button>
  <template #main-action>
    <button class="btn btn-circle btn-success">✓</button>
  </template>
  <template #close>
    <button class="btn btn-circle fab-close">×</button>
  </template>
</Fab>
```
</docs>
