<template>
  <div>
    <Alert />
    <div class="inventory">
      <div v-if="isLoading" class="inventory--products">
        <v-skeleton-loader
          v-for="index in 3"
          :key="index"
          type="card"
        ></v-skeleton-loader>
      </div>
      <div v-else class="inventory--products">
        <h2>{{ productsCount }} Product(s) available for sale</h2>
        <Product
          :product="product"
          v-for="product in inventory.products"
          :key="product.id"
        />
      </div>
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

  &--products {
    max-width: 70em;
    width: 100%;
  }
}
</style>
