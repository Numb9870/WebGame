<template>
    <n-grid x-gap="24" :cols="24">

        <!-- 导航左侧分类 -->
        <n-gi :span="14">
            <n-menu v-model="activeKey" mode="horizontal" :options="menuOptions" />
        </n-gi>

        <!-- 搜索框 -->
        <n-gi :span="6">
            <n-input size="large" round :placeholder="t('NavigationInputPlaceholder')" />
        </n-gi>

        <!-- 语言切换/深色明亮模式/个人信息 -->
        <n-gi :span="4" class="nav-last-module">
            <!-- 语言切换 -->
            <n-dropdown trigger="hover" show-arrow :options="languageOptions" @select="handleLanguageSelect">
                <n-button strong secondary>
                    <template #icon>
                        <n-icon>
                            <LanguageOutline />
                        </n-icon>
                    </template>
                    {{ SystemConfigStore.NDateLocale }}
                </n-button>
            </n-dropdown>
            <!-- 深色明亮模式--bug:首次渲染时不显示自定义template中的sort（unchecked-icon） -->
            <n-switch v-model:value="theme" size="large" @update:value="handleThemeChange">
                <template #checked-icon>
                    <n-icon :component="MoonStars" />
                </template>
                <template #unchecked-icon>
                    <n-icon :component="Sun" />
                </template>
            </n-switch>
            <!-- 个人信息 -->
            <n-button type="info" text size="medium" @click="loginEvent">登陆</n-button>
            <n-button type="info" text size="medium" @click="loginEvent">注册</n-button>

        </n-gi>

    </n-grid>
</template>
    
<script setup lang='ts'>
import { NIcon, useMessage, type MenuOption, type DropdownOption } from 'naive-ui'
import { GameControllerOutline, LanguageOutline } from '@vicons/ionicons5'
import { FistRaised } from '@vicons/fa'
import { H5, Sun, MoonStars } from '@vicons/tabler'
import { Md3DRotationOutlined, SourceFilled } from '@vicons/material'
import { LogoVmware, ContentDeliveryNetwork } from '@vicons/carbon'
import useLocale from '@/Lang/useI18n'
import { useSystemConfigStore } from '@/stores'
import { RouterLink } from 'vue-router'

// 组件内公用
onUnmounted(() => {
    instance?.proxy?.$Bus.off("changeTheme")
    instance?.proxy?.$Bus.off("changeLanguage")
})
const props = defineProps(['theme'])
const instance = getCurrentInstance() // 当前组件this
const SystemConfigStore = useSystemConfigStore() // 系统设置store
const message = useMessage() // 使用naveu-ui的message
const { changeLocale, t } = useLocale() // i18n实例化以及一些常用方法


/* =============================导航菜单配置项==================================== */
const activeKey = ref('')   // 菜单当前的选中值
function renderIcon(icon: Component) { // 渲染vicons
    return () => h(NIcon, null, { default: () => h(icon) })
}
function renderFontIcon(icon: String) { // 渲染fonticon
    return () => h("svg", { class: "fonticon icon", "aria-hidden": "true" }, h("use", { "xlink:href": `#${icon}` }))
}
const menuOptions: MenuOption[] = [ // 菜单的数据
    {   // logo
        label: () => h(
            RouterLink,
            {
                to: {
                    name: "Main"
                },
            },
            { default: () => 'WebGame' }
        ),
        key: 'WebGameLogo',
        icon: renderIcon(GameControllerOutline)
    },
    {   // H5类的游戏
        label: "H5Game",
        key: "H5Game",
        children: [
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                name: 'H5FightingGames',
                                query: {
                                    type: 'H5Game',
                                    sort: 'H5FightingGames'
                                }
                            }
                        },
                        { default: () => t('NavbarItem.Fighting') }
                    ),
                key: 'H5FightingGames',
                icon: renderFontIcon("icon-sanda")
            },
            {
                label: () =>
                    h(
                        RouterLink,
                        {
                            to: {
                                name: 'H5PuzzleGames',
                                query: {
                                    type: 'H5Game',
                                    sort: 'H5PuzzleGames'
                                }
                            }
                        },
                        { default: () => t('NavbarItem.Puzzle') }
                    ),
                key: 'H5PuzzleGames',
                icon: renderFontIcon("icon-yizhipintu")
            }
        ],
        icon: renderIcon(H5)
    },
    {   // 3D类的游戏
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
    {   // 网络类的游戏
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
    {   // 模拟器游戏
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
    },
    {   // 游戏资源
        label: "GameSource",
        key: "GameSource",
        children: [
            {
                label: 'null',
                key: 'null',
            }
        ],
        icon: renderIcon(SourceFilled)
    }
]

/* ================================搜索框======================================= */



/* ================================语言切换======================================= */
const languageOptions = [ // 下拉配置项
    {
        label: '中文',
        key: 'zhCN',
    },
    {
        label: 'English',
        key: "enUS"
    },
    {
        label: 'Россия',
        key: 'ruRU'
    }
]
const handleLanguageSelect = async (key: string, option: DropdownOption) => {  // 语言切换

    changeLocale(key as string)

    if (key == "zhCN") {
        SystemConfigStore.changeLanguageStore(key, "中文")
    } else if (key == "enUS") {
        SystemConfigStore.changeLanguageStore(key, "English")
    } else {
        SystemConfigStore.changeLanguageStore(key, "Россия")
    }

    instance?.proxy?.$Bus.emit("changeLanguage", key)

}


/* ==============================深色明亮模式===================================== */
const theme = ref(props.theme)
const handleThemeChange = async function (value: boolean) {
    instance?.proxy?.$Bus.emit("changeTheme", { type: value })
}


/* ============================个人信息=================================== */
const loginEvent = async () => {
    message.info(
        "还没做，嘻嘻。。",
        {
            keepAliveOnHover: true
        }
    )
}

</script>
    
<style scoped lang="less">
.nav-last-module {
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>