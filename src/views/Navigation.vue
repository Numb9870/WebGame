<template>
    <n-grid x-gap="24" :cols="24">

        <!-- 导航左侧分类 -->
        <n-gi :span="10">
            <n-menu v-model="activeKey" mode="horizontal" :options="menuOptions" />
        </n-gi>

        <!-- 搜索框 -->
        <n-gi :span="8">
            <n-input size="large" round placeholder="大" />
        </n-gi>

        <!-- 语言切换/个人信息/网站设置 -->
        <n-gi :span="6">
            <n-dropdown trigger="hover" :options="languageOptions">
                <n-button strong secondary>
                    <template #icon>
                        <n-icon>
                            <LanguageOutline />
                        </n-icon>
                    </template>
                </n-button>
            </n-dropdown>
        </n-gi>

    </n-grid>
</template>
    
<script setup lang='ts'>
import { NIcon, type MenuOption } from 'naive-ui'
import { ref, h, type Component } from 'vue';
import { GameControllerOutline, LanguageOutline } from '@vicons/ionicons5'
import { FistRaised } from '@vicons/fa'
import { H5 } from '@vicons/tabler'
import { Md3DRotationOutlined } from '@vicons/material'
import { LogoVmware, ContentDeliveryNetwork } from '@vicons/carbon'

/* ================================导航菜单配置项======================================= */
const activeKey = ref('')   // 菜单当前的选中值
function renderIcon(icon: Component) { // 渲染vicons
    return () => h(NIcon, null, { default: () => h(icon) })
}
function renderFontIcon(icon: String) { // 渲染fonticon
    return () => h("svg", { class: "fonticon icon", "aria-hidden": "true" }, h("use", { "xlink:href": `#${icon}` }))
}
const menuOptions: MenuOption[] = [ // 菜单的数据
    {
        // logo
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
        // H5类的游戏
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
        // 3D类的游戏
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
        // 网络类的游戏
        label: "OLGame",
        key: "OLGame",
        children: [
            {
                label: '格斗类',
                key: 'FightingGames',
                icon: renderIcon(FistRaised)
            }
        ],
        icon: renderIcon(ContentDeliveryNetwork)
    },
    {
        // 模拟器游戏
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

/* ================================搜索框======================================= */


/* ================================语言切换======================================= */
const languageOptions = [
    {
        label: '中文',
        key: 'zhCN',
    },
    {
        label: 'English',
        key: "enUS"
    },
    {
        label: 'Русский язык',
        key: 'ruRU'
    }
]
/* ================================个人信息/网站设置======================================= */


</script>
    
<style scoped lang="less"></style>