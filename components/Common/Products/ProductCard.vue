<template>
  <div
    class="block"
    v-for="(item, index) in products"
    :key="index"
    :data-aos="'fade-up'"
    :data-aos-delay="index * 70"
  >
  <div
      class="card-lift group border border-white/60 dark:border-white/10 bg-white/80 dark:bg-[#21242d]/80 rounded-2xl overflow-hidden block"
    >
      <div class="aspect-square sm:w-[305px] sm:h-[305px] overflow-hidden">
        <img
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          :src="item?.image1 || '/logo2.svg'"
          alt="image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="p-3 border-t border-white/40 dark:border-white/10">
        <h3 class="text-sm md:text-lg line-clamp-1 font-semibold text-gray-800 dark:text-white mt-2">
          {{ item?.name[locale] }}
        </h3>
        <p class="text-gray-600 mt-1 dark:text-gray-300 line-clamp-1">
          {{ item?.subcategory[locale] }}
        </p>
      </div>
    </div>
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
