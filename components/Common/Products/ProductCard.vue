<template>
  <div class="block" v-for="(item, index) in products" :key="index">
    <NuxtLink
      :to="`/products/${item?.id}`"
      class="border hover:shadow-lg duration-300 rounded-lg overflow-hidden block"
    >
      <div>
        <img
          class="w-full h-full object-cover"
          :src="item?.image1"
          alt="image"
        />
      </div>
      <div class="p-2">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mt-2">
          {{ item?.name }}
        </h3>
        <p class="text-gray-600 text-sm mt-1 dark:text-white line-clamp-3">
          {{ item?.description }}
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
}

interface Props {
  products: Product[];
}

defineProps<Props>();
</script>
