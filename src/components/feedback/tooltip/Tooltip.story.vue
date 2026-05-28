<script lang="ts">
import Button from '@/components/actions/button/Button.vue'
import Tooltip from './Tooltip.vue'
import type { TooltipProps } from './tooltip.props'
</script>

<script lang="ts" setup>
import { reactive } from 'vue'

const state = reactive<TooltipProps>({
  tip: 'Hello, I am a tooltip!',
  placement: 'top',
  color: undefined,
  open: false,
  disabled: false,
  as: 'div',
})
</script>

<template>
  <Story title="Feedback/Tooltip" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstText title="Tip" v-model="state.tip" />
          <HstSelect title="Placement" v-model="state.placement" :options="['top', 'bottom', 'left', 'right']" />
          <HstSelect title="Color" v-model="state.color" :options="[undefined, 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']" />
          <HstSelect title="As" v-model="state.as" :options="['div', 'span', 'button']" />
          <HstCheckbox title="Open" v-model="state.open" />
          <HstCheckbox title="Disabled" v-model="state.disabled" />
        </template>

        <template #source>
          <textarea v-pre>
            <Tooltip tip="Hello, I am a tooltip!" placement="top">
              <Button>Hover me</Button>
            </Tooltip>
          </textarea>
        </template>

        <div class="tooltip-story tooltip-story--center">
          <Tooltip v-bind="state">
            <Button>Hover me</Button>
          </Tooltip>
        </div>
      </Variant>

      <Variant title="Placements">
        <div class="tooltip-story tooltip-story--placements">
          <div v-for="placement in (['top', 'bottom', 'left', 'right'])" :key="placement" class="tooltip-story--item">
            <span class="tooltip-story--label">{{ placement }}</span>
            <Tooltip :placement="placement" :tip="`Tooltip ${placement}`">
              <Button variant="outline" size="sm">{{ placement }}</Button>
            </Tooltip>
          </div>
        </div>
      </Variant>

      <Variant title="Colors">
        <div class="tooltip-story tooltip-story--placements">
          <div v-for="color in (['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'])" :key="color" class="tooltip-story--item">
            <Tooltip :color="color" :tip="color">
              <Button :color="color" size="sm">Hover</Button>
            </Tooltip>
            <span class="tooltip-story--label">{{ color }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Always open">
        <template #source>
          <textarea v-pre>
            <Tooltip tip="Always visible" :open="true">
              <Button>Trigger</Button>
            </Tooltip>
          </textarea>
        </template>

        <div class="tooltip-story tooltip-story--center">
          <Tooltip tip="Always visible" :open="true">
            <Button>Trigger</Button>
          </Tooltip>
        </div>
      </Variant>

      <Variant title="Disabled">
        <template #source>
          <textarea v-pre>
            <Tooltip tip="You won't see me" :disabled="true">
              <Button>Hover me — no tooltip</Button>
            </Tooltip>
          </textarea>
        </template>

        <div class="tooltip-story tooltip-story--center">
          <Tooltip tip="You won't see me" :disabled="true">
            <Button>Hover me — no tooltip</Button>
          </Tooltip>
        </div>
      </Variant>

      <Variant title="Content slot">
        <template #source>
          <textarea v-pre>
            <Tooltip color="primary">
              <template #content>
                <strong>Rich content</strong> with <em>HTML</em>
              </template>
              <Button>Hover for rich tooltip</Button>
            </Tooltip>
          </textarea>
        </template>

        <div class="tooltip-story tooltip-story--center">
          <Tooltip color="primary">
            <template #content>
              <strong>Rich content</strong> with <em>HTML</em>
            </template>
            <Button>Hover for rich tooltip</Button>
          </Tooltip>
        </div>
      </Variant>

      <Variant title="As prop">
        <template #source>
          <textarea v-pre>
            <!-- Wrap a span instead of a div -->
            <Tooltip tip="Wrapped in a span" as="span">
              <Badge color="primary">Hover me</Badge>
            </Tooltip>
          </textarea>
        </template>

        <div class="tooltip-story tooltip-story--placements">
          <div class="tooltip-story--item">
            <Tooltip tip="Wrapped in a div" as="div">
              <Button size="sm">Hover me</Button>
            </Tooltip>
            <span class="tooltip-story--label">as="div" (default)</span>
          </div>
          <div class="tooltip-story--item">
            <Tooltip tip="Wrapped in a span" as="span">
              <Button size="sm">Hover me</Button>
            </Tooltip>
            <span class="tooltip-story--label">as="span"</span>
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.tooltip-story {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.tooltip-story--center {
  justify-content: center;
  padding: 3rem;
}

.tooltip-story--row {
  align-items: flex-end;
}

.tooltip-story--placements {
  justify-content: center;
  padding: 3rem;
  gap: 2rem;
}

.tooltip-story--item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
}

.tooltip-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}
</style>

<docs lang="md">
# Tooltip

## Description

A floating label that appears on hover, anchored to a trigger element.
Built on the native Popover API with CSS anchor positioning — the tooltip is teleported to `<body />`
to avoid overflow/clipping issues regardless of the trigger's position in the DOM.

## Props

| Prop        | Type               | Default     | Required | Configurable | Description                                                                  |
|-------------|--------------------|-------------|----------|--------------|------------------------------------------------------------------------------|
| `tip`       | `string`           | `undefined` | ❌       | ❌          | Text content of the tooltip. Can be overridden by the `content` slot.        |
| `placement` | `TooltipPlacement` | `'top'`     | ❌       | ✅          | Placement relative to the anchor. `top` / `bottom` / `left` / `right`.       |
| `color`     | `TooltipColor`     | `undefined` | ❌       | ✅          | Color theme based on the DaisyUI palette.                                    |
| `as`        | `string`           | `'div'`     | ❌       | ✅          | HTML tag used to render the anchor wrapper. Use `'span'` for inline content. |
| `open`      | `boolean`          | `false`     | ❌       | ❌          | When `true`, the tooltip is always visible regardless of hover state.        |
| `disabled`  | `boolean`          | `false`     | ❌       | ❌          | When `true`, the tooltip is never shown.                                     |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.tooltip` option). See [Plugin Configuration](#) for more information.

## Slots

| Slot      | Description                                                                  |
|-----------|----------------------------------------------------------------------------- |
| `default` | The anchor element the tooltip is attached to.                               |
| `content` | Overrides `tip` with rich HTML content. Rendered inside the tooltip popover. |

## Usage

```vue
<!-- Basic -->
<Tooltip tip="Save your changes">
  <Button color="primary">Save</Button>
</Tooltip>

<!-- Placement -->
<Tooltip tip="On the right" placement="right">
  <Button>Hover me</Button>
</Tooltip>

<!-- With color -->
<Tooltip tip="Something went wrong" color="error">
  <Button color="error">Delete</Button>
</Tooltip>

<!-- Rich content slot -->
<Tooltip color="primary">
  <template #content>
    <strong>Pro tip</strong> — press <kbd>⌘S</kbd> to save
  </template>
  <Button>Hover for tip</Button>
</Tooltip>

<!-- Inline anchor -->
<Tooltip tip="User profile" as="span">
  <Badge color="primary">@john</Badge>
</Tooltip>

<!-- Always open -->
<Tooltip tip="Always visible" :open="true">
  <Button>Trigger</Button>
</Tooltip>
```
</docs>