import { RouteConfig } from "vue-router";
import Layout from "@/layouts/homelayout.vue";
const HomeLayout: RouteConfig = {
  path: "/",
  name: "Home Layout",
  component: Layout,
  children: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/home/Home.vue")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/home/About.vue")
    }
  ]
};
export default HomeLayout;
