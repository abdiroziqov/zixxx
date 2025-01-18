// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'canonical',
          href: 'https://zixx.uz',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/images/logo.svg' },
      ],
      title: 'Zixx',
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
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@nuxt/eslint", '@nuxtjs/i18n',],
  compatibilityDate: "2024-12-12",
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
    },
  },
  i18n: {
    langDir: 'locales',
    baseUrl: 'https://saylov.uza.uz',
    locales: [
      { code: 'en', iso: 'en', file: 'en' },
      { code: 'ru', iso: 'ru-RU', file: 'ru' },
      { code: 'uz', iso: 'uz', file: 'uz' },
    ],
    lazy: true,
    useCookie: true,
    cookieKey: 'locale',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      onlyOnRoot: true, // recommended
      fallbackLocale: 'oz',
    },
    defaultLocale: 'oz',
    strategy: 'prefix_and_default',
  },
});
