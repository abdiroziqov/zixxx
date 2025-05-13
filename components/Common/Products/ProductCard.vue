<template>
  <NuxtLink to="/products/1" class="border hover:shadow-lg duration-300 rounded-lg overflow-hidden">
    <div>
    <img class="w-full h-full object-cover" src="/temp/img1.jpg" alt="image">
    </div>
    <div class="p-2 ">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white mt-2">Церезит CM 11 PRO</h3>
      <p class="text-gray-600 text-sm mt-1 dark:text-white">Клей для керамогранита и керамической плитки для пола и стен, класс C1 T</p>
    </div>

  </NuxtLink>
</template>

<script setup lang="ts">

interface Props {
  product: {
    id: number
    name: string
    description: string
    price: string
    image: string
  }
}
defineProps<Props>()
</script>