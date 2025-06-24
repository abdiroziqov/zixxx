<template>
  <section class="bg-white dark:!bg-dark pb-16">
    <!--    <pre class="text-white">products:{{products}}</pre>-->
    <div class="container">
      <div class="flex justify-between items-center">
        <h3
          class="font-semibold text-3xl leading-130 text-dark dark:text-white my-7"
        >
          {{ $t("all_products") }}
        </h3>
        <FormSelect
          v-model="form.values.product"
          :options="productsList"
          label-key="title"
          value-key="id"
          selected-option-styles="text-red-500"
          :placeholder="t('all_products')"
        />
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <CommonProductsProductCard />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const productsList = [
  { id: 1, title: t("all_products") },
  { id: 2, title: "ZIXX" },
  { id: 3, title: "Dogan Alçi" },
  { id: 4, title: "Dogan" },
  { id: 5, title: "Kaya Boya" },
  { id: 6, title: "Farben" },
  { id: 7, title: "Alvin" },
];

const form = useForm({
  product: "",
});

const products = ref<any>([]);

function getFaqs() {
  const { locale } = useI18n(); // get current locale
  useApi()
    .$get(`/product/1/${locale.value}`) // use the locale in the API path
    .then((res) => {
      products.value = res;
    })
    .catch((err) => {
      console.error("Error fetching products:", err);
    });
}
getFaqs();
</script>

<style scoped>
/* You can add animations or extra styles here later */
</style>
