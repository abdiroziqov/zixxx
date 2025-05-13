<template>
  <div class="bg-[#F0F2F1] dark:bg-[#37383C] py-8">
    <div class="container">
      <div class="md:flex justify-between gap-24 items-end mb-6 dark:text-white space-y-6">
        <h3 class="text-3xl font-semibold tracking-[1.2px]">{{ $t('products_title') }}</h3>
        <p class="tracking-[0.2px]"> {{ $t('products_subtitle') }}</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <CommonProductsProductCard v-for="item in 2"  :key="item" />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

</script>
