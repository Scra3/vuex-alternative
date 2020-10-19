import { products as fakeProducts } from "@/data/products";

export default {
  namespaced: true,
  state: () => ({
    all: []
  }),
  mutations: {
    add(state, product) {
      state.all.push(product);
    }
  },
  actions: {
    async fetchProducts({ commit, state }) {
      await sleep(1000);
      state.all.splice(0, state.all.length);
      fakeProducts.forEach(product => commit("add", product));
    }
  }
};

const sleep = time => {
  return new Promise(resolve => setTimeout(resolve, time));
};
