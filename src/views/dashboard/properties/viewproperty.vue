<template>
  <div></div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import {AxiosResponse} from "axios"
import PropertiesModule from "@/store/modules/properties";
import { getModule } from "vuex-module-decorators";
let id;
@Component({
  name: "Properties"
})
export default class Properties extends Vue {
  properties = getModule(PropertiesModule, this.$store);
  mounted() {
    // eslint-disable-next-line
    id = this.$router.history.current.params.id;
    this.properties.getProperty(id);
  }
  get sellerProperties() {
    return this.$store.state.properties.sellerProperties;
  }
}
</script>
