<template>
  <div class="bg-white dark:!bg-dark pb-16">
    <div class="relative container">
      <BaseBreadcrumb :breadcrumb="menu" />
      <!-- Success Modal -->

      <div class="">
        <h3
          class="font-semibold tracking-[1.2px] leading-130 text-3xl dark:text-white text-dark mb-4 mf:mb-6"
        >
          {{ $t("factory_locations") }}
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <CommonCardFactoryLocation :items="cards" />
        </div>
      </div>
    </div>
  </div>
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
