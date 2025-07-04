<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  images: string[];
}
defineProps<Props>();
</script>

<template>
  <div class="swiper-container relative w-full max-w-[500px]">
    <button
        class="swiper-button-prev-custom text-2xl absolute group justify-center flex top-1/2 left-2 z-10 -translate-y-1/2 bg-white dark:bg-dark rounded-full p-2 shadow"
    >
      <i class="icon-chevron hover:text-orange duration-300 rotate-180"/>
    </button>
    <button
        class="swiper-button-next-custom text-2xl absolute justify-center flex top-1/2 right-2 z-10 -translate-y-1/2 bg-white dark:bg-dark rounded-full p-2 shadow"
    >
      <i class="icon-chevron hover:text-orange duration-300"/>
    </button>

    <Swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :navigation="{
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom'
      }"
        :pagination="{ clickable: true }"
        class="rounded-lg overflow-hidden shadow-xl"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="'Slide ' + index" class="w-full h-auto object-cover" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
