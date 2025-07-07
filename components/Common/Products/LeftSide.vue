<template>
  <div class="text-dark dark:text-white">
    <h3 class="text-2xl md:text-6xl font-bold uppercase"> {{ data?.name }}</h3>
    <p class="py-1 md:py-4 text-lg">{{ data?.description }}</p>

    <h4 class="text-2xl md:text-[32px] font-bold mb-3">{{ $t('properties') }}</h4>
    <div class="singel" v-html="data?.features"/>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: {
    name: string;
    description: string;
    features: string[];
  };
}
defineProps<Props>()

</script>
<style>
.singel {
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-left: 30px;
}
.singel ul li {
  list-style-type: disc;
  font-size: 16px;
  font-weight: 400;

}
</style>