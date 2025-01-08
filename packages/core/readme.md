<p align="center">
  <a href="#">
    <img alt="Poppy" src="https://github.com/CheeseGrinder/poppy-ui/blob/main/.github/assets/logo.png?raw=true" width="60" />
  </a>
</p>

<h1 align="center">
  Poppy UI - Core
</h1>

[Poppy-ui](https://poppy-ui.com/) is an open source App Development UI that makes it easy to build top quality Progressive Web Apps with web technologies.

The Poppy-ui Core package contains the Web Components that make up the reusable UI building blocks of Poppy-ui. These components are designed to be used in traditional frontend view libraries/frameworks (such as [Stencil](https://stenciljs.com/), React, Angular, or Vue), or on their own through traditional JavaScript in the browser.


## Features

* Tiny, highly optimized components built with [Stencil](https://stenciljs.com/)
* No build or compiling required
* Simply add the static files to any project
* Lazy-loaded components without configuration
* Asynchronous rendering
* Theming through CSS Variables


## How to use

### Vanilla HTML

Easiest way to start using Poppy-ui Core is by adding a script tag to the CDN:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@poppy-ui/core/dist/poppy/poppy.esm.js"></script>
<script nomodule src="https://cdn.jsdelivr.net/npm/@poppy-ui/core/dist/poppy/poppy.js"></script>
<link href="https://cdn.jsdelivr.net/npm/@poppy-ui/core/css/poppy.bundle.css" rel="stylesheet">
```

Any Poppy component added to the webpage will automatically load. This includes writing the component tag directly in HTML, or using JavaScript such as `document.createElement('pop-button')`.

Additionally, within this package is a `dist/poppy.js` file and accompanying `dist/poppy/` directory. These are the same files which are used by the CDN, and they're available in this package so they can be apart of an app's local development.


## Framework Bindings

The `@poppy-ui/core` package can be used in simple HTML, or by vanilla JavaScript without any framework at all. Poppy also has packages that make it easier to integrate Poppy into a framework's traditional ecosystem and patterns. (However, at the lowest-level framework bindings are still just using Poppy Core and Web Components).

* [@poppy-ui/vue](https://www.npmjs.com/package/@poppy-ui/vue)
* [@poppy-ui/react](https://www.npmjs.com/package/@poppy-ui/react)
* [@poppy-ui/angular](https://www.npmjs.com/package/@poppy-ui/angular)


## Custom Elements Build

In addition to the default, self lazy-loading components built by Stencil, this package also comes with each component exported as a stand-alone custom element within `@poppy-ui/core/components`. Each component extends `HTMLElement`, and does not lazy-load itself. Instead, this package is useful for projects already using a bundler such as Webpack or Rollup. While all components are available to be imported, the custom elements build also ensures bundlers only import what's used, and tree-shakes any unused components.

Below is an example of importing `pop-badge`. Additionally, the `initialize({...})` function can receive the Poppy config.

```typescript
import { defineCustomElement } from "@poppy-ui/core/components/pop-badge.js";
import { initialize } from "@poppy-ui/core/components";

// Initializes the Poppy config
initialize();

// Defines the `pop-badge` web component
defineCustomElement();
```

Notice how we import from `@poppy-ui/core/components` as opposed to `@poppy-ui/core`. This helps bundlers pull in only the code that is needed.

The `defineCustomElement` function will automatically define the component as well as any child components that may be required.

For example, if you wanted to use `pop-modal`, you would do the following:

```typescript
import { defineCustomElement } from "@poppy-ui/core/components/pop-modal.js";
import { initialize } from "@poppy-ui/core/components";

// Initializes the Poppy config
initialize();

// Defines the `pop-modal` and child `pop-backdrop` web components.
defineCustomElement();
```

The `defineCustomElement` function will define `pop-modal`, but it will also define `pop-backdrop`, which is a component that `pop-modal` uses internally.

### Using Overlay Controllers

When using an overlay controller, developers will need to define the overlay component before it can be used. Below is an example of using `modalController`:

```typescript
import { defineCustomElement } from '@poppy-ui/core/components/pop-modal.js';
import { initialize, modalController } from '@poppy-ui/core/components';

initialize();
defineCustomElement();

const showModal = async () => {
  const modal = await modalController.create({ ... });
  
  ...
}
```

## How to contribute

[Check out the CONTRIBUTE guide](/docs/CONTRIBUTING.md)

## Related
* [Stencil](https://stenciljs.com/)


## License

* [MIT](https://raw.githubusercontent.com/CheeseGrinder/poppy-ui/main/LICENSE)
