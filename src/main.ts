import './assets/css/main.css'
import './assets/css/iconfont.js'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import { i18n } from '@/Lang/i18n'
import mitt from 'mitt'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// i18n注册
app.use(i18n)

// 持久化注册
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)

// 路由注册
app.use(router)

// mitt注册
const Mit = mitt()
// 用于扩充组件实例类型以支持自定义全局属性。
declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}
// 注册全局Mit属性
app.config.globalProperties.$Bus = Mit


app.mount('#app')
