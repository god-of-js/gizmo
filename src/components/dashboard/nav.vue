<template>
  <nav class="d-flex pt-4 pl-6 pr-6 justify-space-between align-center">
    <div class="font__purple font__sm font__bold d-flex align-center">
      <button
        v-if="$router.history.current.meta.child"
        class="mr-2"
        @click="goBack"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </button>
      <span> {{ $router.history.current.name }}</span>
    </div>
    <div class="d-flex align-center">
      <router-link
        to="/add-property"
        v-if="$router.history.current.name === 'My Properties'"
      >
        <cbutton
          :text="'Add new property'"
          :pl="''"
          :pr="''"
          :mt="''"
          class="mr-12"
        />
      </router-link>
      <cavatar :initials="'HE'" :size="45" />
    </div>
  </nav>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";
// import {AxiosResponse} from "axios"
@Component({
  name: "nav"
})
export default class Properties extends Vue {
  goBack() {
    window.history.back();
  }
}
</script>
<style lang="scss" scoped>
nav {
  width: 100%;
}
.yellow__btn {
  height: 35px;
  width: 150px;
}
</style>
