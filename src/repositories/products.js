import { sleep } from "@/helpers";
import { products } from "@/data/products";

export const productsState = {
  state: {
    all: []
  }
};

export const productsMutators = {
  add: product => {
    productsState.state.all.push(product);
  },
  async fetchProducts() {
    await sleep(1000);
    productsState.state.all.splice(0, productsState.state.all.length);
    products.forEach(product => this.add(product));
  }
};
