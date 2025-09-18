// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify , { transformAssetUrls } from "vite-plugin-vuetify"

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  build : {
    transpile : ['vuetify','@vuepic/vue-datepicker']
  },

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport : true }))
      })
    },

    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@vueuse/nuxt',
  ],

  runtimeConfig : {
    public : {

    },
    private : {
      // API_HOST : process.env.API_HOST,
      // API_PORT : process.env.API_PORT,
      // API_PATH : process.env.API_PATH,
      // API_ENDPOINT : process.env.API_ENDPOINT
    },
  },

  vite : {
    vue : {
      template : {
        transformAssetUrls
      }
    }
  }
})