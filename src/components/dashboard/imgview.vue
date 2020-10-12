<template>
  <div class="ma-2 blue-upload-box">
    <img :src="img" alt="" />
  </div>
</template>
<script>
export default {
  name: "Image-view",
  props: {
    img: String
  }
};
</script>
<style scoped>
.blue-upload-box {
  background-color: #1c528a;
  border-radius: 8px;
  width: 60px;
  height: 60px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
