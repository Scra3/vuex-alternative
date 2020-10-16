import { createLocalVue, shallowMount } from "@vue/test-utils";
import Products from "@/components/Products.vue";
import ProductsRepository from "@/repositories/products";
import Vuetify from "vuetify";
import Vue from "vue";
import { cyclade, dominion } from "@/data/products";

const localVue = createLocalVue();
Vue.use(Vuetify);

/* ----------------------- */
/* Example without plugins */
/* ----------------------- */

describe("Products.vue", () => {
  let wrapper;

  beforeEach(() => {
    ProductsRepository.fetchProducts = jest.fn(() => {
      ProductsRepository.add(cyclade);
      ProductsRepository.add(dominion);
    });

    wrapper = shallowMount(Products, { localVue, vuetify: new Vuetify() });
  });

  it("displays all the fetched products", () => {
    expect(wrapper.findAll("Product-stub").length).toEqual(2);
  });
});
