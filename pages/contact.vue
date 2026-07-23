<template>
  <main class="section-shell bg-white/90 dark:bg-[#11151d] pb-16 min-h-[70vh]">
    <div class="relative container">
      <BaseBreadcrumb :breadcrumb="menu" />
      <!-- Success Modal -->

      <div class="">
        <p class="text-sm font-semibold uppercase tracking-[.18em] text-orange mb-2">{{ $t("contact_us") }}</p>
        <h1
          class="font-display font-semibold leading-120 text-3xl md:text-5xl dark:text-white text-dark mb-7"
        >
          {{ $t("factory_locations") }}
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <CommonCardFactoryLocation :items="cards" />
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
const {t}  = useI18n();
const menu = computed(() => {
  return [
    {
      title: t("contact_us"),
      link: "/contact",
    },
  ];
});


const cards = [
  {
    name: t("factory_location_one_name"),
    description: `${t("factory_location_one")}<br>${t("factory_location_one_desc")}`,
    image: "/images/img1.JPG",
  },
  {
    name: t("factory_location_two_name"),
    description: `${t("factory_location_two")}<br>${t("factory_location_two_desc")}`,
    image: "/images/img2.JPG",
  },
  {
   name: t("factory_location_three_name"),
    description: `${t("factory_location_three")}<br>${t("factory_location_three_desc")}`,
    image: "/images/img3.JPG",
  },
];

</script>
