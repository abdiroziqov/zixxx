<template>
  <div class="bg-white dark:!bg-dark pb-8 md:pb-16">
    <div class="relative container md:py-6">
      <BaseBreadcrumb :breadcrumb="menu" />
      <div class="md:flex gap-9 mt-10">
        <CommonProductsSwiperProduct :images="productsSingle?.images" />
        <CommonProductsLeftSide class="mt-5 md:mt-0" :data="productsSingle" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const productsSingle = ref<any>([]);

function getProductSingle() {
  useApi()
    .$get(`/product/${route.params.id}`)
    .then((res) => {
      productsSingle.value = res;
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
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
      title: productsSingle.value.name,
      link: "",
    },
  ];
});
</script>
