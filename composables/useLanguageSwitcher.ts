import { useI18n } from 'vue-i18n'

export const useLanguageSwitcher = () => {
  const { locale, setLocale } = useI18n()

  const languagesList = [
    {
      name: "O'zbekcha",
      code: 'uz',
      flag: '/static/front/svg/flag/mobile/uz.svg',
    },
    {
      name: 'English',
      code: 'en',
      flag: '/static/front/svg/flag/mobile/en.svg',
    },
    {
      name: 'Русский',
      code: 'ru',
      flag: '/static/front/svg/flag/mobile/global.svg',
    },
  ]

  const currentLanguage = computed(() =>
    languagesList.find((lang) => lang.code === locale.value)
  )

  async function changeLocale(_locale: string) {
    await setLocale(_locale)
    useCookie('locale').value = _locale
    locale.value = _locale
    window.location.reload()
  }

  return { currentLanguage, languagesList, changeLocale }
}
