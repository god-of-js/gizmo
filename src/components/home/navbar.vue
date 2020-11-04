<template>
  <nav class="d-flex pt-4 pl-6 pr-6 pb-2 justify-space-between align-center">
    <div class="font__sm font__white font__bold d-flex align-center">
      <button
        v-if="$route.meta.child"
        class="mr-2"
        @click="goBack"
      >
        <v-icon color="#ffffff">mdi-arrow-left</v-icon>
      </button>
      <span> {{ appName }}</span>
    </div>
    <div class="d-flex align-center">

      <router-link
        to="/"
          class="mr-12 home__link font__x__sm"
      >
      Home
      </router-link>
      <router-link
        to="/about" class="mr-12 home__link font__x__sm" >
        About Us
      </router-link>
      <router-link
        to="/dashboard"
          class="mr-12"
      >
        <cbutton
          :text="'Dashboard'"
          :pl="''"
          :pr="''"
          :mt="''"
        />
      </router-link>
    </div>
  </nav>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "HomeNavBar"
})
export default class HomeNavBar extends Vue {
  get appName() {
      return this.$store.state.app.appName
  }
  goBack() {
    window.history.back();
  }
}
</script>
<style lang="scss" scoped>
nav {
  width: 100%;
  z-index: 5;
  background-color: #1c528a;
  position: fixed;
}
.yellow__btn {
  height: 35px;
  width: 150px;
}
.home__link{
  text-decoration: none;
  color: #ffffff;
  border-bottom: 1px solid transparent;
}
.home__link:hover{
  border-bottom: 1px solid #FFBC44;
}
</style>
