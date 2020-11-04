<template>
  <div class="pt-12 mt-8 pa-6">
    <div class="font__purple font__sm font__bold d-flex align-center">
      <span> Owner's Details </span>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import PropertiesModule from "@/store/modules/properties";
import { getModule } from "vuex-module-decorators";
@Component({
  name: "PropOwnerDetails"
})
export default class PropOwnerDetails extends Vue {
  properties = getModule(PropertiesModule, this.$store);
 mounted() {
     this.properties.getPropertyOwner(this.$route.params.id)
 }
}
</script>