<template>
  <section class="dark:bg-white bg-dark">
    <div class="container">
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-3xl leading-130 text-white dark:text-dark my-7">{{ $t("all_products") }}</h3>
        <FormSelect
            v-model="form.values.region"
            :options="regions"
            label-key="title"
            value-key="id"
            selected-option-styles="text-red-500"
            :placeholder="t('all_products')" />
      </div>
      <div class="grid grid-cols-4 gap-5 pb-12">

        <ProductCard
            v-for="n in 12"
            :key="n"
        />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import ProductCard from "~/components/Common/Products/ProductCard.vue";

const { t } = useI18n()


const regions = [
  { id: 1, title: 'all_products' },
  { id: 2, title: 'zixx' },
  { id: 3, title: 'kabaya' },
]

const form = useForm({
  region: '',
})
</script>

<style scoped>
/* You can add animations or extra styles here later */
</style>
