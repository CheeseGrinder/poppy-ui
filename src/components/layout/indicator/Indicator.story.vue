<script lang="ts">
import Badge from '@/components/display/badge/Badge.vue'
import { reactive } from 'vue'
import Indicator from './Indicator.vue'
import type { IndicatorProps } from './indicator.props'
</script>

<script setup lang="ts">
const state = reactive<IndicatorProps>({
  side: 'end',
  align: undefined,
  hide: false,
})
</script>

<template>
  <Story group="components" title="Layout/Indicator" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Side" v-model="state.side" :options="['start', 'end', 'top', 'bottom']" />
          <HstSelect title="Align" v-model="state.align" :options="[{ label: '-- default --', value: undefined }, 'start', 'end', 'center', 'middle']" />
          <HstCheckbox title="Hide" v-model="(state.hide as boolean)" />
        </template>

        <template #source>
          <textarea v-pre>
            <Indicator side="end">
              <button class="btn">Button with indicator</button>
            </Indicator>
          </textarea>
        </template>

        <div class="p-4">
          <Indicator v-bind="state">
            <template #indicator>
              <Badge color="error" size="xs" class="badge-sm">5</Badge>
            </template>
            <button class="btn">Button with indicator</button>
          </Indicator>
        </div>
      </Variant>

      <Variant title="Sides">
        <div class="indicator-story p-4">
          <div v-for="side in ['start', 'end', 'top', 'bottom']" :key="side" class="indicator-story--item">
            <Indicator :side="side">
              <button class="btn w-40">{{ side }}</button>
              <template #indicator>
                <Badge color="primary" size="xs" class="badge-sm">!</Badge>
              </template>
            </Indicator>
            <span class="indicator-story--label">{{ side }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Alignment">
        <template #source>
          <textarea v-pre>
            <!-- End side with middle alignment -->
            <Indicator side="end" align="middle" item>
              <button class="btn w-40">End + Middle</button>
              <template #indicator>
                <Badge color="primary">5</Badge>
              </template>
            </Indicator>

            <!-- Top side with center alignment -->
            <Indicator side="top" align="center" item>
              <button class="btn w-40">Top + Center</button>
              <template #indicator>
                <Badge color="success">new</Badge>
              </template>
            </Indicator>
          </textarea>
        </template>

        <div class="flex gap-4 flex-wrap p-4">
          <Indicator side="end" align="middle" item>
            <button class="btn w-40">End + Middle</button>
            <template #indicator>
              <Badge color="primary">5</Badge>
            </template>
          </Indicator>
          <Indicator side="start" align="middle" item>
            <button class="btn w-40">Start + Middle</button>
            <template #indicator>
              <Badge color="warning">3</Badge>
            </template>
          </Indicator>
          <Indicator side="top" align="center" item>
            <button class="btn w-40">Top + Center</button>
            <template #indicator>
              <Badge color="success">new</Badge>
            </template>
          </Indicator>
          <Indicator side="bottom" align="center" item>
            <button class="btn w-40">Bottom + Center</button>
            <template #indicator>
              <Badge color="info">2</Badge>
            </template>
          </Indicator>
        </div>
      </Variant>

      <Variant title="With Badge">
        <template #source>
          <textarea v-pre>
            <Indicator side="end" item>
              <button class="btn">Messages</button>
              <template #indicator>
                <Badge color="error">5</Badge>
              </template>
            </Indicator>
          </textarea>
        </template>

        <div class="flex gap-4 flex-wrap p-4">
          <Indicator side="end">
            <button class="btn">Messages</button>
            <template #indicator>
              <Badge color="error">5</Badge>
            </template>
          </Indicator>
          <Indicator side="start">
            <button class="btn">Notifications</button>
            <template #indicator>
              <Badge color="warning">3</Badge>
            </template>
          </Indicator>
          <Indicator side="top">
            <button class="btn">Alerts</button>
            <template #indicator>
              <Badge color="success">1</Badge>
            </template>
          </Indicator>
          <Indicator side="bottom">
            <button class="btn">Updates</button>
            <template #indicator>
              <Badge color="info">2</Badge>
            </template>
          </Indicator>
        </div>
      </Variant>

      <Variant title="Composition">
        <template #source>
          <textarea v-pre>
            <div class="flex gap-4">
              <Indicator side="end" align="middle">
                <div class="w-16 h-16 bg-base-200 rounded-lg"></div>
                <template #indicator>
                  <Badge color="success" class="badge-sm">new</Badge>
                </template>
              </Indicator>
              <Indicator side="top" align="center">
                <div class="w-16 h-16 bg-base-200 rounded-lg"></div>
                <template #indicator>
                  <Badge color="warning" class="badge-sm">hot</Badge>
                </template>
              </Indicator>
            </div>
          </textarea>
        </template>

        <div class="flex gap-4 p-4">
          <Indicator side="end" align="middle">
            <div class="w-16 h-16 bg-base-200 rounded-lg"></div>
            <template #indicator>
              <Badge color="success" class="badge-sm">new</Badge>
            </template>
          </Indicator>
          <Indicator side="top" align="center">
            <div class="w-16 h-16 bg-base-200 rounded-lg"></div>
            <template #indicator>
              <Badge color="warning" class="badge-sm">hot</Badge>
            </template>
          </Indicator>
          <Indicator side="start" align="middle">
            <div class="w-16 h-16 bg-base-200 rounded-lg"></div>
            <template #indicator>
              <Badge color="error" class="badge-sm">urgent</Badge>
            </template>
          </Indicator>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.indicator-story {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
}

.indicator-story--item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.indicator-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}
</style>

<docs lang="md">
# Indicator

## Description

Wraps an element to add a small indicator (like a badge or notification dot) at various positions.
Built on DaisyUI's `indicator` component. Use it to add notification badges, status markers,
or any small visual indicator to elements.

The indicator content is automatically wrapped in a `span` with the `indicator-item` class.

## Props

| Prop   | Type             | Default     | Required | Configurable       | Description                                                              |
|--------|------------------|-------------|----------|--------------------|--------------------------------------------------------------------------|
| `side` | `IndicatorSide`  | `undefined` | :x:      | :white_check_mark: | Side where indicator is placed: `'start'`, `'end'`, `'top'`, `'bottom'`. |
| `align`| `IndicatorAlign` | `undefined` | :x:      | :white_check_mark: | Alignment along the side: `'start'`, `'end'`, `'center'`, `'middle'`.    |
| `hide` | `boolean`        | `false`     | :x:      | :x:                | When `true`, hides the indicator content.                                |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.indicator` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

## Usage

```vue
<!-- Basic indicator on end side -->
<Indicator side="end">
  <button class="btn">Messages</button>
  <template #indicator>
    <Badge color="error">5</Badge>
  </template>
</Indicator>

<!-- With alignment: centered vertically on end side -->
<Indicator side="end" align="middle">
  <button class="btn h-16">Settings</button>
  <template #indicator>
    <Badge color="primary">new</Badge>
  </template>
</Indicator>

<!-- Top side with center alignment -->
<Indicator side="top" align="center">
  <div class="w-32 h-16 bg-base-200 rounded-lg"></div>
  <template #indicator>
    <Badge color="success">new</Badge>
  </template>
</Indicator>
```
</docs>
