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
    shoppingCartState.products.push(product);
  },
  remove: productToRemove => {
    const index = shoppingCartState.all.findIndex(
      product => product.id !== productToRemove.id
    );
    shoppingCartState.products.splice(index, 1);
  }
};
