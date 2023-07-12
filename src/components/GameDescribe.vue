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


const instance = getCurrentInstance() // 当前组件this

const props = defineProps(['gameData'])
const version = ref('')
const describe = ref('')
const options = ref()

// 匹配版本描述
const matchDescribe = (value: any, option: any) => {
    describe.value = option.describe
}


</script>
    
<style scoped lang="less"></style>