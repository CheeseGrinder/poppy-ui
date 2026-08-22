---
group: 'top'
title: 'Configuration'
icon: 'lucide:settings'
---

# Plugin Configuration

## ⚠️ Required setup: Tailwind CSS content configuration

Poppy UI components build most of their classes dynamically in JavaScript rather than
writing them as literal strings in your templates — for example, `<Button shape="block" />`
resolves to `btn-block` through an internal lookup table, not a class written in your own
source code.

Tailwind CSS v4's automatic content detection scans your project's own files but
**ignores `node_modules` by default**. Since Poppy UI's dynamic classes only exist as
string literals inside the package's own files (`dist`/`src`), Tailwind never sees them
unless you tell it to also scan the package. Without this step, components still render
their classes in the DOM, but no CSS rule is ever generated for them — colors, sizes,
variants and shapes silently do nothing. A common symptom: `shape="block"` doesn't expand
to 100% width and stays at its content size, because the `.btn-block { width: 100% }`
rule was simply never generated.

The fix is to add an `@source` directive to your global CSS entry point (the file that
contains `@import "tailwindcss";`), pointing at the Poppy UI package:

```css
@import "tailwindcss";
@source "../node_modules/@poppy-ui/vue";

@plugin "daisyui";
```

- Adjust the number of `../` so the path resolves to `node_modules/@poppy-ui/vue` from
  where your CSS file lives.
- `@source` takes a literal filesystem path/glob, **not** a package specifier — writing
  `@source "@poppy-ui/vue";` will not work, it must be a real relative (or absolute) path.
- Poppy UI publishes both `dist` and `src`, so pointing at the package root scans both;
  you can narrow it to `.../@poppy-ui/vue/dist` if you prefer.

This is required for Poppy UI to render correctly — do this before reporting a component
as "not working" or "not styled".

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
