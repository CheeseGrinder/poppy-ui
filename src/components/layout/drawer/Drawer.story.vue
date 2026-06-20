<script lang="ts">
import Button from '@/components/actions/button/Button.vue'
import { logEvent } from 'histoire/client'
import { reactive, shallowRef, useTemplateRef } from 'vue'
import Drawer from './Drawer.vue'
import type { DrawerProps } from './drawer.props'
</script>

<script setup lang="ts">
const state = reactive<DrawerProps>({
  side: 'start',
  overlay: true,
})

const drawerRef = useTemplateRef('drawer-ref')

const isOpen = shallowRef(false)
</script>

<template>
  <Story group="components" title="Layout/Drawer" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Side" v-model="state.side" :options="['start', 'end']" />
          <HstCheckbox title="Overlay" v-model="(state.overlay as boolean)" />
        </template>

        <template #source>
          <textarea v-pre>
            <Drawer v-model="isOpen">
              <Button @click="isOpen = true">Open drawer</Button>

              <template #sidebar>
                <div class="p-4 w-80 bg-base-100 h-full">
                  <h2 class="text-xl font-bold">Drawer content</h2>
                  <p>Some content here...</p>
                </div>
              </template>
            </Drawer>
          </textarea>
        </template>

        <div class="p-4">
          <Drawer v-model="isOpen" v-bind="state">
            <Button @click="isOpen = true">Open drawer</Button>

            <template #sidebar>
              <div class="p-4 w-80 bg-base-100 h-full">
                <h2 class="text-xl font-bold">Drawer content</h2>
                <p class="mt-4">This is the drawer sidebar content.</p>
                <Button class="mt-4" @click="isOpen = false">Close</Button>
              </div>
            </template>
          </Drawer>
        </div>
      </Variant>

      <Variant title="End side">
        <template #source>
          <textarea v-pre>
            <Drawer v-model="isOpen" side="end">
              <Button @click="isOpen = true">Open from end</Button>

              <template #sidebar>
                <div class="p-4 w-80 bg-base-100 h-full">
                  <p>Drawer opens from the right</p>
                </div>
              </template>
            </Drawer>
          </textarea>
        </template>

        <div class="p-4">
          <Drawer v-model="isOpen" side="end">
            <Button @click="isOpen = true">Open from end</Button>

            <template #sidebar>
              <div class="p-4 w-80 bg-base-100 h-full">
                <h2 class="text-xl font-bold">End Drawer</h2>
                <p class="mt-4">This drawer opens from the right side.</p>
              </div>
            </template>
          </Drawer>
        </div>
      </Variant>

      <Variant title="Without overlay">
        <template #source>
          <textarea v-pre>
            <Drawer v-model="isOpen" :overlay="false">
              <Button @click="isOpen = true">Open (no overlay)</Button>
              
              <template #sidebar>
                <div class="p-4 w-80 bg-base-100 h-full">
                  <p>No overlay to close</p>
                </div>
              </template>
            </Drawer>
          </textarea>
        </template>

        <div class="p-4">
          <Drawer v-model="isOpen" :overlay="false">
            <Button @click="isOpen = true">Open (no overlay)</Button>

            <template #sidebar>
              <div class="p-4 w-80 bg-base-100 h-full">
                <h2 class="text-xl font-bold">No Overlay</h2>
                <p class="mt-4">Click the button to close.</p>
                <Button class="mt-4" @click="isOpen = false">Close</Button>
              </div>
            </template>
          </Drawer>
        </div>
      </Variant>

      <Variant title="Nested Drawers">
        <template #source>
          <textarea v-pre>
            <Drawer v-model="isOpen1">
              <Button @click="isOpen1 = true">Open first</Button>
              
              <Drawer v-model="isOpen2">
                <Button @click="isOpen2 = true">Open second</Button>
                
                <template #sidebar>
                  <div class="p-4 w-80 bg-base-100 h-full">
                    <p>Second drawer (nested)</p>
                  </div>
                </template>
              </Drawer>
              
              <template #sidebar>
                <div class="p-4 w-80 bg-base-100 h-full">
                  <p>First drawer</p>
                </div>
              </template>
            </Drawer>
          </textarea>
        </template>

        <div class="p-4">
          <Drawer v-model="isOpen">
            <Button @click="isOpen = true">Open first</Button>

            <Drawer>
              <Button @click="isOpen = true">Open second</Button>

              <template #sidebar>
                <div class="p-4 w-80 bg-base-100 h-full">
                  <h2 class="text-xl font-bold">Nested Drawer</h2>
                  <p class="mt-4">This is a nested drawer with higher z-index.</p>
                </div>
              </template>
            </Drawer>

            <template #sidebar>
              <div class="p-4 w-80 bg-base-100 h-full">
                <h2 class="text-xl font-bold">First Drawer</h2>
                <p class="mt-4">Open the second drawer from here.</p>
              </div>
            </template>
          </Drawer>
        </div>
      </Variant>

      <Variant title="Events">
        <Drawer
          v-model="isOpen"
          @open="logEvent('open', $event)"
          @close="logEvent('close', $event)"
        >
          <Button @click="isOpen = true">Open — watch the event log</Button>

          <template #sidebar>
            <div class="p-4 w-80 bg-base-100 h-full">
              <h2 class="text-xl font-bold">Events</h2>
              <p class="mt-4">Check the event log for @open and @close.</p>
              <Button class="mt-4" @click="isOpen = false">Close</Button>
            </div>
          </template>
        </Drawer>
      </Variant>

      <Variant title="Expose — open / close">
        <template #source>
          <textarea v-pre>
            <Drawer ref="drawerRef">
              <Button @click="drawerRef?.open()">Open programmatically</Button>

              <template #sidebar>
                <div class="p-4 w-80 bg-base-100 h-full">
                  <Button @click="drawerRef?.close()">Close</Button>
                </div>
              </template>
            </Drawer>
          </textarea>
        </template>

        <Drawer ref="drawer-ref" v-model="isOpen">
          <div class="flex gap-2">
            <Button @click="drawerRef?.open()">open()</Button>
            <Button @click="drawerRef?.close()">close()</Button>
          </div>

          <template #sidebar>
            <div class="p-4 w-80 bg-base-100 h-full">
              <h2 class="text-xl font-bold">Programmatic control</h2>
              <p class="mt-4">Use the exposed methods to control the drawer.</p>
            </div>
          </template>
        </Drawer>
      </Variant>

    </template>
  </Story>
