import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Register from "../views/Register.vue";
import Login from "@/views/Login.vue";
import ProductDetails from "../views/ProductDetailsView.vue";
import Products from "../views/ProductsView.vue";
import Admin from "../views/admin/Dashboard.vue";
import productAdmin from "../views/admin/Product.vue";

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
    path: "/register",
    name: "register",
    component: Register,
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
  {
    path: "/admin",
    name: "admin",
    component: Admin,
    children: [
      {
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        path: "product",
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
