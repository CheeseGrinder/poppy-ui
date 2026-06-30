<script setup lang="ts">
import { CheckIcon } from '@lucide/vue'
import Timeline from './Timeline.vue'
import TimelineItem from './TimelineItem.vue'
</script>

<template>
  <Story group="components" title="Display/Timeline" auto-props-disabled>
    <template #default>

      <Variant title="Default" id="default">
        <Timeline>
          <TimelineItem time="1984" description="First Macintosh computer" color="primary" checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="1998" description="iMac" color="primary" checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2001" description="iPod" color="primary" checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2007" description="iPhone" color="primary">
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2015" description="Apple Watch" color="primary">
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
        </Timeline>
      </Variant>

      <Variant title="With box" id="with-box">
        <Timeline>
          <TimelineItem time="1984" description="First Macintosh computer" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="1998" description="iMac" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2001" description="iPod" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2007" description="iPhone" color="primary" box>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2015" description="Apple Watch" color="primary" box>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
        </Timeline>
      </Variant>

      <Variant title="End side only" id="end-side-only">
        <Timeline>
          <TimelineItem description="First Macintosh computer" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem description="iMac" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem description="iPod" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem description="iPhone" color="primary" box>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem description="Apple Watch" color="primary" box>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
        </Timeline>
      </Variant>

      <Variant title="Start side only" id="start-side-only">
        <Timeline>
          <TimelineItem side="start" description="First Macintosh computer" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem side="start" description="iMac" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem side="start" description="iPod" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem side="start" description="iPhone" color="primary" box>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem side="start" description="Apple Watch" color="primary" box>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
        </Timeline>
      </Variant>

      <Variant title="Vertical" id="vertical">
        <Timeline direction="vertical">
          <TimelineItem time="1984" description="First Macintosh computer" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="1998" description="iMac" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2001" description="iPod" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2007" description="iPhone" color="primary" box>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2015" description="Apple Watch" color="primary" box>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
        </Timeline>
      </Variant>

      <Variant title="Compact" id="compact">
        <Timeline compact>
          <TimelineItem description="First Macintosh computer" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem description="iMac" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem description="iPod" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem description="iPhone" color="primary" box>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem description="Apple Watch" color="primary" box>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
        </Timeline>
      </Variant>

      <Variant title="Snap icon" id="snap-icon">
        <Timeline snap-icon direction="vertical">
          <TimelineItem
            side="start"
            color="primary"
            time="1984"
            box
            start-class="mb-10 md:text-end"
            checked
          >
            <template #dot><CheckIcon class="size-4" /></template>
            <template #title><div class="text-lg font-black">First Macintosh computer</div></template>
            <template #description>
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the original Apple
              Macintosh personal computer. It played a pivotal role in establishing desktop
              publishing as a general office function.
            </template>
          </TimelineItem>
          <TimelineItem
            side="end"
            color="secondary"
            time="1998"
            box
            end-class="md:mb-10"
            checked
          >
            <template #dot><CheckIcon class="size-4" /></template>
            <template #title><div class="text-lg font-black">iMac</div></template>
            <template #description>
              iMac is a family of all-in-one Mac desktop computers designed and built by Apple Inc.
              It has been the primary part of Apple's consumer desktop offerings since its debut in
              August 1998, and has evolved through seven distinct forms.
            </template>
          </TimelineItem>
          <TimelineItem
            side="start"
            color="primary"
            time="2001"
            box
            start-class="mb-10 md:text-end"
            checked
          >
            <template #dot><CheckIcon class="size-4" /></template>
            <template #title><div class="text-lg font-black">iPod</div></template>
            <template #description>
              The iPod is a discontinued series of portable media players and multi-purpose mobile
              devices designed and marketed by Apple Inc. The first version was released on
              October 23, 2001.
            </template>
          </TimelineItem>
          <TimelineItem
            side="end"
            color="secondary"
            time="2007"
            box
            end-class="md:mb-10"
            checked
          >
            <template #dot><CheckIcon class="size-4" /></template>
            <template #title><div class="text-lg font-black">iPhone</div></template>
            <template #description>
              iPhone is a line of smartphones produced by Apple Inc. that use Apple's own iOS
              mobile operating system. The first-generation iPhone was announced by then-Apple CEO
              Steve Jobs on January 9, 2007.
            </template>
          </TimelineItem>
          <TimelineItem
            side="start"
            color="primary"
            time="2015"
            box
            start-class="mb-10 md:text-end"
          >
            <template #dot><CheckIcon class="size-4" /></template>
            <template #title><div class="text-lg font-black">Apple Watch</div></template>
            <template #description>
              The Apple Watch is a line of smartwatches produced by Apple Inc. It incorporates
              fitness tracking, health-oriented capabilities, and wireless telecommunication.
            </template>
          </TimelineItem>
        </Timeline>
      </Variant>

      <Variant title="With colors" id="with-colors">
        <Timeline>
          <TimelineItem time="1984" description="First Macintosh computer" color="primary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="1998" description="iMac" color="secondary" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2001" description="iPod" color="accent" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2007" description="iPhone" color="warning" box checked>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
          <TimelineItem time="2015" description="Apple Watch" color="error" box>
            <template #dot><CheckIcon class="size-4" /></template>
          </TimelineItem>
        </Timeline>
      </Variant>

    </template>
  </Story>
