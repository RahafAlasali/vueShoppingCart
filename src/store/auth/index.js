export default {
  namespaced: true,
  state: {
    isLogin: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  },
  mutations: {
    setLogin(state, payload) {
      state.isLogin = payload;
    },
  },
  getters: {},
  actions: {},
};
