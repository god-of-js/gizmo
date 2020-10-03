<template>
<v-text-field
    :label="label"
    ref="googleplaces"
    v-model="addr"
    outlined
    type="text"
  />
</template>
<script>
let vueApp
export default {
  props: {
    label: String,
    isOutlined: Boolean,
    value: String
  },
  data: () => ({
      lon: "",
      lat: "",
      addr: " "
  }),
  watch: {
    value(newState){
      this.addr = newState
    },
    lon(newState, oldState) {
      this.$emit("placesChange", vueApp.addr);
    },
    addr(newState, oldState) {
      this.$emit("placesChange", vueApp.addr);
    },
    lat(newState, oldState) {
      this.$emit("placesChange", vueApp.addr);
    }
  },
  mounted() {
    vueApp = this;
    this.addr = this.value
    // eslint-disable-next-line
    this.autocomplete = new google.maps.places.Autocomplete(
      this.$refs.googleplaces.$refs.input,
      { types: ["geocode"] }
    );
    this.autocomplete.addListener("place_changed", () => {
      const place = this.autocomplete.getPlace();
      const address = place.formatted_address;
      const lat = place.geometry.location.lat();
      const lon = place.geometry.location.lng();
      this.addr = address;
      this.lon = lon;
      this.lat = lat;
    });
  }
};
</script>