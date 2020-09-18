import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
interface childRoutes{
  name: string,
  path: string,
  component: Function
}
const routes: RouteConfig[] = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/auth",
    name: "auth",
    component: () =>
    import("../layouts/auth.vue")
  },
  {
    path: "/auth/verify-number/:id",
    name: "verify number",
    component: () =>
    import( "../views/auth/verifynumber.vue")
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
