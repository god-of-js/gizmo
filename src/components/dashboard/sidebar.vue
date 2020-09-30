<template>
  <div class="sidebar">
      <div></div>
    <ul>
      <li style="list-style-type: none;">
        <v-icon>mdi-dashboard</v-icon> Dashboard
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import App from "@/store/modules/app"
@Component({
  name: "Auth",
  components: {
  }
})
export default class Auth extends Vue {
  private componentId = "register";
  private loader = false;
  get appName() {
    return App.appName
  }
  public setLoad(value: boolean): void {
    this.loader = value;
  }
}
</script>