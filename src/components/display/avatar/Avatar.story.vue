<script lang="ts">
import { reactive } from 'vue'
import Avatar from './Avatar.vue'
import type { AvatarProps } from './avatar.props'

const IMGS = [
  'https://picsum.photos/seed/av1/192/192',
  'https://picsum.photos/seed/av2/192/192',
  'https://picsum.photos/seed/av3/192/192',
  'https://picsum.photos/seed/av4/192/192',
]
</script>

<script setup lang="ts">
const state = reactive<AvatarProps>({
  size: 'md',
  shape: 'rounded-full',
  presence: undefined,
  placeholder: false,
})
</script>

<template>
  <Story group="components" title="Display/Avatar" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Size"     v-model="state.size"     :options="['xs', 'sm', 'md', 'lg', 'xl']" />
          <HstSelect title="Shape"    v-model="state.shape"    :options="['rounded', 'rounded-full', 'rounded-xl', 'rounded-none']" />
          <HstSelect title="Presence" v-model="state.presence" :options="[{ label: '-- default --', value: undefined }, 'online', 'offline']" />
          <HstCheckbox title="Placeholder" v-model="(state.placeholder as boolean)" />
        </template>

        <template #source>
          <textarea v-pre>
            <Avatar size="md" shape="rounded-full">
              <img src="..." alt="Avatar" />
            </Avatar>
          </textarea>
        </template>

        <Avatar v-bind="state">
          <img v-if="!state.placeholder" :src="IMGS[0]" alt="Avatar" />
          <span v-else class="text-xl">JD</span>
        </Avatar>
      </Variant>

      <Variant title="Sizes">
        <template #source>
          <textarea v-pre>
            <Avatar size="xs" shape="rounded-full">
              <img src="..." alt="Avatar" />
            </Avatar>
            <Avatar size="sm" shape="rounded-full">
              <img src="..." alt="Avatar" />
            </Avatar>
            <Avatar size="md" shape="rounded-full">
              <img src="..." alt="Avatar" />
            </Avatar>
            <Avatar size="lg" shape="rounded-full">
              <img src="..." alt="Avatar" />
            </Avatar>
            <Avatar size="xl" shape="rounded-full">
              <img src="..." alt="Avatar" />
            </Avatar>
          </textarea>
        </template>

        <div class="avatar-story avatar-story--row" style="align-items: flex-end;">
          <div v-for="size in (['xs', 'sm', 'md', 'lg', 'xl'])" :key="size" class="avatar-story--item">
            <Avatar :size="size" shape="rounded-full">
              <img :src="IMGS[0]" alt="Avatar" />
            </Avatar>
            <span class="avatar-story--label">{{ size }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Shapes">
        <div class="avatar-story avatar-story--row">
          <div v-for="shape in (['rounded-none', 'rounded', 'rounded-xl', 'rounded-full'])" :key="shape" class="avatar-story--item">
            <Avatar size="md" :shape="shape">
              <img :src="IMGS[1]" alt="Avatar" />
            </Avatar>
            <span class="avatar-story--label">{{ shape }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Presence">
        <template #source>
          <textarea v-pre>
            <Avatar size="md" shape="rounded-full" presence="online">
              <img src="..." alt="Avatar" />
            </Avatar>
            <Avatar size="md" shape="rounded-full" presence="offline">
              <img src="..." alt="Avatar" />
            </Avatar>
          </textarea>
        </template>

        <div class="avatar-story avatar-story--row">
          <div class="avatar-story--item">
            <span class="avatar-story--label">online</span>
            <Avatar size="md" shape="rounded-full" presence="online">
              <img :src="IMGS[0]" alt="Avatar" />
            </Avatar>
          </div>
          <div class="avatar-story--item">
            <span class="avatar-story--label">offline</span>
            <Avatar size="md" shape="rounded-full" presence="offline">
              <img :src="IMGS[1]" alt="Avatar" />
            </Avatar>
          </div>
        </div>
      </Variant>

      <Variant title="Placeholder">
        <template #source>
          <textarea v-pre>
            <Avatar size="md" shape="rounded-full" :placeholder="true">
              <div class="bg-neutral text-neutral-content w-full h-full flex items-center justify-center">
                <span>JD</span>
              </div>
            </Avatar>
          </textarea>
        </template>

        <div class="avatar-story avatar-story--row" style="align-items: flex-end;">
          <div v-for="size in (['xs', 'sm', 'md', 'lg', 'xl'])" :key="size" class="avatar-story--item">
            <Avatar :size="size" shape="rounded-full" :placeholder="true">
              <div class="bg-neutral text-neutral-content w-full h-full flex items-center justify-center">
                <span>JD</span>
              </div>
            </Avatar>
            <span class="avatar-story--label">{{ size }}</span>
          </div>
        </div>
      </Variant>

      <Variant title="Group">
        <template #source>
          <textarea v-pre>
            <Avatar :group="true">
              <Avatar size="sm" shape="rounded-full">
                <img src="..." alt="Avatar" />
              </Avatar>
              <Avatar size="sm" shape="rounded-full">
                <img src="..." alt="Avatar" />
              </Avatar>
            </Avatar>
          </textarea>
        </template>

        <div class="avatar-story avatar-story--col">
          <div class="avatar-story--item-col">
            <span class="avatar-story--label">basic group</span>
            <Avatar :group="true">
              <Avatar v-for="(src, i) in IMGS" :key="i" size="sm" shape="rounded-full">
                <img :src="src" alt="Avatar" />
              </Avatar>
            </Avatar>
          </div>

          <div class="avatar-story--item-col">
            <span class="avatar-story--label">group with counter</span>
            <Avatar :group="true">
              <Avatar v-for="(src, i) in IMGS.slice(0, 3)" :key="i" size="sm" shape="rounded-full">
                <img :src="src" alt="Avatar" />
              </Avatar>
              <Avatar size="sm" shape="rounded-full" :placeholder="true">
                <div class="bg-neutral text-neutral-content w-full h-full flex items-center justify-center">
                  <span class="text-xs">+99</span>
                </div>
              </Avatar>
            </Avatar>
          </div>
        </div>
      </Variant>

      <Variant title="With ring">
        <template #source>
          <textarea v-pre>
            <Avatar size="md" shape="rounded-full">
              <div class="ring-primary ring-offset-base-100 w-full h-full rounded-full ring-2 ring-offset-2">
                <img src="..." alt="Avatar" />
              </div>
            </Avatar>
          </textarea>
        </template>

        <Avatar size="lg" shape="rounded-full">
          <div class="ring-primary ring-offset-base-100 w-full h-full rounded-full ring-2 ring-offset-2 overflow-hidden">
            <img :src="IMGS[2]" alt="Avatar" />
          </div>
        </Avatar>
      </Variant>

      <Variant title="With mask">
        <template #source>
          <textarea v-pre>
            <!-- Once the Mask component is available: -->
            <Avatar size="lg">
              <Mask shape="squircle">
                <img src="..." alt="Avatar" />
              </Mask>
            </Avatar>

            <!-- In the meantime, use Tailwind classes directly: -->
            <Avatar size="lg">
              <div class="mask mask-squircle w-full h-full">
                <img src="..." alt="Avatar" />
              </div>
            </Avatar>
          </textarea>
        </template>

        <div class="avatar-story avatar-story--row">
          <div v-for="mask in (['mask-squircle', 'mask-heart', 'mask-hexagon-2'])" :key="mask" class="avatar-story--item">
            <Avatar size="lg">
              <div :class="`mask ${mask} w-full h-full overflow-hidden`">
                <img :src="IMGS[0]" alt="Avatar" />
              </div>
            </Avatar>
            <span class="avatar-story--label">{{ mask }}</span>
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.avatar-story {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.avatar-story--row {
  align-items: center;
}

.avatar-story--col {
  flex-direction: column;
  gap: 1.25rem;
}

.avatar-story--item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
}

.avatar-story--item-col {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.avatar-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}
</style>

<docs lang="md">
# Avatar

## Description

A wrapper component to display user or entity representations.
Built on DaisyUI's `avatar` class system. `Avatar` is a pure wrapper — the content (image, initials, etc.)
is fully controlled via the `default` slot, making it compatible with any future `Mask` component.

## Props

| Prop          | Type            | Default         | Required | Configurable | Description                                                                                                |
|---------------|-----------------|-----------------|----------|--------------|------------------------------------------------------------------------------------------------------------|
| `size`        | `AvatarSize`    | `undefined`     | ❌       | ✅          | Size of the inner container. `xs` → `w-8` / `sm` → `w-16` / `md` → `w-20` / `lg` → `w-24` / `xl` → `w-32`. |
| `shape`       | `AvatarShape`   | `'rounded-full'`| ❌       | ✅          | Shape of the inner container. `rounded` / `rounded-xl` / `rounded-full` / `rounded-none`.                  |
| `presence`    | `AvatarPresence`| `undefined`     | ❌       | ✅          | Shows a presence dot. `'online'` (green) / `'offline'` (gray).                                             |
| `placeholder` | `Booleanish`    | `false`         | ❌       | ❌          | Adds `avatar-placeholder`. Use with text initials instead of an image.                                     |
| `group`       | `Booleanish`    | `false`         | ❌       | ❌          | Renders as `avatar-group` to stack multiple avatars with overlap.                                          |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.avatar` option). See [Plugin Configuration](#) for more information.

## Slots

| Slot      | Description                                                        |
|-----------|--------------------------------------------------------------------|
| `default` | Avatar content. In group mode, expects nested `Avatar` components. |

## Usage

```vue
<!-- Basic image -->
<Avatar size="md" shape="rounded-full">
  <img src="..." alt="John Doe" />
</Avatar>

<!-- With presence indicator -->
<Avatar size="md" shape="rounded-full" presence="online">
  <img src="..." alt="John Doe" />
</Avatar>

<!-- Placeholder with initials -->
<Avatar size="md" shape="rounded-full" :placeholder="true">
  <div class="bg-neutral text-neutral-content w-full h-full flex items-center justify-center">
    <span>JD</span>
  </div>
</Avatar>

<!-- Group -->
<Avatar group>
  <Avatar size="sm" shape="rounded-full">
    <img src="..." alt="User 1" />
  </Avatar>
  <Avatar size="sm" shape="rounded-full">
    <img src="..." alt="User 2" />
  </Avatar>
  <Avatar size="sm" shape="rounded-full" :placeholder="true">
    <div class="bg-neutral text-neutral-content w-full h-full flex items-center justify-center">
      <span class="text-xs">+5</span>
    </div>
  </Avatar>
</Avatar>

<Avatar size="lg">
  <Mask shape="squircle">
    <img src="..." alt="Avatar" />
  </Mask>
</Avatar>
```
</docs>