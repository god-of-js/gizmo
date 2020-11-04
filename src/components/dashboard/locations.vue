<template>
  <vue-google-autocomplete
    id="map"
    classname="form-control"
    :placeholder="label"
    v-on:placechanged="getAddressData"
  >
  </vue-google-autocomplete>
</template>
<script>
let vueApp;
import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  props: {
    label: String,
    isOutlined: Boolean,
    value: String,
  },
  components: { VueGoogleAutocomplete },
  mounted() {
    vueApp = this;
    this.addr = this.value;
    //eslint-disable-next-line
  },
  methods: {
    getAddressData: function(addressData, placeResultData, id) {
      this.$emit("placesChange", addressData);
    },
  },
};
</script>
<style>
#map {
  width: 100%;
  height: 46px;
  padding-left: 12px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.87);
}
</style>
