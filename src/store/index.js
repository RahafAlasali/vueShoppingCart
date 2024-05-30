import Vue from "vue";
import Vuex from "vuex";
import cart from "@/store/cart";
import auth from "@/store/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // count: 0,
  },
  // getters: {
  //   isLogin(state) {
  //     return false;
  //   },
  // },
  mutations: {},
  actions: {},
  modules: {
    cart,
    auth,
  },
});
