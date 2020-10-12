import { RouteConfig } from "vue-router";
import Layout from "@/layouts/authservices.vue";
const AuthServicesLayout: RouteConfig = {
  path: "/auth-services",
  name: "auth services",
  component: Layout,
  children: [
    {
      path: "/auth/verify-number/:id",
      name: "verify number",
      component: () => import("@/views/auth/verifynumber.vue")
    },
    {
      path: "/auth/change-number",
      name: "change number",
      component: () => import("@/views/auth/changenumber.vue")
    }
  ]
};
export default AuthServicesLayout;
