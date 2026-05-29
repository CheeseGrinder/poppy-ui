<script lang="ts">
import { logEvent } from 'histoire/client'
import { reactive, shallowRef, useTemplateRef } from 'vue'
import Accordion from './Accordion.vue'
import AccordionItem from './AccordionItem.vue'
import type { AccordionItemProps } from './accordion-item.props'
</script>

<script setup lang="ts">
const state = reactive<AccordionItemProps>({
  name: 'item-1',
  icon: 'arrow',
})

// Default
const defaultValue = shallowRef<string | null>(null)

// Multiple
const multipleValue = shallowRef<string[]>([])

// Controlled
const controlledValue = shallowRef<string | null>('item-1')

// Expose — Accordion
const accordionRef = useTemplateRef('accordion-expose')

// Expose — AccordionItem
const item1Ref = useTemplateRef('accordion-item-1')
const item2Ref = useTemplateRef('accordion-item-2')
</script>

<template>
  <Story group="components" title="Display/Accordion" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Icon" v-model="state.icon" :options="['arrow', 'plus']" />
        </template>

        <Accordion v-model="defaultValue">
          <AccordionItem v-bind="state" name="item-1">
            <template #title>Item 1</template>
            Content of item 1. Click the header to toggle.
          </AccordionItem>
          <AccordionItem v-bind="state" name="item-2">
            <template #title>Item 2</template>
            Content of item 2.
          </AccordionItem>
          <AccordionItem v-bind="state" name="item-3">
            <template #title>Item 3</template>
            Content of item 3.
          </AccordionItem>
        </Accordion>
      </Variant>

      <Variant title="Icons">
        <div class="accordion-story accordion-story--col">
          <div class="accordion-story--item">
            <span class="accordion-story--label">arrow (default)</span>
            <Accordion>
              <AccordionItem name="a" icon="arrow">
                <template #title>Arrow icon</template>
                The chevron rotates 180° when open.
              </AccordionItem>
            </Accordion>
          </div>
          <div class="accordion-story--item">
            <span class="accordion-story--label">plus</span>
            <Accordion>
              <AccordionItem name="a" icon="plus">
                <template #title>Plus icon</template>
                The plus rotates 45° (becoming a cross) when open.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Variant>

      <Variant title="Multiple">
        <Accordion v-model="multipleValue" :multiple="true">
          <AccordionItem name="item-1">
            <template #title>Item 1</template>
            Content of item 1.
          </AccordionItem>
          <AccordionItem name="item-2">
            <template #title>Item 2</template>
            Content of item 2.
          </AccordionItem>
          <AccordionItem name="item-3">
            <template #title>Item 3</template>
            Content of item 3.
          </AccordionItem>
        </Accordion>
      </Variant>

      <Variant title="Default open">
        <div class="accordion-story accordion-story--col">
          <div class="accordion-story--item">
            <span class="accordion-story--label">single — defaultOpen: 'item-2'</span>
            <Accordion default-open="item-2">
              <AccordionItem name="item-1">
                <template #title>Item 1</template>
                Content of item 1.
              </AccordionItem>
              <AccordionItem name="item-2">
                <template #title>Item 2 (open by default)</template>
                This item is open on first render.
              </AccordionItem>
              <AccordionItem name="item-3">
                <template #title>Item 3</template>
                Content of item 3.
              </AccordionItem>
            </Accordion>
          </div>
          <div class="accordion-story--item">
            <span class="accordion-story--label">multiple — defaultOpen: ['item-1', 'item-3']</span>
            <Accordion :multiple="true" :default-open="['item-1', 'item-3']">
              <AccordionItem name="item-1">
                <template #title>Item 1 (open by default)</template>
                Content of item 1.
              </AccordionItem>
              <AccordionItem name="item-2">
                <template #title>Item 2</template>
                Content of item 2.
              </AccordionItem>
              <AccordionItem name="item-3">
                <template #title>Item 3 (open by default)</template>
                Content of item 3.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Variant>

      <Variant title="Controlled">
        <div class="accordion-story accordion-story--col">
          <div class="accordion-story--actions">
            <span class="accordion-story--label">v-model: {{ controlledValue ?? 'null' }}</span>
            <div class="accordion-story--row">
              <button class="accordion-story--btn" @click="controlledValue = 'item-1'">Open item-1</button>
              <button class="accordion-story--btn" @click="controlledValue = 'item-2'">Open item-2</button>
              <button class="accordion-story--btn" @click="controlledValue = null">Close all</button>
            </div>
          </div>
          <Accordion v-model="controlledValue">
            <AccordionItem name="item-1">
              <template #title>Item 1</template>
              Content of item 1.
            </AccordionItem>
            <AccordionItem name="item-2">
              <template #title>Item 2</template>
              Content of item 2.
            </AccordionItem>
          </Accordion>
        </div>
      </Variant>

      <Variant title="Events — Accordion">
        <Accordion
          @change="logEvent('change', $event ? [$event] : [])"
          @open="logEvent('open', $event ? [$event] : [])"
          @close="logEvent('close', $event ? [$event] : [])"
          @toggle="logEvent('toggle', $event ? [$event] : [])"
        >
          <AccordionItem name="item-1">
            <template #title>Item 1</template>
            Content of item 1.
          </AccordionItem>
          <AccordionItem name="item-2">
            <template #title>Item 2</template>
            Content of item 2.
          </AccordionItem>
          <AccordionItem name="item-3">
            <template #title>Item 3</template>
            Content of item 3.
          </AccordionItem>
        </Accordion>
      </Variant>

      <Variant title="Events — AccordionItem">
        <Accordion>
          <AccordionItem
            name="item-1"
            @open="logEvent('open', $event)"
            @close="logEvent('close', $event)"
            @toggle="logEvent('toggle', $event)"
          >
            <template #title>Item 1 — watch the event log</template>
            Content of item 1.
          </AccordionItem>
          <AccordionItem
            name="item-2"
            @open="logEvent('open', $event)"
            @close="logEvent('close', $event)"
            @toggle="logEvent('toggle', $event)"
          >
            <template #title>Item 2 — watch the event log</template>
            Content of item 2.
          </AccordionItem>
        </Accordion>
      </Variant>

      <Variant title="Expose — Accordion">
        <div class="accordion-story accordion-story--col">
          <div class="accordion-story--actions">
            <div class="accordion-story--row">
              <button class="accordion-story--btn" @click="accordionRef?.open('item-1')">open('item-1')</button>
              <button class="accordion-story--btn" @click="accordionRef?.open('item-2')">open('item-2')</button>
              <button class="accordion-story--btn" @click="accordionRef?.open('item-3')">open('item-3')</button>
            </div>
            <div class="accordion-story--row">
              <button class="accordion-story--btn" @click="accordionRef?.close('item-1')">close('item-1')</button>
              <button class="accordion-story--btn" @click="accordionRef?.close('item-2')">close('item-2')</button>
              <button class="accordion-story--btn" @click="accordionRef?.close('item-3')">close('item-3')</button>
            </div>
            <div class="accordion-story--row">
              <button class="accordion-story--btn" @click="accordionRef?.toggle('item-1')">toggle('item-1')</button>
              <button class="accordion-story--btn" @click="accordionRef?.toggle('item-2')">toggle('item-2')</button>
              <button class="accordion-story--btn" @click="accordionRef?.toggle('item-3')">toggle('item-3')</button>
            </div>
            <div class="accordion-story--row">
              <button class="accordion-story--btn" @click="accordionRef?.openAll(['item-1', 'item-2', 'item-3'])">openAll()</button>
              <button class="accordion-story--btn" @click="accordionRef?.closeAll()">closeAll()</button>
            </div>
          </div>
          <Accordion ref="accordion-expose" :multiple="true">
            <AccordionItem name="item-1">
              <template #title>Item 1</template>
              Content of item 1.
            </AccordionItem>
            <AccordionItem name="item-2">
              <template #title>Item 2</template>
              Content of item 2.
            </AccordionItem>
            <AccordionItem name="item-3">
              <template #title>Item 3</template>
              Content of item 3.
            </AccordionItem>
          </Accordion>
        </div>
      </Variant>

      <Variant title="Expose — AccordionItem">
        <div class="accordion-story accordion-story--col">
          <div class="accordion-story--actions">
            <div class="accordion-story--row">
              <span class="accordion-story--label">item-1 — isOpen: {{ item1Ref?.isOpen }}</span>
            </div>
            <div class="accordion-story--row">
              <button class="accordion-story--btn" @click="item1Ref?.open()">item1.open()</button>
              <button class="accordion-story--btn" @click="item1Ref?.close()">item1.close()</button>
              <button class="accordion-story--btn" @click="item1Ref?.toggle()">item1.toggle()</button>
            </div>
            <div class="accordion-story--row">
              <button class="accordion-story--btn" @click="item2Ref?.open()">item2.open()</button>
              <button class="accordion-story--btn" @click="item2Ref?.close()">item2.close()</button>
              <button class="accordion-story--btn" @click="item2Ref?.toggle()">item2.toggle()</button>
            </div>
          </div>
          <Accordion>
            <AccordionItem ref="accordion-item-1" name="item-1">
              <template #title>Item 1</template>
              Content of item 1.
            </AccordionItem>
            <AccordionItem ref="accordion-item-2" name="item-2">
              <template #title>Item 2</template>
              Content of item 2.
            </AccordionItem>
          </Accordion>
        </div>
      </Variant>

      <Variant title="Custom icon slot">
        <Accordion>
          <AccordionItem name="item-1">
            <template #title>Custom icon</template>
            <template #icon="{ isOpen }">
              <span class="accordion-story--custom-icon">{{ isOpen ? '▲' : '▼' }}</span>
            </template>
            The icon slot exposes <code>isOpen</code> so you can render anything.
          </AccordionItem>
          <AccordionItem name="item-2">
            <template #title>Another item</template>
            <template #icon="{ isOpen }">
              <span class="accordion-story--custom-icon">{{ isOpen ? '▲' : '▼' }}</span>
            </template>
            Content of item 2.
          </AccordionItem>
        </Accordion>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.accordion-story {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.accordion-story--col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.accordion-story--item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.accordion-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}

