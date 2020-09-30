<template>
  <div class="mx-auto">
    <form @submit.prevent="login">
      <v-text-field
        label="Email"
        id="input"
        outlined
        required
        v-model="body.email"
        type="email"
      ></v-text-field>
      <v-text-field
        label="Password"
        id="input"
        outlined
        v-model="body.password"
        required
        :type="show ? 'text' : 'password'"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="show = !show"
      ></v-text-field>
      <div class="text-right font__x__sm pt-2 mt-n6">
        <router-link to="/">forgot password?</router-link>
      </div>
      <div class="d-flex justify-center pt-3">
        <button
          class="border__radius yellow__btn font__sm  d-flex align-center justify-center"
          :disabled="disabled"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AuthModule } from "@/store/modules/auth";
import { User } from "@/utils/models";
@Component({
  name: "login"
})
export default class Login extends Vue {
  private body: User = {
    email: "",
    password: ""
  };
  private disabled = false;
  private show = false;
  // henryeze019@gmail.com 08033283828;
  public loaders(value: any): void {
    this.$emit("load", value);
    this.disabled = value;
  }
  public async login(): Promise<void> {
    this.loaders(true);
    await AuthModule.login(this.body);
    this.loaders(false);
  }
}
</script>
