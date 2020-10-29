import Vuex from "vuex";
import inventoryModule from "@/store/inventory";
import shoppingCartModule from "@/store/shoppingCart";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    inventory: inventoryModule,
    shoppingCart: shoppingCartModule
  }
});
