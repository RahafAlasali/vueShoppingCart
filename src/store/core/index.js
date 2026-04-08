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
        .catch((e) => {});
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
          // API returns array of strings, transform to objects with id, name, image, description
          const transformedData = res.data.map((cat, index) => ({
            id: index + 1,
            name: cat,
            image: `https://via.placeholder.com/150?text=${encodeURIComponent(cat)}`,
            description: `${cat} category`,
          }));
          commit("setCategories", transformedData);
        })
        .catch((e) => {
          console.error("Error fetching categories:", e);
        });
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
      await axios
        .post("https://fakestoreapi.com/products/categories", category, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          // Add the new category to state with transformed structure
          const newCat = {
            id: state.categories.length + 1,
            name: res.data.name || category.name,
            image: res.data.image || category.image || `https://via.placeholder.com/150?text=${encodeURIComponent(category.name)}`,
            description: res.data.description || category.description || `${category.name} category`,
          };
          state.categories.push(newCat);
        });
    },
    async editCategory({ commit, state }, { name, category }) {
      await axios
        .put(`https://fakestoreapi.com/products/categories/${name}`, category, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          // Update the category in state
          const index = state.categories.findIndex((item) => item.name === name);
          if (index !== -1) {
            state.categories.splice(index, 1, {
              ...state.categories[index],
              ...category,
            });
          }
        });
    },
    async deleteCategory({ commit, state }, name) {
      await axios
        .delete(`https://fakestoreapi.com/products/categories/${name}`, {
          Headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          // Remove the deleted category from state
          const index = state.categories.findIndex((item) => item.name === name);
          if (index !== -1) {
            state.categories.splice(index, 1);
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            console.error("Category not found");
          } else {
            console.error("Error deleting category:", error);
          }
        });
    },
  },
};