.accordion-story--actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.accordion-story--row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.accordion-story--btn {
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  cursor: pointer;
  color: #374151;
}

.accordion-story--btn:hover {
  background: #f3f4f6;
}

.accordion-story--custom-icon {
  font-size: 0.75rem;
  opacity: 0.5;
}
</style>

<docs lang="md">
# Accordion

## Description

A vertically stacked set of collapsible sections. Each section is controlled by an `AccordionItem`
nested inside `Accordion`. Supports single and multiple open modes, controlled and uncontrolled usage,
animated transitions, and a customisable icon.

## Accordion props

| Prop          | Type                   | Default     | Required | Configurable | Description                                                                                    |
|---------------|------------------------|-------------|----------|--------------|------------------------------------------------------------------------------------------------|
| `multiple`    | `boolean`              | `false`     | ❌       | ❌          | When `true`, multiple items can be open at the same time.                                      |
| `defaultOpen` | `string` \| `string[]` | `undefined` | ❌       | ❌          | Item name(s) open on first render. Accepts a string in single mode, an array in multiple mode. |

## Accordion events

| Event     | Payload                                   | Description                                                       |
|-----------|-------------------------------------------|-------------------------------------------------------------------|
| `@change` | `string \| null` \| `string[]`            | Emitted on every state change with the new value.                 |
| `@open`   | `string` \| `string[]`                    | Emitted when an item opens. Payload is inferred from `multiple`.  |
| `@close`  | `string` \| `string[]`                    | Emitted when an item closes. Payload is inferred from `multiple`. |
| `@toggle` | `string` \| `string[]`, `isOpen: boolean` | Emitted on every toggle with the name and new state.              |

