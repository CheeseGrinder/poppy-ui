<script lang="ts">
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import Input from '@/components/data/input/Input.vue'
import Textarea from '@/components/data/textarea/Textarea.vue'
import { reactive, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import FieldSet from './FieldSet.vue'
import type { FieldSetProps } from './field-set.props'
</script>

<script setup lang="ts">
const state = reactive<FieldSetProps>({
  bordered: false,
  background: false,
})

const formData = ref<Record<string, unknown>>({ name: '', bio: '' })
</script>

<template>
  <Story group="components" title="Data/FieldSet" auto-props-disabled :setup-app="({ app }) => {
    app.use(createI18n({}))
  }">

    <Variant title="Default" id="default">
      <template #controls>
        <HstText v-model="state.legend" title="legend" />
        <HstCheckbox v-model="(state.bordered as boolean)" title="bordered" />
        <HstCheckbox v-model="(state.background as boolean)" title="background" />
      </template>

      <FieldSet v-bind="state" legend="Personal info">
        <p class="text-sm text-base-content/60">Fieldset content goes here.</p>
      </FieldSet>
    </Variant>

    <Variant title="Bordered" id="bordered">
      <FieldSet legend="Address" bordered>
        <p class="text-sm">Street, city, country…</p>
      </FieldSet>
    </Variant>

    <Variant title="Background" id="background">
      <FieldSet legend="Preferences" background>
        <p class="text-sm">Content on a tinted background.</p>
      </FieldSet>
    </Variant>

    <Variant title="Bordered + Background" id="bordered-background">
      <FieldSet legend="Settings" bordered background>
        <p class="text-sm">Both styles combined.</p>
      </FieldSet>
    </Variant>

    <Variant title="No Legend" id="no-legend">
      <FieldSet bordered>
        <p class="text-sm">A fieldset without a legend, just a border.</p>
      </FieldSet>
    </Variant>

    <Variant title="Header / Footer slots" id="header-footer-slots">
      <FieldSet legend="Advanced" bordered>
        <template #header>
          <p class="text-xs text-base-content/50 mb-2">
            These settings affect all users in your organisation.
          </p>
        </template>
        <p class="text-sm">Main content.</p>
        <template #footer>
          <p class="text-xs text-base-content/50 mt-2">
            Changes take effect immediately.
          </p>
        </template>
      </FieldSet>
    </Variant>

    <Variant title="Custom Legend slot" id="custom-legend-slot">
      <FieldSet bordered>
        <template #legend>
          <span class="flex items-center gap-1">
            🔒 <span>Security</span>
          </span>
        </template>
        <p class="text-sm">Custom legend content via slot.</p>
      </FieldSet>
    </Variant>

    <Variant title="Inside Form" id="inside-form">
      <Form v-model="formData">
        <FieldSet legend="Profile" bordered class="flex flex-col gap-3">
          <FormField name="name" label="Name">
            <Input placeholder="Your name" />
          </FormField>
          <FormField name="bio" label="Bio" hint="Short description about yourself">
            <Textarea placeholder="I am…" :rows="3" />
          </FormField>
        </FieldSet>
      </Form>
    </Variant>

  </Story>
</template>

<docs lang="md">
# FieldSet

## Description

Semantic `<fieldset />` wrapper with a legend and layout slots.
Designed to visually group related fields inside a `<Form />`.
Supports optional border, background, and header/footer slots for introductory and summary content.

## API

### Props

| Prop         | Type      | Default     | Description                                   |
|--------------|-----------|-------------|-----------------------------------------------|
| `legend`     | `string`  | `undefined` | Text displayed as the fieldset legend.        |
| `bordered`   | `boolean` | `false`     | Adds a visible border around the fieldset.    |
| `background` | `boolean` | `false`     | Adds a `base-200` background to the fieldset. |

### Slots

| Slot       | Bindings | Description                                               |
|------------|----------|-----------------------------------------------------------|
| `legend`   | -        | Custom legend content (replaces the `legend` prop text).  |
| `header`   | -        | Content rendered above the default slot.                  |
| `default`  | -        | Main fieldset content (form fields, text, etc.).          |
| `footer`   | -        | Content rendered below the default slot.                  |

## Usage
```vue
<!-- Simple -->
<FieldSet legend="Personal info" bordered>
  <FormField name="name" label="Name">
    <Input />
  </FormField>
</FieldSet>

<!-- With header and footer -->
<FieldSet legend="Advanced" bordered>
  <template #header>
    <p class="text-xs text-base-content/50">These settings affect all users.</p>
  </template>
  <FormField name="timeout" label="Session timeout">
    <Input type="number" />
  </FormField>
  <template #footer>
    <p class="text-xs text-base-content/50">Changes are applied immediately.</p>
  </template>
</FieldSet>

<!-- Custom legend slot -->
<FieldSet bordered>
  <template #legend>
    🔒 Security
  </template>
  …
</FieldSet>
```
</docs>
