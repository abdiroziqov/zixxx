<template>
  <section class="py-8 dark:bg-gray">
    <div
        class="flex flex-col lg:flex-row md: justify-between  text-white container"
    >
      <!-- Left Side - Text & Features -->
      <div class="lg:w-[465px]">
        <h2
            class="text-3xl font-semibold leading-130 tracking-[1.2px] mb-9 text-gray-800 dark:text-white"
        >
          {{ $t("why_peoples_choose_us") }}
        </h2>

        <div
            v-for="(item, index) in features"
            :key="index"
            class="flex gap-4 items-start mb-6"
        >
          <img class="size-5" src="/images/true.svg" alt="icon" />
          <div class="tracking-[0.2px]">
            <h3 class="font-medium leading-130 dark:text-white text-gray">
              {{ item.title }}
            </h3>
            <p class="text-gray-400 text-sm opacity-80">{{ item.description }}</p>
          </div>
        </div>

        <BaseButton
            :text="t('about_company')"
            size="sm"
            variant="orange"
            @click="$router.push('/about-us')"
        />
      </div>

      <div class="relative flex justify-center">
        <div class="relative">
          <img
              src="/public/images/worker.svg"
              alt="Worker"
              class="relative w-full max-w-md lg:max-w-lg hidden dark:block"
          />
          <img
              src="/public/images/worker-light.svg"
              alt="Worker"
              class="relative w-full max-w-md lg:max-w-lg dark:hidden"
          />
          <div
              v-for="(label, index) in labels"
              :key="index"
              class="absolute hidden md:flex items-center gap-2 bg-white text-gray-800 p-2 rounded-lg shadow-md text-xs"
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
