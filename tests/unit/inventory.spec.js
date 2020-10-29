import { createLocalVue, shallowMount } from "@vue/test-utils";
import Inventory from "@/components/Inventory.vue";
import Product from "@/components/Product";
import Vuetify from "vuetify";
import Vue from "vue";
import { inventory } from "@/data/inventory";
import api from "@/api";

const localVue = createLocalVue();
Vue.use(Vuetify);

/* ----------------------- */
/* Example without plugins */
/* ----------------------- */

describe("Inventory.vue", () => {
  let wrapper;

  beforeEach(() => {
    api.fetchProducts = jest.fn().mockReturnValue(inventory);

    wrapper = shallowMount(Inventory, { localVue, vuetify: new Vuetify() });
  });

  it("displays all the fetched products", () => {
    expect(wrapper.findAllComponents(Product).length).toEqual(inventory.length);
  });
});
