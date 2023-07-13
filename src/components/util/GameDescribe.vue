<template>
    <div>
        版本：
        <n-select :default-value="version" :options="options" :on-update:value="matchDescribe" />
    </div>
    <div>
        描述：
        {{ describe }}
    </div>
</template>
    
<script setup lang='ts'>

// 初始化
onBeforeMount(() => {
    options.value = props.gameData
    describe.value = props.gameData[(props.gameData.length - 1)].describe
    version.value = props.gameData[(props.gameData.length - 1)].key
})

const props = defineProps(['gameData']) // 当前游戏的所有数据
const instance = getCurrentInstance() // 实例
const version = ref('') // 游戏版本
const describe = ref('')    // 版本描述
const options = ref()   // select展示游戏的所有版本

/* ***********************************选择游戏版本*********************************** */
const matchDescribe = (value: any, option: any) => {
    describe.value = option.describe
    instance?.proxy?.$Bus.emit("changeVersion", option.key)
}


</script>
    
<style scoped lang="less"></style>