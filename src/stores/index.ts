import { defineStore } from 'pinia'
import { Names } from './store-name'
import { type GlobalTheme } from 'naive-ui'

export const useSystemConfigStore = defineStore(Names.SystemConfig, {

  state: () => ({
    theme: null,
    NLocale: "zhCN",
    NDateLocale: "中文",
    showDataType: "Grid"
  }),
  actions: {
    changeThemeStore(type: boolean | null) {
      this.theme = type as any
    },
    changeLanguageStore(NLocale: string, NDateLocale: string) {
      this.NLocale = NLocale
      this.NDateLocale = NDateLocale
    },
    changShowDataType(type: string) {
      this.showDataType = type
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ['theme', 'NLocale', 'NDateLocale', 'showDataType']
      },
    ],
  }

})
