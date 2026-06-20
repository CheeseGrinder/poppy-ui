<script setup lang="ts">
import { BarChart, Home, Inbox, Info, Settings } from '@lucide/vue'
import Menu from './Menu.vue'
import MenuItem from './MenuItem.vue'
</script>

<template>
  <Story group="components" title="Navigation/Menu" auto-props-disabled>
 
    <Variant title="Default">
      <template #source>
        <textarea v-pre>
          <Menu class="bg-base-200 w-56">
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/inbox">Inbox</MenuItem>
            <MenuItem to="/settings">Settings</MenuItem>
          </Menu>
        </textarea>
      </template>
      <Menu class="bg-base-200 w-56">
        <MenuItem to="#">Home</MenuItem>
        <MenuItem to="#">Inbox</MenuItem>
        <MenuItem to="#">Settings</MenuItem>
      </Menu>
    </Variant>
 
    <Variant title="With icons">
      <template #source>
        <textarea v-pre>
          <Menu class="bg-base-200 w-56">
            <MenuItem :icon="Home" to="/">Home</MenuItem>
            <MenuItem :icon="Inbox" to="/inbox">Inbox</MenuItem>
            <MenuItem :icon="Settings" to="/settings">Settings</MenuItem>
          </Menu>
        </textarea>
      </template>
      <Menu class="bg-base-200 w-56">
        <MenuItem :icon="Home" to="#">Home</MenuItem>
        <MenuItem :icon="Inbox" to="#">Inbox</MenuItem>
        <MenuItem :icon="Settings" to="#">Settings</MenuItem>
      </Menu>
    </Variant>
 
    <Variant title="With title">
      <template #source>
        <textarea v-pre>
          <Menu class="bg-base-200 w-56">
            <MenuItem title>Navigation</MenuItem>
            <MenuItem :icon="Home" to="/">Home</MenuItem>
            <MenuItem :icon="Inbox" to="/inbox">Inbox</MenuItem>
            <MenuItem title>Account</MenuItem>
            <MenuItem :icon="Settings" to="/settings">Settings</MenuItem>
          </Menu>
        </textarea>
      </template>
      <Menu class="bg-base-200 w-56">
        <MenuItem title>Navigation</MenuItem>
        <MenuItem :icon="Home" to="#">Home</MenuItem>
        <MenuItem :icon="Inbox" to="#">Inbox</MenuItem>
        <MenuItem title>Account</MenuItem>
        <MenuItem :icon="Settings" to="#">Settings</MenuItem>
      </Menu>
    </Variant>
 
    <Variant title="With badge">
      <template #source>
        <textarea v-pre>
          <Menu class="bg-base-200 w-56">
            <MenuItem :icon="Home" to="/">Home</MenuItem>
            <MenuItem :icon="Inbox" to="/inbox">
              Inbox
              <template #badge>
                <span class="badge badge-xs badge-warning">99+</span>
              </template>
            </MenuItem>
            <MenuItem :icon="BarChart" to="/stats">
              Stats
              <template #badge>
                <span class="badge badge-xs badge-info" />
              </template>
            </MenuItem>
          </Menu>
        </textarea>
      </template>
      <Menu class="bg-base-200 w-56">
        <MenuItem :icon="Home" to="#">Home</MenuItem>
        <MenuItem :icon="Inbox" to="#">
          Inbox
          <template #badge>
            <span class="badge badge-xs badge-warning">99+</span>
          </template>
        </MenuItem>
        <MenuItem :icon="BarChart" to="#">
          Stats
          <template #badge>
            <span class="badge badge-xs badge-info" />
          </template>
        </MenuItem>
      </Menu>
    </Variant>
 
    <Variant title="With static submenu">
      <template #source>
        <textarea v-pre>
          <Menu class="bg-base-200 w-56">
            <MenuItem to="/">Home</MenuItem>
            <MenuItem to="/parent">
              Parent
              <template #submenu>
                <MenuItem to="/parent/sub-1">Submenu 1</MenuItem>
                <MenuItem to="/parent/sub-2">Submenu 2</MenuItem>
              </template>
            </MenuItem>
            <MenuItem to="/other">Other</MenuItem>
          </Menu>
        </textarea>
      </template>
      <Menu class="bg-base-200 w-56">
        <MenuItem to="#">Home</MenuItem>
        <MenuItem to="#">
          Parent
          <template #submenu>
            <MenuItem to="#">Submenu 1</MenuItem>
            <MenuItem to="#">Submenu 2</MenuItem>
          </template>
        </MenuItem>
        <MenuItem to="#">Other</MenuItem>
      </Menu>
    </Variant>
 
    <Variant title="With collapsible submenu">
      <template #source>
        <textarea v-pre>
          <Menu class="bg-base-200 w-56">
            <MenuItem to="/">Home</MenuItem>
            <MenuItem collapsible>
              Parent
              <template #submenu>
                <MenuItem to="/parent/sub-1">Submenu 1</MenuItem>
                <MenuItem to="/parent/sub-2">Submenu 2</MenuItem>
                <MenuItem collapsible>
                  Nested parent
                  <template #submenu>
                    <MenuItem to="/parent/sub-2/a">Submenu A</MenuItem>
                    <MenuItem to="/parent/sub-2/b">Submenu B</MenuItem>
                  </template>
                </MenuItem>
              </template>
            </MenuItem>
            <MenuItem to="/other">Other</MenuItem>
          </Menu>
        </textarea>
      </template>
      <Menu class="bg-base-200 w-56">
        <MenuItem to="#">Home</MenuItem>
        <MenuItem collapsible>
          Parent
          <template #submenu>
            <MenuItem to="#">Submenu 1</MenuItem>
            <MenuItem to="#">Submenu 2</MenuItem>
            <MenuItem collapsible>
              Nested parent
              <template #submenu>
                <MenuItem to="#">Submenu A</MenuItem>
                <MenuItem to="#">Submenu B</MenuItem>
              </template>
            </MenuItem>
          </template>
        </MenuItem>
        <MenuItem to="#">Other</MenuItem>
      </Menu>
    </Variant>
 
    <Variant title="With disabled items">
      <Menu class="bg-base-200 w-56">
        <MenuItem to="#">Enabled</MenuItem>
        <MenuItem disabled>Disabled</MenuItem>
        <MenuItem to="#">Enabled</MenuItem>
      </Menu>
    </Variant>
 
    <Variant title="Horizontal">
      <template #source>
        <textarea v-pre>
          <Menu direction="horizontal" class="bg-base-200">
            <MenuItem :icon="Home" to="/">Home</MenuItem>
            <MenuItem :icon="Inbox" to="/inbox">Inbox</MenuItem>
            <MenuItem :icon="Info" to="/about">About</MenuItem>
          </Menu>
        </textarea>
      </template>
      <Menu direction="horizontal" class="bg-base-200">
        <MenuItem :icon="Home" to="#">Home</MenuItem>
        <MenuItem :icon="Inbox" to="#">Inbox</MenuItem>
        <MenuItem :icon="Info" to="#">About</MenuItem>
      </Menu>
    </Variant>
 
    <Variant title="Sizes">
      <div class="flex flex-col gap-4">
        <Menu v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size" :size="size" class="bg-base-200 w-56">
          <MenuItem to="#">Item 1</MenuItem>
          <MenuItem to="#">Item 2</MenuItem>
        </Menu>
      </div>
    </Variant>
 
  </Story>
