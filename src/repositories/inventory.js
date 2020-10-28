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
    this.state.products.splice(0, this.state.products.length);
    newProducts.forEach(product => this.add(product));
  }
};
