import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import dashboardLayout from "./modules/dashboard";
import HomeLayout from "./modules/home";
import AuthServicesLayout from "./modules/authservices";

Vue.use(VueRouter);
const routes: RouteConfig[] = [
  {
    path: "*",
    redirect: "/"
  },
  HomeLayout,
  dashboardLayout,
  AuthServicesLayout,
  {
    path: "/authentication",
    name: "auth",
    component: () => import("../layouts/auth.vue")
  },
  { path: "/properties/view-property/*" },
  { path: "/properties/edit-property/*" },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
