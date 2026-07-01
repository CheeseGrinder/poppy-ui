<script setup lang="ts">
import { CheckIcon, XIcon } from '@lucide/vue'
import Step from './Step.vue'
import Steps from './Steps.vue'
</script>

<template>
  <Story group="components" title="Navigation/Steps" auto-props-disabled>
    <template #default>

      <Variant title="Default" id="default">
        <Steps>
          <Step color="primary">Register</Step>
          <Step color="primary">Choose plan</Step>
          <Step>Purchase</Step>
          <Step>Receive product</Step>
        </Steps>
      </Variant>

      <Variant title="With highlighted" id="with-highlighted">
        <Steps>
          <Step color="primary">Register</Step>
          <Step color="primary">Choose plan</Step>
          <Step color="primary" highlighted>Purchase</Step>
          <Step>Receive product</Step>
        </Steps>
      </Variant>

      <Variant title="Vertical" id="vertical">
        <Steps direction="vertical">
          <Step color="primary">Register</Step>
          <Step color="primary">Choose plan</Step>
          <Step color="primary" highlighted>Purchase</Step>
          <Step>Receive product</Step>
        </Steps>
      </Variant>

      <Variant title="Custom content" id="custom-content">
        <Steps>
          <Step color="success" content="✓">Paid</Step>
          <Step color="success" content="✓">Shipped</Step>
          <Step color="primary" content="★">Delivered</Step>
          <Step content="?">Review</Step>
        </Steps>
      </Variant>

      <Variant title="With icon" id="with-icon">
        <Steps>
          <Step color="success">
            <template #icon><CheckIcon class="size-4" /></template>
            Paid
          </Step>
          <Step color="success">
            <template #icon><CheckIcon class="size-4" /></template>
            Shipped
          </Step>
          <Step color="primary" highlighted>
            <template #icon><CheckIcon class="size-4" /></template>
            Delivered
          </Step>
          <Step>
            <template #icon><XIcon class="size-4" /></template>
            Review
          </Step>
        </Steps>
      </Variant>

      <Variant title="Colors" id="colors">
        <Steps>
          <Step color="primary">Primary</Step>
          <Step color="secondary">Secondary</Step>
          <Step color="accent">Accent</Step>
          <Step color="info">Info</Step>
          <Step color="success">Success</Step>
          <Step color="warning">Warning</Step>
          <Step color="error">Error</Step>
        </Steps>
      </Variant>

    </template>
  </Story>
</template>

<docs lang="md">
# Steps

## Description

Display a list of steps in a process, with support for active, highlighted (accessible), and custom indicator content.

## API

<details>
<summary>Steps</summary>

### Props

| Prop        | Type             | Default        | Required | Configurable       | Description                     |
|-------------|------------------|----------------|----------|--------------------|----------------------------------|
| `direction` | `StepsDirection` | `'horizontal'` | :x:      | :white_check_mark: | Layout direction of the steps.  |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.steps` option).

### Slots

| Slot      | Bindings | Description                          |
|-----------|----------|--------------------------------------|
| `default` | -        | Contains `<Step />` components.      |

</details>

<details>
<summary>Step</summary>

### Props

| Prop          | Type        | Default     | Required | Configurable       | Description                                                               |
|---------------|-------------|-------------|----------|--------------------|---------------------------------------------------------------------------|
| `color`       | `StepColor` | `undefined` | :x:      | :white_check_mark: | Color of the step indicator when active or done.                          |
| `highlighted` | `boolean`   | `false`     | :x:      | :x:                | Accessible but not yet completed. Shows `color` at reduced opacity.       |
| `content`     | `string`    | `undefined` | :x:      | :x:                | Custom content inside the indicator circle (e.g. `'✓'` or `'!'`).       |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.step` option).

### Slots

| Slot      | Bindings | Description                                                              |
|-----------|----------|--------------------------------------------------------------------------|
| `default` | -        | Step label displayed below the indicator.                                |
| `icon`    | -        | Custom icon rendered inside the indicator circle (replaces the counter). |

</details>

## Usage

```vue
<!-- Basic steps -->
<Steps>
  <Step color="primary">Register</Step>
  <Step color="primary">Choose plan</Step>
  <Step color="primary" highlighted>Purchase</Step>
  <Step>Receive product</Step>
</Steps>

<!-- Vertical -->
<Steps direction="vertical">
  <Step color="success" content="✓">Completed</Step>
  <Step color="primary" highlighted>In progress</Step>
  <Step>Pending</Step>
</Steps>

<!-- With icons -->
<Steps>
  <Step color="success">
    <template #icon><CheckIcon class="size-4" /></template>
    Done
  </Step>
  <Step color="primary" highlighted>
    <template #icon><LoaderIcon class="size-4" /></template>
    In progress
  </Step>
</Steps>
```
</docs>
