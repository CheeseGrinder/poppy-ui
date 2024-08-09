import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { PoppyVue } from '@poppy-ui/vue';
import { IonicVue } from '@ionic/vue';

createApp(App)
  .use(PoppyVue, {
    components: {
      'pop-button': {
        color: 'accent',
      },
    },
  })
  .use(IonicVue)
  .mount('#app');
