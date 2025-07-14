<template>
  <div class="bg-[#F0F2F1] dark:bg-[#37383C] py-8">
    <div class="container">
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
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <CommonProductsProductCard :products="products.slice(0, 8)" />
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const products = ref<any>([])
const { t } = useI18n()
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
</script>
