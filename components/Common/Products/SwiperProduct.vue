<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ref } from 'vue';

interface Props {
  images: string[];
}
defineProps<Props>();

const swiperInstance = ref<any>(null);
const isBeginning = ref(true);
const isEnd = ref(false);

function handleSwiper(swiper: any) {
  swiperInstance.value = swiper;
  updateNavState(swiper);
  swiper.on('slideChange', () => {
    updateNavState(swiper);
  });
}

function updateNavState(swiper: any) {
  isBeginning.value = swiper.isBeginning;
  isEnd.value = swiper.isEnd;
}
</script>

<template>
  <div class="swiper-container relative w-full max-w-[500px]">
    <!-- Prev Button -->
    <button
        class="swiper-button-prev-custom text-2xl absolute group justify-center flex top-1/2 left-2 z-10 -translate-y-1/2 bg-white dark:bg-dark rounded-full p-2 shadow transition-opacity duration-300"
        :class="{ 'opacity-50 pointer-events-none': isBeginning }"
    >
      <i class="icon-chevron hover:text-orange duration-300 rotate-180" />
    </button>

    <!-- Next Button -->
    <button
        class="swiper-button-next-custom text-2xl absolute justify-center flex top-1/2 right-2 z-10 -translate-y-1/2 bg-white dark:bg-dark rounded-full p-2 shadow transition-opacity duration-300"
        :class="{ 'opacity-50 pointer-events-none': isEnd }"
    >
      <i class="icon-chevron hover:text-orange duration-300" />
    </button>

    <!-- Swiper -->
    <Swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="1"
        :space-between="10"
        :loop="false"
        :navigation="{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom'
      }"
        :pagination="{ clickable: true }"
        @swiper="handleSwiper"
        class="rounded-lg overflow-hidden shadow-xl"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Slide ' + index" class="w-full h-auto object-cover" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
