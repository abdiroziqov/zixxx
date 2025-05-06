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
    <div class="container my-4 mt-10">
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

const { t } = useI18n();
const faq = [
  {
    id: 1,
    question: t("faq_one"),
    answer: t("faq_one_answer"),
  },
  {
    id: 2,
    question: t("faq_two"),
    answer: t("faq_two_answer"),
  },
  {
    id: 3,
    question: t("faq_three"),
    answer: t("faq_three_answer"),
  },
  {
    id: 4,
    question: t("faq_four"),
    answer: t("faq_four_answer"),
  },
  {
    id: 5,
    question: t("faq_five"),
    answer: t("faq_five_answer"),
  },
  {
    id: 6,
    question: t("faq_six"),
    answer: t("faq_six_answer"),
  },
  {
    id: 7,
    question: t("faq_seven"),
    answer: t("faq_seven_answer"),
  },
  {
    id: 8,
    question: t("faq_eight"),
    answer: t("faq_eight_answer"),
  },
  {
    id: 9,
    question: t("faq_nine"),
    answer: t("faq_nine_answer"),
  },
  {
    id: 10,
    question: t("faq_ten"),
    answer: t("faq_ten_answer"),
  },
  {
    id: 11,
    question: t("faq_eleven"),
    answer: t("faq_eleven_answer"),
  },
  {
    id: 12,
    question: t("faq_twelve"),
    answer: t("faq_twelve_answer"),
  },
  {
    id: 13,
    question: t("faq_thirteen"),
    answer: t("faq_thirteen_answer"),
  },
];
</script>

<style>
@media (max-width: 768px) {
  .main__about {
    background-image: none;
  }
}
</style>
