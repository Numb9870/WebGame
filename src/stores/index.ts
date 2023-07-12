import { defineStore } from 'pinia'
import { Names } from './store-name'
import {  type GlobalTheme } from 'naive-ui'

export const useSystemConfigStore = defineStore(Names.SystemConfig, {

  state: () => ({
    theme: null,
    NLocale: "zhCN",
    NDateLocale: "dateZhCN"
  }),
  actions: {
    changeThemeStore(params: GlobalTheme | null) {
      this.theme = params as any
    },
    changeLanguageStore(NLocale: string, NDateLocale: string) {
      this.NLocale = NLocale
      this.NDateLocale = NDateLocale
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ['theme', 'NLocale', 'NDateLocale']
      },
    ],
  }

})