</template>

<docs lang="md">
# Menu

## Description

Displays a list of navigation links vertically or horizontally.
Supports icons, badges, titles, static submenus, and collapsible submenus.

## API

<details>
<summary>Menu</summary>

### Props

| Prop        | Type            | Default      | Required | Configurable       | Description           |
|-------------|-----------------|--------------|----------|--------------------|-----------------------|
| `size`      | `MenuSize`      | `'md'`       | :x:      | :white_check_mark: | Size of the menu      |
| `direction` | `MenuDirection` | `'vertical'` | :x:      | :white_check_mark: | Direction of the menu |

</details>

<details>
<summary>MenuItem</summary>

### Props

| Prop          | Type               | Default     | Required | Configurable | Description                                                            |
|---------------|--------------------|-------------|----------|--------------|------------------------------------------------------------------------|
| `icon`        | `Component`        | `undefined` | :x:      | :x:          | Icon component (e.g. Lucide icon)                                      |
| `to`          | `RouteLocationRaw` | `undefined` | :x:      | :x:          | Vue Router location. Absent = renders as `<a />`                       |
| `title`       | `boolean`       | `false`     | :x:      | :x:          | Renders the item as a non-interactive section title                    |
| `active`      | `boolean`       | `false`     | :x:      | :x:          | Forces the active state (auto-detected via `useLink` when `to` is set) |
| `disabled`    | `boolean`       | `false`     | :x:      | :x:          | Disables the item                                                      |
| `collapsible` | `boolean`       | `false`     | :x:      | :x:          | Wraps `submenu` slot in `<details />` when true                        |

### Slots

| Slot      | Bindings | Description                              |
|-----------|----------|------------------------------------------|
| `default` | -        | Item label                               |
| `badge`   | -        | Optional badge displayed after the label |
| `submenu` | -        | Nested `MenuItem` components             |

</details>

## Notes

- `active` state is automatically detected via `useLink` (Vue Router) when `to` is provided.
- Without `to`, the item renders as a plain `<a />` tag.
- `collapsible` only takes effect when the `submenu` slot is populated.
- `<details />` collapsible is CSS-only, no JS required.

## Usage
```vue
<Menu size="md">
  <MenuItem title>Navigation</MenuItem>
  <MenuItem :icon="Home" to="/">Home</MenuItem>
  <MenuItem :icon="Inbox" to="/inbox">
    Inbox
    <template #badge>
      <span class="badge badge-xs badge-warning">99+</span>
    </template>
  </MenuItem>
  <MenuItem collapsible>
    Settings
    <template #submenu>
      <MenuItem to="/settings/profile">Profile</MenuItem>
      <MenuItem to="/settings/security">Security</MenuItem>
    </template>
  </MenuItem>
</Menu>
```
</docs>