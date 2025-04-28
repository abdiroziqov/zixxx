<template>
  <div class="bg-[#F0F2F1] dark:bg-[#37383C] py-8 md:py-16">
    <div class="container">
      <div class="md:flex justify-between">
        <div class="md:w-[487px] mb-5 md:mb-0">
          <p class="font-semibold text-3xl leading-130">{{ $t('satisfied_customers') }}</p>
          <p class="text-sm mt-1 opacity-80 leading-6">
            {{    $t('satisfied_customers_description') }}
          </p>
          <div class="mt-4 flex items-center gap-3">
            <img src="/images/group-people.svg" alt="image">
            <span class="flex items-center gap-1 text-[15px]">
              <i class="icon-star text-[28px] text-orange" />
              4.8 (320 {{ $t('reviews') }})
            </span>
          </div>
        </div>
        <CommonCardSatisfiedSlider/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
