<template>
  <ClientOnly>
    <Swiper class="!w-full" v-bind="settings">
      <SwiperSlide
          v-for="(item, index) in category"
          :key="index"
          class="!w-[196px]"
      >
      {{   item  }}
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<script setup lang="ts">
import 'swiper/css'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const modules = [Autoplay]
const settings = computed(() => ({
  loop: true,
  spaceBetween: 20,
  slidesPerView: 6,
  autoplay: {
    delay: 3000,
  },
  modules,
}))


const category = ref<string[]>([
  'Technology',
  'Science',
  'Health',
  'Business',
  'Education',
  'Sports',
  'Entertainment',
  'Travel',
])
</script>
