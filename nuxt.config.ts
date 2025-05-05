// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'canonical',
          href: 'https://zixx.uz',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
      ],
      title: 'ZIXX - сухие строительные смеси’',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/eslint", '@nuxtjs/i18n' ,'@nuxtjs/leaflet'],
  fonts: {
    families: [{ name: 'Roboto', provider: 'google' }],
  },
  compatibilityDate: "2024-12-12",
  runtimeConfig: {
    public: {
      apiBase: process.env.VITE_API_BASE,
    },
  },
  i18n: {
    langDir: 'locales',
    baseUrl: '',
    locales: [
      { code: 'en', iso: 'en', file: 'en' },
      { code: 'ru', iso: 'ru-RU', file: 'ru' },
      { code: 'uz', iso: 'uz', file: 'uz' },
    ],
    lazy: true,
    useCookie: true,
    cookieKey: 'locale',
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      onlyOnRoot: true, // recommended
      fallbackLocale: 'oz',
    },
  },
});