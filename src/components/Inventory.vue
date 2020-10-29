<template>
  <div>
    <Alert />
    <div class="inventory">
      <template v-if="isLoading">
        <v-skeleton-loader
          v-for="index in 3"
          :key="index"
          class="inventory--product"
          type="card"
        ></v-skeleton-loader>
      </template>
      <template v-else>
        <h2>{{ productsCount }} Product(s) available for sale</h2>
        <Product
          class="inventory--product"
          :product="product"
          v-for="product in inventory.products"
          :key="product.id"
        />
      </template>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import Alert from "@/components/Alert";
import Inventory from "@/repositories/inventory";

/* ----------------------- */
/* Example without plugins */
/* ----------------------- */

export default {
  name: "Inventory",
  components: { Product, Alert },
  data() {
    return {
      inventory: Inventory.state,
      isLoading: true
    };
  },
  computed: {
    productsCount() {
      return Inventory.productsCount;
    }
  },
  async mounted() {
    try {
      this.isLoading = true;
      await Inventory.fetchProducts();
    } finally {
      this.isLoading = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.inventory {
  display: flex;
  flex-direction: column;
  align-items: center;

  &--product {
    max-width: 70em;
    width: 100%;
  }
}
</style>
