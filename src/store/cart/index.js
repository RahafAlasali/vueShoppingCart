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
    increment: ({ state }, payload) => {
      state.quantity += 1;
      state.shoppingCarts = state.shoppingCarts.map((item) => {
        if (item.id == +payload)
          return { ...item, quantity: item.quantity + 1 };
        else return item;
      });
      console.log(state.shoppingCarts);
    },
    decrease: ({ state }, payload) => {
      state.quantity -= 1;
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
    addItemToCart: ({ state }, { item, quantity }) => {
      state.quantity += quantity;

      state.shoppingCarts = [
        ...state.shoppingCarts,
        { ...item, quantity: quantity },
      ];

      localStorage.setItem(
        "shoppingCarts",
        JSON.stringify(state.shoppingCarts)
      );
      localStorage.setItem("quantityCart", JSON.stringify(state.quantity));
    },
  },
};
