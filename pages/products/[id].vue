<template>
  <div class="bg-white dark:!bg-dark pb-8 md:pb-16">
    <div class="relative container md:py-6">
      <BaseBreadcrumb :breadcrumb="menu" />

      <div  v-if="!loading" >
        <div class="md:flex gap-9 mt-10">
          <CommonProductsSwiperProduct :images="productsSingle?.images" />
          <CommonProductsLeftSide class="mt-5 md:mt-0" :data="productsSingle" />
        </div>
        <div>
          <h1 class="text-2xl md:text-[32px] font-bold mt-10 dark:text-white">{{ $t('similar_goods') }}</h1>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            <CommonProductsProductCard :products="products.slice(0, 4)" />
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
import { useApi } from "@/composables/useApi"; // adjust path if needed
const { locale } = useI18n();
const route = useRoute();

const productsSingle = ref<any>([]);
const loading = ref(true);

function getProductSingle() {
  loading.value = true;
  useApi()
      .$get(`/product/${locale.value}/${route.params.id}`)
      .then((res) => {
        productsSingle.value = res;
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      })
      .finally(() => {
        loading.value = false;
      });
}

getProductSingle();



const products = ref<any>([])


function getFaqs() {
  const { locale } = useI18n();

  useApi()
      .$get(`/products/${locale.value}`)
      .then((res) => {
        products.value = res?.sort((a, b) => a.id - b.id);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
}


getFaqs()

const menu = computed(() => {
  return [
    {
      title: "Products",
      link: "/products",
    },
    {
      title: productsSingle.value?.name || "Loading...",
      link: "",
    },
  ];
});
</script>
