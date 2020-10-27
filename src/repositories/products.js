import api from "@/api";

export default {
  state: {
    all: []
  },
  add(product) {
    this.state.all.push(product);
  },
  async fetchProducts() {
    const products = await api.fetchProducts();
    this.state.all.splice(0, this.state.all.length);
    products.forEach(product => this.add(product));
  }
};
