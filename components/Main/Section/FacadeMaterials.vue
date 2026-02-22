<template>
  <section class="section-shell bg-white/90 dark:bg-[#121621] py-10 md:py-20">
    <div class="absolute inset-0 bg-grid opacity-40"></div>
    <div class="container relative lg:flex justify-between gap-10 md:items-center">
      <div class="w-full md:w-[580px] h-[240px] md:h-[360px]" data-aos="zoom-out">
        <img
          class="w-full h-full rounded-3xl shadow-xl ring-1 ring-white/10"
          src="/images/dom.png"
          alt="image"
        />
      </div>
      <div class="lg:max-w-[487px] mt-6 lg:mt-0 glass-panel rounded-2xl p-5 md:p-7" data-aos="fade-left">
        <h3
          class="text-2xl sm:text-3xl font-display font-semibold leading-130 tracking-[1px] text-gray-800 dark:text-white"
        >
          {{ $t("facade_materials") }}
        </h3>
        <p
          class="mt-2 opacity-80 leading-140 font-medium tracking-[0.2px] dark:text-white text-gray text-sm"
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
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
