<template>
  <div>
    <template v-if="isLoading">
      <v-skeleton-loader type="card"></v-skeleton-loader>
      <v-skeleton-loader type="card"></v-skeleton-loader>
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </template>
    <template v-else>
      <Alert />
      <div class="products">
        <Product
          class="products--product"
          :product="product"
          v-for="product in products"
          :key="`p-${product.id}`"
        />
      </div>
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
<style lang="scss" scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;

  &--product {
    width: 70em;
  }
}
</style>
