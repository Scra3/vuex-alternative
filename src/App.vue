<template>
  <v-app>
    <v-app-bar dark app>
      <v-toolbar-title>My e-commerce</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        {{ productsInShoppingCart ? productsInShoppingCart.length : 0 }}
        <v-icon>mdi-basket</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Alert
          :key="productsInShoppingCart.length"
          v-if="productsInShoppingCart.length > 0"
          :product="productsInShoppingCart[productsInShoppingCart.length - 1]"
        />
        <Products />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Products from "./components/Products";
import Alert from "./components/Alert";

export default {
  name: "App",
  components: {
    Alert,
    Products
  },
  data() {
    return { productsInShoppingCart: this.$shoppingCartState.products };
  }
};
</script>
