<template>
  <div class="block" v-for="(item, index) in products" :key="index">
    <NuxtLink
      :to="`/products/${item?.id}`"
      class="border hover:shadow-lg duration-300 rounded-lg overflow-hidden block"
    >
      <div class="sm:w-[305px] sm:h-[305px]">
        <img
          class="w-full h-full object-cover "
          :src="item?.image1 || '/logo2.svg'"
          alt="image"
        />
      </div>
      <div class="p-2 border-t">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mt-2">
          {{ item?.name }}
        </h3>
        <p class="text-gray-600 mt-1 dark:text-white">
          {{ item?.subcategory }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: string | number;
  name: string;
  description: string;
  image1: string;
  subcategory: string;
}

interface Props {
  products: Product[];
}

defineProps<Props>();
</script>
