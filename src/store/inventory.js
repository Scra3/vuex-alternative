import api from "@/api";

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
      const products = await api.fetchProducts();
      state.all.splice(0, state.all.length);
      products.forEach(product => commit("add", product));
    }
  }
};
