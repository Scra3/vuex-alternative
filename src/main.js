import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import vueUseRepositories from "./plugins/repositories";
import router from "./plugins/router";

Vue.config.productionTip = false;

vueUseRepositories();

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
