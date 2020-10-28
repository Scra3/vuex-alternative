import api from "@/api";

const state = {
  products: []
};

export default {
  state,
  add(product) {
    state.products.push(product);
  },
  async fetchProducts() {
    const newProducts = await api.fetchProducts();
    state.products.splice(0, state.products.length);
    newProducts.forEach(product => this.add(product));
  },
  getProductsCount() {
    return state.products.length;
  }
};
