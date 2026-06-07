<script lang="ts">
import { reactive } from 'vue'
import Divider from './Divider.vue'
import type { DividerProps } from './divider.props'
import type { DividerColor, DividerPlacement } from './divider.types'
</script>

<script setup lang="ts">
const state = reactive<DividerProps>({
  orientation: 'horizontal',
  color: undefined,
  placement: undefined,
})

const colors = ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'] satisfies DividerColor[]
const placements = ['start', 'end'] satisfies DividerPlacement[]
</script>

<template>
  <Story group="components" title="Layout/Divider" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Orientation" v-model="state.orientation" :options="['horizontal', 'vertical']" />
          <HstSelect title="Color" v-model="state.color" :options="[{ label: '-- default --', value: undefined }, ...colors]" />
          <HstSelect title="Placement" v-model="state.placement" :options="[{ label: '-- default --', value: undefined }, ...placements]" />
        </template>

        <template #source>
          <textarea v-pre>
            <div class="flex gap-4">
              <span>Left</span>
              <Divider />
              <span>Right</span>
            </div>
          </textarea>
        </template>

        <div class="flex gap-4 p-4">
          <span>Left</span>
          <Divider v-bind="state" />
          <span>Right</span>
        </div>
      </Variant>

      <Variant title="Colors">
        <template #source>
          <textarea v-pre>
            <div class="flex flex-col gap-2">
              <div v-for="color in ['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']" :key="color">
                <Divider :color="color">
                  <span>{{ color }}</span>
                </Divider>
              </div>
            </div>
          </textarea>
        </template>

        <div class="flex flex-col gap-2 p-4">
          <Divider>
            <span>default</span>
          </Divider>
          <div v-for="color in colors" :key="color" class="flex items-center gap-2">
            <Divider :color="color">
              <span class="">{{ color }}</span>
            </Divider>
          </div>
        </div>
      </Variant>

      <Variant title="Placement">
        <template #source>
          <textarea v-pre>
            <div class="flex flex-col gap-4">
              <Divider placement="start">Text</Divider>
              <Divider>Text</Divider>
              <Divider placement="end">Text</Divider>
            </div>
            <div class="flex h-24">
              <Divider placement="start" orientation="horizontal">start</Divider>
              <Divider orientation="horizontal">default</Divider>
              <Divider placement="end" orientation="horizontal">end</Divider>
            </div>
          </textarea>
        </template>

        <div class="flex flex-col gap-4 p-4">
          <Divider placement="start" color="primary">start</Divider>
          <Divider color="primary">default</Divider>
          <Divider placement="end" color="primary">end</Divider>
        </div>
        <div class="flex h-24">
          <Divider placement="start" color="primary" orientation="horizontal">start</Divider>
          <Divider color="primary" orientation="horizontal">default</Divider>
          <Divider placement="end" color="primary" orientation="horizontal">end</Divider>
        </div>
      </Variant>

      <Variant title="Orientation">
        <div class="flex gap-4 p-4">
          <div class="flex gap-2 items-center">
            <span>Horizontal</span>
            <Divider orientation="horizontal" color="primary" />
            <span>Divider</span>
          </div>
          <div class="flex flex-col gap-2 items-center h-24">
            <span>Vertical</span>
            <Divider orientation="vertical" color="primary" />
            <span>Divider</span>
          </div>
        </div>
      </Variant>

      <Variant title="With text">
        <template #source>
          <textarea v-pre>
            <div class="flex gap-4">
              <span>Option A</span>
              <Divider>OR</Divider>
              <span>Option B</span>
            </div>
          </textarea>
        </template>

        <div class="flex gap-4 p-4">
          <span>Option A</span>
          <Divider orientation="horizontal">OR</Divider>
          <span>Option B</span>
        </div>
      </Variant>

      <Variant title="Composition">
        <template #source>
          <textarea v-pre>
            <div class="flex flex-col gap-2">
              <div class="flex gap-4">
                <span>Name</span>
                <Divider orientation="vertical" />
                <span>Value</span>
              </div>
              <Divider color="primary" placement="middle">Summary</Divider>
              <div class="flex gap-4">
                <span>Total</span>
                <Divider orientation="vertical" />
                <span>100</span>
              </div>
            </div>
          </textarea>
        </template>

        <div class="flex flex-col gap-2 p-4">
          <div class="flex gap-4">
            <span>Name</span>
            <Divider orientation="vertical" />
            <span>Value</span>
          </div>
          <Divider color="primary">Summary</Divider>
          <div class="flex gap-4">
            <span>Total</span>
            <Divider orientation="vertical" />
            <span>100</span>
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<docs lang="md">
# Divider

## Description

A simple line to visually separate content. Built on DaisyUI's `divider` component.
Supports horizontal and vertical orientations, multiple colors, and text placement.

## Props

| Prop         | Type                 | Default       | Required | Configurable       | Description                                                                                                |
|--------------|----------------------|---------------|----------|--------------------|------------------------------------------------------------------------------------------------------------|
| `orientation`| `DividerOrientation` | `'horizontal'`| :x:      | :white_check_mark: | Orientation: `'horizontal'` or `'vertical'`.                                                               |
| `color`      | `DividerColor`       | `undefined`   | :x:      | :white_check_mark: | Color: `'neutral'`, `'primary'`, `'secondary'`, `'accent'`, `'info'`, `'success'`, `'warning'`, `'error'`. |
| `placement`  | `DividerPlacement`   | `undefined`   | :x:      | :white_check_mark: | Text placement: `'start'`, `'end'`, `'middle'`, `'none'`.                                                  |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.divider` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage

```vue
<!-- Horizontal divider (default) -->
<div class="flex gap-4">
  <span>Left</span>
  <Divider />
  <span>Right</span>
</div>

<!-- Vertical divider -->
<div class="flex gap-4">
  <span>Top</span>
  <Divider orientation="vertical" />
  <span>Bottom</span>
</div>

<!-- With color -->
<Divider color="primary" />

<!-- With text and placement -->
<Divider placement="middle">OR</Divider>

<!-- All options -->
<Divider orientation="horizontal" color="success" placement="start">
  Text
</Divider>
```
</docs>
