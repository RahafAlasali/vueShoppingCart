export default {
  namespaced: true,
  state: {
    quantity: JSON.parse(localStorage.getItem("quantityCart")) || 0,
    shoppingCarts: JSON.parse(localStorage.getItem("shoppingCarts")) || [],
  },
  getters: {
    getCount(state) {
      return state.quantity;
    },
  },
  mutations: {
    increaseCount(state) {
      state.quantity += 1;
    },
  },
  actions: {
    increment: ({ state }, { id, quantity }) => {
      state.shoppingCarts = state.shoppingCarts.map((item) => {
        if (item.id == +id)
          return { ...item, quantity: item.quantity + quantity };
        else return item;
      });
    },
    decrease: ({ state }, payload) => {
      state.shoppingCarts = state.shoppingCarts.map((item) => {
        if (item.id == +payload)
          return { ...item, quantity: item.quantity - 1 };
        else return item;
      });
    },

    removeItem: ({ state }, payload) => {
      state.quantity -= state.shoppingCarts.find(
        (item) => item.id == payload
      ).quantity;
      state.shoppingCarts = state.shoppingCarts.filter(
        (item) => +item.id != +payload
      );
    },
    addItemToCart: ({ state, dispatch }, { item, quantity }) => {
      state.quantity += quantity;
      let t = state.shoppingCarts.find((prd) => prd.id == item.id);

      if (!t) {
        state.shoppingCarts.push({ ...item, quantity: quantity });
      } else {
        dispatch("increment", { id: item.id, quantity });
      }
      localStorage.setItem(
        "shoppingCarts",
        JSON.stringify(state.shoppingCarts)
      );
      localStorage.setItem("quantityCart", JSON.stringify(state.quantity));
    },
  },
};
