<template>
  <div class="grid items-start gap-x-4">
    <div
        v-for="(item, index) in faq"
        :key="index"
        class="group transition-300 border-b last:border-b-[0px] border-white-400"
    >
      <div
          class="flex items-center justify-between cursor-pointer transition-300 rounded-2xl py-4"
          :class="[selectedItem === item.id ? '' : '']"
          @click="openItem(item.id)"
      >
        <h4
            class="font-medium text-lg text-dark dark:text-white !leading-130 transition-colors duration-300 group-hover:text-orange"
        >
          {{ getTranslation(item, 'question') }}
        </h4>
        <div
            class="plusminus flex-shrink-0 ml-1"
            :class="{ active: selectedItem === item.id }"
        ></div>
      </div>

      <CollapseTransition>
        <div v-if="selectedItem === item.id" class="pb-4">
          <p
              class="!leading-130 text-dark dark:text-white opacity-85"
              :class="answerClass"
          >
            {{ getTranslation(item, 'answer') }}
          </p>
        </div>
      </CollapseTransition>
    </div>
  </div>
</template>
<script setup lang="ts">
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
const selectedItem = ref(0)

interface Translation {
  question?: string
  answer?: string
}

interface FaqItem {
  id: number
  translations: {
    en?: Translation
    uz?: Translation
    ru?: Translation
  }
}

interface Props {
  faq: FaqItem[]
  questionClass?: string
  answerClass?: string
}

defineProps<Props>()

const openItem = (id: number) => {
  selectedItem.value = selectedItem.value === id ? 0 : id
}

const getTranslation = (item: FaqItem, key: 'question' | 'answer'): string => {
  return (
      item.translations?.en?.[key] ||
      item.translations?.uz?.[key] ||
      item.translations?.ru?.[key] ||
      ''
  )
}
</script>


<style scoped>
.plusminus {
  position: relative;
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.plusminus.active::before {
  transform: translatey(-50%) rotate(-90deg);
  opacity: 0;
}

.plusminus.active::after {
  transform: translatey(-50%) rotate(0);
}

.plusminus::before,
.plusminus::after {
  content: '';
  display: block;
  background-color: #FF662D;
  position: absolute;
  top: 50%;
  left: 0;
  transition: 0.35s;
  width: 100%;
  height: 2px;
}

.plusminus::after {
  transform: translatey(-50%) rotate(90deg);
}

.plusminus::before {
  transform: translatey(-50%);
}
</style>
