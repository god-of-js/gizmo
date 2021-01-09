import { RouteConfig } from "vue-router";
import { getToken } from "@/utils/cookies";
import dashboard from "@/layouts/dashboardlayout.vue";
const dashboardLayout: RouteConfig = {
  path: "dashboard-layout",
  name: "Dashboard-layout",
  component: dashboard,
  children: [
    {
      path: "/dashboard",
      component: () => import("@/views/dashboard/index/dashboard.vue"),
      name: "Dashboard",
      meta: {
        parent: "dashboard"
      }
    },
    {
      path: "/settings",
      component: () => import("@/views/dashboard/settings/settings.vue"),
      name: "Settings",
      meta: {
        parent: "settings"
      }
    },
    {
      path: "/add-property",
      component: () => import("@/views/dashboard/properties/addproperty.vue"),
      name: "Add Property",
      meta: {
        parent: "properties",
        child: true
      }
    },
    {
      path: "/properties/edit-property/:id",
      component: () => import("@/views/dashboard/properties/addproperty.vue"),
      name: "Edit Property",
      meta: {
        parent: "properties",
        child: true
      }
    },
    {
      path: "/properties/view-property/:id",
      component: () => import("@/views/dashboard/properties/viewproperty.vue"),
      name: "View Property",
      meta: {
        parent: "properties",
        child: true
      }
    },
    {
      path: "/my-properties",
      component: () => import("@/views/dashboard/properties/properties.vue"),
      name: "My Properties",
      meta: {
        parent: "properties"
      }
    }
  ]
};
export default dashboardLayout;
