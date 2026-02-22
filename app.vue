<template>
  <div>
    <NuxtLayout>
      <NuxtPage :transition="pageTransition" />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import {useTheme} from "~/store/useTheme";

const nuxtApp = useNuxtApp();
const pageTransition = {
  name: "page",
  mode: "out-in",
  css: false,
  onBeforeEnter: (el: Element) => {
    if (!nuxtApp.$gsap) return;
    nuxtApp.$gsap.set(el, { autoAlpha: 0, y: 16 });
  },
  onEnter: (el: Element, done: () => void) => {
    if (!nuxtApp.$gsap) {
      done();
      return;
    }
    nuxtApp.$gsap.to(el, {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      onComplete: done,
    });
  },
  onLeave: (el: Element, done: () => void) => {
    if (!nuxtApp.$gsap) {
      done();
      return;
    }
    nuxtApp.$gsap.to(el, {
      autoAlpha: 0,
      y: -12,
      duration: 0.35,
      ease: "power2.in",
      onComplete: done,
    });
  },
};

const storeTheme = useTheme()

storeTheme.initTheme()

// useSeoMeta({
//   title: 'TMC Institute of Tashkent',
//   description:
//       'TMC Institute of Tashkent is a leading institute of higher education in Uzbekistan',
//   ogTitle: 'TMC Institute of Tashkent',
//   ogDescription:
//       'TMC Institute of Tashkent is a leading institute of higher education in Uzbekistan',
//   twitterTitle: 'TMC Institute of Tashkent',
//   twitterDescription:
//       'TMC Institute of Tashkent is a leading institute of higher education in Uzbekistan',
//   ogImage: '/og.png',
//   twitterImage: '/og.png',
// })
</script>
