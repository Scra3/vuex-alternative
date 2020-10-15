import { createLocalVue, shallowMount } from "@vue/test-utils";
import ShoppingCart from "@/components/ShoppingCart.vue";
import { shoppingCartPlugin } from "@/repositories/shoppingCart";
import Vuetify from "vuetify";
import Vue from "vue";
import { dominion, smallWorld } from "@/data/products";

const localVue = createLocalVue();
Vue.use(Vuetify);
localVue.use(shoppingCartPlugin);

/* ----------------------- */
/* Example with plugins */
/* ----------------------- */

describe("ShoppingCart.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(ShoppingCart, { localVue, vuetify: new Vuetify() });
  });

  it("displays all added products", async () => {
    wrapper.vm.$shoppingCartMutators.add(dominion);
    wrapper.vm.$shoppingCartMutators.add(smallWorld);
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain(dominion.name);
    expect(wrapper.text()).toContain(smallWorld.name);
  });
});
