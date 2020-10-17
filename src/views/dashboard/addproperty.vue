<template>
  <div class="pa-9">
    <form @submit.prevent="addProperty">
      <v-row class="pb-0">
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <c-input
            :label="'Property Type(e.g flat, land or duplex)'"
            v-model="body.type"
          />
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <c-input
            :label="'Property Size(specify measuring unit)'"
            v-model="body.size"
          />
        </v-col>
      </v-row>
      <v-row class="pb-0">
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <c-input
            :label="'Number of Rooms Available'"
            class="mb-0"
            v-model="body.noOfRooms"
            :type="'number'"
          />
          <div class="mt-n6 mb-2">
            <small
              >Optional if property is not a building(e.g acre of land)
            </small>
          </div>
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <c-input
            :label="'Price of property'"
            v-model="body.price"
            :type="'number'"
          />
        </v-col>
      </v-row>
      <v-row class="pb-0">
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <c-input :label="'Local Government'" v-model="body.state" />
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <c-input
            :label="'Closest Landmark(a very popular place)'"
            v-model="body.landmark"
          />
        </v-col>
      </v-row>
      <v-row class="pb-0">
        <v-col md="12" class="pb-0">
          <locations
            :label="'Enter Location of property(e.g Hill top avenue)'"
            @placesChange="setPlace"
          />
        </v-col>
      </v-row>
      <v-row class="pb-0">
        <v-col class="pb-0">
          <c-input
            :label="
              'Extra Information about property: Indicate things like reason for the sale(optional)'
            "
            class="mb-0"
            v-model="body.extra"
          />
        </v-col>
      </v-row>
      <div class="font__ash pb-3">Upload Images of property</div>
      <v-row>
        <imgUpload @imageAdd="addImage" v-if="images.length < 5" />
        <div
          style="position: relative;"
          v-for="(image, index) in images"
          :key="index"
        >
          <div
            class="d-flex justify-end align-center pa-0"
            v-if="images.length !== 0"
          >
            <div
              class="button d-flex align-center justify-center "
              @click="removeImage(index)"
            >
              x
            </div>
          </div>
          <imgViewer :img="image" />
        </div>
      </v-row>
      <div class="d-flex justify-end">
        <button
          :class="[
            disabled === true ? 'disabled__btn' : 'green__btn',
            ' pb-3 pt-3 pl-16  pr-16 font__x__sm add__button'
          ]"
          :disabled="disabled"
        >
          <v-progress-circular
            indeterminate
            color="purple"
            v-if="loading"
          ></v-progress-circular>
          <span v-if="!loading">Add Property</span>
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Property } from "../../utils/models";
import { notify } from "@/utils/alert";
import { upload } from "../../services/cloudinary";
import { Api } from "@/api";
@Component({
  name: "Register",
  components: {
    locations: () => import("@/components/dashboard/locations.vue"),
    imgUpload: () => import("@/components/dashboard/imageupload.vue"),
    imgViewer: () => import("@/components/dashboard/imgview.vue")
  }
})
export default class AddProperty extends Vue {
  body: Property = {
    type: "",
    size: "",
    noOfRooms: "",
    extra: "",
    location: "",
    state: "",
    landmark: "",
    images: [],
    ownerId: "",
    price: ""
  };
  disabled = true;
  loading = false;
  images: string[] = [];
  imagesObj: any[] = [];
  @Watch("body", {
    immediate: true,
    deep: true
  })
  onPropertyChanged(value: Property) {
    if (
      value.state.length != 0 &&
      value.images.length != 0 &&
      value.landmark.length != 0 &&
      value.location.length != 0 &&
      value.price.length != 0 &&
      value.type.length != 0 &&
      value.size.length != 0
    ) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
  public setPlace(e: object): void {
    this.body.location = e; //getting the location from google places api
  }
  public removeImage(index: number): void {
    this.imagesObj.splice(index, 1); //removes image from object based on index
    this.images.splice(index, 1); //removes image from display based on index
  }
  public addImage(e: Blob): void {
    const filereader = new FileReader(); // to make the image viewable.
    let url: string;
    filereader.onload = (evt: any): void => {
      url = evt.target.result; //sending the link to url
    };
    filereader.readAsDataURL(e);
    this.imagesObj.push(e);
    setTimeout(() => {
      //added the timeline due to error. it needed an async would be worked on subsequently.
      this.images.push(url); //adding it to the images arr for view.
    }, 100);
  }
  public async addProperty() {
    this.disabled = true;
    this.loading = true;
    this.body.ownerId = this.$store.state.user.user._id;
    this.body.price = Number(this.body.price);
    this.body.noOfRooms = Number(this.body.noOfRooms);
    for (let i = 0; i < this.imagesObj.length; i++) {
      const formData = new FormData();
      formData.append(`file`, this.imagesObj[i]);
      formData.append("upload_preset", "xbcrtnu5");
      const url = await upload(formData);
      this.body.images.push(url);
    }
    Api()
      .post("/api/v1/property/add-property", this.body)
      .then(result => {
        notify.success(result.data.message, "Success", "topRight");
        this.disabled = false;
        this.loading = false;
      })
      .catch(err => {
        notify.error(err.response.data.message, "Error", "topRight");
      });
  }
}
</script>
<style scoped>
.button {
  border-radius: 50%;
  background-color: #c4c4c4;
  position: absolute;
  top: 0;
  color: #000;
  margin-left: -20px;
  height: 19px;
  width: 19px;
  cursor: pointer;
}
</style>
