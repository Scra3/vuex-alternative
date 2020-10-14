<template>
  <div class="shopping-cart">
    <h1>Your shopping cart</h1>
    <span
      v-if="productsInShoppingCart.length === 0"
      class="shopping-cart--information-message"
    >
      There are no products
    </span>
    <template v-else>
      <v-card
        elevation="2"
        class="shopping-cart--product"
        :product="product"
        v-for="(product, index) in productsInShoppingCart"
        :key="index"
      >
        <h3>{{ product.name }}</h3>
        <span class="shopping-cart--product--price">{{ product.price }}</span>
        <v-btn color="error" @click="remove(product)">
          remove
        </v-btn>
      </v-card>
      <section class="shopping-cart--total">
        <h2>
          Total:
          <span class="shopping-cart--total--price">{{ totalPrice }}</span>
        </h2>
        <v-btn color="success">
          Place order
        </v-btn>
      </section>
    </template>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  data() {
    return {
      productsInShoppingCart: this.$shoppingCartState.products
    };
  },
  computed: {
    totalPrice() {
      return this.productsInShoppingCart.reduce((total, product) => {
        return total + product.price;
      }, 0);
    }
  },
  methods: {
    remove(product) {
      this.$shoppingCartMutators.remove(product);
    }
  }
};
</script>

<style scoped lang="scss">
.shopping-cart {
  &--information-message {
    display: flex;
    justify-content: center;
  }
  &--product {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
    padding: 1em;
    align-items: center;

    &--price:before {
      content: "$";
    }
  }

  &--total {
    text-align: right;
    &--price:before {
      content: "$";
    }
  }
}
</style>
