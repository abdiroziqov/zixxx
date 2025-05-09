<template>
  <div class="border shadow rounded-lg overflow-hidden w-max">
    <div class="w-[200px] h-[200px]">
    <img class="w-full h-full object-contain" src="/images/1.jpg" alt="image">
    </div>
    <div class="p-2">
      <h3 class="text-lg font-semibold text-gray-800 mt-2">Product Name</h3>
      <p class="text-gray-600 text-sm mt-1">Product description goes here. It should be brief and informative.</p>
    </div>

  </div>
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