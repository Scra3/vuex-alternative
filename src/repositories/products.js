import { products as fakeProducts } from "@/data/products";

const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};

export default {
  state: {
    all: []
  },
  add(product) {
    this.state.all.push(product);
  },
  async fetchProducts() {
    await sleep(1000);
    this.state.all.splice(0, this.state.all.length);
    fakeProducts.forEach(product => this.add(product));
  }
};
