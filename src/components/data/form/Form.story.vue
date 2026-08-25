<script lang="ts">
import Button from '@/components/actions/button/Button.vue'
import Alert from '@/components/feedback/alert/Alert.vue'
import { reactive, ref, shallowRef, useTemplateRef } from 'vue'
import { createI18n } from 'vue-i18n'
import Form from './Form.vue'
import type { FormProps } from './form.props'
import type { FormSerializer } from './form.types'
</script>

<script setup lang="ts">
const model = ref<Record<string, unknown>>({
  email: '',
  name: '',
  age: '',
  bio: '',
  agree: false,
})

const state = reactive<Omit<FormProps, 'serializer'>>({
  counter: false,
  counterFormat: '{current} / {max}',
})

const serverErrorModel = ref<Record<string, unknown>>({ email: '', password: '' })

const serializedOutput = shallowRef<string>('')

const serializer: FormSerializer = (data) => ({
  ...data,
  age: Number(data.age),
  submittedAt: new Date().toISOString(),
})

function onSubmit(data: Record<string, unknown>) {
  serializedOutput.value = JSON.stringify(data, null, 2)
}

const formErrorEl = useTemplateRef('form-error')
function onFormErrorSubmit() {
  formErrorEl.value?.setFieldError('$', 'Global Error')
}
</script>

<template>
  <Story group="components" title="Data/Form" auto-props-disabled :setup-app="({ app }) => {
    app.use(createI18n({}))
  }">
    <!-- ── Default / playground ─────────────────────────────────────────── -->
    <Variant title="Default" id="default">
      <template #controls>
        <HstCheckbox v-model="(state.counter as boolean)" title="counter" />
        <HstText v-model="(state.counterFormat as string)" title="counterFormat" />
      </template>

      <Form v-model="model" v-bind="state" @submit="onSubmit">
        <pre v-if="serializedOutput" class="text-xs bg-base-200 p-2 rounded mb-4">{{ serializedOutput }}</pre>
        <Button type="submit" class="btn btn-primary w-full mt-4">Submit</Button>
        <Button type="reset" class="btn btn-ghost w-full mt-2">Reset</Button>
      </Form>
    </Variant>

    <!-- ── With serializer ──────────────────────────────────────────────── -->
    <Variant title="With Serializer" id="serializer">
      <Form
        v-model="model"
        :serializer="serializer"
        @submit="onSubmit"
      >
        <pre v-if="serializedOutput" class="text-xs bg-base-200 p-2 rounded mb-4">{{ serializedOutput }}</pre>
        <Button type="submit" class="btn btn-primary mt-4">Submit (age coerced to number)</Button>
      </Form>
    </Variant>

    <!-- ── Global form error ─────────────────────────────────────────────── -->
    <Variant title="Global Error" id="global-error">
      <div id="top-error"></div>

      <Form ref="form-error" v-model="serverErrorModel" @submit="onFormErrorSubmit">
        <template #error="{ error }">
          <Teleport to="#top-error">
            <Alert color="error" class="mt-2">
              <span>{{ error }}</span>
            </Alert>
          </Teleport>
        </template>
        <Button type="submit" class="btn btn-primary mt-4">Submit</Button>
      </Form>
    </Variant>
  </Story>
</template>

<docs lang="md">
# Form

## Description

The `Form` component is the root of the form system.
It provides a `FormContext` to all descendant `FormField` and input components via Vue's `provide/inject`, used only for required/error/aria-invalid/touched-dirty/counter reporting — never for reading or writing field values.
Its `v-model` is the single shared, reactive data object: every leaf input (`Input`, `Select`, `Checkbox`, `Toggle`, `Textarea`, `Radio`, `Rating`, `Slider`) binds its own explicit `v-model` directly to a property of that same object, so `Form` never copies or writes through it — it only reads it for `reset()` / `submit()`.
It owns the errors record and all field state (dirty/touched/error), and handles programmatic validation, serialization, and emits `submit` / `reset` events.

`novalidate` is always set on the `<form />` element to suppress native browser popups. Validation is handled programmatically via the HTML5 Constraint Validation API.

> [!NOTE]
> `Form` and `FormField` are independent named exports. `Form.Field` is also available as a compound-component alias for `FormField` (`<Form.Field>` in templates), for consumers coming from libraries with that convention — both forms are equivalent.

> [!WARNING]
> The `v-model` value should be a plain data object (field name/path → value). Binding a whole composable's return value (e.g. one that also exposes `errors`, `hasError`, or other refs/computed alongside your data) is tolerated — nested refs/computed are unwrapped and circular references no longer crash the component — but isn't recommended: bind just the plain data object instead for clarity.

## API

### v-model

| Name         | Type                         | Modifiers | Description                      |
|--------------|------------------------------|-----------|----------------------------------|
| `modelValue` | `{ [key: string]: unknown }` | -         | The form data object (required). |

### Props

| Prop            | Type                 | Default               | Configurable | Description                                     |
|-----------------|----------------------|-----------------------|--------------|-------------------------------------------------|
| `counter`       | `boolean`            | `false`               | :x:          | Propagates counter display to all child inputs. |
| `counterFormat` | `string \| Function` | `'{current} / {max}'` | :x:          | Default counter format for all child inputs.    |
| `serializer`    | `FormSerializer`     | `undefined`           | :x:          | Transforms data before the `submit` event.      |

### Events

| Event    | Payload                      | Description                                          |
|----------|------------------------------|------------------------------------------------------|
| `submit` | `{ [key: string]: unknown }` | Fired after successful validation and serialization. |
| `reset`  | `undefined`                  | Fired when the form is reset.                        |

### Slots

| Slot      | Bindings                         | Description                                                |
|-----------|----------------------------------|------------------------------------------------------------|
| `default` | -                                | Form content undefined FormField components, buttons, etc. |
| `error`   | `{ error: string \| undefined }` | Global error rendering.                                    |

## Usage
```vue
<Form v-model="formData" :serializer="mySerializer" @submit="onSubmit">
  <FormField name="email" label="Email">
    <Input v-model="formData.email" type="email" required />
  </FormField>
  <button type="submit" class="btn btn-primary">Submit</button>
</Form>
```
</docs>