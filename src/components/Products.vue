<template>
  <v-container>
    <template v-if="isLoading">
      <v-skeleton-loader type="card"></v-skeleton-loader>
      <v-skeleton-loader type="card"></v-skeleton-loader>
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </template>
    <template v-else>
      <Product
        :product="product"
        v-for="product in products"
        :key="product.id"
      />
    </template>
  </v-container>
</template>

<script>
import Product from "./Product";

export default {
  name: "Products",
  components: { Product },
  data() {
    return { products: this.$productsState.all, isLoading: true };
  },
  async mounted() {
    try {
      this.isLoading = true;
      await this.$productsMutators.fetchProducts();
    } finally {
      this.isLoading = false;
    }
  },
  computed: {}
};
</script>
