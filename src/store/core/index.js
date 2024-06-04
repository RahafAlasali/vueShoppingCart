import axios from "axios";
import serviceCore from "./service";
export default {
  namespaced: true,
  state: {
    products: [],
    users: [],
    categories: [],
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setUsers(state, data) {
      state.users = data;
    },
    setCategories(state, data) {
      state.categories = data;
    },
  },
  getters: {},
  actions: {
    async getProducts({ commit }) {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          commit("setProducts", res.data);
        })
        .catch((e) => {});
    },
    async getUsers({ commit }) {
      await axios.get("https://fakestoreapi.com/users").then((res) => {
        commit("setUsers", res.data);
      });
    },
    async deleteProduct({ commit }, id) {
      axios
        .delete(`https://fakestoreapi.com/products/${id}`, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then();
      //delete from array then
    },
    async getCategories({ commit }) {
      axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => {
          commit.setCategories(res.data);
        })
        .catch((e) => {});
    },
  },
};
