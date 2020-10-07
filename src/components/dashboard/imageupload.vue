<template>
  <div class="ma-2 blue-upload-box" @click="pickImage">
    <v-icon color="#ffffff" size="45">mdi-plus</v-icon>
    <input type="file" class="img" @change="sendImage" />
  </div>
</template>
<script>
import { imgCheck } from "@/utils/helpers";
import { notify } from "@/utils/alert";
export default {
  name: "Image-Upload",
  methods: {
    pickImage() {
      document.querySelector(".img").click();
    },
    sendImage() {
      const fileInput = document.querySelector(".img");
      const file = fileInput.files[0];
      if (!imgCheck(file)) {
        notify.error("Wrong format of file. Only images are allowed", "Bad Request")
        throw "error";
      } 
      this.$emit("imageAdd", file);
    }
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
  display: flex;
  align-content: center;
  justify-content: center;
}
.img {
  display: none;
}
</style>