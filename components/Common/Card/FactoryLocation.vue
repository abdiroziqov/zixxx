<template>
  <div v-for="cards in card" :key="cards" class="border rounded-lg overflow-hidden shadow-2xl">
    <img
        class="w-full h-full max-h-[200px]"
        :src="card?.image || 'https://picsum.photos/100/100'"
        alt="image"
    />
<div class="p-3 bg-white dark:bg-dark">
  <p class="font-bold text-2xl text-dark dark:text-white">{{ $t('factory') }}</p>
  <p class="font-medium line-clamp-3 text-dark dark:text-white">{{ card.description }}</p>
</div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  card: {
    image: string
    description: string
  }
}
defineProps<Props>()
</script>