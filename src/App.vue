<template>
  <v-app>
    <loader v-if="loader" />
    <router-view></router-view>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { EventBus } from "./utils/eventbus.ts";
@Component
export default class Register extends Vue {
  private loader = false;
  mounted() {
    EventBus.$on("load", (value: boolean) => {
      this.loader = value;
    });
  }
}
</script>
<style lang="scss">
@font-face {
  src: url("/fonts/Poppins-Regular.ttf");
  font-family: "Poppins";
}
* {
  font-family: "Poppins";
}
@import url("./style/style.css");
@import url("./style/mobile.css");
</style>
