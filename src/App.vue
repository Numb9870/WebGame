<template>
  
    <n-config-provider :theme="theme" :locale="locale" :date-locale="dateLocale">

      <n-message-provider>

        <n-layout>

          <!-- 导航 -->
          <n-layout-header>
            <Navigation :theme="theme !== null" />
          </n-layout-header>

          <router-view></router-view>

          <n-layout-footer>页脚</n-layout-footer>

        </n-layout>

      </n-message-provider>

    </n-config-provider>
  
</template>
  
<script setup lang='ts'>
import Navigation from '@/views/Navigation.vue'
import { zhCN, dateZhCN, enUS, dateEnUS, ruRU, dateRuRU, darkTheme, type NLocale, type NDateLocale, type GlobalTheme } from 'naive-ui'
import { useSystemConfigStore } from './stores';
import useLocale from '@/Lang/useI18n'
import { RouterLink } from 'vue-router'

// 组件内公用
const theme = ref<GlobalTheme | null>(null) // 主题
const locale = ref<NLocale | null>(null) // 语言类型
const dateLocale = ref<NDateLocale | null>(null) // 语言数据
const instance = getCurrentInstance() // 实例
const SystemConfigStore = useSystemConfigStore() // 系统设置store
const { changeLocale } = useLocale() // i18n实例化以及一些常用方法

// init
onBeforeMount(() => {
  // 修改主题
  theme.value = SystemConfigStore.theme
  // 修改语言
  if (SystemConfigStore.NLocale == "zhCN") {
    locale.value = zhCN
    dateLocale.value = dateZhCN
    changeLocale("zhCN")
  } else if (SystemConfigStore.NLocale == "enUS") {
    locale.value = enUS
    dateLocale.value = dateEnUS
    changeLocale("enUS")
  } else {
    locale.value = ruRU
    dateLocale.value = dateRuRU
    changeLocale("ruRU")
  }
})


// 监听修改主题的变化
instance?.proxy?.$Bus.on("changeTheme", async function (params: any) {
  if (params.type) {
    theme.value = darkTheme
    SystemConfigStore.changeThemeStore(darkTheme)
  } else {
    theme.value = null
    SystemConfigStore.changeThemeStore(null)
  }
})

// 监听修改语言的变化
instance?.proxy?.$Bus.on("changeLanguage", async function (params: any) {
  if (params == "zhCN") {
    locale.value = zhCN
    dateLocale.value = dateZhCN
  } else if (params == "enUS") {
    locale.value = enUS
    dateLocale.value = dateEnUS
  } else {
    locale.value = ruRU
    dateLocale.value = dateRuRU
  }
})

</script>
  
<style scoped lang="less">

.n-layout-header,
.n-layout-footer {
  height: 80px;
  display: flex;
  align-items: center;
}
</style>