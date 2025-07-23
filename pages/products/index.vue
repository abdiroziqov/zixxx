<template>
  <section class="bg-white dark:!bg-dark pb-16">
    <div class="container">
      <div class="flex justify-between items-center">
        <h3 class="font-semibold text-3xl leading-130 text-dark dark:text-white my-7">
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
      <!-- Loader -->
      <div v-if="loading" class="flex justify-center py-20">
        <div class="w-10 h-10 border-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
      </div>

      <!-- No Products -->
      <div v-else-if="filteredProducts.length === 0" class="text-center w-full py-20">
        <p class="text-xl text-gray-500 dark:text-gray-400 font-medium">
          {{ $t("no_products_available") }}
        </p>
      </div>


      <!-- Product Grid -->
      <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-5">
        <CommonProductsProductCard :products="filteredProducts" />
      </div>

    </div>
  </section>
</template>


<script setup lang="ts">
const { t, locale } = useI18n();
const products = ref<any[]>([]);
const loading = ref(true);

const form = useForm({
  product: 1, // default to "All products"
});

const productsList = [
  { id: 1, title: t("all_products") },
  { id: 2, title: "ZIXX" },
  { id: 3, title: "Dogan Alçi" },
  { id: 4, title: "Dogan" },
  { id: 5, title: "Kaya Boya" },
  { id: 6, title: "Farben" },
  { id: 7, title: "Alvin" },
];

function getFaqs() {
  loading.value = true;
  useApi()
      .$get(`/products/${locale.value}`)
      .then((res) => {
        products.value = res;
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      })
      .finally(() => {
        loading.value = false;
      });
}

onMounted(getFaqs);

const filteredProducts = computed(() => {
  const selected = form.values.product;
  let result = [];

  if (selected === 1) {
    result = products.value;
  } else {
    const selectedItem = productsList.find((item) => item.id === selected);
    if (selectedItem) {
      result = products.value.filter(
          (product) => product.category === selectedItem.title
      );
    }
  }

  return result.slice().sort((a, b) => a.id - b.id); // sort by id ascending
});


</script>
<!--/-->