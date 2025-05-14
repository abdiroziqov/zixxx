<template>
  <nav
      :class="{
      'w-full h-screen flex flex-col gap-6 transition-300': showMenu,
    }"
      class="pt-3 pb-4 duration-200"
  >
    <div class="container flex items-center justify-between h-10">
      <transition mode="out-in" name="page-change">
        <span :key="showMenu" class="cursor-pointer" @click="toggleMenu">
          <i
              v-if="!showMenu"
              class="duration-200 icon-menu text-2.5xl"
          />
          <i
              v-else
              class="duration-200 icon-close text-2.5xl"
          />
        </span>
      </transition>
      <a href="/">
        <img class="hidden dark:block" src="/logo.svg" alt="logo" />
        <img class="dark:hidden" src="/logo1.svg" alt="logo" />
      </a>
      <LayoutHeaderLangSwitcher
          :active="langSwitcherActive"
          @change="langSwitcherActive = $event"
          variant="default"
      />
    </div>
    <div
        v-if="showMenu"
        :class="{ '!w-full overflow-y-auto !opacity-100 !block': showMenu }"
        class="container"
    >


      hello man
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const showMenu = ref(false)
const langSwitcherActive = ref(false)

const emits = defineEmits<{
  (event: 'closeMobileHeader', isShow: boolean): void
}>()

const toggleMenu = () => {
  showMenu.value = !showMenu.value
  emits('closeMobileHeader', showMenu.value)
}

watch(
    () => showMenu.value,
    (val) => {
      document.body.style.overflow = val ? 'hidden' : 'auto'
    }
)
</script>
