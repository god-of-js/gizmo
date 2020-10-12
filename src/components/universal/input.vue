<template>
  <v-text-field
    :label="label"
    id="input"
    outlined
    :type="type"
  ></v-text-field>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class input extends Vue {
  @Prop({default: 'John doe'}) readonly label!: string
  @Prop({required: false, type: String, default: 'text'}) readonly type!: string
}
</script>