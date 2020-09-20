<template>
  <div class="d-flex justify-space-between pa-3 align-center">
    <div class="font__md font__bold pl-8">Gizmo</div>
    <div class="font__sm d-flex">
      <div class="mr-3">
        <router-link to="/" class="router__link">Home</router-link>
      </div>
      <div class="ml-3 mr-3">
        <router-link to="/" class="router__link">About</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Auth-Services-Nav"
})
export default class Auth extends Vue {
  private componentId = "register";
  private loader = false;
  public setLoad(value: boolean): void {
    this.loader = value;
  }
}
</script>
