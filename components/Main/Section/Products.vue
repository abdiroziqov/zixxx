<template>
  <div class="bg-[#F0F2F1] dark:bg-[#37383C] py-8">
    <div class="container">

      <!-- Title + Button -->
      <div class="md:flex justify-between gap-24 items-end mb-6 dark:text-white space-y-6">
       <div>
         <h3 class="text-2xl sm:text-3xl font-semibold tracking-[1.2px]">{{ $t('products_title') }}</h3>
         <p class="tracking-[0.2px]"> {{ $t('products_subtitle') }}</p>
       </div>
        <BaseButton
            size="sm"
            :variant="'orange'"
            :text="t('all_products')"
            @click="$router.push('/products')"
        />
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <CommonProductsProductCard :products="products.slice(0, 8)" />
      </div>

    </div>
  </div>
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
