<template>
  <ClientOnly>
    <Swiper :space-between="20" class="!w-[415px]" v-bind="settings">
      <SwiperSlide  v-for="(item, index) in [...category, ...category]" :key="index" class="!w-[415px]">
        <CommonCardSatisfiedSliderCard :card="item" />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<script setup lang="ts">
import 'swiper/css'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const settings = computed(() => ({
  loop: true,
  slidesPerView: 'auto',
  autoplay: {
    delay: 3000,
  },
  modules,
}))


const modules = [Autoplay];


const category = [
  {
    name: 'Равшан Турдиев',
    description: 'Мастер putty',
    image: 'https://via.placeholder.com/415x415',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
]
</script>
