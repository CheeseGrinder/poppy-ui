<script lang="ts">
import FieldSet from '@/components/data/field-set/FieldSet.vue'
import Form from '@/components/data/form/Form.vue'
import FormField from '@/components/data/form-field/FormField.vue'
import Radio from '@/components/data/radio/Radio.vue'
import { reactive, ref } from 'vue'
import { createI18n } from 'vue-i18n'
import RadioGroup from './RadioGroup.vue'
import type { RadioGroupProps } from './radio-group.props'
</script>

<script setup lang="ts">
const model = ref<string | number | boolean>('free')

const state = reactive<RadioGroupProps>({})

const formData = ref<Record<string, unknown>>({ plan: '' })
</script>

<template>
  <Story group="components" title="Data/RadioGroup" auto-props-disabled :setup-app="({ app }) => {
    app.use(createI18n({}))
  }">

    <Variant title="Default" id="default">
      <template #controls>
        <HstText v-model="state.name" title="name" />
        <HstCheckbox v-model="(state.required as boolean)" title="required" />
      </template>

      <RadioGroup v-model="model" v-bind="state">
        <div class="flex flex-col gap-2">
          <Radio v-model="model" value="free" description="Free" />
          <Radio v-model="model" value="pro" description="Pro — 9€/month" />
          <Radio v-model="model" value="enterprise" description="Enterprise" />
        </div>
      </RadioGroup>
    </Variant>

    <Variant title="Required" id="required">
      <RadioGroup v-model="model" required>
        <div class="flex flex-col gap-2">
          <Radio v-model="model" value="free" description="Free" />
          <Radio v-model="model" value="pro" description="Pro" />
        </div>
      </RadioGroup>
    </Variant>

    <Variant title="With Hint" id="with-hint">
      <RadioGroup v-model="model">
        <div class="flex flex-col gap-2">
          <Radio v-model="model" value="free" description="Free" hint="Up to 3 projects, community support" />
          <Radio v-model="model" value="pro" color="primary" description="Pro — 9€/month" hint="Unlimited projects, priority support" />
          <Radio v-model="model" value="enterprise" color="secondary" description="Enterprise" hint="Custom pricing, dedicated support" />
        </div>
      </RadioGroup>
    </Variant>

    <Variant title="Inside FieldSet" id="inside-field-set">
      <FieldSet legend="Subscription plan" bordered>
        <RadioGroup v-model="model" class="mt-2">
          <div class="flex flex-col gap-2">
            <Radio v-model="model" value="free" description="Free" hint="Up to 3 projects" />
            <Radio v-model="model" value="pro" color="primary" description="Pro — 9€/month" hint="Unlimited projects" />
            <Radio v-model="model" value="enterprise" color="secondary" description="Enterprise" hint="Custom pricing" />
          </div>
        </RadioGroup>
      </FieldSet>
    </Variant>

    <Variant title="Inside FormField (use Radio directly instead)" id="use-in-form-field">
      <!-- Prefer placing <Radio> directly inside <FormField> instead of wrapping in <RadioGroup> -->
      <Form v-model="formData">
        <FormField name="plan" label="Plan">
          <div class="flex flex-col gap-2 mt-1">
            <Radio v-model="(formData.plan as string)" value="free" description="Free" required />
            <Radio v-model="(formData.plan as string)" value="pro" description="Pro — 9€/month" />
            <Radio v-model="(formData.plan as string)" value="enterprise" description="Enterprise" />
          </div>
        </FormField>
      </Form>
    </Variant>

    <Variant title="Inside FormField + RadioGroup (current: dev warning, see #136)" id="inside-form-field-current-warning">
      <!--
        Reference case for the ongoing Form API redesign (issue #136).
        Today, RadioGroup and FormField both try to resolve/own the field's
        value — nesting them like this logs a dev-mode console.warn (see
        RadioGroup.vue) and FormField's value silently wins. Once #136 lands
        (FormField becomes purely presentational, no longer resolves value),
        this combination should work without warning: RadioGroup would only
        share the native `name` + `required`, each Radio keeping its own
        explicit v-model. Open the browser console to see today's warning.
      -->
      <Form v-model="formData">
        <FormField name="plan" label="Plan">
          <RadioGroup v-model="model" class="mt-1">
            <div class="flex flex-col gap-2">
              <Radio value="free" description="Free" />
              <Radio value="pro" description="Pro — 9€/month" />
              <Radio value="enterprise" description="Enterprise" />
            </div>
          </RadioGroup>
        </FormField>
      </Form>
    </Variant>

    <Variant title="Colors" id="colors">
      <RadioGroup v-model="model">
        <div class="flex flex-col gap-2">
          <Radio v-model="model" value="neutral" color="neutral" description="Neutral" />
          <Radio v-model="model" value="primary" color="primary" description="Primary" />
          <Radio v-model="model" value="secondary" color="secondary" description="Secondary" />
          <Radio v-model="model" value="accent" color="accent" description="Accent" />
          <Radio v-model="model" value="info" color="info" description="Info" />
          <Radio v-model="model" value="success" color="success" description="Success" />
          <Radio v-model="model" value="warning" color="warning" description="Warning" />
          <Radio v-model="model" value="error" color="error" description="Error" />
        </div>
      </RadioGroup>
    </Variant>

  </Story>
</template>

<docs lang="md">
# RadioGroup

## Description

Standalone radio group that shares a `name` across all child `<Radio />` components — its own `v-model` is a convenience for standalone (non-FormField) usage, but each `<Radio />` always binds its own explicit `v-model` too (same target).
Use it when radio buttons live **outside** a `<FormField />`.
When your radios are inside a `<FormField />`, skip `<RadioGroup />` — FormField already provides the `name` automatically, and each `<Radio />` binds directly to the shared `Form` state.

## API

### v-model

| Name         | Type                          | Modifiers | Description                                          |
|--------------|-------------------------------|-----------|------------------------------------------------------|
| `modelValue` | `string \| number \| boolean` | -         | Currently selected value shared across child radios. |

### Props

| Prop       | Type      | Default     | Description                                                                |
|------------|-----------|-------------|----------------------------------------------------------------------------|
| `name`     | `string`  | auto        | Shared `name` for all child `<Radio />` inputs. Auto-generated when omitted. |
| `required` | `boolean` | `undefined` | Marks all radios in the group as required.                                 |

### Slots

| Slot      | Bindings | Description                 |
|-----------|----------|-----------------------------|
| `default` | -        | Child `<Radio />` elements. |

## Usage
```vue
<!-- Standalone group -->
<RadioGroup v-model="plan">
  <Radio v-model="plan" value="free" description="Free" />
  <Radio v-model="plan" value="pro" description="Pro — 9€/month" />
  <Radio v-model="plan" value="enterprise" description="Enterprise" />
</RadioGroup>

<!-- Inside a FieldSet for visual grouping -->
<FieldSet legend="Subscription" bordered>
  <RadioGroup v-model="plan">
    <Radio v-model="plan" value="free" description="Free" hint="Up to 3 projects" />
    <Radio v-model="plan" value="pro" color="primary" description="Pro" hint="Unlimited projects" />
  </RadioGroup>
</FieldSet>

<!-- Inside FormField — use Radio directly, no RadioGroup needed -->
<Form v-model="state">
  <FormField name="plan" label="Plan">
    <Radio v-model="state.plan" value="free" description="Free" required />
    <Radio v-model="state.plan" value="pro" description="Pro — 9€/month" />
  </FormField>
</Form>
```
</docs>
