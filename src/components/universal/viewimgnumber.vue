<template>
  <div class="ma-2 blue-upload-box d-flex align-center">
    <v-icon color="white">mdi-plus </v-icon>
    {{ number }}
  </div>
</template>
<script>
import { imgCheck } from "@/utils/helpers";
import { notify } from "@/utils/alert";
export default {
  name: "Image-Upload",
  props: {
    number: Number
  }
};
</script>
<style scoped>
.blue-upload-box {
  background-color: #1c528a;
  padding: 7px;
  border-radius: 8px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  color: #ffffff;
  display: flex;
  align-content: center;
  justify-content: center;
}
.img {
  display: none;
}
</style>
