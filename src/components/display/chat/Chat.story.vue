<script lang="ts">
import Avatar from '@/components/display/avatar/Avatar.vue'
import { reactive } from 'vue'
import Chat from './Chat.vue'
import type { ChatProps } from './chat.props'

const AVATAR_1 = 'https://picsum.photos/seed/chat1/192/192'
const AVATAR_2 = 'https://picsum.photos/seed/chat2/192/192'
</script>

<script setup lang="ts">
const state = reactive<ChatProps>({
  side: 'start',
  color: undefined,
})
</script>

<template>
  <Story group="components" title="Display/Chat" auto-props-disabled>
    <template #default>

      <Variant title="Default">
        <template #controls>
          <HstSelect title="Side"  v-model="state.side"  :options="['start', 'end']" />
          <HstSelect title="Color" v-model="state.color" :options="[{ label: '-- default --', value: undefined }, 'neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error']" />
        </template>

        <template #source>
          <textarea v-pre>
            <Chat side="start">
              It's over Anakin, I have the high ground.
            </Chat>
          </textarea>
        </template>

        <Chat v-bind="state">
          It's over Anakin, I have the high ground.
        </Chat>
      </Variant>

      <Variant title="With image and header">
        <template #source>
          <textarea v-pre>
            <Chat side="start">
              <template #image>
                <Avatar size="xs" shape="rounded-full">
                  <img src="..." alt="Obi-Wan" />
                </Avatar>
              </template>
              <template #header>Obi-Wan Kenobi</template>
              It's over Anakin, I have the high ground.
            </Chat>
          </textarea>
        </template>

        <div class="chat-story chat-story--col">
          <Chat side="start">
            <template #image>
              <Avatar size="xs" shape="rounded-full">
                <img :src="AVATAR_1" alt="Obi-Wan" />
              </Avatar>
            </template>
            <template #header>Obi-Wan Kenobi</template>
            It's over Anakin, I have the high ground.
          </Chat>
          <Chat side="end">
            <template #image>
              <Avatar size="xs" shape="rounded-full">
                <img :src="AVATAR_2" alt="Anakin" />
              </Avatar>
            </template>
            <template #header>Anakin Skywalker</template>
            You underestimate my power!
          </Chat>
        </div>
      </Variant>

      <Variant title="With footer">
        <template #source>
          <textarea v-pre>
            <Chat side="start">
              <template #footer>
                <span class="opacity-50 text-xs">Delivered</span>
              </template>
              It's over Anakin, I have the high ground.
            </Chat>
          </textarea>
        </template>

        <div class="chat-story chat-story--col">
          <Chat side="start">
            <template #footer>
              <span class="opacity-50 text-xs">12:45</span>
            </template>
            It's over Anakin, I have the high ground.
          </Chat>
          <Chat side="end">
            <template #footer>
              <span class="opacity-50 text-xs">Delivered ✓</span>
            </template>
            You underestimate my power!
          </Chat>
        </div>
      </Variant>

      <Variant title="Colors">
        <div class="chat-story chat-story--col">
          <Chat v-for="color in (['neutral', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'])" :key="color" side="start" :color="color">
            {{ color }} bubble
          </Chat>
        </div>
      </Variant>

      <Variant title="Conversation">
        <template #source>
          <textarea v-pre>
            <Chat side="start" color="neutral">
              <template #image>
                <Avatar size="xs" shape="rounded-full">
                  <img src="..." alt="Obi-Wan" />
                </Avatar>
              </template>
              <template #header>Obi-Wan Kenobi</template>
              <template #footer>
                <span class="text-xs opacity-50">10:00</span>
              </template>
              It's over Anakin, I have the high ground.
            </Chat>

            <Chat side="end" color="primary">
              <template #image>
                <Avatar size="xs" shape="rounded-full">
                  <img src="..." alt="Anakin" />
                </Avatar>
              </template>
              <template #header>Anakin Skywalker</template>
              <template #footer>
                <span class="text-xs opacity-50">10:01 ✓</span>
              </template>
              You underestimate my power!
            </Chat>
          </textarea>
        </template>

        <div class="chat-story chat-story--col">
          <Chat side="start" color="neutral">
            <template #image>
              <Avatar size="xs" shape="rounded-full">
                <img :src="AVATAR_1" alt="Obi-Wan" />
              </Avatar>
            </template>
            <template #header>Obi-Wan Kenobi</template>
            <template #footer><span class="text-xs opacity-50">10:00</span></template>
            It's over Anakin, I have the high ground.
          </Chat>

          <Chat side="end" color="primary">
            <template #image>
              <Avatar size="xs" shape="rounded-full">
                <img :src="AVATAR_2" alt="Anakin" />
              </Avatar>
            </template>
            <template #header>Anakin Skywalker</template>
            <template #footer><span class="text-xs opacity-50">10:01 ✓</span></template>
            You underestimate my power!
          </Chat>

          <Chat side="start" color="neutral">
            <template #image>
              <Avatar size="xs" shape="rounded-full">
                <img :src="AVATAR_1" alt="Obi-Wan" />
              </Avatar>
            </template>
            <template #header>Obi-Wan Kenobi</template>
            <template #footer><span class="text-xs opacity-50">10:02</span></template>
            Don't try it.
          </Chat>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.chat-story {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chat-story--col {
  flex-direction: column;
  max-width: 480px;
  width: 100%;
}
</style>

<docs lang="md">
# Chat

## Description

A chat bubble component for displaying conversation messages.
Built on DaisyUI's `chat` class system. Supports avatars, headers, footers, and color-coded bubbles.

## Props

| Prop    | Type        | Default     | Required | Configurable | Description                                             |
|---------|-------------|-------------|----------|--------------|---------------------------------------------------------|
| `side`  | `ChatSide`  | `'start'`   | ❌       | ❌          | Side of the bubble. `'start'` (left) / `'end'` (right). |
| `color` | `ChatColor` | `undefined` | ❌       | ✅          | Color theme applied to the chat bubble.                 |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.chat` option). See [Plugin Configuration](#) for more information.

## Slots

| Slot      | Description                                                              |
|-----------|--------------------------------------------------------------------------|
| `image`   | Avatar or image displayed beside the bubble. Wrapped in `chat-image`.    |
| `header`  | Name or title above the bubble. Wrapped in `chat-header`.                |
| `default` | Main content of the chat bubble.                                         |
| `footer`  | Metadata below the bubble (timestamp, status). Wrapped in `chat-footer`. |
| `meta`    | Additional metadata. Wrapped in `chat-meta`.                             |

## Usage

```vue
<!-- Basic -->
<Chat side="start">Hello world!</Chat>

<!-- With avatar and header -->
<Chat side="start" color="neutral">
  <template #image>
    <Avatar size="xs" shape="rounded-full">
      <img src="..." alt="User" />
    </Avatar>
  </template>
  <template #header>John Doe</template>
  Hey, how are you?
</Chat>

<!-- With footer -->
<Chat side="end" color="primary">
  <template #footer>
    <span class="text-xs opacity-50">Delivered ✓</span>
  </template>
  I'm doing great, thanks!
</Chat>
```
</docs>