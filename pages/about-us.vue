<template>
  <main class="md:pb-10 pb-10 bg-white dark:bg-dark">
    <div
      class="main__about py-10 bg-[url('/public/images/about.png')] bg-cover bg-no-repeat"
    >
      <div class="container">
        <div class="md:w-[500px]">
          <h3
            class="text-3xl font-semibold leading-130 tracking-[1.2px] dark:text-white"
          >
            {{ $t("company_razata") }}
          </h3>
          <p class="text-lg leading-140 mt-6 dark:text-white">
            {{ $t("company_rzata_text") }}
          </p>
        </div>
      </div>
    </div>
    <div class="w-full container lg:w-[782px] mx-auto">
    <div class="flex md:justify-center flex-col pt-4 pb-10 gap-6">
      <h3
          class="font-semibold tracking-[1.2px] leading-130 text-3xl dark:text-white text-dark"
      >
        {{ $t("feedback_form") }}
      </h3>

      <form class="grid grid-cols-2 gap-6 w-full" @submit.prevent>
        <FormGroup
            main-class="flex flex-col gap-1 col-span-2"
            :label="t('your_name')"
            label-class="dark:!text-white text-dark text-sm font-bold leading-140 mb-1"
        >
          <FormInput
              v-model="form.values.name"
              class="!font-medium"
              is-transparent
              :error="form.$v.value.name?.$error"
              :placeholder="t('enter_ur_name')"
              input-class="pl-3 py-4 dark:bg-[#393A3F] bg-[#393a3f1a] !font-medium text-black"
          />
        </FormGroup>
        <FormGroup
            :label="t('email')"
            label-class="dark:!text-white text-dark text-sm font-bold leading-140 mb-1"
            main-class="col-span-2 md:col-span-1"
        >
          <FormInput
              v-model="form.values.email"
              is-transparent
              :error="form.$v.value.email?.$error"
              :placeholder="t('enter_ur_email')"
              input-class="pl-3 py-4 dark:bg-[#393A3F] bg-[#393a3f1a] !font-medium text-black"
              class="!font-medium"
          />
        </FormGroup>
        <FormGroup
            :label="$t('ur_city')"
            label-class="dark:!text-white text-dark text-sm font-bold leading-140 mb-1"
            main-class="col-span-2 md:col-span-1"
        >
          <FormInput
              v-model="form.values.country"
              is-transparent
              :error="form.$v.value.country?.$error"
              :placeholder="$t('enter_ur_city')"
              input-class="pl-3 py-4 dark:bg-[#393A3F] bg-[#393a3f1a] !font-medium text-black"
              class="!font-medium"
          />
        </FormGroup>

        <FormGroup
            :label="$t('message')"
            main-class="flex flex-col gap-1 col-span-2 "
            label-class="dark:!text-white text-dark text-sm font-bold leading-140 mb-1 "
        >
          <FormTextarea
              v-model="form.values.message"
              is-transparent
              :error="form.$v.value.message?.$error"
              :placeholder="$t('enter_ur_message')"
              input-class="pl-3 py-4 !h-[140px] dark:bg-[#393A3F] bg-[#393a3f1a] font-semibold leading-140 text-dark dark:text-white !font-medium"
              class="!text-white !font-medium"
          />
        </FormGroup>

        <div class="col-span-2 md:col-span-1">
          <vue-recaptcha
              :key="trigger"
              size="large"
              :sitekey="key"
              @verify="verifyMethod"
              @expired="expiredMethod"
          />
        </div>
        <div class="flex-y-center justify-end col-span-2 md:col-span-1">
          <BaseButton
              class="w-full !text-sm md:w-[270px] !font-bold !leading-none !py-3 !px-6 !text-white hover:!text-black"
              variant="orange"
              :text="t('send')"
              :disabled="!captchaToken"
              :loading="buttonLoading"
              @click="sendMail"
          />
        </div>
      </form>
      <ClientOnly>
        <CommonMap
            class="border-2 dark:border-gray-200 border-orange rounded-2xl"
            :markers="[]"
            :height="'210px'"
            :width="'100%'"
            :center="[41.298152, 69.273924]"
        />
      </ClientOnly>
    </div>
    </div>
    <div
        v-if="showSuccessModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]"
    >
      <div class="bg-white rounded-xl p-6 max-w-md w-full text-center">
        <h2 class="text-xl font-bold mb-4">{{ t("success") }}</h2>
        <p class="mb-6">{{ t("message_sent_successfully") }}</p>
        <BaseButton
            size="sm"
            class="mt-6"
            :text="t('find_out_more')"
            variant="orange"
            @click="showSuccessModal = false"
        />
      </div>
    </div>

    <!-- Error Modal -->
    <div
        v-if="showErrorModal"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
    >
      <div class="bg-white rounded-xl p-6 max-w-md w-full text-center">
        <h2 class="text-xl font-bold mb-4">{{ t("error") }}</h2>
        <p class="mb-6">{{ t("something_went_wrong") }}</p>
        <BaseButton
            size="sm"
            class="mt-6"
            :text="t('find_out_more')"
            variant="orange"
            @click="showErrorModal = false"
        />
      </div>
    </div>

    <div v-if="faq?.length"  class="container my-4 mt-10">
      <h3
        class="text-4xl font-semibold leading-130 tracking-[1.2px] text-dark dark:text-white"
      >
        {{ $t("faq") }}
      </h3>
      <CommonFaq class="" :faq="faq" />

    </div>
  </main>
