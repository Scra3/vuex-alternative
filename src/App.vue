<template>
  <v-app>
    <v-app-bar dark app>
      <v-toolbar-title class="app--title" @click="$router.push('/')"
        >My e-commerce</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn icon x-large @click="$router.push('/shoppingCart')">
        {{ productsInShoppingCart.length }}
        <v-icon>mdi-basket</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      productsInShoppingCart: this.$shoppingCartState.products
    };
  }
};
</script>
<style scoped lang="scss">
.app {
  &--title {
    cursor: pointer;
  }
}
</style>
