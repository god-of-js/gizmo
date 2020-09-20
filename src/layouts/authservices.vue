<template>
  <div class="h-100 grey__bottom__img">
    <navbar />
    <v-row class="d-flex align-center h-90">
      <v-col cols="12" sm="7" md="4" xs="8" class="mx-auto pa-4">
        <transition name="slide-fade">
          <router-view />
        </transition>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import navbar from "../components/auth/authservicesnav.vue";
@Component({
  name: "Auth-Services",
  components: {
    navbar
  }
})
export default class Auth extends Vue {
  private componentId = "register";
  private loader = false;
  public setLoad(value: boolean): void {
    this.loader = value;
  }
}
</script>