</template>

<script setup lang="ts">
import { email, required } from "@vuelidate/validators";
import vueRecaptcha from "vue3-recaptcha2";
const faq = ref<any>([])


function getFaqs() {
  const { locale } = useI18n();

  useApi()
      .$get(`/faq/${locale.value}`)
      .then((res) => {
        faq.value = res;
      })
      .catch((err) => {
        console.error("Error fetching faq:", err);
      });
}


getFaqs()

const about = ref<any>([])


function getAbout() {
  const { locale } = useI18n();

  useApi()
      .$get(`/about/${locale.value}`)
      .then((res) => {
        faq.value = res;
      })
      .catch((err) => {
        console.error("Error fetching faq:", err);
      });
}


getAbout()
const captchaToken = ref();
const showSuccessModal = ref(false);
const showErrorModal = ref(false);
const trigger = ref(false);
const { t } = useI18n();
const key = computed(() => import.meta.env.VITE_RECAPTCHA_KEY);


const buttonLoading = ref(false);
const form = useForm(
    {
      name: "",
      email: "",
      message: "",
      country: "",
    },
    {
      email: { required, email },
      name: { required },
      message: { required },
      country: {},
    }
);

const sendMail = async () => {
  form.$v.value.$touch();
  if (!form.$v.value.$invalid && captchaToken.value) {
    buttonLoading.value = true;

    try {
      const response = await useApi().$post("contact", {
        body: {
          name: form.values.name,
          message: form.values.message,
          email: form.values.email,
          country: form.values.country,
        },
      });

      // Success response handling (e.g., status 200)
      showSuccessModal.value = true;
      form.$v.value.$reset();
      form.values.name = "";
      form.values.message = "";
      form.values.email = "";
      form.values.country = "";
      trigger.value = true;
    } catch (error) {
      showErrorModal.value = true;
      console.error(error);
    } finally {
      buttonLoading.value = false;
    }
  }
};

function verifyMethod(response: any) {
  captchaToken.value = response;
}
function expiredMethod() {
  captchaToken.value = null;
}

watch([showSuccessModal, showErrorModal], ([success, error]) => {
  const isModalOpen = success || error;
  if (isModalOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
});

</script>

<style>
@media (max-width: 768px) {
  .main__about {
    background-image: none;
  }
}
</style>
