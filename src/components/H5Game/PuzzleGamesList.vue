<template>
    <n-layout>
        <n-layout-content content-style="padding: 0 24px;overflow: hidden;margin-top: 5px">

            <div v-if="!showPlayGame">

                <!-- 内容区的导航 -->
                <n-grid :cols="4">
                    <!-- 库源数量 -->
                    <n-gi :span="1">
                        <n-statistic :label="t('DatabaseSourceStatistics')" :value="1">
                            <template #prefix>
                                <n-icon>
                                    <md-save />
                                </n-icon>
                            </template>
                            <template #suffix>
                                / 0
                            </template>
                        </n-statistic>
                    </n-gi>
                    <!-- 最近更新 -->
                    <n-gi :span="1">
                        <n-statistic label="最近更新">
                            {{ moment(1689151626853).format('YYYY-MM-DD') }}
                        </n-statistic>
                    </n-gi>
                    <!-- 列表展开/图标展开 -->
                    <n-gi :span="2" class="puzzleGameList-nav-right">
                        <n-popover trigger="hover" placement="bottom">
                            <template #trigger>
                                <n-icon v-if="SystemConfigStore.showDataType == 'Grid'" size="40" @click="changeShowDataTypeEvent" :component="Grid" />
                                <n-icon v-if="SystemConfigStore.showDataType == 'List'" size="40" @click="changeShowDataTypeEvent" :component="AppsList20Regular" />
                            </template>
                            <span>{{ t('GridOrListPopover') }}</span>
                        </n-popover>
                    </n-gi>
                </n-grid>

                <!-- 内容的展示区 -->
                <n-scrollbar x-scrollable style="max-height: calc(100vh - 260px);">

                    <n-grid :cols="4" class="game-list-container">
                        <n-gi :span="1" v-for="(item, index) in   PuzzleGamesListArray  " :key="index" class="game-list-item">
                            <n-card :title="'作者：' + item.author" hoverable style="max-width: 300px;">
                                <template #cover>
                                    <img style="width: 100%;padding: 14px;" src="src/assets/img/PuzzleGamesCover/2048.png">
                                </template>
                                <template #>
                                    <GameDescribe :gameData="item.version"></GameDescribe>
                                </template>
                                <template #footer>
                                    <div style="display: flex;padding:0 12px 0 0;align-items: center;justify-content: space-between;">
                                        {{ '最后更新时间：' + item.updateTime }}
                                        <n-button size="medium" @click="playGame(item.GameName)">游玩</n-button>
                                    </div>
                                </template>

                            </n-card>
                        </n-gi>
                    </n-grid>

                </n-scrollbar>

            </div>

            <div v-if="showPlayGame">
                <router-view></router-view>
            </div>


        </n-layout-content>
    </n-layout>
</template>
    
<script setup lang='ts'>
import { MdSave } from '@vicons/ionicons4'
import { Grid } from '@vicons/carbon'
import { AppsList20Regular } from '@vicons/fluent'
import moment from 'moment'
import useLocale from '@/Lang/useI18n'
import PuzzleGamesListArray from './PuzzleGamesList.json'
import { useSystemConfigStore } from '@/stores'
import { useRouter } from 'vue-router'

// // 组件内公用
const { t } = useLocale() // i18n实例化以及一些常用方法
const SystemConfigStore = useSystemConfigStore() // 系统设置store
const router = useRouter() // 路由实例
const showPlayGame = ref(false)

/* ================================切换展示的方式======================================= */
const changeShowDataTypeEvent = () => {
    if (SystemConfigStore.showDataType == "List") {
        SystemConfigStore.changShowDataType('Grid')
    } else {
        SystemConfigStore.changShowDataType('List')
    }
}


/* ================================游玩选择的游戏版本======================================= */
const playGame = (GameName: string) => {
    showPlayGame.value = true
    router.push('/PuzzleGamesList/2048')
}

</script>
    
<style scoped lang="less">
.n-layout {
    height: calc(100vh - 160px) !important;

    // 内容区导航最右边的展开方式样式
    .puzzleGameList-nav-right {
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
    }

    .game-list-container {
        justify-items: center;

        .game-list-item {
            margin-top: 10px;
            margin-bottom: 3px;
        }
    }
}
</style>