<template>
  <div class="dark:bg-gray bg-white py-7 md:py-16 overflow-hidden">
    <div class="container lg:flex justify-between gap-6 md:items-center">
      <div class="w-full md:w-[580px] h-[240px] md:h-[360px]">
        <img
          class="w-full h-full rounded-[18px]"
          src="/images/dom.png"
          alt="image"
        />
      </div>
      <div class="lg:max-w-[487px] mt-5 lg:mt-0">
        <h3
          class="text-3xl font-semibold leading-130 tracking-[1.2px] text-gray-800 dark:text-white"
        >
          {{ $t("facade_materials") }}
        </h3>
        <p
          class="mt-1 opacity-80 leading-140 font-medium tracking-[0.2px] dark:text-white text-gary text-sm"
        >
          {{ $t("facade_materials_text") }}
        </p>
        <BaseButton
          size="sm"
          class="mt-6"
          :text="t('find_out_more')"
          variant="orange"
          @click="$router.push('/about-us')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
