import { createLocalVue, shallowMount } from "@vue/test-utils";
import Products from "@/components/Products.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import { products } from "@/data/products";
import api from "@/api";

const localVue = createLocalVue();
Vue.use(Vuetify);

/* ----------------------- */
/* Example without plugins */
/* ----------------------- */

describe("Products.vue", () => {
  let wrapper;

  beforeEach(() => {
    api.fetchProducts = jest.fn().mockReturnValue(products);

    wrapper = shallowMount(Products, { localVue, vuetify: new Vuetify() });
  });

  it("displays all the fetched products", () => {
    expect(wrapper.findAll("Product-stub").length).toEqual(products.length);
  });
});
