<template>
  <div>
    <div>
      <div class="font__xx__bg font__bold pb-6">Wrong number?</div>
      <form>
        <v-text-field
          label="Enter Email"
          v-model="phone"
          required
          id="input"
          outlined
          type="email"
        ></v-text-field>
        <div class="d-flex justify-center pb-7">
          <button
            class="border__radius yellow__btn font__x__sm pl-16 pr-16 pa-2"
            :disabled="disabled"
          >
            Get email link
          </button>
        </div>
      </form>
      <div class="d-flex pb-6">
        <v-icon style="font-size: 40px;">mdi-email</v-icon>
        <div class="ml-4 font__xx__md font__bold">
          After this, check your email for one time link. The one time link
          would be used to change your number.
        </div>
      </div>
      <div class="font__x__sm">
        Naaaah!!! just kidding.
        <router-link to="/auth/change-number">Take me back.</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
