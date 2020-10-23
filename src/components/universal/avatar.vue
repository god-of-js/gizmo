<template> 
<v-avatar
          color="#FFBC44"
          :size="size"
          class="font__sm d-flex justify-center"
        >
          <img v-if="false" />
          <span class="white--text headline" v-if="!icon">HE</span>
          <v-icon color="#000000" v-if="icon"> {{icon}} </v-icon>
        </v-avatar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "dashboard-card"
})
export default class DashboardCard extends Vue {
  @Prop() initials!: string;
  @Prop() bgColor!: string;
  @Prop() size!: number;
  @Prop() image!: string;
  @Prop() icon!: string;
  get userName() {
    return this.$store.state.user.user.name;
  }
}
</script>