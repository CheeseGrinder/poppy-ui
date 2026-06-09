<script setup lang="ts">
import Button from '@/components/actions/button/Button.vue'
import { HeartIcon, PlayIcon } from '@lucide/vue'
import Status from '../status/Status.vue'
import List from './List.vue'
import ListItem from './ListItem.vue'
</script>

<template>
  <Story group="components" title="Display/List" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <List class="w-96 shadow-md" title="Most played songs this week">
          <ListItem title="Dio Lupa">
            <template #prefix>
              <img class="size-10 rounded-box" src="https://picsum.photos/seed/s1/94/94" alt="Avatar" />
            </template>
            <template #description>
              <span class="uppercase font-semibold">Remaining Reason</span>
            </template>
            <template #actions>
              <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
              <Button variant="ghost" shape="square" size="sm"><HeartIcon class="size-4" /></Button>
            </template>
          </ListItem>
          <ListItem title="Ellie Beilish">
            <template #prefix>
              <img class="size-10 rounded-box" src="https://picsum.photos/seed/s2/94/94" alt="Avatar" />
            </template>
            <template #description>
              <span class="uppercase font-semibold">Bears of a Fever</span>
            </template>
            <template #actions>
              <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
              <Button variant="ghost" shape="square" size="sm"><HeartIcon class="size-4" /></Button>
            </template>
          </ListItem>
          <ListItem title="Sabrino Gardener">
            <template #prefix>
              <img class="size-10 rounded-box" src="https://picsum.photos/seed/s3/94/94" alt="Avatar" />
            </template>
            <template #description>
              <span class="uppercase font-semibold">Cappuccino</span>
            </template>
            <template #actions>
              <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
              <Button variant="ghost" shape="square" size="sm"><HeartIcon class="size-4" /></Button>
            </template>
          </ListItem>
        </List>
      </Variant>

      <Variant title="list-col-grow">
        <div class="list-story--hint">
          With the new slot API, the title and description automatically grow to fill the remaining space.
          You don't need to manually use <code>list-col-grow</code> anymore!
        </div>
        <div class="list-story list-story--col">
          <div class="list-story--item">
            <List class="w-96 shadow-md">
              <ListItem title="Dio Lupa">
                <template #prefix>
                  <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
                  <img class="size-10 rounded-box" src="https://picsum.photos/seed/s1/94/94" alt="Avatar" />
                </template>
                <template #description>
                  <span class="uppercase font-semibold">Remaining Reason</span>
                </template>
                <template #actions>
                  <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
                </template>
              </ListItem>
              <ListItem title="Ellie Beilish">
                <template #prefix>
                  <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
                  <img class="size-10 rounded-box" src="https://picsum.photos/seed/s2/94/94" alt="Avatar" />
                </template>
                <template #description>
                  <span class="uppercase font-semibold">Bears of a Fever</span>
                </template>
                <template #actions>
                  <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
                </template>
              </ListItem>
            </List>
          </div>
        </div>
      </Variant>

      <Variant title="list-col-wrap (details)">
        <div class="list-story--hint">
          Use the <code>#details</code> slot to push extra content to the next line,
          spanning the full row width.
        </div>
        <List class="w-96 shadow-md" title="Most played songs this week">
          <ListItem title="Dio Lupa">
            <template #prefix>
              <div>
                <img class="size-10 rounded-box" src="https://picsum.photos/seed/s1/94/94" alt="Avatar" />
              </div>
            </template>
            <template #description>
              <span class="uppercase font-semibold">Remaining Reason</span>
            </template>
            <template #actions>
              <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
              <Button variant="ghost" shape="square" size="sm"><HeartIcon class="size-4" /></Button>
            </template>
            <template #details>
              An instant hit praised for its haunting sound and emotional depth.
              A viral performance brought it widespread recognition.
            </template>
          </ListItem>
          <ListItem title="Ellie Beilish">
            <template #prefix>
              <img class="size-10 rounded-box" src="https://picsum.photos/seed/s2/94/94" alt="Avatar" />
            </template>
            <template #description>
              <span class="uppercase font-semibold">Bears of a Fever</span>
            </template>
            <template #actions>
              <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
              <Button variant="ghost" shape="square" size="sm"><HeartIcon class="size-4" /></Button>
            </template>
            <template #details>
              Captivated audiences with its intense energy and mysterious lyrics.
              Popularity skyrocketed after fans shared it widely online.
            </template>
          </ListItem>
        </List>
      </Variant>

      <Variant title="RouterLink (to)">
        <template #source>
          <textarea v-pre>
            <List class="w-96 shadow-md" title="Browse albums">
              <ListItem to="#" title="Dio Lupa">
                <template #prefix>
                  <img class="size-10 rounded-box" src="https://picsum.photos/seed/s1/94/94" alt="Avatar" />
                </template>
                <template #description>
                  <span class="uppercase font-semibold">Remaining Reason</span>
                </template>
              </ListItem>
              <ListItem to="#" title="Ellie Beilish">
                <template #prefix>
                  <img class="size-10 rounded-box" src="https://picsum.photos/seed/s2/94/94" alt="Avatar" />
                </template>
                <template #description>
                  <span class="uppercase font-semibold">Bears of a Fever</span>
                </template>
              </ListItem>
              <ListItem to="#" title="Sabrino Gardener">
                <template #prefix>
                  <img class="size-10 rounded-box" src="https://picsum.photos/seed/s3/94/94" alt="Avatar" />
                </template>
                <template #description>
                  <span class="uppercase font-semibold">Cappuccino</span>
                </template>
              </ListItem>
            </List>
          </textarea>
        </template>

        <div class="list-story--hint">
          When <code>to</code> is provided, <code>ListItem</code> renders as a <code>RouterLink</code>.
          The row becomes a navigable element.
        </div>
        <List class="w-96 shadow-md" title="Browse albums">
          <ListItem to="#" title="Dio Lupa">
            <template #prefix>
              <img class="size-10 rounded-box" src="https://picsum.photos/seed/s1/94/94" alt="Avatar" />
            </template>
            <template #description>
              <span class="uppercase font-semibold">Remaining Reason</span>
            </template>
          </ListItem>
          <ListItem to="#" title="Ellie Beilish">
            <template #prefix>
              <img class="size-10 rounded-box" src="https://picsum.photos/seed/s2/94/94" alt="Avatar" />
            </template>
            <template #description>
              <span class="uppercase font-semibold">Bears of a Fever</span>
            </template>
          </ListItem>
          <ListItem to="#" title="Sabrino Gardener">
            <template #prefix>
              <img class="size-10 rounded-box" src="https://picsum.photos/seed/s3/94/94" alt="Avatar" />
            </template>
            <template #description>
              <span class="uppercase font-semibold">Cappuccino</span>
            </template>
          </ListItem>
        </List>
      </Variant>

      <Variant title="Composition">
        <div class="list-story list-story--row">
          <!-- Settings-style list -->
          <List class="w-80 shadow-md" title="Account settings">
            <ListItem title="Profile" description="Update your name and avatar">
              <template #actions>
                <Button variant="ghost" size="sm">Edit</Button>
              </template>
            </ListItem>
            <ListItem title="Password" description="Change your password">
              <template #actions>
                <Button variant="ghost" size="sm">Edit</Button>
              </template>
            </ListItem>
            <ListItem title="Notifications" description="Manage your preferences">
              <template #actions>
                <Button variant="ghost" size="sm">Edit</Button>
              </template>
            </ListItem>
          </List>

          <!-- Badge-style list -->
          <List class="w-80 shadow-md" title="Recent activity">
            <ListItem title="Deployment succeeded" description="2 minutes ago">
              <template #prefix>
                <Status color="success" class="mt-1"  />
              </template>
            </ListItem>
            <ListItem title="Build warning" description="14 minutes ago">
              <template #prefix>
                <Status color="warning" class="mt-1" />
              </template>
            </ListItem>
            <ListItem title="Test failed" description="1 hour ago">
              <template #prefix>
                <Status color="error" class="mt-1" />
              </template>
            </ListItem>
          </List>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.list-story {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.list-story--col {
  flex-direction: column;
}

.list-story--row {
  align-items: flex-start;
}

.list-story--item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.list-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}

