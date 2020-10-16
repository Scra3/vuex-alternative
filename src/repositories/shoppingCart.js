import EventBus from "@/event-bus";
import { NEW_PRODUCT_IN_SHOPPING_CART_EVENT } from "@/constants";

export const shoppingCartPlugin = {
  install: function(Vue) {
    Vue.prototype.$shoppingCartState = shoppingCartState;
    Vue.prototype.$shoppingCartMutators = shoppingCartMutators;
  }
};

export const shoppingCartState = {
  state: {
    products: []
  }
};

export const shoppingCartMutators = {
  add: product => {
    EventBus.$emit(NEW_PRODUCT_IN_SHOPPING_CART_EVENT);

    shoppingCartState.state.products.push(product);
  },
  remove: productToRemove => {
    const index = shoppingCartState.state.products.findIndex(
      product => product.id !== productToRemove.id
    );
    shoppingCartState.state.products.splice(index, 1);
  }
};
