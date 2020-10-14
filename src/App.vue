<template>
  <div>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-toolbar-title>My e-commerce</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-basket</v-icon>
      </v-btn>
    </v-app-bar>
    <v-app>
      <Products />
    </v-app>
  </div>
</template>

<script>
import Products from "./components/Products";

export default {
  name: "App",

  components: {
    Products
  },

  data: () => ({
    //
  })
};
</script>