.list-story--hint {
  font-size: 0.875rem;
  color: #6b7280;
  background: #f9fafb;
  border-left: 3px solid #d1d5db;
  padding: 0.6rem 0.875rem;
  border-radius: 0 4px 4px 0;
  margin-bottom: 1rem;
  max-width: 480px;
}

.list-story--hint code {
  font-size: 0.8rem;
  background: #e5e7eb;
  padding: 1px 4px;
  border-radius: 3px;
}
</style>

<docs lang="md">
# List

## Description

A vertical layout component to display information in rows.
Built on DaisyUI's `list` / `list-row` class system. `ListItem` renders as a `<li />` by default
and switches to a `RouterLink` automatically when `to` is provided.
It provides a great DX by supporting multiple named slots for easy composition.

## API

<details>
<summary>List</summary>

### Props

| Prop    | Type     | Default     | Required | Description                                       |
|---------|----------|-------------|----------|---------------------------------------------------|
| `title` | `string` | `undefined` | :x:      | Optional title to display at the top of the list. |

### Slots

| Slot      | Bindings | Description                        |
|-----------|----------|------------------------------------|
| `title`   | -        | Custom title element for the list. |
| `default` | -        | The items.                         |

</details>

<details>
<summary>ListItem</summary>

### Props

| Prop          | Type              | Default     | Required | Description                                                                                        |
|---------------|-------------------|-------------|----------|----------------------------------------------------------------------------------------------------|
| `to`          | `RouteLocationRaw`| `undefined` | :x:      | If provided, the item renders as a `RouterLink`. Accepts a string path or a route location object. |
| `title`       | `string`          | `undefined` | :x:      | Title text for the list item.                                                                      |
| `description` | `string`          | `undefined` | :x:      | Description text for the list item.                                                                |

### Slots

| Slot          | Bindings | Description                                                                          |
|---------------|----------|--------------------------------------------------------------------------------------|
| `prefix`      | -        | Content to display before the title (e.g. icon, avatar).                             |
| `title`       | -        | Custom title content (if prop isn't enough).                                         |
| `description` | -        | Custom description content (if prop isn't enough).                                   |
| `default`     | -        | If you don't use title/description slots or props, you can pass custom content here. |
| `actions`     | -        | Content to display at the end of the row (e.g. buttons).                             |
| `details`     | -        | Extra content that wraps to a new line below the item (`list-col-wrap`).             |

</details>

## Usage

```vue
<!-- Basic Composition -->
<List title="Settings">
  <ListItem title="Profile" description="Update your info">
    <template #actions>
      <Button>Edit</Button>
    </template>
  </ListItem>
</List>

<!-- Advanced with slots -->
<List>
  <template #title>
    <div class="text-primary font-bold">Latest activity</div>
  </template>
  
  <ListItem>
    <template #prefix>
      <img src="..." class="size-10 rounded-box" />
    </template>
    <template #title>
      <strong>New User</strong>
    </template>
    <template #description>
      <span class="text-success">Online now</span>
    </template>
    <template #actions>
      <Button>View</Button>
    </template>
    <template #details>
      User signed up 2 minutes ago via Google.
    </template>
  </ListItem>
</List>
```
</docs>