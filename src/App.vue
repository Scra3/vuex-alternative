<template>
  <v-app>
    <v-app-bar dark app>
      <img
        class="app--logo"
        src="@/assets/logo.png"
        @click="$router.push('/')"
      />

      <v-toolbar-title @click="$router.push('/')" class="app--title">
        My e-commerce</v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-btn icon x-large @click="$router.push('/shoppingCart')">
        <v-icon>mdi-basket</v-icon>
        {{ productsInShoppingCart.length }}
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
      productsInShoppingCart: this.$store.state.shoppingCart.products
    };
  }
};
</script>
<style scoped lang="scss">
.app {
  &--title,
  &--logo {
    cursor: pointer;
  }

  &--logo {
    height: 100%;
  }
}
</style>
