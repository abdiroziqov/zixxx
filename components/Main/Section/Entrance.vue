<template>
  <section class="relative min-h-screen overflow-x-hidden flex items-center">
    <Swiper v-bind="settings" :modules="modules" @slide-change="onSlideChange">
      <SwiperSlide>
        <img class="!w-full !h-full object-cover pointer-events-none hidden dark:block" src="/images/main.png"
          alt="image" />
        <img class="!w-full !h-full object-cover pointer-events-none dark:hidden" src="/images/main-light.png"
          alt="image" />
      </SwiperSlide>
    </Swiper>

    <div class="container">
      <div class="relative z-2 lg:pl-3 md:w-[55%] dark:text-white">
        <p class="text-3xl md:text-5xl font-semibold mb-5 ">
          {{ $t('room_renovation') }}

        </p>
        <p>
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nam at iaculis felis. Etiam quis velit ac
          augue pretium vulputate ut et mi. Vivamus posuere ut ante non euismod.
          Phasellus ullamcorper justo tortor, at porta nulla tempor at. Fusce
          sed ipsum ligula. Praesent tincidunt tortor quis dignissim cursus.
        </p>
        <div class="flex gap-5 max-w-[340px] w-full mt-8">
          <BaseButton :variant="'border'" :text="t('see_more')" @click="$router.push('/about-us')" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { computed, ref } from 'vue'

const thumbsSwiper = ref(null)
const { t } = useI18n()

const modules = [Thumbs, Navigation, Pagination, Autoplay, EffectFade]
const settings = computed(() => ({
  loop: true,
  thumbs: { swiper: thumbsSwiper.value },
  class: '!absolute inset-0 z-0 !w-full',
  autoplay: {
    delay: 3000,
  },
  modules,
}))
const list = [
  {
    id: 1,
    image: '/images/main.png',
  },
]

const activeIndex = ref(0)
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
}
</script>

<style scoped></style>
