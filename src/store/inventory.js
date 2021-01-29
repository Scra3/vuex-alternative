import api from "@/api";

export default {
  namespaced: true,
  state: () => ({
    products: []
  }),
  mutations: {
    add(state, product) {
      state.products.push(product);
    }
  },
  actions: {
    async fetchProducts({ commit, state }) {
      const products = await api.fetchProducts();
      state.products.splice(0, state.products.length);
      products.forEach(product => commit("add", product));
    }
  },
  getters: {
    getProductsCount(state) {
      return state.products.length;
    }
  }
};
