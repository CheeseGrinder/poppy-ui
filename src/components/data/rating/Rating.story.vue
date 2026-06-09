<script lang="ts">
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import { reactive, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import Rating from './Rating.vue'
import type { RatingProps } from './rating.props'
</script>

<script setup lang="ts">
const model = ref<number>(0)

const state = reactive<RatingProps>({
  size: 'md',
  count: 5,
  half: false,
  clearable: true,
})

const formData = ref<Record<string, unknown>>({ rating: 0 })
</script>

<template>
  <Story group="components" title="Data/Rating" auto-props-disabled :setup-app="({ app }) => {
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
        <HstSlider v-model="state.count" title="count" :min="1" :max="10" />
        <HstCheckbox v-model="(state.half as boolean)" title="half" />
        <HstCheckbox v-model="(state.clearable as boolean)" title="clearable" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
        <HstCheckbox v-model="state.required" title="required" />
      </template>

      <Rating v-model="model" v-bind="state" />
    </Variant>

    <Variant title="Colors" id="colors">
      <div class="flex flex-col gap-3 p-4">
        <Rating v-model="model" color="neutral" :value="3" />
        <Rating v-model="model" color="primary" :value="3" />
        <Rating v-model="model" color="secondary" :value="3" />
        <Rating v-model="model" color="accent" :value="3" />
        <Rating v-model="model" color="info" :value="3" />
        <Rating v-model="model" color="success" :value="3" />
        <Rating v-model="model" color="warning" :value="3" />
        <Rating v-model="model" color="error" :value="3" />
      </div>
    </Variant>

    <Variant title="Sizes" id="sizes">
      <div class="flex flex-col gap-3 p-4">
        <Rating v-model="model" size="xs" />
        <Rating v-model="model" size="sm" />
        <Rating v-model="model" size="md" />
        <Rating v-model="model" size="lg" />
        <Rating v-model="model" size="xl" />
      </div>
    </Variant>

    <Variant title="Half precision" id="half">
      <Rating v-model="model" half :value="2.5" />
    </Variant>

    <Variant title="Not clearable" id="not-clearable">
      <Rating v-model="model" :clearable="false" />
    </Variant>

    <Variant title="Disabled" id="disabled">
      <Rating :model-value="3" disabled />
    </Variant>

    <Variant title="Inside FormField" id="inside-form-field">
      <Form v-model="formData">
        <FormField name="rating" label="Your rating">
          <Rating required />
        </FormField>
      </Form>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Rating

## Description
Star rating component built on the DaisyUI `rating` element.
Rendered as a set of `<input type="radio" />` elements styled as stars.
Supports half-star precision and a clearable affordance.
Works standalone with `v-model` or inside `<FormField />` for full form integration.

## API

### v-model

| Name      | Type     | Modifiers | Description                                                                                   |
|-----------|----------|-----------|-----------------------------------------------------------------------------------------------|
| `v-model` | `number` | -         | Current rating value (1-based). `0` means no star selected. Increments by `0.5` in half mode. |

### Props

| Prop        | Type           | Default     | Configurable       | Description                                                 |
|-------------|----------------|-------------|--------------------|-------------------------------------------------------------|
| `color`     | `RatingColor`  | `undefined` | :white_check_mark: | Color applied to the star icons.                            |
| `size`      | `RatingSize`   | `'md'`      | :white_check_mark: | Size of the stars.                                          |
| `count`     | `number`       | `5`         | :white_check_mark: | Total number of stars.                                      |
| `half`      | `Booleanish`   | `false`     | :white_check_mark: | Enables half-star precision (0.5 increments).               |
| `clearable` | `Booleanish`   | `true`      | :white_check_mark: | Allows clearing the rating by re-selecting the active star. |
| `disabled`  | `boolean`      | `undefined` | :x:                | Disables all interaction.                                   |
| `required`  | `boolean`      | `undefined` | :x:                | Native required. Signals `<FormField />` to display `"*"`.  |

### Events

| Event     | Payload  | Description                                                                            |
|-----------|----------|----------------------------------------------------------------------------------------|
| `@change` | `number` | Emitted when the selected star changes. Payload is the new value (`0` when cleared).   |
| `@blur`   | `Event`  | Emitted when focus leaves the rating. Triggers validation when inside `<FormField />`. |

> **Configurable** props can be configured in the Poppy Plugin `install` function via the `Poppy` object. See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage
```vue
<!-- Standalone -->
<Rating v-model="score" color="warning" />

<!-- Half precision -->
<Rating v-model="score" half />

<!-- Not clearable -->
<Rating v-model="score" :clearable="false" />

<!-- Inside FormField -->
<FormField name="rating" label="Your rating">
  <Rating required />
</FormField>
```
</docs>