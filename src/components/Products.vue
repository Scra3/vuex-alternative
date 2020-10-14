<template>
  <div>
    <template v-if="isLoading">
      <v-skeleton-loader type="card"></v-skeleton-loader>
      <v-skeleton-loader type="card"></v-skeleton-loader>
      <v-skeleton-loader type="card"></v-skeleton-loader>
    </template>
    <template v-else>
      <Alert
        :key="eventId"
        v-if="eventId !== null"
        :product="productsInShoppingCart[productsInShoppingCart.length - 1]"
      />
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
import EventBus from "../event-bus";

export default {
  name: "Products",
  components: { Product, Alert },
  data() {
    return {
      products: this.$productsState.all,
      isLoading: true,
      productsInShoppingCart: this.$shoppingCartState.products,
      eventId: null
    };
  },
  async mounted() {
    const self = this;
    EventBus.$on("NEW_PRODUCT_IN_SHOPPING_CART", eventId => {
      self.eventId = eventId;
    });

    try {
      this.isLoading = true;
      await this.$productsMutators.fetchProducts();
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
