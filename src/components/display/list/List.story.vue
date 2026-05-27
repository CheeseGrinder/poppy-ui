<script lang="ts" setup>
import Button from '@/components/actions/button/Button.vue';
import { HeartIcon, PlayIcon } from '@lucide/vue';
import List from './List.vue';
import ListItem from './ListItem.vue';
</script>

<template>
  <Story title="Display/List" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <List class="w-96 shadow-md">
          <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Most played songs this week</li>
          <ListItem>
            <img class="size-10 rounded-box" src="https://picsum.photos/seed/s1/94/94" alt="Avatar" />
            <div>
              <div>Dio Lupa</div>
              <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
            </div>
            <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
            <Button variant="ghost" shape="square" size="sm"><HeartIcon class="size-4" /></Button>
          </ListItem>
          <ListItem>
            <img class="size-10 rounded-box" src="https://picsum.photos/seed/s2/94/94" alt="Avatar" />
            <div>
              <div>Ellie Beilish</div>
              <div class="text-xs uppercase font-semibold opacity-60">Bears of a Fever</div>
            </div>
            <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
            <Button variant="ghost" shape="square" size="sm"><HeartIcon class="size-4" /></Button>
          </ListItem>
          <ListItem>
            <img class="size-10 rounded-box" src="https://picsum.photos/seed/s3/94/94" alt="Avatar" />
            <div>
              <div>Sabrino Gardener</div>
              <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
            </div>
            <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
            <Button variant="ghost" shape="square" size="sm"><HeartIcon class="size-4" /></Button>
          </ListItem>
        </List>
      </Variant>

      <Variant title="list-col-grow">
        <div class="list-story--hint">
          By default the <strong>second</strong> child of <code>list-row</code> grows to fill remaining space.
          Add <code>list-col-grow</code> to any other child to make it grow instead.
        </div>
        <div class="list-story list-story--col">
          <div class="list-story--item">
            <span class="list-story--label">default — second child grows</span>
            <List class="w-96 shadow-md">
              <ListItem>
                <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
                <img class="size-10 rounded-box" src="https://picsum.photos/seed/s1/94/94" alt="Avatar" />
                <div>
                  <div>Dio Lupa</div>
                  <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                </div>
                <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
              </ListItem>
              <ListItem>
                <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
                <img class="size-10 rounded-box" src="https://picsum.photos/seed/s2/94/94" alt="Avatar" />
                <div>
                  <div>Ellie Beilish</div>
                  <div class="text-xs uppercase font-semibold opacity-60">Bears of a Fever</div>
                </div>
                <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
              </ListItem>
            </List>
          </div>
          <div class="list-story--item">
            <span class="list-story--label">list-col-grow on third child</span>
            <List class="w-96 shadow-md">
              <ListItem>
                <div class="text-4xl font-thin opacity-30 tabular-nums">01</div>
                <img class="size-10 rounded-box" src="https://picsum.photos/seed/s1/94/94" alt="Avatar" />
                <div class="list-col-grow">
                  <div>Dio Lupa</div>
                  <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
                </div>
                <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
              </ListItem>
              <ListItem>
                <div class="text-4xl font-thin opacity-30 tabular-nums">02</div>
                <img class="size-10 rounded-box" src="https://picsum.photos/seed/s2/94/94" alt="Avatar" />
                <div class="list-col-grow">
                  <div>Ellie Beilish</div>
                  <div class="text-xs uppercase font-semibold opacity-60">Bears of a Fever</div>
                </div>
                <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
              </ListItem>
            </List>
          </div>
        </div>
      </Variant>

      <Variant title="list-col-wrap">
        <div class="list-story--hint">
          Add <code>list-col-wrap</code> to a child to push it to the next line,
          spanning the full row width.
        </div>
        <List class="w-96 shadow-md">
          <ListItem>
            <img class="size-10 rounded-box" src="https://picsum.photos/seed/s1/94/94" alt="Avatar" />
            <div>
              <div>Dio Lupa</div>
              <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
            </div>
            <p class="list-col-wrap text-xs opacity-60">
              An instant hit praised for its haunting sound and emotional depth.
              A viral performance brought it widespread recognition.
            </p>
            <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
            <Button variant="ghost" shape="square" size="sm"><HeartIcon class="size-4" /></Button>
          </ListItem>
          <ListItem>
            <img class="size-10 rounded-box" src="https://picsum.photos/seed/s2/94/94" alt="Avatar" />
            <div>
              <div>Ellie Beilish</div>
              <div class="text-xs uppercase font-semibold opacity-60">Bears of a Fever</div>
            </div>
            <p class="list-col-wrap text-xs opacity-60">
              Captivated audiences with its intense energy and mysterious lyrics.
              Popularity skyrocketed after fans shared it widely online.
            </p>
            <Button variant="ghost" shape="square" size="sm"><PlayIcon class="size-4" /></Button>
            <Button variant="ghost" shape="square" size="sm"><HeartIcon class="size-4" /></Button>
          </ListItem>
        </List>
      </Variant>

      <Variant title="RouterLink (to)">
        <div class="list-story--hint">
          When <code>to</code> is provided, <code>ListItem</code> renders as a <code>RouterLink</code>.
          The row becomes a navigable element.
        </div>
        <List class="w-96 shadow-md">
          <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Browse albums</li>
          <ListItem :to="{ name: 'home' }">
            <img class="size-10 rounded-box" src="https://picsum.photos/seed/s1/94/94" alt="Avatar" />
            <div>
              <div>Dio Lupa</div>
              <div class="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
            </div>
          </ListItem>
          <ListItem :to="{ name: 'home' }">
            <img class="size-10 rounded-box" src="https://picsum.photos/seed/s2/94/94" alt="Avatar" />
            <div>
              <div>Ellie Beilish</div>
              <div class="text-xs uppercase font-semibold opacity-60">Bears of a Fever</div>
            </div>
          </ListItem>
          <ListItem :to="{ name: 'home' }">
            <img class="size-10 rounded-box" src="https://picsum.photos/seed/s3/94/94" alt="Avatar" />
            <div>
              <div>Sabrino Gardener</div>
              <div class="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
            </div>
          </ListItem>
        </List>
      </Variant>

      <Variant title="Composition">
        <div class="list-story list-story--row">
          <!-- Settings-style list -->
          <List class="w-80 shadow-md">
            <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Account settings</li>
            <ListItem>
              <div class="list-col-grow">
                <div>Profile</div>
                <div class="text-xs opacity-60">Update your name and avatar</div>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </ListItem>
            <ListItem>
              <div class="list-col-grow">
                <div>Password</div>
                <div class="text-xs opacity-60">Change your password</div>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </ListItem>
            <ListItem>
              <div class="list-col-grow">
                <div>Notifications</div>
                <div class="text-xs opacity-60">Manage your preferences</div>
              </div>
              <Button variant="ghost" size="sm">Edit</Button>
            </ListItem>
          </List>

          <!-- Badge-style list -->
          <List class="w-80 shadow-md">
            <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Recent activity</li>
            <ListItem>
              <div class="size-2 rounded-full bg-success mt-1 shrink-0"></div>
              <div class="list-col-grow">
                <div>Deployment succeeded</div>
                <div class="text-xs opacity-60">2 minutes ago</div>
              </div>
            </ListItem>
            <ListItem>
              <div class="size-2 rounded-full bg-warning mt-1 shrink-0"></div>
              <div class="list-col-grow">
                <div>Build warning</div>
                <div class="text-xs opacity-60">14 minutes ago</div>
              </div>
            </ListItem>
            <ListItem>
              <div class="size-2 rounded-full bg-error mt-1 shrink-0"></div>
              <div class="list-col-grow">
                <div>Test failed</div>
                <div class="text-xs opacity-60">1 hour ago</div>
              </div>
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

