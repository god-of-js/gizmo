<template>
  <div class="mx-auto">
    <form @submit.prevent="createAccount">
      <v-text-field
        label="Full Name"
        id="input"
        type="text"
        required
        outlined
        v-model="body.name"
      ></v-text-field>
      <v-text-field
        label="Email"
        id="input"
        outlined
        required
        v-model="body.email"
        type="email"
      ></v-text-field>
      <v-text-field
        label="Phone Number"
        v-model="body.phone"
        required
        id="input"
        outlined
        type="number"
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
      <div class="d-flex justify-center pt-5">
        <button
          class="border__radius yellow__btn font__x__sm pl-16 pr-16 pa-2"
          :disabled="disabled"
        >
          Create Account
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AuthModule } from "@/store/modules/auth";

interface User {
  name: string;
  phone: string;
  password: string;
  email: string;
}
@Component({})
export default class Register extends Vue {
  private body: User = {
    email: "",
    password: "",
    phone: "",
    name: ""
  };
  private disabled = false;
  private show = false;
  public loaders(value: any): void {
    this.$emit("load", value);
    this.disabled = value;
  }
  public async createAccount(): Promise<void> {
    this.loaders(true);
    await AuthModule.register(this.body);
    this.loaders(false);
  }
}
</script>
