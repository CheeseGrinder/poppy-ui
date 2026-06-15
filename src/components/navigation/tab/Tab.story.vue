<script setup lang="ts">
import { Home, Settings, User } from '@lucide/vue'
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'
</script>

<template>
  <Story group="components" title="Data/Tab" auto-props-disabled>

    <Variant title="Default">
      <template #source>
        <textarea v-pre>
          <Tabs>
            <Tab active>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tabs>
        </textarea>
      </template>
      <Tabs>
        <Tab active>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
    </Variant>

    <Variant title="Lift variant">
      <template #source>
        <textarea v-pre>
          <Tabs variant="lift">
            <Tab active>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tabs>
        </textarea>
      </template>
      <Tabs variant="lift">
        <Tab active>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
    </Variant>

    <Variant title="Border variant">
      <template #source>
        <textarea v-pre>
          <Tabs variant="border">
            <Tab active>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tabs>
        </textarea>
      </template>
      <Tabs variant="border">
        <Tab active>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
    </Variant>

    <Variant title="Box variant">
      <template #source>
        <textarea v-pre>
          <Tabs variant="box">
            <Tab active>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tabs>
        </textarea>
      </template>
      <Tabs variant="box">
        <Tab active>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
    </Variant>

    <Variant title="With icons (slot)">
      <template #source>
        <textarea v-pre>
          <Tabs variant="lift">
            <Tab active>
              <template #icon>
                <Home :size="16" />
              </template>
              Home
            </Tab>
            <Tab>
              <template #icon>
                <User :size="16" />
              </template>
              Profile
            </Tab>
            <Tab>
              <template #icon>
                <Settings :size="16" />
              </template>
              Settings
            </Tab>
          </Tabs>
        </textarea>
      </template>
      <Tabs variant="lift">
        <Tab active>
          <template #icon>
            <Home :size="16" />
          </template>
          Home
        </Tab>
        <Tab>
          <template #icon>
            <User :size="16" />
          </template>
          Profile
        </Tab>
        <Tab>
          <template #icon>
            <Settings :size="16" />
          </template>
          Settings
        </Tab>
      </Tabs>
    </Variant>

    <Variant title="With icons (prop)">
      <template #source>
        <textarea v-pre>
          <Tabs variant="lift">
            <Tab :icon="Home" active>Home</Tab>
            <Tab :icon="User">Profile</Tab>
            <Tab :icon="Settings">Settings</Tab>
          </Tabs>
        </textarea>
      </template>
      <Tabs variant="lift">
        <Tab :icon="Home" active>Home</Tab>
        <Tab :icon="User">Profile</Tab>
        <Tab :icon="Settings">Settings</Tab>
      </Tabs>
    </Variant>

    <Variant title="Sizes">
      <div class="flex flex-col gap-4">
        <Tabs v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size" :size="size" variant="lift">
          <Tab active>{{ size }}</Tab>
          <Tab>{{ size }}</Tab>
        </Tabs>
      </div>
    </Variant>

    <Variant title="Disabled tabs">
      <template #source>
        <textarea v-pre>
          <Tabs variant="lift">
            <Tab active>Active</Tab>
            <Tab disabled>Disabled</Tab>
            <Tab>Normal</Tab>
          </Tabs>
        </textarea>
      </template>
      <Tabs variant="lift">
        <Tab active>Active</Tab>
        <Tab disabled>Disabled</Tab>
        <Tab>Normal</Tab>
      </Tabs>
    </Variant>

    <Variant title="Bottom placement">
      <template #source>
        <textarea v-pre>
          <Tabs variant="border" placement="bottom">
            <Tab active>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </Tabs>
        </textarea>
      </template>
      <Tabs variant="border" placement="bottom">
        <Tab active>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tabs>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Tab

## Description

Tabs component for displaying content in a tabbed interface based on DaisyUI.

## API

### Tabs (Container)

| Prop | Type | Default | Required | Configurable | Description |
|------|------|---------|----------|--------------|-------------|
| `variant` | `TabVariant` | `undefined` | :x: | :white_check_mark: | Visual variant (box, border, lift) |
| `size` | `TabSize` | `'md'` | :x: | :white_check_mark: | Size of tabs (xs, sm, md, lg, xl) |
| `placement` | `TabPlacement` | `'top'` | :x: | :white_check_mark: | Placement (top, bottom) |
| `class` | `string` | `undefined` | :x: | :x: | Additional CSS classes |

### Tab (Item)

| Prop | Type | Default | Required | Configurable | Description |
|------|------|---------|----------|--------------|-------------|
| `active` | `Booleanish` | `false` | :x: | :x: | Whether the tab is active |
| `disabled` | `Booleanish` | `false` | :x: | :x: | Whether the tab is disabled |
| `icon` | `Component` | `undefined` | :x: | :x: | Icon component to display before the label |
| `to` | `string` | `undefined` | :x: | :x: | Navigation target (renders as RouterLink) |

### Slots

| Slot | Description |
|------|-------------|
| `default` | Tab label content |
| `icon` | Icon to display before the label (overrides `icon` prop) |

### Slots

| Slot | Component | Description |
|------|-----------|-------------|
| `default` | Tabs | Tab items |
| `default` | Tab | Tab label content |

## Usage

```vue
<!-- Using slot -->
<Tabs variant="lift">
  <Tab active>
    <template #icon>
      <Home :size="16" />
    </template>
    Home
  </Tab>
  <Tab :icon="User">Profile</Tab>
</Tabs>

<!-- Using prop -->
<Tabs variant="lift">
  <Tab :icon="Home" active>Home</Tab>
  <Tab :icon="User">Profile</Tab>
</Tabs>
```

## Notes

- Tabs use native HTML/CSS where possible
- The `active` prop controls the visual state
- For routing, use the `to` prop to render as RouterLink
- Icons are displayed before the label text
</docs>
