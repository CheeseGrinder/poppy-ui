<script lang="ts">
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import { reactive, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import Range from './Range.vue'
import type { RangeProps } from './range.props'
</script>

<script setup lang="ts">
const model = ref<number>(50)
const rangeModel = ref<[number, number]>([20, 70])
const negativeModel = ref<number>(0)

const state = reactive<RangeProps>({
  size: 'md',
  min: 0,
  max: 100,
  step: 1,
})

const formData = ref<Record<string, unknown>>({ volume: 50, priceRange: [20, 80] })
</script>

<template>
  <Story group="components" title="Data/Range" auto-props-disabled :setup-app="({ app }) => {
    app.use(createI18n({}))
  }">

    <Variant title="Default" id="default">
      <template #controls>
        <HstSelect
          v-model="state.color"
          title="color"
          :options="[{ label: '-- default --', value: undefined }, 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']"
        />
        <HstSelect
          v-model="state.size"
          title="size"
          :options="['xs', 'sm', 'md', 'lg', 'xl']"
        />
        <HstSlider v-model="state.min" title="min" :min="-100" :max="100" />
        <HstSlider v-model="state.max" title="max" :min="-100" :max="100" />
        <HstSlider v-model="state.step" title="step" :min="1" :max="20" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
      </template>

      <div class="p-4 flex flex-col gap-2">
        <Range v-model="model" v-bind="state" />
        <span class="text-sm opacity-60">Value: {{ model }}</span>
      </div>
    </Variant>

    <Variant title="Colors" id="colors">
      <div class="flex flex-col gap-4 p-4">
        <Range v-model="model" color="neutral" />
        <Range v-model="model" color="primary" />
        <Range v-model="model" color="secondary" />
        <Range v-model="model" color="accent" />
        <Range v-model="model" color="info" />
        <Range v-model="model" color="success" />
        <Range v-model="model" color="warning" />
        <Range v-model="model" color="error" />
      </div>
    </Variant>

    <Variant title="Sizes" id="sizes">
      <div class="flex flex-col gap-4 p-4">
        <Range v-model="model" size="xs" />
        <Range v-model="model" size="sm" />
        <Range v-model="model" size="md" />
        <Range v-model="model" size="lg" />
        <Range v-model="model" size="xl" />
      </div>
    </Variant>

    <Variant title="Negative min (zero-anchored track)" id="negative-min">
      <div class="p-4 flex flex-col gap-2">
        <Range v-model="negativeModel" :min="-50" :max="50" color="primary" />
        <span class="text-sm opacity-60">Value: {{ negativeModel }}</span>
      </div>
    </Variant>

    <Variant title="Double thumb" id="double">
      <div class="p-4 flex flex-col gap-2">
        <Range v-model="rangeModel" range color="primary" />
        <span class="text-sm opacity-60">Values: {{ rangeModel[0] }} – {{ rangeModel[1] }}</span>
      </div>
    </Variant>

    <Variant title="Double thumb — inversion" id="double-inversion">
      <div class="p-4 flex flex-col gap-2">
        <p class="text-sm opacity-60 mb-2">Drag the left thumb past the right one — they swap automatically.</p>
        <Range v-model="rangeModel" range color="secondary" :step="5" />
        <span class="text-sm opacity-60">Values: {{ rangeModel[0] }} – {{ rangeModel[1] }}</span>
      </div>
    </Variant>

    <Variant title="Disabled" id="disabled">
      <div class="flex flex-col gap-4 p-4">
        <Range :model-value="40" disabled />
        <Range :model-value="[20, 70]" range disabled />
      </div>
    </Variant>

    <Variant title="Inside FormField" id="inside-form-field">
      <Form v-model="formData">
        <FormField name="volume" label="Volume">
          <Range :min="0" :max="100" required />
        </FormField>
        <FormField name="priceRange" label="Price range" class="mt-4">
          <Range :min="0" :max="500" :step="10" range />
        </FormField>
      </Form>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Range

## Description
Slider component built on the DaisyUI `range` element.
Supports single value and double thumb (range) mode with automatic inversion when thumbs cross.
In single mode with a negative `min`, the track is anchored at zero.

## defineModel
| Name         | Type                         | Modifiers | Description                                                                             |
|--------------|------------------------------|-----------|-----------------------------------------------------------------------------------------|
| `modelValue` | `number \| [number, number]` | —         | Single value, or `[min, max]` tuple in range mode. Tuple values are always kept sorted. |

## Props
| Prop       | Type         | Default | Configurable       | Description                                                          |
|------------|--------------|---------|--------------------|----------------------------------------------------------------------|
| `color`    | `RangeColor` | `—`     | :white_check_mark: | Color of the track fill.                                             |
| `size`     | `RangeSize`  | `'md'`  | :white_check_mark: | Size of the slider.                                                  |
| `range`    | `boolean`    | `false` | :x:                | Enables double thumb mode. Model becomes a `[number, number]` tuple. |
| `min`      | `number`     | `0`     | :x:                | Minimum value. When negative, the track anchors at zero.             |
| `max`      | `number`     | `100`   | :x:                | Maximum value.                                                       |
| `step`     | `number`     | `1`     | :x:                | Step increment.                                                      |
| `disabled` | `boolean`    | `—`     | :x:                | Disables all interaction.                                            |
| `required` | `boolean`    | `—`     | :x:                | Native required. Signals `<FormField />` to display `"*"`.           |

## Events
| Event    | Payload | Description                                                                           |
|----------|---------|---------------------------------------------------------------------------------------|
| `@input` | `Event` | Emitted on every thumb move (native input event).                                     |
| `@blur`  | `Event` | Emitted when the slider loses focus. Triggers validation when inside `<FormField />`. |

## Track behavior
| Mode                | Track fill                                      |
|---------------------|-------------------------------------------------|
| Single (`min >= 0`) | From left edge to thumb position.               |
| Single (`min < 0`)  | From zero (center anchor) to thumb position.    |
| Double (`range`)    | Between the two thumb positions.                |

## Double thumb inversion
When dragging a thumb past the other in range mode, the values swap automatically — the dragged thumb becomes the other boundary without any visual snap or block.

> **Configurable** props can be configured in the Poppy Plugin `install` function via the `Poppy` object. See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage
```vue
<!-- Single -->
<Range v-model="volume" color="primary" :max="100" />

<!-- Negative min — zero-anchored track -->
<Range v-model="offset" :min="-50" :max="50" />

<!-- Double thumb -->
<Range v-model="priceRange" range :min="0" :max="500" :step="10" />

<!-- Inside FormField -->
<FormField name="budget" label="Budget range">
  <Range v-model="budget" range :min="0" :max="1000" :step="50" />
</FormField>
```
</docs>