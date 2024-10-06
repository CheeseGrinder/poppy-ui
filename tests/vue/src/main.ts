import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

import { PoppyVue } from '@poppy-ui/vue';

import '@poppy-ui/vue/css/core.css';
import '@poppy-ui/vue/css/global.bundle.css';
import '@poppy-ui/vue/css/themes/dark.always.css';

createApp(App)
  // @ts-ignore: PLugin type does not match
  .use(PoppyVue)
  .mount('#app');
