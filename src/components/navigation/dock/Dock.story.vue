<script setup lang="ts">
import { HomeIcon, InboxIcon, SettingsIcon } from '@lucide/vue'
import Dock from './Dock.vue'
import DockItem from './DockItem.vue'
</script>

<template>
  <Story group="components" title="Navigation/Dock" auto-props-disabled>

    <Variant title="Default">
      <template #source>
        <textarea v-pre>
          <Dock>
            <DockItem :icon="HomeIcon" label="Home" to="/" />
            <DockItem :icon="InboxIcon" label="Inbox" to="/inbox" />
            <DockItem :icon="SettingsIcon" label="Settings" to="/settings" />
          </Dock>
        </textarea>
      </template>
      <Dock>
        <DockItem :icon="HomeIcon" label="Home" to="#" />
        <DockItem :icon="InboxIcon" label="Inbox" to="#" />
        <DockItem :icon="SettingsIcon" label="Settings" to="#" />
      </Dock>
    </Variant>

    <Variant title="Without labels">
      <template #source>
        <textarea v-pre>
          <Dock>
            <DockItem :icon="HomeIcon" to="/" />
            <DockItem :icon="InboxIcon" to="/inbox" />
            <DockItem :icon="SettingsIcon" to="/settings" />
          </Dock>
        </textarea>
      </template>
      <Dock>
        <DockItem :icon="HomeIcon" to="#" />
        <DockItem :icon="InboxIcon" to="#" />
        <DockItem :icon="SettingsIcon" to="#" />
      </Dock>
    </Variant>

    <Variant title="Without router (buttons)">
      <template #source>
        <textarea v-pre>
          <Dock>
            <DockItem :icon="HomeIcon" label="Home" />
            <DockItem :icon="InboxIcon" label="Inbox" />
            <DockItem :icon="SettingsIcon" label="Settings" />
          </Dock>
        </textarea>
      </template>
      <Dock>
        <DockItem :icon="HomeIcon" label="Home" />
        <DockItem :icon="InboxIcon" label="Inbox" />
        <DockItem :icon="SettingsIcon" label="Settings" />
      </Dock>
    </Variant>

    <Variant title="Sizes">
      <div class="flex flex-col gap-4 h-full">
        <div v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size" class="relative">
          <Dock :size="size" class="static">
            <DockItem :icon="HomeIcon" to="#" />
            <DockItem :icon="InboxIcon" to="#" />
            <DockItem :icon="SettingsIcon" to="#" />
          </Dock>
        </div>
      </div>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Dock

## Description
Bottom navigation bar fixed to the bottom of the screen.
Use `DockItem` for each navigation element.

> Add `<meta name="viewport" content="viewport-fit=cover" />` for iOS support.

## Dock Props
| Prop   | Type       | Default | Required | Configurable | Description      |
|--------|------------|---------|----------|--------------|------------------|
| `size` | `DockSize` | `'md'`  | ❌       | ✅          | Size of the dock |

## DockItem Props
| Prop    | Type               | Default     | Required | Configurable | Description                                           |
|---------|--------------------|-------------|----------|--------------|-------------------------------------------------------|
| `icon`  | `Component`        | —           | ✅       | ❌          | Icon component (e.g. Lucide icon)                     |
| `label` | `string`           | `undefined` | ❌       | ❌          | Text label displayed below the icon                   |
| `to`    | `RouteLocationRaw` | `undefined` | ❌       | ❌          | Vue Router location. Absent = renders as `<button />` |

## Notes
- The `active` state is automatically detected via `useLink` (Vue Router).
- Without `to`, the item renders as a native `<button />`.

## Usage
```vue
<Dock size="md">
  <DockItem :icon="HomeIcon" label="Home" to="/" />
  <DockItem :icon="InboxIcon" label="Inbox" to="/inbox" />
  <DockItem :icon="SettingsIcon" label="Settings" to="/settings" />
</Dock>
```
</docs>