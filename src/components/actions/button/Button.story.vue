<script lang="ts">
import { logEvent } from 'histoire/client'
import { reactive } from 'vue'
import Button from './Button.vue'
import type { ButtonProps } from './button.props'
</script>

<script setup lang="ts">
const slots = reactive({
  content: 'Click Me !',
})
const state = reactive<ButtonProps>({
  type: 'button',
  color: undefined,
  shape: undefined,
  disabled: false,
  loading: false,
  size: 'md',
  variant: 'solid',
  behavior: undefined,
})
</script>

<template>
  <Story group="components" title="Actions/Button" auto-props-disabled>
    <template #default>
      <Variant title="Default">
        <template #controls>
          <HstText title="Content" v-model="slots.content" />
          <HstSelect title="Color" v-model="state.color" :options="[{ label: '-- default --', value: undefined }, 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']" />
          <HstSelect title="Variant" v-model="state.variant" :options="[{ label: '-- default --', value: undefined }, 'solid', 'outline', 'dash', 'soft', 'ghost', 'link']" />
          <HstSelect title="Behavior" v-model="state.behavior" :options="[{ label: '-- default --', value: undefined }, 'active', 'disabled']" />
          <HstSelect title="Size" v-model="state.size" :options="[{ label: '-- default --', value: undefined }, 'xs', 'sm', 'md', 'lg', 'xl']" />
          <HstSelect title="Shape" v-model="state.shape" :options="[{ label: '-- default --', value: undefined }, 'wide', 'block', 'square', 'circle']" />
          <HstCheckbox title="Loading" v-model="(state.loading as boolean)" />
          <HstCheckbox title="Disabled" v-model="state.disabled" />
        </template>

        <Button v-bind="state" @click="logEvent('click', $event)">{{ slots.content }}</Button>
      </Variant>
      
      <Variant title="Colors" >
        <div class="button-story button-story--colors">
          <Button @click="logEvent('click', $event)">default</Button>
          <Button color="neutral" @click="logEvent('click', $event)">neutral</Button>
          <Button color="primary" @click="logEvent('click', $event)">primary</Button>
          <Button color="secondary" @click="logEvent('click', $event)">secondary</Button>
          <Button color="accent" @click="logEvent('click', $event)">accent</Button>
          <Button color="info" @click="logEvent('click', $event)">info</Button>
          <Button color="success" @click="logEvent('click', $event)">success</Button>
          <Button color="warning" @click="logEvent('click', $event)">warning</Button>
          <Button color="error" @click="logEvent('click', $event)">error</Button>
        </div>
      </Variant>

      <Variant title="Sizes">
        <div class="button-story button-story--sizes">
            <Button size="xs" @click="logEvent('click', $event)">extra small</Button>
            <Button size="sm" @click="logEvent('click', $event)">small</Button>
            <Button size="md" @click="logEvent('click', $event)">medium</Button>
            <Button size="lg" @click="logEvent('click', $event)">large</Button>
            <Button size="xl" @click="logEvent('click', $event)">extra large</Button>
        </div>
      </Variant>

      <Variant title="Variants">
        <div class="button-story button-story--variants">
            <Button @click="logEvent('click', $event)">default</Button>
            <Button variant="solid" @click="logEvent('click', $event)">solid</Button>
            <Button variant="outline" @click="logEvent('click', $event)">outline</Button>
            <Button variant="dash" @click="logEvent('click', $event)">dash</Button>
            <Button variant="soft" @click="logEvent('click', $event)">soft</Button>
            <Button variant="ghost" @click="logEvent('click', $event)">ghost</Button>
            <Button variant="link" @click="logEvent('click', $event)">link</Button>
        </div>
      </Variant>

      <Variant title="Shapes">
        <div class="button-story button-story--shapes">
            <Button shape="wide" @click="logEvent('click', $event)">wide</Button>
            <Button shape="block" @click="logEvent('click', $event)">block</Button>
            <Button shape="square" @click="logEvent('click', $event)">square</Button>
            <Button shape="circle" @click="logEvent('click', $event)">circle</Button>
        </div>
      </Variant>

      <Variant title="Behaviors">
        <div class="button-story button-story--behaviors">
            <Button behavior="active" @click="logEvent('click', $event)">active</Button>
            <Button behavior="disabled" @click="logEvent('click', $event)">disabled</Button>
        </div>
      </Variant>
    </template>
  </Story>
