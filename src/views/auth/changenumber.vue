<template>
  <div class="grey__bottom__img">
    <div>
      <div class="font__xx__bg font__bold pb-6">Phone number verification</div>
      <form>
        <v-text-field
          label="Enter one-time verification code."
          v-model="phone"
          required
          id="input"
          outlined
          type="number"
        ></v-text-field>
        <div class="d-flex justify-center pb-7">
          <button
            class="border__radius yellow__btn font__x__sm pl-16 pr-16 pa-2"
            :disabled="disabled"
          >Verify Number</button>
        </div>
      </form>
      <div class="d-flex pb-6">
        <v-icon style="font-size: 40px;">mdi-phone-message-outline</v-icon>
        <div
          class="ml-4 font__xx__md font__bold"
        >We just sent a text message containing a one-time verification code. The code would expire in 2hrs time.</div>
      </div>
    </div>
    <div class="d-flex justify-space-between align-center">
      <div class="font__x__sm">
        Not with this number?
        <router-link to="/auth/change-number">Change number</router-link>
      </div>
      <div class="mr-2 ml-2">||</div>
      <div class="font__x__sm">
        Did not recieve a code?
        <router-link to="/auth/change-number">resend code</router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>