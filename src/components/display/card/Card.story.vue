<script lang="ts">
import Button from '@/components/actions/button/Button.vue'
import { reactive } from 'vue'
import Card from './Card.vue'
import CardActions from './CardActions.vue'
import CardBody from './CardBody.vue'
import CardTitle from './CardTitle.vue'
import type { CardProps } from './card.props'
</script>

<script setup lang="ts">
const state = reactive<CardProps>({
  variant: undefined,
  size: undefined,
  side: false,
  imageFull: false,
})
</script>

<template>
  <Story group="components" title="Display/Card" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Variant" v-model="state.variant" :options="[{ label: '-- default --', value: undefined }, 'border', 'dash']" />
          <HstSelect title="Size" v-model="state.size" :options="[{ label: '-- default --', value: undefined }, 'xs', 'sm', 'md', 'lg', 'xl']" />
          <HstCheckbox title="Side" v-model="(state.side as boolean)" />
          <HstCheckbox title="Image full" v-model="(state.imageFull as boolean)" />
        </template>

        <Card v-bind="state" class="w-80">
          <figure>
            <img src="https://picsum.photos/seed/card/400/200" alt="Card image" />
          </figure>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <p>A short description of the card content goes here.</p>
            <CardActions>
              <Button color="primary">Action</Button>
            </CardActions>
          </CardBody>
        </Card>
      </Variant>

      <Variant title="Variants">
        <div class="card-story card-story--row">
          <div class="card-story--item">
            <span class="card-story--label">default</span>
            <Card class="w-64">
              <CardBody>
                <CardTitle>Default</CardTitle>
                <p>No variant applied.</p>
              </CardBody>
            </Card>
          </div>
          <div class="card-story--item">
            <span class="card-story--label">border</span>
            <Card variant="border" class="w-64">
              <CardBody>
                <CardTitle>Border</CardTitle>
                <p>Solid border around the card.</p>
              </CardBody>
            </Card>
          </div>
          <div class="card-story--item">
            <span class="card-story--label">dash</span>
            <Card variant="dash" class="w-64">
              <CardBody>
                <CardTitle>Dash</CardTitle>
                <p>Dashed border around the card.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </Variant>

      <Variant title="Sizes">
        <div class="card-story card-story--col">
          <div v-for="size in (['xs', 'sm', 'md', 'lg', 'xl'])" :key="size" class="card-story--item">
            <span class="card-story--label">{{ size }}</span>
            <Card :size="size" variant="border" class="w-64">
              <CardBody>
                <CardTitle>Size {{ size }}</CardTitle>
                <p>Card with size <code>{{ size }}</code>.</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </Variant>

      <Variant title="Side">
        <Card side variant="border" class="w-96">
          <figure class="shrink-0">
            <img src="https://picsum.photos/seed/side/160/160" alt="Side image" class="h-full object-cover" />
          </figure>
          <CardBody>
            <CardTitle>Side layout</CardTitle>
            <p>Image and content are displayed side by side.</p>
            <CardActions>
              <Button color="primary" size="sm">Action</Button>
            </CardActions>
          </CardBody>
        </Card>
      </Variant>

      <Variant title="Image full">
        <Card image-full class="w-80">
          <figure>
            <img src="https://picsum.photos/seed/full/400/300" alt="Background image" />
          </figure>
          <CardBody>
            <CardTitle class="text-white">Image full</CardTitle>
            <p class="text-white/80">The image covers the full card background.</p>
            <CardActions>
              <Button color="primary" size="sm">Action</Button>
            </CardActions>
          </CardBody>
        </Card>
      </Variant>

      <Variant title="CardActions align">
        <div class="card-story card-story--col">
          <div v-for="align in (['start', 'center', 'end'])" :key="align" class="card-story--item">
            <span class="card-story--label">align: {{ align }}</span>
            <Card variant="border" class="w-80">
              <CardBody>
                <CardTitle>Actions {{ align }}</CardTitle>
                <p>CardActions with <code>align="{{ align }}"</code>.</p>
                <CardActions :align="align">
                  <Button color="primary" size="sm">Confirm</Button>
                  <Button variant="ghost" size="sm">Cancel</Button>
                </CardActions>
              </CardBody>
            </Card>
          </div>
        </div>
      </Variant>

      <Variant title="Composition">
        <div class="card-story card-story--row">
          <Card variant="border" class="w-72">
            <CardBody>
              <CardTitle>Text only</CardTitle>
              <p>A simple card with just text content and actions.</p>
              <CardActions>
                <Button color="primary" size="sm">Read more</Button>
              </CardActions>
            </CardBody>
          </Card>

          <Card class="w-72">
            <figure>
              <img src="https://picsum.photos/seed/comp1/400/200" alt="Card image" />
            </figure>
            <CardBody>
              <CardTitle>With image</CardTitle>
              <p>Card with an image on top.</p>
              <CardActions>
                <Button color="primary" size="sm">Buy</Button>
                <Button variant="ghost" size="sm">Details</Button>
              </CardActions>
            </CardBody>
          </Card>

          <Card variant="dash" class="w-72">
            <CardBody>
              <CardTitle>No actions</CardTitle>
              <p>A card without a CardActions section.</p>
            </CardBody>
          </Card>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.card-story {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card-story--row {
  align-items: flex-start;
}

.card-story--col {
  flex-direction: column;
}

.card-story--item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.card-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}
</style>

