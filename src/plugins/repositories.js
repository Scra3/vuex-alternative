import Vue from "vue";
import { productsPlugin } from "@/repositories/products";
import { shoppingCartPlugin } from "@/repositories/shopping_cart";

export default () => {
  Vue.use(productsPlugin);
  Vue.use(shoppingCartPlugin);
};
