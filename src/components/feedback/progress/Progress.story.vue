<script lang="ts">
import { reactive } from 'vue'
import Progress from './Progress.vue'
import type { ProgressProps } from './progress.props'
</script>

<script setup lang="ts">
const state = reactive<ProgressProps>({
  value: 40,
  max: 100,
  color: undefined,
  indeterminate: false,
})
</script>

<template>
  <Story group="components" title="Feedback/Progress" auto-props-disabled>

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
        <HstCheckbox v-model="(state.indeterminate as boolean)" title="Indeterminate" />
      </template>
      <Progress v-bind="state" class="w-56" />
    </Variant>

    <Variant title="Colors">
      <div class="flex flex-col gap-2">
        <Progress color="neutral" :value="70" class="w-56" />
        <Progress color="primary" :value="70" class="w-56" />
        <Progress color="secondary" :value="70" class="w-56" />
        <Progress color="accent" :value="70" class="w-56" />
        <Progress color="info" :value="70" class="w-56" />
        <Progress color="success" :value="70" class="w-56" />
        <Progress color="warning" :value="70" class="w-56" />
        <Progress color="error" :value="70" class="w-56" />
      </div>
    </Variant>

    <Variant title="Values">
      <div class="flex flex-col gap-2">
        <Progress color="primary" :value="0" class="w-56" />
        <Progress color="primary" :value="25" class="w-56" />
        <Progress color="primary" :value="50" class="w-56" />
        <Progress color="primary" :value="75" class="w-56" />
        <Progress color="primary" :value="100" class="w-56" />
      </div>
    </Variant>

    <Variant title="Indeterminate">
      <div class="flex flex-col gap-2">
        <Progress class="w-56" />
        <Progress color="primary" indeterminate class="w-56" />
        <Progress color="success" indeterminate class="w-56" />
      </div>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Progress

## Description
Progress bar used to show the completion of a task or the passing of time.
Omitting `value` or setting `indeterminate` renders an animated indeterminate state.

## Props
| Prop            | Type            | Default     | Required | Configurable       | Description                                                          |
|-----------------|-----------------|-------------|----------|--------------------|----------------------------------------------------------------------|
| `color`         | `ProgressColor` | `undefined` | :x:      | :white_check_mark: | Color of the progress bar                                            |
| `value`         | `number`        | `undefined` | :x:      | :x:                | Current value. Omit for indeterminate state                          |
| `max`           | `number`        | `100`       | :x:      | :white_check_mark: | Maximum value                                                        |
| `indeterminate` | `Booleanish`    | `false`     | :x:      | :x:                | Forces indeterminate (animated) state, takes precedence over `value` |

## Usage
```vue
<!-- Determinate -->
<Progress color="primary" :value="40" :max="100" />

<!-- Indeterminate -->
<Progress color="primary" indeterminate />

<!-- Indeterminate (no value) -->
<Progress color="primary" />
```
</docs>