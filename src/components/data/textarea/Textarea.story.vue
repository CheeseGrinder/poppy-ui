<script lang="ts">
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import { reactive, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import Textarea from './Textarea.vue'
import type { TextareaProps } from './textarea.props'
</script>

<script setup lang="ts">
const model = ref<string>('')

const state = reactive<TextareaProps>({
  size: 'md',
  rows: 4,
  counter: false,
  autoGrow: false,
})

const formData = ref<Record<string, unknown>>({ bio: '' })
const formCounterData = ref<Record<string, unknown>>({ bio: '' })
</script>

<template>
  <Story group="components" title="Data/Textarea" auto-props-disabled :setup-app="({ app }) => {
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
        <HstSelect
          v-model="state.variant"
          title="variant"
          :options="[{ label: '-- default --', value: undefined }, 'bordered', 'ghost']"
        />
        <HstCheckbox v-model="(state.counter as boolean)" title="counter" />
        <HstSlider v-model="state.maxLength" title="maxLength" :min="0" :max="500" />
        <HstSlider v-model="(state.rows as number)" title="rows" :min="1" :max="20" />
        <HstCheckbox v-model="(state.autoGrow as boolean)" title="autoGrow" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
        <HstCheckbox v-model="state.required" title="required" />
        <HstText v-model="state.placeholder" title="placeholder" />
        <HstText v-model="state.label" title="label" />
        <HstText v-model="state.hint" title="hint" />
      </template>

      <Textarea v-model="model" v-bind="state" />
    </Variant>

    <Variant title="Colors" id="colors">
      <div class="flex flex-col gap-2 p-4">
        <Textarea v-model="model" placeholder="neutral" color="neutral" variant="bordered" :rows="2" />
        <Textarea v-model="model" placeholder="primary" color="primary" variant="bordered" :rows="2" />
        <Textarea v-model="model" placeholder="secondary" color="secondary" variant="bordered" :rows="2" />
        <Textarea v-model="model" placeholder="accent" color="accent" variant="bordered" :rows="2" />
        <Textarea v-model="model" placeholder="info" color="info" variant="bordered" :rows="2" />
        <Textarea v-model="model" placeholder="success" color="success" variant="bordered" :rows="2" />
        <Textarea v-model="model" placeholder="warning" color="warning" variant="bordered" :rows="2" />
        <Textarea v-model="model" placeholder="error" color="error" variant="bordered" :rows="2" />
      </div>
    </Variant>

    <Variant title="Disabled" id="disabled">
      <Textarea v-model="model" disabled placeholder="Disabled textarea" />
    </Variant>

    <Variant title="With Counter" id="with-counter">
      <Textarea v-model="model" counter :max-length="300" placeholder="Max 300 chars" />
    </Variant>

    <Variant title="Auto Grow" id="auto-grow">
      <Textarea v-model="model" auto-grow placeholder="Grows as you type…" />
    </Variant>

    <Variant title="Variant" id="variants">
      <div class="flex flex-col gap-2">
        <Textarea v-model="model" variant="bordered" placeholder="Bordered" />
        <Textarea v-model="model" variant="ghost" placeholder="Ghost" />
      </div>
    </Variant>

    <Variant title="Standalone with label + hint" id="standalone-label-hint">
      <Textarea
        v-model="model"
        label="Bio"
        hint="Tell us a bit about yourself"
        variant="bordered"
        placeholder="I am…"
      />
    </Variant>

    <Variant title="Inside FormField" id="inside-form-field">
      <Form v-model="formData">
        <FormField name="bio" label="Bio" hint="Max 500 characters">
          <Textarea required placeholder="Tell us about yourself" :max-length="500" />
        </FormField>
      </Form>
    </Variant>

    <Variant title="Counter inherited from Form" id="counter-from-form">
      <Form v-model="formCounterData" counter>
        <FormField name="bio" label="Bio">
          <Textarea :max-length="300" placeholder="Tell us about yourself" />
        </FormField>
      </Form>
    </Variant>

    <Variant title="Counter overridden on FormField" id="counter-override-form-field">
      <Form v-model="formCounterData" counter>
        <FormField name="bio" label="Bio" :counter="false">
          <Textarea :max-length="300" placeholder="Counter disabled here" />
        </FormField>
      </Form>
    </Variant>

    <Variant title="Counter overridden on Textarea" id="counter-override-textarea">
      <Form v-model="formCounterData">
        <FormField name="bio" label="Bio">
          <Textarea counter :max-length="300" placeholder="Counter forced on textarea" />
        </FormField>
      </Form>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Textarea

## Description

Multi-line text input component built on the DaisyUI `textarea` element.
Works standalone with `v-model` or inside `<FormField />` for full form integration (validation, error display, counter cascade).
Supports an `autoGrow` mode that expands the height automatically to fit the content.

## API

### v-model

| Name         | Type     | Modifiers | Description                                                            |
|--------------|----------|-----------|------------------------------------------------------------------------|
| `modelValue` | `string` | `.trim`   | The current text content. `.trim` removes leading/trailing whitespace. |

### Props

| Prop            | Type                  | Default               | Configurable       | Description                                                                     |
|-----------------|-----------------------|-----------------------|--------------------|---------------------------------------------------------------------------------|
| `color`         | `TextareaColor`       | `undefined`           | :white_check_mark: | Color variant.                                                                  |
| `size`          | `TextareaSize`        | `'md'`                | :white_check_mark: | Size.                                                                           |
| `variant`       | `TextareaVariant`     | `undefined`           | :white_check_mark: | Visual style variant.                                                           |
| `autoGrow`      | `boolean`          | `false`               | :white_check_mark: | Grows height to fit content via `field-sizing-content`. Ignores `rows` when on. |
| `counter`       | `boolean`          | `false`               | :white_check_mark: | Shows character counter.                                                        |
| `minLength`     | `number`              | `undefined`           | :white_check_mark: | Min length (counter warning + native).                                          |
| `maxLength`     | `number`              | `undefined`           | :white_check_mark: | Max length (counter warning + native `maxlength`).                              |
| `counterFormat` | `string \| CounterFn` | `'{current} / {max}'` | :white_check_mark: | Counter format.                                                                 |
| `rows`          | `number`              | `4`                   | :x:                | Visible row count. Ignored when `autoGrow` is on.                               |
| `label`         | `string`              | `undefined`           | :x:                | Inline label (standalone use).                                                  |
| `hint`          | `string`              | `undefined`           | :x:                | Hint text (standalone use).                                                     |
| `disabled`      | `boolean`             | `undefined`           | :x:                | Native disabled.                                                                |
| `required`      | `boolean`             | `undefined`           | :x:                | Native required.                                                                |
| `placeholder`   | `string`              | `undefined`           | :x:                | Placeholder text.                                                               |

### Events

| Event    | Payload | Description                                                                             |
|----------|---------|-----------------------------------------------------------------------------------------|
| `@input` | `Event` | Emitted on every keystroke (native input event).                                        |
| `@blur`  | `Event` | Emitted when the textarea loses focus. Triggers validation when inside `<FormField />`. |

### Slots

| Slot      | Bindings                | Description                            |
|-----------|-------------------------|----------------------------------------|
| `label`   | -                       | Top-left inline label (standalone).    |
| `hint`    | -                       | Bottom-left hint / error (standalone). |
| `counter` | `{ current, min, max }` | Bottom-right character count.          |

> **Configurable** props can be configured in the Poppy Plugin `install` function via the `Poppy` object. See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Note

### Counter cascade
Counter resolution order (first defined wins):
1. `counter` prop on `<Textarea />` itself
2. `counter` on `<FormField />`
3. `counter` on `<Form />`
4. Plugin config
5. Default: `false`

> **Configurable** props can be configured in the Poppy Plugin `install` function via the `Poppy` object. See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage
```vue
<!-- Standalone -->
<Textarea v-model="bio" label="Bio" variant="bordered" counter :max-length="300" />

<!-- Auto grow -->
<Textarea v-model="notes" auto-grow placeholder="Grows as you type…" />

<!-- Inside FormField -->
<FormField name="bio" label="Bio">
  <Textarea required :max-length="500" />
</FormField>

<!-- Counter inherited from Form -->
<Form v-model="data" counter>
  <FormField name="bio">
    <Textarea :max-length="300" />
  </FormField>
</Form>
```
</docs>