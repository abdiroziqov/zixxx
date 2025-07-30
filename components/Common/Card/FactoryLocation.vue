<template>
  <div
    v-for="item in items"
    :key="item"
    class="border rounded-lg overflow-hidden shadow-2xl"
  >
    <img
      class="w-full h-full max-h-[200px]"
      :src="item?.image || 'https://picsum.photos/100/100'"
      alt="image"
    />
    <div class="p-3 bg-white dark:bg-dark">
      <p class="font-bold text-2xl text-dark dark:text-white">
        {{ $t("factory") }} "{{ item?.name }}"
      </p>
      <p v-html="item?.description" class="font-medium line-clamp-3 text-dark dark:text-white"/>

    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  items: {
    name: string;
    image: string;
    description: string;
  };
}
defineProps<Props>();
</script>
