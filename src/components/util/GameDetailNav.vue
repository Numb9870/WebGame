<template>
    <n-button ghost @click="GoBack">
        <template #icon>
            <n-icon>
                <ArrowBack />
            </n-icon>
        </template>
        返回
    </n-button>
</template>
    
<script setup lang='ts'>
import { useRoute, useRouter } from 'vue-router'
import { ArrowBack } from '@vicons/tabler'

const route = useRoute()
const router = useRouter()
const instance = getCurrentInstance() // 实例

const GoBack = () => {
    instance?.proxy?.$Bus.emit("GoBack")
    router.push({ name: route.query.sort as string, query: { type: route.query.type, sort: route.query.sort } })
}
</script>
    
<style></style>