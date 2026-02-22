<template>
  <section class="section-shell relative min-h-screen overflow-hidden flex items-center text-white">
    <Swiper v-bind="settings" :modules="modules" @slide-change="onSlideChange">
      <SwiperSlide>
        <img
          class="!w-full !h-full object-cover pointer-events-none hidden dark:block"
          src="/images/main.png"
          alt="image"
        />
        <img
          class="!w-full !h-full object-cover pointer-events-none dark:hidden"
          src="/images/main-light.png"
          alt="image"
        />
      </SwiperSlide>
    </Swiper>

    <div class="absolute inset-0 z-1 bg-gradient-to-r from-black/60 via-black/35 to-black/10"></div>
    <div class="absolute -top-28 -right-28 h-72 w-72 rounded-full bg-orange/30 blur-3xl"></div>
    <div class="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-[#ffb04a]/25 blur-3xl"></div>

    <div class="container relative z-2">
      <div class="glass-panel rounded-3xl max-w-xl p-6 md:p-8 lg:p-10 text-slate-900 dark:text-white">
        <p class="text-3xl md:text-5xl font-display font-semibold mb-5 leading-120" data-aos="fade-up">
          {{ $t("room_renovation") }}
        </p>
        <p class="text-sm md:text-base text-slate-600 dark:text-white/80 leading-140" data-aos="fade-up" data-aos-delay="120">
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Nam at iaculis felis. Etiam quis velit ac
          augue pretium vulputate ut et mi. Vivamus posuere ut ante non euismod.
          Phasellus ullamcorper justo tortor, at porta nulla tempor at. Fusce
          sed ipsum ligula. Praesent tincidunt tortor quis dignissim cursus.
        </p>
        <div class="flex gap-5 max-w-[340px] w-full mt-8" data-aos="fade-up" data-aos-delay="220">
          <BaseButton
            :variant="'border'"
            :text="t('see_more')"
            @click="$router.push('/about-us')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { computed, ref } from "vue";

const thumbsSwiper = ref(null);
const { t } = useI18n();

const modules = [Thumbs, Navigation, Pagination, Autoplay, EffectFade];
const settings = computed(() => ({
  loop: true,
  thumbs: { swiper: thumbsSwiper.value },
  class: "!absolute inset-0 z-0 !w-full",
  autoplay: {
    delay: 3000,
  },
  modules,
}));
const list = [
  {
    id: 1,
    image: "/images/main.png",
  },
];

const activeIndex = ref(0);
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex;
};
</script>

<style scoped></style>
