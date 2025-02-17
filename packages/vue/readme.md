<p align="center">
  <a href="#">
    <img alt="Poppy" src="https://github.com/CheeseGrinder/poppy-ui/blob/main/.github/assets/logo.png?raw=true" width="60" />
  </a>
</p>

<h1 align="center">
  Poppy UI - Vue
</h1>

Poppy UI integration for Vue 3 apps.

## Install
```sh
npm install @poppy-ui/vue
```
*if the command fails, check the section [how to use](../../readme.md#how-to-use) in the root readme*

## Configuration
The configuration is minimal and easy
```ts
// main.ts
import poppyVue from '@poppy-ui/vue';
import { createApp } from 'vue';
import App from './App.vue';

import '@poppy-ui/vue/css/core.css';
import '@poppy-ui/vue/css/themes/light.always.css';

createApp(App)
  .use(poppyVue)
  .mount('#app');
```

And your done, happy coding 🎉

## Contributing

See our [Contributing Guide](https://github.com/CheeseGrinder/poppy-ui/blob/main/docs/CONTRIBUTING.md).
