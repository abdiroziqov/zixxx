<script setup lang="ts">
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { required } from '@vuelidate/validators';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

interface Props {
  images: string[];
}

defineProps<Props>();

const buttonLoading = ref(false);
const showModal = ref(false);
const isSubmitted = ref(false);

const form = useForm(
    {
      telegramNumber: '',
    },
    {
      telegramNumber: { required },
    }
);

function openModal() {
  showModal.value = true;
  isSubmitted.value = false;
  form.values.telegramNumber = '';
  form.$v.value.$reset();
}

const sendMail = async () => {
  form.$v.value.$touch();
  if (!form.$v.value.$invalid) {
    buttonLoading.value = true;

    try {
      await useApi().$post('telegram', {
        body: {
          telegram: form.values.telegramNumber,
        },
      });

      isSubmitted.value = true;
      form.values.telegramNumber = '';
      form.$v.value.$reset();
    } catch (error) {
      console.error('Error sending Telegram number:', error);
    } finally {
      buttonLoading.value = false;
    }
  }
};

</script>

<template>
  <div>
    <div class="swiper-container relative w-full max-w-[500px]">
      <!-- Navigation Buttons -->
      <button class="swiper-button-prev-custom absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-white dark:bg-dark rounded-full p-2 shadow">
        <i class="icon-chevron hover:text-orange duration-300 rotate-180" />
      </button>
      <button class="swiper-button-next-custom absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-white dark:bg-dark rounded-full p-2 shadow">
        <i class="icon-chevron hover:text-orange duration-300" />
      </button>

      <!-- Swiper Carousel -->
      <Swiper
          :modules="[Navigation, Pagination]"
          :slides-per-view="1"
          :space-between="10"
          :loop="true"
          :navigation="{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom'
        }"
          :pagination="{ clickable: true }"
          class="rounded-lg overflow-hidden shadow-xl"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img :src="image || '/logo2.svg'" :alt="'Slide ' + index" class="w-full h-auto object-cover" />
        </SwiperSlide>

        <SwiperSlide v-if="!images || images.length === 0">
          <img src="/logo2.svg" alt="Default Slide" class="w-full h-auto object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>

    <!-- Button to open modal -->
    <BaseButton
        class="mt-6"
        size="sm"
        :text="t('original_image')"
        variant="orange"
        @click="openModal"
    />

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div class="bg-white dark:bg-dark p-6 rounded-xl w-[90%] max-w-md shadow-lg relative">
        <button @click="showModal = false" class="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl">&times;</button>

        <template v-if="!isSubmitted">
          <h2 class="text-xl font-semibold mb-4">{{ t('enter_telegram_number') }}</h2>
          <FormInput
              v-model="form.values.telegramNumber"
              is-transparent
              :error="form.$v.value.telegramNumber?.$error"
              input-class="pl-3 py-4 dark:bg-[#393A3F] bg-[#393a3f1a] !font-medium text-black"
              class="!font-medium mb-5"
              v-maska="'(##) ###-##-##'"
              :placeholder="('+998 _ _ _  _ _  _ _')"
          />
          <BaseButton
              :text="t('send')"
              variant="orange"
              size="sm"
              class="w-full"
              @click="sendMail"
              :loading="buttonLoading"
          />
        </template>

        <template v-else>
          <h2 class="text-xl font-semibold text-green-600 text-center">{{ t('successfully_sent') }}</h2>
          <p class="text-gray-600 text-center mt-2">{{ t('thank_you_for_your_number') }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

