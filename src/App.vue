<template>
  <v-app>
    <router-view />
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style scoped>
@font-face {
  font-family: poppins;
  src: url("/fonts/Poppins-Medium.ttf");
}
* {
  font-family: poppins !important ;
}
@import url("./style/mobile.scss");
@import url("./style/style.scss");
</style>
