<template>
  <nav
      :class="{
      'w-full h-screen flex flex-col gap-6 transition-300': showMenu,
    }"
      class="pt-3 pb-4 duration-200 hero-shadow"
  >
    <div class="container flex items-center justify-between h-10">
      <transition mode="out-in" name="page-change">
        <span :key="showMenu" class="cursor-pointer" @click="toggleMenu">
          <i
              v-if="!showMenu"
              class="duration-200 icon-menu text-2.5xl text-white"
          />
          <svg class="text-2.5xl dark:text-white text-dark" v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"/></svg>
        </span>
      </transition>
      <a href="/">
        <img class="hidden dark:block" src="/logo.svg" alt="logo" />
        <img class="dark:hidden" src="/logo1.svg" alt="logo" />
      </a>
     <div class="flex items-center">
       <LayoutHeaderThemeSwitcher @change-theme="updateTheme" />
       <LayoutHeaderLangSwitcher
           :active="langSwitcherActive"
           @change="langSwitcherActive = $event"
           main-color="!text-red"
           variant="default"
       />
     </div>
    </div>
    <div
        v-if="showMenu"
        :class="{ '!w-full overflow-y-auto !opacity-100 !block': showMenu }"
        class="container"
    >


      <ul class="flex-col gap-4 text-white divide-y divide-dark dark:divide-white divide-solid" >
        <li
            v-for="(link, index) in quickLinks"
            :key="'quick-' + index"
            class="my-2"
        >
          <NuxtLink
              :to="link?.links"
              class="hover:text-orange text-dark dark:text-white duration-300 leading-[150%] !font-semibold  text-base hover:text-red my-3"
          >{{ link?.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'



const { t } = useI18n()
const showMenu = ref(false)
const langSwitcherActive = ref(false)

const emits = defineEmits<{
  (event: 'closeMobileHeader', isShow: boolean): void
}>()

const toggleMenu = () => {
  showMenu.value = !showMenu.value
  emits('closeMobileHeader', showMenu.value)
}
const currentTheme = ref("dark");
const updateTheme = (val: string) => {
  currentTheme.value = val;
};

watch(
    () => showMenu.value,
    (val) => {
      document.body.style.overflow = val ? 'hidden' : 'auto'
    }
)


const quickLinks = [
  {
    name: t("home"),
    links: "/",
  },
  {
    name: t("products"),
    links: "/products",
  },
  {
    name: t("about_us"),
    links: "/about-us",
  },
  {
    name: t("contact"),
    links: "/contact",
  },
];
</script>
