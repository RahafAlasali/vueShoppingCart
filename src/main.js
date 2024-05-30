import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify, { i18n } from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;
// Vue.use(axios);
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters["auth/isLogin"]) {
      next({
        name: "login",
      });
    } else {
      next();
    }
  }
  next();
});

const app = new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
