<template>
  <vue-google-autocomplete
    ref="address"
    id="map"
    classname="form-control"
    placeholder="Please type your address"
    v-on:placechanged="getAddressData"
    country="ng"
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
  components: {
    VueGoogleAutocomplete,
  },
  data: () => ({
    addr: " ",
  }),
  watch: {
    value(newState) {
      this.addr = newState;
    },
    addr(newState, oldState) {
      this.$emit("placesChange", vueApp.addr);
    },
  },
  mounted() {
    this.$refs.address.focus();
    vueApp = this;
    this.addr = this.value;
  },
  methods: {
    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function(addressData, placeResultData, id) {
      this.addr = addressData;
      console.log(this.addr)
    },
  },
};
</script>
