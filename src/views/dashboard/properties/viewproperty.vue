<template>
  <div class="pa-4">
    <section>
      <div class="font__purple pl-6 pb-3 font__bold font__xx__md">
        {{ $format(property.type ? property.type : " ") }} for sale
      </div>
      <v-row class="border__bottom ml-2 mr-2 pb-4">
        <v-col cols="12" md="7" sm="11">
          <viewImageBig :img="property.images[0]" />
          <v-row class="pt-3">
            <viewImageSmall
              :img="property.images[0]"
              v-for="(img, index) in 5"
              :key="index"
            />
            <viewImageNumber :number="19" />
          </v-row>
        </v-col>
        <v-col class="d-flex align-center flex-column" cols="12" md="5" sm="12">
          <cavatar :initials="'HE'" :size="105" />
          <div>
            <router-link :to="`/properties/edit-property/${property._id}`">
              <cbutton
                :text="'Edit Property'"
                :pl="'pl-3'"
                :pr="'pr-3'"
                class="mt-4"
              />
            </router-link>
            <cbutton
              :text="'Delete Property'"
              :pl="'pl-3'"
              :pr="'pr-3'"
              class="mt-4"
              @click="delProperty"
            />
          </div>
        </v-col>
      </v-row>
    </section>
    <section>
      <div class="font__purple pl-6 pb-3 font__bold font__xx__md pt-6">
        Property's details
      </div>
      <v-row class="d-flex justify-space-between">
        <v-col cols="12" md="6" sm="12">
          <div class="pl-6 pb-3 font__bold font__xx__md">
            {{ $format(property.type ? property.type : " ") }}
          </div>
          <v-row class="pl-4 pr-2">
            <v-col cols="12" sm="12" md="6" class="d-flex align-center">
              <div class="pr-2">
                <v-icon color="#FFBC44">mdi-map-marker-radius</v-icon>
              </div>

              <span class=" font__x__sm font__bold">
                {{ property.location.route }}, {{ property.location.locality }},
                {{ property.location.country }}
              </span>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="d-flex align-center">
              <span class="pr-3 d-flex align-center">
                <button>
                  <v-icon color="#FFBC44" class="mr-2">mdi-thumb-up</v-icon>
                </button>
                <span class=" font__x__sm font__bold">
                  400
                </span>
              </span>
              <span class="pl-3 d-flex align-center">
                <button>
                  <v-icon color="#FFBC44" class="mr-2">mdi-thumb-down</v-icon>
                </button>

                <span class=" font__x__sm font__bold">
                  400
                </span>
              </span>
            </v-col>
          </v-row>
          <v-row class="pl-4 pr-2 pt-3">
            <v-col
              cols="12"
              sm="12"
              md="6"
              class="d-flex align-center font__x__sm font__bold"
            >
              On sale
            </v-col>
            <v-col cols="12" sm="12" md="6" class="d-flex align-center">
              <span class="d-flex align-center">
                <v-icon color="#FFBC44" class="mr-2" size="20"
                  >mdi-clock</v-icon
                >

                <span class=" font__x__sm font__bold">
                  <b
                    >Posted:
                    {{
                      property.createdAt
                        ? `${new Date(property.createdAt).getDay()} ${
                            months[new Date(property.createdAt).getMonth()]
                          } ${new Date(property.createdAt).getFullYear()}`
                        : "03 Mar 2020"
                    }}
                  </b>
                </span>
              </span>
            </v-col>
          </v-row>
          <v-row class="pl-4 pr-2 pt-3">
            <v-col cols="12" sm="12" md="4" class=" font__x__sm font__bold">
              <cavatar :size="45" :icon="'mdi-bed'" class="mx-auto" />
              <div class="text-center pt-3">
                {{ property.noOfRooms }} bedrooms
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="4" class="font__x__sm font__bold">
              <cavatar :size="45" :icon="'mdi-shower'" class="mx-auto" />
              <div class="text-center pt-3">
                {{ property.bathrooms }} bathrooms
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="4" class="font__x__sm font__bold">
              <cavatar :size="45" :icon="'mdi-car'" class="mx-auto" />
              <div class="text-center pt-3">{{ property.parkingSpace }}</div>
            </v-col>
          </v-row>
          <div class="details__container pa-4 mt-6 ml-4">
            <div class="font__sm font__bold">Condition of property</div>
            <div class="font__sm mt-3">
              {{
                property.condition
                  ? property.condition
                  : "No extra information was added about property"
              }}
            </div>
          </div>
          <div class="details__container pa-4 mt-6 ml-4">
            <div class="font__sm font__bold">More details</div>
            <div class="font__sm mt-3">
              {{
                property.extraComment
                  ? property.extraComment
                  : "No extra information was added about property"
              }}
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" sm="12">
          <propertyspecs
            :rooms="property.noOfRooms"
            :size="property.size"
            :furnitures="property.furnishing"
            :bathrooms="property.bathrooms"
          />
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PropertiesModule from "@/store/modules/properties";
import { getModule } from "vuex-module-decorators";
import { getToken } from "@/utils/cookies";
import { notify } from "@/utils/alert";
const token = getToken();

import axios from "axios";
let id: string;
@Component({
  name: "Properties",
  components: {
    viewImageBig: () => import("@/components/universal/imgview.vue"),
    viewImageNumber: () => import("@/components/universal/viewimgnumber.vue"),
    viewImageSmall: () => import("@/components/dashboard/imgview.vue"),
    propertyspecs: () => import("@/components/dashboard/propertyspecs.vue"),
  },
})
export default class Properties extends Vue {
  properties = getModule(PropertiesModule, this.$store);
  mounted() {
    id = this.$route.params.id;
    this.properties.getProperty(id);
  }
  get months() {
    return this.$store.state.app.months;
  }
  get property() {
    return this.$store.state.properties.property;
  }
  delProperty(): void {
    const data = {
      ownerId: this.$store.state.user.user._id,
      propId: id,
    };
    axios
      .delete(`${process.env.VUE_APP_API_URL}/api/v1/property/delete-property`, {
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.$router.push("/my-properties")
        notify.success(response.data.message, "Success", "topRight");
        console.log(response);
      })
      .catch((err) => {
        notify.error(err.response.data.message, "Error", "topRight");
        console.log(err.response);
      });
  }
}
</script>
<style>
.details__container {
  background-color: #eeeeee;
  border-radius: 5px;
}
</style>
