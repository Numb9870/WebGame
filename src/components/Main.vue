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
import router from '@/router'


/* *********************************配置进度条********************************* */
const loadingBar = useLoadingBar() // 进度条实例
router.beforeEach((to, from) => { // 全局前置守卫
    loadingBar.start()
    return true
})
router.afterEach((to, from) => { // 全局后置钩子
    loadingBar.finish()
})


</script>
    
<style scoped lang="less">
.n-layout-sider {
    height: calc(100vh - 160px) !important;
}
</style>