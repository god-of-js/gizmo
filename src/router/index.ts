import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);
const routes: RouteConfig[] = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "auth",
    component: () => import("../layouts/auth.vue")
  },
  {
    path: "/auth-services",
    name: "auth services",
    component: () => import("../layouts/authservices.vue"),
    children: [
      {
        path: "/auth/verify-number/:id",
        name: "verify number",
        component: () => import("../views/auth/verifynumber.vue")
      },
      {
        path: "/auth/change-number",
        name: "change number",
        component: () => import("../views/auth/changenumber.vue")
      }
    ]
  },
  {
    path: "dashboard-layout",
    name: "Dashboard-layout",
    component: () => import("../layouts/dashboardlayout.vue"),
    children: [
      {
        path: "/dashboard",
        component: () => import("@/views/dashboard/dashboard.vue"),
        name: "Dashboard",
        meta: {
          parent: "dashboard"
        }
      },
      {
        path: "/add-property",
        component: () => import("@/views/dashboard/addproperty.vue"),
        meta: {
          parent: "dashboard"
        }
      }
    ]
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home
  // },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
