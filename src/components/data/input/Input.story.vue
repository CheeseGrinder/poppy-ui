<script lang="ts">
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import { reactive, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import Input from './Input.vue'
import type { InputProps } from './input.props'
</script>

<script setup lang="ts">
const model = ref<string | number>('')

const state = reactive<InputProps>({
  size: 'md',
  type: 'text',
  counter: false,
})

const formData = ref<Record<string, unknown>>({ email: '', name: '' })
const formCounterData = ref<Record<string, unknown>>({ bio: '' })
</script>

<template>
  <Story group="components" title="Data/Input" auto-props-disabled :setup-app="({ app }) => {
    app.use(createI18n({}))
  }">

    <Variant title="Default" id="default">
      <template #controls>
        <HstSelect
          v-model="state.color"
          title="color"
          :options="[undefined, 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']"
        />
        <HstSelect
          v-model="state.size"
          title="size"
          :options="['xs', 'sm', 'md', 'lg']"
        />
        <HstSelect
          v-model="state.variant"
          title="variant"
          :options="[undefined, 'bordered', 'ghost']"
        />
        <HstSelect
          v-model="state.type"
          title="type"
          :options="['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'time']"
        />
        <HstCheckbox v-model="(state.counter as boolean)" title="counter" />
        <HstSlider v-model="state.maxLength" title="maxLength" :min="0" :max="200" />
        <HstCheckbox v-model="state.disabled" title="disabled" />
        <HstCheckbox v-model="state.required" title="required" />
        <HstText v-model="state.placeholder" title="placeholder" />
        <HstText v-model="state.label" title="label" />
        <HstText v-model="state.hint" title="hint" />
      </template>

      <Input v-model="model" v-bind="state" />
    </Variant>

    <Variant title="Colors" id="colors">
      <div class="flex flex-col gap-2 p-4">
        <Input v-model="model" placeholder="neutral" color="neutral" variant="bordered" />
        <Input v-model="model" placeholder="primary" color="primary" variant="bordered" />
        <Input v-model="model" placeholder="secondary" color="secondary" variant="bordered" />
        <Input v-model="model" placeholder="accent" color="accent" variant="bordered" />
        <Input v-model="model" placeholder="info" color="info" variant="bordered" />
        <Input v-model="model" placeholder="success" color="success" variant="bordered" />
        <Input v-model="model" placeholder="warning" color="warning" variant="bordered" />
        <Input v-model="model" placeholder="error" color="error" variant="bordered" />
      </div>
    </Variant>

    <Variant title="Disabled" id="disabled">
      <Input v-model="model" disabled placeholder="Disabled input" />
    </Variant>

    <Variant title="With Counter" id="with-counter">
      <Input v-model="model" counter :max-length="100" placeholder="Max 100 chars" />
    </Variant>

    <Variant title="Variant" id="variants">
      <div class="flex flex-col gap-2">
        <Input v-model="model" variant="bordered" placeholder="Bordered" />
        <Input v-model="model" variant="ghost" placeholder="Ghost" />
      </div>
    </Variant>

    <Variant title="Standalone with label + hint" id="standalone-label-hint">
      <Input
        v-model="model"
        label="Full name"
        hint="As it appears on your ID"
        variant="bordered"
        placeholder="John Doe"
      />
    </Variant>

    <Variant title="Inside FormField" id="inside-form-field">
      <Form v-model="formData">
        <FormField name="email" label="Email" hint="We'll never share it">
          <Input type="email" required placeholder="you@example.com" />
        </FormField>
      </Form>
    </Variant>

    <Variant title="Counter inherited from Form" id="counter-from-form">
      <!-- counter + counterFormat set on Form, no props on Input -->
      <Form v-model="formCounterData" counter>
        <FormField name="bio" label="Bio">
          <Input :max-length="200" placeholder="Tell us about yourself" />
        </FormField>
      </Form>
    </Variant>

    <Variant title="Counter overridden on FormField" id="counter-override-form-field">
      <!-- Form enables counter, FormField disables it for this specific field -->
      <Form v-model="formCounterData" counter>
        <FormField name="bio" label="Bio" :counter="false">
          <Input :max-length="200" placeholder="Counter disabled here" />
        </FormField>
      </Form>
    </Variant>

    <Variant title="Counter overridden on Input" id="counter-override-input">
      <!-- FormField has no counter opinion, Input re-enables it explicitly -->
      <Form v-model="formCounterData">
        <FormField name="bio" label="Bio">
          <Input counter :max-length="160" placeholder="Counter forced on input" />
        </FormField>
      </Form>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Input

