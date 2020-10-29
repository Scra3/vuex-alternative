import { createLocalVue, shallowMount } from "@vue/test-utils";
import ShoppingCart from "@/components/ShoppingCart.vue";
import { ShoppingCart as ShoppingCartPlugin } from "@/plugins/repositories";
import Vuetify from "vuetify";
import Vue from "vue";
import { dominion, smallWorld } from "@/data/inventory";

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(ShoppingCartPlugin);

/* ----------------------- */
/* Example with plugins */
/* ----------------------- */

describe("ShoppingCart.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ShoppingCart, { localVue, vuetify: new Vuetify() });
  });

  describe("when 2 products in cart", () => {
    beforeEach(async () => {
      wrapper.vm.$shoppingCart.state.products.push(dominion);
      wrapper.vm.$shoppingCart.state.products.push(smallWorld);
      await wrapper.vm.$nextTick();
    });

    it("displays these 2 products", () => {
      expect(wrapper.text()).toContain(dominion.name);
      expect(wrapper.text()).toContain(smallWorld.name);
    });
  });
});
