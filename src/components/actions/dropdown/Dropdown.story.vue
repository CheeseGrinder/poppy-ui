<script lang="ts" setup>
import Button from '@/components/actions/button/Button.vue'
import { logEvent } from 'histoire/client'
import { reactive, useTemplateRef } from 'vue'
import Dropdown from './Dropdown.vue'
import type { DropdownProps } from './dropdown.props'

const state = reactive<DropdownProps>({
  align: 'start' as const,
  side: 'bottom' as const,
  triggerAction: 'click' as const,
  debounce: 500,
  open: 'false',
})

const dropdownExposeRef = useTemplateRef('dropdown-expose')
</script>

<template>
  <Story title="Actions/Dropdown" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Align" v-model="state.align" :options="[{ label: '-- default --', value: undefined }, 'start', 'center', 'end']" />
          <HstSelect title="Side" v-model="state.side" :options="[{ label: '-- default --', value: undefined }, 'bottom', 'top', 'left', 'right']" />
          <HstSelect title="Trigger action" v-model="state.triggerAction" :options="[{ label: '-- default --', value: undefined }, 'click', 'hover', 'context-menu']" />
          <HstNumber title="Debounce (ms)" v-model="state.debounce" />
          <HstCheckbox title="Open" v-model="state.open" />
        </template>

        <template #source>
          <textarea v-pre>
            <Dropdown
              :align="state.align"
              :side="state.side"
              :trigger-action="state.triggerAction"
              :debounce="state.debounce"
              :open="state.open"
              @show="logEvent('show', $event)"
              @hide="logEvent('hide', $event)"
            >
              <template #trigger>
                Open menu
              </template>
              <ul>
                <li><a>Profile</a></li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </Dropdown>
          </textarea>
        </template>

        <Dropdown
          v-bind="state"
          @show="logEvent('show', $event)"
          @hide="logEvent('hide', $event)"
        >
          <template #trigger>
            Open menu
          </template>
          <ul>
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </Dropdown>
      </Variant>

      <Variant title="Sides">
        <div class="dropdown-story dropdown-story--sides">
          <Dropdown side="bottom">
            <template #trigger><Button>bottom</Button></template>
            <ul>
              <li><a>Item A</a></li>
              <li><a>Item B</a></li>
            </ul>
          </Dropdown>
          <Dropdown side="top">
            <template #trigger><Button>top</Button></template>
            <ul>
              <li><a>Item A</a></li>
              <li><a>Item B</a></li>
            </ul>
          </Dropdown>
          <Dropdown side="left">
            <template #trigger><Button>left</Button></template>
            <ul>
              <li><a>Item A</a></li>
              <li><a>Item B</a></li>
            </ul>
          </Dropdown>
          <Dropdown side="right">
            <template #trigger><Button>right</Button></template>
            <ul>
              <li><a>Item A</a></li>
              <li><a>Item B</a></li>
            </ul>
          </Dropdown>
        </div>
      </Variant>

      <Variant title="Align">
        <div class="dropdown-story dropdown-story--align">
          <Dropdown align="start">
            <template #trigger><Button>start</Button></template>
            <ul>
              <li><a>Item A</a></li>
              <li><a>Item B</a></li>
              <li><a>Item C</a></li>
            </ul>
          </Dropdown>
          <Dropdown align="center">
            <template #trigger><Button>center</Button></template>
            <ul>
              <li><a>Item A</a></li>
              <li><a>Item B</a></li>
              <li><a>Item C</a></li>
            </ul>
          </Dropdown>
          <Dropdown align="end">
            <template #trigger><Button>end</Button></template>
            <ul>
              <li><a>Item A</a></li>
              <li><a>Item B</a></li>
              <li><a>Item C</a></li>
            </ul>
          </Dropdown>
        </div>
      </Variant>

      <Variant title="Trigger actions">
        <div class="dropdown-story dropdown-story--triggers">
          <div class="dropdown-story--trigger-item">
            <span class="dropdown-story--label">click (default)</span>
            <Dropdown trigger-action="click">
              <template #trigger>Click me</template>
              <ul>
                <li><a>Item A</a></li>
                <li><a>Item B</a></li>
              </ul>
            </Dropdown>
          </div>
          <div class="dropdown-story--trigger-item">
            <span class="dropdown-story--label">hover</span>
            <Dropdown trigger-action="hover">
              <template #trigger>Hover me</template>
              <ul>
                <li><a>Item A</a></li>
                <li><a>Item B</a></li>
              </ul>
            </Dropdown>
          </div>
          <div class="dropdown-story--trigger-item">
            <span class="dropdown-story--label">context-menu</span>
            <Dropdown trigger-action="context-menu">
              <template #trigger>Right-click me</template>
              <ul>
                <li><a>Item A</a></li>
                <li><a>Item B</a></li>
              </ul>
            </Dropdown>
          </div>
        </div>
      </Variant>

      <Variant title="Events">
        <Dropdown
          @show="logEvent('show', $event)"
          @hide="logEvent('hide', $event)"
        >
          <template #trigger>
            Open — watch the event log
          </template>
          <ul>
            <li><a>Item A</a></li>
            <li><a>Item B</a></li>
          </ul>
        </Dropdown>
      </Variant>

      <Variant title="Expose — show / hide / toggle">
        <div class="dropdown-story dropdown-story--expose">
          <Dropdown ref="dropdown-expose">
            <template #trigger>
              Trigger (click)
            </template>
            <ul>
              <li><a>Item A</a></li>
              <li><a>Item B</a></li>
            </ul>
          </Dropdown>
          <div class="dropdown-story--expose-actions">
            <Button variant="outline" size="sm" @click="dropdownExposeRef?.show()">show()</Button>
            <Button variant="outline" size="sm" @click="dropdownExposeRef?.hide()">hide()</Button>
            <Button variant="outline" size="sm" @click="dropdownExposeRef?.toggle()">toggle()</Button>
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.dropdown-story {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.dropdown-story--sides,
.dropdown-story--align,
.dropdown-story--triggers {
  align-items: flex-start;
}

.dropdown-story--triggers {
  gap: 1.5rem;
}

.dropdown-story--trigger-item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.dropdown-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}

