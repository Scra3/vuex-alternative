import Vuex from "vuex";
import productsModule from "@/store/products";
import shoppingCartModule from "@/store/shoppingCart";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products: productsModule,
    shoppingCart: shoppingCartModule
  }
});
