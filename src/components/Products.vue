<template>
  <div>
    <Alert />
    <div class="products">
      <template v-if="isLoading">
        <v-skeleton-loader
          class="products--product"
          type="card"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="products--product"
          type="card"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="products--product"
          type="card"
        ></v-skeleton-loader>
      </template>
      <Product
        v-else
        class="products--product"
        :product="product"
        v-for="product in products"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import Alert from "@/components/Alert";
import Products from "@/repositories/products";

/* ----------------------- */
/* Example without plugins */
/* ----------------------- */

export default {
  name: "Products",
  components: { Product, Alert },
  data() {
    return {
      products: Products.state.all,
      isLoading: true
    };
  },
  async mounted() {
    try {
      this.isLoading = true;
      await Products.fetchProducts();
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
