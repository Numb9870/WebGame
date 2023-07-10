<template>
  <n-config-provider :locale="enUS" :date-locale="dateEnUS">

    <n-layout>
      <n-layout-header>导航</n-layout-header>

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
import { zhCN, dateZhCN, enUS, dateEnUS, ruRU, dateRuRU } from 'naive-ui'
</script>
  
<style></style>