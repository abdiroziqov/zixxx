<template>
  <div class="flex items-center justify-center">
    <div class="relative p-4 md:p-6 bg-white dark:bg-[#464646] rounded-2xl dark:shadow-lg text-white">
      <!-- Profile Section -->
      <div class="flex items-center gap-4">
        <img
            :src="card?.image"
            alt="User"
            class="w-12 h-12 rounded-full"
        />
        <div>
          <h3 class="text-lg font-semibold text-black dark:text-white"> {{ card?.name }}</h3>
          <p class="text-sm text-gray-400 opacity-80"> {{card?.description }}</p>
        </div>
      </div>

      <!-- Star Rating -->
      <div class="flex mt-3 text-orange-400">
        <span v-for="i in 5" :key="i" class="text-xl">
          <i :class="i <= rating ? 'fas fa-star' : 'far fa-star'"/>
        </span>
      </div>

      <!-- Review Text -->
      <p class="mt-3 text-gray dark:text-gray-300 text-sm md:text-base">
        {{ card?.review }}
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">

const rating = ref(4);
interface Props {
  card: {
    image: string
    name: string
    description: string
    review: string
  }
}
defineProps<Props>()
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css");
</style>