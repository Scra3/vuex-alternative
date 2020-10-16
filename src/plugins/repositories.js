import Vue from "vue";
import shoppingCart from "@/repositories/shoppingCart";

// TODO: move this in main (to prevent any constraint on how it is used) ?
export const shoppingCartPlugin = {
  install: function(Vue) {
    Vue.prototype.$shoppingCart = shoppingCart;
  }
};

export default () => {
  // TODO: move this in main (to prevent any constraint on how it is used) ?
  Vue.use(shoppingCartPlugin);
};