## List

No props. Renders a `<ul class="list bg-base-100 rounded-box" />` wrapper.

## ListItem props

| Prop | Type              | Default     | Required | Configurable | Description                                                                                        |
|------|-------------------|-------------|----------|--------------|----------------------------------------------------------------------------------------------------|
| `to` | `RouteLocationRaw`| `undefined` | ❌       | ❌          | If provided, the item renders as a `RouterLink`. Accepts a string path or a route location object. |

## DaisyUI layout modifiers

These are plain CSS classes applied directly to children of `ListItem`, not props.

| Class           | Applied to                 | Description                                                                              |
|-----------------|----------------------------|------------------------------------------------------------------------------------------|
| `list-col-grow` | Direct child of `ListItem` | Makes this child fill the remaining horizontal space. By default the second child grows. |
| `list-col-wrap` | Direct child of `ListItem` | Pushes this child to the next line, spanning the full row width.                         |

## Slots

Both `List` and `ListItem` expose a single `default` slot.

Note: Use a plain `<li />` for non-row content like section headers (e.g. `<li class="p-4 pb-2 text-xs opacity-60">Title</li>`).

## Usage

```vue
<!-- Basic -->
<List>
  <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Section title</li>
  <ListItem>
    <img class="size-10 rounded-box" src="..." alt="..." />
    <div>
      <div>Name</div>
      <div class="text-xs opacity-60">Subtitle</div>
    </div>
    <Button variant="ghost" shape="square" size="sm"><PlayIcon /></Button>
  </ListItem>
</List>

<!-- list-col-grow on a specific child -->
<ListItem>
  <div class="text-4xl font-thin opacity-30">01</div>
  <img class="size-10 rounded-box" src="..." alt="..." />
  <div class="list-col-grow">
    <div>Title</div>
    <div class="text-xs opacity-60">Subtitle</div>
  </div>
  <Button variant="ghost" shape="square" size="sm"><PlayIcon /></Button>
</ListItem>

<!-- list-col-wrap to push a child to the next line -->
<ListItem>
  <img class="size-10 rounded-box" src="..." alt="..." />
  <div>
    <div>Title</div>
    <div class="text-xs opacity-60">Subtitle</div>
  </div>
  <p class="list-col-wrap text-xs opacity-60">Long description that wraps to the next line...</p>
  <Button variant="ghost" shape="square" size="sm"><PlayIcon /></Button>
</ListItem>

<!-- RouterLink item -->
<List>
  <ListItem :to="{ name: 'album', params: { id: 1 } }">
    <img class="size-10 rounded-box" src="..." alt="..." />
    <div class="list-col-grow">
      <div>Album name</div>
      <div class="text-xs opacity-60">Artist</div>
    </div>
  </ListItem>
</List>
```
</docs>