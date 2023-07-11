import './assets/css/main.css'
import './assets/css/iconfont.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import languageConfig from './language.json'

console.log(languageConfig)
// 配置i18n
const i18n = createI18n({
    globalInjection: true, // 全局生效$t 
    legacy: false,
    locale: 'zhCN',
    fallbackLocale: 'zhCN',
    languageConfig,
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
