import { sleep } from "@/helpers";
import { products as fakeProducts } from "@/data/products";

// TODO On doit pouvoir virer cette const, mais je ne sais pas faire une sorte de this.state dans Products.add() par exemple.
const state = {
    all: []
};

export default {
  state:state,
  add(product) {
    state.all.push(product);
  },
  async fetchProducts() {
    await sleep(1000);
    state.all.splice(0, state.all.length);
    fakeProducts.forEach(product => this.add(product));
  }
};
