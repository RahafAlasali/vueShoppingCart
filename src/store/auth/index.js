import axios from "axios";
export default {
  namespaced: true,
  state: {
    isLogin: localStorage.getItem("token") !== null ? true : false,
    token: localStorage.getItem("token") || null,
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload;
    },
  },
  getters: {
    isLogin(state) {
      return state.isLogin;
    },
  },
  actions: {
    async addUser({ commit }, user) {
      axios
        .post("https://fakestoreapi.com/auth/login", user, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          commit("setLogin", true);
          localStorage.setItem("token", JSON.stringify(res.data.token));
        });
    },
  },
};
