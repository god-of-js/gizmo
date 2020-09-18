<template>
  <div class="h-100 d-flex align-center grey__bottom__img">
    <v-row>
      <v-col cols="12" sm="7" md="4" xs="11" class="mx-auto">
        <div>
          <div class="font__xx__bg font__bold pb-10">Phone number verification</div>
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
      </v-col>
    </v-row>
  </div>
</template>