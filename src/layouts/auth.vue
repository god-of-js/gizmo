<template>
  <div class="d-flex auth__body">
    <loader v-if="loader" />
    <section class="auth__img font__white pa-6 pr-14 pb-16">
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
          :class="
            componentId === 'login' ? 'tab__btn active__tab__btn' : 'tab__btn'
          "
          @click="componentId = 'login'"
        >
          <span>Sign In </span>
          <div
            :class="
              componentId === 'login'
                ? 'active__tab__btn_indicator mt-2 '
                : ' mt-3'
            "
          ></div>
        </button>
        <button
          :class="
            componentId === 'register'
              ? 'tab__btn active__tab__btn'
              : 'tab__btn'
          "
          @click="componentId = 'register'"
        >
          Create Account
          <div
            :class="
              componentId === 'register'
                ? 'active__tab__btn_indicator mt-2'
                : ' mt-3'
            "
          ></div>
        </button>
      </div>
      <div class="auth__form__cont ">
        <transition
          name="slide-left"
          mode="out-in"
          @beforeLeave="beforeLeave"
          @enter="enter"
          @afterEnter="afterEnter"
        >
          <component :is="componentId" @load="setLoad($event)"></component>
        </transition>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Auth",
  components: {
    login: () => import("../views/auth/login.vue"),
    register: () => import("@/views/auth/register.vue"),
    loader: () => import("@/components/loader.vue")
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
.active__tab__btn {
  color: #1c528a !important;
  transition: transform 0.5s;
}

.active__tab__btn_indicator {
  height: 4px;
  background-color: #1c528a;
  border-radius: 20px;
  animation-name: active_tab;
  animation-duration: 0.7s;
}
.auth__form {
  background-image: url("/img/patterns.svg"), url("/img/topppaterns.svg");
  height: 100vh;
  width: 60%;
  background-repeat: no-repeat;
  background-size: 70% 45%, 16% 20%;
  background-position: right bottom, right top;
}
.tab__btn {
  color: #c4c4c4;
  outline: none;
  width: 50%;
  border-bottom: 3px solid transparent;
  padding-bottom: 4px;
}

.auth__tab__cont {
  width: 40%;
}

.auth__form__cont {
  width: 50%;
}
.auth__body {
  height: 100vh;
}

.auth__img {
  height: 100vh;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background-size: cover;
  background-image: linear-gradient(to top, #1c528a, rgba(40, 31, 71, 0)),
    url("/img/authbackground.jpg");
}
@keyframes active_tab {
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
}
</style>