<docs lang="md">
# Card

## Description

A flexible content container built on DaisyUI's `card` class system.
Composed of four sub-components — `Card`, `CardBody`, `CardTitle`, and `CardActions` —
that can be combined freely to build any card layout.

## API

<details>
<summary>Card</summary>

### Props

| Prop        | Type          | Default     | Required | Configurable       | Description                                                |
|-------------|---------------|-------------|----------|--------------------|------------------------------------------------------------|
| `variant`   | `CardVariant` | `undefined` | :x:      | :white_check_mark: | Visual style of the card. `border` / `dash`.               |
| `size`      | `CardSize`    | `undefined` | :x:      | :white_check_mark: | Size of the card. `xs` / `sm` / `md` / `lg` / `xl`.        |
| `side`      | `Booleanish`  | `false`     | :x:      | :x:                | When `true`, switches to a horizontal side-by-side layout. |
| `imageFull` | `Booleanish`  | `false`     | :x:      | :x:                | When `true`, the image covers the full card background.    |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.card` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

</details>

<details>
<summary>CardActions</summary>

### Props

| Prop    | Type               | Default   | Required | Configurable       | Description                                                  |
|---------|--------------------|-----------|----------|--------------------|--------------------------------------------------------------|
| `align` | `CardActionsAlign` | `'start'` | :x:      | :white_check_mark: | Horizontal alignment of actions. `start` / `center` / `end`. |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.cardActions` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

</details>

<details>
<summary>CardBody</summary>

No props. Renders a `<div class="card-body" />` wrapper around its slot content.

</details>

<details>
<summary>CardTitle</summary>

No props. Renders an `<h2 class="card-title" />` around its slot content.

</details>

### Slots

| Slot      | Bindings | Description                        |
|-----------|----------|------------------------------------|
| `default` | -        | Content of the component.          |

All four components (`Card`, `CardBody`, `CardTitle`, `CardActions`) expose a single `default` slot for their content.

## Usage

```vue
<!-- Basic -->
<Card variant="border">
  <CardBody>
    <CardTitle>Hello</CardTitle>
    <p>Some content here.</p>
    <CardActions>
      <Button color="primary">Action</Button>
    </CardActions>
  </CardBody>
</Card>

<!-- With image -->
<Card>
  <figure>
    <img src="..." alt="..." />
  </figure>
  <CardBody>
    <CardTitle>With image</CardTitle>
    <p>Content below the image.</p>
  </CardBody>
</Card>

<!-- Side layout -->
<Card side>
  <figure><img src="..." alt="..." /></figure>
  <CardBody>
    <CardTitle>Side</CardTitle>
    <p>Image and content side by side.</p>
  </CardBody>
</Card>

<!-- Image full -->
<Card image-full>
  <figure><img src="..." alt="..." /></figure>
  <CardBody>
    <CardTitle class="text-white">Overlay</CardTitle>
    <p class="text-white/80">Text over the image.</p>
  </CardBody>
</Card>
```
</docs>