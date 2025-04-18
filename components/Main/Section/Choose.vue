<template>
  <section class="flex flex-col lg:flex-row md: justify-between bg-gray text-white p-8 lg:p-16">
    <!-- Left Side - Text & Features -->
    <div class="lg:w-[465px]">
      <h2 class="text-3xl font-semibold leading-140 mb-9">
       {{ $t('why_peoples_choose_us') }}
      </h2>

      <div v-for="(item, index) in features" :key="index" class="flex gap-4 items-start mb-6">
        <img class="size-5" src="/images/true.svg" alt="icon">
        <div>
          <h3 class="text-lg font-semibold">{{ item.title }}</h3>
          <p class="text-gray-400">{{ item.description }}</p>
        </div>
      </div>

     <BaseButton main-class="text-white" :text="t('about_company')" size="sm" variant="orange" @click="$router.push('/about-us')" />
    </div>

    <div class="relative flex justify-center">
      <div class="relative">
        <img src="/public/images/worker.svg" alt="Worker" class="relative w-full max-w-md lg:max-w-lg" />
        <div
            v-for="(label, index) in labels"
            :key="index"
            class="absolute hidden md:flex items-center gap-2 bg-white text-gray-800 p-2 rounded-lg shadow-md text-xs"
            :style="{ top: label.top, right: label.right }"
        >
          <i :class="label.icon" class="text-orange-500 text-lg"/>
          <p class="basis-2/4 w-min">{{ label.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const { t } = useI18n()
const image = "/worker.png"; // Change this to your actual image path

const features = [
  { title: "Качественный и доступный", description: "Высококачественные и экологически чистые строительные смеси ZIXX для отделочных работ.", icon: "fas fa-check" },
  { title: "Надежно и быстро", description: "Это ваш отличный выбор в строительстве и ремонте, когда важен результат...", icon: "fas fa-shield-alt" },
  { title: "Доставка по Узбекистану", description: "Компания 'RAZATA' является оптовым поставщиком высококачественного микрокальцита по всей территории Узбекистана.", icon: "fas fa-truck" }
];

const labels = [
  { text: "Своевременная отгрузка", icon: "fas fa-truck", top: "23%", right: "0" },
  { text: " Доступная цена", icon: "fas fa-wrench", top: "15%", right: "60%" },
  { text: "Наполняемый ассортимент", icon: "fas fa-tools", top: "66%", right: "50%" },
];
</script>