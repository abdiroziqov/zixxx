<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import {useTheme} from "~/store/useTheme";


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
