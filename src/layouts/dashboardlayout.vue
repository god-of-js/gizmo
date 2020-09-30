<template>
  <div class="d-flex">
    <sidebar />
    <div>
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import sidebar from "../components/dashboard/sidebar.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Dashboard Layout",
  components: {
    sidebar
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