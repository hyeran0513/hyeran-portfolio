// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  vite: {
    css: {
      preprocessorOptions: {
          scss: {
              additionalData: '@import "@/assets/scss/_mixins.scss";',
          },
      },
    },
  },
  css : [
    "@/assets/scss/main.scss"
  ],
  modules: ['nuxt-font-loader'],
  fontLoader: {
    local: [
      {
        src: '/fonts/elice/EliceDigitalBaeum_Regular.woff2',
        family: 'EliceDigitalBaeum',
        weight: '400',
        style: 'normal'
      },
      {
        src: '/fonts/elice/EliceDigitalBaeum_Bold.woff2',
        family: 'EliceDigitalBaeum',
        weight: 'bold',
        style: 'normal'
      },
      {
        src: '/fonts/icomoon/icomoon.ttf',
        family: 'iconFont',
        weight: 'normal',
        style: 'normal',
        display: 'block',
      }
    ]
  }
})