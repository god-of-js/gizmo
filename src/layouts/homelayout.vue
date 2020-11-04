<template> 
    <div> 
        <navbar />
      <transition name="slide-left" mode="out-in">
        <router-view />
      </transition>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Dashboard-Layout",
  components: {
    navbar: () => import("../components/home/navbar.vue")
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
