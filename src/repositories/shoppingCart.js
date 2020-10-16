import EventBus from "@/event-bus";
import { NEW_PRODUCT_IN_SHOPPING_CART_EVENT } from "@/constants";

export default {
  state: {
    products: []
  },
  add(product) {
    // (i) On doit pouvoir gérer ça a la main facilement sans lib externe a mon avis
    EventBus.$emit(NEW_PRODUCT_IN_SHOPPING_CART_EVENT);

    this.state.products.push(product);
  },
  remove(productToRemove) {
    const index = this.state.products.findIndex(
      product => product.id !== productToRemove.id
    );
    this.state.products.splice(index, 1);
  }
};
