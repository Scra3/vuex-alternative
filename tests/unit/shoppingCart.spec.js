import { createLocalVue, shallowMount } from "@vue/test-utils";
import ShoppingCart from "@/components/ShoppingCart.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import { dominion, smallWorld } from "@/data/inventory";
import Vuex from "vuex";
import shoppingCartModule from "@/store/shoppingCart";

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);

describe("ShoppingCart.vue", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    const state = {
      products: [dominion, smallWorld]
    };

    store = new Vuex.Store({
      modules: {
        shoppingCart: {
          ...shoppingCartModule,
          state
        }
      }
    });

    wrapper = shallowMount(ShoppingCart, {
      store,
      localVue,
      vuetify: new Vuetify()
    });
  });

  it("displays all the added products", async () => {
    wrapper.vm.$store.commit("shoppingCart/add", dominion);
    wrapper.vm.$store.commit("shoppingCart/add", smallWorld);
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain(dominion.name);
    expect(wrapper.text()).toContain(smallWorld.name);
  });
});
