import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";
import { ShoppingCart } from "@/plugins/repositories";
import VueRouter from "vue-router";
import Vuetify from "vuetify/lib";

Vue.config.productionTip = false;
Vue.use(ShoppingCart);
Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
