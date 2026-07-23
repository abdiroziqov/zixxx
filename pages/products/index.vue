<template>
  <section class="section-shell bg-white/90 dark:bg-[#11151d] py-8 md:py-14 min-h-[70vh]">
    <div class="container">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[.18em] text-orange mb-2">ZIXX catalog</p>
          <h1 class="font-display font-semibold text-3xl md:text-5xl leading-120 text-dark dark:text-white">
            {{ $t("all_products") }}
          </h1>
        </div>
        <FormSelect
            v-model="form.values.product"
            :options="productsList"
            label-key="title"
            value-key="id"
            selected-option-styles="text-red-500"
            :placeholder="t('all_products')"
        />
      </div>
      <div v-if="filteredProducts.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        <CommonProductsProductCard :products="filteredProducts" />
      </div>
      <div v-else class="rounded-3xl border border-dashed border-slate-300 dark:border-white/20 p-12 text-center text-slate-500 dark:text-slate-300">
        {{ $t("no_products_available") }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

import { useProductStore } from '@/store/main';

const store = useProductStore();

// getter → computed
const products = computed(() => store.getAll);

const form = useForm({
  product: 1, // default
});

const productsList = [
  { id: 1, title: t("all_products") },
  { id: 2, title: "ZIXX" },
  { id: 3, title: "Dogan Alçi" },
  { id: 4, title: "Dogan" },
  { id: 5, title: "Kaya Boya" },
  { id: 6, title: "Farben" },
  { id: 7, title: "Alvin" },
];

const filteredProducts = computed(() => {
  const selected = form.values.product;

  // 1 = All Products
  if (selected === 1) {
    return [...products.value].sort((a, b) => a.id - b.id);
  }

  const selectedItem = productsList.find((item) => item.id === selected);

  if (!selectedItem) return [];

  return products.value
      .filter((product) => product.brand === selectedItem.title)
      .sort((a, b) => a.id - b.id);
});
</script>
<!--/-->
