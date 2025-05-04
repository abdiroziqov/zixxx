<template>
  <div class="">
  <div class="relative container bg-white dark:!bg-dark">
      <BaseBreadcrumb :breadcrumb="menu" />
      <div class="w-full lg:w-[782px] mx-auto">
        <div
            class="flex md:justify-center flex-col pt-4 pb-10 gap-6"
        >
          <h3 class="font-semibold tracking-[1.2px] leading-130 text-3xl dark:text-white text-dark">{{ $t('feedback_form') }}</h3>

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
<!--          <CommonLocations />-->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { email, required } from '@vuelidate/validators'
import vueRecaptcha from 'vue3-recaptcha2'

const captchaToken = ref()
const trigger = ref(false)
const { t } = useI18n();
const key = computed(() => import.meta.env.VITE_RECAPTCHA_KEY)

const menu = computed(() => {
  return [
    {
      title: 'Contact us',
      link: '/contact',
    },
  ]
})

const buttonLoading = ref(false)
const form = useForm(
    {
      name: '',
      email: '',
      message: '',
      country: '',
    },
    {
      email: { required, email },
      name: { required },
      message: { required },
      country: {},
    },
)

const sendMail = () => {
  form.$v.value.$touch()
  if (!form.$v.value.$invalid) {
    buttonLoading.value = true
    try {
      useApi()
          .$post('contact', {
            body: {
              name: form.values.name,
              message: form.values.message,
              email: form.values.email,
              country: form.values.country,
            },
          })
          .then(() => {
            form.$v.value.$reset()
            form.values.name = ''
            form.values.message = ''
            form.values.email = ''
            form.values.country = ''
            trigger.value = true
          })
    } catch (e) {
      console.log(e)
    } finally {
      buttonLoading.value = false
    }
  }
}

function verifyMethod(response: any) {
  captchaToken.value = response
}
function expiredMethod() {
  captchaToken.value = null
}
</script>
