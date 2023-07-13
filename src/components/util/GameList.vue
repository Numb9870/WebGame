<template>
    <n-grid :cols="4" class="game-list-container">

        <n-gi :span="1" v-for="(item, index) in   PuzzleGamesListArray  " :key="index" class="game-list-item">

            <n-card :title="'作者：' + item.author" hoverable style="max-width: 300px;">
                <template #cover>
                    <img style="width: 100%;padding: 14px;" :src="item.src">
                </template>
                <template #>
                    <GameDescribe :gameData="item.version"></GameDescribe>
                </template>
                <template #footer>
                    <div style="display: flex;padding:0 12px 0 0;align-items: center;justify-content: space-between;">
                        {{ '最后更新时间：' + item.updateTime }}
                        <n-button size="medium" @click="playGame(item.GameName)">
                            <template #icon>
                                <n-icon>
                                    <GameConsole />
                                </n-icon>
                            </template>
                            游玩
                        </n-button>
                    </div>
                </template>
            </n-card>

        </n-gi>

    </n-grid>
</template>
    
<script setup lang='ts'>
import PuzzleGamesListArray from '../H5Game/H5PuzzleGamesList.json'
import { GameConsole } from '@vicons/carbon'
import { useRouter } from 'vue-router'

onUnmounted(() => {
    instance?.proxy?.$Bus.off("changeVersion")
})

// 组件内公用
const router = useRouter() // 路由实例
const instance = getCurrentInstance() // 实例
const props = defineProps(['type', 'sort']) // 游戏的类型与分组
const version = ref<string | null>(null) // 游戏的版本
const loadingBar = useLoadingBar() // 进度条

// 监听切换游戏版本事件
instance?.proxy?.$Bus.on("changeVersion", async function (key: any) {
    version.value = key
})


/* ********************************游玩加载游戏************************************* */
const name = ref('')
const playGame = (GameName: string) => {
    loadingBar.start() // 开始加载进度条
    instance?.proxy?.$Bus.emit("PlayGame") // 加载所选游戏

    if (version.value == null) { // 匹配游戏版本
        // version为null时匹配最新版本
        PuzzleGamesListArray.map(item => {
            version.value = item.version[(item.version.length - 1)].key
        })
        name.value = GameName + '-' + version.value
    } else {
        name.value = GameName + '-' + version.value
    }

    router.push({ name: name.value, query: { type: props.type, sort: props.sort, GameName, version: version.value } })
}
</script>
    
<style scoped lang="less">
.game-list-container {
    justify-items: center;

    .game-list-item {
        margin-top: 10px;
        margin-bottom: 3px;
    }
}
</style>