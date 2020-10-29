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
          v-for="product in products"
          :key="product.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import Alert from "@/components/Alert";
import { mapGetters } from "vuex";

export default {
  name: "Inventory",
  components: { Product, Alert },
  data() {
    return {
      products: this.$store.state.inventory.products,
      isLoading: true
    };
  },
  computed: {
    ...mapGetters({
      productsCount: "inventory/getProductsCount"
    })
  },
  async mounted() {
    try {
      this.isLoading = true;
      await this.$store.dispatch("inventory/fetchProducts");
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
