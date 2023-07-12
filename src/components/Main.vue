<template>
    <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;">
            侧栏
        </n-layout-sider>
        <n-layout-content content-style="padding: 24px;">
            内容
        </n-layout-content>
    </n-layout>
</template>
    
<script setup lang='ts'>

</script>
    
<style scoped lang="less">
.n-layout-sider {
    height: calc(100vh - 160px) !important;
}
</style>