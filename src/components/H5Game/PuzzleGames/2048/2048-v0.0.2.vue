<template>
    <div class="conyainer">
        <GameDetailNav></GameDetailNav>
    </div>
</template>
    
<script setup lang='ts'>
onMounted(() => {
    loadingBar.finish()
})

const loadingBar = useLoadingBar() // 进度条


</script>
    
<style></style>