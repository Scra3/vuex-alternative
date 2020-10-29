import api from "@/api";

export default {
  state: {
    products: []
  },
  add(product) {
    this.state.products.push(product);
  },
  async fetchProducts() {
    const newProducts = await api.fetchProducts();
    this.state.products = [];
    newProducts.forEach(product => this.add(product));
  },
  get productsCount() {
    return this.state.products.length;
  }
};
