import axios from "axios";
import serviceCore from "./service";

export default {
  namespaced: true,
  state: {
    products: [],
    product: null,
    users: [],
    categories: [],
    prdRelated: [],
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
    setProduct(state, data) {
      state.product = data;
    },
    setPrdRelated(state, data) {
      state.prdRelated = data;
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
      await axios
        .delete(`https://fakestoreapi.com/products/${id}`, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then();
      //delete from array then
    },
    async getCategories({ commit }) {
      await axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => {
          commit("setCategories", res.data);
        })
        .catch((e) => {});
    },
    async addProduct(_, product) {
      await axios
        .post("https://fakestoreapi.com/products", product, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => console.log(res));
    },
    async editProduct(_, { id, product }) {
      await axios
        .put(`https://fakestoreapi.com/products/${id}`, product, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => console.log(res));
    },
    async getProductById({ commit }, id) {
      await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        commit("setProduct", res.data);

        return res.data;
      });
    },
    async getProductsRelated({ commit }, id) {
      await axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        console.log(res);
        axios
          .get(
            `https://fakestoreapi.com/products/category/${res.data.category}`
          )
          .then((res) => commit("setPrdRelated", res.data));
      });
    },
  },
};
