<template>
  <div class="text-dark dark:text-white">
    <h3 class="text-5xl font-bold uppercase"> {{ data?.title }}</h3>
    <p class="py-4 text-lg">{{ data?.subtitle }}</p>

    <h4 class="text-3xl font-bold">{{ $t('properties') }}</h4>
    <ul class="list-disc pl-5 text-lg">
      <li v-for="(property, index) in data?.properties" :key="index">
        {{ property }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  data: {
    title: string;
    subtitle: string;
    properties: string[];
  };
}
defineProps<Props>()

</script>
