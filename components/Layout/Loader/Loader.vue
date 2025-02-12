<template>
  <transition name="fade">
    <div
        v-if="loading"
        class="background-shadow-loader w-full h-screen fixed inset-0 z-[99999] flex-center bg-[#3A3B3F]"
    >
      <div
          class="flex-col justify-between h-[100dvh] flex items-center relative"
      >
        <svg :class="{ '!opacity-100 translate-x-0': fullSvg }"
             class="absolute top-[40%] opacity-0 transition-300 duration-300" width="123" height="81" viewBox="0 0 143 111" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="143" height="111" fill="url(#pattern0_2_91)"/>
          <defs>
            <pattern id="pattern0_2_91" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_2_91" transform="matrix(0.01 0 0 0.0128829 0 -0.144144)"/>
            </pattern>
            <image id="image0_2_91" width="100" height="100" xlink:href="data:image/png;base64,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"/>
          </defs>
        </svg>

        <div
              class="loader absolute bottom-[8%]"/>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'


interface Props {
  customLoading?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  customLoading: undefined,
})

const fullSvg = ref(false)
const loading = ref(true)
// const store = useStore()
// const mainLoading = computed(() => store.mainLoading)

onMounted(() => {
  const body = document.body
  body.style.overflow = 'hidden'
  setTimeout(() => {
    fullSvg.value = true
  }, 1000)

  setTimeout(() => {
    fullSvg.value = true
  }, 1000)

  setTimeout(() => {
    body.style.overflow = ''
    loading.value = false
  }, 2000)
})

watch(
    () => props.customLoading,
    (newValue) => {
      if (typeof newValue !== 'undefined') {
        loading.value = newValue
      }
    },
    {
      immediate: true,
    }
)
</script>

<style scoped>
.background-shadow-loader {
  backdrop-filter: blur(28px);
}
@keyframes animateFirstPath {
  0% {
    fill: #52618f;
  }
  100% {
    fill: #a2bcde;
  }
}
@keyframes rotate {
  from {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  to {
    transform: rotate(359deg) translate3d(0, 0, 0);
  }
}

@keyframes rotate-reverse {
  from {
    transform: rotate(359deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>

<style>
svg.spinner {
  width: 80px;
  height: 80px;
}
svg.spinner circle {
  fill: transparent;
  stroke: #0067ff;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 130;
  transform-origin: 40px 40px 0;
  animation: spinner 3s linear infinite;
}
svg.spinner circle.small {
  position: absolute;
  stroke: #72abff;
  stroke-width: 4.5;
  top: 0;
  left: 0;
  stroke-dasharray: 70;
  animation: spinner 3s linear infinite;
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(420deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}



.loader {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%,#fe0000);
  -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0);
  animation: spinner-zp9dbg 1s infinite linear;
}

@keyframes spinner-zp9dbg {
  to {
    transform: rotate(1turn);
  }
}
</style>
