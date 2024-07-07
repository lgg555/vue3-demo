import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// plugins
import ElementPlus from './plugins/element-plus'
import 'element-plus/dist/index.css' // 默认样式

const app = createApp(App)
app
  .use(ElementPlus)
  .mount('#app')
