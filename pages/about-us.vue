<template>
  <main class="md:pb-10 pb-10 bg-white dark:bg-dark">
    <div
      class="main__about py-10 bg-[url('/public/images/about.png')] bg-cover bg-no-repeat"
    >
      <div class="container">
        <div class="md:w-[500px]">
          <h3
            class="text-3xl font-semibold leading-130 tracking-[1.2px] text-white"
          >
            {{ $t("company_razata") }}
          </h3>
          <p class="text-lg leading-140 mt-6 text-white">
            {{ $t("company_rzata_text") }}
          </p>
        </div>
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
</script>

<style>
@media (max-width: 768px) {
  .main__about {
    background-image: none;
  }
}
</style>