## Accordion exposed

| Method           | Signature                   | Description                                           |
|------------------|-----------------------------|------------------------------------------------------ |
| `open(name)`     | `(name: string) => void`    | Opens the item with the given name.                   |
| `close(name)`    | `(name: string) => void`    | Closes the item with the given name.                  |
| `toggle(name)`   | `(name: string) => void`    | Toggles the item with the given name.                 |
| `isOpen(name)`   | `(name: string) => boolean` | Returns `true` if the item is currently open.         |
| `openAll(names)` | `(names: string[]) => void` | Opens all given items. Only works in `multiple` mode. |
| `closeAll()`     | `() => void`                | Closes all items.                                     |

## AccordionItem props

| Prop   | Type                | Default   | Required | Configurable | Description                                                                    |
|--------|---------------------|-----------|----------|--------------|--------------------------------------------------------------------------------|
| `name` | `string`            | —         | ✅       | ❌          | Unique identifier within the parent `Accordion`. Used to track open state.     |
| `icon` | `AccordionItemIcon` | `'arrow'` | ❌       | ✅          | Icon shown in the header. `'arrow'` rotates on open, `'plus'` becomes a cross. |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.accordionItem` option). See [Plugin Configuration](#) for more information.

## AccordionItem events

| Event     | Payload          | Description                           |
|-----------|------------------|---------------------------------------|
| `@open`   | —                | Emitted when this item opens.         |
| `@close`  | —                | Emitted when this item closes.        |
| `@toggle` | `isOpen: boolean`| Emitted on toggle with the new state. |

## AccordionItem exposed

| Member     | Type         | Description                       |
|------------|------------- |-----------------------------------|
| `open()`   | `() => void` | Opens this item.                  |
| `close()`  | `() => void` | Closes this item.                 |
| `toggle()` | `() => void` | Toggles this item.                |
| `isOpen`   | `boolean`    | Reactive open state of this item. |

## AccordionItem slots

| Slot      | Bindings              | Description                                                                       |
|-----------|-----------------------|-----------------------------------------------------------------------------------|
| `title`   | `{ isOpen: boolean }` | Header content. Rendered inside the clickable trigger area.                       |
| `icon`    | `{ isOpen: boolean }` | Overrides the default icon. Use `isOpen` to render a custom open/close indicator. |
| `default` | `{ isOpen: boolean }` | Content revealed when the item is open.                                           |

## Usage

```vue
<!-- Basic single -->
<Accordion>
  <AccordionItem name="faq-1">
    <template #title>What is Poppy UI?</template>
    A Vue component library built on DaisyUI.
  </AccordionItem>
</Accordion>

<!-- Multiple open -->
<Accordion :multiple="true" @open="onOpen" @close="onClose">
  <AccordionItem name="a">
    <template #title>Section A</template>
    ...
  </AccordionItem>
  <AccordionItem name="b">
    <template #title>Section B</template>
    ...
  </AccordionItem>
</Accordion>

<!-- Programmatic control via Accordion ref -->
<Accordion ref="accordionRef" :multiple="true">
  <AccordionItem name="item-1">
    <template #title>Item 1</template>
    ...
  </AccordionItem>
  <AccordionItem name="item-2">
    <template #title>Item 2</template>
    ...
  </AccordionItem>
</Accordion>
<button @click="accordionRef?.openAll(['item-1', 'item-2'])">Open all</button>

<!-- Programmatic control via AccordionItem ref -->
<Accordion>
  <AccordionItem ref="itemRef" name="item-1" @toggle="onToggle">
    <template #title>Item 1</template>
    Content here.
  </AccordionItem>
</Accordion>
<button @click="itemRef?.open()">Open item</button>
```
</docs>