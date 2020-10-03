<template>
  <div class="pa-9">
    <form action="">
      <v-row class="pb-0">
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            label="Property Type"
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
            type="email"
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
          <div class="mt-n6 mb-2"><small>Optional if property is not a building(e.g acre of land) </small></div>
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
            type="email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="pb-0">
        <v-col md="12" class="pb-0">
          <locations :label="'Enter Location of property(e.g Hill top avenue)'" @placesChange="setPlace"/>
        </v-col>
      </v-row>
      <v-row class="pb-0">
        <v-col class="pb-0">
          <v-text-field
            label="Extra Information about property(optional)"
            id="input"
            outlined
            class="mb-0"
            required
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
        <div class="font__ash pb-3">Upload Images of property</div>
      <v-row>
        <imgUpload @imageAdd="addImage"/>
        <imgViewer v-for="(image, index) in body.images" :key="index" :img="image"/>
      </v-row>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {Property} from "../../utils/models";
let imgView = true;
let componentId = "@/components/dashboard/imgview.vue";
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
  }
  public setPlace(e: string): void {
      this.body.location = e;
    }
  public addImage(e: object): void {
    imgView = true;
    componentId = "true";
      this.body.images.push(e);
    }
}
</script>
