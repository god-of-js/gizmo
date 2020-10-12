<template>
  <nav class="sidebar pt-16 pl-0">
    <div class="pl-6 font__bold font__md pb-6">{{ appName }}</div>
    <ul class="ml-0 pl-0">
      <li
        style="list-style-type: none;"
        v-for="(route, index) in routes"
        :key="index"
        class="mt-4"
      >
        <router-link :to="route.path" class="no__link white__text">
          <div
            :class="[
              $router.history.current.meta.parent === route.signal
                ? 'upper__circle '
                : ''
            ]"
          ></div>
          <div
            :class="[
              $router.history.current.meta.parent === route.signal
                ? 'active__route '
                : '',
              routeStyle
            ]"
          >
            <v-icon
              :color="
                $router.history.current.meta.parent === route.signal
                  ? '#FFBC44'
                  : 'white'
              "
              class="mr-4 font__sm icon"
              >{{ route.icon }}</v-icon
            >
            <span class="font__x__sm">{{ route.name }}</span>
          </div>
          <div
            :class="[
              $router.history.current.meta.parent === route.signal
                ? 'lower__circle '
                : ''
            ]"
          ></div>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import App from "@/store/modules/app";
import { getModule } from "vuex-module-decorators";
@Component({
  name: "Sidebar",
  components: {}
})
export default class Sidebar extends Vue {
  private appModule = getModule(App, this.$store);
  private routeStyle = "pa-3  ml-2 route";
  private routes = [
    {
      path: "/dashboard",
      icon: "mdi-view-dashboard",
      name: "Dashboard",
      signal: "dashboard"
    },
    {
      path: "/add-property",
      icon: "mdi-bank",
      name: "My Properties",
      signal: ""
    },
    {
      path: "/dashboard",
      icon: "mdi-cog",
      name: "Settings",
      signal: ""
    },
    {
      path: "/dashboard",
      icon: "mdi-message",
      name: "Messages",
      signal: ""
    },
    {
      path: "/",
      icon: "mdi-power",
      name: "Log Out",
      signal: ""
    }
  ];
  get appName() {
    return this.appModule.appName;
  }
}
</script>
<style lang="scss" scoped>
.sidebar {
  height: 100vh;
  background-color: #1c528a;
  width: 15%;
  position: fixed;
  color: #ffffff;
  background-image: url("/img/sidebarpatterns.svg");
  background-position: bottom;
}
.route:hover {
  background-color: #ffffff;
  color: #000;
  opacity: 0.8;
  .icon {
    color: #000 !important;
  }
}
.route {
  border-top-left-radius: 27px;
  border-bottom-left-radius: 27px;
}
.white__text{
  color: #ffffff;
}
.active__route {
  background-color: #ffffff;
  color: #000;
}
.active__route::after {
  height: 1000px;
  width: 50px;
  background-color: red;
}
.lower__circle {
  background-color: #ffffff;
  border-radius: 50%;
}
.upper__circle {
  // background-color: #ffffff;
  // height: 45px;
  // border-radius: 20px;
  // width: 45px;
  // float: right;
  // margin-top: -13px;
  // margin-right: -10px;
}
</style>
