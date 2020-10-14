import Vue from "vue";
import { productsPlugin } from "@/repositories/products";

export default () => {
  Vue.use(productsPlugin);
};
