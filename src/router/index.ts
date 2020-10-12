import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import Home from "../views/Home.vue";
import dashboardLayout from "./modules/dashboard";
import AuthServicesLayout from "./modules/authservices";

Vue.use(VueRouter);
const routes: RouteConfig[] = [
  {
    path: "*",
    redirect: "/"
  },
  dashboardLayout,
  AuthServicesLayout,
  {
    path: "/",
    name: "auth",
    component: () => import("../layouts/auth.vue")
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
