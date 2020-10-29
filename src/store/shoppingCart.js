import EventBus from "@/event-bus";
import { NEW_PRODUCT_IN_SHOPPING_CART_EVENT } from "@/constants";

export default {
  namespaced: true,
  state: () => ({
    products: []
  }),
  mutations: {
    add(state, product) {
      EventBus.$emit(NEW_PRODUCT_IN_SHOPPING_CART_EVENT);

      state.products.push(product);
    },
    remove(state, productToRemove) {
      const index = state.products.findIndex(
        product => product.id === productToRemove.id
      );
      state.products.splice(index, 1);
    }
  },
  getters: {
    getTotalPrice(state) {
      return state.products.reduce(
        (total, product) => total + product.price,
        0
      );
    }
  }
};
