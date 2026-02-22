<template>
  <section class="section-shell bg-[#F0F2F1] dark:bg-[#1a1d24] py-10 md:py-16">
    <div class="absolute inset-0 bg-grid opacity-25"></div>
    <div class="container relative">
      <div class="md:flex justify-between gap-10">
        <div class="md:w-[487px] mb-6 md:mb-0" data-aos="fade-right">
          <p class="font-display font-semibold text-2xl md:text-3xl leading-130 dark:text-white">
            {{ $t("satisfied_customers") }}
          </p>
          <p
            class="text-sm mt-2 opacity-80 leading-6 dark:text-white text-gray-600"
          >
            {{ $t("satisfied_customers_description") }}
          </p>
          <div class="mt-4 flex items-center gap-3">
            <img src="/images/group-people.svg" alt="image" loading="lazy" decoding="async" />
            <div class="flex items-center gap-1">
              <i class="icon-star text-[28px] text-orange" />
              <p class="text-[15px] dark:text-white text-gray opacity-80">
                4.8 (320 {{ $t("reviews") }})
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="120">
          <CommonCardSatisfiedSlider />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
