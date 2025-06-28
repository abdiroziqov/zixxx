<template>
  <div class="bg-white dark:!bg-dark pb-16">
    <div class="relative container py-6">
      <BaseBreadcrumb :breadcrumb="menu" />
      <div class="md:flex gap-9 mt-10">
        <CommonProductsSwiperProduct :images="image" />
        <CommonProductsLeftSide class="mt-5 md:mt-0" :data="productsSingle" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const productsSingle = ref<any>([]);

function getProductSingle() {
  const { locale } = useI18n();

  useApi()
    .$get(`/product/${route.params.id}`) // use the locale in the API path
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

const image = ["/temp/img1.jpg", "/temp/img2.jpg", "/temp/img3.jpg"];

// const data = {
//   title: "Церезит CM 11 PRO",
//   subtitle:
//     "Клей для керамогранита и керамической плитки для пола и стен, класс C1 T",
//   properties: [
//     "водо- и морозостойкий;",
//     "подходит для влажных зон;",
//     "пригоден для внутренних и наружных работ;",
//     "экологически безопасен.",
//   ],
// };
</script>
