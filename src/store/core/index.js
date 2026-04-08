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
    addProduct(state, data) {
      state.products.push(data);
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
        .catch((e) => { });
    },
    async getUsers({ commit }) {
      await axios.get("https://fakestoreapi.com/users").then((res) => {
        commit("setUsers", res.data);
      });
    },
    async deleteProduct({ commit, state }, id) {
      await axios
        .delete(`https://fakestoreapi.com/products/${id}`, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const index = state.products.findIndex((item) => item.id == id);
          state.products.splice(index, 1);
        });
    },
    async getCategories({ commit }) {
      await axios
        .get("https://fakestoreapi.com/products/categories")
        .then((res) => {
          const categories = res.data.map((name, index) => ({
            id: index + 1,
            name: name,
            description: ''
          }));
          commit("setCategories", categories);
        })
        .catch((e) => { });
    },
    async addProduct({ commit }, product) {
      await axios
        .post("https://fakestoreapi.com/products", product, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          commit("addProduct", res.data);
        });
    },
    async editProduct({ state }, { id, product }) {
      await axios
        .put(`https://fakestoreapi.com/products/${id}`, product, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const index = state.products.findIndex((item) => item.id == id);
          state.products.splice(index, 1, product);
        });
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
    async deleteUser({ commit, state }, id) {
      await axios
        .delete(`https://fakestoreapi.com/users/${id}`, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          const index = state.users.findIndex((item) => item.id == id);
          state.users.splice(index, 1);
        });
    },
    async addCategory({ commit, state }, category) {
      // Mock add: FakeStoreAPI doesn't support POST categories, add locally
      const newCat = {
        id: state.categories.length + 1,
        name: category.name
      };
      state.categories.push(newCat);
      commit("setCategories", [...state.categories]);
    },
    async editCategory({ commit, state }, { name, category }) {
      // Optimistic update: FakeStoreAPI doesn't support category edits, update local state
      const index = state.categories.findIndex(cat => cat === name);
      if (index !== -1) {
        state.categories[index] = category;
        commit("setCategories", [...state.categories]);
      }
    },
    async deleteCategory({ commit, state }, name) {
      // Mock delete: FakeStoreAPI doesn't support DELETE categories, remove locally  
      state.categories = state.categories.filter(cat => cat.name !== name);
      commit("setCategories", state.categories);
    },
  },
};
