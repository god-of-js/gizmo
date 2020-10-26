<template>
  <div :style="`background-image: url(${img})`" class="img__cont"></div>
</template>
<script>
export default {
  name: "Image-view",
  props: {
    img: String
  }
};
</script>
<style>
.img__cont {
  height: 250px;
  border-radius: 15px;
  background-size: cover;
  background-color: #1c528a;
}
</style>
