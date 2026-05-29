<script lang="ts">
import { logEvent } from 'histoire/client'
import { computed, ref } from 'vue'
import Countdown from './Countdown.vue'
</script>

<script setup lang="ts">
const inOneMinute   = computed(() => addSeconds(60))
const inTenMinutes  = computed(() => addSeconds(600))
const eventDate     = computed(() => addDays(15))
const customTarget  = ref(addSeconds(30))

function resetCustom() {
  customTarget.value = addSeconds(30)
}

function addSeconds(n: number): Date {
  return new Date(Date.now() + n * 1000)
}

function addDays(n: number): Date {
  return new Date(Date.now() + n * 24 * 60 * 60 * 1000)
}
</script>

<template>
  <Story title="Display/Countdown" auto-props-disabled>
    <template #default>

      <Variant title="Default (hh:mm:ss)">
        <template #source>
          <textarea v-pre>
            <Countdown :to="targetDate" @end="onEnd" />
          </textarea>
        </template>

        <Countdown :to="inTenMinutes" @end="logEvent('end', $event)" />
      </Variant>

      <Variant title="Custom slot — dd hh mm ss">
        <template #source>
          <textarea v-pre>
            <Countdown :to="targetDate">
              <template #default="{ days, hours, minutes, seconds }">
                <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
                  <div class="flex flex-col">
                    <span class="countdown font-mono text-5xl">
                      <span :style="{ '--value': days }">{{ days }}</span>
                    </span>
                    days
                  </div>
                  <!-- etc. -->
                </div>
              </template>
            </Countdown>
          </textarea>
        </template>

        <Countdown :to="eventDate">
          <template #default="{ days, hours, minutes, seconds }">
            <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
              <div class="flex flex-col">
                <span class="countdown font-mono text-5xl">
                  <span :style="{ '--value': days }" :aria-label="days.toString()">{{ days }}</span>
                </span>
                days
              </div>
              <div class="flex flex-col">
                <span class="countdown font-mono text-5xl">
                  <span :style="{ '--value': hours }" :aria-label="hours.toString()">{{ hours }}</span>
                </span>
                hours
              </div>
              <div class="flex flex-col">
                <span class="countdown font-mono text-5xl">
                  <span :style="{ '--value': minutes }" :aria-label="minutes.toString()">{{ minutes }}</span>
                </span>
                min
              </div>
              <div class="flex flex-col">
                <span class="countdown font-mono text-5xl">
                  <span :style="{ '--value': seconds }" :aria-label="seconds.toString()">{{ seconds }}</span>
                </span>
                sec
              </div>
            </div>
          </template>
        </Countdown>
      </Variant>

      <Variant title="In boxes">
        <Countdown :to="eventDate">
          <template #default="{ days, hours, minutes, seconds }">
            <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
              <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2 min-w-16">
                <span class="countdown font-mono text-5xl">
                  <span :style="{ '--value': days }" :aria-label="days.toString()">{{ days }}</span>
                </span>
                days
              </div>
              <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2 min-w-16">
                <span class="countdown font-mono text-5xl">
                  <span :style="{ '--value': hours }" :aria-label="hours.toString()">{{ hours }}</span>
                </span>
                hours
              </div>
              <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2 min-w-16">
                <span class="countdown font-mono text-5xl">
                  <span :style="{ '--value': minutes }" :aria-label="minutes.toString()">{{ minutes }}</span>
                </span>
                min
              </div>
              <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2 min-w-16">
                <span class="countdown font-mono text-5xl">
                  <span :style="{ '--value': seconds }" :aria-label="seconds.toString()">{{ seconds }}</span>
                </span>
                sec
              </div>
            </div>
          </template>
        </Countdown>
      </Variant>

      <Variant title="@end event">
        <div class="countdown-story countdown-story--col">
          <p class="countdown-story--hint">
            Countdown reaches zero in 30 seconds — watch the event log.
            Click <strong>Reset</strong> to restart.
          </p>
          <div class="countdown-story countdown-story--row">
            <Countdown :to="customTarget" @end="logEvent('end', $event)">
              <template #default="{ seconds, done }">
                <span v-if="done" class="text-success font-bold text-2xl">Done! 🎉</span>
                <span v-else class="countdown font-mono text-5xl">
                  <span :style="{ '--value': seconds }" :aria-label="seconds.toString()">{{ seconds }}</span>
                </span>
              </template>
            </Countdown>
            <button class="countdown-story--btn" @click="resetCustom">Reset</button>
          </div>
        </div>
      </Variant>

      <Variant title="ISO string and timestamp">
        <template #source>
          <textarea v-pre>
            <!-- ISO string -->
            <Countdown to="2026-12-31T23:59:59" />

            <!-- Unix timestamp -->
            <Countdown :to="Date.now() + 60_000" />
          </textarea>
        </template>

        <div class="countdown-story countdown-story--col">
          <div class="countdown-story--item">
            <span class="countdown-story--label">ISO string — 2026-12-31T23:59:59</span>
            <Countdown to="2026-12-31T23:59:59" />
          </div>
          <div class="countdown-story--item">
            <span class="countdown-story--label">Unix timestamp (+10 min)</span>
            <Countdown :to="inTenMinutes.getTime()" />
          </div>
        </div>
      </Variant>

    </template>
  </Story>
