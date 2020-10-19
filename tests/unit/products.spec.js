import { createLocalVue, shallowMount } from "@vue/test-utils";
import Products from "@/components/Products.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import { cyclade, dominion } from "@/data/products";
import Vuex from "vuex";
import productsModule from "@/store/products";

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);

describe("Products.vue", () => {
  let wrapper;
  let actions;
  let store;
  let state;

  beforeEach(() => {
    actions = {
      fetchProducts: jest.fn()
    };

    state = {
      all: [cyclade, dominion]
    };

    store = new Vuex.Store({
      modules: {
        products: {
          ...productsModule,
          state,
          actions
        }
      }
    });

    wrapper = shallowMount(Products, {
      store,
      localVue,
      vuetify: new Vuetify()
    });
  });

  it("displays all the fetched products", () => {
    expect(wrapper.findAll("Product-stub").length).toEqual(2);
  });
});
