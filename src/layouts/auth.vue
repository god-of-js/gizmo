<template>
  <div class="d-flex auth__body">
    <loader v-if="loader" />
    <section
      class="auth__img font__white pa-6 pr-14 pb-16"
    >
      <div class="font__bold font__xx__bg">Gizmo</div>
      <div class="font__x__sm gizmo__text">
        Search for beautiful houses for sale or rent and also put up your houses
        for sale or rent all around Nigeria.
      </div>
    </section>
    <section class="auth__form d-flex align-center justify-center flex-column ">
      <div class="font__purple font__bold font__xx__md pb-6">Welcome</div>
      <div class="d-flex font__x__sm font__bold auth__tab__cont pb-6">
        <button
          :class=" componentId === 'login' ? 'tab__btn active__tab__btn' : 'tab__btn'"
          @click="componentId = 'login'"
        >
          <span>Sign In </span>
          <div :class="
            componentId === 'login' ? 'active__tab__btn_indicator mt-2 ' : ' mt-3'
          "></div>
        </button>
        <button
          :class=" componentId === 'register' ? 'tab__btn active__tab__btn' : 'tab__btn'"
           
          @click="componentId = 'register'"
        >
          Create Account
          <div :class="
            componentId === 'register' ? 'active__tab__btn_indicator mt-2' : ' mt-3'
          "></div>
        </button>
      </div>
      <div class="auth__form__cont ">
        <transition name="slide-fade">
          <component :is="componentId" @load="setLoad($event)"></component>
        </transition>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import login from "../views/auth/login.vue";
import register from "@/views/auth/register.vue";
import loader from "@/components/loader.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Auth",
  components: {
    login,
    register,
    loader
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
<style lang="scss">
.gizmo__text {
  width: 80%;
}
</style>
