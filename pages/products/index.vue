<template>
  <section class="bg-white dark:!bg-dark pb-16">
    <div class="container">
      <div class="flex justify-between items-center">
        <h3
          class="font-semibold text-3xl leading-130 text-dark dark:text-white my-7"
        >
          {{ $t("all_products") }}
        </h3>
        <FormSelect
          v-model="form.values.region"
          :options="regions"
          label-key="title"
          value-key="id"
          selected-option-styles="text-red-500"
          :placeholder="t('all_products')"
        />
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <CommonProductsProductCard />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const regions = [
  { id: 1, title: t("all_products") },
  { id: 2, title: "zixx" },
  { id: 3, title: "kabaya" },
];

const form = useForm({
  region: "",
});
</script>

<style scoped>
/* You can add animations or extra styles here later */
</style>
