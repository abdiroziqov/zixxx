<template>
  <div class="dark:bg-theme bg-[#0F0F0F] py-8 md:py-16 dark:text-[#242424]">
    <div class="container">
      <div class="md:flex justify-between">
        <div class="md:w-[487px] mb-5 md:mb-0">
          <p class="font-semibold text-3xl leading-130">Что говорят о нас наши довольные клиенты</p>
          <p class="text-sm mt-1 opacity-80 leading-6">
            Мы очень рады использовать ZIXX. мы бы порекомендовали всем. После этого остается только работать с компанией
            zixx и еще раз всем рекомендоваю!!!
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
