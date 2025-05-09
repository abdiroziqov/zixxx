<template>
  <div class="p-8 md:p-16 border">
    <h1 class="text-5xl font-bold mb-4 text-gray-800 dark:text-white">🚧 Coming Soon</h1>
    <p class="text-lg text-gray-600 dark:text-gray-300">We're working hard to bring you something awesome. Stay tuned!</p>
    <div class="container hidden">
      <div class="flex justify-between gap-24 items-end mb-6">
        <h3 class="text-white text-3xl font-semibold tracking-[1.2px]">{{ $t('products_title') }}</h3>
        <p class="tracking-[0.2px]"> {{ $t('products_subtitle') }}</p>
      </div>
      <CommonCardProductCard />
    </div>
  </div>
</template>


<script setup lang="ts">

</script>
