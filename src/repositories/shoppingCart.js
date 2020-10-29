import EventBus from "@/event-bus";
import { NEW_PRODUCT_IN_SHOPPING_CART_EVENT } from "@/constants";

const generateRandomId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 9);
};

export default {
  state: {
    products: []
  },
  add(product) {
    EventBus.$emit(NEW_PRODUCT_IN_SHOPPING_CART_EVENT);

    this.state.count++;
    this.state.products.push({
      ...product,
      shoppingCartId: generateRandomId()
    });
  },
  remove(productToRemove) {
    this.state.products = this.state.products.filter(
      product => product.shoppingCartId !== productToRemove.shoppingCartId
    );
  },
  get totalPrice() {
    return this.state.products.reduce(
      (total, product) => total + product.price,
      0
    );
  }
};
