import { createLocalVue, shallowMount } from "@vue/test-utils";
import Products from "@/components/Products.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import { products } from "@/data/products";
import Vuex from "vuex";
import productsModule from "@/store/products";

import api from "@/api";

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);

describe("Products.vue", () => {
  let wrapper;
  let store;

  beforeEach(async () => {
    api.fetchProducts = jest.fn().mockReturnValue(products);

    store = new Vuex.Store({
      modules: {
        products: productsModule
      }
    });

    wrapper = shallowMount(Products, {
      store,
      localVue,
      vuetify: new Vuetify()
    });

    await wrapper.vm.$nextTick();
  });

  it("displays all the fetched products", () => {
    expect(wrapper.findAll("Product-stub").length).toEqual(products.length);
  });
});
