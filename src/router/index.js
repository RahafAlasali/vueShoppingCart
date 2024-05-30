import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Register from "../views/Register.vue";
import Login from "@/views/Login.vue";
import ProductDetails from "../views/ProductDetailsView.vue";
import Products from "../views/ProductsView.vue";
import layoutHome from "@/layout/home.vue";
import layoutDashboard from "@/layout/dashboard.vue";
import productAdmin from "../views/admin/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: layoutHome,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
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
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },

  {
    path: "/dashboard",
    name: "admin",
    component: layoutDashboard,
    children: [
      {
        path: "",
        component: productAdmin,
      },
    ],
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
