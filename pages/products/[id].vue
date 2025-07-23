<template>
  <div class="bg-white dark:!bg-dark pb-8 md:pb-16">
    <div class="relative container md:py-6">
      <BaseBreadcrumb :breadcrumb="menu" />

      <div v-if="!loading">
        <div class="md:flex gap-9 mt-10">
          <CommonProductsSwiperProduct :images="productsSingle?.images" />
          <CommonProductsLeftSide class="mt-5 md:mt-0" :data="productsSingle" />
        </div>

        <div v-if="filteredProducts.length > 0">
          <h1 class="text-2xl md:text-[32px] font-bold mt-10 dark:text-white">
            {{ $t('similar_goods') }}
          </h1>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            <CommonProductsProductCard :products="filteredProducts.slice(0, 4)" />
          </div>
        </div>
      </div>

      <div v-else class="flex justify-center items-center min-h-[200px]">
        <span class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useApi } from "@/composables/useApi";

const { locale } = useI18n();
const route = useRoute();

const productsSingle = ref<any>(null);
const products = ref<any[]>([]);
const loading = ref(true);

// Fetch single product by ID
function getProductSingle() {
  loading.value = true;
  useApi()
      .$get(`/product/${locale.value}/${route.params.id}`)
      .then((res) => {
        productsSingle.value = res;
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      })
      .finally(() => {
        loading.value = false;
      });
}

// Fetch all products
function getFaqs() {
  useApi()
      .$get(`/products/${locale.value}`)
      .then((res) => {
        products.value = res?.sort((a, b) => a.id - b.id);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
}

getProductSingle();
getFaqs();

// Helper function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
}

// Randomized similar products (same category)
const filteredProducts = computed(() => {
  if (!productsSingle.value) return [];
  const similar = products.value.filter(
      (item) =>
          item.id !== productsSingle.value?.id &&
          item.category_id === productsSingle.value?.category_id
  );
  return shuffleArray(similar);
});

// Breadcrumb menu
const menu = computed(() => [
  {
    title: "Products",
    link: "/products",
  },
  {
    title: productsSingle.value?.name || "Loading...",
    link: "",
  },
]);
</script>
