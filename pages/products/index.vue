<template>
  <div class="container min-h-screen flex items-center justify-center text-center">
    <div>
      <h1 class="text-5xl font-bold mb-4 text-gray-800 dark:text-white">🚧 Coming Soon</h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">We're working hard to bring you something awesome. Stay tuned!</p>
    </div>

    <!--
    <div class="flex justify-between items-center">
      <h3 class="font-semibold text-3xl leading-130 dark:text-white">{{ $t('all_products') }}</h3>
      <FormSelect
        v-model="form.values.region"
        :options="regions"
        label-key="title"
        value-key="id"
        selected-option-styles="text-red-500"
        :placeholder="$t('enter_region')" />
    </div>
    -->
  </div>
</template>

<script setup lang="ts">
const regions = [
  { id: 1, title: 'Region 1' },
  { id: 2, title: 'Region 2' },
  { id: 3, title: 'Region 3' }
]

const form = useForm({
  region: '',
})
</script>

<style scoped>
/* You can add animations or extra styles here later */
</style>
