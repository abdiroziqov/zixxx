<template>
  <div v-for="cards in card" :key="cards" class="border rounded-lg overflow-hidden shadow-2xl">
    <img
        class="w-full h-full max-h-[200px]"
        :src="card?.image || 'https://picsum.photos/100/100'"
        alt="image"
    />
<div class="p-3 dark:bg-white">
  <p class="font-bold text-2xl">{{card?.name  }}</p>
  <p class="font-medium line-clamp-3 text-dark">{{ card.description }}</p>
  <a class="font-semibold hover:text-blue-400 duration-300 text-dark" href="tel:+998 90-935-05-00">+998 90-935-05-00</a>
</div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  card: {
    image: string
    name: string
    description: string
  }
}
defineProps<Props>()
</script>