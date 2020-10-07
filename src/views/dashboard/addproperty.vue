<template>
  <div class="pa-9">
    <form @submit.prevent="addProperty">
      <v-row class="pb-0">
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            label="Property Type(e.g flat or duplex)"
            id="input"
            outlined
            required
            type="text"
          ></v-text-field>
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            label="Property Size"
            id="input"
            outlined
            required
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="pb-0">
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            label="Number of Rooms Available"
            id="input"
            outlined
            class="mb-0"
            required
            type="text"
          ></v-text-field>
          <div class="mt-n6 mb-2">
            <small
              >Optional if property is not a building(e.g acre of land)
            </small>
          </div>
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            label="Price of property"
            id="input"
            outlined
            required
            type="number"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="pb-0">
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            label="State and local govt"
            id="input"
            outlined
            required
            type="text"
          ></v-text-field>
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            label="Closest Landmark(a very popular place)"
            id="input"
            outlined
            required
            type="text"
          ></v-text-field>
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
          <v-text-field
            label="Extra Information about property: Indicate things like reason for the sale(optional)"
            id="input"
            outlined
            class="mb-0"
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="font__ash pb-3">Upload Images of property</div>
      <v-row>
        <imgUpload @imageAdd="addImage"
            v-if="images.length < 5" />
        <div style="position: relative;" v-for="(image, index) in images" :key="index">
          <div class="d-flex justify-end align-center pa-0" v-if="images.length !== 0">
            <div class="button d-flex align-center justify-center " @click="removeImage(index)">x</div>
          </div>
          <imgViewer
            :img="image"
          />
        </div>
      </v-row>
      <div class="d-flex justify-end">
        <button class="green__btn pb-3 pt-3 pl-14  pr-14 font__sm">Add Property</button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Property } from "../../utils/models";
import { notify } from "@/utils/alert";
import {upload} from "../../services/cloudinary";
@Component({
  name: "Register",
  components: {
    locations: () => import("@/components/dashboard/locations.vue"),
    imgUpload: () => import("@/components/dashboard/imageupload.vue"),
    imgViewer: () => import("@/components/dashboard/imgview.vue")
  }
})
export default class AddProperty extends Vue {
  private body: Property = {
    type: "",
    size: "",
    noOfRooms: "",
    reason: "",
    location: "",
    images: [],
    price: 0,
    bargain: false
  };
  private images: string[] = [];
  public setPlace(e: string): void {
    this.body.location = e; //getting the location from google places api
  }
  public removeImage(index: number): void {
    this.body.images.splice(index,1); //removes image from object based on index
    this.images.splice(index, 1) //removes image from display based on index
  }
  public addImage(e: any): void {
    const formData = new FormData();
    formData.append(`file`, e);
    formData.append("upload_preset", "xbcrtnu5");
    upload(formData)
    const filereader = new FileReader(); // to make the image viewable.
    let url: string;
    filereader.onload = function(evt: any) {
      url = evt.target.result; //sending the link to url
    };
    filereader.readAsDataURL(e);
    this.body.images.push(e);
    setTimeout(() => { //added the timeline due to error. it needed an async would be worked on subsequently.
      this.images.push(url); //adding it to the images arr for view.
    }, 100);
  }
  public addProperty() {
    if(this.images.length === 0) {
      notify.error("You must add at least   picture of the property", "400", "topCenter")
      return ""
    }
    // {type, size, noOfRooms, price, state, landmark, location,images, ownerId, extraComment}
    for(let i = 0; i < this.body.images.length; i++) {
    const formData = new FormData();
    formData.append(`image-${i}`, this.body.images[i]);
    upload(formData)
    }
  }
}
</script>
<style  scoped>
.button {
  border-radius: 50%;
  background-color: #C4C4C4;
  position: absolute;
  top: 0;
  color: #000;
  margin-left: -20px;
  height: 19px;
  width: 19px;
  cursor: pointer;
}
</style>