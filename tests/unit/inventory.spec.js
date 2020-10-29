import { createLocalVue, shallowMount } from "@vue/test-utils";
import Inventory from "@/components/Inventory.vue";
import Product from "@/components/Product";
import Vuetify from "vuetify";
import Vue from "vue";
import { cyclades, dominion } from "@/data/inventory";
import api from "@/api";

const localVue = createLocalVue();
Vue.use(Vuetify);

/* ----------------------- */
/* Example without plugins */
/* ----------------------- */

describe("Inventory.vue", () => {
  let wrapper;

  describe("when 2 products in the inventory", () => {
    beforeEach(() => {
      api.fetchProducts = jest.fn().mockReturnValue([cyclades, dominion]);
      wrapper = shallowMount(Inventory, { localVue, vuetify: new Vuetify() });
    });

    it("displays 2 products", () => {
      expect(wrapper.findAllComponents(Product)).toHaveLength(2);
    });
  });
});
