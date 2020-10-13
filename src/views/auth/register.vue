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
      <div class="d-flex justify-center ">
        <button
          class="border__radius yellow__btn font__x__sm  pa-4 d-flex align-center justify-center box__shadow"
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
import { Api } from "@/api";
import { User, Response, Data } from "@/utils/models.ts";
import { notify } from "@/utils/alert";
@Component({
  name: "Register"
})
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
    Api()
      .post("/api/v1/user/register", this.body)
      .then((response: Data) => {
        console.log(response);
        notify.success(response.data.message, "Success", "topRight");
        this.$router.push('/dashboard');
        // this.$router.push(
        //   `/auth/verify-number/${response.data.verificationDetails.token}`
        // );
      })
      .catch((err: Response) => {
        console.log(err.response);
        notify.error(err.response.data.message, "Error", "topRight");
      });
    this.loaders(false);
  }
}
</script>
