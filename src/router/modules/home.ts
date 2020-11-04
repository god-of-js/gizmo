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
    },
    {
      path: "/home/view-property/:id",
      component: () => import("@/views/dashboard/properties/viewproperty.vue"),
      name: "View Property",
      meta: {
        parent: "Home",
        child: true
      }
    },
    {
      path: "/home/view-property-owner/:id",
      component: () => import("@/views/home/propowner.vue"),
      name: "View Property Owner",
      meta: {
        parent: "Home",
        child: true
      }
    },
  ]
};
export default HomeLayout;
