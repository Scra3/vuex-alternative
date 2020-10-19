import { createLocalVue, shallowMount } from "@vue/test-utils";
import ShoppingCart from "@/components/ShoppingCart.vue";
import Vuetify from "vuetify";
import Vue from "vue";
<<<<<<< HEAD
import { dominion, smallWorld } from "@/data/inventory";
=======
import { dominion, smallWorld } from "@/data/products";
import Vuex from "vuex";
import shoppingCartModule from "@/store/shoppingCart";
>>>>>>> ee9bac9... add version with vuex

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(Vuex);

describe("ShoppingCart.vue", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        shoppingCart: shoppingCartModule
      }
    });

    wrapper = shallowMount(ShoppingCart, {
      store,
      localVue,
      vuetify: new Vuetify()
    });
  });

  it("displays all the added products", async () => {
<<<<<<< HEAD
    wrapper.vm.$shoppingCart.state.products.push(dominion);
    wrapper.vm.$shoppingCart.state.products.push(smallWorld);
=======
    wrapper.vm.$store.commit("shoppingCart/add", dominion);
    wrapper.vm.$store.commit("shoppingCart/add", smallWorld);
>>>>>>> ee9bac9... add version with vuex
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain(dominion.name);
    expect(wrapper.text()).toContain(smallWorld.name);
  });
});
