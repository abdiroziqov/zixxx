<template>
  <div class="block" v-for="(item, index) in products" :key="index">
    <NuxtLink
      :to="`/products/${item?.id}`"
      class="border hover:shadow-lg duration-300 rounded-lg overflow-hidden block"
    >
      <div class="aspect-square sm:w-[305px] sm:h-[305px]">
        <img
          class="w-full h-full object-cover "
          :src="item?.image1 || '/logo2.svg'"
          alt="image"
        />
      </div>
      <div class="p-2 border-t">
        <h3 class="text-sm md:text-lg line-clamp-1 font-semibold text-gray-800 dark:text-white mt-2">
          {{ item?.name[locale] }}
        </h3>
        <p class="text-gray-600 mt-1 dark:text-white line-clamp-1">
          {{ item?.subcategory[locale] }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

interface MultiLang {
  en: string;
  ru: string;
  uz: string;
}

interface Product {
  id: string | number;
  name: MultiLang;
  description: MultiLang;
  image1: string;
  subcategory: MultiLang;
}

defineProps<{
  products: Product[];
}>();
</script>
<!--/hello-->