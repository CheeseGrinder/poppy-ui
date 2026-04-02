import { createApp } from 'vue'
import App from './App.vue'
import { PoppyUi } from './plugin-vue'

import './style.css'

const app = createApp(App)
app.use(PoppyUi, {
  debug: true,
  size: 'lg',
  components: {},
})

app.mount('#app')
