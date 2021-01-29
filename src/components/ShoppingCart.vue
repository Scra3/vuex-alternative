<template>
  <div class="shopping-cart">
    <h1>Your shopping cart</h1>
    <span
      v-if="products.length === 0"
      class="shopping-cart--information-message"
    >
      There is no product
    </span>
    <template v-else>
      <ShoppingCartTotalPrice :total-price="totalPrice" />

      <div class="shopping-cart--products">
        <h2>{{ products.length }} Product(s)</h2>
        <v-card
          elevation="2"
          class="shopping-cart--products--product"
          :product="product"
          v-for="(product, index) in products"
          :key="index"
        >
          <img
            class="shopping-cart--products--product--picture"
            :src="product.picture"
            :alt="product.name"
          />
          <h3>{{ product.name }}</h3>
          <span class="shopping-cart--products--product--price">{{
            product.price
          }}</span>
          <v-btn color="error" @click="remove(product)">
            remove
            <v-icon right>
              mdi-delete
            </v-icon>
          </v-btn>
        </v-card>
      </div>

      <ShoppingCartTotalPrice :total-price="totalPrice" />
    </template>
  </div>
</template>

<script>
import ShoppingCartTotalPrice from "./ShoppingCartTotalPrice";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ShoppingCart",
  components: { ShoppingCartTotalPrice },
  data() {
    return {
      products: this.$store.state.shoppingCart.products
    };
  },
  computed: {
    ...mapGetters({
      totalPrice: "shoppingCart/getTotalPrice"
    })
  },
  methods: {
    ...mapMutations({
      remove: "shoppingCart/remove"
    })
  }
};
</script>

<style scoped lang="scss">
.shopping-cart {
  display: flex;
  flex-direction: column;
  align-items: center;

  &--information-message {
    display: flex;
    justify-content: center;
  }

  &--products {
    display: flex;
    flex-direction: column;
    max-width: 70em;
    width: 100%;
    min-width: 30em;

    &--product {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2em;
      padding: 1em;
      align-items: center;

      &--price:before {
        content: "$";
      }

      &--picture {
        width: 10em;
      }
    }
  }
}
</style>