</template>

<style scoped>
.button-story {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>

<docs lang="md">
# Button

## Description

A versatile button component built on top of DaisyUI's `btn` class system.
Supports all standard HTML button attributes, Vue Router navigation via `to`, configurable colors, variants, sizes and shapes.
When `to` is provided, the component renders as a `RouterLink` automatically.

## API

### Props

| Prop       | Type                              | Default     | Required | Configurable       | Description                                                                                                       |
|------------|-----------------------------------|-------------|----------|--------------------|-------------------------------------------------------------------------------------------------------------------|
| `type`     | `'button' \| 'submit' \| 'reset'` | `'button'`  | :x:      | :x:                | HTML type attribute for the button element.                                                                       |
| `color`    | `ButtonColor`                     | `undefined` | :x:      | :white_check_mark: | Color theme of the button based on the DaisyUI palette.                                                           |
| `variant`  | `ButtonVariant`                   | `'solid'`   | :x:      | :white_check_mark: | Visual style of the button.                                                                                       |
| `size`     | `ButtonSize`                      | `'md'`      | :x:      | :white_check_mark: | Size of the button.                                                                                               |
| `shape`    | `ButtonShape`                     | `undefined` | :x:      | :white_check_mark: | Shape or width constraint of the button.                                                                          |
| `behavior` | `ButtonBehavior`                  | `undefined` | :x:      | :x:                | Forces a specific visual state. Use `'disabled'` to apply disabled styling without the HTML `disabled` attribute. |
| `disabled` | `boolean`                         | `false`     | :x:      | :x:                | Disables interactions. Also sets `aria-disabled="true"` and `tabIndex="-1"` automatically.                        |
| `loading`  | `Booleanish`                      | `false`     | :x:      | :x:                | Displays a loading spinner and disables the button. Accepts `boolean` or `'true'` / `'false'` strings.            |
| `to`       | `RouteLocationRaw`                | `undefined` | :x:      | :x:                | If provided, the component renders as a `RouterLink`. Accepts a string path or a route location object.           |
| `form`     | `string`                          | `undefined` | :x:      | :x:                | ID of the form the button is associated with (native HTML attribute).                                             |

> **Configurable** props can be overridden at the application level via `BUTTON_CONFIG` using the `useComponentConfig` composable, enabling default theming without prop drilling.

> **Configurable**
> Props can be configured in the Poppy Plugin `install` function via the `Poppy` object. See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.


### Events

| Event    | Payload      | Description              |
|----------|--------------|--------------------------|
| `@click` | `MouseEvent` | Emitted on button click. |

### Slots

| Slot      | Bindings | Description                                                                                                        |
|-----------|----------|--------------------------------------------------------------------------------------------------------------------|
| `default` | -        | Main content of the button (text, icon, etc.).                                                                     |
| `loading` | -        | Overrides the default spinner shown when `loading` is `true`. Default: `<span class="loading loading-spinner" />`. |

## Note

### Automatic behavior

- **RouterLink rendering** — When `to` is provided, the root element switches from `<button />` to `<RouterLink />` automatically.
- **Accessibility** — When `behavior="disabled"` or `disabled=true`, the component automatically adds `disabled`, `aria-disabled="true"` and `tabIndex="-1"`.
- **Attribute inheritance** — Unrecognized HTML attributes (`$attrs`) are forwarded to the root element. The `class` attribute is merged manually to preserve internal class logic.

## Usage

```vue
<!-- Basic -->
<Button color="primary">Confirm</Button>

<!-- Loading state -->
<Button color="primary" :loading="isSubmitting" @click="submit">
  Submit
</Button>

<!-- Router navigation -->
<Button :to="{ name: 'home' }" variant="outline">
  Back to home
</Button>

<!-- Submit form -->
<Button type="submit" color="success" size="lg" shape="wide">
  Save
</Button>

<!-- Custom loading slot -->
<Button color="primary" :loading="true">
  <template #loading>
    <MySpinner />
  </template>
  Processing…
</Button>
```
</docs>