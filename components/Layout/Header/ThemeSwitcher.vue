<template>
  <div class="relative transition-300 w-11 h-6 rounded-full bg-[#E9E9EA] cursor-pointer p-0.5 dark:bg-white/25"
    @click="setTheme">
    <div class="absolute w-5 h-5 transition-300 bg-white shadow-switcher rounded-full flex items-center justify-center"
      :class="[theme === 'light' ? 'left-0.5' : 'left-[1.35rem]']">
      <Transition name="scale-fade" mode="out-in">
        <img :key="theme" :src="theme === 'light'
            ? '/images/theme/sun.svg'
            : '/images/theme/moon.svg'
          " class="text-xs" alt="image" />
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useTheme } from "~/store/useTheme";

const storeTheme = useTheme();

const theme = computed(() => storeTheme?.theme);
interface Emits {
  (e: "change-theme", theme: string): void;
}
const $emit = defineEmits<Emits>();

const setTheme = () => {
  storeTheme.changeTheme();
  $emit("change-theme", storeTheme.theme);
};

onMounted(() => {
  $emit("change-theme", storeTheme.theme);
});
</script>
