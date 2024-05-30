export default {
  namespaced: true,
  state: {
    //  JSON.parse(localStorage.getItem("quantityCart"))
    // JSON.parse(localStorage.getItem("shoppingCarts"))
    quantity: 0,
    shoppingCarts: [],
    products: [],
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
    setProductsArray: (state, payload) => {
      state.products = payload;
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

    // removeItemToCart: ({state}, payload) => {
    //   state.quantity -= state.shoppingCarts.find(
    //     (item) => item.id == payload
    //   ).quantity;
    //   state.shoppingCarts = state.shoppingCarts.filter(
    //     (item) => +item.id != +payload
    //   );
    // },
    addItemToCart: ({ state }, payload) => {
      state.quantity += 1;
      state.shoppingCarts = [
        ...state.shoppingCarts,
        { ...payload, quantity: 1 },
      ];
    },
    // setTotal: (state) => {
    //   var total = state.shoppingCarts
    //     .map((item) => {
    //       return item.price * item.quantity;
    //     })
    //     .reduce((accumulator, currentValue) => {
    //       return accumulator + currentValue;
    //     }, 0);
    //   state.total = total;
    // },
  },
};
