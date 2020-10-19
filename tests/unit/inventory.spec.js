import { createLocalVue, shallowMount } from "@vue/test-utils";
import Inventory from "@/components/Inventory.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import { cyclade, dominion } from "@/data/inventory";
import Vuex from "vuex";
import inventoryModule from "@/store/inventory";

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);

describe("Inventory.vue", () => {
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
          ...inventoryModule,
          state,
          actions
        }
      }
    });

    wrapper = shallowMount(Inventory, {
      store,
      localVue,
      vuetify: new Vuetify()
    });
  });

  it("displays all the fetched products", () => {
    expect(wrapper.findAll("Product-stub").length).toEqual(2);
  });
});