</template>

<docs lang="md">
# Timeline

## Description

Display a list of events in chronological order, with optional icons, timestamps, and colored connectors.

## API

<details>
<summary>Timeline</summary>

### Props

| Prop        | Type                | Default        | Required | Configurable       | Description                                          |
|-------------|---------------------|----------------|----------|--------------------|------------------------------------------------------|
| `direction` | `TimelineDirection` | `'horizontal'` | :x:      | :white_check_mark: | Layout direction of the timeline.                    |
| `compact`   | `boolean`           | `false`        | :x:      | :white_check_mark: | Forces all items to render on one side.              |
| `snapIcon`  | `boolean`           | `false`        | :x:      | :white_check_mark: | Snaps the middle icon to the start edge.             |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.timeline` option).

### Slots

| Slot      | Bindings | Description                             |
|-----------|----------|-----------------------------------------|
| `default` | -        | Contains `<TimelineItem />` components. |

</details>

<details>
<summary>TimelineItem</summary>

### Props

| Prop           | Type                | Default     | Required | Configurable       | Description                                                                                    |
|----------------|---------------------|-------------|----------|--------------------|------------------------------------------------------------------------------------------------|
| `time`         | `string`            | `undefined` | :x:      | :x:                | Timestamp or date label. Shown opposite to main content by default, or on same side as content when `side` is set. |
| `title`        | `string`            | `undefined` | :x:      | :x:                | Main title of the event.                                                                        |
| `description`  | `string`            | `undefined` | :x:      | :x:                | Description or body text.                                                                       |
| `color`        | `TimelineItemColor` | `undefined` | :x:      | :white_check_mark: | Dot background color; icon inherits the matching content color.                                 |
| `checked`      | `boolean`           | `false`     | :x:      | :x:                | Marks item as completed. Colors the outgoing connector with `color`.                            |
| `box`          | `boolean`           | `false`     | :x:      | :white_check_mark: | Applies `timeline-box` style to the content container.                                         |
| `side`         | `TimelineItemSide`  | `undefined` | :x:      | :white_check_mark: | When set, places all content on that side. Omit for default split layout (time ↔ content).     |
| `dotClass`     | `string`            | `undefined` | :x:      | :white_check_mark: | Additional class(es) on the dot container (`timeline-middle`).                                  |
| `startClass`   | `string`            | `undefined` | :x:      | :x:                | Additional class(es) on the `timeline-start` div (e.g. `mb-10 md:text-end` for snap-icon).    |
| `endClass`     | `string`            | `undefined` | :x:      | :x:                | Additional class(es) on the `timeline-end` div (e.g. `md:mb-10` for snap-icon).               |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.timelineItem` option).

### Slots

| Slot          | Bindings | Description                                                    |
|---------------|----------|----------------------------------------------------------------|
| `dot`         | -        | Icon or indicator at the center dot.                           |
| `time`        | -        | Rich time content. Overrides the `time` prop.                  |
| `title`       | -        | Rich title content. Overrides the `title` prop.                |
| `description` | -        | Rich description content. Overrides the `description` prop.    |

</details>

## Usage

```vue
<!-- Default: time on left, description on right, auto-connectors -->
<Timeline>
  <TimelineItem time="1984" description="First Macintosh computer" color="primary" checked>
    <template #dot><CheckIcon class="size-4" /></template>
  </TimelineItem>
  <TimelineItem time="1998" description="iMac" color="primary" checked>
    <template #dot><CheckIcon class="size-4" /></template>
  </TimelineItem>
  <TimelineItem time="2015" description="Apple Watch" color="primary">
    <template #dot><CheckIcon class="size-4" /></template>
  </TimelineItem>
</Timeline>

<!-- Vertical with box style -->
<Timeline direction="vertical">
  <TimelineItem time="1984" description="First Macintosh computer" color="primary" box checked>
    <template #dot><CheckIcon class="size-4" /></template>
  </TimelineItem>
</Timeline>

<!-- Snap icon: alternating sides with all content on one side -->
<Timeline snap-icon direction="vertical">
  <TimelineItem side="start" color="primary" time="1984" title="First Mac" description="..." box start-class="mb-10 md:text-end" checked>
    <template #dot><CheckIcon class="size-4" /></template>
  </TimelineItem>
  <TimelineItem side="end" color="secondary" time="1998" title="iMac" description="..." box end-class="md:mb-10" checked>
    <template #dot><CheckIcon class="size-4" /></template>
  </TimelineItem>
</Timeline>

<!-- Rich content via slots -->
<TimelineItem color="primary" checked>
  <template #dot><CheckIcon class="size-4" /></template>
  <template #time><time class="font-mono italic">1984</time></template>
  <template #title><h3 class="text-lg font-black">First Macintosh</h3></template>
  <template #description><p>A revolutionary computer...</p></template>
</TimelineItem>
```
</docs>
