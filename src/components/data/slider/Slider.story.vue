<script lang="ts">
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import { reactive, ref, shallowRef } from 'vue'
import { createI18n } from 'vue-i18n'
import Slider from './Slider.vue'
import type { SliderProps } from './slider.props'
</script>

<script setup lang="ts">
const singleValue = shallowRef<number>(50)
const rangeValue = shallowRef<[number, number]>([20, 70])
const noSwapValue = shallowRef<[number, number]>([30, 60])
const invertedTrackValue = shallowRef<number>(50)
const invertedRangeValue = shallowRef<[number, number]>([25, 75])
const scaleValue = shallowRef<number>(50)

// Scale function example: map 0-100 to 20-20000 (like frequency)
function frequencyScale(value: number): number {
  return 20 + (value / 100) * 19980
}

const state = reactive<SliderProps>({
  size: 'md',
  min: 0,
  max: 100,
  step: 1,
  track: 'normal',
  disableSwap: false,
})

const formData = ref<Record<string, unknown>>({ 
  volume: 50,
  priceRange: [20, 80],
})
</script>

<template>
  <Story group="components" title="Data/Slider" auto-props-disabled :setup-app="({ app }) => {
    app.use(createI18n({}))
  }" :layout="{ type: 'single', iframe: false }">

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
        <HstSlider v-model="state.min" title="min" :min="-100" :max="0" />
        <HstSlider v-model="state.max" title="max" :min="0" :max="200" />
        <HstSlider v-model="state.step" title="step" :min="1" :max="20" />
        <HstSelect
          v-model="state.track"
          title="track"
          :options="['normal', 'inverted', false]"
        />
        <HstCheckbox v-model="(state.disableSwap as boolean)" title="disableSwap" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
      </template>

      <div class="p-4 flex flex-col gap-2">
        <Slider v-model="singleValue" v-bind="state" aria-label="Volume" />
        <span class="text-sm opacity-60">Value: {{ singleValue }}</span>
      </div>
    </Variant>

    <Variant title="Range Mode" id="range">
      <div class="p-4 flex flex-col gap-2">
        <Slider v-model="rangeValue" range color="primary" />
        <span class="text-sm opacity-60">{{ rangeValue[0] }} – {{ rangeValue[1] }}</span>
      </div>
    </Variant>

    <Variant title="Disable Swap" id="disable-swap">
      <div class="p-4 flex flex-col gap-4">
        <p class="text-sm opacity-60">Try to cross the thumbs - they will be blocked.</p>
        <Slider v-model="noSwapValue" range :disable-swap="true" color="warning" />
        <span class="text-sm opacity-60">{{ noSwapValue[0] }} – {{ noSwapValue[1] }}</span>
      </div>
    </Variant>

    <Variant title="Swap Allowed (Default)" id="swap-allowed">
      <div class="p-4 flex flex-col gap-4">
        <p class="text-sm opacity-60">Try to cross the thumbs - they will swap roles transparently.</p>
        <Slider v-model="rangeValue" range :disable-swap="false" color="success" />
        <span class="text-sm opacity-60">{{ rangeValue[0] }} – {{ rangeValue[1] }}</span>
      </div>
    </Variant>

    <Variant title="Track: Normal" id="track-normal">
      <div class="p-4 flex flex-col gap-2">
        <Slider v-model="singleValue" track="normal" color="primary" />
        <span class="text-sm opacity-60">Track between min and thumb</span>
      </div>
    </Variant>

    <Variant title="Track: Inverted" id="track-inverted">
      <div class="p-4 flex flex-col gap-2">
        <Slider v-model="invertedTrackValue" track="inverted" color="secondary" />
        <span class="text-sm opacity-60">Track on unselected area</span>
      </div>
    </Variant>

    <Variant title="Track: None" id="track-none">
      <div class="p-4 flex flex-col gap-2">
        <Slider v-model="singleValue" track="none" color="neutral" />
        <span class="text-sm opacity-60">No track displayed</span>
      </div>
    </Variant>

    <Variant title="Track Inverted (Range)" id="track-inverted-range">
      <div class="p-4 flex flex-col gap-2">
        <Slider v-model="invertedRangeValue" range track="inverted" color="error" />
        <span class="text-sm opacity-60">{{ invertedRangeValue[0] }} – {{ invertedRangeValue[1] }}</span>
      </div>
    </Variant>

    <Variant title="Scale Function" id="scale">
      <div class="p-4 flex flex-col gap-2">
        <Slider v-model="scaleValue" :scale="frequencyScale" :min="0" :max="100" color="info" />
        <span class="text-sm opacity-60">Mechanical: {{ scaleValue }} | Business: {{ frequencyScale(scaleValue) }}Hz</span>
      </div>
    </Variant>

    <Variant title="Colors" id="colors">
      <div class="flex flex-col gap-6 p-4">
        <Slider v-model="singleValue" color="neutral" />
        <Slider v-model="singleValue" color="primary" />
        <Slider v-model="singleValue" color="secondary" />
        <Slider v-model="singleValue" color="accent" />
        <Slider v-model="singleValue" color="info" />
        <Slider v-model="singleValue" color="success" />
        <Slider v-model="singleValue" color="warning" />
        <Slider v-model="singleValue" color="error" />
      </div>
    </Variant>

    <Variant title="Sizes" id="sizes">
      <div class="flex flex-col gap-6 p-4">
        <Slider v-model="singleValue" size="xs" />
        <Slider v-model="singleValue" size="sm" />
        <Slider v-model="singleValue" size="md" />
        <Slider v-model="singleValue" size="lg" />
        <Slider v-model="singleValue" size="xl" />
      </div>
    </Variant>

    <Variant title="Disabled" id="disabled">
      <div class="flex flex-col gap-6 p-4">
        <Slider :value="40" disabled />
        <Slider :value="[20, 70]" range disabled />
      </div>
    </Variant>

    <Variant title="Inside FormField" id="inside-form-field">
      <Form v-model="formData">
        <FormField name="volume" label="Volume">
          <Slider :min="0" :max="100" required aria-label="Volume level" />
        </FormField>
        <FormField name="priceRange" label="Price range" class="mt-4">
          <Slider :min="0" :max="500" :step="10" range aria-label="Price range" />
        </FormField>
      </Form>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Slider

