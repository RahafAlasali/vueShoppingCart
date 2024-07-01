import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify, { i18n } from "./plugins/vuetify";
import axios from "axios";
import loader from "vue-ui-preloader";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import "@/mixins/generalMixin";
import ZoomOnHover from "vue-zoom-on-hover";
import AOS from "aos";
import "aos/dist/aos.css";

const conficToast = {
  timeout: 1500,
  pauseOnHover: false,
};
Vue.use(Toast, conficToast);
Vue.use(loader);
Vue.use(ZoomOnHover);
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
  }, 1000);
});
const app = new Vue({
  router,
  store,
  vuetify,
  i18n,
  loader: loader,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
