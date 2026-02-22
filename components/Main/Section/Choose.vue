<template>
  <section class="section-shell py-10 md:py-20 bg-white dark:bg-[#0f131c]">
    <div class="absolute inset-0 bg-grid opacity-30"></div>
    <div class="container relative flex flex-col lg:flex-row justify-between gap-10">
      <!-- Left Side - Text & Features -->
      <div class="lg:w-[465px]" data-aos="fade-right">
        <h2
            class="text-2xl md:text-3xl font-display font-semibold leading-130 tracking-[1px] mb-8 text-gray-800 dark:text-white"
        >
          {{ $t("why_peoples_choose_us") }}
        </h2>

        <div
            v-for="(item, index) in features"
            :key="index"
            class="flex gap-4 items-start mb-4 rounded-2xl p-4 bg-white/70 dark:bg-white/5 border border-white/40 dark:border-white/10"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 80"
        >
          <div class="size-9 rounded-full bg-orange/15 flex items-center justify-center">
            <img class="size-4" src="/images/true.svg" alt="icon" />
          </div>
          <div class="tracking-[0.2px]">
            <h3 class="font-semibold leading-130 dark:text-white text-gray-800">
              {{ item.title }}
            </h3>
            <p class="text-gray-500 dark:text-gray-300 text-sm opacity-80">
              {{ item.description }}
            </p>
          </div>
        </div>

        <BaseButton
            :text="t('about_company')"
            size="sm"
            variant="orange"
            @click="$router.push('/about-us')"
        />
      </div>

      <div class="relative flex justify-center" data-aos="fade-left">
        <div class="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-orange/30 blur-3xl"></div>
        <div class="relative">
          <img
              src="/public/images/worker.svg"
              alt="Worker"
              class="relative w-full max-w-md lg:max-w-lg hidden dark:block mt-5 md:mt-0 rounded-3xl shadow-2xl ring-1 ring-white/10"
          />
          <img
              src="/public/images/worker-light.svg"
              alt="Worker"
              class="relative w-full max-w-md lg:max-w-lg dark:hidden mt-5 md:mt-0 rounded-3xl shadow-2xl ring-1 ring-black/5"
          />
          <div
              v-for="(label, index) in labels"
              :key="index"
              class="absolute hidden md:flex items-center gap-2 bg-white/90 text-gray-800 p-2 rounded-lg shadow-md text-xs backdrop-blur"
              :style="{ top: label.top, right: label.right }"
          >
            <i :class="label.icon" class="text-orange-500 text-lg" />
            <p class="basis-2/4 w-min">{{ label.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const image = "/worker.png";

const features = [
  {
    title: t("features.quality_title"),
    description: t("features.quality_desc"),
    icon: "fas fa-check",
  },
  {
    title: t("features.reliable_title"),
    description: t("features.reliable_desc"),
    icon: "fas fa-shield-alt",
  },
  {
    title: t("features.delivery_title"),
    description: t("features.delivery_desc"),
    icon: "fas fa-truck",
  },
];

const labels = [
  {
    text: t("labels.timely_delivery"),
    icon: "fas fa-truck",
    top: "23%",
    right: "0",
  },
  {
    text: t("labels.affordable_price"),
    icon: "fas fa-wrench",
    top: "15%",
    right: "60%",
  },
  {
    text: t("labels.expanding_range"),
    icon: "fas fa-tools",
    top: "66%",
    right: "50%",
  },
];
</script>
