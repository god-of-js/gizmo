<template>
  <div class="home">
    <section class="home__first__layer d-flex align-center">
      <span class="font__white font__bold ml-12 font__x__md"> Properties</span>
    </section>
    <section class="d-flex mt-n7 justify-center">
      <search />
    </section>
    <v-row class="pa-5 d-flex justify-center"> 
      <v-col v-for="(property, index) in universalProperty" :key="index" md="3"> 
        <property  :property="property"/>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PropertiesModule from "@/store/modules/properties";
import { getModule } from "vuex-module-decorators";

@Component({
  name: "home",
  components: {
    search: () => import("@/components/home/search.vue"),
    property: () => import("@/components/home/property.vue"),
  },
})
export default class Home extends Vue {
  properties = getModule(PropertiesModule, this.$store);
  get userName() {
    return this.$store.state.user.user.name;
  }
  get universalProperty() {
    return this.$store.state.properties.universalProperty;
  }
  mounted() {
      this.properties.getAllProperties();
  }
}
</script>

<style>
.home__first__layer {
  background-image: url("/img/homeimg.svg");
  height: 60vh;
  background-position: right;
  background-size: 800px 1700px;
  width: 100%;
  background-color: #1c528a;
}
</style>
