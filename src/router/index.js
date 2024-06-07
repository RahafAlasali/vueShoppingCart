import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Register from "../views/Register.vue";
import Login from "@/views/Login.vue";
import ProductDetails from "../views/ProductDetailsView.vue";
import Products from "../views/ProductsView.vue";
import Cart from "../views/Cart.vue";
import layoutHome from "@/layout/home.vue";
import layoutDashboard from "@/layout/dashboard.vue";
import productAdmin from "../views/admin/Product.vue";
import Users from "../views/admin/Users.vue";
import Dashboard from "../views/admin/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: layoutHome,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView, // use Lazy load
      },
      {
        path: "/products",
        name: "products",
        component: Products,
      },
      {
        path: "/cart",
        name: "cart",
        component: Cart,
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
    component: layoutDashboard,
    children: [
      {
        path: "",
        component: Dashboard,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "products",
        component: productAdmin,
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "users",
        component: Users,
        meta: {
          requiresAuth: true,
        },
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
