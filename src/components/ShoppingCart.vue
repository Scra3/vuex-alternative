<template>
  <div class="shopping-cart">
    <h1>Your shopping cart</h1>
    <span
      v-if="products.length === 0"
      class="shopping-cart--information-message"
    >
      There are no products
    </span>
    <template v-else class="shopping-cart--products">
      <v-card
        elevation="2"
        class="shopping-cart--product"
        :product="product"
        v-for="(product, index) in products"
        :key="index"
      >
        <img class="shopping-cart--product--picture" :src="product.picture" />
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
      products: this.$shoppingCartState.state.products
    };
  },
  computed: {
    totalPrice() {
      return this.products.reduce((total, product) => {
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
  width: 100%;

  &--information-message {
    display: flex;
    justify-content: center;
  }

  &--products {
    display: flex;
    width: 60%;
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

    &--picture {
      width: 10em;
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
