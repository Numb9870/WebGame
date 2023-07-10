<template>
    <n-menu v-model="activeKey" mode="horizontal" :options="menuOptions" />
</template>
    
<script setup lang='ts'>
import { NIcon, type MenuOption } from 'naive-ui'
import { ref, h, type Component } from 'vue';
import { GameControllerOutline } from '@vicons/ionicons5'
import { FistRaised } from '@vicons/fa'
import { H5 } from '@vicons/tabler'
import { Md3DRotationOutlined } from '@vicons/material'
import { LogoVmware } from '@vicons/carbon'

const activeKey = ref('')
function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
function renderFontIcon(icon: String) {
    return () => h("svg", { class: "fonticon icon", "aria-hidden": "true" }, h("use", { "xlink:href": `#${icon}` }))
}
const menuOptions: MenuOption[] = [
    {
        label: () => {
            return h(
                'a',
                {
                    href: '/',
                    rel: 'WebGame'
                },
                'WebGame',
            )
        },
        key: 'WebGameLogo',
        icon: renderIcon(GameControllerOutline)
    },
    {
        label: "H5Game",
        key: "H5Game",
        children: [
            {
                label: '格斗类',
                key: 'FightingGames',
                icon: renderIcon(FistRaised)
            }
        ],
        icon: renderIcon(H5)
    },
    {
        label: "3DGame",
        key: "3DGame",
        children: [
            {
                label: '格斗类',
                key: 'FightingGames',
                icon: renderIcon(FistRaised)
            }
        ],
        icon: renderIcon(Md3DRotationOutlined)
    },
    {
        label: "VMGame",
        key: "VMGame",
        children: [
            {
                label: 'PSP',
                key: 'PSP',
                icon: renderFontIcon("icon-pspgame")
            }
        ],
        icon: renderIcon(LogoVmware)
    }
]
</script>
    
<style scoped lang="less">

</style>