<template>
  <v-text-field
    outlined
    :label="label"
    :type="type"  
    v-on="$listeners"
  ></v-text-field>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "custom-input"
})
export default class Input extends Vue {
  @Prop({ default: "" }) readonly label!: string;
  @Prop({ required: false, type: String, default: "text" })
  readonly type!: string;
}
</script>
