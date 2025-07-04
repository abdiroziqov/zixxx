<template>
  <div class="bg-white dark:!bg-dark pb-8 md:pb-16">
    <div class="relative container md:py-6">
      <BaseBreadcrumb :breadcrumb="menu" />

      <div v-if="!loading" class="md:flex gap-9 mt-10">
        <CommonProductsSwiperProduct :images="productsSingle?.images" />
        <CommonProductsLeftSide class="mt-5 md:mt-0" :data="productsSingle" />
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

const route = useRoute();
const productsSingle = ref<any>([]);
const loading = ref(true);

function getProductSingle() {
  loading.value = true;
  useApi()
      .$get(`/product/${route.params.id}`)
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
