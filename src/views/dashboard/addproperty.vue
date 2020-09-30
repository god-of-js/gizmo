<template>
  <div class="pa-9">
    <form action="">
      <v-row class="pb-0">
        <v-col sm="6" md="6" xsm="11"  class="pb-0">
          <v-text-field
            label="Property Type"
            id="input"
            outlined
            required
            type="text"
          ></v-text-field>
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            label="Property Size"
            id="input"
            outlined
            required
            type="email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="pb-0">
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            label="Number of Rooms Available"
            id="input"
            outlined
            required
            type="text"
          ></v-text-field>
        </v-col>
        <v-col sm="6" md="6" xsm="11" class="pb-0">
          <v-text-field
            label="Purpose Of Listing property"
            id="input"
            outlined
            required
            type="email"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="pb-0">
        <v-col md="12" class="pb-0">
          <v-text-field
            label="Location of Property"
            id="input"
            outlined
            required
            type="text"
          ></v-text-field>
        </v-col>
      </v-row>
       <v-row>
           <div class="font__ash pl-3">Upload Images of property</div>

       </v-row>
    </form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Register"
})
export default class AddProperty extends Vue {
    
}
</script>