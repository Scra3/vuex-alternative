import Vue from "vue";
import { shoppingCartPlugin } from "@/repositories/shoppingCart";

export default () => {
  Vue.use(shoppingCartPlugin);
};
