<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="darkTheme">

    <n-layout>

      <!-- 导航 -->
      <n-layout-header>
        <Navigation />
      </n-layout-header>

      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
          侧栏
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
          内容区
        </n-layout-content>
      </n-layout>

      <n-layout-footer>页脚</n-layout-footer>

    </n-layout>

  </n-config-provider>
</template>
  
<script setup lang='ts'>
import Navigation from '@/views/Navigation.vue'

import { zhCN, dateZhCN, enUS, dateEnUS, ruRU, dateRuRU, darkTheme } from 'naive-ui'
</script>
  
<style scoped lang="less">
.n-layout-header,
.n-layout-footer {
  height: 80px;
  display: flex;
  align-items: center;
}

.n-layout-sider {
  height: calc(100vh - 160px) !important;
}
</style>