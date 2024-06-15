import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layout/home.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "/products",
        name: "products",
        component: () => import("@/views/ProductsView.vue"),
      },
      {
        path: "/cart",
        name: "cart",
        component: () => import("@/views/Cart.vue"),
      },
      {
        path: "/product/:id",
        name: "productDetails",
        component: () => import("@/views/ProductDetailsView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/Register.vue"),
  },

  {
    path: "/dashboard",
    component: () => import("@/layout/dashboard.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/admin/Index.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "products",
        component: () => import("@/views/admin/Product.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "users",
        component: () => import("@/views/admin/Users.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },

  { path: "*", component: () => import("@/components/notFound.vue") },
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
