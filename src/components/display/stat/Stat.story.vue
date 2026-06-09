<script setup lang="ts">
import Stat from './Stat.vue'
import Stats from './Stats.vue'
</script>

<template>
  <Story group="components" title="Display/Stat" auto-props-disabled>
    <template #default>
      <Variant title="Default" id="default">
        <Stats>
          <Stat title="Total Page Views" value="89,400" desc="21% more than last month" />
        </Stats>
      </Variant>

      <Variant title="With Icon" id="with-icon">
        <Stats>
          <Stat>
            <template #figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-8 w-8 stroke-current text-primary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </template>
            <template #title>Total Likes</template>
            <template #value>25.6K</template>
            <template #desc>21% more than last month</template>
          </Stat>
        </Stats>
      </Variant>

      <Variant title="Centered" id="centered">
        <Stats>
          <Stat align="center" title="Downloads" value="31K" desc="Jan 1st - Feb 1st" />
        </Stats>
      </Variant>

      <Variant title="Multiple Horizontal" id="multiple-horizontal">
        <Stats>
          <Stat title="Downloads" value="31K" desc="Jan 1st - Feb 1st" />
          <Stat title="New Users" value="4,200" desc="↗︎ 400 (22%)" />
          <Stat title="New Registers" value="1,200" desc="↘︎ 90 (14%)" />
        </Stats>
      </Variant>

      <Variant title="Vertical" id="vertical">
        <Stats direction="vertical">
          <Stat title="Downloads" value="31K" desc="Jan 1st - Feb 1st" />
          <Stat title="New Users" value="4,200" desc="↗︎ 400 (22%)" />
          <Stat title="New Registers" value="1,200" desc="↘︎ 90 (14%)" />
        </Stats>
      </Variant>

      <Variant title="With Actions" id="with-actions">
        <Stats>
          <Stat title="Account balance" value="$89,400">
            <template #actions>
              <button class="btn btn-xs btn-success">Add funds</button>
            </template>
          </Stat>
        </Stats>
      </Variant>

      <Variant title="Responsive" id="responsive">
        <Stats direction="vertical" class="lg:stats-horizontal">
          <Stat title="Downloads" value="31K" desc="Jan 1st - Feb 1st" />
          <Stat title="New Users" value="4,200" desc="↗︎ 400 (22%)" />
          <Stat title="New Registers" value="1,200" desc="↘︎ 90 (14%)" />
        </Stats>
      </Variant>
    </template>
  </Story>
</template>

<docs lang="md">
# Stat

## Description

A component used to display key metrics, statistics, or numerical data with optional titles, descriptions, icons, and actions.

## API

<details>
<summary>Stats</summary>

### Props

| Prop        | Type             | Default        | Required | Configurable       | Description                    |
|-------------|------------------|----------------|----------|--------------------|--------------------------------|
| `direction` | `StatsDirection` | `'horizontal'` | :x:      | :white_check_mark: | Direction of the stats layout. |

> **Configurable** props can be set globally via the Poppy UI plugin (`components.stats` option). See [Plugin Configuration](../../../stories/Configuration.story.md) for more information.

### Slots (Stats)

| Slot      | Bindings | Description                     |
|-----------|----------|---------------------------------|
| `default` | -        | Contains `<Stat />` components. |

</details>

<details>
<summary>Stat</summary>

### Props

| Prop           | Type               | Default     | Required | Configurable       | Description                             |
|----------------|--------------------|-------------|----------|--------------------|-----------------------------------------|
| `title`        | `string`           | `undefined` | :x:      | :x:                | Title of the stat.                      |
| `value`        | `string \| number` | `undefined` | :x:      | :x:                | Value displayed in the stat.            |
| `desc`         | `string`           | `undefined` | :x:      | :x:                | Description text for the stat.          |
| `align`        | `StatAlign`        | `undefined` | :x:      | :white_check_mark: | Alignment of the stat content.          |
| `titleClass`   | `string`           | `undefined` | :x:      | :white_check_mark: | Custom class for the title.             |
| `valueClass`   | `string`           | `undefined` | :x:      | :white_check_mark: | Custom class for the value.             |
| `descClass`    | `string`           | `undefined` | :x:      | :white_check_mark: | Custom class for the description.       |
| `figureClass`  | `string`           | `undefined` | :x:      | :white_check_mark: | Custom class for the figure container.  |
| `actionsClass` | `string`           | `undefined` | :x:      | :white_check_mark: | Custom class for the actions container. |

### Slots

| Slot      | Bindings | Description                          |
|-----------| -------- |--------------------------------------|
| `default` | -        | Default content of the stat.         |
| `figure`  | -        | Icon or figure displayed at the top. |
| `title`   | -        | Custom title content.                |
| `value`   | -        | Custom value content.                |
| `desc`    | -        | Custom description content.          |
| `actions` | -        | Actions container (e.g., buttons).   |

</details>

## Usage

```vue
<!-- Basic -->
<Stats>
  <Stat title="Total Page Views" value="89,400" desc="21% more than last month" />
</Stats>

<!-- With icon -->
<Stats>
  <Stat>
    <template #figure>
      <Icon name="heart" />
    </template>
    <template #title>Total Likes</template>
    <template #value>25.6K</template>
    <template #desc>21% more than last month</template>
  </Stat>
</Stats>

<!-- Centered -->
<Stats>
  <Stat align="center" title="Downloads" value="31K" desc="Jan 1st - Feb 1st" />
</Stats>

<!-- With actions -->
<Stats>
  <Stat title="Account balance" value="$89,400">
    <template #actions>
      <button class="btn btn-xs">Add funds</button>
    </template>
  </Stat>
</Stats>

<!-- Vertical layout -->
<Stats direction="vertical">
  <Stat title="Downloads" value="31K" />
  <Stat title="New Users" value="4,200" />
</Stats>
```
</docs>