</template>

<docs lang="md">
# Drawer

## Description

A sidebar that can be toggled open or closed, typically used for mobile navigation menus.
Built on DaisyUI's `drawer` component. Supports nested drawers with automatic z-index management.

## Props

| Prop           | Type         | Default     | Required | Configurable       | Description                                     |
|----------------|--------------|-------------|----------|--------------------|-------------------------------------------------|
| `side`         | `DrawerSide` | `'start'`   | :x:      | :white_check_mark: | Side where drawer opens: `'start'` or `'end'`.  |
| `overlay`      | `boolean` | `true`      | :x:      | :white_check_mark: | When `true`, shows overlay to close the drawer. |
| `contentClass` | `ClassValue` | `undefined` | :x:      | :white_check_mark: | Additional classes for the drawer content.      |
| `sidebarClass` | `ClassValue` | `undefined` | :x:      | :white_check_mark: | Additional classes for the drawer sidebar.      |

## Events

| Event    | Payload | Description                     |
|----------|---------|---------------------------------|
| `@open`  | -       | Emitted when the drawer opens.  |
| `@close` | -       | Emitted when the drawer closes. |

## Slots

| Slot      | Description                                                               |
|-----------|---------------------------------------------------------------------------|
| `default` | Main content area. Receives `drawer-id`, `is-open`, `open`, `close`.      |
| `sidebar` | Drawer sidebar content. Receives `drawer-id`, `is-open`, `open`, `close`. |

## Exposed

These methods are accessible via a template ref on the component instance.

| Method    | Signature    | Description        |
|-----------|--------------|--------------------|
| `open()`  | `() => void` | Opens the drawer.  |
| `close()` | `() => void` | Closes the drawer. |

## Usage

```vue
<!-- Basic drawer -->
<Drawer v-model="isOpen">
  <Button @click="isOpen = true">Open drawer</Button>
  
  <template #sidebar>
    <div class="p-4 w-80 bg-base-100 h-full">
      <h2>Drawer content</h2>
    </div>
  </template>
</Drawer>

<!-- Drawer opening from end -->
<Drawer v-model="isOpen" side="end">
  <Button @click="isOpen = true">Open</Button>
  <template #sidebar>
    <div>Content</div>
  </template>
</Drawer>

<!-- With events -->
<Drawer
  v-model="isOpen"
  @open="console.log('opened')"
  @close="console.log('closed')"
/>

<!-- Without overlay -->
<Drawer v-model="isOpen" :overlay="false">
  <!-- User must provide their own close mechanism -->
</Drawer>

<!-- Programmatic control -->
const drawerRef = useTemplateRef('drawer')

drawerRef.value?.open()   // Open
drawerRef.value?.close()  // Close
```
</docs>
