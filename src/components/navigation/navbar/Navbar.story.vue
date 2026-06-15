<script setup lang="ts">
import { Menu, MenuItem } from '@/components/navigation/public'
import Navbar from './Navbar.vue'
</script>

<template>
  <Story group="components" title="Navigation/Navbar" auto-props-disabled>

    <Variant title="Default">
      <template #source>
        <textarea v-pre>
          <Navbar>
            <div class="flex-1">
              <a class="btn btn-ghost text-xl">Brand</a>
            </div>
          </Navbar>
        </textarea>
      </template>
      <Navbar>
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Brand</a>
        </div>
      </Navbar>
    </Variant>

    <Variant title="With start/center/end">
      <template #source>
        <textarea v-pre>
          <Navbar>
            <div class="navbar-start">
              <a class="btn btn-ghost">Start</a>
            </div>
            <div class="navbar-center">
              <a class="btn btn-ghost text-xl">Center</a>
            </div>
            <div class="navbar-end">
              <a class="btn btn-ghost">End</a>
            </div>
          </Navbar>
        </textarea>
      </template>
      <Navbar>
        <div class="navbar-start">
          <a class="btn btn-ghost">Start</a>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost text-xl">Center</a>
        </div>
        <div class="navbar-end">
          <a class="btn btn-ghost">End</a>
        </div>
      </Navbar>
    </Variant>

    <Variant title="With Menu">
      <template #source>
        <textarea v-pre>
          <Navbar>
            <div class="flex-1">
              <a class="btn btn-ghost text-xl">Brand</a>
            </div>
            <div class="flex-none">
              <Menu direction="horizontal" class="px-1">
                <MenuItem to="#">Item 1</MenuItem>
                <MenuItem to="#">Item 2</MenuItem>
              </Menu>
            </div>
          </Navbar>
        </textarea>
      </template>
      <Navbar>
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Brand</a>
        </div>
        <div class="flex-none">
          <Menu direction="horizontal" class="px-1">
            <MenuItem to="#">Item 1</MenuItem>
            <MenuItem to="#">Item 2</MenuItem>
          </Menu>
        </div>
      </Navbar>
    </Variant>

    <Variant title="Primary variant">
      <template #source>
        <textarea v-pre>
          <Navbar variant="primary">
            <div class="flex-1">
              <a class="btn btn-ghost text-xl">Primary Navbar</a>
            </div>
          </Navbar>
        </textarea>
      </template>
      <Navbar variant="primary">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Primary Navbar</a>
        </div>
      </Navbar>
    </Variant>

    <Variant title="Neutral variant">
      <template #source>
        <textarea v-pre>
          <Navbar variant="neutral">
            <div class="flex-1">
              <a class="btn btn-ghost text-xl">Neutral Navbar</a>
            </div>
          </Navbar>
        </textarea>
      </template>
      <Navbar variant="neutral">
        <div class="flex-1">
          <a class="btn btn-ghost text-xl">Neutral Navbar</a>
        </div>
      </Navbar>
    </Variant>

  </Story>
</template>

<docs lang="md">
# Navbar

## Description

A responsive navigation bar component based on DaisyUI.

## API

### Slots

| Slot      | Description         |
|-----------|---------------------|
| `default` | Main navbar content |

## Usage

```vue
<Navbar>
  <div class="navbar-start">
    <a class="btn btn-ghost text-xl">Brand</a>
  </div>
  <div class="navbar-center">
    <Menu direction="horizontal">
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/about">About</MenuItem>
    </Menu>
  </div>
  <div class="navbar-end">
    <button class="btn btn-ghost">Button</button>
  </div>
</Navbar>
```
</docs>
