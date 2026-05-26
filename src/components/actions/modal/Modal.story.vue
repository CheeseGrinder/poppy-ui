<script lang="ts" setup>
import Button from '@/components/actions/button/Button.vue'
import { logEvent } from 'histoire/client'
import { reactive, shallowRef, useTemplateRef } from 'vue'
import Modal from './Modal.vue'
import type { ModalProps } from './modal.props'
import type { ModalPlacement } from './modal.types'

const state = reactive<ModalProps>({
  placement: undefined,
  closeOnBackdrop: false,
  loadContentWhenClose: false,
})

// Default
const defaultOpen = shallowRef(false)

// Placements
const placementOpen = reactive<Record<ModalPlacement, boolean>>({
  top: false,
  middle: false,
  bottom: false,
  start: false,
  end: false,
})

// Close on backdrop
const backdropOpen = shallowRef(false)

// Events
const eventsOpen = shallowRef(false)

// Expose
const modalExposeRef = useTemplateRef('modal-expose')
const exposeOpen = shallowRef(false)
</script>

<template>
  <Story title="Actions/Modal" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect
            title="Placement"
            v-model="state.placement"
            :options="[{ label: '-- default --', value: undefined }, 'top', 'middle', 'bottom', 'start', 'end']"
          />
          <HstCheckbox title="Close on backdrop" v-model="state.closeOnBackdrop" />
          <HstCheckbox title="Load content when close" v-model="state.loadContentWhenClose" />
        </template>

        <Button @click="defaultOpen = true">Open modal</Button>

        <Modal
          v-model="defaultOpen"
          v-bind="state"
          @close="logEvent('close', $event)"
        >
          <h3>Modal title</h3>
          <p>This is the modal content. You can put anything here.</p>
          <template #actions>
            <Button color="primary" @click="defaultOpen = false">Confirm</Button>
            <Button variant="ghost" @click="defaultOpen = false">Cancel</Button>
          </template>
        </Modal>
      </Variant>

      <Variant title="Placements">
        <div class="modal-story modal-story--placements">
          <div v-for="placement in (['top', 'middle', 'bottom', 'start', 'end'] as ModalPlacement[])" :key="placement">
            <Button @click="placementOpen[placement] = true">{{ placement }}</Button>
            <Modal v-model="placementOpen[placement]" :placement="placement">
              <h3>Placement: {{ placement }}</h3>
              <p>This modal is anchored to <strong>{{ placement }}</strong>.</p>
              <template #actions>
                <Button @click="placementOpen[placement] = false">Close</Button>
              </template>
            </Modal>
          </div>
        </div>
      </Variant>

      <Variant title="Close on backdrop">
        <Button @click="backdropOpen = true">Open — click outside to close</Button>
        <Modal v-model="backdropOpen" close-on-backdrop>
          <h3>Close on backdrop</h3>
          <p>Click outside the modal box to close it.</p>
          <template #actions>
            <Button @click="backdropOpen = false">Close</Button>
          </template>
        </Modal>
      </Variant>

      <Variant title="Events">
        <Button @click="eventsOpen = true">Open — watch the event log</Button>
        <Modal v-model="eventsOpen" close-on-backdrop @close="logEvent('close', $event)">
          <h3>Events demo</h3>
          <p>Close via the backdrop or the button below.</p>
          <template #actions>
            <Button @click="eventsOpen = false">Close</Button>
          </template>
        </Modal>
      </Variant>

      <Variant title="Expose — present / dismiss">
        <div class="modal-story modal-story--expose">
          <Modal ref="modal-expose" v-model="exposeOpen">
            <h3>Controlled externally</h3>
            <p>This modal was opened via <code>present()</code>.</p>
            <template #actions>
              <Button @click="modalExposeRef?.dismiss()">dismiss()</Button>
            </template>
          </Modal>
          <div class="modal-story--row">
            <Button variant="outline" size="sm" @click="modalExposeRef?.present()">present()</Button>
            <Button variant="outline" size="sm" @click="modalExposeRef?.dismiss()">dismiss()</Button>
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.modal-story {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.modal-story--placements {
  align-items: flex-start;
}

.modal-story--row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.modal-story--expose {
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.modal-story--lcwc {
  flex-direction: column;
  gap: 1rem;
}

.modal-story--lcwc-item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.modal-story--hint {
  font-size: 0.875rem;
  color: #6b7280;
  background: #f9fafb;
  border-left: 3px solid #d1d5db;
  padding: 0.6rem 0.875rem;
  border-radius: 0 4px 4px 0;
  max-width: 560px;
}

.modal-story--hint code {
  font-size: 0.8rem;
  background: #e5e7eb;
  padding: 1px 4px;
  border-radius: 3px;
}

.modal-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}
</style>

<docs lang="md">
# Modal

## Description

A dialog component built on the native `dialog` element with `showModal()` / `close()` lifecycle management.
Content is lazily rendered — it only mounts after the modal has been opened at least once, unless `loadContentWhenClose` is set.
Controlled via `v-model` or programmatically through exposed methods.

## Props

| Prop                   | Type             | Default     | Required | Configurable | Description                                                                                                      |
|------------------------|------------------|-------------|----------|--------------|------------------------------------------------------------------------------------------------------------------|
| `modelValue`           | `boolean`        | `false`     | ❌       | ❌          | Open state of the modal. Use `v-model` to bind reactively.                                                       |
| `placement`            | `ModalPlacement` | `undefined` | ❌       | ✅          | Position of the modal box on screen. `top` / `middle` / `bottom` / `start` / `end`.                              |
| `closeOnBackdrop`      | `Booleanish`     | `false`     | ❌       | ✅          | When `true`, clicking the backdrop closes the modal.                                                             |
| `loadContentWhenClose` | `Booleanish`     | `false`     | ❌       | ✅          | When `true`, content stays mounted while the modal is closed. Preserves internal component state between cycles. |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.modal` option). See [Plugin Configuration](#) for more information.

## Events

| Event    | Payload | Description                                           |
|----------|---------|-------------------------------------------------------|
| `@close` | —       | Emitted when the modal closes (native `close` event). |

## Slots

| Slot      | Description                                                                                |
|-----------|--------------------------------------------------------------------------------------------|
| `default` | Main content of the modal box.                                                             |
| `actions` | Rendered inside a `modal-action` wrapper at the bottom of the box. Only mounted when used. |

## Exposed

| Method      | Signature    | Description       |
|-------------|--------------|-------------------|
| `present()` | `() => void` | Opens the modal.  |
| `dismiss()` | `() => void` | Closes the modal. |

```vue
<Modal ref="modalRef">
  <p>Content</p>
  <template #actions>
    <Button @click="modalRef?.dismiss()">Close</Button>
  </template>
</Modal>

<Button @click="modalRef?.present()">Open</Button>
```

## Content rendering

By default the modal uses **lazy + persistent** rendering:
- Content is **not rendered** until the modal is opened for the first time.
- Once opened, the content **stays mounted** even after closing — preserving any internal state (scroll position, form values, counters, etc.).

Set `loadContentWhenClose="true"` to keep the content mounted **from the start**, even before the first open.

| `loadContentWhenClose` | First render  | After close   |
|------------------------|---------------|---------------|
| `false` (default)      | On first open | Stays mounted |
| `true`                 | Immediately   | Stays mounted |

## Usage

```vue
<!-- Basic -->
<Button @click="open = true">Open</Button>
<Modal v-model="open">
  <h3>Title</h3>
  <p>Content goes here.</p>
  <template #actions>
    <Button color="primary" @click="open = false">Confirm</Button>
    <Button variant="ghost" @click="open = false">Cancel</Button>
  </template>
</Modal>

<!-- Close on backdrop click -->
<Modal v-model="open" close-on-backdrop>...</Modal>

<!-- Top placement -->
<Modal v-model="open" placement="top">...</Modal>

<!-- Programmatic control -->
<Modal ref="modalRef">...</Modal>
<Button @click="modalRef?.present()">Open</Button>
```
</docs>