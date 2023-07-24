import { createI18n } from "vue-i18n";
import zhCN from "./zh-CN";
import enUS from "./en-US";
import ruRU from "./ru-RU";

export const i18n = createI18n({
    legacy: false, // 使用 Composition API 模式，则需要将其设置为false
    locale: "zhCN", // 默认显示语言
    messages: {
        zhCN,
        enUS,
        ruRU
    },
});
