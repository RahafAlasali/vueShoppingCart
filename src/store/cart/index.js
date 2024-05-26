export default {
  namespaced: true,
  state: {
    count: 0,
  },
  getters: {
    getCount(state) {
      return state.count;
    },
  },
  mutations: {
    increaseCount(state) {
      state.count += 1;
    },
  },
  actions: {},
};