.dropdown-story--expose {
  align-items: center;
  gap: 1rem;
}

.dropdown-story--expose-actions {
  display: flex;
  gap: 0.5rem;
}
</style>

<docs lang="md">
# Dropdown

## Description

A floating content panel anchored to a trigger element.
Built on the native [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) — the content is teleported to `<body />` and positioned via CSS anchor positioning, so it always renders above other content without z-index management.

Supports `click`, `hover`, and `context-menu` trigger actions, configurable placement, and programmatic control via exposed methods.

## Props

| Prop            | Type                    | Default     | Required | Configurable  | Description                                                                                      |
|-----------------|------------------------ |-------------|----------|---------------|--------------------------------------------------------------------------------------------------|
| `align`         | `DropdownAlign`         | `'start'`   | ❌       | ✅           | Alignment of the content relative to the trigger. `start` / `center` / `end` (respects LTR/RTL). |
| `side`          | `DropdownSide`          | `'bottom'`  | ❌       | ✅           | Which side of the trigger the content appears on. `bottom` / `top` / `left` / `right`.           |
| `triggerAction` | `DropdownTriggerAction` | `'click'`   | ❌       | ✅           | Interaction that opens the dropdown. `click` / `hover` / `context-menu`.                         |
| `debounce`      | `number`                | `500`       | ❌       | ✅           | Delay in ms before closing on `triggerAction="hover"` after the pointer leaves.                  |
| `open`          | `Booleanish`            | `false`     | ❌       | ❌           | Forces the dropdown open. Accepts `boolean` or `'true'` / `'false'` strings.                     |
| `triggerClass`  | `ClassValue`            | `undefined` | ❌       | ❌           | CSS class(es) applied to the internal trigger `<button />` wrapper.                              |
| `contentClass`  | `ClassValue`            | `undefined` | ❌       | ❌           | CSS class(es) applied to the popover content element.                                            |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.dropdown` option). See [Plugin Configuration](#) for more information.

## Events

| Event   | Payload | Description                                          |
|---------|---------|------------------------------------------------------|
| `@show` | —       | Emitted before the dropdown content becomes visible. |
| `@hide` | —       | Emitted before the dropdown content is hidden.       |

## Slots

| Slot      | Description                                                              |
|-----------|--------------------------------------------------------------------------|
| `trigger` | The element that opens the dropdown. Rendered as a `<button />` wrapper. |
| `default` | The dropdown content (menu items, panels, forms, etc.).                  |

## Exposed

These methods are accessible via a template ref on the component instance.

| Method     | Signature             | Description                                  |
|------------|-----------------------|----------------------------------------------|
| `show()`   | `() => void`          | Opens the dropdown.                          |
| `hide()`   | `() => void`          | Closes the dropdown.                         |
| `toggle()` | `() => void`          | Opens if closed, closes if open.             |
| `$ref`     | `HTMLElement \| null` | Direct reference to the popover DOM element. |

```vue
<Dropdown ref="dropdownRef">
  <template #trigger>
    Open
  </template>
  <ul>...</ul>
</Dropdown>

<Button @click="dropdownRef?.toggle()">Toggle programmatically</Button>
```

## Trigger actions

| Value          | Behaviour                                                                                                                                                   |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `click`        | Opens/closes on left click. Keyboard accessible (`Enter`, `Space`, `Escape`).                                                                               |
| `hover`        | Opens on pointer enter, closes after `debounce` ms once the pointer leaves the trigger or content. A click while hovered locks it open until clicked again. |
| `context-menu` | Opens on right click (desktop) or long press (mobile). Prevents the native context menu.                                                                    |

## Usage

```vue
<!-- Basic click dropdown -->
<Dropdown>
  <template #trigger>
    Options
  </template>
  <ul>
    <li><a>Edit</a></li>
    <li><a>Delete</a></li>
  </ul>
</Dropdown>

<!-- Hover with custom debounce -->
<Dropdown trigger-action="hover" :debounce="200" side="right">
  <template #trigger>
    Hover me
  </template>
  <ul>...</ul>
</Dropdown>

<!-- Programmatic control -->
<Dropdown ref="menu">
  <template #trigger>Open</template>
  <ul>...</ul>
</Dropdown>
<Button @click="menu?.show()">Open externally</Button>
```
</docs>