## Description
A custom slider component that allows users to select a value or range of values within a specified range. Based on the Range component with additional features like track inversion, thumb swapping control, and value scaling.

## API

### v-model

| Name         | Type                         | Description                                                                        |
|--------------|------------------------------|------------------------------------------------------------------------------------|
| `modelValue` | `number \| [number, number]` | Single value, or `[low, high]` tuple in range mode. Values are always kept sorted. |

### Props

| Prop          | Type          | Default     | Description                                           |
|---------------|---------------|-------------|-------------------------------------------------------|
| `color`       | `SliderColor` | `undefined` | Color of the track fill and thumb border.             |
| `size`        | `SliderSize`  | `'md'`      | Size of the slider (track height and thumb diameter). |
| `min`         | `number`      | `0`         | Minimum value.                                        |
| `max`         | `number`      | `100`       | Maximum value.                                        |
| `step`        | `number`      | `1`         | Step increment.                                       |
| `track`       | `SliderTrack` | `'normal'`  | Track display mode.                                   |
| `range`       | `boolean`     | `false`     | Enables double thumb mode.                            |
| `disableSwap` | `boolean`     | `false`     | Prevents thumbs from crossing/swapping.               |
| `scale`       | `SliderScale` | `undefined` | Function to transform mechanical to business values.  |
| `disabled`    | `boolean`     | `false`     | Disables all interaction.                             |
| `required`    | `boolean`     | `undefined` | Native required.                                      |
| `ariaLabel`   | `string`      | `undefined` | Accessible label for the slider.                      |

### Events

| Event                | Payload                      | Description                                                |
|----------------------|------------------------------|------------------------------------------------------------|
| `@input`             | `number \| [number, number]` | Emitted on every value change during interaction.          |
| `@change`            | `number \| [number, number]` | Emitted when interaction ends (mouse up, touch end, blur). |

## Note

### Features
- **Single or Range Mode**: Support for single value selection or dual-thumb range selection
- **Track Modes**: Normal (selected area), Inverted (unselected area), or none
- **Thumb Swapping**: Configurable behavior when thumbs cross (allow swap or prevent)
- **Value Scaling**: Transform mechanical values to business values via scale function
- **Keyboard Navigation**: Full keyboard support (Arrow keys, Page Up/Down, Home/End)
- **Accessibility**: ARIA compliant with proper roles, states, and labels
- **Form Integration**: Works seamlessly with FormField

### Track Modes
| Mode       | Behavior                                                                 |
|------------|--------------------------------------------------------------------------|
| `normal`   | Track fills between min and thumb (or between both thumbs in range mode) |
| `inverted` | Track fills the unselected area                                          |
| `false`    | No track is displayed                                                    |

### Swap Behavior

| disableSwap       | Behavior                                                                                                                    |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------|
| `false` (default) | Thumbs can cross and swap roles - the left thumb becomes the right one and vice versa. The swap is transparent to the user. |
| `true`            | Thumbs cannot cross - they are clamped to prevent crossing.                                                                 |

### Scale Function

The scale function transforms mechanical values (in min-max range) to business values.
The mechanical values are used for positioning, while the scaled values are emitted and displayed.

```typescript
// Example: Map 0-100 to 20-20000 (frequency)
const frequencyScale = (value: number) => 20 + (value / 100) * 19980

// Example: Map 0-100 to -50 to +50 (temperature)
const temperatureScale = (value: number) => value - 50
```

## Usage
```vue
<!-- Basic slider -->
<Slider v-model="volume" :min="0" :max="100" />

<!-- Range slider -->
<Slider v-model="priceRange" range :min="0" :max="500" :step="10" />

<!-- Inverted track -->
<Slider v-model="value" track="inverted" />

<!-- No track -->
<Slider v-model="value" :track="false" />

<!-- Prevent thumb swapping -->
<Slider v-model="[min, max]" range disable-swap />

<!-- With scale function (frequency) -->
<Slider v-model="freq" :scale="v => 20 + (v/100)*19980" :min="0" :max="100" />

<!-- Inside FormField -->
<FormField name="budget" label="Budget range">
  <Slider v-model="budget" range :min="0" :max="1000" :step="50" />
</FormField>
```
</docs>
