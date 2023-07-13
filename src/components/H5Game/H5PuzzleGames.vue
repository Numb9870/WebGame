<template>
    <n-layout>

        <n-layout-content content-style="padding: 0 10px;overflow: hidden;margin-top: 5px">

            <!-- 内容区的导航 -->
            <GameNav v-show="showGameNav"></GameNav>

            <!-- 内容的展示区 -->
            <n-scrollbar x-scrollable style="max-height: calc(100vh - 230px);">
                <router-view :type="route.query.type" :sort="route.query.sort"></router-view>
            </n-scrollbar>

        </n-layout-content>

    </n-layout>
</template>
    
<script setup lang='ts'>
import { useRouter, useRoute } from 'vue-router'


onUnmounted(() => {
    instance?.proxy?.$Bus.off('GoBack')
    instance?.proxy?.$Bus.off('PlayGame')
})
// 组件内公用
const instance = getCurrentInstance() // 实例
const router = useRouter() // 当前路由实例
const route = useRoute() // 当前路由
const showGameNav = ref(true) // 是否展示游戏列表导航



// 监听事件
instance?.proxy?.$Bus.on("GoBack", async function (params: any) {
    showGameNav.value = true    // 开启游戏列表的库源统计

})
instance?.proxy?.$Bus.on("PlayGame", async function () {
    showGameNav.value = false   // 关闭游戏列表的库源统计
})



</script>
    
<style scoped lang="less">
.n-layout {
    height: calc(100vh - 160px) !important;
}
</style>