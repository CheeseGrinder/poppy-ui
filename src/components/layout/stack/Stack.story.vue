<script lang="ts">
import { reactive } from 'vue'
import Stack from './Stack.vue'
import type { StackProps } from './stack.props'
</script>

<script setup lang="ts">
const state = reactive<StackProps>({
  direction: undefined,
})

const directions = ['start', 'end', 'top', 'bottom']
</script>

<template>
  <Story group="components" title="Layout/Stack" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Direction" v-model="state.direction" :options="[{ label: '-- default --', value: undefined }, ...directions]" />
        </template>

        <template #source>
          <textarea v-pre>
            <Stack class="size-28">
              <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
              <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
              <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
            </Stack>
          </textarea>
        </template>

        <Stack v-bind="state" class="size-28 p-4">
          <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
          <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
          <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
        </Stack>
      </Variant>

      <Variant title="Start">
        <template #source>
          <textarea v-pre>
            <Stack direction="start" class="size-28">
              <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
              <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
              <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
            </Stack>
          </textarea>
        </template>

        <Stack direction="start" class="size-28 p-4">
          <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
          <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
          <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
        </Stack>
      </Variant>

      <Variant title="End">
        <template #source>
          <textarea v-pre>
            <Stack direction="end" class="size-28">
              <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
              <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
              <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
            </Stack>
          </textarea>
        </template>

        <Stack direction="end" class="size-28 p-4">
          <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
          <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
          <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
        </Stack>
      </Variant>

      <Variant title="Top">
        <template #source>
          <textarea v-pre>
            <Stack direction="top" class="size-28">
              <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
              <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
              <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
            </Stack>
          </textarea>
        </template>

        <Stack direction="top" class="size-28 p-4">
          <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
          <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
          <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
        </Stack>
      </Variant>

      <Variant title="Bottom">
        <template #source>
          <textarea v-pre>
            <Stack direction="bottom" class="size-28">
              <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
              <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
              <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
            </Stack>
          </textarea>
        </template>

        <Stack direction="bottom" class="size-28 p-4">
          <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
          <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
          <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
        </Stack>
      </Variant>

      <Variant title="All Directions">
        <div class="flex flex-col gap-4 p-4">
          <div v-for="direction in directions" :key="direction">
            <span class="text-sm text-base-content/60 mb-1 block">{{ direction }}</span>
            <Stack :direction="direction" class="size-28">
              <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
              <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
              <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
            </Stack>
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<docs lang="md">
# Stack

## Description

Stacks items together with automatic spacing. Built on DaisyUI's `stack` component.
Use it to group elements that should appear connected.

## Props

| Prop       | Type            | Default     | Required | Configurable | Description                              |
|------------|-----------------|-------------|----------|--------------|------------------------------------------|
| `direction`| `StackDirection`| `undefined` | ❌       | ✅            | Layout direction: `'start'`, `'end'`, `'top'`, `'bottom'`. |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.stack` option). See [Plugin Configuration](#) for more information.

## Usage

```vue
<!-- Basic stack -->
<Stack>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>

<!-- With direction -->
<Stack direction="start">
  <div>Item 1</div>
  <div>Item 2</div>
</Stack>

<!-- With custom content -->
<Stack direction="end">
  <div class="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
  <div class="bg-accent text-accent-content grid place-content-center rounded-box">2</div>
  <div class="bg-secondary text-secondary-content grid place-content-center rounded-box">3</div>
</Stack>
```
</docs>
