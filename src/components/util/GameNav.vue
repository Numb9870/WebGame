<template>
    <n-grid :cols="4" class="container">
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
</template>
    
<script setup lang='ts'>
import { MdSave } from '@vicons/ionicons4'
import { Grid } from '@vicons/carbon'
import { AppsList20Regular } from '@vicons/fluent'
import moment from 'moment'
import useLocale from '@/Lang/useI18n'
import { useSystemConfigStore } from '@/stores'

// 组件内公用
const { t } = useLocale() // i18n实例化以及一些常用方法
const SystemConfigStore = useSystemConfigStore() // 系统设置store


/* ================================切换展示的方式======================================= */
const changeShowDataTypeEvent = () => {
    if (SystemConfigStore.showDataType == "List") {
        SystemConfigStore.changShowDataType('Grid')
    } else {
        SystemConfigStore.changShowDataType('List')
    }
}

</script>

    
<style scoped lang="less">
.container {
    // 防止高度溢出
    height: 65px;
    max-height: 65px;

    // 内容区导航最右边的展开方式样式
    .puzzleGameList-nav-right {
        display: flex;
        justify-content: flex-end;
        margin-right: 20px;
    }

}
</style>