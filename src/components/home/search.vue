<template>
  <div
    class="search__cont justify-between d-flex pb-0   pa-3 box__shadow border__radius"
  >
    <cinput :label="'Enter type of property'" class="mb-n3 ml-3 mr-3" />

    <locations
      :label="'Enter Location of property(e.g Hill top avenue)'"
      class="mb-n3 ml-3 mr-3"
      @placesChange="setPlace"
    />
    <cbutton class="btn" :text="'Search Properties'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Search",
  components: {
    locations: () => import("@/components/dashboard/locations.vue"),
  },
})
export default class SearchComponent extends Vue {
  //   public setPlace(e: object): void {
  //     this.body.location = e; //getting the location from google places api
  //   }
}
</script>
<style lang="scss">
.search__cont {
  background-color: #ffffff;
  width: 90%;
}
.btn {
  width: 150px;
}
</style>
