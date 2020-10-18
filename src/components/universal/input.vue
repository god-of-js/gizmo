<template>
  <v-text-field
    :label="label"
    id="input"
    outlined
    :type="type"
    v-on="$listeners"
  ></v-text-field>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  name: "input"
})
export default class Input extends Vue {
  @Prop({ default: "" }) readonly label!: string;
  @Prop({ required: false, type: String, default: "text" })
  readonly type!: string;
}
</script>
