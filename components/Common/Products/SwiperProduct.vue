<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



interface Props {
  images: string[];
}
defineProps<Props>()

</script>

<template>
  <div class="swiper-container">
    <Swiper class="!w-[500px]"
        :modules="[Navigation, Pagination]"
        :slides-per-view="1"
        :space-between="10"
        :navigation="true"
        :pagination="{ clickable: true }"
        :loop="true"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="image" class="slide-image" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
