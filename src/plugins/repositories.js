import Vue from "vue";
import { productsPlugin } from "@/repositories/products";
import { shoppingCartPlugin } from "@/repositories/shoppingCart";

export default () => {
  Vue.use(productsPlugin);
  Vue.use(shoppingCartPlugin);
};
