<template>
  <div
    v-for="item in items"
    :key="item"
    class="card-lift border border-slate-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white/80 dark:bg-white/5 shadow-lg"
  >
    <img
      class="w-full h-[220px] object-cover"
      :src="item?.image || 'https://picsum.photos/100/100'"
      alt="image"
      loading="lazy"
      decoding="async"
      width="640"
      height="440"
    />
    <div class="p-5">
      <p class="font-display font-semibold text-xl text-dark dark:text-white mb-2">
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
