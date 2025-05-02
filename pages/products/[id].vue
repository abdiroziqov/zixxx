<template>
<div class="bg-gray">
  <div class="relative container py-6">
    <BaseBreadcrumb :breadcrumb="menu" />
    <div class="flex gap-9  items-center justify-center mt-10">
      <CommonProductsSwiperProduct :images="image" />
      <CommonProductsLeftSide :data="data" />
    </div>
  </div>
</div>
</template>
<script setup lang="ts">

const menu = computed(() => {
  return [
    {
      title: 'Products',
      link: '/products',
    },
    {
      title: 'Products-name',
      link: '',
    },
  ]
})

const image = [
  "https://picsum.photos/500/500",
  "https://picsum.photos/500/500",
  "https://picsum.photos/500/500"
];


const data = {
  title: 'Product name',
  subtitle: 'Product subtitle',
  properties: ['property 1', 'property 2', 'property 3']
}
</script>