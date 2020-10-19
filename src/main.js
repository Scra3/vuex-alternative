import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";
import VueRouter from "vue-router";
import Vuetify from "vuetify/lib";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
