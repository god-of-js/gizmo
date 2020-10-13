<template>
  <div class="d-flex">
    <sidebar :key="$router.history.current.name" />
    <div
      class="white__img__background"
      style="margin-left: 15%; width: calc(100% - 15%);"
    >
      <navbar :key="$router.history.current.name" />
      <transition name="slide-left" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Dashboard-Layout",
  components: {
    sidebar: () => import("../components/dashboard/sidebar.vue"),
    navbar: () => import("../components/dashboard/nav.vue")
  }
})
export default class DashboardLayout extends Vue {
  private componentId = "register";
  private loader = false;
  public setLoad(value: boolean): void {
    this.loader = value;
  }
}
</script>
