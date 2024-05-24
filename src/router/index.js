import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Login from "../views/Login.vue";
import ProductDetails from "../views/ProductDetailsView.vue";
import Products from "../views/ProductsView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/products",
    name: "products",
    component: Products,
  },
  {
    path: "/product/:id",
    name: "productDetails",
    component: ProductDetails,
  },
  { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  base: process.env.BASE_URL,
  routes,
});

export default router;
