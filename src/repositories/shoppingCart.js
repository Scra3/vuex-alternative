import EventBus from "@/event-bus";
import { NEW_PRODUCT_IN_SHOPPING_CART_EVENT } from "@/constants";

// TODO: move this in main (to prevent any constraint on how it is used) ?
export const shoppingCartPlugin = {
  install: function(Vue) {
    Vue.prototype.$shoppingCart = shoppingCart;
  }
};

export const state = {
    products: []
};

export const shoppingCart = {
  state: state,
  add(product) {
    // (i) On doit pouvoir gérer ça a la main facilement sans lib externe a mon avis
    EventBus.$emit(NEW_PRODUCT_IN_SHOPPING_CART_EVENT);

    state.products.push(product);
  },
  remove(productToRemove) {
    const index = state.products.findIndex(
      product => product.id !== productToRemove.id
    );
    state.products.splice(index, 1);
  }
};
