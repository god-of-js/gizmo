<template>
  <div class="ma-2 blue-upload-box">
    <img :src="img" alt="">
  </div>
</template>
<script>
export default {
  name: "Image-view",
  props: {
      img: File
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
}
.img {
  display: none;
}
</style>