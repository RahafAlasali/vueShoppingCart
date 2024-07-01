import Vue from "vue";
import Vuex from "vuex";
import cart from "@/store/cart";
import auth from "@/store/auth";
import core from "@/store/core";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadPage: true,
  },
  getters: {},
  mutations: {
    setLoading(state, load) {
      console.log(load, "load");
      state.loadPage = load;
    },
  },
  actions: {},
  modules: {
    cart,
    auth,
    core,
  },
});
