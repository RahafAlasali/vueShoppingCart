import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify, { i18n } from "./plugins/vuetify";
import axios from "axios";
import loader from "vue-ui-preloader";
Vue.use(loader);
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
const conficToast = {
  timeout: 1500,
  pauseOnHover: false,
};
Vue.use(Toast, conficToast);

Vue.config.productionTip = false;
// Vue.use(axios);
router.beforeEach((to, from, next) => {
  store.state.loadPage = true;
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

router.afterEach((to, from) => {
  setTimeout(() => {
    store.state.loadPage = false;
  }, 1300);
});
const app = new Vue({
  router,
  store,
  vuetify,
  i18n,
  loader: loader,
  render: (h) => h(App),
}).$mount("#app");