## Description
Text input component built on the DaisyUI `input` element.
Works standalone with `v-model` or inside `<FormField />` for full form integration (validation, error display, counter cascade).

## API

### v-model

| Name         | Type               | Modifiers          | Description  |
|--------------|--------------------|--------------------|--------------|
| `modelValue` | `string \| number` | `.number`, `.trim` | Bound value. |

### Props
| Prop            | Type                    | Default               | Configurable       | Description                                        |
|-----------------|-------------------------|-----------------------|--------------------|----------------------------------------------------|
| `color`         | `InputColor`            | `undefined`           | :white_check_mark: | Color variant.                                     |
| `size`          | `InputSize`             | `'md'`                | :white_check_mark: | Size.                                              |
| `variant`       | `'bordered' \| 'ghost'` | `undefined`           | :white_check_mark: | Visual style variant.                              |
| `counter`       | `Booleanish`            | `false`               | :white_check_mark: | Shows character counter.                           |
| `minLength`     | `number`                | `undefined`           | :white_check_mark: | Min length (counter warning + native).             |
| `maxLength`     | `number`                | `undefined`           | :white_check_mark: | Max length (counter warning + native `maxlength`). |
| `counterFormat` | `string \| CounterFn`   | `'{current} / {max}'` | :white_check_mark: | Counter format.                                    |
| `type`          | `InputType`             | `'text'`              | :x:                | HTML input type.                                   |
| `defaultValue`  | `string \| number`      | `undefined`           | :x:                | Fallback when model is empty.                      |
| `label`         | `string`                | `undefined`           | :x:                | Inline label (standalone use).                     |
| `hint`          | `string`                | `undefined`           | :x:                | Hint text (standalone use).                        |
| `disabled`      | `boolean`               | `undefined`           | :x:                | Native disabled.                                   |
| `required`      | `boolean`               | `undefined`           | :x:                | Native required.                                   |
| `placeholder`   | `string`                | `undefined`           | :x:                | Placeholder text.                                  |
| `pattern`       | `string`                | `undefined`           | :x:                | Constraint validation pattern.                     |
| `title`         | `string`                | `undefined`           | :x:                | Pattern mismatch message.                          |

### Events

| Event    | Payload | Description                                                                          |
|----------|---------|--------------------------------------------------------------------------------------|
| `@input` | `Event` | Emitted on every keystroke (native input event).                                     |
| `@blur`  | `Event` | Emitted when the input loses focus. Triggers validation when inside `<FormField />`. |

### Slots

| Slot      | Scope                   | Description                            |
|-----------|-------------------------|----------------------------------------|
| `label`   | `-`                     | Top-left inline label (standalone).    |
| `hint`    | `-`                     | Bottom-left hint / error (standalone). |
| `counter` | `{ current, min, max }` | Bottom-right character count.          |

> **Configurable** props can be configured in the Poppy Plugin `install` function via the `Poppy` object. See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Note

### Counter cascade
Counter resolution order (first defined wins):
1. `counter` prop on `<Input />` itself
2. `counter` on `<FormField />`
3. `counter` on `<Form />`
4. Plugin config
5. Default: `false`

> **Configurable** props can be configured in the Poppy Plugin `install` function via the `Poppy` object. See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage
```vue
<!-- Standalone -->
<Input v-model="name" label="Name" variant="bordered" counter :max-length="100" />

<!-- Inside FormField -->
<FormField name="email" label="Email">
  <Input type="email" required />
</FormField>

<!-- Counter inherited from Form -->
<Form v-model="data" counter>
  <FormField name="bio">
    <Input :max-length="200" />
  </FormField>
</Form>
```
</docs>