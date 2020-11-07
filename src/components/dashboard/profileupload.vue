<template>
  <button class="ml-n10 edit__button pa-2" @click="pickImage">
    <v-icon style="font-size: 1.2em;" color="#000">mdi-lead-pencil</v-icon>
    <input type="file" class="img" @change="sendImageToCloud" />
  </button>
</template>
<script>
import { imgCheck } from "@/utils/helpers";
import { notify } from "@/utils/alert";
import { upload } from "@/services/cloudinary";
import { Api } from "@/api";
export default {
  name: "Image-Upload",
  methods: {
    pickImage() {
      document.querySelector(".img").click();
    },
    async sendImageToCloud() {
      const fileInput = document.querySelector(".img");
      const file = fileInput.files[0];
      if (!imgCheck(file)) {
        notify.error(
          "Wrong format of file. Only images are allowed",
          "Bad Request"
        );
        throw "error";
      }
      this.$emit("imageAdd", file);
      const formData = new FormData();
      formData.append(`file`, file);
      formData.append("upload_preset", "xbcrtnu5");
      const url = await upload(formData);
      this.submit(url);
    },
    submit(url) {
      console.log(this.$store.state.user.user._id);
      Api()
        .patch("/api/v1/user/update-avatar", {
          avatar: url,
          id: this.$store.state.user.user._id
        })
        .then(response => {
          this.$emit("done",response.data.data)
          notify.success(response.data.message, "Success", "topRight");
        })
        .catch(err => {
          this.$emit("done")
          notify.error(err.response.data.message, "Error", "topRight");
        });
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
.edit__button {
  z-index: 4;
  background-color: #ffbc44;
  border-radius: 50%;
}
.edit__button:hover {
  background-color: #fbb034;
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
}
</style>
