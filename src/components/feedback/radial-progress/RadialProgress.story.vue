<script lang="ts">
import { reactive } from 'vue'
import RadialProgress from './RadialProgress.vue'
import type { RadialProgressProps } from './radial-progress.props'
</script>

<script setup lang="ts">
const state = reactive<RadialProgressProps>({
  value: 70,
  color: undefined,
  size: undefined,
  thickness: undefined,
})
</script>

<template>
  <Story group="components" title="Feedback/RadialProgress" auto-props-disabled>

    <Variant title="Default">
      <template #controls>
        <HstSelect
          v-model="state.color"
          title="Color"
          :options="[
            { label: '-- default --', value: undefined },
            'neutral', 'primary', 'secondary', 'accent',
            'info', 'success', 'warning', 'error',
          ]"
        />
        <HstSlider v-model="state.value" title="Value" :min="0" :max="100" />
      </template>
      <div class="bg-base-100 p-4 rounded-lg">
        <RadialProgress v-bind="state" />
      </div>
    </Variant>

    <Variant title="Colors">
      <div class="flex flex-wrap gap-4 bg-base-100 p-4 rounded-lg">
        <RadialProgress color="neutral" :value="70" />
        <RadialProgress color="primary" :value="70" />
        <RadialProgress color="secondary" :value="70" />
        <RadialProgress color="accent" :value="70" />
        <RadialProgress color="info" :value="70" />
        <RadialProgress color="success" :value="70" />
        <RadialProgress color="warning" :value="70" />
        <RadialProgress color="error" :value="70" />
      </div>
    </Variant>

    <Variant title="Different values">
      <div class="flex flex-wrap gap-4 bg-base-100 p-4 rounded-lg">
        <RadialProgress color="primary" :value="0" />
        <RadialProgress color="primary" :value="25" />
        <RadialProgress color="primary" :value="50" />
        <RadialProgress color="primary" :value="75" />
        <RadialProgress color="primary" :value="100" />
      </div>
    </Variant>

    <Variant title="Custom size and thickness">
      <div class="flex flex-wrap gap-4 bg-base-100 p-4 rounded-lg">
        <RadialProgress color="primary" :value="70" size="8rem" thickness="2px" />
        <RadialProgress color="primary" :value="70" size="8rem" thickness="1rem" />
        <RadialProgress color="primary" :value="70" size="12rem" thickness="4px" />
      </div>
    </Variant>

    <Variant title="Custom slot content">
      <div class="flex flex-wrap gap-4 bg-base-100 p-4 rounded-lg">
        <RadialProgress color="primary" :value="70">
          <span class="text-xs font-bold">70%</span>
        </RadialProgress>
        <RadialProgress color="success" :value="100">
          ✓
        </RadialProgress>
        <RadialProgress color="warning" :value="30">
          Low
        </RadialProgress>
      </div>
    </Variant>

  </Story>
</template>

<docs lang="md">
# RadialProgress

## Description
Radial progress bar used to show the completion of a task or the passing of time.
Renders as a `<div role="progressbar" />` for cross-browser compatibility (Firefox doesn't support pseudo-elements inside `<progress />`).

## Props
| Prop        | Type                  | Default     | Required | Configurable       | Description                                        |
|-------------|-----------------------|-------------|----------|--------------------|----------------------------------------------------|
| `value`     | `number`              | `0`         | :x:      | :x:                | Current value (0–100)                              |
| `color`     | `RadialProgressColor` | `undefined` | :x:      | :white_check_mark: | Color of the progress arc (`text-{color}`)         |
| `size`      | `string`              | `'5rem'`    | :x:      | :white_check_mark: | Size of the circle (any CSS value, e.g. `'8rem'`)  |
| `thickness` | `string`              | `'10%'`     | :x:      | :white_check_mark: | Thickness of the arc (any CSS value, e.g. `'2px'`) |

## Slots
| Slot      | Description                                             |
|-----------|---------------------------------------------------------|
| `default` | Content displayed at the center. Defaults to `{value}%` |

## Usage
```vue
<!-- Default -->
<RadialProgress color="primary" :value="70" />

<!-- Custom size & thickness -->
<RadialProgress color="success" :value="40" size="8rem" thickness="4px" />

<!-- Custom center content -->
<RadialProgress color="warning" :value="30">
  Low
</RadialProgress>
```
</docs>