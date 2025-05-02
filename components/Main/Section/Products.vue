<template>
  <div class="bg-[#38383C] p-8 md:p-16">
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
