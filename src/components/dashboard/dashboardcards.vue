<template>
  <div
    class="dashboard__card pa-3"
    :style="
      `background-color: ${bgColor};background-image: url(${bgImg}); background-position: ${bgPos}; background-size: ${bgSize}`
    "
  >
    <div class="mb-16 font__md">0</div>
    <div class="sub__div">{{ text }}</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "dashboard-card"
})
export default class DashboardCard extends Vue {
  @Prop() value!: string;
  @Prop() bgColor!: string;
  @Prop() bgImg!: string;
  @Prop() bgPos!: string;
  @Prop() bgSize!: string;
  @Prop() text!: string;
  get userName() {
    return this.$store.state.user.user.name;
  }
}
</script>
<style lang="scss" scoped>
.dashboard__card {
  height: 240px;
  border-radius: 9px;
  position: relative;
  color: #ffffff;
  display: flex;
  align-items: center;
  .sub__div {
    position: absolute;
    bottom: 14px;
  }
}
</style>