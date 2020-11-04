<template>
  <router-link :to="`/home/view-property/${property._id}`" class="router__link "
    ><div
      class="property__card active font__white d-flex justify-end pa-3 flex-column"
      :style="
        `background-image: linear-gradient(to top, #000 0%,  rgba(40, 31, 71, 0) 90%), url(${property.images[0]});`
      "
    >
      <div class="d-flex justify-space-between">
        <span> {{ property.type }} </span>
        <span>&#8358; {{ property.price }} </span>
      </div>
      <div class=" font__x__sm">
        <v-icon color="#FFBC44" style="font-size: 1.4em" class="mr-2"
          >mdi-map-marker-radius</v-icon
        >
        {{ property.location.route }}, {{ property.location.country }}
      </div>
    </div>
  </router-link>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Property } from "@/utils/models";
@Component({
  name: "dashboard-card",
})
export default class DashboardCard extends Vue {
  @Prop() property!: Property;
  get userName() {
    return this.$store.state.user.user.name;
  }
}
</script>
<style>
.property__card {
  width: 280px;
  height: 300px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  background-color: #000000;
}
.property__card:hover {
  -webkit-box-shadow: 1px 2px 3px 4px #ccc; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow: 1px 2px 3px 4px #ccc; /* Firefox 3.5 - 3.6 */
  box-shadow: 1px 2px 3px 4px #ccc; /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
}
</style>
