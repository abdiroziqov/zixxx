<template>
  <div class="rounded-lg bg-[#464646] shadow-lg  p-4 w-72">
    <img :src="product?.image" :alt="product?.title" class="w-full h-40 object-cover rounded-md" />
    <div class="mt-3">
      <h3 class="font-bold text-lg">nike</h3>
      <p class=" font-medium">hello</p>
      <p class="text-sm">hello</p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  product: {
    image: string;
    brand: string;
    title: string;
    quantity: string;
  };
}

defineProps<Props>();
</script>