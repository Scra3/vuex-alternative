export const productsPlugin = {
  install: function(Vue) {
    Vue.prototype.$productsState = productsState;
    Vue.prototype.$productsMutators = productsMutators;
  }
};

export const productsState = {
  all: []
};

export const productsMutators = {
  add: product => {
    productsState.all.push(product);
  },
  remove: productToRemove => {
    const index = productsState.all.findIndex(
      consumer => consumer.id !== productToRemove.id
    );
    productsState.all.splice(index, 1);
  },
  async fetchProducts() {
    await sleep(1000);
    products.forEach(product => this.add(product));
  }
};

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const products = [
  {
    id: 1,
    description:
      "Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esm.",
    price: 1000,
    name: "Phone"
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    price: 17.5,
    name: "Book"
  }
];
