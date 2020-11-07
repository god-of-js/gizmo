<template>
  <div>
    <input type="file" name="" id="file" />
    <v-row class="d-flex align-start">
      <v-col md="3" cols="12" class="d-flex align-end justify-center">
        <cavatar :initials="'HE'" :size="145" class=" mr-0" :image="user.avatar" :key="user.avatar"/>
        <add-image @imageAdd="loader = !loader" @done="done" />

        <v-progress-circular
          indeterminate
          color="purple"
          v-if="loader"
        ></v-progress-circular>
      </v-col>
      <v-col>
        <div>
          <div class="font__bold">{{ $format(user.name) }}</div>
          <div class="font__sm ">{{ user.email }}</div>
        </div>
        <div class="font__purple font__sm font__bold pb-6 pt-6">
          User Details
        </div>
        <div class="pr-5 font__sm">
          <div class="border__bottom d-flex justify-space-between pb-3 pt-3">
            <span class="font__bold">Name</span>
            <span>{{ $format(user.name) }}</span>
          </div>
          <div
            class="border__bottom d-flex justify-space-between pb-3 pt-3 mt-3"
          >
            <span class="font__bold">Email</span>
            <span>{{ user.email }}</span>
          </div>
          <div
            class="border__bottom d-flex justify-space-between pb-3 pt-3 mt-3"
          >
            <span class="font__bold">Phone</span>
            <span>{{ user.phone }}</span>
          </div>
          <div class="d-flex justify-end pb-3 pt-3 mt-3">
            <button
              @click="deactivate"
              class="red__button font__sm pa-3 active pr-7 pl-7"
            >
              Delete Account
            </button>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";  
import { Mutation } from "vuex-class";
import { getToken, setProfile } from "@/utils/cookies";
import { notify } from "@/utils/alert";
const token = getToken();

import axios from "axios";
let id: string;
@Component({
  name: "settings",
  components: {
    addImage: () => import("@/components/dashboard/profileupload.vue")
  }
})
export default class Properties extends Vue {
  @Mutation "user/setUserData": Function;
  loader = false;
  get user() {
    return this.$store.state.user.user;
  }
  mounted(){
    console.log(this.$store.state.user.user)
  }
  delProperty(): void {
    const data = {
      ownerId: this.$store.state.user.user._id,
      propId: id
    };
    axios
      .delete(
        `${process.env.VUE_APP_API_URL}/api/v1/property/delete-property`,
        {
          data,
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(response => {
        this.$router.push("/my-properties");
        notify.success(response.data.message, "Success", "topRight");
        console.log(response);
      })
      .catch(err => {
        notify.error(err.response.data.message, "Error", "topRight");
        console.log(err.response);
      });
  }
  deactivate(): void {
    console.log("entered");
  }
  public done(param: any): void {
    this.loader = false;
    console.log(param)
      console.log(param.name)
    if (param.name) {
      setProfile(param)
      this["user/setUserData"](param);
    }
  }
}
</script>

<style lang="scss" scoped>
.red__button {
  background-color: #ed3e4e;
  color: #ffffff;
  border-radius: 7px;
}
#file {
  display: none;
}
</style>