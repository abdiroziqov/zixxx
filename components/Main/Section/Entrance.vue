<template>
  <section class="section-shell relative min-h-screen overflow-hidden flex items-center text-white">
    <picture class="absolute inset-0 z-0">
      <source media="(max-width: 767px)" :srcset="isDark ? '/images/main.png' : '/images/main-light.png'">
      <img
        class="h-full w-full object-cover pointer-events-none"
        :src="isDark ? '/images/main.png' : '/images/main-light.png'"
        alt=""
        width="1920"
        height="1080"
        decoding="async"
        fetchpriority="high"
      />
    </picture>

    <div class="absolute inset-0 z-1 bg-gradient-to-r from-black/60 via-black/35 to-black/10"></div>
    <div class="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-orange/30 blur-3xl"></div>
    <div class="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-[#ffb04a]/25 blur-3xl"></div>

    <div class="container relative z-2">
      <div class="glass-panel rounded-3xl max-w-xl p-6 md:p-8 lg:p-10 text-slate-900 dark:text-white">
        <p class="text-3xl md:text-5xl font-display font-semibold mb-5 leading-120" data-aos="fade-up">
          {{ $t("room_renovation") }}
        </p>
        <p class="text-sm md:text-base text-slate-600 dark:text-white/80 leading-140" data-aos="fade-up" data-aos-delay="120">
          {{ $t("facade_materials_text") }}
        </p>
        <div class="flex gap-5 max-w-[340px] w-full mt-8" data-aos="fade-up" data-aos-delay="220">
          <BaseButton
            :variant="'border'"
            :text="t('see_more')"
            @click="$router.push('/about-us')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const themeCookie = useCookie("theme");
const isDark = computed(() => themeCookie.value === "dark");
</script>

<style scoped></style>
