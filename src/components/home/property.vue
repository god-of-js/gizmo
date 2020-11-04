<template> 
    <div class="property__card" :style="`background-image: url(${property.images[0]});`"> 
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import {Property} from "@/utils/models"
@Component({
  name: "dashboard-card"
})
export default class DashboardCard extends Vue {
  @Prop() property!: Property;
  get userName() {
    return this.$store.state.user.user.name;
  }
}
</script>
<style> 
.property__card{
    width: 280px;
    height: 300px;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    background-size: cover;
    background-position: center;
}
</style>