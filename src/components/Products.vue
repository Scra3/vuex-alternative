<template>
  <div>
    <template v-if="isLoading">
      <v-skeleton-loader type="card"></v-skeleton-loader>
      <v-skeleton-loader type="card"></v-skeleton-loader>
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </template>
    <template v-else>
      <Alert />
      <Product
        :product="product"
        v-for="product in products"
        :key="`p-${product.id}`"
      />
    </template>
  </div>
</template>

<script>
import Product from "./Product";
import Alert from "@/components/Alert";

export default {
  name: "Products",
  components: { Product, Alert },
  data() {
    return {
      products: this.$productsState.state.all,
      isLoading: true,
      shoppingCartState: this.$shoppingCartState.state,
      productsInShoppingCart: this.$shoppingCartState.state.products
    };
  },
  async mounted() {
    try {
      this.isLoading = true;
      await this.$productsMutators.fetchProducts();
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
