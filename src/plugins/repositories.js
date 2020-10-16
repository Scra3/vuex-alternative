import Vue from "vue";
import { shoppingCartPlugin } from "@/repositories/shoppingCart";

export default () => {
  // TODO: move this in main (to prevent any constraint on how it is used) ?
  Vue.use(shoppingCartPlugin);
};
