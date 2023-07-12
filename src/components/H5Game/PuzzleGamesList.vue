<template>
    <n-layout>
        <n-layout-content content-style="padding: 24px;">
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
                    <n-icon size="40" :component="Grid" />
                    <n-icon size="40" :component="AppsList20Regular" />
                </n-gi>
            </n-grid>
            <!-- 内容的展示区 -->
            <n-grid :cols="4" class="content">
                <n-gi :span="1">
                    <n-card title="带封面的卡片">
                        <template #cover>
                            <img style="width: 100%;padding: 14px;" src="src/assets/img/PuzzleGamesCover/2048.png">
                        </template>
                        卡片内容
                    </n-card>
                </n-gi>
            </n-grid>

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

console.log(PuzzleGamesListArray)
const { t } = useLocale()

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

    .content{
        margin-top: 10px;
    }
}
</style>