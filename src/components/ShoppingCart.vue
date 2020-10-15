<template>
  <div class="shopping-cart">
    <h1>Your shopping cart</h1>
    <span
      v-if="products.length === 0"
      class="shopping-cart--information-message"
    >
      There are no products
    </span>
    <template v-else>
      <section class="shopping-cart--total">
        <h2>
          Total:
          <span class="shopping-cart--total--price">{{ totalPrice }}</span>
        </h2>
        <v-btn color="success">
          Place order
          <v-icon right>
            mdi-credit-card-outline
          </v-icon>
        </v-btn>
      </section>
      <div class="shopping-cart--products">
        <h2 class="shopping-cart--products--count">
          Product(s): {{ products.length }}
        </h2>
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

      <section class="shopping-cart--total">
        <h2>
          Total:
          <span class="shopping-cart--total--price">{{ totalPrice }}</span>
        </h2>
        <v-btn color="success">
          Place order
          <v-icon right>
            mdi-credit-card-outline
          </v-icon>
        </v-btn>
      </section>
    </template>
  </div>
</template>

<script>
/* ----------------------- */
/* Example with plugins */
/* ----------------------- */

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
    width: 70em;

    &--count {
      align-self: flex-end;
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
  }

  &--total {
    text-align: right;
    align-self: flex-end;
    &--price:before {
      content: "$";
    }
  }
}
</style>
