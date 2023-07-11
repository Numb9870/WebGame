import { computed } from "vue";
import { useI18n } from "vue-i18n";

export default function useLocale() {

    const i18n = useI18n(); //实例化i18n

    const currentLocale = computed(() => {
        return i18n.locale.value; // 获取当前语言设置
    });

    const changeLocale = (value: string) => { // 切换语言
        i18n.locale.value = value; //赋值切换语言
    };

    const t = i18n.t; //这里的 t 就是vue2中的 $t

    return {
        i18n,
        currentLocale,
        changeLocale,
        t,
    };
    
}