<template>
  <div class="mx-auto">
    <form @submit.prevent="createAccount">
      <v-text-field label="Full Name" id="input" type="text" required outlined v-model="body.name"></v-text-field>
      <v-text-field label="Email" id="input" outlined required v-model="body.email" type="email"></v-text-field>
      <v-text-field
        label="Phone Number"
        v-model="body.number"
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
        <button class="border__radius yellow__btn font__x__sm pl-16 pr-16 pa-2">Create Account</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "@/utils/eventbus.ts";
import { AuthModule } from "@/store/modules/auth";

@Component({})
export default class Register extends Vue {
  private body: object = {
    email: "",
    password: "",
    number: "",
    name: ""
  };
  private show = false;

  public createAccount(): void {
    AuthModule.register(this.body);
    EventBus.$emit("load", true);
  }
}
</script>
