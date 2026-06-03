---
group: 'top'
title: 'Configuration'
icon: 'lucide:settings'
---

# Plugin Configuration

## Overview

The `PoppyUi` plugin is installed once in `main.ts` and lets you define global defaults
for every component. This avoids prop-drilling and keeps your design tokens consistent
across the entire application.

```ts
// main.ts
import { createApp } from 'vue'
import { PoppyUi } from '@poppy-ui/vue'
import App from './App.vue'

createApp(App)
  .use(PoppyUi, {
    size: 'md',
    components: {
      button: {
        color: 'primary',
        variant: 'solid',
      },
    },
  })
  .mount('#app')
```

## Options

| Option       | Type                   | Default     | Description                                                                       |
|--------------|------------------------|-------------|-----------------------------------------------------------------------------------|
| `size`       | `ComponentSize`        | `'md'`      | Global size fallback for all components.                                          |
| `components` | `PoppyComponentConfig` | `{}`        | Per-component default configurable props.                                         |
| `debug`      | `true`                 | `undefined` | Logs options to console and exposes them on `window.__POPPY_UI_PLUGIN_OPTIONS__`. |

## Priority order

When resolving a prop value, the following priority applies (highest to lowest):

1. Prop passed directly to the component instance
2. `components.[name]` in plugin options
3. Global `size` in plugin options
4. Component's own internal default

## Configurable props

Only props marked **Configurable :white_check_mark:** in each component's documentation can be set
via the plugin. Non-configurable props (e.g. `disabled`, `loading`, `type`) must always
be passed directly to the component instance.
