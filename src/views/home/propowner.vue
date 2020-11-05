<template>
  <div class="pt-12 mt-8 pa-6 pl-14">
    <div class="font__purple font__sm font__bold pb-6">
      <span>Property Owner's Details </span>
    </div>
    <section class="d-flex pt-5">
      <cavatar :initials="'HE'" :size="155" />
      <div class="ml-6">
        <div class="font__bold">
          {{ $format(propertyOwner.name ? propertyOwner.name : "") }}
        </div>
        <div class="pt-6">
          <v-icon color="#FFBC44" class="mr-3">mdi-email </v-icon
          >{{ propertyOwner.email }}
        </div>
        <div class="pt-6">
          <v-icon color="#FFBC44" class="mr-3">mdi-phone </v-icon
          >{{ propertyOwner.phone }}
        </div>
        <div class="pt-6">
          <v-icon color="#FFBC44" class="mr-3">mdi-map-marker-radius </v-icon
          >Nigeria
        </div>
        <div>
          <a :href="`mailto:${propertyOwner.email}`">
            <button
              :class="[
                'green__btn',
                ' pb-3 pt-3 mt-6  font__x__sm add__button active',
              ]"
              style="width: 150px"
            >
              Email seller
            </button>
          </a>
        </div>
      </div>
    </section>
    <section>
      <div class="font__purple font__sm font__bold pb-6 pt-9">
        <span
          >Other properties owned by {{ $format(propertyOwner.name) }}
        </span>
      </div>
      <v-row class="pa-5 pt-0">
        <v-col
          v-for="(property, index) in sellerProperties"
          :key="index"
          md="3"
        >
          <property :property="property" />
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import PropertiesModule from "@/store/modules/properties";
import { getModule } from "vuex-module-decorators";
@Component({
  name: "PropOwnerDetails",
  components: {
    property: () => import("@/components/home/property.vue"),
  },
})
export default class PropOwnerDetails extends Vue {
  properties = getModule(PropertiesModule, this.$store);
  get propertyOwner() {
    return this.$store.state.properties.propertyOwner;
  }
  get sellerProperties() {
    return this.$store.state.properties.sellerProperties;
  }
  mounted() {
    this.properties.getPropertyOwner(this.$route.params.id);
    this.properties.getSellerProperties(this.$route.params.id);
  }
}
</script>
