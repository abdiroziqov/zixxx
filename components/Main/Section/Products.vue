<template>
  <section class="section-shell bg-[#F4F6F8] dark:bg-[#1a1d24] py-10 md:py-16">
    <div class="absolute inset-0 bg-grid opacity-35"></div>
    <div class="container relative">

      <!-- Title + Button -->
      <div class="md:flex justify-between gap-24 items-end mb-8 dark:text-white space-y-6" data-aos="fade-up">
       <div class="max-w-xl">
         <h3 class="text-2xl sm:text-3xl font-display font-semibold tracking-[1px]">{{ $t('products_title') }}</h3>
         <p class="tracking-[0.2px] text-gray-600 dark:text-gray-300"> {{ $t('products_subtitle') }}</p>
       </div>
        <BaseButton
            size="sm"
            :variant="'orange'"
            :text="t('all_products')"
            @click="$router.push('/products')"
        />
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5" data-aos="fade-up" data-aos-delay="120">
        <CommonProductsProductCard :products="products.slice(0, 8)" />
      </div>

    </div>
  </section>
</template>


<script setup lang="ts">
import { useProductStore } from '@/store/main';
import { useI18n } from 'vue-i18n';
import { storeToRefs } from 'pinia';

const { t } = useI18n();

// PINIA STORE → products olish
const store = useProductStore();
const { getAll } = storeToRefs(store);

// Products list — always sorted by id
const products = computed(() => {
  return [...getAll.value].sort((a, b) => a.id - b.id);
});
</script>
