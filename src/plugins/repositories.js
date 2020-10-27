import shoppingCart from "@/repositories/shoppingCart";

export const ShoppingCart = {
  install: function(Vue) {
    Vue.prototype.$shoppingCart = shoppingCart;
  }
};
