import { createLocalVue, shallowMount } from "@vue/test-utils";
import ShoppingCart from "@/components/ShoppingCart.vue";
import { ShoppingCart as ShoppingCartPlugin } from "@/plugins/repositories";
import ShoppingCartRepo from "@/repositories/shoppingCart.js";
import Vuetify from "vuetify";
import Vue from "vue";
import { dominion, smallWorld } from "@/data/inventory";

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(ShoppingCartPlugin);

describe("ShoppingCart.vue", () => {
  let wrapper;

  describe("when 2 products in cart", () => {
    beforeEach(() => {
      ShoppingCartRepo.add(dominion);
      ShoppingCartRepo.add(smallWorld);
      wrapper = shallowMount(ShoppingCart, {
        localVue,
        vuetify: new Vuetify()
      });
    });

    it("displays these 2 products", () => {
      expect(wrapper.text()).toContain(dominion.name);
      expect(wrapper.text()).toContain(smallWorld.name);
    });
  });
});
