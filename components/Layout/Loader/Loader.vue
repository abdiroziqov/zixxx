<template>
  <transition name="fade">
    <div
        v-if="loading"
        class="background-shadow-loader w-full h-screen fixed inset-0 z-[99999] flex-center bg-[#001B43]"
    >
      <div
          class="flex-col justify-between h-[100dvh] flex items-center relative"
      >
        <img  :class="{ '!opacity-100 translate-x-0': fullSvg }"
              class="absolute top-[40%] opacity-0 transition-300 duration-300"
              src="/images/logo.svg" alt="Logo" />

      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
interface Props {
  customLoading?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  customLoading: undefined,
})

const fullSvg = ref(false)
const loading = ref(true)

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
</style>
