import { RouteConfig } from "vue-router";
import dashboard from "@/layouts/dashboardlayout.vue";
const dashboardLayout: RouteConfig = {
  path: "dashboard-layout",
  name: "Dashboard-layout",
  component: dashboard,
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
      name: "Add Property",
      meta: {
        parent: "properties"
      }
    },
    {
      path: "/my-properties",
      component: () => import("@/views/dashboard/properties.vue"),
      name: "My Properties",
      meta: {
        parent: "properties"
      }
    }
  ]
};
export default dashboardLayout;
