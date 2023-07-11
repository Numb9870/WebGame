import './assets/css/main.css'
import './assets/css/iconfont.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from "vue-i18n";
import { i18n } from '@/Lang/i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
