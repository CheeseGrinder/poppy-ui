import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { PoppyVue } from '@poppy-ui/vue'

createApp(App)
  .use(PoppyVue)
  .mount('#app')
