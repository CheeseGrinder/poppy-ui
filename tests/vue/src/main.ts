import { createApp } from 'vue';
import App from './App.vue';
import PoppyVue from '@poppy-ui/vue';


import './style.css';

createApp(App)
  .use(PoppyVue)
  .mount('#app');
