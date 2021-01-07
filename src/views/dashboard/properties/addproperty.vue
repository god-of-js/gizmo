<template>
  <div class="pa-9">
    <form @submit.prevent="addProperty">
      <v-row class="pb-0">
        <v-col sm="12" md="6" xsm="11" class="pb-0 mx-auto">
          <v-text-field
            outlined
            :label="'Property Type(e.g flat, land or duplex)'"
            v-model="body.type"
          />
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            outlined
            :label="'Property Size(specify measuring unit)'"
            v-model="body.size"
          />
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            outlined
            :label="'Furnishing(e.g chairs or none)'"
            v-model="body.furnishing"
          />
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            outlined
            :label="'Bathrooms(e.g 4 or none)'"
            v-model="body.bathrooms"
          />
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            outlined
            :label="'Parking space(e.g 2 car parking space)'"
            v-model="body.parkingSpace"
          />
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            outlined
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
          <v-text-field
            outlined
            :label="'Price of property'"
            v-model="body.price"
            :type="'number'"
          />
        </v-col>

        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <locations
            :label="'Enter Location of property(e.g Hill top avenue)'"
            @placesChange="setPlace"
          />
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            outlined
            :label="'Local Government'"
            v-model="body.state"
          />
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            outlined
            :label="'Closest Landmark(a very popular place)'"
            v-model="body.landmark"
          />
        </v-col>
        <v-col md="12" class="pb-0">
          <v-text-field
            outlined
            :label="'Condition of property(e.g newly built e.t.c)'"
            v-model="body.condition"
          />
        </v-col>
        <v-col class="pb-0">
          <v-text-field
            outlined
            :label="
              'Extra Information about property: Indicate things like reason for the sale(optional)'
            "
            class="mb-0"
            v-model="body.extraComment"
          />
        </v-col>
      </v-row>
      <div class="font__ash pb-3">Upload Images of property</div>
      <v-row>
        <imgUpload @imageAdd="addImage" />
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
import { Property } from "@/utils/models";
import { notify } from "@/utils/alert";
import { upload } from "@/services/cloudinary";
import { Api } from "@/api";
import PropertiesModule from "@/store/modules/properties";
import { getModule } from "vuex-module-decorators";
let id;
@Component({
  name: "Add-Property",
  components: {
    locations: () => import("@/components/dashboard/locations.vue"),
    imgUpload: () => import("@/components/dashboard/imageupload.vue"),
    imgViewer: () => import("@/components/dashboard/imgview.vue")
  }
})
export default class AddProperty extends Vue {
  properties = getModule(PropertiesModule, this.$store);
  body: Property = {
    type: "",
    size: "",
    noOfRooms: "",
    extraComment: "",
    location: null,
    state: "",
    landmark: "",
    images: [],
    ownerId: "",
    price: "",
    furnishing: "",
    bathrooms: "",
    condition: "",
    parkingSpace: "",
    propertyId: ""
  };
  disabled = true;
  loading = false;
  images: string[] = [];
  imagesObj: any[] = [];
  get property() {
    return this.$store.state.properties.property;
  }
  @Watch("body", {
    immediate: true,
    deep: true
  })
  onPropertyChanged(value: Property) {
    if (
      value.state &&
      value.landmark &&
      value.location &&
      value.price &&
      value.type &&
      value.size
    ) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
  @Watch("property", {
    immediate: true,
    deep: true
  })
  watchState(value: Property) {
    console.log(this.$route.params.id);
    if (value.type && this.$route.params.id) {
      this.body.type = value.type;
      this.body.size = value.size;
      this.body.noOfRooms = value.noOfRooms;
      this.body.condition = value.condition;
      this.body.furnishing = value.furnishing;
      this.body.ownerId = value.ownerId;
      this.body.price = value.price;
      this.body.parkingSpace = value.parkingSpace;
      this.body.bathrooms = value.bathrooms;
      this.body.landmark = value.landmark;
      this.body.state = value.state;
      this.body.location = value.location;
      this.body.extraComment = value.extraComment;
      this.imagesObj.push(...value.images);
      this.images.push(...value.images);
    }
  }
  mounted() {
    id = this.$route.params.id;
    console.log(this.$route.params.id);
    if (this.$route.params.id) {
      this.properties.getProperty(id);
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
    setTimeout(() => {
      this.imagesObj.push(e);
      //added the timeline due to error. it needed an async would be worked on subsequently.
      this.images.push(url); //adding it to the images arr for view.
    }, 100);
  }
  public async addProperty() {
    if (this.imagesObj.length === 0) {
      notify.error("at least one image must be provided", "Error", "topRight");
      return "err";
    }
    this.loading = true;
    this.body.ownerId = this.$store.state.user.user._id;
    this.body.price = Number(this.body.price);
    this.body.noOfRooms = Number(this.body.noOfRooms);
    if (this.$route.params.id) this.body.propertyId = this.$route.params.id;
    for (let i = 0; i < this.imagesObj.length; i++) {
      const formData = new FormData();
      let url;
      if (typeof this.imagesObj[i] === "string") url = this.imagesObj[i];
      else {
        formData.append(`file`, this.imagesObj[i]);
        formData.append("upload_preset", "xbcrtnu5");
        url = await upload(formData);
      }
      this.body.images.push(url);
    }
    console.log(this.body, "body images");
    Api()
      .post("/api/v1/property/add-property", this.body)
      .then(result => {
        notify.success(result.data.message, "Success", "topRight");
        this.disabled = false;
        this.loading = false;
      })
      .catch(err => {
        notify.error(err.response.data.message, "Error", "topRight");
        this.disabled = false;
        this.loading = false;
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
