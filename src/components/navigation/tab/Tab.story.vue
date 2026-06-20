<script setup lang="ts">
import { Home, Settings, User } from '@lucide/vue'
import { ref } from 'vue'
import Tab from './Tab.vue'
import Tabs from './Tabs.vue'

const activeBottom = ref('tab1')
</script>

<template>
  <Story group="components" title="Navigation/Tab" auto-props-disabled>

    <Variant title="Border" id="border">
      <Tabs variant="border">
        <Tab value="tab1" title="Tab 1">
          <p>Content of Tab 1 — Lorem ipsum dolor sit amet.</p>
        </Tab>
        <Tab value="tab2" title="Tab 2">
          <p>Content of Tab 2 — Consectetur adipiscing elit.</p>
        </Tab>
        <Tab value="tab3" title="Tab 3">
          <p>Content of Tab 3 — Sed do eiusmod tempor.</p>
        </Tab>
      </Tabs>
    </Variant>

    <Variant title="Lift" id="lift">
      <Tabs variant="lift">
        <Tab value="tab1" title="Tab 1">
          <p>Content of Tab 1 — Lorem ipsum dolor sit amet.</p>
        </Tab>
        <Tab value="tab2" title="Tab 2">
          <p>Content of Tab 2 — Consectetur adipiscing elit.</p>
        </Tab>
        <Tab value="tab3" title="Tab 3">
          <p>Content of Tab 3 — Sed do eiusmod tempor.</p>
        </Tab>
      </Tabs>
    </Variant>

    <Variant title="Box" id="box">
      <Tabs variant="box">
        <Tab value="tab1" title="Tab 1">
          <p>Content of Tab 1 — Lorem ipsum dolor sit amet.</p>
        </Tab>
        <Tab value="tab2" title="Tab 2">
          <p>Content of Tab 2 — Consectetur adipiscing elit.</p>
        </Tab>
        <Tab value="tab3" title="Tab 3">
          <p>Content of Tab 3 — Sed do eiusmod tempor.</p>
        </Tab>
      </Tabs>
    </Variant>

    <Variant title="With icons" id="with-icons">
      <Tabs variant="lift">
        <Tab value="home" :icon="Home">
          <template #title>Home</template>
          <p>Welcome to the home page.</p>
        </Tab>
        <Tab value="profile" :icon="User">
          <template #title>Profile</template>
          <p>Manage your profile here.</p>
        </Tab>
        <Tab value="settings" :icon="Settings">
          <template #title>Settings</template>
          <p>Configure your settings here.</p>
        </Tab>
      </Tabs>
    </Variant>

    <Variant title="Bottom placement" id="bottom">
      <Tabs v-model="activeBottom" variant="border" placement="bottom">
        <Tab value="tab1" title="Tab 1">
          <p>Content of Tab 1.</p>
        </Tab>
        <Tab value="tab2" title="Tab 2">
          <p>Content of Tab 2.</p>
        </Tab>
        <Tab value="tab3" title="Tab 3">
          <p>Content of Tab 3.</p>
        </Tab>
      </Tabs>
    </Variant>

    <Variant title="Sizes" id="sizes">
      <div class="flex flex-col gap-4">
        <Tabs v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size" :size="size" variant="lift">
          <Tab value="a" :title="size" active>Active</Tab>
          <Tab value="b" title="Tab">Normal</Tab>
        </Tabs>
      </div>
    </Variant>

    <Variant title="Disabled" id="disabled">
      <Tabs variant="lift">
        <Tab value="a" title="Active" active>Content</Tab>
        <Tab value="b" title="Disabled" disabled>Hidden</Tab>
        <Tab value="c" title="Normal">Content</Tab>
      </Tabs>
    </Variant>

    <Variant title="Router mode" id="router">
      <template #source>
        <textarea v-pre>
          <Tabs variant="border">
            <Tab to="/home" title="Home" />
            <Tab to="/profile" title="Profile" />
            <Tab to="/settings" title="Settings" />
          </Tabs>
        </textarea>
      </template>
      <Tabs variant="border">
        <Tab to="#" title="Home" />
        <Tab to="#" title="Profile" />
        <Tab to="#" title="Settings" />
      </Tabs>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Tab

## Description

Tabs component for switching between views. Each `<Tab />` renders both the tab button and its content panel as adjacent elements — matching DaisyUI's structure.

Supports two modes:
- **Controlled mode** (`v-model`): First tab is active by default. Click switches tabs via JS.
- **Router mode** (`to` prop): Each `Tab` renders as a `RouterLink`. Content is provided by `<RouterView />`.

## API

### Tabs (container)

| Prop        | Type           | Default     | Configurable       | Description                                                           |
|-------------|----------------|-------------|--------------------|-----------------------------------------------------------------------|
| `v-model`   | `string`       | `undefined` | :x:                | Active tab value. When omitted, first tab with `active` prop is used. |
| `variant`   | `TabVariant`   | `undefined` | :white_check_mark: | Visual style: `'border'`, `'lift'`, `'box'`.                          |
| `size`      | `TabSize`      | `'md'`      | :white_check_mark: | Tab size.                                                             |
| `placement` | `TabPlacement` | `'top'`     | :white_check_mark: | Tabs position: `'top'`, `'bottom'`.                                   |

### Tab (item)

| Prop       | Type         | Default     | Description                                                     |
|------------|--------------|-------------|-----------------------------------------------------------------|
| `value`    | `string`     | `undefined` | Tab identifier — matches `v-model` on parent `<Tabs />`.        |
| `title`    | `string`     | `undefined` | Tab header label. Use `#title` slot for rich content.           |
| `active`   | `boolean`    | `false`     | Initial active state hint (ignored once context is set).        |
| `disabled` | `boolean`    | `false`     | Disables the tab.                                               |
| `icon`     | `Component`  | `undefined` | Icon displayed before the label.                                |
| `to`       | `string`     | `undefined` | Router target. Renders as `RouterLink`; no content panel shown. |

### Slots

| Slot      | Component | Description                                              |
|-----------|-----------|----------------------------------------------------------|
| `default` | `Tabs`    | `Tab` items.                                             |
| `default` | `Tab`     | Content panel shown when tab is active.                  |
| `title`   | `Tab`     | Tab header label (overrides `title` prop, rich content). |
| `icon`    | `Tab`     | Icon content (overrides `icon` prop).                    |

## Usage

```vue
<!-- Controlled mode (v-model) -->
<Tabs v-model="activeTab" variant="lift">
  <Tab value="home" title="Home">
    Home content here
  </Tab>
  <Tab value="profile">
    <template #title>Profile <span class="badge">New</span></template>
    Profile content here
  </Tab>
</Tabs>

<!-- Router mode -->
<Tabs variant="border">
  <Tab to="/home" title="Home" />
  <Tab to="/profile" title="Profile" />
</Tabs>
<RouterView />
```
</docs>