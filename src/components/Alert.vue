<template>
  <div class="alert">
    <v-alert v-if="isAlertVisible" dense text type="success">
      <span>
        <strong>{{ lastAddedProduct.name }}</strong>
        is added in your shopping cart.
      </span>
    </v-alert>
  </div>
</template>

<script>
import EventBus from "@/event-bus";
import { NEW_PRODUCT_IN_SHOPPING_CART_EVENT } from "@/constants";

export default {
  name: "Alert",
  data() {
    return {
      isAlertVisible: false,
      products: this.$store.state.shoppingCart.products,
      idTimeout: null
    };
  },
  computed: {
    lastAddedProduct() {
      return this.products[this.products.length - 1];
    }
  },
  mounted() {
    EventBus.$on(NEW_PRODUCT_IN_SHOPPING_CART_EVENT, () => {
      this.isAlertVisible = true;
      this.idTimeout && clearTimeout(this.idTimeout);
      this.idTimeout = setTimeout(() => (this.isAlertVisible = false), 2000);
    });
  }
};
</script>

<style scoped lang="scss">
.alert {
  height: 3em;
}
</style>
