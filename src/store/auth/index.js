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
  actions: {},
};
