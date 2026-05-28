<script lang="ts">
import Button from '@/components/actions/button/Button.vue'
import { reactive } from 'vue'
import Join from './Join.vue'
import JoinItem from './JoinItem.vue'
import type { JoinProps } from './join/join.props'
</script>

<script setup lang="ts">
const state = reactive<JoinProps>({
  direction: 'horizontal',
})
</script>

<template>
  <Story title="Layout/Join" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Direction" v-model="state.direction" :options="['horizontal', 'vertical']" />
        </template>

        <template #source>
          <textarea v-pre>
            <Join>
              <Button>First</Button>
              <Button>Second</Button>
              <Button>Third</Button>
            </Join>
          </textarea>
        </template>

        <Join v-bind="state">
          <Button>First</Button>
          <Button>Second</Button>
          <Button>Third</Button>
        </Join>
      </Variant>

      <Variant title="Horizontal">
        <template #source>
          <textarea v-pre>
            <Join direction="horizontal">
              <Button>Save</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Join>
          </textarea>
        </template>

        <Join direction="horizontal">
          <Button>Save</Button>
          <Button>Edit</Button>
          <Button>Delete</Button>
        </Join>
      </Variant>

      <Variant title="Vertical">
        <template #source>
          <textarea v-pre>
            <Join direction="vertical">
              <Button>Item 1</Button>
              <Button>Item 2</Button>
              <Button>Item 3</Button>
            </Join>
          </textarea>
        </template>

        <Join direction="vertical">
          <Button>Item 1</Button>
          <Button>Item 2</Button>
          <Button>Item 3</Button>
        </Join>
      </Variant>

      <Variant title="Composition">
        <template #source>
          <textarea v-pre>
            <div class="flex gap-4">
              <Join>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
              </Join>
              <Join direction="vertical">
                <Button color="accent">Top</Button>
                <Button color="info">Bottom</Button>
              </Join>
            </div>
          </textarea>
        </template>

        <div class="flex gap-4">
          <Join>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
          </Join>
          <Join direction="vertical">
            <Button color="accent">Top</Button>
            <Button color="info">Bottom</Button>
          </Join>
        </div>
      </Variant>

      <Variant title="With JoinItem">
        <template #source>
          <textarea v-pre>
            <Join>
              <JoinItem>
                <Button>Save</Button>
              </JoinItem>
              <JoinItem>
                <Button>Edit</Button>
              </JoinItem>
              <JoinItem>
                <Button>Delete</Button>
              </JoinItem>
            </Join>
          </textarea>
        </template>

        <Join>
          <JoinItem>
            <Button>Save</Button>
          </JoinItem>
          <JoinItem>
            <Button>Edit</Button>
          </JoinItem>
          <JoinItem>
            <Button>Delete</Button>
          </JoinItem>
        </Join>
      </Variant>

    </template>
  </Story>
</template>

<docs lang="md">
# Join

## Description

Groups items together side by side or in a column with joined borders.
Built on DaisyUI's `join` component. Use it to create button groups, segmented controls,
or any set of elements that should visually appear connected.

## Props

| Prop       | Type            | Default       | Required | Configurable | Description                                      |
|------------|-----------------|---------------|----------|--------------|--------------------------------------------------|
| `direction`| `JoinDirection` | `'horizontal'`| ❌       | ✅            | Layout direction: `'horizontal'` or `'vertical'`. |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.join` option). See [Plugin Configuration](#) for more information.

## Usage

```vue
<!-- Horizontal join (default) -->
<Join>
  <Button>First</Button>
  <Button>Second</Button>
  <Button>Third</Button>
</Join>

<!-- Vertical join -->
<Join direction="vertical">
  <Button>Top</Button>
  <Button>Bottom</Button>
</Join>

<!-- With custom content -->
<Join>
  <button class="btn">One</button>
  <button class="btn">Two</button>
  <button class="btn">Three</button>
</Join>
```
</docs>
