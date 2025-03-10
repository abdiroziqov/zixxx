<template>
  <header
    :class="{
      'bg-transparent': !isScrolled,
      'bg-black': isScrolled,
      'fixed !w-full': isHomeRoute,
      relative: !isHomeRoute,
    }"
    class="z-10 transition-all duration-300"
  >
    <div class="container">
      <div class="flex justify-between items-center py-4">
        <a  href="/">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        <div>
          <ul class="flex gap-4 text-white">
            <li
              v-for="(link, index) in quickLinks"
              :key="'quick-' + index"
              class="mb-2"
            >
              <NuxtLink
                :to="link?.links"
                class="hover:text-orange text-[#efefef] duration-300 dark:text-red-500"
                >{{ link?.name }}</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-5">
          <LayoutHeaderThemeSwitcher @change-theme="updateTheme" />
          <LayoutHeaderLangSwitcher
              :active="langSwitcherActive"
              @change="langSwitcherActive = $event"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

const { t } = useI18n()
const route = useRoute()
const isScrolled = ref(false)
const langSwitcherActive = ref(false)

const isHomeRoute = computed(() => route.path === '/')


const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


const quickLinks = [
  {
    name: t('home'),
    links: '/',
  },
  {
    name: t('products'),
    links: '/products',
  },
  {
    name: t('about_us'),
    links: '/about-us',
  },
  {
    name: t('contact'),
    links: '/contact',
  },
]


const currentTheme = ref('dark')
const updateTheme = (val: string) => {
  currentTheme.value = val
}
</script>

<style scoped>
li {
  @apply text-white;
}

header {
  top: 0;
  z-index: 10000;
}
</style>
