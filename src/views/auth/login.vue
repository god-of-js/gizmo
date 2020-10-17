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
          class="border__radius yellow__btn font__sm  d-flex align-center justify-center box__shadow"
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
import { Mutation } from "vuex-class";
import { Api } from "@/api";
import { User, Response, Data } from "@/utils/models.ts";
import { notify } from "@/utils/alert";
import { setProfile, setToken } from "@/utils/cookies.ts";
@Component({
  name: "Login"
})
export default class Login extends Vue {
  @Mutation "user/setUserData": Function;
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
    Api()
      .post("/api/v1/auth/login", this.body)
      .then((response: Data) => {
        setProfile(response.data);
        setToken(response.data.jwt);
        notify.success(response.data.message, "Success", "topRight");
        this["user/setUserData"]({ value: response.data });
        // this.getData(response.data);
        this.$router.push(`/dashboard`);
        this.loaders(false);
      })
      .catch((err: Response) => {
        notify.error(err.response.data.message, "Error", "topRight");
        this.loaders(false);
      });
  }
}
</script>