</template>

<style scoped>
.countdown-story {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.countdown-story--row {
  align-items: center;
}

.countdown-story--col {
  flex-direction: column;
  gap: 0.75rem;
}

.countdown-story--item {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.countdown-story--label {
  font-size: 0.7rem;
  color: #9ca3af;
  font-family: monospace;
}

.countdown-story--hint {
  font-size: 0.875rem;
  color: #6b7280;
  background: #f9fafb;
  border-left: 3px solid #d1d5db;
  padding: 0.6rem 0.875rem;
  border-radius: 0 4px 4px 0;
  max-width: 480px;
}

.countdown-story--btn {
  font-size: 0.75rem;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  background: #f9fafb;
  cursor: pointer;
  color: #374151;
}

.countdown-story--btn:hover {
  background: #f3f4f6;
}
</style>

<docs lang="md">
# Countdown

## Description

Displays an animated countdown to a target date/time.
Built on DaisyUI's `countdown` class system with an internal `setInterval` that ticks every 500ms.
Fully customisable via the `default` slot — the default render shows `hh:mm:ss`.

## Props

| Prop | Type                          | Default | Required | Configurable | Description                                                                |
|------|-------------------------------|---------|----------|--------------|----------------------------------------------------------------------------|
| `to` | `Date \| string \| number`    | —       | ✅       | ❌           | Target date/time. Accepts a `Date`, ISO string, or Unix timestamp (ms).    |

## Events

| Event  | Payload | Description                              |
|--------|---------|------------------------------------------|
| `@end` | —       | Emitted once when the countdown reaches zero. |

## Slot

| Slot      | Bindings                                             | Description                                  |
|-----------|------------------------------------------------------|----------------------------------------------|
| `default` | `{ days, hours, minutes, seconds, done }` — all `number` except `done: boolean` | Custom render. Falls back to `hh:mm:ss`. |

## Exposed

| Member  | Type                                                    | Description                    |
|---------|---------------------------------------------------------|--------------------------------|
| `delta` | `Ref<{ days, hours, minutes, seconds, done }>`          | Reactive current delta values. |

## Usage

```vue
<!-- Default render (hh:mm:ss) -->
<Countdown :to="new Date('2026-12-31')" @end="onEnd" />

<!-- ISO string -->
<Countdown to="2026-12-31T23:59:59" />

<!-- Unix timestamp -->
<Countdown :to="Date.now() + 60_000" />

<!-- Custom slot -->
<Countdown :to="targetDate">
  <template #default="{ days, hours, minutes, seconds, done }">
    <span v-if="done">Time's up!</span>
    <div v-else class="flex gap-4">
      <div>
        <span class="countdown font-mono text-5xl">
          <span :style="{ '--value': days }">{{ days }}</span>
        </span>
        days
      </div>
      <!-- etc. -->
    </div>
  </template>
</Countdown>
```
</docs>