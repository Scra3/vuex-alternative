import EventBus from "../event-bus";

export const shoppingCartPlugin = {
  install: function(Vue) {
    Vue.prototype.$shoppingCartState = shoppingCartState;
    Vue.prototype.$shoppingCartStateMutators = shoppingCartStateMutators;
  }
};

export const shoppingCartState = {
  products: []
};

export const shoppingCartStateMutators = {
  add: product => {
    EventBus.$emit(
      "NEW_PRODUCT_IN_SHOPPING_CART",
      shoppingCartState.products.length
    );
    shoppingCartState.products.push(product);
  },
  remove: productToRemove => {
    const index = shoppingCartState.products.findIndex(
      product => product.id !== productToRemove.id
    );
    shoppingCartState.products.splice(index, 1);
  }
};
