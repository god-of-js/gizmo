<template>
  <div class="mx-auto">
    <v-text-field label="Email" id="input" outlined></v-text-field>
    <v-text-field label="Password" id="input" outlined></v-text-field>
    <div class="text-right font__x__sm pt-0 mt-n6">
      <router-link to="/">forgot password?</router-link>
    </div>
    <div class="d-flex justify-center pt-5">
      <button
        class="border__radius yellow__btn font__x__sm pl-16 pr-16 pa-2"
        @click="createAccount"
      >
        Sign In
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import { EventBus } from "@/utils/eventbus.ts";
@Component({
  name: "Login"
})
export default class Login extends Vue {
  private body: object = {
    email: "",
    password: ""
  };
  public createAccount(): void {
    console.log(this.body);
    // EventBus.$emit("load", true);
  }
}
</script>
