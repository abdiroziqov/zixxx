<template>
  <ClientOnly>
    <Swiper :space-between="20" class="!w-[350px] md:!w-[415px]" v-bind="settings">
      <SwiperSlide  v-for="(item, index) in [...category]" :key="index" class="!w-[415px]">
        <CommonCardSatisfiedSliderCard :card="item" />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<script setup lang="ts">
import 'swiper/css'

import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'


const { t } = useI18n()
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
    name: t('ilhom_abdiroziqov'),
    description: t('master_putty'),
    image: '/images/1.jpg',
    review: t('comment_one'),
  },{
    name: t('nasir_mahmudov'),
    description: t('master'),
    image: '/images/2.jpg',
    review: t('comment_two'),
  },{
    name: t('rahim_berdiev'),
    description: t('master_plaster'),
    image: '/images/3.jpg',
    review: t('comment_three'),
  },{
    name: t('elmurod_karimov'),
    description: t('seller'),
    image: '/images/4.jpg',
    review: t('comment_four'),
  },{
    name: t('ravshan_turdiev'),
    description: t('seller'),
    image: '/images/5.jpg',
    review: t('comment_five'),
  },
]
</script>
